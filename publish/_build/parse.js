// 問題ファイルと解説ファイルを解析してJSONデータを生成するビルド用スクリプト
const fs = require('fs');
const path = require('path');

function mdInlineToHtml(text) {
  // **太字** をHTMLに変換し、簡単なエスケープを行う
  let escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  escaped = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  return escaped;
}

function normalize(text) {
  return text.replace(/\r\n/g, '\n');
}

function parseQuestions(mdText) {
  mdText = normalize(mdText);
  const blocks = mdText.split(/\n## Q(\d+)\n/).slice(1);
  const questions = [];
  for (let i = 0; i < blocks.length; i += 2) {
    const num = parseInt(blocks[i], 10);
    const body = blocks[i + 1];
    const lines = body.split('\n');

    const questionLines = [];
    const choices = [];
    for (const line of lines) {
      const qMatch = line.match(/^####\s?(.*)$/);
      if (qMatch) {
        questionLines.push(qMatch[1].trim());
        continue;
      }
      const cMatch = line.match(/^- \[( |x)\]\s?(.*)$/);
      if (cMatch) {
        choices.push({
          correct: cMatch[1] === 'x',
          text: cMatch[2].trim(),
        });
      }
    }

    questions.push({
      number: num,
      id: `Q${String(num).padStart(3, '0')}`,
      questionHtml: questionLines.map(mdInlineToHtml).join('<br>'),
      choices: choices.map((c) => ({
        correct: c.correct,
        html: mdInlineToHtml(c.text),
      })),
    });
  }
  return questions;
}

function parseExplanations(mdText) {
  mdText = normalize(mdText);
  const blocks = mdText.split(/\n## Q(\d+)\n/).slice(1);
  const map = {};
  for (let i = 0; i < blocks.length; i += 2) {
    const num = parseInt(blocks[i], 10);
    let body = blocks[i + 1];
    // 次の問題の手前までを対象にする（分割済みなので不要だが安全のためトリム）
    body = body.trim();

    const kaisetsuMatch = body.match(/### 解説\s*([\s\S]*?)\n#### 正解/);
    const seikaiMatch = body.match(/#### 正解\s*([\s\S]*?)\n#### 不正解/);
    const fuseikaiMatch = body.match(/#### 不正解\s*([\s\S]*?)\n---\s*\n\s*### 試験のポイント/);
    const pointMatch = body.match(/### 試験のポイント\s*([\s\S]*)$/);

    const explanationHtml = kaisetsuMatch
      ? kaisetsuMatch[1]
          .trim()
          .split(/\n{2,}/)
          .map((p) => `<p>${mdInlineToHtml(p.trim())}</p>`)
          .join('')
      : '';

    const correctBlock = seikaiMatch ? seikaiMatch[1].trim() : '';
    const correctHtml = correctBlock
      .split(/\n{2,}/)
      .map((p) => `<p>${mdInlineToHtml(p.trim())}</p>`)
      .join('');

    let incorrectHtml = '';
    if (fuseikaiMatch) {
      const entries = fuseikaiMatch[1].trim().split(/\n{2,}(?=\*\*)/);
      incorrectHtml = entries
        .map((entry) => {
          const paras = entry
            .trim()
            .split(/\n{2,}/)
            .map((p) => `<p>${mdInlineToHtml(p.trim())}</p>`)
            .join('');
          return `<div class="incorrect-item">${paras}</div>`;
        })
        .join('');
    }

    let pointsHtml = '';
    if (pointMatch) {
      let pointsText = pointMatch[1].trim();
      pointsText = pointsText.replace(/\n---\s*$/, '').trim();
      const items = pointsText
        .split('\n')
        .filter((l) => l.trim().startsWith('-'))
        .map((l) => `<li>${mdInlineToHtml(l.trim().replace(/^-\s?/, ''))}</li>`)
        .join('');
      pointsHtml = `<ul>${items}</ul>`;
    }

    map[num] = {
      explanationHtml,
      correctHtml,
      incorrectHtml,
      pointsHtml,
    };
  }
  return map;
}

function build(sectionFile, explanationFile, outFile) {
  const qText = fs.readFileSync(sectionFile, 'utf8');
  const eText = fs.readFileSync(explanationFile, 'utf8');
  const questions = parseQuestions(qText);
  const explanations = parseExplanations(eText);

  const merged = questions.map((q) => ({
    ...q,
    ...explanations[q.number],
  }));

  const jsContent = `// 自動生成ファイル: publish/_build/parse.js により生成\nconst QUESTIONS = ${JSON.stringify(merged, null, 2)};\n`;
  fs.writeFileSync(outFile, jsContent, 'utf8');
  console.log(`書き出し完了: ${outFile} (${merged.length}問)`);
}

// 分野ごとの定義（ページ番号とMarkdownファイル名の対応）
const SECTIONS = [
  { page: 'page01', baseName: '01_クラウドの概念', title: 'クラウドの概念' },
  { page: 'page02', baseName: '02_セキュリティ', title: 'セキュリティ' },
  { page: 'page03', baseName: '03_AWSサービス', title: 'AWSサービス' },
  { page: 'page04', baseName: '04_料金とサポート', title: '料金とサポート' },
];

const root = path.resolve(__dirname, '..', '..');

// 引数でページを指定できる。省略時は全分野を生成する
// 例: node parse.js page02
const targets = process.argv.length > 2
  ? SECTIONS.filter((s) => process.argv.slice(2).includes(s.page))
  : SECTIONS;

if (targets.length === 0) {
  console.error('対象が見つかりません。page01〜page04を指定してください。');
  process.exit(1);
}

for (const section of targets) {
  build(
    path.join(root, `${section.baseName}.md`),
    path.join(root, `${section.baseName}_解説.md`),
    path.join(root, 'publish', 'assets', 'data', `${section.page}.js`)
  );
}
