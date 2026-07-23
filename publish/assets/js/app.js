// 問題ページ共通の描画・採点ロジック
(function () {
  function renderQuiz(questions, container) {
    const state = questions.map(() => ({ checked: false, selectedIndex: null }));

    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    function updateProgress() {
      const answered = state.filter((s) => s.checked).length;
      const correct = state.filter((s, i) => s.checked && questions[i].choices[s.selectedIndex]?.correct).length;
      const total = questions.length;
      if (progressFill) {
        progressFill.style.width = `${(answered / total) * 100}%`;
      }
      if (progressText) {
        progressText.textContent = `回答済み ${answered} / ${total} 問（正解 ${correct} 問）`;
      }
    }

    questions.forEach((q, qIndex) => {
      const card = document.createElement('section');
      card.className = 'question-card';
      card.id = q.id;

      const numberEl = document.createElement('div');
      numberEl.className = 'q-number';
      numberEl.textContent = `問題 ${q.number}`;
      card.appendChild(numberEl);

      const textEl = document.createElement('div');
      textEl.className = 'q-text';
      textEl.innerHTML = q.questionHtml;
      card.appendChild(textEl);

      const list = document.createElement('ul');
      list.className = 'choice-list';
      const inputName = `${q.id}-choice`;

      q.choices.forEach((choice, cIndex) => {
        const li = document.createElement('li');
        li.className = 'choice-item';

        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = inputName;
        input.value = String(cIndex);
        input.addEventListener('change', () => {
          state[qIndex].selectedIndex = cIndex;
          checkBtn.disabled = false;
        });

        const span = document.createElement('span');
        span.innerHTML = choice.html;

        label.appendChild(input);
        label.appendChild(span);
        li.appendChild(label);
        list.appendChild(li);
      });
      card.appendChild(list);

      const actionRow = document.createElement('div');
      const checkBtn = document.createElement('button');
      checkBtn.type = 'button';
      checkBtn.className = 'check-btn';
      checkBtn.textContent = '回答確認';
      checkBtn.disabled = true;

      const badge = document.createElement('span');
      badge.className = 'result-badge';
      badge.style.display = 'none';

      actionRow.appendChild(checkBtn);
      actionRow.appendChild(badge);
      card.appendChild(actionRow);

      const answerPanel = document.createElement('div');
      answerPanel.className = 'answer-panel';

      const explanationDiv = document.createElement('div');
      explanationDiv.className = 'explanation';
      explanationDiv.innerHTML = `<h3>解説</h3>${q.explanationHtml}`;
      answerPanel.appendChild(explanationDiv);

      const correctBox = document.createElement('div');
      correctBox.className = 'correct-box';
      correctBox.innerHTML = `<h3>正解</h3>${q.correctHtml}`;
      answerPanel.appendChild(correctBox);

      const incorrectBox = document.createElement('div');
      incorrectBox.innerHTML = `<h3>不正解の選択肢</h3>${q.incorrectHtml}`;
      answerPanel.appendChild(incorrectBox);

      const pointsBox = document.createElement('div');
      pointsBox.className = 'points-box';
      pointsBox.innerHTML = `<h3>試験のポイント</h3>${q.pointsHtml}`;
      answerPanel.appendChild(pointsBox);

      card.appendChild(answerPanel);

      checkBtn.dataset.mode = 'confirm';

      checkBtn.addEventListener('click', () => {
        const items = list.querySelectorAll('.choice-item');
        const radios = list.querySelectorAll('input[type="radio"]');

        if (checkBtn.dataset.mode === 'retry') {
          // 再回答: 前回の回答結果をクリアして選び直せるようにする
          state[qIndex].checked = false;
          state[qIndex].selectedIndex = null;

          radios.forEach((r) => {
            r.disabled = false;
            r.checked = false;
          });
          items.forEach((item) => {
            item.classList.remove('is-correct', 'is-incorrect-selected');
          });
          badge.style.display = 'none';
          answerPanel.classList.remove('is-open');

          checkBtn.textContent = '回答確認';
          checkBtn.dataset.mode = 'confirm';
          checkBtn.disabled = true;
          updateProgress();
          return;
        }

        if (state[qIndex].selectedIndex === null) return;
        state[qIndex].checked = true;

        radios.forEach((r) => (r.disabled = true));

        items.forEach((item, cIndex) => {
          const choice = q.choices[cIndex];
          if (choice.correct) {
            item.classList.add('is-correct');
          } else if (cIndex === state[qIndex].selectedIndex) {
            item.classList.add('is-incorrect-selected');
          }
        });

        const isCorrect = q.choices[state[qIndex].selectedIndex].correct;
        badge.textContent = isCorrect ? '正解' : '不正解';
        badge.className = `result-badge ${isCorrect ? 'correct' : 'incorrect'}`;
        badge.style.display = 'inline-block';

        answerPanel.classList.add('is-open');
        updateProgress();

        if (isCorrect) {
          // 正解した問題は再回答の必要がないため確定させる
          checkBtn.textContent = '正解済み';
          checkBtn.dataset.mode = 'done';
          checkBtn.disabled = true;
        } else {
          // 不正解の場合は再回答できるようボタンを切り替える
          checkBtn.textContent = '再回答';
          checkBtn.dataset.mode = 'retry';
          checkBtn.disabled = false;
        }
      });

      container.appendChild(card);
    });

    updateProgress();
  }

  window.QuizApp = { renderQuiz };
})();
