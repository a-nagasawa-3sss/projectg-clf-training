// 自動生成ファイル: publish/_build/parse.js により生成
const QUESTIONS = [
  {
    "number": 1,
    "id": "Q001",
    "questionHtml": "あるスタートアップ企業では、新しいWebサービスを数週間以内に公開する必要があります。<br>サーバー機器を購入せず、必要になった時点でコンピューティングリソースを利用したいと考えています。<br>この要件を最も満たすクラウドの特徴はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "高可用性"
      },
      {
        "correct": true,
        "html": "オンデマンドセルフサービス"
      },
      {
        "correct": false,
        "html": "グローバルインフラストラクチャ"
      },
      {
        "correct": false,
        "html": "マネージドサービス"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドの代表的な特徴である<strong>オンデマンドセルフサービス</strong>を理解しているかが問われています。</p><p>オンデマンドセルフサービスとは、利用者自身がAWSマネジメントコンソール、CLI、APIなどを利用して、必要なタイミングでコンピューティングリソースを作成・削除できるクラウドの基本特性です。サーバー機器の購入や設置を待つ必要がなく、数分で環境を利用開始できます。</p>",
    "correctHtml": "<p><strong>B. オンデマンドセルフサービス</strong></p><p>必要になった時点で利用者自身がリソースを準備できるため、サービスを短期間で開始できる点が最大の特徴です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 高可用性</strong></p><p>高可用性はシステムを停止しにくくする設計思想です。オンデマンドでリソースを利用できることとは異なります。</p></div><div class=\"incorrect-item\"><p><strong>C. グローバルインフラストラクチャ</strong></p><p>世界中のリージョンやアベイラビリティゾーンを提供するAWSの特徴ですが、「必要になった時点で利用できる」という要件を直接満たすものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. マネージドサービス</strong></p><p>AWSが運用の一部を管理してくれるサービスの総称です。クラウドの基本特性そのものではありません。</p></div>",
    "pointsHtml": "<ul><li>「必要な時に自分で利用開始できる」という表現は<strong>オンデマンドセルフサービス</strong></li><li>クラウドの5つの基本特性は頻出</li><li>高可用性やマネージドサービスとの違いを整理して覚える</li></ul>"
  },
  {
    "number": 2,
    "id": "Q002",
    "questionHtml": "AWSクラウドを利用することで、企業が初期投資（CAPEX）を削減できる最も大きな理由はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWSがOSのライセンスを無料提供するため"
      },
      {
        "correct": false,
        "html": "ネットワーク機器を購入する必要がないため"
      },
      {
        "correct": true,
        "html": "サーバーなどの設備投資を運用費へ置き換えられるため"
      },
      {
        "correct": false,
        "html": "データ転送料金が常に無料だから"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドが<strong>設備投資（CAPEX）を運用費（OPEX）へ変えられる</strong>ことを理解しているかが問われています。</p><p>オンプレミスではサーバーやストレージなどを購入するため、多額の初期投資が必要になります。一方、AWSでは必要な分だけ利用して料金を支払うため、大きな初期投資を抑えることができます。</p>",
    "correctHtml": "<p><strong>C. サーバーなどの設備投資を運用費へ置き換えられるため</strong></p><p>AWSではハードウェアを所有せず利用するため、設備投資を削減できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWSがOSのライセンスを無料提供するため</strong></p><p>OSライセンスが理由ではありません。問題のポイントは設備投資そのものです。</p></div><div class=\"incorrect-item\"><p><strong>B. ネットワーク機器を購入する必要がないため</strong></p><p>一部の機器は不要になりますが、CAPEX削減の最大の理由ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. データ転送料金が常に無料だから</strong></p><p>データ転送料金は条件によって発生します。常に無料ではありません。</p></div>",
    "pointsHtml": "<ul><li>CAPEX＝設備投資</li><li>OPEX＝運用費</li><li>「初期投資を抑える」はAWSの代表的なメリット</li></ul>"
  },
  {
    "number": 3,
    "id": "Q003",
    "questionHtml": "世界中の利用者へ低遅延でサービスを提供したい企業があります。<br>AWSが世界各地にリージョンを展開している最大のメリットはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMユーザーを増やせる"
      },
      {
        "correct": false,
        "html": "Auto Scalingが利用できる"
      },
      {
        "correct": false,
        "html": "AWS Organizationsを利用できる"
      },
      {
        "correct": true,
        "html": "利用者に近い場所でサービスを提供できる"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの<strong>グローバルインフラストラクチャ</strong>を利用するメリットを理解しているかが問われています。</p><p>AWSは世界各地にリージョンを展開しており、利用者に近い場所へシステムを配置できます。これによりネットワーク遅延を小さくし、快適なサービスを提供できます。</p>",
    "correctHtml": "<p><strong>D. 利用者に近い場所でサービスを提供できる</strong></p><p>利用者との物理的距離が短くなることで、レスポンス改善が期待できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMユーザーを増やせる</strong></p><p>IAMは認証・認可のサービスであり、リージョン展開とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Auto Scalingが利用できる</strong></p><p>Auto Scalingはリソースの自動増減機能であり、リージョンのメリットではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Organizationsを利用できる</strong></p><p>Organizationsはアカウント管理サービスです。グローバルインフラとは無関係です。</p></div>",
    "pointsHtml": "<ul><li>リージョン＝地理的に独立したAWS拠点</li><li>利用者に近いリージョンを選ぶことで低遅延を実現できる</li><li>CloudFrontとの違いも併せて整理しておく</li></ul>"
  },
  {
    "number": 4,
    "id": "Q004",
    "questionHtml": "ある企業では、利用していないサーバーにも毎月固定費を支払っています。<br>AWSクラウドへ移行した場合、この課題を最も改善できるクラウドの特徴はどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "従量課金"
      },
      {
        "correct": false,
        "html": "IAMポリシー"
      },
      {
        "correct": false,
        "html": "Amazon Inspector"
      },
      {
        "correct": false,
        "html": "AWS Artifact"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの<strong>従量課金（Pay as you go）</strong>の考え方を理解しているかが問われています。</p><p>オンプレミスでは利用していないサーバーでも維持費が発生しますが、AWSでは不要になったリソースを停止・削除することでコストを削減できます。</p>",
    "correctHtml": "<p><strong>A. 従量課金</strong></p><p>利用した分だけ料金を支払うため、無駄な固定費を削減できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. IAMポリシー</strong></p><p>アクセス権限を定義する仕組みであり、料金体系とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Inspector</strong></p><p>脆弱性を評価するセキュリティサービスです。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Artifact</strong></p><p>コンプライアンスレポートなどを提供するサービスです。</p></div>",
    "pointsHtml": "<ul><li>「使った分だけ支払う」＝従量課金</li><li>不要なリソースは停止・削除することでコストを削減できる</li></ul>"
  },
  {
    "number": 5,
    "id": "Q005",
    "questionHtml": "オンプレミス環境と比較した場合、AWSクラウド最大のメリットとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "必ずオンプレミスより性能が高い"
      },
      {
        "correct": true,
        "html": "必要に応じて柔軟にリソースを増減できる"
      },
      {
        "correct": false,
        "html": "ハードウェア障害が発生しない"
      },
      {
        "correct": false,
        "html": "ネットワーク設計が不要になる"
      }
    ],
    "explanationHtml": "<p>この問題では、オンプレミスと比較した場合のAWSクラウド最大のメリットを理解しているかが問われています。</p><p>AWSでは需要に応じてリソースを増減できるため、将来の最大負荷を見越して過剰な設備を用意する必要がありません。これにより、コストと運用効率を最適化できます。</p>",
    "correctHtml": "<p><strong>B. 必要に応じて柔軟にリソースを増減できる</strong></p><p>クラウドの最大の強みの1つが、需要に応じた柔軟なスケールアップ・スケールダウンです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 必ずオンプレミスより性能が高い</strong></p><p>AWSのメリットは柔軟性や運用性であり、必ず性能が高いとは限りません。</p></div><div class=\"incorrect-item\"><p><strong>C. ハードウェア障害が発生しない</strong></p><p>障害は発生し得ます。AWSでは障害に備えた設計（高可用性）が重要です。</p></div><div class=\"incorrect-item\"><p><strong>D. ネットワーク設計が不要になる</strong></p><p>AWSでもVPCやサブネットなどのネットワーク設計は必要です。</p></div>",
    "pointsHtml": "<ul><li>「必要に応じて増減できる」＝Elasticity（弾力性）</li><li>「将来の最大負荷を見越した過剰投資が不要」という考え方はCLFで頻出</li><li>「クラウド＝障害がない」ではなく、「障害に備えて設計できる」が正しい考え方</li></ul>"
  },
  {
    "number": 6,
    "id": "Q006",
    "questionHtml": "AWSクラウドの責任共有モデルにおいて、AWSが責任を負うものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMユーザーの管理"
      },
      {
        "correct": false,
        "html": "Amazon EC2インスタンス内のOS設定"
      },
      {
        "correct": false,
        "html": "セキュリティグループ設定"
      },
      {
        "correct": true,
        "html": "データセンター設備の保守"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの<strong>責任共有モデル（Shared Responsibility Model）</strong>を理解しているかが問われています。</p><p>AWSでは、クラウド全体の安全性をAWSが担当し、クラウド上で利用するリソースやデータの管理は利用者が担当します。これを「責任共有モデル」と呼びます。</p>",
    "correctHtml": "<p><strong>D. データセンター設備の保守</strong></p><p>AWSはデータセンター、ネットワーク機器、物理サーバー、電源設備、空調設備など、クラウド基盤（Security <strong>of</strong> the Cloud）の管理責任を負います。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMユーザーの管理</strong></p><p>IAMユーザーやロール、パスワードポリシーなどの設定は利用者の責任です。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon EC2インスタンス内のOS設定</strong></p><p>EC2のOS設定やセキュリティパッチ適用は利用者が実施します。</p></div><div class=\"incorrect-item\"><p><strong>C. セキュリティグループ設定</strong></p><p>セキュリティグループやネットワークACLなどのアクセス制御設定も利用者が管理します。</p></div>",
    "pointsHtml": "<ul><li>AWS：「クラウド<strong>の</strong>セキュリティ（Security of the Cloud）」</li><li>利用者：「クラウド<strong>内の</strong>セキュリティ（Security in the Cloud）」</li><li>「物理設備」はAWS、「OS・IAM・データ」は利用者と覚えると整理しやすいです。</li></ul>"
  },
  {
    "number": 7,
    "id": "Q007",
    "questionHtml": "クラウドコンピューティングの特徴として「必要な時だけサーバーを増やし、不要になれば削除できる」ことを何と呼びますか。",
    "choices": [
      {
        "correct": false,
        "html": "フォールトトレランス"
      },
      {
        "correct": false,
        "html": "耐久性"
      },
      {
        "correct": true,
        "html": "弾力性（Elasticity）"
      },
      {
        "correct": false,
        "html": "可観測性"
      }
    ],
    "explanationHtml": "<p>この問題では、クラウドの特徴である<strong>Elasticity（弾力性）</strong>を理解しているかが問われています。</p><p>Elasticityとは、システム負荷に応じてリソースを自動または迅速に増減できる性質です。必要なときだけリソースを増やし、不要になれば減らすことで、コストと性能を最適化できます。</p>",
    "correctHtml": "<p><strong>C. 弾力性（Elasticity）</strong></p><p>アクセス数や負荷の変動に応じて、リソースを柔軟に増減できるクラウドの代表的な特徴です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. フォールトトレランス</strong></p><p>障害が発生してもサービスを継続できる設計思想です。</p></div><div class=\"incorrect-item\"><p><strong>B. 耐久性</strong></p><p>データが失われにくい性質を指します。Amazon S3の「99.999999999%（イレブンナイン）」の耐久性が代表例です。</p></div><div class=\"incorrect-item\"><p><strong>D. 可観測性</strong></p><p>システムの状態をログやメトリクスから把握する考え方であり、リソースの増減とは関係ありません。</p></div>",
    "pointsHtml": "<ul><li>Elasticity＝需要に応じて増減</li><li>Scalability＝将来的に拡張できる能力</li><li>この2つの違いはCLFで頻出です。</li></ul>"
  },
  {
    "number": 8,
    "id": "Q008",
    "questionHtml": "企業では毎年繁忙期のみアクセス数が10倍になります。<br>このような変動へ最も対応しやすいクラウドの特徴はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "高耐久性"
      },
      {
        "correct": false,
        "html": "マルチテナント"
      },
      {
        "correct": true,
        "html": "スケーラビリティ"
      },
      {
        "correct": false,
        "html": "SLA"
      }
    ],
    "explanationHtml": "<p>この問題では、<strong>Scalability（スケーラビリティ）</strong>の考え方を理解しているかが問われています。</p><p>スケーラビリティとは、システムの規模を拡張できる能力のことです。利用者数やアクセス数が増加しても、リソースを追加することで性能を維持できます。</p>",
    "correctHtml": "<p><strong>C. スケーラビリティ</strong></p><p>毎年繁忙期だけアクセス数が増加するようなケースでは、必要に応じてシステムを拡張できるスケーラビリティが重要になります。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 高耐久性</strong></p><p>データが失われにくい性質を指します。</p></div><div class=\"incorrect-item\"><p><strong>B. マルチテナント</strong></p><p>複数の利用者が共通のインフラを共有するクラウドの仕組みです。</p></div><div class=\"incorrect-item\"><p><strong>D. SLA</strong></p><p>サービス提供者が保証する可用性や品質に関する契約であり、リソース拡張とは異なります。</p></div>",
    "pointsHtml": "<ul><li>Scalability＝拡張可能性</li><li>Elasticity＝需要に応じた増減</li><li>「繁忙期への対応」という表現があれば、この2つを比較して考えましょう。</li></ul>"
  },
  {
    "number": 9,
    "id": "Q009",
    "questionHtml": "AWSクラウドでは数分で仮想サーバーを作成できます。<br>この特徴によって最も期待できる効果はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "データベース容量が無制限になる"
      },
      {
        "correct": false,
        "html": "全サービスが無料になる"
      },
      {
        "correct": false,
        "html": "ハードウェア故障がなくなる"
      },
      {
        "correct": true,
        "html": "ビジネス開始までの時間を短縮できる"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドの<strong>迅速なプロビジョニング</strong>がもたらすビジネス上のメリットを理解しているかが問われています。</p><p>オンプレミスではサーバー調達に数週間から数か月かかることがありますが、AWSでは数分で環境を構築できます。その結果、新しいサービスを市場へ早く投入できます。</p>",
    "correctHtml": "<p><strong>D. ビジネス開始までの時間を短縮できる</strong></p><p>AWSの俊敏性（Agility）を活かすことで、サービス開発や検証を迅速に進められます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. データベース容量が無制限になる</strong></p><p>AWSでもサービスごとの容量や制限があります。</p></div><div class=\"incorrect-item\"><p><strong>B. 全サービスが無料になる</strong></p><p>AWSは従量課金制であり、多くのサービスは有料です。</p></div><div class=\"incorrect-item\"><p><strong>C. ハードウェア故障がなくなる</strong></p><p>物理障害は発生し得ますが、AWSでは障害に備えた設計が可能です。</p></div>",
    "pointsHtml": "<ul><li>「数分で環境構築」→ Agility（俊敏性）</li><li>「市場投入までの時間短縮（Time to Market）」はAWSの重要なメリットです。</li></ul>"
  },
  {
    "number": 10,
    "id": "Q010",
    "questionHtml": "クラウドサービスを利用する目的として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "ハードウェア管理作業を増やす"
      },
      {
        "correct": true,
        "html": "インフラ管理負荷を軽減する"
      },
      {
        "correct": false,
        "html": "ソフトウェア更新を禁止する"
      },
      {
        "correct": false,
        "html": "社内ネットワークを不要にする"
      }
    ],
    "explanationHtml": "<p>この問題では、クラウドサービスを利用する目的を理解しているかが問われています。</p><p>AWSを利用する最大の目的は、サーバーやネットワークなどのインフラ管理にかかる負担を減らし、本来注力すべきアプリケーション開発やビジネス価値の創出に時間を使えるようにすることです。</p>",
    "correctHtml": "<p><strong>B. インフラ管理負荷を軽減する</strong></p><p>AWSでは物理インフラの運用をAWSが担当するため、利用者はインフラ運用の負担を大幅に軽減できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. ハードウェア管理作業を増やす</strong></p><p>AWS導入により、ハードウェア管理作業は減少します。</p></div><div class=\"incorrect-item\"><p><strong>C. ソフトウェア更新を禁止する</strong></p><p>ソフトウェア更新は必要に応じて利用者が実施します。</p></div><div class=\"incorrect-item\"><p><strong>D. 社内ネットワークを不要にする</strong></p><p>AWSを利用しても、企業ネットワークやVPNなどの構成が必要になる場合があります。</p></div>",
    "pointsHtml": "<ul><li>AWS導入の目的は「インフラ運用の削減」</li><li>浮いた時間を「ビジネス価値の創出」に充てることが重要です。</li></ul>"
  },
  {
    "number": 11,
    "id": "Q011",
    "questionHtml": "AWSクラウドでは、利用した分だけ料金を支払います。<br>この料金モデルを何と呼びますか。",
    "choices": [
      {
        "correct": false,
        "html": "定額課金"
      },
      {
        "correct": false,
        "html": "年間契約"
      },
      {
        "correct": false,
        "html": "ライセンス課金"
      },
      {
        "correct": true,
        "html": "従量課金（Pay as you go）"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの基本的な料金体系である<strong>従量課金（Pay as you go）</strong>を理解しているかが問われています。</p><p>AWSでは、利用したコンピューティング、ストレージ、データ転送量などに応じて料金が発生します。必要なリソースだけを利用することで、無駄なコストを削減できます。</p>",
    "correctHtml": "<p><strong>D. 従量課金（Pay as you go）</strong></p><p>AWSの代表的な料金モデルです。初期投資を抑え、利用量に応じて柔軟にコストを管理できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 定額課金</strong></p><p>AWSの基本料金体系ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. 年間契約</strong></p><p>Savings Plansなど一部の割引制度では長期利用契約がありますが、AWS全体の基本料金モデルではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. ライセンス課金</strong></p><p>一部ソフトウェアではライセンス料金がありますが、AWS全体の課金モデルを表すものではありません。</p></div>",
    "pointsHtml": "<ul><li>Pay as you go＝利用した分だけ支払う</li><li>「初期投資を抑えられる」「不要なリソースを停止するとコスト削減できる」と関連付けて覚えましょう。</li></ul>"
  },
  {
    "number": 12,
    "id": "Q012",
    "questionHtml": "オンプレミス環境では数週間かかるサーバー調達を、AWSでは数分で実施できます。<br>このメリットを最も表す考え方はどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "ビジネスの俊敏性（Agility）"
      },
      {
        "correct": false,
        "html": "可用性"
      },
      {
        "correct": false,
        "html": "耐障害性"
      },
      {
        "correct": false,
        "html": "データ耐久性"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドの代表的なメリットである<strong>俊敏性（Agility）</strong>を理解しているかが問われています。</p><p>AWSではサーバーやデータベースなどのリソースを数分で構築できるため、新しいサービスやシステムを素早くリリースできます。これにより、市場の変化や顧客ニーズへ迅速に対応できます。</p>",
    "correctHtml": "<p><strong>A. ビジネスの俊敏性（Agility）</strong></p><p>AWSを利用することで、ハードウェアの調達や設置を待つことなくシステムを構築できます。その結果、開発スピードが向上し、ビジネスチャンスを逃しにくくなります。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. 可用性</strong></p><p>可用性は「システムがどれだけ止まらず稼働し続けるか」を示す指標であり、サーバーを数分で構築できる俊敏性（Agility）とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>C. 耐障害性</strong></p><p>耐障害性は「障害が発生してもサービスを継続できる設計思想」。\n俊敏性とは別の概念であり、サーバー構築の速さを説明するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. データ耐久性</strong></p><p>データ耐久性は「データが失われにくい性質」。\nS3 のイレブンナイン（99.999999999%）が代表例で、俊敏性とは無関係です。</p></div>",
    "pointsHtml": "<ul><li>Agility（俊敏性）＝素早く構築・変更・リリースできること</li><li>「市場投入までの時間短縮（Time to Market）」と関連付けて覚えましょう。</li></ul>"
  },
  {
    "number": 13,
    "id": "Q013",
    "questionHtml": "AWSクラウドの利用により、企業は何により多くの時間を割けるようになりますか。",
    "choices": [
      {
        "correct": false,
        "html": "ハードウェア保守"
      },
      {
        "correct": false,
        "html": "ラック設置"
      },
      {
        "correct": true,
        "html": "ビジネス価値を生み出す開発"
      },
      {
        "correct": false,
        "html": "UPS管理"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドを利用することで企業が インフラ管理から解放され、より本質的な業務へ時間を使えるようになる理由 を理解しているかが問われています。\nAWSでは、物理サーバーの保守・ラック設置・電源管理・UPS管理などの作業を AWS が担当します。そのため、企業はインフラ運用に時間を取られず、<strong>ビジネス価値を生み出す開発やサービス改善に集中できる</strong>ようになります。</p>",
    "correctHtml": "<p><strong>C. ビジネス価値を生み出す開発</strong></p><p>AWSが物理インフラを管理することで、企業はアプリケーション開発や新規サービスの創出など、価値につながる業務へより多くの時間を割けるようになります。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. ハードウェア保守</strong></p><p>AWSが担当するため、企業が時間を使う必要はありません。</p></div><div class=\"incorrect-item\"><p><strong>B. ラック設置</strong></p><p>クラウド利用ではラック設置作業は不要です。</p></div><div class=\"incorrect-item\"><p><strong>D. UPS管理</strong></p><p>電源・UPSなどの物理設備は AWS が管理します。</p></div>",
    "pointsHtml": "<ul><li>企業はインフラ管理ではなく、ビジネス価値を生み出す開発へ集中できる</li></ul>"
  },
  {
    "number": 14,
    "id": "Q014",
    "questionHtml": "AWSクラウドで「スケーラビリティ」と「弾力性（Elasticity）」の違いとして最も適切な説明はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "同じ意味であり区別はない"
      },
      {
        "correct": false,
        "html": "スケーラビリティは料金、弾力性は性能を表す"
      },
      {
        "correct": true,
        "html": "スケーラビリティは拡張可能性、弾力性は需要に応じた自動増減を表す"
      },
      {
        "correct": false,
        "html": "弾力性はオンプレミス専用の概念である"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドの重要概念である<strong>スケーラビリティ</strong>と<strong>弾力性（Elasticity）</strong>の違いを理解しているかが問われています。</p><p>スケーラビリティは、需要の増加に対してリソースを追加し、システム規模を拡張できる能力を指します。一方、弾力性は、需要の変動に合わせてリソースを自動的に増減させ、常に最適な量へ調整できる性質を指します。両者は似ていますが、「拡張できる能力」と「需要に追従して増減できる能力」という点で異なります。</p>",
    "correctHtml": "<p><strong>C. スケーラビリティは拡張可能性、弾力性は需要に応じた自動増減を表す</strong></p><p>スケーラビリティは規模の拡張性、弾力性は需要変動への自動追従を表すという点が正しい区別です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 同じ意味であり区別はない</strong></p><p>両者は関連しますが、意味は異なります。混同しやすいため試験でも区別が問われます。</p></div><div class=\"incorrect-item\"><p><strong>B. スケーラビリティは料金、弾力性は性能を表す</strong></p><p>どちらも料金や性能を直接示す用語ではありません。誤った説明です。</p></div><div class=\"incorrect-item\"><p><strong>D. 弾力性はオンプレミス専用の概念である</strong></p><p>弾力性はむしろクラウドで実現しやすい特性であり、オンプレミス専用の概念ではありません。</p></div>",
    "pointsHtml": "<ul><li>スケーラビリティ＝拡張できる能力</li><li>弾力性（Elasticity）＝需要に応じて自動的に増減できる能力</li><li>この2つの違いはCLFで頻出です。</li></ul>"
  },
  {
    "number": 15,
    "id": "Q015",
    "questionHtml": "AWSクラウドでは新規サービスの実験を短期間・低コストで開始できます。<br>この理由として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "全サービスが無料だから"
      },
      {
        "correct": false,
        "html": "AWSが開発を代行するから"
      },
      {
        "correct": false,
        "html": "ソースコードが不要だから"
      },
      {
        "correct": true,
        "html": "必要な分だけリソースを利用し不要になれば削除できる"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドが<strong>低コスト・短期間での実験（Experimentation）</strong>を可能にする理由を理解しているかが問われています。</p><p>AWSでは必要なリソースを必要な分だけ利用し、不要になればすぐに削除できます。この従量課金と柔軟なリソース管理により、失敗のコストを抑えながら新しいアイデアを試すことができます。</p>",
    "correctHtml": "<p><strong>D. 必要な分だけリソースを利用し不要になれば削除できる</strong></p><p>使った分だけ支払い、不要になれば削除できるため、実験にかかるコストとリスクを最小化できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 全サービスが無料だから</strong></p><p>AWSは従量課金制であり、多くのサービスは有料です。無料利用枠はありますがすべて無料ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWSが開発を代行するから</strong></p><p>AWSがアプリケーション開発を代行するわけではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. ソースコードが不要だから</strong></p><p>サービスの実験や開発にはソースコードが必要です。理由になりません。</p></div>",
    "pointsHtml": "<ul><li>実験を低コストで始められるのは「従量課金」と「不要になれば削除できる」ため</li><li>迅速な実験（Experimentation）はクラウドの重要な価値の1つ</li></ul>"
  },
  {
    "number": 16,
    "id": "Q016",
    "questionHtml": "AWSクラウドにおいて「高可用性」を実現する代表的な考え方はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "同じAZのみ利用する"
      },
      {
        "correct": false,
        "html": "IAMユーザーを増やす"
      },
      {
        "correct": true,
        "html": "複数のアベイラビリティゾーンへ分散配置する"
      },
      {
        "correct": false,
        "html": "Amazon S3のみ利用する"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドで<strong>高可用性</strong>を実現する代表的な考え方を理解しているかが問われています。</p><p>高可用性を高めるには、単一の障害点を避けることが重要です。AWSでは、地理的・電源的に独立した複数のアベイラビリティゾーン（AZ）へリソースを分散配置することで、一方のAZに障害が発生してもサービスを継続できます。</p>",
    "correctHtml": "<p><strong>C. 複数のアベイラビリティゾーンへ分散配置する</strong></p><p>複数のAZへ分散することでマルチAZ構成となり、単一障害点を排除して可用性を高められます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 同じAZのみ利用する</strong></p><p>単一のAZに依存すると、そのAZの障害時にシステム全体が停止する可能性があります。</p></div><div class=\"incorrect-item\"><p><strong>B. IAMユーザーを増やす</strong></p><p>IAMは認証・認可の仕組みであり、可用性の向上とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon S3のみ利用する</strong></p><p>S3は高い耐久性を持つストレージですが、それだけでシステム全体の高可用性が実現するわけではありません。</p></div>",
    "pointsHtml": "<ul><li>高可用性＝マルチAZ（複数のアベイラビリティゾーンへ分散）</li><li>単一障害点（SPOF）を避ける設計が重要</li><li>「障害対策」「可用性向上」というキーワードに注目</li></ul>"
  },
  {
    "number": 17,
    "id": "Q017",
    "questionHtml": "AWSクラウドの利用により、企業がインフラではなくアプリケーション開発へ注力できる理由として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWSが全てのアプリケーションを保守するため"
      },
      {
        "correct": true,
        "html": "インフラ管理の多くをAWSが担当するため"
      },
      {
        "correct": false,
        "html": "AWSが利用者のデータを管理するため"
      },
      {
        "correct": false,
        "html": "AWSではセキュリティ対策が不要になるため"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドの利用により企業が<strong>インフラ管理からアプリケーション開発へ注力できる理由</strong>を理解しているかが問われています。</p><p>AWSでは物理サーバーやネットワーク機器などのインフラ管理の多くをAWSが担当します。そのため、企業はインフラの調達・保守に時間を取られず、アプリケーション開発など価値を生む業務へ集中できます。</p>",
    "correctHtml": "<p><strong>B. インフラ管理の多くをAWSが担当するため</strong></p><p>AWSがインフラの物理的な管理を引き受けることで、利用者は開発へ注力できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWSが全てのアプリケーションを保守するため</strong></p><p>アプリケーションの開発・保守は利用者の責任です。AWSが全て保守するわけではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWSが利用者のデータを管理するため</strong></p><p>データの管理・保護は利用者の責任です（責任共有モデル）。</p></div><div class=\"incorrect-item\"><p><strong>D. AWSではセキュリティ対策が不要になるため</strong></p><p>責任共有モデルにより、利用者側でもIAMやデータ保護などのセキュリティ対策が必要です。</p></div>",
    "pointsHtml": "<ul><li>インフラ管理をAWSへ任せることで、開発などの本業へ集中できる</li><li>「セキュリティ対策が不要になる」は誤り（責任共有モデル）</li></ul>"
  },
  {
    "number": 18,
    "id": "Q018",
    "questionHtml": "新しいサービスを開発するチームでは、機能追加を毎週実施しています。<br>インフラ構築に時間をかけず、開発速度を向上させたい場合、AWSクラウドの最大のメリットはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "データセンターの場所を指定できる"
      },
      {
        "correct": false,
        "html": "すべてのAWSサービスが無料で利用できる"
      },
      {
        "correct": true,
        "html": "必要なリソースを短時間で調達できる"
      },
      {
        "correct": false,
        "html": "サーバー障害が一切発生しない"
      }
    ],
    "explanationHtml": "<p>この問題では、開発速度を向上させたい場面でAWSクラウドが提供する<strong>最大のメリット（俊敏性）</strong>を理解しているかが問われています。</p><p>AWSでは、必要なリソースを数分で調達できるため、インフラ構築に時間をかけずに機能追加や開発を進められます。ハードウェアの調達を待つ必要がない点がオンプレミスとの大きな違いです。</p>",
    "correctHtml": "<p><strong>C. 必要なリソースを短時間で調達できる</strong></p><p>短時間でリソースを準備できるため、開発速度を大きく向上させられます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. データセンターの場所を指定できる</strong></p><p>リージョン選択は可能ですが、開発速度向上の最大のメリットではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. すべてのAWSサービスが無料で利用できる</strong></p><p>AWSは従量課金制であり、すべて無料ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. サーバー障害が一切発生しない</strong></p><p>物理障害は発生し得ます。障害に備えた設計が重要です。</p></div>",
    "pointsHtml": "<ul><li>「短時間で調達」＝俊敏性（Agility）</li><li>「市場投入までの時間短縮（Time to Market）」につながる</li></ul>"
  },
  {
    "number": 19,
    "id": "Q019",
    "questionHtml": "クラウドの「Economies of Scale（規模の経済）」として最も適切な説明はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "利用者ごとに専用データセンターを構築すること"
      },
      {
        "correct": true,
        "html": "AWSが大量調達・大量運用することでコストを削減し、その恩恵を利用者へ還元すること"
      },
      {
        "correct": false,
        "html": "利用者がAWS機器を共同購入すること"
      },
      {
        "correct": false,
        "html": "AWSが利用者ごとに料金を固定すること"
      }
    ],
    "explanationHtml": "<p>この問題では、クラウドの原則の1つである<strong>Economies of Scale（規模の経済）</strong>を理解しているかが問われています。</p><p>規模の経済とは、AWSが世界中の多数の利用者向けに大量のインフラを調達・運用することで単価を下げ、そのコスト削減の恩恵を利用者へ低価格として還元する考え方です。</p>",
    "correctHtml": "<p><strong>B. AWSが大量調達・大量運用することでコストを削減し、その恩恵を利用者へ還元すること</strong></p><p>大量の需要を集約することで単価を下げ、利用者は低価格でサービスを利用できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 利用者ごとに専用データセンターを構築すること</strong></p><p>専用構築はむしろコストが高くなり、規模の経済の考え方とは逆です。</p></div><div class=\"incorrect-item\"><p><strong>C. 利用者がAWS機器を共同購入すること</strong></p><p>利用者が機器を購入するわけではありません。AWSがインフラを提供します。</p></div><div class=\"incorrect-item\"><p><strong>D. AWSが利用者ごとに料金を固定すること</strong></p><p>規模の経済は料金固定の話ではなく、大量調達によるコスト削減と還元を指します。</p></div>",
    "pointsHtml": "<ul><li>Economies of Scale＝規模の経済</li><li>大量利用によるコスト削減の恩恵が利用者へ還元される</li></ul>"
  },
  {
    "number": 20,
    "id": "Q020",
    "questionHtml": "AWSクラウドでは数百台のサーバーを短時間で構築できます。<br>この特徴が最も役立つ場面はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "プリンターを追加するとき"
      },
      {
        "correct": true,
        "html": "大規模な負荷試験環境を短期間だけ構築するとき"
      },
      {
        "correct": false,
        "html": "社員証を発行するとき"
      },
      {
        "correct": false,
        "html": "LANケーブルを交換するとき"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドの<strong>迅速かつ大規模なプロビジョニング</strong>が役立つ場面を理解しているかが問われています。</p><p>AWSでは数百台規模のサーバーも短時間で構築でき、不要になればすぐに削除できます。この特徴は、一時的に大量のリソースが必要となる大規模な負荷試験環境の構築などで特に効果を発揮します。</p>",
    "correctHtml": "<p><strong>B. 大規模な負荷試験環境を短期間だけ構築するとき</strong></p><p>必要な期間だけ大量のリソースを利用し、終了後に削除できるため、コストを抑えつつ大規模なテストを実施できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. プリンターを追加するとき</strong></p><p>プリンターの追加はAWSのコンピューティングリソースとは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>C. 社員証を発行するとき</strong></p><p>社員証発行はサーバー構築の特徴が役立つ場面ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. LANケーブルを交換するとき</strong></p><p>物理的な作業であり、クラウドのリソース構築とは関係ありません。</p></div>",
    "pointsHtml": "<ul><li>短期間だけ大量リソースを使う用途（負荷試験など）でクラウドの強みが生きる</li><li>使い終わったら削除することでコストを抑えられる</li></ul>"
  },
  {
    "number": 21,
    "id": "Q021",
    "questionHtml": "オンプレミスでは、将来の最大負荷を見越してサーバーを購入することがあります。<br>AWSクラウドでは、この考え方が不要になる主な理由はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWSが負荷試験を代行するため"
      },
      {
        "correct": false,
        "html": "AWSではCPU性能が常に一定だから"
      },
      {
        "correct": false,
        "html": "すべてのサービスがサーバーレスだから"
      },
      {
        "correct": true,
        "html": "必要に応じてリソースを増減できるため"
      }
    ],
    "explanationHtml": "<p>この問題では、オンプレミスで必要だった<strong>将来の最大負荷を見越した過剰投資</strong>が、AWSでは不要になる理由を理解しているかが問われています。</p><p>オンプレミスではピーク需要に合わせてサーバーを事前購入する必要がありました。AWSでは需要に応じてリソースを増減できるため、あらかじめ最大負荷分を用意しておく必要がありません。</p>",
    "correctHtml": "<p><strong>D. 必要に応じてリソースを増減できるため</strong></p><p>需要に合わせて増減できるため、ピークを見越した過剰な事前購入が不要になります。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWSが負荷試験を代行するため</strong></p><p>AWSが負荷試験を代行するわけではありません。理由になりません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWSではCPU性能が常に一定だから</strong></p><p>CPU性能が一定であることと、事前投資が不要になることは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>C. すべてのサービスがサーバーレスだから</strong></p><p>AWSにはEC2などサーバーレスでないサービスも多数あります。誤りです。</p></div>",
    "pointsHtml": "<ul><li>需要に応じて増減できる＝ピークを見越した過剰投資が不要</li><li>この考え方はCLFで頻出</li></ul>"
  },
  {
    "number": 22,
    "id": "Q022",
    "questionHtml": "AWSクラウドの責任共有モデルにおいて、Amazon EC2インスタンスのOSへセキュリティパッチを適用する責任は誰にありますか。",
    "choices": [
      {
        "correct": true,
        "html": "利用者"
      },
      {
        "correct": false,
        "html": "AWS"
      },
      {
        "correct": false,
        "html": "ハードウェアベンダー"
      },
      {
        "correct": false,
        "html": "AWSサポート"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの<strong>責任共有モデル</strong>において、EC2のOSへのセキュリティパッチ適用が誰の責任かを理解しているかが問われています。</p><p>Amazon EC2はIaaSであり、OSより上のレイヤー（OS設定、パッチ適用、ミドルウェア、アプリケーションなど）は利用者の責任です。物理インフラはAWSが管理します。</p>",
    "correctHtml": "<p><strong>A. 利用者</strong></p><p>EC2のゲストOSに対するセキュリティパッチ適用は、利用者が実施すべき責任範囲です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. AWS</strong></p><p>AWSは物理インフラや基盤の管理を担当しますが、EC2のOSパッチ適用は担当しません。</p></div><div class=\"incorrect-item\"><p><strong>C. ハードウェアベンダー</strong></p><p>ハードウェアベンダーが利用者のOSパッチを適用することはありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWSサポート</strong></p><p>AWSサポートは技術支援を提供しますが、OSパッチ適用を代行する責任範囲ではありません。</p></div>",
    "pointsHtml": "<ul><li>EC2（IaaS）ではOSより上は利用者の責任</li><li>AWS：物理インフラ、利用者：OS・データ・アプリケーション</li></ul>"
  },
  {
    "number": 23,
    "id": "Q023",
    "questionHtml": "AWSクラウドでは、利用していないEC2インスタンスを停止しました。<br>最も期待できる効果はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMユーザー数が減少する"
      },
      {
        "correct": false,
        "html": "ネットワーク遅延が改善する"
      },
      {
        "correct": true,
        "html": "不要な利用料金を削減できる"
      },
      {
        "correct": false,
        "html": "Amazon S3容量が増える"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの<strong>従量課金</strong>に基づくコスト削減効果を理解しているかが問われています。</p><p>AWSでは利用したリソースに対して課金されます。利用していないEC2インスタンスを停止すれば、その分の稼働料金が発生しなくなるため、不要なコストを削減できます。</p>",
    "correctHtml": "<p><strong>C. 不要な利用料金を削減できる</strong></p><p>使っていないインスタンスを停止することで、無駄な稼働料金を抑えられます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMユーザー数が減少する</strong></p><p>EC2の停止とIAMユーザー数は関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. ネットワーク遅延が改善する</strong></p><p>インスタンスを停止しても、ネットワーク遅延の改善にはつながりません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon S3容量が増える</strong></p><p>EC2の停止とS3の容量は無関係です。</p></div>",
    "pointsHtml": "<ul><li>使っていないリソースは停止・削除してコストを削減する</li><li>従量課金（Pay as you go）と関連付けて覚える</li></ul>"
  },
  {
    "number": 24,
    "id": "Q024",
    "questionHtml": "AWSクラウドへ移行した企業では、設備更新のためにサーバーを数年ごとに買い替える必要がなくなりました。<br>この理由として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "EC2は永久に同じサーバーを使用するため"
      },
      {
        "correct": true,
        "html": "ハードウェア管理はAWSが担当するため"
      },
      {
        "correct": false,
        "html": "OS管理をAWSが行うため"
      },
      {
        "correct": false,
        "html": "データベースが不要になるため"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSへ移行すると<strong>サーバーの定期的な買い替えが不要になる理由</strong>を理解しているかが問われています。</p><p>オンプレミスではハードウェアの老朽化に伴い数年ごとに機器を更新する必要がありました。AWSでは物理ハードウェアの調達・保守・更新をAWSが担当するため、利用者が設備を買い替える必要がありません。</p>",
    "correctHtml": "<p><strong>B. ハードウェア管理はAWSが担当するため</strong></p><p>物理ハードウェアの管理・更新はAWSが行うため、利用者は買い替えから解放されます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. EC2は永久に同じサーバーを使用するため</strong></p><p>同じ物理サーバーを永久に使うわけではなく、AWSが基盤を管理・更新します。誤りです。</p></div><div class=\"incorrect-item\"><p><strong>C. OS管理をAWSが行うため</strong></p><p>EC2ではOS管理は利用者の責任です。またハードウェア買い替え不要の理由でもありません。</p></div><div class=\"incorrect-item\"><p><strong>D. データベースが不要になるため</strong></p><p>データベースの要否とハードウェア買い替えは関係ありません。</p></div>",
    "pointsHtml": "<ul><li>物理ハードウェアの管理・更新はAWSの責任</li><li>利用者は設備の老朽化対応から解放される</li></ul>"
  },
  {
    "number": 25,
    "id": "Q025",
    "questionHtml": "AWSクラウドを利用することで、企業は世界中のリージョンを利用できます。<br>この特徴が最も役立つ目的はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMパスワードを管理すること"
      },
      {
        "correct": false,
        "html": "CloudTrailログを削除すること"
      },
      {
        "correct": false,
        "html": "Auto Scalingを有効にすること"
      },
      {
        "correct": true,
        "html": "海外利用者にも低遅延でサービスを提供すること"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの<strong>グローバルインフラストラクチャ（世界中のリージョン）</strong>を利用する目的を理解しているかが問われています。</p><p>AWSは世界各地にリージョンを展開しています。利用者に近いリージョンを選ぶことで通信距離が短くなり、海外の利用者にも低遅延でサービスを提供できます。</p>",
    "correctHtml": "<p><strong>D. 海外利用者にも低遅延でサービスを提供すること</strong></p><p>利用者に近いリージョンを選択することで、レスポンスを改善できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMパスワードを管理すること</strong></p><p>IAMはリージョン展開とは関係のない認証・認可の仕組みです。</p></div><div class=\"incorrect-item\"><p><strong>B. CloudTrailログを削除すること</strong></p><p>ログ削除はリージョンを利用する目的とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Auto Scalingを有効にすること</strong></p><p>Auto Scalingはリソースの自動増減機能であり、リージョン展開の主目的ではありません。</p></div>",
    "pointsHtml": "<ul><li>リージョンを選択する理由：レイテンシ、法令・データ所在地、災害対策</li><li>「低遅延」「海外展開」はリージョンを連想する</li></ul>"
  },
  {
    "number": 26,
    "id": "Q026",
    "questionHtml": "AWSクラウドでは、新しいアイデアを短期間・低コストで検証できます。<br>このような考え方を最も表すものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "高耐久性"
      },
      {
        "correct": true,
        "html": "迅速な実験（Experimentation）"
      },
      {
        "correct": false,
        "html": "マルチAZ構成"
      },
      {
        "correct": false,
        "html": "責任共有モデル"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウドで<strong>新しいアイデアを短期間・低コストで検証できる特徴（迅速な実験）</strong>を理解しているかが問われています。</p><p>AWSでは必要なリソースをすぐに用意し、不要になれば削除できます。この柔軟性により、失敗のコストを抑えながら何度でも試行錯誤できるため、迅速な実験（Experimentation）が可能になります。</p>",
    "correctHtml": "<p><strong>B. 迅速な実験（Experimentation）</strong></p><p>短期間・低コストでアイデアを検証できる特徴を最も適切に表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 高耐久性</strong></p><p>データが失われにくい性質を指し、実験の速さとは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>C. マルチAZ構成</strong></p><p>可用性を高める構成であり、迅速な実験を直接表すものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. 責任共有モデル</strong></p><p>AWSと利用者の責任範囲を示すモデルであり、実験の特徴ではありません。</p></div>",
    "pointsHtml": "<ul><li>短期間・低コストで検証＝迅速な実験（Experimentation）</li><li>失敗のコストを抑えて試行できることがクラウドの価値</li></ul>"
  },
  {
    "number": 27,
    "id": "Q027",
    "questionHtml": "AWSクラウドでは、利用者がインフラ管理よりもビジネス価値の創出へ集中できます。<br>これはAWSクラウド導入のどのメリットを表していますか。",
    "choices": [
      {
        "correct": false,
        "html": "データセンター管理"
      },
      {
        "correct": false,
        "html": "物理サーバー保守"
      },
      {
        "correct": false,
        "html": "ラック設計"
      },
      {
        "correct": true,
        "html": "差別化につながる業務へ集中できる"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSクラウド導入により利用者が<strong>差別化につながる業務へ集中できるメリット</strong>を理解しているかが問われています。</p><p>AWSがインフラの管理を担当することで、利用者はデータセンター管理やサーバー保守などの「差別化につながらない重労働（undifferentiated heavy lifting）」から解放され、事業の差別化につながる業務へ注力できます。</p>",
    "correctHtml": "<p><strong>D. 差別化につながる業務へ集中できる</strong></p><p>インフラ運用ではなく、ビジネス価値や競争力を高める業務へ集中できる点がメリットです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. データセンター管理</strong></p><p>データセンター管理はAWSが担当する領域であり、利用者が集中すべき業務ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. 物理サーバー保守</strong></p><p>物理サーバーの保守はAWSの責任です。利用者のメリットではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. ラック設計</strong></p><p>ラック設計も物理インフラの作業であり、AWSが担当します。</p></div>",
    "pointsHtml": "<ul><li>インフラ管理は「差別化につながらない重労働」</li><li>利用者は差別化につながる業務（ビジネス価値創出）へ集中できる</li></ul>"
  },
  {
    "number": 28,
    "id": "Q028",
    "questionHtml": "AWSクラウドの責任共有モデルにおいて、Amazon S3へ保存したデータのアクセス権限設定を管理する責任は誰にありますか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS"
      },
      {
        "correct": true,
        "html": "利用者"
      },
      {
        "correct": false,
        "html": "データセンター運営会社"
      },
      {
        "correct": false,
        "html": "AWS Marketplace"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの<strong>責任共有モデル</strong>において、S3に保存したデータのアクセス権限設定が誰の責任かを理解しているかが問われています。</p><p>Amazon S3のバケットポリシーやアクセス許可などのアクセス制御設定は、クラウド内の設定にあたり利用者の責任です。物理インフラやS3基盤の運用はAWSが担当します。</p>",
    "correctHtml": "<p><strong>B. 利用者</strong></p><p>S3へ保存したデータのアクセス権限設定は、利用者が管理すべき責任範囲です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS</strong></p><p>AWSはS3の基盤や物理インフラを管理しますが、データのアクセス権限設定は利用者の責任です。</p></div><div class=\"incorrect-item\"><p><strong>C. データセンター運営会社</strong></p><p>データセンターの物理管理はAWSが担当し、アクセス権限設定とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Marketplace</strong></p><p>AWS Marketplaceはソフトウェアの購入・提供の場であり、アクセス権限設定の責任者ではありません。</p></div>",
    "pointsHtml": "<ul><li>データとそのアクセス制御は利用者の責任（Security in the Cloud）</li><li>S3のアクセス許可・バケットポリシーの管理は利用者が行う</li></ul>"
  },
  {
    "number": 29,
    "id": "Q029",
    "questionHtml": "クラウドコンピューティングの特徴として「利用量に応じてリソースを柔軟に増減できる」ことを最も適切に表すものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "高耐久性"
      },
      {
        "correct": false,
        "html": "フォールトトレランス"
      },
      {
        "correct": true,
        "html": "Elasticity（弾力性）"
      },
      {
        "correct": false,
        "html": "マルチテナンシー"
      }
    ],
    "explanationHtml": "<p>この問題では、「利用量に応じてリソースを柔軟に増減できる」性質を表す用語である<strong>Elasticity（弾力性）</strong>を理解しているかが問われています。</p><p>弾力性とは、需要の変動に合わせてリソースを自動または迅速に増減できる性質です。負荷が増えれば拡張し、減れば縮小することで、常に最適なリソース量を維持できます。</p>",
    "correctHtml": "<p><strong>C. Elasticity（弾力性）</strong></p><p>利用量に応じてリソースを柔軟に増減できる性質を最も適切に表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 高耐久性</strong></p><p>データが失われにくい性質であり、リソースの増減とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. フォールトトレランス</strong></p><p>障害が発生してもサービスを継続できる設計思想であり、増減の性質ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. マルチテナンシー</strong></p><p>複数の利用者がインフラを共有する仕組みであり、リソースの増減を表す用語ではありません。</p></div>",
    "pointsHtml": "<ul><li>「需要に応じて増減」＝Elasticity（弾力性）</li><li>Scalability（拡張性）との違いを整理しておく</li></ul>"
  },
  {
    "number": 30,
    "id": "Q030",
    "questionHtml": "AWSクラウドへ移行した企業では、新しい開発環境を30分で構築できるようになりました。<br>この改善を最も適切に表すものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "可観測性"
      },
      {
        "correct": false,
        "html": "冗長化"
      },
      {
        "correct": false,
        "html": "SLA"
      },
      {
        "correct": true,
        "html": "ビジネスの俊敏性（Agility）の向上"
      }
    ],
    "explanationHtml": "<p>この問題では、開発環境を短時間で構築できるようになった改善を表す<strong>ビジネスの俊敏性（Agility）</strong>を理解しているかが問われています。</p><p>AWSでは環境を数分〜数十分で構築できます。この「素早く構築・変更・リリースできる」性質がAgility（俊敏性）であり、ビジネスのスピード向上に直結します。</p>",
    "correctHtml": "<p><strong>D. ビジネスの俊敏性（Agility）の向上</strong></p><p>新しい環境を短時間で構築できることは、俊敏性の向上を表す代表的な例です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 可観測性</strong></p><p>システムの状態をログやメトリクスで把握する考え方であり、構築速度とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. 冗長化</strong></p><p>障害に備えて構成を多重化することであり、環境構築の速さを表すものではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. SLA</strong></p><p>サービス品質を保証する契約であり、俊敏性とは異なる概念です。</p></div>",
    "pointsHtml": "<ul><li>「数分（短時間）で構築」＝俊敏性（Agility）</li><li>Time to Market（市場投入までの時間短縮）と関連付ける</li></ul>"
  },
  {
    "number": 31,
    "id": "Q031",
    "questionHtml": "AWSクラウドの利用料金に関する説明として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "必要なサービスのみ利用した分だけ支払う"
      },
      {
        "correct": false,
        "html": "すべて年間契約が必要である"
      },
      {
        "correct": false,
        "html": "初回のみ料金が発生する"
      },
      {
        "correct": false,
        "html": "サービス数に応じて固定料金になる"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの<strong>利用料金（従量課金）</strong>の基本を理解しているかが問われています。</p><p>AWSでは必要なサービスを選び、使った分だけ料金を支払う従量課金が基本です。長期契約や固定料金が必須ではなく、利用量に応じて柔軟にコストを管理できます。</p>",
    "correctHtml": "<p><strong>A. 必要なサービスのみ利用した分だけ支払う</strong></p><p>従量課金の考え方を最も適切に表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. すべて年間契約が必要である</strong></p><p>年間契約が必須ではありません。Savings Plansなど任意の割引制度はあります。</p></div><div class=\"incorrect-item\"><p><strong>C. 初回のみ料金が発生する</strong></p><p>初回のみではなく、利用量に応じて継続的に課金されます。</p></div><div class=\"incorrect-item\"><p><strong>D. サービス数に応じて固定料金になる</strong></p><p>サービス数ではなく、実際の利用量に応じて課金されます。</p></div>",
    "pointsHtml": "<ul><li>AWSの基本料金モデルは従量課金（Pay as you go）</li><li>使った分だけ支払い、初期投資を抑えられる</li></ul>"
  },
  {
    "number": 32,
    "id": "Q032",
    "questionHtml": "AWSクラウドを利用することで、インフラ調達に数か月かかっていた企業が数分で環境を構築できるようになりました。<br>この改善によって最も期待できる効果はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "社員数を削減できる"
      },
      {
        "correct": false,
        "html": "データベースが不要になる"
      },
      {
        "correct": true,
        "html": "新しいビジネスへ迅速に対応できる"
      },
      {
        "correct": false,
        "html": "ネットワーク障害が発生しなくなる"
      }
    ],
    "explanationHtml": "<p>この問題では、インフラ調達を数分で行えるようになった改善による<strong>ビジネス上の効果（俊敏性）</strong>を理解しているかが問われています。</p><p>数か月かかっていた環境構築が数分になることで、新しいビジネスや市場の変化へ迅速に対応できます。これはクラウドの俊敏性（Agility）がもたらす効果です。</p>",
    "correctHtml": "<p><strong>C. 新しいビジネスへ迅速に対応できる</strong></p><p>環境構築の高速化により、ビジネスの立ち上げや変化への対応を素早く行えます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 社員数を削減できる</strong></p><p>環境構築の速さと社員数の削減は直接関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. データベースが不要になる</strong></p><p>環境を迅速に構築できることとデータベースの要否は関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>D. ネットワーク障害が発生しなくなる</strong></p><p>環境構築が速くなってもネットワーク障害はなくなりません。</p></div>",
    "pointsHtml": "<ul><li>「数分で環境構築」→ 俊敏性（Agility）→ ビジネスへの迅速な対応</li><li>Time to Market の短縮につながる</li></ul>"
  },
  {
    "number": 33,
    "id": "Q033",
    "questionHtml": "AWSクラウドへ移行した企業では、需要が増加した場合のみサーバーを追加し、需要が減少すると削除しています。<br>この考え方として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "高耐久性"
      },
      {
        "correct": false,
        "html": "リージョン設計"
      },
      {
        "correct": false,
        "html": "データレプリケーション"
      },
      {
        "correct": true,
        "html": "必要に応じたリソースの最適化"
      }
    ],
    "explanationHtml": "<p>この問題では、需要に応じてリソースを追加・削除する運用を表す<strong>必要に応じたリソースの最適化</strong>を理解しているかが問われています。</p><p>需要が増えればサーバーを追加し、減れば削除するという運用は、常に必要な分だけのリソースを維持する考え方です。これによりコストとパフォーマンスを最適化できます。</p>",
    "correctHtml": "<p><strong>D. 必要に応じたリソースの最適化</strong></p><p>需要に合わせて増減させ、常に最適なリソース量を維持する考え方を表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 高耐久性</strong></p><p>データが失われにくい性質であり、リソースの増減とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. リージョン設計</strong></p><p>地理的な配置の設計であり、需要に応じた増減を表す概念ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. データレプリケーション</strong></p><p>データを複製して可用性や耐久性を高める仕組みであり、リソース最適化とは異なります。</p></div>",
    "pointsHtml": "<ul><li>需要に合わせて増減＝必要に応じたリソースの最適化（弾力性の考え方）</li><li>過剰なリソースを持たないことがコスト最適化につながる</li></ul>"
  },
  {
    "number": 34,
    "id": "Q034",
    "questionHtml": "AWSクラウドでは、利用者は物理データセンターへの立ち入りやハードウェア交換を行う必要がありません。<br>この理由として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon EC2がサーバーレスサービスだから"
      },
      {
        "correct": true,
        "html": "AWSが物理インフラを管理しているため"
      },
      {
        "correct": false,
        "html": "Amazon S3がデータを暗号化するため"
      },
      {
        "correct": false,
        "html": "IAMがアクセス制御を行うため"
      }
    ],
    "explanationHtml": "<p>この問題では、利用者が物理データセンターへの立ち入りやハードウェア交換を行う必要がない理由として、<strong>AWSが物理インフラを管理している</strong>ことを理解しているかが問われています。</p><p>責任共有モデルにおいて、データセンターや物理サーバーなどの物理インフラの管理はAWSの責任です。そのため利用者は物理的な作業を行う必要がありません。</p>",
    "correctHtml": "<p><strong>B. AWSが物理インフラを管理しているため</strong></p><p>物理インフラの管理はAWSが担当するため、利用者は立ち入りやハードウェア交換をする必要がありません。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon EC2がサーバーレスサービスだから</strong></p><p>EC2はサーバーレスサービスではありません。理由として誤りです。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon S3がデータを暗号化するため</strong></p><p>S3の暗号化は物理データセンターへの立ち入り不要とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>D. IAMがアクセス制御を行うため</strong></p><p>IAMは認証・認可の仕組みであり、物理インフラ管理の理由ではありません。</p></div>",
    "pointsHtml": "<ul><li>物理インフラ（データセンター、物理サーバー）の管理はAWSの責任</li><li>利用者は物理的な保守作業から解放される</li></ul>"
  },
  {
    "number": 35,
    "id": "Q035",
    "questionHtml": "AWSクラウドを採用することで、企業が新規事業のアイデアを短期間で検証し、不要になった環境をすぐ削除できるようになりました。<br>この特徴を最も適切に表すものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "高可用性"
      },
      {
        "correct": false,
        "html": "フォールトトレランス"
      },
      {
        "correct": true,
        "html": "迅速な実験（Experimentation）"
      },
      {
        "correct": false,
        "html": "マルチテナンシー"
      }
    ],
    "explanationHtml": "<p>この問題では、新規事業のアイデアを短期間で検証し、不要になった環境をすぐ削除できる特徴を表す<strong>迅速な実験（Experimentation）</strong>を理解しているかが問われています。</p><p>AWSでは環境をすぐに用意し、不要になれば削除できます。この特徴により、低コストかつ短期間で新しいアイデアを試すことができ、迅速な実験が可能になります。</p>",
    "correctHtml": "<p><strong>C. 迅速な実験（Experimentation）</strong></p><p>短期間で検証し不要になれば削除できる特徴を最も適切に表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 高可用性</strong></p><p>システムを止まりにくくする設計思想であり、実験の速さとは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. フォールトトレランス</strong></p><p>障害が発生してもサービスを継続できる設計であり、迅速な実験を表す用語ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. マルチテナンシー</strong></p><p>複数の利用者がインフラを共有する仕組みであり、実験の特徴ではありません。</p></div>",
    "pointsHtml": "<ul><li>短期間で検証・すぐ削除＝迅速な実験（Experimentation）</li><li>失敗のコストを抑えて試行できることがクラウドの価値</li></ul>"
  },
  {
    "number": 36,
    "id": "Q036",
    "questionHtml": "AWSクラウドでは、システム利用者の増加に応じてリソースを拡張できます。<br>この特徴を最も適切に表すものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "耐久性"
      },
      {
        "correct": false,
        "html": "冗長化"
      },
      {
        "correct": false,
        "html": "オンデマンドセルフサービス"
      },
      {
        "correct": true,
        "html": "スケーラビリティ"
      }
    ],
    "explanationHtml": "<p>この問題では、利用者の増加に応じてリソースを拡張できる特徴を表す<strong>スケーラビリティ</strong>を理解しているかが問われています。</p><p>スケーラビリティとは、需要の増加に対してリソースを追加し、システム規模を拡張できる能力です。利用者が増えてもリソースを増強することで、性能を維持できます。</p>",
    "correctHtml": "<p><strong>D. スケーラビリティ</strong></p><p>利用者の増加に応じてシステムを拡張できる能力を最も適切に表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 耐久性</strong></p><p>データが失われにくい性質であり、拡張性とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. 冗長化</strong></p><p>構成を多重化して可用性を高めることであり、拡張性を表す用語ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. オンデマンドセルフサービス</strong></p><p>利用者自身が必要なときにリソースを利用できる特性であり、拡張性そのものを指す用語ではありません。</p></div>",
    "pointsHtml": "<ul><li>利用者増加への対応＝スケーラビリティ（拡張性）</li><li>Elasticity（弾力性）との違いを整理しておく</li></ul>"
  },
  {
    "number": 37,
    "id": "Q037",
    "questionHtml": "AWSクラウドでは、利用しなくなったリソースを削除することで不要なコストを削減できます。<br>この考え方として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "使用した分だけ支払う"
      },
      {
        "correct": false,
        "html": "長期契約による割引"
      },
      {
        "correct": false,
        "html": "ハードウェア資産管理"
      },
      {
        "correct": false,
        "html": "固定料金モデル"
      }
    ],
    "explanationHtml": "<p>この問題では、不要なリソースを削除してコストを削減する考え方を表す<strong>使用した分だけ支払う（従量課金）</strong>を理解しているかが問われています。</p><p>AWSでは使った分だけ料金が発生します。利用しなくなったリソースを削除すれば、その分の料金は発生しなくなるため、コストを最適化できます。</p>",
    "correctHtml": "<p><strong>A. 使用した分だけ支払う</strong></p><p>従量課金であるため、不要なリソースを削除すればコストを削減できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. 長期契約による割引</strong></p><p>割引制度はありますが、不要なリソース削除によるコスト削減を表す考え方ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. ハードウェア資産管理</strong></p><p>物理資産の管理はオンプレミスの考え方であり、AWSのコスト削減の考え方とは異なります。</p></div><div class=\"incorrect-item\"><p><strong>D. 固定料金モデル</strong></p><p>AWSの基本は従量課金であり、固定料金モデルではありません。</p></div>",
    "pointsHtml": "<ul><li>使った分だけ支払う（従量課金）＝不要なものを削除すればコスト削減</li><li>Cost Optimization（コスト最適化）と関連付けて理解する</li></ul>"
  },
  {
    "number": 38,
    "id": "Q038",
    "questionHtml": "AWSクラウドを利用することで、企業はハードウェアの故障対応や交換作業から解放されます。<br>この理由として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon EC2がサーバーレスだから"
      },
      {
        "correct": true,
        "html": "AWSが物理インフラを管理しているため"
      },
      {
        "correct": false,
        "html": "IAMが自動的に障害対応するため"
      },
      {
        "correct": false,
        "html": "Amazon CloudWatchが復旧するため"
      }
    ],
    "explanationHtml": "<p>この問題では、ハードウェアの故障対応や交換作業から解放される理由として、<strong>AWSが物理インフラを管理している</strong>ことを理解しているかが問われています。</p><p>責任共有モデルにおいて、物理サーバーやハードウェアの管理・故障対応はAWSの責任です。そのため利用者はハードウェアの交換作業を行う必要がありません。</p>",
    "correctHtml": "<p><strong>B. AWSが物理インフラを管理しているため</strong></p><p>物理インフラの管理・故障対応はAWSが担当するため、利用者は交換作業から解放されます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon EC2がサーバーレスだから</strong></p><p>EC2はサーバーレスではありません。理由として誤りです。</p></div><div class=\"incorrect-item\"><p><strong>C. IAMが自動的に障害対応するため</strong></p><p>IAMは認証・認可の仕組みであり、ハードウェア障害対応は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon CloudWatchが復旧するため</strong></p><p>CloudWatchは監視サービスであり、ハードウェアを復旧するものではありません。</p></div>",
    "pointsHtml": "<ul><li>物理ハードウェアの故障対応・交換はAWSの責任</li><li>利用者は物理的な保守から解放される</li></ul>"
  },
  {
    "number": 39,
    "id": "Q039",
    "questionHtml": "AWSクラウドでは、一時的なキャンペーン期間のみ大量のリソースを利用し、その後すぐ削除できます。<br>この特徴として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "高耐久性"
      },
      {
        "correct": false,
        "html": "マルチリージョン"
      },
      {
        "correct": true,
        "html": "Elasticity（弾力性）"
      },
      {
        "correct": false,
        "html": "ガバナンス"
      }
    ],
    "explanationHtml": "<p>この問題では、一時的なキャンペーン期間のみ大量のリソースを利用し、その後すぐ削除できる特徴を表す<strong>Elasticity（弾力性）</strong>を理解しているかが問われています。</p><p>弾力性とは、需要の変動に合わせてリソースを増減できる性質です。キャンペーンで需要が急増する期間だけリソースを増やし、終了後に減らすことで、コストと性能を最適化できます。</p>",
    "correctHtml": "<p><strong>C. Elasticity（弾力性）</strong></p><p>需要の変動に応じてリソースを増減できる特徴を最も適切に表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 高耐久性</strong></p><p>データが失われにくい性質であり、リソースの増減とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. マルチリージョン</strong></p><p>複数リージョンへ展開する構成であり、需要に応じた増減を表す用語ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. ガバナンス</strong></p><p>統制・管理の仕組みを指し、リソースの増減を表す概念ではありません。</p></div>",
    "pointsHtml": "<ul><li>需要急増時に増やし、終了後に減らす＝Elasticity（弾力性）</li><li>一時的な需要への対応にクラウドの強みが生きる</li></ul>"
  },
  {
    "number": 40,
    "id": "Q040",
    "questionHtml": "AWSクラウドでは、企業が物理サーバーの設置場所を確保する必要がありません。<br>このことによる最も大きなメリットはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAM設定が不要になる"
      },
      {
        "correct": false,
        "html": "ネットワーク設計が不要になる"
      },
      {
        "correct": true,
        "html": "インフラ管理よりビジネスへ注力できる"
      },
      {
        "correct": false,
        "html": "EC2料金が無料になる"
      }
    ],
    "explanationHtml": "<p>この問題では、物理サーバーの設置場所を確保する必要がないことによる最大のメリットとして、<strong>インフラ管理よりビジネスへ注力できる</strong>ことを理解しているかが問われています。</p><p>AWSでは物理サーバーの設置や設備の確保をAWSが担当します。そのため利用者はインフラ管理の負担から解放され、本来のビジネスへ集中できます。</p>",
    "correctHtml": "<p><strong>C. インフラ管理よりビジネスへ注力できる</strong></p><p>物理設備の管理から解放され、ビジネス価値の創出へ注力できる点が最大のメリットです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAM設定が不要になる</strong></p><p>IAMの設定は利用者の責任として引き続き必要です。</p></div><div class=\"incorrect-item\"><p><strong>B. ネットワーク設計が不要になる</strong></p><p>VPCなどのネットワーク設計は利用者が行う必要があります。</p></div><div class=\"incorrect-item\"><p><strong>D. EC2料金が無料になる</strong></p><p>EC2は従量課金であり、無料にはなりません。</p></div>",
    "pointsHtml": "<ul><li>物理設備の管理から解放される＝ビジネスへ注力できる</li><li>「IAM設定不要」「ネットワーク設計不要」は誤り（利用者の責任）</li></ul>"
  },
  {
    "number": 41,
    "id": "Q041",
    "questionHtml": "AWSクラウドへ移行した企業では、新しい開発環境を何度でも同じ構成で作成しています。<br>このようなクラウド利用方法によるメリットとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "ハードウェア性能が向上する"
      },
      {
        "correct": false,
        "html": "サーバー障害がなくなる"
      },
      {
        "correct": false,
        "html": "全リージョンが無料になる"
      },
      {
        "correct": true,
        "html": "開発・検証環境を迅速に用意できる"
      }
    ],
    "explanationHtml": "<p>この問題では、同じ構成の環境を何度でも作成できるクラウドのメリットとして、<strong>開発・検証環境を迅速に用意できる</strong>ことを理解しているかが問われています。</p><p>AWSでは環境をテンプレート化するなどして、同じ構成を短時間で繰り返し作成できます。これにより開発・検証環境をすぐに用意し、開発サイクルを高速化できます。</p>",
    "correctHtml": "<p><strong>D. 開発・検証環境を迅速に用意できる</strong></p><p>同じ構成を何度でも短時間で作成できるため、開発・検証環境を迅速に準備できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. ハードウェア性能が向上する</strong></p><p>環境を繰り返し作成できることと物理性能の向上は関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. サーバー障害がなくなる</strong></p><p>物理障害は発生し得ます。障害がなくなるわけではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. 全リージョンが無料になる</strong></p><p>リージョンの利用は無料になりません。従量課金が基本です。</p></div>",
    "pointsHtml": "<ul><li>同じ構成を繰り返し作成できる＝開発・検証環境を迅速に用意できる</li><li>俊敏性（Agility）と関連付けて理解する</li></ul>"
  },
  {
    "number": 42,
    "id": "Q042",
    "questionHtml": "AWSクラウドの責任共有モデルにおいて、利用者が担当する内容はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "データセンターへの入退室管理"
      },
      {
        "correct": false,
        "html": "サーバーラックの保守"
      },
      {
        "correct": true,
        "html": "Amazon S3へ保存するデータのアクセス制御"
      },
      {
        "correct": false,
        "html": "ディスク交換"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの<strong>責任共有モデル</strong>において、利用者が担当する内容を理解しているかが問われています。</p><p>利用者の責任は「クラウド内のセキュリティ」であり、データやそのアクセス制御などが含まれます。物理設備（入退室管理、ラック保守、ディスク交換など）はAWSの責任です。</p>",
    "correctHtml": "<p><strong>C. Amazon S3へ保存するデータのアクセス制御</strong></p><p>S3のデータおよびそのアクセス制御は利用者が管理すべき責任範囲です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. データセンターへの入退室管理</strong></p><p>データセンターの物理的な管理はAWSの責任です。</p></div><div class=\"incorrect-item\"><p><strong>B. サーバーラックの保守</strong></p><p>物理設備の保守はAWSが担当します。</p></div><div class=\"incorrect-item\"><p><strong>D. ディスク交換</strong></p><p>物理的なハードウェアの交換はAWSの責任です。</p></div>",
    "pointsHtml": "<ul><li>利用者：データ・アクセス制御・IAM・OS・アプリケーション</li><li>AWS：データセンター、ラック、ディスクなどの物理設備</li></ul>"
  },
  {
    "number": 43,
    "id": "Q043",
    "questionHtml": "AWSクラウドでは、企業はインフラを所有せず利用します。<br>このことによる財務面のメリットとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "利益率が必ず向上する"
      },
      {
        "correct": false,
        "html": "税金が不要になる"
      },
      {
        "correct": true,
        "html": "設備投資を抑え運用費として管理できる"
      },
      {
        "correct": false,
        "html": "AWS利用料金が固定になる"
      }
    ],
    "explanationHtml": "<p>この問題では、インフラを所有せず利用することによる<strong>財務面のメリット（CAPEXからOPEXへの転換）</strong>を理解しているかが問われています。</p><p>インフラを所有しないため、大きな初期の設備投資（CAPEX）が不要になり、利用した分を運用費（OPEX）として管理できます。これにより資金を柔軟に運用できます。</p>",
    "correctHtml": "<p><strong>C. 設備投資を抑え運用費として管理できる</strong></p><p>CAPEXをOPEXへ転換できることが、クラウドの代表的な財務面のメリットです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 利益率が必ず向上する</strong></p><p>クラウド利用で利益率が必ず向上するとは限りません。誤りです。</p></div><div class=\"incorrect-item\"><p><strong>B. 税金が不要になる</strong></p><p>クラウド利用と税金の要否は関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS利用料金が固定になる</strong></p><p>AWSは従量課金であり、利用量に応じて料金は変動します。</p></div>",
    "pointsHtml": "<ul><li>CAPEX（設備投資）→ OPEX（運用費）への転換</li><li>この財務面のメリットはCLFで頻出</li></ul>"
  },
  {
    "number": 44,
    "id": "Q044",
    "questionHtml": "AWSクラウドで「クラウドの俊敏性（Agility）」が最も発揮される場面はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "サーバーラックを購入するとき"
      },
      {
        "correct": true,
        "html": "新サービス用環境を数分で構築するとき"
      },
      {
        "correct": false,
        "html": "UPSを交換するとき"
      },
      {
        "correct": false,
        "html": "LANケーブルを敷設するとき"
      }
    ],
    "explanationHtml": "<p>この問題では、クラウドの<strong>俊敏性（Agility）</strong>が最も発揮される場面を理解しているかが問われています。</p><p>俊敏性とは、素早く構築・変更・リリースできる性質です。新サービス用の環境を数分で構築できる場面は、俊敏性が最も発揮される典型例です。</p>",
    "correctHtml": "<p><strong>B. 新サービス用環境を数分で構築するとき</strong></p><p>環境を数分で構築できることは、俊敏性が発揮される代表的な場面です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. サーバーラックを購入するとき</strong></p><p>物理的な購入作業であり、クラウドの俊敏性とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>C. UPSを交換するとき</strong></p><p>物理設備の交換作業であり、俊敏性が発揮される場面ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. LANケーブルを敷設するとき</strong></p><p>物理的な配線作業であり、クラウドの俊敏性とは関係ありません。</p></div>",
    "pointsHtml": "<ul><li>「数分で環境構築」＝俊敏性（Agility）</li><li>物理作業（ラック購入、UPS交換、ケーブル敷設）は俊敏性とは無関係</li></ul>"
  },
  {
    "number": 45,
    "id": "Q045",
    "questionHtml": "AWSクラウドでは、多数の利用者が共通インフラを利用しています。<br>この考え方として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Fault Isolation"
      },
      {
        "correct": false,
        "html": "Edge Computing"
      },
      {
        "correct": false,
        "html": "Elasticity"
      },
      {
        "correct": true,
        "html": "Multi-Tenancy（マルチテナンシー）"
      }
    ],
    "explanationHtml": "<p>この問題では、多数の利用者が共通インフラを共有する考え方を表す<strong>Multi-Tenancy（マルチテナンシー）</strong>を理解しているかが問われています。</p><p>マルチテナンシーとは、AWSが提供する物理インフラを複数の利用者で共有しつつ、各利用者のデータや環境は論理的に分離される仕組みです。これによりコスト効率と規模の経済を実現します。</p>",
    "correctHtml": "<p><strong>D. Multi-Tenancy（マルチテナンシー）</strong></p><p>多数の利用者が共通インフラを共有する考え方を最も適切に表しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Fault Isolation</strong></p><p>障害の影響範囲を分離する考え方であり、インフラの共有を表す用語ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Edge Computing</strong></p><p>利用者に近い場所で処理を行う考え方であり、共通インフラの共有を表す用語ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Elasticity</strong></p><p>需要に応じてリソースを増減できる性質であり、インフラの共有を表すものではありません。</p></div>",
    "pointsHtml": "<ul><li>共通インフラを複数利用者で共有＝マルチテナンシー</li><li>データは論理的に分離され、他の利用者から見えることはない</li></ul>"
  },
  {
    "number": 46,
    "id": "Q046",
    "questionHtml": "クラウド導入によって企業が得られるメリットとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "IT運用ではなくビジネス価値創出へ集中できる"
      },
      {
        "correct": false,
        "html": "ハードウェア障害を完全になくせる"
      },
      {
        "correct": false,
        "html": "ソフトウェア更新が不要になる"
      },
      {
        "correct": false,
        "html": "全システムが自動で高可用になる"
      }
    ],
    "explanationHtml": "<p>この問題では、クラウド導入によって企業が得られるメリットとして、<strong>IT運用ではなくビジネス価値創出へ集中できる</strong>ことを理解しているかが問われています。</p><p>クラウドを利用すると、インフラの運用管理をAWSへ任せられるため、企業はIT運用に費やす労力を減らし、ビジネス価値の創出という本来の目的へ集中できます。</p>",
    "correctHtml": "<p><strong>A. IT運用ではなくビジネス価値創出へ集中できる</strong></p><p>運用負荷を軽減し、価値を生む業務へ集中できることがクラウド導入の大きなメリットです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. ハードウェア障害を完全になくせる</strong></p><p>物理障害は発生し得ます。完全になくすことはできません。</p></div><div class=\"incorrect-item\"><p><strong>C. ソフトウェア更新が不要になる</strong></p><p>ソフトウェア更新は必要に応じて利用者が実施します。不要にはなりません。</p></div><div class=\"incorrect-item\"><p><strong>D. 全システムが自動で高可用になる</strong></p><p>高可用性は適切な設計（マルチAZなど）が必要であり、自動的に実現するわけではありません。</p></div>",
    "pointsHtml": "<ul><li>クラウド導入の本質＝ビジネス価値創出への集中</li><li>「障害が完全になくなる」「自動で高可用」は誤り</li></ul>"
  },
  {
    "number": 47,
    "id": "Q047",
    "questionHtml": "AWSクラウドでは、新しいサービスを世界中へ展開できます。<br>この特徴を支えているものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon EC2 Auto Scaling"
      },
      {
        "correct": false,
        "html": "IAM"
      },
      {
        "correct": true,
        "html": "グローバルインフラストラクチャ"
      },
      {
        "correct": false,
        "html": "AWS Budgets"
      }
    ],
    "explanationHtml": "<p>この問題では、新しいサービスを世界中へ展開できることを支える<strong>グローバルインフラストラクチャ</strong>を理解しているかが問われています。</p><p>AWSは世界各地にリージョンとアベイラビリティゾーンを展開しています。このグローバルインフラストラクチャにより、利用者は世界中の拠点へ迅速にサービスを展開できます。</p>",
    "correctHtml": "<p><strong>C. グローバルインフラストラクチャ</strong></p><p>世界各地に展開されたリージョンやAZが、世界中へのサービス展開を支えています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon EC2 Auto Scaling</strong></p><p>リソースの自動増減機能であり、世界中への展開を支える基盤そのものではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. IAM</strong></p><p>認証・認可の仕組みであり、グローバル展開の基盤ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Budgets</strong></p><p>コスト管理のためのサービスであり、世界中への展開を支えるものではありません。</p></div>",
    "pointsHtml": "<ul><li>世界中への展開を支える＝グローバルインフラストラクチャ</li><li>リージョンとアベイラビリティゾーンの概念を押さえる</li></ul>"
  },
  {
    "number": 48,
    "id": "Q048",
    "questionHtml": "AWSクラウドの特徴として「利用開始までの時間を短縮できる」ことによって期待できる効果はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAM設定が不要になる"
      },
      {
        "correct": false,
        "html": "ネットワーク速度が向上する"
      },
      {
        "correct": false,
        "html": "ハードウェア障害がなくなる"
      },
      {
        "correct": true,
        "html": "市場変化へ迅速に対応できる"
      }
    ],
    "explanationHtml": "<p>この問題では、利用開始までの時間を短縮できることによって期待できる効果として、<strong>市場変化へ迅速に対応できる</strong>ことを理解しているかが問われています。</p><p>環境をすぐに利用開始できることで、新しいサービスや機能を素早く提供できます。その結果、市場や顧客ニーズの変化へ迅速に対応でき、競争力を高められます。</p>",
    "correctHtml": "<p><strong>D. 市場変化へ迅速に対応できる</strong></p><p>利用開始までの時間短縮により、市場の変化へ素早く対応できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAM設定が不要になる</strong></p><p>IAMの設定は利用者の責任として引き続き必要です。</p></div><div class=\"incorrect-item\"><p><strong>B. ネットワーク速度が向上する</strong></p><p>利用開始の速さとネットワーク速度の向上は関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>C. ハードウェア障害がなくなる</strong></p><p>物理障害は発生し得ます。なくなるわけではありません。</p></div>",
    "pointsHtml": "<ul><li>利用開始までの時間短縮（Time to Market）→ 市場変化への迅速な対応</li><li>俊敏性（Agility）と関連付けて理解する</li></ul>"
  },
  {
    "number": 49,
    "id": "Q049",
    "questionHtml": "AWSクラウドでは、サーバー購入前に将来の最大負荷を予測する必要性が小さくなります。<br>最も適切な理由はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWSが負荷を予測してくれるため"
      },
      {
        "correct": false,
        "html": "サーバー性能が無制限だから"
      },
      {
        "correct": false,
        "html": "データセンターが1か所だから"
      },
      {
        "correct": true,
        "html": "必要に応じてリソースを増減できるため"
      }
    ],
    "explanationHtml": "<p>この問題では、サーバー購入前に将来の最大負荷を予測する必要性が小さくなる理由として、<strong>必要に応じてリソースを増減できる</strong>ことを理解しているかが問われています。</p><p>オンプレミスではピーク需要を予測して事前に設備を購入する必要がありました。AWSでは需要に応じてリソースを増減できるため、あらかじめ最大負荷を正確に予測しておく必要性が小さくなります。</p>",
    "correctHtml": "<p><strong>D. 必要に応じてリソースを増減できるため</strong></p><p>需要に合わせて増減できるため、事前に最大負荷を予測する必要性が小さくなります。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWSが負荷を予測してくれるため</strong></p><p>AWSが負荷を予測してくれるわけではありません。理由として誤りです。</p></div><div class=\"incorrect-item\"><p><strong>B. サーバー性能が無制限だから</strong></p><p>サーバー性能が無制限なわけではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. データセンターが1か所だから</strong></p><p>AWSのデータセンターは世界各地にあり、1か所ではありません。理由としても誤りです。</p></div>",
    "pointsHtml": "<ul><li>需要に応じて増減できる＝事前の負荷予測・過剰投資が不要</li><li>弾力性（Elasticity）の考え方と関連付ける</li></ul>"
  },
  {
    "number": 50,
    "id": "Q050",
    "questionHtml": "AWSクラウドを利用する企業が得られる最も大きな価値として適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "ハードウェアを所有できる"
      },
      {
        "correct": false,
        "html": "データセンター運営を学べる"
      },
      {
        "correct": false,
        "html": "サーバー保守業務が増える"
      },
      {
        "correct": true,
        "html": "インフラ管理ではなくビジネス価値の創出へ注力できる"
      }
    ],
    "explanationHtml": "<p>この問題は「クラウドの概念」章の総まとめであり、AWSクラウドを利用する企業が得られる最も大きな価値として、<strong>インフラ管理ではなくビジネス価値の創出へ注力できる</strong>ことを理解しているかが問われています。</p><p>AWSがインフラの管理を担当することで、企業はサーバー保守などの負担から解放され、事業の価値を生み出す活動へ集中できます。これがクラウド導入の最も大きな価値です。</p>",
    "correctHtml": "<p><strong>D. インフラ管理ではなくビジネス価値の創出へ注力できる</strong></p><p>インフラ管理から解放され、ビジネス価値の創出へ集中できることが最も大きな価値です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. ハードウェアを所有できる</strong></p><p>クラウドではハードウェアを所有せず利用します。価値の説明として誤りです。</p></div><div class=\"incorrect-item\"><p><strong>B. データセンター運営を学べる</strong></p><p>データセンター運営はAWSが担当する領域であり、クラウド導入の価値ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. サーバー保守業務が増える</strong></p><p>サーバー保守はAWSが担当するため、利用者の業務は増えません。</p></div>",
    "pointsHtml": "<ul><li>オンデマンドセルフサービス</li><li>従量課金（Pay as you go）</li><li>Elasticity（弾力性）</li><li>Scalability（拡張性）</li><li>Agility（俊敏性）</li><li>リージョン</li><li>アベイラビリティゾーン（AZ）</li><li>高可用性</li><li>責任共有モデル</li><li>CAPEX → OPEX</li></ul>"
  }
];
