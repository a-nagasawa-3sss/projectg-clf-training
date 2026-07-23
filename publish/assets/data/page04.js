// 自動生成ファイル: publish/_build/parse.js により生成
const QUESTIONS = [
  {
    "number": 1,
    "id": "Q001",
    "questionHtml": "新規プロジェクトでは、利用期間や利用量がまだ予測できません。<br>初期費用や長期契約を避け、必要な分だけ料金を支払いたい場合、最も適切な料金モデルはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "オンデマンドインスタンス"
      },
      {
        "correct": false,
        "html": "Savings Plans"
      },
      {
        "correct": false,
        "html": "Reserved Instances"
      },
      {
        "correct": false,
        "html": "Spot Instances"
      }
    ],
    "explanationHtml": "<p>この問題では、利用期間や利用量が予測できない新規プロジェクトに適したEC2の料金モデルを理解しているかが問われています。</p><p>オンデマンドインスタンスは、初期費用や長期契約が不要で、起動した時間（または秒）に応じて料金を支払う最も柔軟な料金モデルです。利用量が読めない立ち上げ期に最適です。</p>",
    "correctHtml": "<p><strong>A. オンデマンドインスタンス</strong></p><p>初期費用や長期契約が不要で、必要な分だけ利用して支払えるため、利用量が予測できない新規プロジェクトに最も適しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. Savings Plans</strong></p><p>1年または3年の利用コミットが前提の割引モデルであり、利用量が読めない段階には不向きです。</p></div><div class=\"incorrect-item\"><p><strong>C. Reserved Instances</strong></p><p>長期利用を約束することで割引を受けるモデルで、利用期間が予測できない場合には適しません。</p></div><div class=\"incorrect-item\"><p><strong>D. Spot Instances</strong></p><p>余剰キャパシティを安価に使えますが中断される可能性があり、初期の予測困難な用途向けの選択肢としては最適ではありません。</p></div>",
    "pointsHtml": "<ul><li>予測不能・短期・初期費用回避なら「オンデマンド」</li><li>Savings PlansとReserved Instancesは長期コミットが前提</li><li>Spotは中断許容ワークロード向け</li></ul>"
  },
  {
    "number": 2,
    "id": "Q002",
    "questionHtml": "システムは今後3年間、24時間365日ほぼ一定の負荷で稼働する予定です。<br>コンピューティングコストを最も削減できる選択肢はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "オンデマンドインスタンス"
      },
      {
        "correct": true,
        "html": "Savings Plans"
      },
      {
        "correct": false,
        "html": "Spot Instances"
      },
      {
        "correct": false,
        "html": "Dedicated Hosts"
      }
    ],
    "explanationHtml": "<p>この問題では、長期間ほぼ一定の負荷で稼働するシステムに対し、最もコストを削減できる料金モデルを理解しているかが問われています。</p><p>Savings Plansは、1年または3年の一定の利用量（時間あたりの使用額）をコミットすることで、オンデマンドより大幅な割引を受けられる料金モデルです。3年間安定稼働する用途で高い削減効果を発揮します。</p>",
    "correctHtml": "<p><strong>B. Savings Plans</strong></p><p>一定の利用をコミットすることで最大級の割引を受けられ、3年間一定負荷で稼働するシステムのコンピューティングコストを最も削減できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. オンデマンドインスタンス</strong></p><p>割引がなく、長期・一定稼働では割高になります。</p></div><div class=\"incorrect-item\"><p><strong>C. Spot Instances</strong></p><p>安価ですが中断される可能性があり、24時間365日一定稼働が必要な用途には適しません。</p></div><div class=\"incorrect-item\"><p><strong>D. Dedicated Hosts</strong></p><p>物理サーバーを専有する料金モデルで、ライセンス要件向けでありコスト削減が目的ではありません。</p></div>",
    "pointsHtml": "<ul><li>長期・一定稼働のコスト削減は「Savings Plans」または「Reserved Instances」</li><li>Spotは中断ありのため常時稼働システムには不適</li><li>Dedicated Hostsはライセンス・コンプライアンス要件向け</li></ul>"
  },
  {
    "number": 3,
    "id": "Q003",
    "questionHtml": "バッチ処理では、AWSからインスタンスを回収されても再実行できる設計になっています。<br>最も低コストで実行できる料金モデルはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "オンデマンドインスタンス"
      },
      {
        "correct": false,
        "html": "Savings Plans"
      },
      {
        "correct": false,
        "html": "Reserved Instances"
      },
      {
        "correct": true,
        "html": "Spot Instances"
      }
    ],
    "explanationHtml": "<p>この問題では、中断されても再実行できるバッチ処理に対し、最も低コストな料金モデルを理解しているかが問われています。</p><p>Spot Instancesは、AWSの余剰キャパシティを最大90%程度の割引で利用できる料金モデルです。ただしキャパシティが必要になるとAWSにより中断（回収）される可能性があるため、中断耐性のあるワークロードに適しています。</p>",
    "correctHtml": "<p><strong>D. Spot Instances</strong></p><p>余剰キャパシティを大幅な割引で利用でき、回収されても再実行できる設計のバッチ処理を最も低コストで実行できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. オンデマンドインスタンス</strong></p><p>割引がなく、Spotより高コストです。</p></div><div class=\"incorrect-item\"><p><strong>B. Savings Plans</strong></p><p>コミットによる割引はありますが、Spotほど安価ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Reserved Instances</strong></p><p>長期契約による割引モデルで、Spotほどの低コストにはなりません。</p></div>",
    "pointsHtml": "<ul><li>「中断OK・最安」なら「Spot Instances」</li><li>Spotは最大90%程度の割引が可能</li><li>バッチ処理・ステートレス処理・耐障害設計と相性が良い</li></ul>"
  },
  {
    "number": 4,
    "id": "Q004",
    "questionHtml": "AWSでは、利用したコンピューティングやストレージの使用量に応じて料金が決まります。<br>この料金体系を何と呼びますか。",
    "choices": [
      {
        "correct": false,
        "html": "サブスクリプション課金"
      },
      {
        "correct": false,
        "html": "固定料金制"
      },
      {
        "correct": true,
        "html": "従量課金（Pay as you go）"
      },
      {
        "correct": false,
        "html": "年間ライセンス課金"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの基本的な料金体系の名称を理解しているかが問われています。</p><p>AWSの多くのサービスは、利用したコンピューティングやストレージの使用量に応じて料金が決まる従量課金（Pay as you go）を採用しています。初期投資を抑え、使った分だけ支払える点がクラウドの大きな特徴です。</p>",
    "correctHtml": "<p><strong>C. 従量課金（Pay as you go）</strong></p><p>使用量に応じて料金が決まる仕組みであり、AWSの基本的な料金体系を正しく表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. サブスクリプション課金</strong></p><p>定額を継続的に支払う方式で、使用量に応じた課金ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. 固定料金制</strong></p><p>利用量にかかわらず一定額を支払う方式で、AWSの基本体系とは異なります。</p></div><div class=\"incorrect-item\"><p><strong>D. 年間ライセンス課金</strong></p><p>年単位のライセンス購入方式であり、使用量ベースの課金ではありません。</p></div>",
    "pointsHtml": "<ul><li>AWSの基本は「従量課金（Pay as you go）」</li><li>初期費用不要・使った分だけ支払い</li><li>クラウドのメリットである「変動費化」に対応する概念</li></ul>"
  },
  {
    "number": 5,
    "id": "Q005",
    "questionHtml": "AWSへ移行する前に、構成に応じた月額料金の概算を見積もりたいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Cost Explorer"
      },
      {
        "correct": true,
        "html": "AWS Pricing Calculator"
      },
      {
        "correct": false,
        "html": "AWS Budgets"
      },
      {
        "correct": false,
        "html": "AWS Billing Dashboard"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS移行前に構成に応じた月額料金の概算を見積もるサービスを理解しているかが問われています。</p><p>AWS Pricing Calculatorは、利用予定のサービスや構成を入力することで、事前におおよその月額・年間料金を試算できる無料ツールです。移行や新規構築の予算検討に利用されます。</p>",
    "correctHtml": "<p><strong>B. AWS Pricing Calculator</strong></p><p>構成を入力して利用前に料金を見積もるためのツールであり、移行前の概算費用算出に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Cost Explorer</strong></p><p>実際に発生した利用料金を分析するツールで、事前見積もりには使えません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Budgets</strong></p><p>予算を設定して超過時に通知するサービスで、見積もりツールではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Billing Dashboard</strong></p><p>現在の請求状況を確認する画面で、事前見積もりには使いません。</p></div>",
    "pointsHtml": "<ul><li>「利用前の見積もり」は「Pricing Calculator」</li><li>「利用後の分析」はCost Explorer</li><li>「予算超過の通知」はBudgets</li></ul>"
  },
  {
    "number": 6,
    "id": "Q006",
    "questionHtml": "現在利用しているAWSサービスごとの料金推移を分析したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Pricing Calculator"
      },
      {
        "correct": true,
        "html": "AWS Cost Explorer"
      },
      {
        "correct": false,
        "html": "AWS Budgets"
      },
      {
        "correct": false,
        "html": "AWS Organizations"
      }
    ],
    "explanationHtml": "<p>この問題では、既に利用しているAWSサービスごとの料金推移を分析するサービスを理解しているかが問われています。</p><p>AWS Cost Explorerは、実際に発生した利用料金をサービス別・期間別・タグ別などで可視化し、傾向を分析できるサービスです。コスト増加の要因調査や最適化に役立ちます。</p>",
    "correctHtml": "<p><strong>B. AWS Cost Explorer</strong></p><p>サービスごとの利用料金推移をグラフで可視化・分析できるため、利用実績の傾向把握に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Pricing Calculator</strong></p><p>利用前の見積もりツールで、実績分析はできません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Budgets</strong></p><p>予算超過を通知するサービスで、詳細な推移分析が主目的ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Organizations</strong></p><p>複数アカウントを管理するサービスで、料金推移の分析ツールではありません。</p></div>",
    "pointsHtml": "<ul><li>「利用実績の分析・推移」は「Cost Explorer」</li><li>サービス別・期間別・タグ別の可視化が可能</li><li>見積もりのPricing Calculatorと混同しないこと</li></ul>"
  },
  {
    "number": 7,
    "id": "Q007",
    "questionHtml": "月額利用料金が10万円を超えた場合に通知を受け取りたいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Cost Explorer"
      },
      {
        "correct": false,
        "html": "AWS Pricing Calculator"
      },
      {
        "correct": true,
        "html": "AWS Budgets"
      },
      {
        "correct": false,
        "html": "Amazon CloudWatch"
      }
    ],
    "explanationHtml": "<p>この問題では、月額利用料金が一定額を超えた場合に通知を受け取るサービスを理解しているかが問われています。</p><p>AWS Budgetsは、コストや使用量の予算（しきい値）を設定し、超過しそう／超過した場合にメールやSNSでアラートを送信できるサービスです。想定外のコスト増を未然に防ぐために使われます。</p>",
    "correctHtml": "<p><strong>C. AWS Budgets</strong></p><p>予算を設定してしきい値超過時に通知できるため、月額料金が一定額を超えた際のアラートに最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Cost Explorer</strong></p><p>料金を分析するサービスで、予算超過の通知が主目的ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Pricing Calculator</strong></p><p>利用前の見積もりツールで、通知機能はありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon CloudWatch</strong></p><p>リソースの監視・メトリクスのサービスで、請求アラームも作れますが予算管理・通知の専用サービスはBudgetsです。</p></div>",
    "pointsHtml": "<ul><li>「予算・しきい値・通知」は「AWS Budgets」</li><li>予算超過を未然に防ぐ用途</li><li>CloudWatchでも請求アラームは可能だが、予算管理の主役はBudgets</li></ul>"
  },
  {
    "number": 8,
    "id": "Q008",
    "questionHtml": "グループ企業ごとにAWSアカウントを分けていますが、請求は1つにまとめたいと考えています。<br>最も適切な機能はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Cost Explorer"
      },
      {
        "correct": false,
        "html": "AWS Budgets"
      },
      {
        "correct": true,
        "html": "Consolidated Billing（請求統合）"
      },
      {
        "correct": false,
        "html": "AWS Marketplace"
      }
    ],
    "explanationHtml": "<p>この問題では、複数のAWSアカウントの請求を1つにまとめる機能を理解しているかが問われています。</p><p>Consolidated Billing（請求統合）は、AWS Organizations配下の複数アカウントの利用料金を管理アカウントで1枚の請求書にまとめる機能です。利用量を合算することでボリュームディスカウントの対象になる場合もあります。</p>",
    "correctHtml": "<p><strong>C. Consolidated Billing（請求統合）</strong></p><p>複数アカウントの請求を1つにまとめる機能であり、グループ企業でアカウントを分けつつ請求を統合したい要件に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Cost Explorer</strong></p><p>料金を分析するサービスで、請求を統合する機能ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Budgets</strong></p><p>予算超過を通知するサービスで、請求統合の機能はありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Marketplace</strong></p><p>サードパーティ製ソフトウェアを購入・導入するサービスで、請求統合とは無関係です。</p></div>",
    "pointsHtml": "<ul><li>「複数アカウントの請求を一本化」は「Consolidated Billing」</li><li>AWS Organizationsの機能として提供される</li><li>使用量合算によるボリュームディスカウントの可能性</li></ul>"
  },
  {
    "number": 9,
    "id": "Q009",
    "questionHtml": "開発環境で一時的にAWSを利用する学生がいます。<br>AWSでは無料で利用できるサービスや利用枠が提供されています。<br>この仕組みを何と呼びますか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Educate"
      },
      {
        "correct": true,
        "html": "AWS Free Tier"
      },
      {
        "correct": false,
        "html": "AWS Marketplace"
      },
      {
        "correct": false,
        "html": "AWS Activate"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSが提供する無料の利用枠の仕組みの名称を理解しているかが問われています。</p><p>AWS Free Tier（無料利用枠）は、新規利用者などが対象サービスを一定量まで無料で利用できる仕組みです。12か月間無料・常時無料・短期トライアルの3種類があります。</p>",
    "correctHtml": "<p><strong>B. AWS Free Tier</strong></p><p>一定の利用量まで無料でAWSを利用できる仕組みであり、開発環境で一時的に試す学生などに適しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Educate</strong></p><p>学生・教育者向けのクラウド学習支援プログラムで、無料利用枠そのものを指す名称ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Marketplace</strong></p><p>サードパーティ製ソフトウェアを購入・導入するサービスで、無料利用枠とは異なります。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Activate</strong></p><p>スタートアップ向けの支援プログラムで、無料利用枠の仕組みではありません。</p></div>",
    "pointsHtml": "<ul><li>無料で使える仕組みは「AWS Free Tier」</li><li>種類は「12か月無料」「常時無料」「短期トライアル」</li><li>Educate（教育向け）・Activate（スタートアップ向け）と区別</li></ul>"
  },
  {
    "number": 10,
    "id": "Q010",
    "questionHtml": "企業ではEC2利用料金を長期的に削減したいと考えています。<br>Savings Plansの特徴として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "インスタンスが中断される可能性がある"
      },
      {
        "correct": false,
        "html": "利用時間ではなくデータ転送量だけ割引される"
      },
      {
        "correct": true,
        "html": "一定期間の利用をコミットすることで割引を受けられる"
      },
      {
        "correct": false,
        "html": "常にReserved Instancesより高価である"
      }
    ],
    "explanationHtml": "<p>この問題では、Savings Plansの特徴を正しく理解しているかが問われています。</p><p>Savings Plansは、1年または3年の一定の利用量（1時間あたりの利用金額）をコミットすることで、オンデマンドより大幅な割引を受けられる料金モデルです。中断はなく、長期的なコスト削減に有効です。</p>",
    "correctHtml": "<p><strong>C. 一定期間の利用をコミットすることで割引を受けられる</strong></p><p>利用のコミットにより割引を受ける仕組みであり、Savings Plansの特徴を正しく表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. インスタンスが中断される可能性がある</strong></p><p>これはSpot Instancesの特徴であり、Savings Plansでは中断されません。</p></div><div class=\"incorrect-item\"><p><strong>B. 利用時間ではなくデータ転送量だけ割引される</strong></p><p>Savings Plansはコンピューティング利用に対する割引であり、データ転送量だけを対象とするものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. 常にReserved Instancesより高価である</strong></p><p>Savings PlansはReserved Instancesと同等の割引を、より柔軟に受けられる仕組みで、常に高価というのは誤りです。</p></div>",
    "pointsHtml": "<ul><li>Savings Plansは「利用コミットで割引」</li><li>1年または3年契約</li><li>中断はない（中断はSpotの特徴）</li></ul>"
  },
  {
    "number": 11,
    "id": "Q011",
    "questionHtml": "Reserved Instancesと比較した場合のSavings Plansの特徴として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "割引は存在しない"
      },
      {
        "correct": false,
        "html": "EC2では利用できない"
      },
      {
        "correct": true,
        "html": "より柔軟にインスタンス変更へ対応できる"
      },
      {
        "correct": false,
        "html": "Spot Instance専用である"
      }
    ],
    "explanationHtml": "<p>この問題では、Reserved Instancesと比較したSavings Plansの特徴を理解しているかが問われています。</p><p>Savings Plansは利用金額（$/時間）へのコミットで割引を受けるため、インスタンスタイプ・サイズ・リージョン・OSなどを変更しても割引が適用され続けます。特定インスタンスに紐づくReserved Instancesより柔軟です。</p>",
    "correctHtml": "<p><strong>C. より柔軟にインスタンス変更へ対応できる</strong></p><p>Savings Plansは金額ベースのコミットのため、インスタンスの変更にも柔軟に割引が適用され、Reserved Instancesより柔軟性が高い点が特徴です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 割引は存在しない</strong></p><p>Savings Plansはオンデマンドより大幅な割引が受けられます。</p></div><div class=\"incorrect-item\"><p><strong>B. EC2では利用できない</strong></p><p>Savings PlansはEC2をはじめFargateやLambdaでも利用できます。</p></div><div class=\"incorrect-item\"><p><strong>D. Spot Instance専用である</strong></p><p>Savings PlansはSpot専用ではなく、オンデマンド利用に対する割引の仕組みです。</p></div>",
    "pointsHtml": "<ul><li>Savings Plansの強みは「柔軟性」</li><li>インスタンスタイプ・リージョン変更にも割引が追従（Compute Savings Plansの場合）</li><li>Reserved Instancesは特定条件に紐づき柔軟性は相対的に低い</li></ul>"
  },
  {
    "number": 12,
    "id": "Q012",
    "questionHtml": "Spot Instancesが適しているワークロードとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "基幹業務システム"
      },
      {
        "correct": false,
        "html": "金融取引システム"
      },
      {
        "correct": true,
        "html": "中断されても再実行できるバッチ処理"
      },
      {
        "correct": false,
        "html": "24時間停止できないWebシステム"
      }
    ],
    "explanationHtml": "<p>この問題では、Spot Instancesに適したワークロードを理解しているかが問われています。</p><p>Spot Instancesは余剰キャパシティを安価に利用できますが、AWSの都合で中断される可能性があります。そのため、中断されても再実行できるバッチ処理やステートレスな処理に適しています。</p>",
    "correctHtml": "<p><strong>C. 中断されても再実行できるバッチ処理</strong></p><p>中断耐性があり再実行できる処理であれば、Spotの低価格を最大限活用できるため最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 基幹業務システム</strong></p><p>停止が許されない重要システムには、中断リスクのあるSpotは不向きです。</p></div><div class=\"incorrect-item\"><p><strong>B. 金融取引システム</strong></p><p>高い可用性が求められ、中断が許されないためSpotは適しません。</p></div><div class=\"incorrect-item\"><p><strong>D. 24時間停止できないWebシステム</strong></p><p>常時稼働が必須のシステムには、中断されうるSpotは適しません。</p></div>",
    "pointsHtml": "<ul><li>Spotは「中断OKなワークロード」向け</li><li>バッチ・ビッグデータ・CI/CD・ステートレス処理に最適</li><li>停止できない基幹・金融・常時稼働Webには不適</li></ul>"
  },
  {
    "number": 13,
    "id": "Q013",
    "questionHtml": "AWS Cost Explorerで確認できる内容として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMユーザー一覧"
      },
      {
        "correct": true,
        "html": "サービスごとの利用料金推移"
      },
      {
        "correct": false,
        "html": "VPC設定"
      },
      {
        "correct": false,
        "html": "EC2ログイン履歴"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Cost Explorerで確認できる内容を理解しているかが問われています。</p><p>AWS Cost Explorerは、実際に発生した利用料金をサービス別・期間別・タグ別などで可視化・分析するツールです。IAMユーザーやVPC設定、ログイン履歴などは扱いません。</p>",
    "correctHtml": "<p><strong>B. サービスごとの利用料金推移</strong></p><p>サービス別・期間別の利用料金推移を可視化できることがCost Explorerの主な機能です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMユーザー一覧</strong></p><p>これはIAMで確認する内容で、Cost Explorerの機能ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. VPC設定</strong></p><p>ネットワーク設定はVPCで確認する内容で、料金分析ツールでは扱いません。</p></div><div class=\"incorrect-item\"><p><strong>D. EC2ログイン履歴</strong></p><p>ログイン・操作履歴はCloudTrailなどで確認する内容です。</p></div>",
    "pointsHtml": "<ul><li>Cost Explorer＝「利用料金の分析・可視化」</li><li>サービス別・期間別・タグ別の分析が可能</li><li>IAM・VPC・監査ログとは目的が異なる</li></ul>"
  },
  {
    "number": 14,
    "id": "Q014",
    "questionHtml": "AWS Budgetsの主な目的として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWSリソースを自動作成する"
      },
      {
        "correct": false,
        "html": "IAMユーザーを管理する"
      },
      {
        "correct": false,
        "html": "CloudTrailログを保存する"
      },
      {
        "correct": true,
        "html": "予算超過を監視し通知する"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Budgetsの主な目的を理解しているかが問われています。</p><p>AWS Budgetsは、コストや使用量、Reserved Instances／Savings Plansの利用率などに予算（しきい値）を設定し、超過しそう／超過した際に通知するサービスです。</p>",
    "correctHtml": "<p><strong>D. 予算超過を監視し通知する</strong></p><p>予算を設定して超過を監視・通知することがBudgetsの主目的です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWSリソースを自動作成する</strong></p><p>リソース作成はCloudFormationなどの役割で、Budgetsの機能ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. IAMユーザーを管理する</strong></p><p>ユーザー管理はIAMの役割です。</p></div><div class=\"incorrect-item\"><p><strong>C. CloudTrailログを保存する</strong></p><p>APIログの記録はCloudTrailの役割です。</p></div>",
    "pointsHtml": "<ul><li>Budgets＝「予算超過の監視・通知」</li><li>コスト・使用量・RI/SP利用率などに予算設定が可能</li><li>メールやSNSでアラート送信</li></ul>"
  },
  {
    "number": 15,
    "id": "Q015",
    "questionHtml": "AWS Pricing Calculatorの主な用途として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "実際の請求書を確認する"
      },
      {
        "correct": false,
        "html": "セキュリティ設定を診断する"
      },
      {
        "correct": false,
        "html": "APIログを分析する"
      },
      {
        "correct": true,
        "html": "AWS利用料金を事前に見積もる"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Pricing Calculatorの主な用途を理解しているかが問われています。</p><p>AWS Pricing Calculatorは、利用予定の構成を入力してAWS利用料金を事前に見積もる無料ツールです。実際の請求確認やセキュリティ診断、ログ分析には使いません。</p>",
    "correctHtml": "<p><strong>D. AWS利用料金を事前に見積もる</strong></p><p>構成に基づいて料金を事前試算することがPricing Calculatorの用途です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 実際の請求書を確認する</strong></p><p>請求確認はBilling Dashboardの役割です。</p></div><div class=\"incorrect-item\"><p><strong>B. セキュリティ設定を診断する</strong></p><p>診断はTrusted AdvisorやSecurity Hubなどの役割です。</p></div><div class=\"incorrect-item\"><p><strong>C. APIログを分析する</strong></p><p>API履歴の記録・分析はCloudTrailの役割です。</p></div>",
    "pointsHtml": "<ul><li>Pricing Calculator＝「利用前の料金見積もり」</li><li>無料で利用可能</li><li>実績確認（Billing/Cost Explorer）とは目的が異なる</li></ul>"
  },
  {
    "number": 16,
    "id": "Q016",
    "questionHtml": "AWS Organizationsを利用している企業では、請求を統合することで得られるメリットはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMユーザーが不要になる"
      },
      {
        "correct": false,
        "html": "CloudTrailが無効になる"
      },
      {
        "correct": false,
        "html": "Amazon S3容量が無制限になる"
      },
      {
        "correct": true,
        "html": "複数アカウントの利用料金を一元管理できる"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Organizationsで請求を統合することで得られるメリットを理解しているかが問われています。</p><p>AWS Organizationsでは、Consolidated Billing（請求統合）により複数アカウントの利用料金を管理アカウントで一元管理できます。使用量の合算による割引メリットも得られます。</p>",
    "correctHtml": "<p><strong>D. 複数アカウントの利用料金を一元管理できる</strong></p><p>請求統合により複数アカウントの料金をまとめて管理できることが主なメリットです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMユーザーが不要になる</strong></p><p>請求統合とIAMユーザーの要否は無関係で、IAMは引き続き必要です。</p></div><div class=\"incorrect-item\"><p><strong>B. CloudTrailが無効になる</strong></p><p>請求統合でCloudTrailが無効化されることはありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon S3容量が無制限になる</strong></p><p>請求統合とS3の容量は関係がありません。</p></div>",
    "pointsHtml": "<ul><li>Organizations＋Consolidated Billingで「料金の一元管理」</li><li>使用量合算によるボリュームディスカウント</li><li>IAMやCloudTrailの要否とは無関係</li></ul>"
  },
  {
    "number": 17,
    "id": "Q017",
    "questionHtml": "AWSの料金を最適化するための考え方として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "常に最大サイズのEC2を利用する"
      },
      {
        "correct": false,
        "html": "Spot Instancesのみを利用する"
      },
      {
        "correct": false,
        "html": "すべてReserved Instancesにする"
      },
      {
        "correct": true,
        "html": "ワークロードに応じて最適な料金モデルを選択する"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの料金最適化の基本的な考え方を理解しているかが問われています。</p><p>AWSでは、ワークロードの特性（常時稼働・一時利用・中断可否など）に応じて、オンデマンド・Savings Plans・Reserved Instances・Spotなどの料金モデルを適切に使い分けることがコスト最適化の基本です。</p>",
    "correctHtml": "<p><strong>D. ワークロードに応じて最適な料金モデルを選択する</strong></p><p>用途ごとに最適な料金モデルを選ぶことがコスト最適化の基本的な考え方です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 常に最大サイズのEC2を利用する</strong></p><p>過剰なリソースはコスト増につながり、最適化に反します。</p></div><div class=\"incorrect-item\"><p><strong>B. Spot Instancesのみを利用する</strong></p><p>中断リスクがあり、すべての用途に適するわけではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. すべてReserved Instancesにする</strong></p><p>短期・変動的な用途では割高となり、一律適用は最適ではありません。</p></div>",
    "pointsHtml": "<ul><li>コスト最適化は「ワークロードに合わせた料金モデル選択」</li><li>一律の適用（全部Spot・全部RI・常に最大サイズ）は避ける</li><li>Right Sizing（適切なサイズ選定）も重要</li></ul>"
  },
  {
    "number": 18,
    "id": "Q018",
    "questionHtml": "スタートアップ企業では、AWSの技術的な問い合わせを行いたいと考えています。<br>24時間365日の電話サポートは不要ですが、営業時間内に技術サポートを受けたい場合、最も適切なサポートプランはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Basic Support"
      },
      {
        "correct": true,
        "html": "Developer Support"
      },
      {
        "correct": false,
        "html": "Business Support"
      },
      {
        "correct": false,
        "html": "Enterprise Support"
      }
    ],
    "explanationHtml": "<p>この問題では、営業時間内に技術サポートを受けたいスタートアップに適したサポートプランを理解しているかが問われています。</p><p>Developer Supportは有償プランで、営業時間内にメールでの技術サポートを受けられます。24時間365日の対応は不要だが技術的な問い合わせをしたい、開発・検証段階の利用者に適しています。</p>",
    "correctHtml": "<p><strong>B. Developer Support</strong></p><p>営業時間内にメールでの技術サポートを受けられる有償プランであり、24時間対応が不要なスタートアップに適しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Basic Support</strong></p><p>無料プランで、技術的な問い合わせサポートは含まれません。</p></div><div class=\"incorrect-item\"><p><strong>C. Business Support</strong></p><p>24時間365日対応を含む本番環境向けのプランで、要件に対して過剰です。</p></div><div class=\"incorrect-item\"><p><strong>D. Enterprise Support</strong></p><p>最上位プランで、大規模・ミッションクリティカル向けであり要件に対して過剰です。</p></div>",
    "pointsHtml": "<ul><li>営業時間内の技術サポート（開発・検証向け）は「Developer Support」</li><li>Basicは技術サポートなし（無料）</li><li>24時間365日はBusiness以上</li></ul>"
  },
  {
    "number": 19,
    "id": "Q019",
    "questionHtml": "金融機関では、本番環境を24時間365日運用しています。<br>障害発生時には迅速な技術支援が必要です。<br>最も適切なサポートプランはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Basic Support"
      },
      {
        "correct": false,
        "html": "Developer Support"
      },
      {
        "correct": true,
        "html": "Business Support"
      },
      {
        "correct": false,
        "html": "AWS Activate"
      }
    ],
    "explanationHtml": "<p>この問題では、本番環境を24時間365日運用し障害時に迅速な支援が必要な場合のサポートプランを理解しているかが問われています。</p><p>Business Supportは、24時間365日のメール・チャット・電話による技術サポートを提供する本番環境向けプランです。重大な障害時には1時間以内の応答が保証されます。</p>",
    "correctHtml": "<p><strong>C. Business Support</strong></p><p>24時間365日の技術サポートを提供し、本番環境の障害時に迅速な支援を受けられるため最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Basic Support</strong></p><p>無料プランで技術サポートがなく、本番環境には不足します。</p></div><div class=\"incorrect-item\"><p><strong>B. Developer Support</strong></p><p>営業時間内のメールサポートのみで、24時間365日の対応は含まれません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Activate</strong></p><p>スタートアップ支援プログラムであり、サポートプランではありません。</p></div>",
    "pointsHtml": "<ul><li>本番環境・24時間365日対応は「Business Support」以上</li><li>本番障害（Production system down）は1時間以内の応答</li><li>ActivateはサポートプランではなくStartup支援</li></ul>"
  },
  {
    "number": 20,
    "id": "Q020",
    "questionHtml": "ミッションクリティカルなシステムをAWSで運用しています。<br>専任の技術担当者（TAM）による支援を受けたい場合、最も適切なサポートプランはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Business Support"
      },
      {
        "correct": false,
        "html": "Developer Support"
      },
      {
        "correct": false,
        "html": "Basic Support"
      },
      {
        "correct": true,
        "html": "Enterprise Support"
      }
    ],
    "explanationHtml": "<p>この問題では、専任の技術担当者（TAM）による支援が受けられるサポートプランを理解しているかが問われています。</p><p>Enterprise Supportは最上位のサポートプランで、専任のTechnical Account Manager（TAM）、コンシェルジュサポート、重大障害時の最短15分応答などが提供されます。ミッションクリティカルなシステムに適しています。</p>",
    "correctHtml": "<p><strong>D. Enterprise Support</strong></p><p>専任のTAMが提供される唯一の（最上位）プランであり、ミッションクリティカルシステムの運用に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Business Support</strong></p><p>24時間365日対応は受けられますが、専任TAMは提供されません。</p></div><div class=\"incorrect-item\"><p><strong>B. Developer Support</strong></p><p>営業時間内のメールサポートのみで、TAMは含まれません。</p></div><div class=\"incorrect-item\"><p><strong>C. Basic Support</strong></p><p>無料プランで技術サポートもTAMも含まれません。</p></div>",
    "pointsHtml": "<ul><li>専任TAMは「Enterprise Support」（およびEnterprise On-Ramp）</li><li>重大障害の応答は最短15分（Enterprise）</li><li>CLFでは「TAM＝Enterprise」が頻出</li></ul>"
  },
  {
    "number": 21,
    "id": "Q021",
    "questionHtml": "AWSアカウント固有の障害やメンテナンス情報を確認したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Service Health Dashboard"
      },
      {
        "correct": true,
        "html": "AWS Personal Health Dashboard"
      },
      {
        "correct": false,
        "html": "Amazon CloudWatch"
      },
      {
        "correct": false,
        "html": "AWS Config"
      }
    ],
    "explanationHtml": "<p>この問題では、自社アカウント固有の障害やメンテナンス情報を確認するサービスを理解しているかが問われています。</p><p>AWS Personal Health Dashboard（現：AWS Health Dashboard の「アカウント固有」ビュー）は、自分が利用しているリソースに影響する障害・メンテナンス情報を個別に通知・表示するサービスです。</p>",
    "correctHtml": "<p><strong>B. AWS Personal Health Dashboard</strong></p><p>自社アカウントに影響するイベントを個別に確認できるため、アカウント固有の障害・メンテナンス把握に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Service Health Dashboard</strong></p><p>AWS全体・リージョン全体の障害情報を公開する画面で、アカウント固有の情報ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon CloudWatch</strong></p><p>リソースの監視・メトリクスのサービスで、AWS側の障害・メンテナンス情報を提供するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Config</strong></p><p>リソース構成の記録・評価サービスで、障害情報の通知が目的ではありません。</p></div>",
    "pointsHtml": "<ul><li>「自分のアカウントへの影響」は「Personal Health Dashboard」</li><li>「AWS全体・リージョン全体」はService Health Dashboard</li><li>CloudWatch（監視）・Config（構成管理）とは目的が異なる</li></ul>"
  },
  {
    "number": 22,
    "id": "Q022",
    "questionHtml": "AWSリージョン全体で発生している障害情報を確認したい場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "AWS Service Health Dashboard"
      },
      {
        "correct": false,
        "html": "AWS Personal Health Dashboard"
      },
      {
        "correct": false,
        "html": "AWS Health API"
      },
      {
        "correct": false,
        "html": "AWS Trusted Advisor"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSリージョン全体で発生している障害情報を確認するサービスを理解しているかが問われています。</p><p>AWS Service Health Dashboardは、AWS全体・各リージョン・各サービスの稼働状況や障害情報を、すべての利用者が共通して確認できる公開ダッシュボードです。</p>",
    "correctHtml": "<p><strong>A. AWS Service Health Dashboard</strong></p><p>リージョンやサービス全体の障害情報を公開しており、AWS全体で発生している障害の確認に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. AWS Personal Health Dashboard</strong></p><p>自社アカウントに影響するイベントに特化しており、AWS全体の状況を俯瞰する用途とは異なります。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Health API</strong></p><p>Health情報をプログラムから取得するAPIで、全体状況を確認する画面（ダッシュボード）そのものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Trusted Advisor</strong></p><p>コスト・セキュリティなどの推奨事項を診断するサービスで、障害情報の確認用ではありません。</p></div>",
    "pointsHtml": "<ul><li>「AWS全体・リージョン全体の障害」は「Service Health Dashboard」</li><li>「自分の環境への影響」はPersonal Health Dashboard</li><li>Health APIはプログラム連携用</li></ul>"
  },
  {
    "number": 23,
    "id": "Q023",
    "questionHtml": "自社システムに影響する予定メンテナンスや障害情報を確認したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Service Health Dashboard"
      },
      {
        "correct": true,
        "html": "AWS Personal Health Dashboard"
      },
      {
        "correct": false,
        "html": "Amazon EventBridge"
      },
      {
        "correct": false,
        "html": "AWS Organizations"
      }
    ],
    "explanationHtml": "<p>この問題では、自社システムに影響する予定メンテナンスや障害情報を確認するサービスを理解しているかが問われています。</p><p>AWS Personal Health Dashboardは、利用中のリソースに影響するイベント（予定メンテナンス・障害など）を個別に表示・通知します。自社環境に関係する情報のみに絞られる点が特徴です。</p>",
    "correctHtml": "<p><strong>B. AWS Personal Health Dashboard</strong></p><p>自社システムに影響する予定メンテナンスや障害情報を個別に確認できるため最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Service Health Dashboard</strong></p><p>AWS全体の公開情報であり、自社への影響に絞った情報ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon EventBridge</strong></p><p>イベントを受けて処理を連携させるサービスで、Health情報を表示する主体ではありません（連携先にはなり得ます）。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Organizations</strong></p><p>複数アカウント管理サービスで、障害・メンテナンス情報の表示は目的ではありません。</p></div>",
    "pointsHtml": "<ul><li>「自社に影響するメンテナンス・障害」は「Personal Health Dashboard」</li><li>EventBridgeは通知の連携先として使える</li><li>Service Health Dashboardは全体公開情報</li></ul>"
  },
  {
    "number": 24,
    "id": "Q024",
    "questionHtml": "自社がISO 27001などの認証を取得していることを示すAWSのコンプライアンス資料を確認したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Marketplace"
      },
      {
        "correct": false,
        "html": "AWS Support Center"
      },
      {
        "correct": false,
        "html": "AWS Trusted Advisor"
      },
      {
        "correct": true,
        "html": "AWS Artifact"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSが取得しているコンプライアンス認証資料を確認するサービスを理解しているかが問われています。</p><p>AWS Artifactは、AWSのコンプライアンスレポート（SOC、ISO 27001、PCI DSSなど）や契約関連文書をオンデマンドでダウンロードできるサービスです。監査対応やセキュリティ審査で利用されます。</p>",
    "correctHtml": "<p><strong>D. AWS Artifact</strong></p><p>ISO 27001などのコンプライアンス資料を取得できるサービスであり、認証取得状況の確認に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Marketplace</strong></p><p>サードパーティ製ソフトウェアを購入・導入するサービスで、コンプライアンス資料の取得はできません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Support Center</strong></p><p>サポートケースを管理する窓口で、コンプライアンス文書の提供が目的ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Trusted Advisor</strong></p><p>コスト・セキュリティなどの推奨事項を診断するサービスで、認証資料の提供はしません。</p></div>",
    "pointsHtml": "<ul><li>「コンプライアンス・監査レポート」は「AWS Artifact」</li><li>SOC・ISO・PCI DSSなどの文書をダウンロード可能</li><li>監査対応・セキュリティ審査で活用</li></ul>"
  },
  {
    "number": 25,
    "id": "Q025",
    "questionHtml": "AWS Marketplaceの主な用途として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWSサービスの料金を見積もる"
      },
      {
        "correct": false,
        "html": "IAMユーザーを作成する"
      },
      {
        "correct": true,
        "html": "AWS上で利用できるソフトウェアやソリューションを導入する"
      },
      {
        "correct": false,
        "html": "AWSリソースを監査する"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Marketplaceの主な用途を理解しているかが問われています。</p><p>AWS Marketplaceは、AWS上で動作するサードパーティ製のソフトウェア・SaaS・AMI・ソリューションを検索・購入・導入できるオンラインストアです。</p>",
    "correctHtml": "<p><strong>C. AWS上で利用できるソフトウェアやソリューションを導入する</strong></p><p>サードパーティ製ソフトウェアやソリューションを見つけて導入できることがMarketplaceの主な用途です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWSサービスの料金を見積もる</strong></p><p>見積もりはPricing Calculatorの役割です。</p></div><div class=\"incorrect-item\"><p><strong>B. IAMユーザーを作成する</strong></p><p>ユーザー作成はIAMの役割です。</p></div><div class=\"incorrect-item\"><p><strong>D. AWSリソースを監査する</strong></p><p>監査・構成評価はConfigやCloudTrailなどの役割です。</p></div>",
    "pointsHtml": "<ul><li>Marketplace＝「ソフトウェア・ソリューションの購入・導入」</li><li>AMI・SaaS・コンテナ・データ製品などが揃う</li><li>見積もり（Pricing Calculator）・監査（Config等）とは別</li></ul>"
  },
  {
    "number": 26,
    "id": "Q026",
    "questionHtml": "開発チームでは、AWS Marketplaceから商用ソフトウェアを導入したいと考えています。<br>AWS Marketplaceの特徴として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS社員のみ利用できる"
      },
      {
        "correct": false,
        "html": "無償ソフトウェアしか提供されない"
      },
      {
        "correct": false,
        "html": "EC2専用である"
      },
      {
        "correct": true,
        "html": "AWS請求とまとめてソフトウェア利用料金を管理できる"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Marketplaceの特徴を理解しているかが問われています。</p><p>AWS Marketplaceで購入したソフトウェアの利用料金は、AWSの請求にまとめて計上されます。これにより、別々の契約・支払いを管理する手間を省けます。</p>",
    "correctHtml": "<p><strong>D. AWS請求とまとめてソフトウェア利用料金を管理できる</strong></p><p>Marketplace経由の購入料金はAWS請求に統合されるため、まとめて管理できる点が特徴です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS社員のみ利用できる</strong></p><p>一般のAWS利用者が利用できるサービスです。</p></div><div class=\"incorrect-item\"><p><strong>B. 無償ソフトウェアしか提供されない</strong></p><p>有償・無償の両方の製品が提供されています。</p></div><div class=\"incorrect-item\"><p><strong>C. EC2専用である</strong></p><p>AMIだけでなくSaaS・コンテナ・データ製品なども扱い、EC2専用ではありません。</p></div>",
    "pointsHtml": "<ul><li>Marketplaceの購入料金は「AWS請求に統合」</li><li>有償・無償の両製品が存在</li><li>EC2専用ではなく多様な製品形態に対応</li></ul>"
  },
  {
    "number": 27,
    "id": "Q027",
    "questionHtml": "AWS Trusted Advisorで確認できる項目として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "EC2へログインした利用者"
      },
      {
        "correct": false,
        "html": "CloudTrailのAPI履歴"
      },
      {
        "correct": true,
        "html": "コスト最適化やセキュリティに関する推奨事項"
      },
      {
        "correct": false,
        "html": "SQL実行履歴"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Trusted Advisorで確認できる項目を理解しているかが問われています。</p><p>AWS Trusted Advisorは、コスト最適化・セキュリティ・耐障害性・パフォーマンス・サービスクォータの5カテゴリでベストプラクティスに沿った推奨事項を提示するサービスです。</p>",
    "correctHtml": "<p><strong>C. コスト最適化やセキュリティに関する推奨事項</strong></p><p>コスト・セキュリティなどの推奨事項を確認できることがTrusted Advisorの機能です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. EC2へログインした利用者</strong></p><p>ログイン情報の確認はTrusted Advisorの機能ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. CloudTrailのAPI履歴</strong></p><p>API履歴の確認はCloudTrailの役割です。</p></div><div class=\"incorrect-item\"><p><strong>D. SQL実行履歴</strong></p><p>データベースのクエリ履歴はTrusted Advisorでは確認できません。</p></div>",
    "pointsHtml": "<ul><li>Trusted Advisor＝「ベストプラクティスの推奨事項」</li><li>5カテゴリ：コスト最適化・セキュリティ・耐障害性・パフォーマンス・サービスクォータ</li><li>ログや操作履歴の確認用ではない</li></ul>"
  },
  {
    "number": 28,
    "id": "Q028",
    "questionHtml": "AWS Trusted Advisorの推奨事項を確認する主な目的はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAM認証を実施するため"
      },
      {
        "correct": false,
        "html": "EC2へログインするため"
      },
      {
        "correct": true,
        "html": "AWS環境をベストプラクティスに近づけるため"
      },
      {
        "correct": false,
        "html": "VPCを構築するため"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Trusted Advisorの推奨事項を確認する主な目的を理解しているかが問われています。</p><p>Trusted Advisorの目的は、環境をAWSのベストプラクティスに近づけ、コスト・セキュリティ・信頼性・パフォーマンスなどを改善することです。</p>",
    "correctHtml": "<p><strong>C. AWS環境をベストプラクティスに近づけるため</strong></p><p>推奨事項に従うことでAWS環境をベストプラクティスに近づけることが目的です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAM認証を実施するため</strong></p><p>認証はIAMの役割で、Trusted Advisorの目的ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. EC2へログインするため</strong></p><p>ログインのためのサービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. VPCを構築するため</strong></p><p>ネットワーク構築はVPCの役割です。</p></div>",
    "pointsHtml": "<ul><li>Trusted Advisorの目的は「ベストプラクティスへの改善」</li><li>コスト・セキュリティ・信頼性・パフォーマンス・クォータを点検</li><li>認証・ログイン・ネットワーク構築の目的ではない</li></ul>"
  },
  {
    "number": 29,
    "id": "Q029",
    "questionHtml": "AWS Organizationsを利用する主なメリットとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "EC2性能を向上できる"
      },
      {
        "correct": true,
        "html": "複数AWSアカウントを一元管理できる"
      },
      {
        "correct": false,
        "html": "CloudTrailが不要になる"
      },
      {
        "correct": false,
        "html": "IAMが不要になる"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Organizationsを利用する主なメリットを理解しているかが問われています。</p><p>AWS Organizationsは、複数のAWSアカウントを1つの組織として一元管理できるサービスです。請求統合（Consolidated Billing）やSCP（サービスコントロールポリシー）による統制が可能です。</p>",
    "correctHtml": "<p><strong>B. 複数AWSアカウントを一元管理できる</strong></p><p>複数アカウントを組織として集中管理できることがOrganizationsの主なメリットです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. EC2性能を向上できる</strong></p><p>Organizationsはアカウント管理サービスで、EC2の性能向上とは無関係です。</p></div><div class=\"incorrect-item\"><p><strong>C. CloudTrailが不要になる</strong></p><p>Organizationsを使ってもCloudTrailは引き続き有用で、不要にはなりません。</p></div><div class=\"incorrect-item\"><p><strong>D. IAMが不要になる</strong></p><p>アカウント内の権限管理には引き続きIAMが必要です。</p></div>",
    "pointsHtml": "<ul><li>Organizations＝「複数アカウントの一元管理」</li><li>請求統合・SCP・OU（組織単位）が主要機能</li><li>IAMやCloudTrailを不要にするものではない</li></ul>"
  },
  {
    "number": 30,
    "id": "Q030",
    "questionHtml": "AWS Organizationsで利用できる機能として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon S3暗号化"
      },
      {
        "correct": false,
        "html": "CloudFront構築"
      },
      {
        "correct": true,
        "html": "Consolidated Billing（請求統合）"
      },
      {
        "correct": false,
        "html": "EC2 Auto Scaling"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Organizationsで利用できる機能を理解しているかが問われています。</p><p>AWS Organizationsの代表的な機能の1つがConsolidated Billing（請求統合）で、組織内の複数アカウントの請求をまとめられます。</p>",
    "correctHtml": "<p><strong>C. Consolidated Billing（請求統合）</strong></p><p>複数アカウントの請求を統合できる機能であり、Organizationsで利用できる機能として正しいです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon S3暗号化</strong></p><p>暗号化はS3自体の機能で、Organizations固有の機能ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. CloudFront構築</strong></p><p>CDNの構築はCloudFrontの役割で、Organizationsの機能ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. EC2 Auto Scaling</strong></p><p>インスタンスの自動増減はAuto Scalingの機能で、Organizationsの機能ではありません。</p></div>",
    "pointsHtml": "<ul><li>Organizationsの機能：Consolidated Billing・SCP・OU管理</li><li>S3暗号化・CloudFront・Auto Scalingは各サービス固有の機能</li><li>「請求統合＝Organizations」を押さえる</li></ul>"
  },
  {
    "number": 31,
    "id": "Q031",
    "questionHtml": "AWS Supportへ技術問い合わせができないサポートプランはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "Basic Support"
      },
      {
        "correct": false,
        "html": "Developer Support"
      },
      {
        "correct": false,
        "html": "Business Support"
      },
      {
        "correct": false,
        "html": "Enterprise Support"
      }
    ],
    "explanationHtml": "<p>この問題では、技術的な問い合わせができないサポートプランを理解しているかが問われています。</p><p>Basic Supportは、AWSアカウント作成時に自動で付与される無料プランです。カスタマーサービスや請求に関する問い合わせは可能ですが、技術サポート（ケースによる技術問い合わせ）は含まれません。</p>",
    "correctHtml": "<p><strong>A. Basic Support</strong></p><p>無料プランで技術的な問い合わせサポートが含まれないため、技術問い合わせができないプランとして正しいです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. Developer Support</strong></p><p>営業時間内にメールでの技術問い合わせが可能な有償プランです。</p></div><div class=\"incorrect-item\"><p><strong>C. Business Support</strong></p><p>24時間365日の技術サポートが提供される有償プランです。</p></div><div class=\"incorrect-item\"><p><strong>D. Enterprise Support</strong></p><p>最上位の技術サポートとTAMが提供される有償プランです。</p></div>",
    "pointsHtml": "<ul><li>技術サポートなし（無料）は「Basic Support」</li><li>Developer以上で技術問い合わせが可能</li><li>Basicでも請求・カスタマーサービスの問い合わせは可能</li></ul>"
  },
  {
    "number": 32,
    "id": "Q032",
    "questionHtml": "AWS Personal Health Dashboardの情報として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "世界中すべてのAWS障害情報"
      },
      {
        "correct": false,
        "html": "IAMユーザー一覧"
      },
      {
        "correct": false,
        "html": "EC2利用料金"
      },
      {
        "correct": true,
        "html": "自身のAWS環境へ影響する障害・メンテナンス情報"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Personal Health Dashboardが提供する情報を理解しているかが問われています。</p><p>Personal Health Dashboardは、自分が利用しているAWSリソースに影響する障害・メンテナンス情報を個別に表示するサービスです。AWS全体の障害を一覧するものではありません。</p>",
    "correctHtml": "<p><strong>D. 自身のAWS環境へ影響する障害・メンテナンス情報</strong></p><p>自社環境に影響するイベントに絞って表示することがPersonal Health Dashboardの特徴です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 世界中すべてのAWS障害情報</strong></p><p>AWS全体の情報はService Health Dashboardが提供するもので、Personal Health Dashboardの役割ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. IAMユーザー一覧</strong></p><p>ユーザー一覧はIAMで確認する内容です。</p></div><div class=\"incorrect-item\"><p><strong>C. EC2利用料金</strong></p><p>料金の確認はBilling DashboardやCost Explorerの役割です。</p></div>",
    "pointsHtml": "<ul><li>Personal Health Dashboard＝「自分の環境への影響」</li><li>AWS全体はService Health Dashboard</li><li>料金やIAM情報を表示するものではない</li></ul>"
  },
  {
    "number": 33,
    "id": "Q033",
    "questionHtml": "AWSサポートプランを選定する際に最も重要な判断基準はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "利用しているIAMユーザー数"
      },
      {
        "correct": false,
        "html": "Amazon S3容量"
      },
      {
        "correct": true,
        "html": "システムの重要度と必要なサポートレベル"
      },
      {
        "correct": false,
        "html": "VPC数"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSサポートプランを選定する際の重要な判断基準を理解しているかが問われています。</p><p>サポートプランは、システムの重要度（ミッションクリティカルか否か）や必要なサポートレベル（応答時間、TAMの要否など）に応じて選択します。IAMユーザー数やS3容量、VPC数は判断基準ではありません。</p>",
    "correctHtml": "<p><strong>C. システムの重要度と必要なサポートレベル</strong></p><p>システムの重要度と求めるサポートレベルに応じて選ぶことが、プラン選定の適切な判断基準です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 利用しているIAMユーザー数</strong></p><p>ユーザー数はサポートプランの選定基準ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon S3容量</strong></p><p>ストレージ容量とサポートプランの選定は関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>D. VPC数</strong></p><p>ネットワーク数はプラン選定の判断基準にはなりません。</p></div>",
    "pointsHtml": "<ul><li>プラン選定基準は「システムの重要度」と「必要なサポートレベル」</li><li>本番はBusiness以上、ミッションクリティカルはEnterprise</li><li>IAM数・S3容量・VPC数は無関係</li></ul>"
  },
  {
    "number": 34,
    "id": "Q034",
    "questionHtml": "AWS Artifactから取得できるものとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "CloudTrailログ"
      },
      {
        "correct": false,
        "html": "IAM認証情報"
      },
      {
        "correct": false,
        "html": "AWS請求情報"
      },
      {
        "correct": true,
        "html": "コンプライアンスレポートや契約関連資料"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Artifactから取得できるものを理解しているかが問われています。</p><p>AWS Artifactは、AWSのコンプライアンスレポート（SOC、ISO、PCI DSSなど）や、BAA・NDAなどの契約関連文書（AWS Artifact Agreements）をオンデマンドで取得できるサービスです。</p>",
    "correctHtml": "<p><strong>D. コンプライアンスレポートや契約関連資料</strong></p><p>Artifactではコンプライアンスレポートや契約関連文書を取得でき、記述は正しいです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. CloudTrailログ</strong></p><p>API操作ログの取得はCloudTrailの役割です。</p></div><div class=\"incorrect-item\"><p><strong>B. IAM認証情報</strong></p><p>認証情報はIAMで管理するもので、Artifactでは取得しません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS請求情報</strong></p><p>請求情報はBilling DashboardやCost Explorerで確認します。</p></div>",
    "pointsHtml": "<ul><li>Artifact＝「コンプライアンスレポート＋契約関連文書」</li><li>SOC・ISO・PCI DSS、BAA・NDAなど</li><li>ログ（CloudTrail）・請求（Billing）とは別</li></ul>"
  },
  {
    "number": 35,
    "id": "Q035",
    "questionHtml": "ある企業では、新規システムの構築にあたり、AWSの設計原則に従ってコストを継続的に最適化したいと考えています。<br>この考え方を体系的にまとめたフレームワークとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Cloud Adoption Framework (AWS CAF)"
      },
      {
        "correct": true,
        "html": "AWS Well-Architected Framework"
      },
      {
        "correct": false,
        "html": "AWS Pricing Calculator"
      },
      {
        "correct": false,
        "html": "AWS Organizations"
      }
    ],
    "explanationHtml": "<p>この問題では、コストを含む設計原則を体系的にまとめたフレームワークを理解しているかが問われています。</p><p>AWS Well-Architected Frameworkは、優れたクラウド設計のためのベストプラクティスを6つの柱（運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、持続可能性）として体系化したフレームワークです。</p>",
    "correctHtml": "<p><strong>B. AWS Well-Architected Framework</strong></p><p>コスト最適化を含む設計原則を体系化したフレームワークであり、継続的なコスト最適化の指針として最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Cloud Adoption Framework (AWS CAF)</strong></p><p>クラウド導入・移行を組織面から支援するフレームワークで、システム設計原則の体系ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Pricing Calculator</strong></p><p>料金見積もりツールで、設計原則のフレームワークではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Organizations</strong></p><p>複数アカウント管理サービスで、設計フレームワークではありません。</p></div>",
    "pointsHtml": "<ul><li>設計のベストプラクティス体系は「Well-Architected Framework」</li><li>6つの柱にコスト最適化が含まれる</li><li>CAFは「導入・移行」の組織的フレームワーク（別物）</li></ul>"
  },
  {
    "number": 36,
    "id": "Q036",
    "questionHtml": "AWS Well-Architected Frameworkの柱の1つとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "ライセンス管理"
      },
      {
        "correct": false,
        "html": "ハードウェア選定"
      },
      {
        "correct": true,
        "html": "コスト最適化"
      },
      {
        "correct": false,
        "html": "ソフトウェア資産管理"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Well-Architected Frameworkの柱を理解しているかが問われています。</p><p>Well-Architected Frameworkは6つの柱で構成されます：運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、持続可能性。</p>",
    "correctHtml": "<p><strong>C. コスト最適化</strong></p><p>コスト最適化はWell-Architected Frameworkの柱の1つであり、正しい選択肢です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. ライセンス管理</strong></p><p>柱には含まれません（ライセンス管理はLicense Managerなどの役割）。</p></div><div class=\"incorrect-item\"><p><strong>B. ハードウェア選定</strong></p><p>クラウドでは物理ハードウェア選定はユーザーの責任外で、柱ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. ソフトウェア資産管理</strong></p><p>柱には含まれない概念です。</p></div>",
    "pointsHtml": "<ul><li>6つの柱：運用上の優秀性・セキュリティ・信頼性・パフォーマンス効率・コスト最適化・持続可能性</li><li>ライセンス管理・ハードウェア選定・資産管理は柱ではない</li><li>柱の名称を正確に押さえる</li></ul>"
  },
  {
    "number": 37,
    "id": "Q037",
    "questionHtml": "AWS Well-Architected Frameworkのレビューを実施する主な目的として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS料金を無料にするため"
      },
      {
        "correct": false,
        "html": "IAMユーザーを自動作成するため"
      },
      {
        "correct": true,
        "html": "ベストプラクティスに沿った設計かを評価するため"
      },
      {
        "correct": false,
        "html": "EC2のCPU性能を向上させるため"
      }
    ],
    "explanationHtml": "<p>この問題では、Well-Architected Frameworkのレビューを実施する目的を理解しているかが問われています。</p><p>Well-Architected Reviewは、既存または計画中のワークロードがベストプラクティスに沿っているかを評価し、リスクや改善点を洗い出すために実施します。</p>",
    "correctHtml": "<p><strong>C. ベストプラクティスに沿った設計かを評価するため</strong></p><p>設計がベストプラクティスに沿っているかを評価することがレビューの目的であり正しいです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS料金を無料にするため</strong></p><p>料金を無料にする仕組みではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. IAMユーザーを自動作成するため</strong></p><p>ユーザー作成が目的ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. EC2のCPU性能を向上させるため</strong></p><p>ハードウェア性能を直接向上させるものではありません。</p></div>",
    "pointsHtml": "<ul><li>レビューの目的は「ベストプラクティス適合の評価」</li><li>リスク・改善点の洗い出し</li><li>料金無料化やリソース作成が目的ではない</li></ul>"
  },
  {
    "number": 38,
    "id": "Q038",
    "questionHtml": "オンプレミス環境からAWSへの移行を計画しています。<br>組織・人材・ガバナンスなどを含めたクラウド導入計画を支援するフレームワークはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Well-Architected Framework"
      },
      {
        "correct": true,
        "html": "AWS Cloud Adoption Framework (AWS CAF)"
      },
      {
        "correct": false,
        "html": "AWS Trusted Advisor"
      },
      {
        "correct": false,
        "html": "AWS Artifact"
      }
    ],
    "explanationHtml": "<p>この問題では、組織・人材・ガバナンスを含めたクラウド導入計画を支援するフレームワークを理解しているかが問われています。</p><p>AWS Cloud Adoption Framework（AWS CAF）は、クラウド移行・導入を成功させるための観点（ビジネス、人材、ガバナンス、プラットフォーム、セキュリティ、運用）を整理したフレームワークです。</p>",
    "correctHtml": "<p><strong>B. AWS Cloud Adoption Framework (AWS CAF)</strong></p><p>組織・人材・ガバナンスなどを含めたクラウド導入計画を支援するフレームワークであり、要件に合致します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Well-Architected Framework</strong></p><p>個々のワークロードの設計ベストプラクティスの体系で、組織的な導入計画の支援が主目的ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Trusted Advisor</strong></p><p>環境の推奨事項を診断するサービスで、導入計画のフレームワークではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Artifact</strong></p><p>コンプライアンス文書の取得サービスで、導入計画とは無関係です。</p></div>",
    "pointsHtml": "<ul><li>「組織・人材・ガバナンスを含む導入計画」は「CAF」</li><li>6つの視点（Perspective）で構成</li><li>設計はWell-Architected、導入はCAFと区別</li></ul>"
  },
  {
    "number": 39,
    "id": "Q039",
    "questionHtml": "AWS利用料金の急激な増加に気付き、原因となっているサービスを調査したいと考えています。<br>最初に利用するサービスとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Budgets"
      },
      {
        "correct": true,
        "html": "AWS Cost Explorer"
      },
      {
        "correct": false,
        "html": "AWS Pricing Calculator"
      },
      {
        "correct": false,
        "html": "AWS Artifact"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS利用料金の急増原因を最初に調査するサービスを理解しているかが問われています。</p><p>AWS Cost Explorerは、サービス別・期間別の利用料金を可視化・分析できるため、コスト急増時に「どのサービスが原因か」を特定する最初の手段として適しています。</p>",
    "correctHtml": "<p><strong>B. AWS Cost Explorer</strong></p><p>サービス別・期間別に料金推移を分析でき、コスト急増の原因調査に最初に使うツールとして最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Budgets</strong></p><p>予算超過を通知するサービスで、超過を検知できても原因の詳細分析には向きません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Pricing Calculator</strong></p><p>利用前の見積もりツールで、実績の分析はできません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Artifact</strong></p><p>コンプライアンス文書の取得サービスで、料金調査とは無関係です。</p></div>",
    "pointsHtml": "<ul><li>コスト急増の原因調査は「Cost Explorer」</li><li>Budgetsは「検知・通知」、原因分析はCost Explorer</li><li>Pricing Calculatorは事前見積もり用</li></ul>"
  },
  {
    "number": 40,
    "id": "Q040",
    "questionHtml": "開発環境では、営業時間外にAmazon EC2インスタンスを停止することでコストを削減したいと考えています。<br>この取り組みはAWS Well-Architected Frameworkのどの柱と最も関係がありますか。",
    "choices": [
      {
        "correct": false,
        "html": "セキュリティ"
      },
      {
        "correct": false,
        "html": "信頼性"
      },
      {
        "correct": true,
        "html": "コスト最適化"
      },
      {
        "correct": false,
        "html": "パフォーマンス効率"
      }
    ],
    "explanationHtml": "<p>この問題では、営業時間外にEC2を停止してコストを削減する取り組みが、Well-Architected Frameworkのどの柱に該当するかを理解しているかが問われています。</p><p>不要な時間帯にリソースを停止して無駄な支出を減らす取り組みは、コスト最適化の柱に該当します。</p>",
    "correctHtml": "<p><strong>C. コスト最適化</strong></p><p>不要な時間帯にEC2を停止して支出を抑える取り組みは、コスト最適化の柱に該当します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. セキュリティ</strong></p><p>データ保護やアクセス制御に関する柱で、コスト削減の取り組みとは異なります。</p></div><div class=\"incorrect-item\"><p><strong>B. 信頼性</strong></p><p>障害からの回復性や可用性に関する柱で、この取り組みの主眼ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. パフォーマンス効率</strong></p><p>リソースを効率的に使い性能を最適化する柱で、コスト削減が主目的の取り組みとは異なります。</p></div>",
    "pointsHtml": "<ul><li>「不要リソースの停止でコスト削減」は「コスト最適化」</li><li>各柱の観点（セキュリティ・信頼性・パフォーマンス）と混同しない</li><li>使わない時間帯の停止はコスト最適化の代表施策</li></ul>"
  },
  {
    "number": 41,
    "id": "Q041",
    "questionHtml": "一時的に大量のコンピューティングリソースが必要な映像変換処理を実施します。<br>中断されても問題ありません。<br>最も費用対効果の高い料金モデルはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Reserved Instances"
      },
      {
        "correct": false,
        "html": "Savings Plans"
      },
      {
        "correct": true,
        "html": "Spot Instances"
      },
      {
        "correct": false,
        "html": "Dedicated Hosts"
      }
    ],
    "explanationHtml": "<p>この問題では、一時的に大量のリソースが必要で中断が許容される処理に適した料金モデルを理解しているかが問われています。</p><p>Spot Instancesは余剰キャパシティを大幅な割引で利用でき、中断されても問題ない映像変換などの処理で最も費用対効果が高くなります。</p>",
    "correctHtml": "<p><strong>C. Spot Instances</strong></p><p>中断が許容される大量処理では、最大級の割引を受けられるSpotが最も費用対効果に優れます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Reserved Instances</strong></p><p>長期契約による割引モデルで、一時的な大量処理には適しません。</p></div><div class=\"incorrect-item\"><p><strong>B. Savings Plans</strong></p><p>利用コミットによる割引モデルで、一時的・中断可の用途では最安ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Dedicated Hosts</strong></p><p>物理サーバー専有の高価な料金モデルで、費用対効果の面で最適ではありません。</p></div>",
    "pointsHtml": "<ul><li>「一時的・大量・中断OK」は「Spot Instances」</li><li>Spotは最大90%程度の割引</li><li>長期・安定はSavings Plans/RI、専有はDedicated Hosts</li></ul>"
  },
  {
    "number": 42,
    "id": "Q042",
    "questionHtml": "利用状況が予測できず、短期間だけAmazon EC2を利用する予定です。<br>最も適切な料金モデルはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "オンデマンドインスタンス"
      },
      {
        "correct": false,
        "html": "Savings Plans"
      },
      {
        "correct": false,
        "html": "Reserved Instances"
      },
      {
        "correct": false,
        "html": "Spot Instances"
      }
    ],
    "explanationHtml": "<p>この問題では、利用状況が予測できず短期間だけEC2を利用する場合の料金モデルを理解しているかが問われています。</p><p>オンデマンドインスタンスは、長期契約や事前コミットが不要で、必要なときに起動して使った分だけ支払えるため、短期・予測困難な利用に最適です。</p>",
    "correctHtml": "<p><strong>A. オンデマンドインスタンス</strong></p><p>契約不要で使った分だけ支払えるため、短期間かつ予測困難な利用に最も適しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. Savings Plans</strong></p><p>1年または3年の利用コミットが前提で、短期利用には不向きです。</p></div><div class=\"incorrect-item\"><p><strong>C. Reserved Instances</strong></p><p>長期利用を前提とした割引モデルで、短期利用には適しません。</p></div><div class=\"incorrect-item\"><p><strong>D. Spot Instances</strong></p><p>安価ですが中断される可能性があり、予測困難な短期利用の第一選択としては最適ではありません。</p></div>",
    "pointsHtml": "<ul><li>「短期・予測困難・契約回避」は「オンデマンド」</li><li>長期コミットはSavings Plans/RI</li><li>中断許容ならSpotも選択肢</li></ul>"
  },
  {
    "number": 43,
    "id": "Q043",
    "questionHtml": "AWSでは利用したリソースが増えると自動的に料金も増減します。<br>この特徴として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "固定ライセンス制"
      },
      {
        "correct": false,
        "html": "年額契約制"
      },
      {
        "correct": true,
        "html": "従量課金モデル"
      },
      {
        "correct": false,
        "html": "ユーザー数課金"
      }
    ],
    "explanationHtml": "<p>この問題では、利用したリソースに応じて料金が増減するAWSの料金特徴を理解しているかが問われています。</p><p>AWSの基本的な料金の特徴は従量課金モデルで、利用量が増減すると料金もそれに応じて増減します。固定・年額・ユーザー数課金ではありません。</p>",
    "correctHtml": "<p><strong>C. 従量課金モデル</strong></p><p>利用量に応じて料金が増減する特徴であり、AWSの料金モデルを正しく表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 固定ライセンス制</strong></p><p>利用量にかかわらず一定額を支払う方式で、AWSの特徴とは異なります。</p></div><div class=\"incorrect-item\"><p><strong>B. 年額契約制</strong></p><p>年単位の固定契約であり、使用量ベースの増減とは異なります。</p></div><div class=\"incorrect-item\"><p><strong>D. ユーザー数課金</strong></p><p>利用者数に応じた課金方式で、リソース使用量に応じた課金とは異なります。</p></div>",
    "pointsHtml": "<ul><li>AWSの基本は「従量課金モデル」</li><li>使った分だけ増減（変動費化）</li><li>固定・年額・ユーザー数課金とは異なる</li></ul>"
  },
  {
    "number": 44,
    "id": "Q044",
    "questionHtml": "AWS Organizationsで複数アカウントを管理しています。<br>アカウントごとの利用状況を把握しつつ請求をまとめる機能はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Budgets"
      },
      {
        "correct": false,
        "html": "AWS Pricing Calculator"
      },
      {
        "correct": false,
        "html": "AWS Marketplace"
      },
      {
        "correct": true,
        "html": "Consolidated Billing"
      }
    ],
    "explanationHtml": "<p>この問題では、アカウントごとの利用状況を把握しつつ請求をまとめる機能を理解しているかが問われています。</p><p>Consolidated Billing（請求統合）は、AWS Organizations配下の複数アカウントの請求を1つにまとめつつ、アカウントごとの利用明細も確認できる機能です。</p>",
    "correctHtml": "<p><strong>D. Consolidated Billing</strong></p><p>請求を一本化しつつアカウント別の利用状況も把握できる機能であり、要件に合致します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Budgets</strong></p><p>予算超過を通知するサービスで、請求統合の機能ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Pricing Calculator</strong></p><p>利用前の見積もりツールで、請求統合とは無関係です。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Marketplace</strong></p><p>ソフトウェア購入サービスで、請求統合の機能はありません。</p></div>",
    "pointsHtml": "<ul><li>「請求統合＋アカウント別把握」は「Consolidated Billing」</li><li>Organizationsの機能として提供</li><li>使用量合算による割引の可能性</li></ul>"
  },
  {
    "number": 45,
    "id": "Q045",
    "questionHtml": "開発チームでは、新しいAWSサービスを導入する前に、第三者が提供する製品も含めて比較検討したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Artifact"
      },
      {
        "correct": false,
        "html": "AWS Support Center"
      },
      {
        "correct": true,
        "html": "AWS Marketplace"
      },
      {
        "correct": false,
        "html": "AWS Organizations"
      }
    ],
    "explanationHtml": "<p>この問題では、第三者が提供する製品も含めて比較検討・導入できるサービスを理解しているかが問われています。</p><p>AWS Marketplaceは、AWSだけでなくサードパーティ（第三者）ベンダーのソフトウェアやSaaS、ソリューションを検索・比較・購入・導入できるオンラインストアです。</p>",
    "correctHtml": "<p><strong>C. AWS Marketplace</strong></p><p>第三者提供の製品を含めて比較検討し導入できるサービスであり、要件に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Artifact</strong></p><p>コンプライアンス文書の取得サービスで、製品の比較検討・導入はできません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Support Center</strong></p><p>サポートケースを管理する窓口で、製品導入の場ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Organizations</strong></p><p>複数アカウント管理サービスで、製品比較・導入の機能はありません。</p></div>",
    "pointsHtml": "<ul><li>「第三者製品の比較・導入」は「AWS Marketplace」</li><li>サードパーティのソフト・SaaS・AMIなどを提供</li><li>Artifact（文書）・Support Center（サポート）とは別</li></ul>"
  },
  {
    "number": 46,
    "id": "Q046",
    "questionHtml": "自社システムへ影響するAWSメンテナンス情報を定期的に確認したいと考えています。<br>利用するサービスとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Service Health Dashboard"
      },
      {
        "correct": true,
        "html": "AWS Personal Health Dashboard"
      },
      {
        "correct": false,
        "html": "AWS Cost Explorer"
      },
      {
        "correct": false,
        "html": "AWS Trusted Advisor"
      }
    ],
    "explanationHtml": "<p>この問題では、自社システムへ影響するAWSメンテナンス情報を定期的に確認するサービスを理解しているかが問われています。</p><p>AWS Personal Health Dashboardは、利用中のリソースに影響する障害・メンテナンス情報を個別に表示・通知します。自社に関係する情報だけを継続的に確認できます。</p>",
    "correctHtml": "<p><strong>B. AWS Personal Health Dashboard</strong></p><p>自社システムに影響するメンテナンス情報を個別に確認できるため、定期的な確認に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Service Health Dashboard</strong></p><p>AWS全体の公開情報であり、自社への影響に絞られた情報ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Cost Explorer</strong></p><p>料金分析ツールで、メンテナンス情報の確認はできません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Trusted Advisor</strong></p><p>推奨事項の診断サービスで、障害・メンテナンス情報の通知は目的ではありません。</p></div>",
    "pointsHtml": "<ul><li>「自社への影響」は「Personal Health Dashboard」</li><li>「AWS全体」はService Health Dashboard</li><li>Cost Explorer（料金）・Trusted Advisor（推奨）とは目的が異なる</li></ul>"
  },
  {
    "number": 47,
    "id": "Q047",
    "questionHtml": "AWS利用料金が予算を超えそうな場合に、担当者へ事前通知したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Cost Explorer"
      },
      {
        "correct": true,
        "html": "AWS Budgets"
      },
      {
        "correct": false,
        "html": "AWS Pricing Calculator"
      },
      {
        "correct": false,
        "html": "AWS Billing Dashboard"
      }
    ],
    "explanationHtml": "<p>この問題では、利用料金が予算を超えそうな場合に事前通知するサービスを理解しているかが問われています。</p><p>AWS Budgetsは、予算（しきい値）を設定し、超過が予測される／超過した際に担当者へメールやSNSで通知できるサービスです。</p>",
    "correctHtml": "<p><strong>B. AWS Budgets</strong></p><p>予算超過が見込まれる際に事前通知できるため、担当者への通知要件に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Cost Explorer</strong></p><p>料金を分析するサービスで、予算超過の通知が主目的ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Pricing Calculator</strong></p><p>利用前の見積もりツールで、通知機能はありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Billing Dashboard</strong></p><p>現在の請求状況を確認する画面で、しきい値に基づく通知機能はありません。</p></div>",
    "pointsHtml": "<ul><li>「予算超過の事前通知」は「AWS Budgets」</li><li>しきい値・予測に基づくアラート</li><li>分析（Cost Explorer）・見積もり（Pricing Calculator）とは別</li></ul>"
  },
  {
    "number": 48,
    "id": "Q048",
    "questionHtml": "AWS環境を定期的に見直し、未使用リソースの削除やコスト削減の推奨事項を確認したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Artifact"
      },
      {
        "correct": true,
        "html": "AWS Trusted Advisor"
      },
      {
        "correct": false,
        "html": "AWS Personal Health Dashboard"
      },
      {
        "correct": false,
        "html": "AWS Marketplace"
      }
    ],
    "explanationHtml": "<p>この問題では、未使用リソースの削除やコスト削減の推奨事項を確認するサービスを理解しているかが問われています。</p><p>AWS Trusted Advisorは、コスト最適化を含む5カテゴリでベストプラクティスに沿った推奨事項を提示し、未使用リソースやアイドル状態のリソースなどを検出します。</p>",
    "correctHtml": "<p><strong>B. AWS Trusted Advisor</strong></p><p>未使用リソースの検出やコスト削減の推奨事項を提示できるため、環境の定期的な見直しに最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Artifact</strong></p><p>コンプライアンス文書の取得サービスで、コスト削減の推奨は行いません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Personal Health Dashboard</strong></p><p>障害・メンテナンス情報を表示するサービスで、コスト削減の推奨は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Marketplace</strong></p><p>ソフトウェア購入サービスで、推奨事項の提示機能はありません。</p></div>",
    "pointsHtml": "<ul><li>「未使用リソース検出・コスト削減の推奨」は「Trusted Advisor」</li><li>5カテゴリで環境をチェック</li><li>Artifact（文書）・Personal Health（障害）とは別</li></ul>"
  },
  {
    "number": 49,
    "id": "Q049",
    "questionHtml": "企業では、AWSのコンプライアンス認証や監査レポートを確認する必要があります。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Marketplace"
      },
      {
        "correct": false,
        "html": "AWS Organizations"
      },
      {
        "correct": true,
        "html": "AWS Artifact"
      },
      {
        "correct": false,
        "html": "AWS Cost Explorer"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSのコンプライアンス認証や監査レポートを確認するサービスを理解しているかが問われています。</p><p>AWS Artifactは、SOC・ISO・PCI DSSなどのコンプライアンスレポートや監査資料をオンデマンドで取得できるサービスです。</p>",
    "correctHtml": "<p><strong>C. AWS Artifact</strong></p><p>コンプライアンス認証や監査レポートを取得できるサービスであり、要件に最適です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Marketplace</strong></p><p>ソフトウェア購入サービスで、監査レポートの取得はできません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Organizations</strong></p><p>複数アカウント管理サービスで、監査資料の提供機能はありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Cost Explorer</strong></p><p>料金分析ツールで、コンプライアンス文書の取得はできません。</p></div>",
    "pointsHtml": "<ul><li>「コンプライアンス・監査レポート」は「AWS Artifact」</li><li>SOC・ISO・PCI DSSなどをダウンロード可能</li><li>監査対応・セキュリティ審査で活用</li></ul>"
  },
  {
    "number": 50,
    "id": "Q050",
    "questionHtml": "AWSクラウドを利用する最大のメリットとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "利用するすべてのサービスが無料になること"
      },
      {
        "correct": false,
        "html": "すべてのシステムで運用管理が不要になること"
      },
      {
        "correct": false,
        "html": "ハードウェア障害が絶対に発生しないこと"
      },
      {
        "correct": true,
        "html": "必要に応じてリソースを柔軟に利用し、利用した分だけ料金を支払えること"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドを利用する最大のメリットを理解しているかが問われています。</p><p>AWSクラウドの中核的なメリットは、必要に応じてリソースを柔軟に増減（弾力性）でき、使った分だけ従量課金で支払える点です。すべてが無料になる、運用が完全に不要になる、障害が絶対に起きない、といったことはありません。</p>",
    "correctHtml": "<p><strong>D. 必要に応じてリソースを柔軟に利用し、利用した分だけ料金を支払えること</strong></p><p>弾力性と従量課金というクラウドの本質的なメリットを正しく表しており、正解です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 利用するすべてのサービスが無料になること</strong></p><p>無料利用枠はあるものの、すべてが無料になるわけではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. すべてのシステムで運用管理が不要になること</strong></p><p>責任共有モデルにより利用者側の運用管理は残るため、完全に不要にはなりません。</p></div><div class=\"incorrect-item\"><p><strong>C. ハードウェア障害が絶対に発生しないこと</strong></p><p>物理障害は起こり得るため、可用性設計で備える必要があり、絶対に発生しないとは言えません。</p></div>",
    "pointsHtml": "<ul><li>クラウドの本質は「弾力性（柔軟なスケール）＋従量課金」</li><li>すべて無料・運用不要・障害ゼロは誤り</li><li>責任共有モデルにより利用者の責任範囲は残る</li></ul>"
  }
];
