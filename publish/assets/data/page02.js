// 自動生成ファイル: publish/_build/parse.js により生成
const QUESTIONS = [
  {
    "number": 1,
    "id": "Q001",
    "questionHtml": "ある企業では、開発者ごとにAWSリソースへのアクセス権限を制御したいと考えています。<br>各開発者に必要最小限の権限のみを付与するために最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Organizations"
      },
      {
        "correct": true,
        "html": "AWS Identity and Access Management (IAM)"
      },
      {
        "correct": false,
        "html": "Amazon Cognito"
      },
      {
        "correct": false,
        "html": "AWS IAM Identity Center"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSリソースへのアクセス権限を利用者ごとに細かく制御する仕組みを理解しているかが問われています。</p><p>AWS Identity and Access Management（IAM）は、「誰が」「どのAWSリソースに対して」「どの操作を行えるか」を制御するサービスです。ユーザー・グループ・ロール・ポリシーを組み合わせて、開発者ごとに必要最小限の権限だけを付与できます。</p>",
    "correctHtml": "<p><strong>B. AWS Identity and Access Management (IAM)</strong></p><p>IAMを利用すれば、開発者ごとにポリシーをアタッチして必要最小限の権限のみを付与でき、最小権限の原則を実現できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Organizations</strong></p><p>複数のAWSアカウントを一元管理するサービスであり、単一アカウント内で開発者ごとの権限を制御する用途ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Cognito</strong></p><p>Webアプリやモバイルアプリのエンドユーザー向け認証を提供するサービスであり、AWSリソースへの権限制御を目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS IAM Identity Center</strong></p><p>複数アカウントやアプリケーションへのシングルサインオンを提供するサービスで、開発者個々のリソース権限を細かく定義する主目的のサービスではありません。</p></div>",
    "pointsHtml": "<ul><li>IAM＝AWSアカウント内の認証・認可の中心サービス</li><li>最小権限の原則（Principle of Least Privilege）を実現する</li><li>User・Group・Role・Policyの4要素を整理して覚える</li></ul>"
  },
  {
    "number": 2,
    "id": "Q002",
    "questionHtml": "ある企業では、社員は社内のIDを利用して複数のAWSアカウントへサインインしています。<br>社員ごとに利用可能なAWSアカウントを制御したい場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Organizations"
      },
      {
        "correct": false,
        "html": "Amazon Cognito"
      },
      {
        "correct": true,
        "html": "AWS IAM Identity Center"
      },
      {
        "correct": false,
        "html": "AWS Directory Service"
      }
    ],
    "explanationHtml": "<p>この問題では、社内IDを利用して複数のAWSアカウントへサインインし、社員ごとに利用可能なアカウントを制御する仕組みを理解しているかが問われています。</p><p>AWS IAM Identity Center（旧AWS SSO）は、社内の認証基盤や外部IdPと連携してシングルサインオンを提供し、社員（またはグループ）ごとにアクセスできるAWSアカウントや権限セットを割り当てられます。</p>",
    "correctHtml": "<p><strong>C. AWS IAM Identity Center</strong></p><p>複数アカウント環境で、社員ごとに利用可能なAWSアカウントとアクセス権限を一元管理できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Organizations</strong></p><p>複数アカウントを組織として管理するサービスですが、社員個々のサインインやアカウントアクセスの割り当てを行うサービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Cognito</strong></p><p>アプリケーションのエンドユーザー向け認証サービスであり、社員のAWSアカウントアクセス管理には適しません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Directory Service</strong></p><p>マネージドのActive Directoryを提供するサービスで、ディレクトリ機能そのものは提供しますが、AWSアカウントへのアクセス割り当てを担う中心的なサービスではありません。</p></div>",
    "pointsHtml": "<ul><li>IAM Identity Center＝複数アカウントへのシングルサインオンとアクセス割り当て</li><li>社内IDや外部IdPと連携できる</li><li>OrganizationsとIAM Identity Centerはセットで利用されることが多い</li></ul>"
  },
  {
    "number": 3,
    "id": "Q003",
    "questionHtml": "AWSアカウントを作成した直後のRootユーザーについて、AWSが推奨している運用として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "日常的な運用もRootユーザーで実施する"
      },
      {
        "correct": false,
        "html": "開発者全員へRootユーザーを共有する"
      },
      {
        "correct": false,
        "html": "Rootユーザーを削除する"
      },
      {
        "correct": true,
        "html": "Rootユーザーは初期設定後は極力使用せず、IAMユーザーなどを利用する"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSアカウント作成直後のRootユーザーの適切な運用方法を理解しているかが問われています。</p><p>Rootユーザーはアカウントに対するすべての権限を持つ特別なユーザーです。万が一漏えいした場合の影響が極めて大きいため、初期設定（MFA有効化やIAM管理者作成など）が終わったら日常業務では使用せず、IAMユーザーやIAMロールを利用することが推奨されています。</p>",
    "correctHtml": "<p><strong>D. Rootユーザーは初期設定後は極力使用せず、IAMユーザーなどを利用する</strong></p><p>Rootユーザーの使用を最小限にすることで、認証情報漏えい時のリスクを大幅に低減できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 日常的な運用もRootユーザーで実施する</strong></p><p>Rootユーザーは全権限を持つため、日常運用での使用は推奨されません。</p></div><div class=\"incorrect-item\"><p><strong>B. 開発者全員へRootユーザーを共有する</strong></p><p>認証情報の共有は重大なセキュリティ事故につながり、最小権限の原則にも反します。</p></div><div class=\"incorrect-item\"><p><strong>C. Rootユーザーを削除する</strong></p><p>Rootユーザーはアカウントに紐づく特別なユーザーであり、削除することはできません。</p></div>",
    "pointsHtml": "<ul><li>Rootユーザーには必ずMFAを有効化する</li><li>日常業務ではIAMユーザー/ロールを使う</li><li>Rootユーザーはアクセスキーを作成しない</li></ul>"
  },
  {
    "number": 4,
    "id": "Q004",
    "questionHtml": "ある企業では、EC2インスタンスの起動・停止だけを担当する運用担当者がいます。<br>この担当者へ付与する権限として最も適切な考え方はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AdministratorAccessを付与する"
      },
      {
        "correct": true,
        "html": "必要最小限の権限のみ付与する"
      },
      {
        "correct": false,
        "html": "Rootユーザーを利用させる"
      },
      {
        "correct": false,
        "html": "請求情報も閲覧できるようにする"
      }
    ],
    "explanationHtml": "<p>この問題では、IAM設計の基本である最小権限の原則（Principle of Least Privilege）を理解しているかが問われています。</p><p>EC2インスタンスの起動・停止だけを担当する運用担当者には、その業務に必要な操作権限のみを付与すべきです。不要な権限を与えないことで、誤操作やアカウント侵害時の影響範囲を最小限に抑えられます。</p>",
    "correctHtml": "<p><strong>B. 必要最小限の権限のみ付与する</strong></p><p>業務に必要なEC2の起動・停止権限だけを付与するのが最小権限の原則に沿った適切な考え方です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AdministratorAccessを付与する</strong></p><p>すべての操作が可能になる管理者権限であり、起動・停止のみを担当する担当者には過剰です。</p></div><div class=\"incorrect-item\"><p><strong>C. Rootユーザーを利用させる</strong></p><p>Rootユーザーは全権限を持つため、日常業務での使用も共有も推奨されません。</p></div><div class=\"incorrect-item\"><p><strong>D. 請求情報も閲覧できるようにする</strong></p><p>EC2の起動・停止という業務には不要な権限であり、付与すべきではありません。</p></div>",
    "pointsHtml": "<ul><li>最小権限の原則はCLFの最重要概念</li><li>業務に必要な権限のみをポリシーで付与する</li><li>AdministratorAccessの安易な付与は避ける</li></ul>"
  },
  {
    "number": 5,
    "id": "Q005",
    "questionHtml": "AWSアカウントへの不正ログイン対策として、パスワードに加えてワンタイムコードの入力を要求する仕組みはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS WAF"
      },
      {
        "correct": false,
        "html": "AWS Shield"
      },
      {
        "correct": false,
        "html": "IAMポリシー"
      },
      {
        "correct": true,
        "html": "Multi-Factor Authentication (MFA)"
      }
    ],
    "explanationHtml": "<p>この問題では、多要素認証（MFA）の仕組みを理解しているかが問われています。</p><p>MFA（Multi-Factor Authentication）は、パスワード（知識要素）に加えて、スマートフォンアプリやハードウェアトークンが生成するワンタイムコード（所持要素）などの追加要素を要求する仕組みです。これにより、パスワードが漏えいしても不正ログインを防止できます。</p>",
    "correctHtml": "<p><strong>D. Multi-Factor Authentication (MFA)</strong></p><p>パスワードに加えてワンタイムコードなどの追加認証を要求することで、不正ログインのリスクを大幅に低減します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS WAF</strong></p><p>Webアプリケーションへの攻撃を防御するファイアウォールであり、ログイン時の追加認証機能ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Shield</strong></p><p>DDoS攻撃を防御するサービスであり、認証の仕組みではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. IAMポリシー</strong></p><p>権限（認可）を定義する仕組みであり、ワンタイムコードによる追加認証を提供するものではありません。</p></div>",
    "pointsHtml": "<ul><li>MFA＝パスワード＋追加要素による多要素認証</li><li>RootユーザーとIAMユーザーの両方に設定できる</li><li>Rootユーザーへの設定は必須レベル</li></ul>"
  },
  {
    "number": 6,
    "id": "Q006",
    "questionHtml": "AWSの責任共有モデルにおいて、Amazon S3バケットのアクセス許可設定を管理する責任は誰にありますか。",
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
        "html": "インターネットサービスプロバイダー"
      },
      {
        "correct": false,
        "html": "AWS Support"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSの責任共有モデル（Shared Responsibility Model）を理解しているかが問われています。</p><p>責任共有モデルでは、AWSが「クラウドそのもののセキュリティ（Security of the Cloud）」を担い、利用者が「クラウド内のセキュリティ（Security in the Cloud）」を担います。S3バケットのアクセス許可設定（バケットポリシーやACL）は利用者が管理する範囲です。</p>",
    "correctHtml": "<p><strong>B. 利用者</strong></p><p>S3バケットのアクセス許可設定はデータへのアクセス制御に該当し、利用者の責任範囲です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS</strong></p><p>AWSは物理インフラやストレージ基盤の保護を担いますが、個々のバケットのアクセス許可設定は行いません。</p></div><div class=\"incorrect-item\"><p><strong>C. インターネットサービスプロバイダー</strong></p><p>責任共有モデルの当事者ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Support</strong></p><p>技術サポートを提供する窓口であり、利用者のリソース設定を管理する責任は負いません。</p></div>",
    "pointsHtml": "<ul><li>Security of the Cloud＝AWS（物理インフラ等）</li><li>Security in the Cloud＝利用者（データ・IAM・アクセス設定等）</li><li>S3バケットのアクセス許可設定は利用者責任</li></ul>"
  },
  {
    "number": 7,
    "id": "Q007",
    "questionHtml": "ある企業では、顧客向けWebアプリケーションをAWS上で提供しています。<br>顧客自身がサインアップ・サインインできる仕組みを実装したい場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS IAM"
      },
      {
        "correct": false,
        "html": "AWS IAM Identity Center"
      },
      {
        "correct": false,
        "html": "AWS Organizations"
      },
      {
        "correct": true,
        "html": "Amazon Cognito"
      }
    ],
    "explanationHtml": "<p>この問題では、顧客（エンドユーザー）向けのサインアップ・サインイン機能を実装するサービスを理解しているかが問われています。</p><p>Amazon Cognitoは、Webアプリやモバイルアプリのユーザーサインアップやサインインをマネージドで提供するサービスです。ユーザープールによる直接認証に加え、GoogleやAppleなど外部IDプロバイダーとの連携もできます。</p>",
    "correctHtml": "<p><strong>D. Amazon Cognito</strong></p><p>顧客自身がサインアップ・サインインできる仕組みをアプリケーションへ簡単に実装できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS IAM</strong></p><p>AWSリソースを操作する利用者やサービス向けの認証・認可サービスであり、アプリのエンドユーザー認証には適しません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS IAM Identity Center</strong></p><p>社員などがAWSアカウントやアプリへシングルサインオンするためのサービスで、顧客向けサインアップ機能を目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Organizations</strong></p><p>複数のAWSアカウントを一元管理するサービスであり、ユーザー認証機能は提供しません。</p></div>",
    "pointsHtml": "<ul><li>Cognito＝アプリのエンドユーザー向け認証</li><li>IAM＝AWSリソース利用者向け認証・認可</li><li>外部IdP（Google/Apple等）連携もCognito</li></ul>"
  },
  {
    "number": 8,
    "id": "Q008",
    "questionHtml": "AWS環境へプログラムからアクセスするために使用する認証情報として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "Access Key ID と Secret Access Key"
      },
      {
        "correct": false,
        "html": "MFAコード"
      },
      {
        "correct": false,
        "html": "IAMポリシー"
      },
      {
        "correct": false,
        "html": "AWSアカウントID"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS環境へプログラム（CLIやSDK）からアクセスする際に使用する認証情報を理解しているかが問われています。</p><p>プログラムアクセス（API呼び出し）では、Access Key IDとSecret Access Keyの組み合わせを使用します。ただし長期的なアクセスキーの利用はリスクがあるため、可能な限りIAMロールによる一時的な認証情報の利用が推奨されます。</p>",
    "correctHtml": "<p><strong>A. Access Key ID と Secret Access Key</strong></p><p>CLIやSDKからのプログラムアクセスでは、この2つの認証情報を用いてAPIリクエストに署名します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. MFAコード</strong></p><p>追加認証で使用するワンタイムコードであり、プログラムアクセスの基本的な認証情報ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. IAMポリシー</strong></p><p>権限（認可）を定義するドキュメントであり、認証情報そのものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWSアカウントID</strong></p><p>アカウントを識別する番号であり、それ単体では認証情報として機能しません。</p></div>",
    "pointsHtml": "<ul><li>プログラムアクセス＝Access Key ID＋Secret Access Key</li><li>マネジメントコンソール＝ユーザー名とパスワード（＋MFA）</li><li>長期キーよりIAMロールの一時認証情報が推奨</li></ul>"
  },
  {
    "number": 9,
    "id": "Q009",
    "questionHtml": "認証(Authentication)とは何を確認する仕組みですか。",
    "choices": [
      {
        "correct": false,
        "html": "どのAWSサービスを利用できるか"
      },
      {
        "correct": false,
        "html": "通信内容を暗号化すること"
      },
      {
        "correct": true,
        "html": "利用者が本人であること"
      },
      {
        "correct": false,
        "html": "利用料金を確認すること"
      }
    ],
    "explanationHtml": "<p>この問題では、認証（Authentication）とは何を確認する仕組みかを理解しているかが問われています。</p><p>認証とは「利用者が名乗ったとおりの本人であること」を確認するプロセスです。ユーザー名とパスワード、MFAコードなどによって本人確認を行います。</p>",
    "correctHtml": "<p><strong>C. 利用者が本人であること</strong></p><p>認証は本人確認（「あなたは誰か」）を行う仕組みです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. どのAWSサービスを利用できるか</strong></p><p>これは認可（Authorization）が決定する内容であり、認証ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. 通信内容を暗号化すること</strong></p><p>暗号化はデータ保護の仕組みであり、本人確認とは異なります。</p></div><div class=\"incorrect-item\"><p><strong>D. 利用料金を確認すること</strong></p><p>課金管理に関する内容であり、認証とは無関係です。</p></div>",
    "pointsHtml": "<ul><li>認証（Authentication）＝「あなたは誰か」本人確認</li><li>認可（Authorization）＝「何をしてよいか」権限決定</li><li>まず認証、その後に認可の順で実行される</li></ul>"
  },
  {
    "number": 10,
    "id": "Q010",
    "questionHtml": "認可(Authorization)とは何を決定する仕組みですか。",
    "choices": [
      {
        "correct": false,
        "html": "パスワードの複雑性"
      },
      {
        "correct": false,
        "html": "通信経路"
      },
      {
        "correct": false,
        "html": "データ暗号化方式"
      },
      {
        "correct": true,
        "html": "認証後に利用できるリソースや操作"
      }
    ],
    "explanationHtml": "<p>この問題では、認可（Authorization）とは何を決定する仕組みかを理解しているかが問われています。</p><p>認可とは、認証された利用者が「どのリソースに対してどの操作を実行できるか」を決定するプロセスです。AWSではIAMポリシーによって認可が制御されます。</p>",
    "correctHtml": "<p><strong>D. 認証後に利用できるリソースや操作</strong></p><p>認可は、本人確認（認証）を済ませた利用者に対して、許可される操作やリソースを決定します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. パスワードの複雑性</strong></p><p>パスワードポリシーに関する内容であり、認可の役割ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. 通信経路</strong></p><p>ネットワーク経路に関する内容であり、権限決定とは異なります。</p></div><div class=\"incorrect-item\"><p><strong>C. データ暗号化方式</strong></p><p>データ保護の仕組みであり、認可の役割ではありません。</p></div>",
    "pointsHtml": "<ul><li>認可＝認証後に許可される操作・リソースの決定</li><li>AWSではIAMポリシーで認可を制御</li><li>認証と認可の違いは頻出</li></ul>"
  },
  {
    "number": 11,
    "id": "Q011",
    "questionHtml": "ある企業では、請求担当者はAWS請求情報のみ閲覧できれば十分です。<br>EC2やS3を操作できないようにしたい場合、最も適切な考え方はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AdministratorAccessを付与する"
      },
      {
        "correct": false,
        "html": "Rootユーザーを利用する"
      },
      {
        "correct": true,
        "html": "IAMポリシーで必要最小限の権限を付与する"
      },
      {
        "correct": false,
        "html": "AWS Organizationsへ所属させる"
      }
    ],
    "explanationHtml": "<p>この問題では、業務に必要な範囲だけに権限を絞る最小権限の原則を、請求担当者のケースで理解しているかが問われています。</p><p>請求情報のみを閲覧できれば十分な担当者には、請求関連の権限だけをIAMポリシーで付与し、EC2やS3などの操作権限は与えないのが適切です。</p>",
    "correctHtml": "<p><strong>C. IAMポリシーで必要最小限の権限を付与する</strong></p><p>請求情報の閲覧に必要な権限のみをIAMポリシーで付与することで、最小権限の原則を実現できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AdministratorAccessを付与する</strong></p><p>すべての操作が可能になり、請求担当者に必要な範囲を大きく超えるため不適切です。</p></div><div class=\"incorrect-item\"><p><strong>B. Rootユーザーを利用する</strong></p><p>Rootユーザーは全権限を持ち、日常業務での使用は推奨されません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Organizationsへ所属させる</strong></p><p>アカウント管理の仕組みであり、単一アカウント内で担当者の権限を絞る手段ではありません。</p></div>",
    "pointsHtml": "<ul><li>業務に応じた最小権限をIAMポリシーで付与</li><li>請求情報の閲覧権限も個別に制御できる</li><li>過剰な権限付与はセキュリティリスク</li></ul>"
  },
  {
    "number": 12,
    "id": "Q012",
    "questionHtml": "複数のAWSアカウントを一元管理し、組織単位で管理したい場合に最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Cognito"
      },
      {
        "correct": true,
        "html": "AWS Organizations"
      },
      {
        "correct": false,
        "html": "IAM"
      },
      {
        "correct": false,
        "html": "IAM Identity Center"
      }
    ],
    "explanationHtml": "<p>この問題では、複数のAWSアカウントを組織単位で一元管理するサービスを理解しているかが問われています。</p><p>AWS Organizationsは、複数アカウントを組織（Organization）としてまとめ、組織単位（OU）で階層的に管理できるサービスです。SCP（サービスコントロールポリシー）による制御や一括請求も可能です。</p>",
    "correctHtml": "<p><strong>B. AWS Organizations</strong></p><p>複数のAWSアカウントを一元管理し、組織単位で統制するための中心的なサービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Cognito</strong></p><p>アプリのエンドユーザー向け認証サービスであり、アカウント管理には使用しません。</p></div><div class=\"incorrect-item\"><p><strong>C. IAM</strong></p><p>単一アカウント内のアクセス権限を管理するサービスで、複数アカウントの組織管理は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. IAM Identity Center</strong></p><p>複数アカウントへのシングルサインオンを提供しますが、アカウントを組織として管理する主目的のサービスではありません（通常Organizationsと連携します）。</p></div>",
    "pointsHtml": "<ul><li>Organizations＝複数アカウントの一元管理・組織化</li><li>SCPによる利用可能サービスの制御</li><li>一括請求（Consolidated Billing）</li></ul>"
  },
  {
    "number": 13,
    "id": "Q013",
    "questionHtml": "IAMユーザーのパスワードが漏えいした場合でも、不正ログインのリスクを大きく低減できる設定はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMロール"
      },
      {
        "correct": false,
        "html": "AWS Shield"
      },
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": true,
        "html": "MFAの有効化"
      }
    ],
    "explanationHtml": "<p>この問題では、パスワード漏えい時でも不正ログインを防ぐ対策を理解しているかが問われています。</p><p>MFAを有効化しておくと、パスワードが漏えいしても追加の認証要素（ワンタイムコードなど）が必要になるため、不正ログインのリスクを大きく低減できます。</p>",
    "correctHtml": "<p><strong>D. MFAの有効化</strong></p><p>パスワードに加えて追加要素を要求するため、パスワード漏えい時の不正ログインを防止できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMロール</strong></p><p>一時的な権限を安全に付与する仕組みですが、パスワード漏えい時のログイン防止を直接の目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Shield</strong></p><p>DDoS攻撃を防御するサービスであり、ログイン認証とは関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、不正ログインを未然に防止する認証機能ではありません。</p></div>",
    "pointsHtml": "<ul><li>MFA＝パスワード漏えい時の最も有効な防御</li><li>RootユーザーとIAMユーザーの両方に設定可能</li><li>GuardDutyは「検知」、MFAは「防止」</li></ul>"
  },
  {
    "number": 14,
    "id": "Q014",
    "questionHtml": "開発チームでは、Amazon EC2の起動のみ許可し、IAM設定の変更は禁止したいと考えています。<br>この要件を実現する最も適切な方法はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Organizationsで管理する"
      },
      {
        "correct": false,
        "html": "Amazon Cognitoを利用する"
      },
      {
        "correct": true,
        "html": "IAMポリシーで許可する操作を制限する"
      },
      {
        "correct": false,
        "html": "Rootユーザーを利用する"
      }
    ],
    "explanationHtml": "<p>この問題では、特定の操作のみを許可し、他の操作を禁止するIAMポリシーによる権限制御を理解しているかが問われています。</p><p>EC2の起動を許可しつつIAM設定の変更を禁止したい場合、IAMポリシーで許可する操作（アクション）を明示的に制限します。これにより必要な操作だけを許可できます。</p>",
    "correctHtml": "<p><strong>C. IAMポリシーで許可する操作を制限する</strong></p><p>IAMポリシーで許可・拒否するアクションを定義し、EC2起動は許可、IAM変更は禁止といった細かな制御ができます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Organizationsで管理する</strong></p><p>組織全体のアカウント管理やSCPによる制御は可能ですが、個々のユーザーへEC2起動のみ許可する要件には直接適しません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Cognitoを利用する</strong></p><p>アプリのエンドユーザー向け認証サービスであり、AWSリソースの操作制限には使用しません。</p></div><div class=\"incorrect-item\"><p><strong>D. Rootユーザーを利用する</strong></p><p>Rootユーザーは全権限を持つため、操作を制限する手段にはなりません。</p></div>",
    "pointsHtml": "<ul><li>IAMポリシーでアクション単位の許可・拒否を制御</li><li>許可した操作のみ実行可能にできる</li><li>最小権限の原則を具体的に実現する手段</li></ul>"
  },
  {
    "number": 15,
    "id": "Q015",
    "questionHtml": "ある企業では、社員は会社の認証基盤でログインし、複数のAWSアカウントを利用しています。<br>社員ごとに利用できるAWSアカウントを管理するサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAM"
      },
      {
        "correct": false,
        "html": "Organizations"
      },
      {
        "correct": false,
        "html": "Cognito"
      },
      {
        "correct": true,
        "html": "IAM Identity Center"
      }
    ],
    "explanationHtml": "<p>この問題では、会社の認証基盤でログインし、複数のAWSアカウントを利用する社員のアクセスを管理するサービスを理解しているかが問われています。</p><p>AWS IAM Identity Centerは、社内認証基盤や外部IdPと連携して、社員ごとに利用できるAWSアカウントと権限セットを割り当てるシングルサインオンサービスです。</p>",
    "correctHtml": "<p><strong>D. IAM Identity Center</strong></p><p>社内認証基盤と連携し、社員ごとに利用可能なAWSアカウントを一元管理できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAM</strong></p><p>単一アカウント内のアクセス管理サービスであり、複数アカウントへのアクセス割り当てを主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>B. Organizations</strong></p><p>複数アカウントを組織として管理するサービスですが、社員ごとのサインインやアクセス割り当ては行いません。</p></div><div class=\"incorrect-item\"><p><strong>C. Cognito</strong></p><p>アプリのエンドユーザー向け認証サービスであり、社員のAWSアカウント管理には適しません。</p></div>",
    "pointsHtml": "<ul><li>IAM Identity Center＝社員向けのマルチアカウントSSO</li><li>社内認証基盤や外部IdPと連携</li><li>Q002と同じ論点（IAM Identity Center）</li></ul>"
  },
  {
    "number": 16,
    "id": "Q016",
    "questionHtml": "AWSが責任共有モデルにおいて担当する責任として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMポリシーの作成"
      },
      {
        "correct": false,
        "html": "Amazon S3バケットポリシーの設定"
      },
      {
        "correct": false,
        "html": "Amazon EC2のOSアップデート"
      },
      {
        "correct": true,
        "html": "データセンター設備や物理インフラの保護"
      }
    ],
    "explanationHtml": "<p>この問題では、責任共有モデルにおいてAWSが担当する責任範囲を理解しているかが問われています。</p><p>AWSは「クラウドそのもののセキュリティ」を担当し、データセンターの物理設備やハードウェア、ネットワークインフラの保護を行います。一方、IAM設定やOSアップデート、S3バケットポリシーなどは利用者の責任です。</p>",
    "correctHtml": "<p><strong>D. データセンター設備や物理インフラの保護</strong></p><p>物理的なデータセンターやハードウェアの保護はAWSが担当する責任範囲です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMポリシーの作成</strong></p><p>アクセス制御の設定は利用者の責任範囲です。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon S3バケットポリシーの設定</strong></p><p>バケットのアクセス制御は利用者が管理します。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon EC2のOSアップデート</strong></p><p>EC2上のゲストOSのパッチ適用やアップデートは利用者の責任です。</p></div>",
    "pointsHtml": "<ul><li>AWSの責任＝物理インフラ・データセンター・ハードウェア</li><li>利用者の責任＝IAM・OS・アプリ・データ・バケット設定</li><li>EC2のOSパッチは利用者責任である点が頻出</li></ul>"
  },
  {
    "number": 17,
    "id": "Q017",
    "questionHtml": "新しいIAMユーザーを作成する際のセキュリティベストプラクティスとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AdministratorAccessを標準で付与する"
      },
      {
        "correct": false,
        "html": "Rootユーザーと同じ認証情報を利用する"
      },
      {
        "correct": false,
        "html": "MFAは不要である"
      },
      {
        "correct": true,
        "html": "業務に必要な権限のみを付与し、必要に応じてMFAを有効化する"
      }
    ],
    "explanationHtml": "<p>この問題では、新しいIAMユーザー作成時のセキュリティベストプラクティスを理解しているかが問われています。</p><p>新規IAMユーザーには、業務に必要な権限のみを付与し（最小権限の原則）、必要に応じてMFAを有効化することが推奨されます。標準で管理者権限を与えたり、MFAを不要としたりするのは適切ではありません。</p>",
    "correctHtml": "<p><strong>D. 業務に必要な権限のみを付与し、必要に応じてMFAを有効化する</strong></p><p>最小権限の原則とMFAの活用を組み合わせた、AWS推奨のベストプラクティスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AdministratorAccessを標準で付与する</strong></p><p>すべての操作を許可する管理者権限を標準付与することは、最小権限の原則に反します。</p></div><div class=\"incorrect-item\"><p><strong>B. Rootユーザーと同じ認証情報を利用する</strong></p><p>Rootユーザーの認証情報の共有・流用は重大なセキュリティリスクです。</p></div><div class=\"incorrect-item\"><p><strong>C. MFAは不要である</strong></p><p>MFAは不正アクセス防止に有効であり、不要とするのは適切ではありません。</p></div>",
    "pointsHtml": "<ul><li>新規ユーザーは最小権限＋MFAが基本</li><li>管理者権限の標準付与は避ける</li><li>Root認証情報の流用は禁止</li></ul>"
  },
  {
    "number": 18,
    "id": "Q018",
    "questionHtml": "ある企業では、AWSアカウント内で「誰が」「いつ」「どのAWS APIを実行したか」を後から確認できるようにしたいと考えています。<br>この要件を最も満たすサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": true,
        "html": "AWS CloudTrail"
      },
      {
        "correct": false,
        "html": "Amazon CloudWatch"
      },
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      }
    ],
    "explanationHtml": "<p>この問題では、「誰が」「いつ」「どのAWS APIを実行したか」を後から確認できるサービスを理解しているかが問われています。</p><p>AWS CloudTrailは、AWSアカウント内で実行されたAPI呼び出しを記録する監査サービスです。操作した主体、時刻、送信元IP、対象リソースなどを追跡でき、監査やインシデント調査に利用されます。</p>",
    "correctHtml": "<p><strong>B. AWS CloudTrail</strong></p><p>AWS APIの実行履歴を記録し、「誰が・いつ・何をしたか」を後から確認できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Config</strong></p><p>リソースの設定変更履歴や準拠状況を記録するサービスであり、API操作の実行者履歴を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon CloudWatch</strong></p><p>メトリクスやログを監視するサービスであり、API操作の監査証跡を記録するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、すべてのAPI操作履歴を記録する監査サービスではありません。</p></div>",
    "pointsHtml": "<ul><li>CloudTrail＝API操作の監査証跡（誰が・いつ・何を）</li><li>Config＝リソース設定の変更履歴</li><li>CloudWatch＝メトリクス・ログ監視</li></ul>"
  },
  {
    "number": 19,
    "id": "Q019",
    "questionHtml": "セキュリティ監査のため、「現在のS3バケットがパブリック公開されているか」を継続的に確認したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS CloudTrail"
      },
      {
        "correct": false,
        "html": "Amazon Inspector"
      },
      {
        "correct": true,
        "html": "AWS Config"
      },
      {
        "correct": false,
        "html": "Amazon EventBridge"
      }
    ],
    "explanationHtml": "<p>この問題では、リソースの設定状態が要件に準拠しているかを継続的に確認するサービスを理解しているかが問われています。</p><p>AWS Configは、AWSリソースの設定変更を継続的に記録し、あらかじめ定義したルールに準拠しているかを評価します。「現在S3バケットがパブリック公開されているか」といった設定状態の継続的な確認に適しています。</p>",
    "correctHtml": "<p><strong>C. AWS Config</strong></p><p>リソースの設定状態を継続的に評価し、S3バケットのパブリック公開などのルール違反を検出できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS CloudTrail</strong></p><p>API操作履歴を記録するサービスであり、設定状態の継続的な準拠評価を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Inspector</strong></p><p>EC2やコンテナの脆弱性を診断するサービスであり、S3設定の準拠確認には使用しません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon EventBridge</strong></p><p>イベントを連携させるサービスであり、それ単体で設定準拠状況を継続評価するものではありません。</p></div>",
    "pointsHtml": "<ul><li>Config＝リソース設定の記録と準拠評価</li><li>Configルールで公開設定などを継続チェック</li><li>CloudTrail（操作履歴）との違いに注意</li></ul>"
  },
  {
    "number": 20,
    "id": "Q020",
    "questionHtml": "社外からの大量アクセスによりWebサイトが利用できなくなる攻撃（DDoS攻撃）への対策を強化したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS WAF"
      },
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": true,
        "html": "AWS Shield"
      },
      {
        "correct": false,
        "html": "AWS Firewall Manager"
      }
    ],
    "explanationHtml": "<p>この問題では、DDoS攻撃への対策を強化するサービスを理解しているかが問われています。</p><p>AWS Shieldは、DDoS攻撃からアプリケーションを保護するサービスです。Shield Standardはすべての利用者に自動適用され無料、Shield Advancedは有料で高度な保護と支援を提供します。</p>",
    "correctHtml": "<p><strong>C. AWS Shield</strong></p><p>ネットワーク層・トランスポート層などへのDDoS攻撃からWebサイトを保護します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS WAF</strong></p><p>SQLインジェクションやXSSなどのアプリケーション層の攻撃を防御するサービスで、DDoS対策を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、DDoS攻撃を防御するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Firewall Manager</strong></p><p>複数アカウントのファイアウォールルールを一元管理するサービスであり、DDoS防御そのものを行うサービスではありません。</p></div>",
    "pointsHtml": "<ul><li>Shield＝DDoS対策（Standardは無料、Advancedは有料）</li><li>WAF＝Webアプリ層の攻撃対策</li><li>ShieldとWAFの役割の違いは頻出</li></ul>"
  },
  {
    "number": 21,
    "id": "Q021",
    "questionHtml": "Webアプリケーションに対するSQLインジェクションやクロスサイトスクリプティング（XSS）などの攻撃を防止したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Shield"
      },
      {
        "correct": true,
        "html": "AWS WAF"
      },
      {
        "correct": false,
        "html": "Amazon Inspector"
      },
      {
        "correct": false,
        "html": "AWS Config"
      }
    ],
    "explanationHtml": "<p>この問題では、SQLインジェクションやクロスサイトスクリプティング（XSS）などのWebアプリケーション攻撃を防ぐサービスを理解しているかが問われています。</p><p>AWS WAF（Web Application Firewall）は、HTTP/HTTPSリクエストを検査し、SQLインジェクションやXSSなどの不正なリクエストをルールに基づいてブロックします。CloudFront、ALB、API Gatewayなどと連携します。</p>",
    "correctHtml": "<p><strong>B. AWS WAF</strong></p><p>Webアプリケーション層への攻撃（SQLインジェクション、XSSなど）を検知・遮断できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Shield</strong></p><p>DDoS攻撃を防御するサービスであり、SQLインジェクションやXSSの防御を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Inspector</strong></p><p>脆弱性を診断するサービスであり、通信リクエストをリアルタイムに遮断するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Config</strong></p><p>リソース設定の記録・評価サービスであり、Web攻撃の防御機能はありません。</p></div>",
    "pointsHtml": "<ul><li>WAF＝SQLインジェクション・XSSなどWebアプリ攻撃対策</li><li>CloudFront/ALB/API Gatewayと連携</li><li>Shield（DDoS）との役割分担を整理</li></ul>"
  },
  {
    "number": 22,
    "id": "Q022",
    "questionHtml": "Amazon EC2インスタンスの脆弱性や未適用のセキュリティパッチを確認したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": false,
        "html": "AWS CloudTrail"
      },
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": true,
        "html": "Amazon Inspector"
      }
    ],
    "explanationHtml": "<p>この問題では、EC2インスタンスの脆弱性や未適用のセキュリティパッチを確認するサービスを理解しているかが問われています。</p><p>Amazon Inspectorは、EC2インスタンスやコンテナイメージ、Lambda関数などをスキャンし、既知の脆弱性（CVE）やネットワークの到達性の問題を継続的に検出する脆弱性診断サービスです。</p>",
    "correctHtml": "<p><strong>D. Amazon Inspector</strong></p><p>EC2などをスキャンし、脆弱性や未適用パッチを継続的に評価できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、脆弱性診断を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS CloudTrail</strong></p><p>API操作履歴を記録するサービスであり、脆弱性の診断は行いません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Config</strong></p><p>リソース設定の記録・準拠評価を行うサービスであり、OSやソフトウェアの脆弱性スキャンは行いません。</p></div>",
    "pointsHtml": "<ul><li>Inspector＝脆弱性診断（EC2・コンテナ・Lambda）</li><li>GuardDuty＝脅威検知</li><li>「脆弱性」ならInspectorを選ぶ</li></ul>"
  },
  {
    "number": 23,
    "id": "Q023",
    "questionHtml": "AWSアカウント内で、不審なAPI呼び出しや異常なログインなどの脅威を自動検知したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": false,
        "html": "Amazon CloudWatch"
      },
      {
        "correct": true,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": false,
        "html": "AWS Trusted Advisor"
      }
    ],
    "explanationHtml": "<p>この問題では、不審なAPI呼び出しや異常なログインなどの脅威を自動検知するサービスを理解しているかが問われています。</p><p>Amazon GuardDutyは、CloudTrailログ、VPCフローログ、DNSログなどを継続的に分析し、機械学習や脅威インテリジェンスを用いて不審な挙動や脅威を自動検知するサービスです。</p>",
    "correctHtml": "<p><strong>C. Amazon GuardDuty</strong></p><p>不審なAPI呼び出しや異常なログインなどの脅威を自動的に検知します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Config</strong></p><p>リソース設定の記録・準拠評価サービスであり、脅威検知は行いません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon CloudWatch</strong></p><p>メトリクスやログの監視サービスであり、脅威インテリジェンスに基づく脅威検知を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Trusted Advisor</strong></p><p>ベストプラクティスに基づく改善提案を行うサービスであり、リアルタイムの脅威検知は行いません。</p></div>",
    "pointsHtml": "<ul><li>GuardDuty＝脅威検知（不審なアクセス・異常挙動）</li><li>CloudTrail/VPCフローログ/DNSログを分析</li><li>「検知」＝GuardDuty、「診断」＝Inspector</li></ul>"
  },
  {
    "number": 24,
    "id": "Q024",
    "questionHtml": "複数のAWSセキュリティサービスからの検知結果を一元的に確認したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": false,
        "html": "Amazon Inspector"
      },
      {
        "correct": true,
        "html": "AWS Security Hub"
      }
    ],
    "explanationHtml": "<p>この問題では、複数のAWSセキュリティサービスの検知結果を一元的に確認するサービスを理解しているかが問われています。</p><p>AWS Security Hubは、GuardDuty、Inspector、Macieなど複数のセキュリティサービスや標準（CISベンチマークなど）の検出結果を集約し、ダッシュボードで一元的に確認できるサービスです。</p>",
    "correctHtml": "<p><strong>D. AWS Security Hub</strong></p><p>複数のセキュリティサービスの検知結果を集約し、統合ダッシュボードで一元管理できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、他サービスの結果を集約する役割ではありません（検知結果はSecurity Hubへ集約されます）。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Config</strong></p><p>リソース設定の記録・準拠評価サービスであり、セキュリティ検知結果を一元集約する主目的のサービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Inspector</strong></p><p>脆弱性診断サービスであり、複数サービスの結果を集約するものではありません。</p></div>",
    "pointsHtml": "<ul><li>Security Hub＝複数サービスの検知結果を集約・一元管理</li><li>GuardDuty/Inspector/Macieの結果を統合表示</li><li>「まとめる」ならSecurity Hub</li></ul>"
  },
  {
    "number": 25,
    "id": "Q025",
    "questionHtml": "Amazon S3に保存するデータを暗号化し、暗号鍵をAWSで安全に管理したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "AWS Key Management Service (AWS KMS)"
      },
      {
        "correct": false,
        "html": "AWS Secrets Manager"
      },
      {
        "correct": false,
        "html": "AWS Certificate Manager"
      },
      {
        "correct": false,
        "html": "Amazon Cognito"
      }
    ],
    "explanationHtml": "<p>この問題では、S3に保存するデータを暗号化し、暗号鍵をAWSで安全に管理するサービスを理解しているかが問われています。</p><p>AWS Key Management Service（AWS KMS）は、暗号鍵を安全に作成・管理・ローテーションするマネージドサービスです。S3、EBS、RDSなど多くのAWSサービスと連携して保存データの暗号化を実現します。</p>",
    "correctHtml": "<p><strong>A. AWS Key Management Service (AWS KMS)</strong></p><p>暗号鍵の作成・管理・アクセス制御を一元的に行い、S3データの暗号化に利用できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. AWS Secrets Manager</strong></p><p>パスワードやAPIキーなどのシークレットを管理するサービスであり、暗号鍵管理を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Certificate Manager</strong></p><p>SSL/TLS証明書を管理するサービスであり、データ暗号化用の鍵管理とは異なります。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Cognito</strong></p><p>アプリのエンドユーザー向け認証サービスであり、暗号鍵管理とは無関係です。</p></div>",
    "pointsHtml": "<ul><li>KMS＝暗号鍵の管理（作成・ローテーション・アクセス制御）</li><li>S3・EBS・RDSなどと連携して暗号化</li><li>「暗号鍵管理」ならKMS</li></ul>"
  },
  {
    "number": 26,
    "id": "Q026",
    "questionHtml": "データベース接続パスワードやAPIキーなどを安全に保管し、アプリケーションから取得したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS KMS"
      },
      {
        "correct": false,
        "html": "IAM"
      },
      {
        "correct": true,
        "html": "AWS Secrets Manager"
      },
      {
        "correct": false,
        "html": "AWS Certificate Manager"
      }
    ],
    "explanationHtml": "<p>この問題では、データベース接続パスワードやAPIキーなどを安全に保管し、アプリケーションから取得するサービスを理解しているかが問われています。</p><p>AWS Secrets Managerは、データベース認証情報やAPIキーなどのシークレットを暗号化して保存し、アプリケーションから安全に取得できるサービスです。自動ローテーションにも対応します。</p>",
    "correctHtml": "<p><strong>C. AWS Secrets Manager</strong></p><p>シークレット情報を安全に保管し、アプリケーションから取得できます。自動ローテーションにも対応します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS KMS</strong></p><p>暗号鍵を管理するサービスであり、パスワードやAPIキーそのものの保管・取得を主目的とはしていません（Secrets ManagerはKMSで暗号化します）。</p></div><div class=\"incorrect-item\"><p><strong>B. IAM</strong></p><p>アクセス権限を管理するサービスであり、シークレットの保管サービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Certificate Manager</strong></p><p>SSL/TLS証明書を管理するサービスであり、パスワードやAPIキーの保管には使用しません。</p></div>",
    "pointsHtml": "<ul><li>Secrets Manager＝パスワード・APIキーなどの安全な保管と取得</li><li>自動ローテーションに対応</li><li>KMS（鍵管理）との役割の違いに注意</li></ul>"
  },
  {
    "number": 27,
    "id": "Q027",
    "questionHtml": "SSL/TLS証明書をAWSで発行・更新し、ロードバランサーへ適用したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Secrets Manager"
      },
      {
        "correct": false,
        "html": "AWS KMS"
      },
      {
        "correct": true,
        "html": "AWS Certificate Manager (ACM)"
      },
      {
        "correct": false,
        "html": "Amazon Cognito"
      }
    ],
    "explanationHtml": "<p>この問題では、SSL/TLS証明書を発行・更新してロードバランサーへ適用するサービスを理解しているかが問われています。</p><p>AWS Certificate Manager（ACM）は、SSL/TLS証明書の発行・自動更新・管理を行うサービスです。ALBやCloudFrontなどと連携して、HTTPS通信を容易に実現できます。</p>",
    "correctHtml": "<p><strong>C. AWS Certificate Manager (ACM)</strong></p><p>SSL/TLS証明書を発行・自動更新し、ロードバランサーなどへ適用できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Secrets Manager</strong></p><p>パスワードやAPIキーなどのシークレットを管理するサービスであり、SSL/TLS証明書の発行・管理を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS KMS</strong></p><p>暗号鍵を管理するサービスであり、SSL/TLS証明書の発行・更新は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Cognito</strong></p><p>アプリのエンドユーザー向け認証サービスであり、証明書管理とは無関係です。</p></div>",
    "pointsHtml": "<ul><li>ACM＝SSL/TLS証明書の発行・自動更新・管理</li><li>ALB・CloudFrontと連携してHTTPS化</li><li>証明書の自動更新で失効を防止</li></ul>"
  },
  {
    "number": 28,
    "id": "Q028",
    "questionHtml": "開発チームでは、CloudTrailのログを削除されても監査証跡を確認できるようにしたいと考えています。<br>最も適切な考え方はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "CloudTrailを停止する"
      },
      {
        "correct": true,
        "html": "CloudTrailログをAmazon S3へ保存する"
      },
      {
        "correct": false,
        "html": "CloudWatch Logsだけ利用する"
      },
      {
        "correct": false,
        "html": "IAMポリシーだけ設定する"
      }
    ],
    "explanationHtml": "<p>この問題では、CloudTrailの監査証跡を確実に保全する考え方を理解しているかが問われています。</p><p>CloudTrailのログはAmazon S3へ保存することで、長期間の保管と改ざん防止（バージョニングやログファイル検証、S3バケットポリシーによる保護など）が可能になり、証跡を確実に残せます。</p>",
    "correctHtml": "<p><strong>B. CloudTrailログをAmazon S3へ保存する</strong></p><p>S3へ保存することで長期保管と保全が可能になり、監査証跡を確実に確認できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. CloudTrailを停止する</strong></p><p>停止するとログが記録されなくなり、監査証跡を確認できなくなります。</p></div><div class=\"incorrect-item\"><p><strong>C. CloudWatch Logsだけ利用する</strong></p><p>監視・分析には有用ですが、長期の証跡保全という観点ではS3への保存が基本です。</p></div><div class=\"incorrect-item\"><p><strong>D. IAMポリシーだけ設定する</strong></p><p>アクセス制御はできますが、それ自体はログの保存・保全を実現するものではありません。</p></div>",
    "pointsHtml": "<ul><li>CloudTrailログはS3へ保存して長期保全</li><li>ログファイル検証やバージョニングで改ざん対策</li><li>S3は監査証跡の標準的な保存先</li></ul>"
  },
  {
    "number": 29,
    "id": "Q029",
    "questionHtml": "AWSアカウントのセキュリティ状態について、ベストプラクティスから逸脱している設定を確認したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": true,
        "html": "AWS Trusted Advisor"
      },
      {
        "correct": false,
        "html": "AWS CloudTrail"
      },
      {
        "correct": false,
        "html": "AWS WAF"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSアカウントの設定がベストプラクティスから逸脱していないかを確認するサービスを理解しているかが問われています。</p><p>AWS Trusted Advisorは、コスト最適化・セキュリティ・パフォーマンス・耐障害性・サービスクォータの観点でAWS環境を分析し、ベストプラクティスからの逸脱を検出して改善提案を行います。</p>",
    "correctHtml": "<p><strong>B. AWS Trusted Advisor</strong></p><p>セキュリティを含む複数観点でベストプラクティスからの逸脱を確認し、改善提案を行います。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、ベストプラクティスの逸脱チェックを主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS CloudTrail</strong></p><p>API操作履歴を記録するサービスであり、ベストプラクティス評価は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS WAF</strong></p><p>Webアプリケーション攻撃を防御するサービスであり、設定のベストプラクティス評価は行いません。</p></div>",
    "pointsHtml": "<ul><li>Trusted Advisor＝ベストプラクティスチェックと改善提案</li><li>5カテゴリ（コスト/セキュリティ/パフォーマンス/耐障害性/サービスクォータ）</li><li>MFA未設定などの検出にも利用（Q038参照）</li></ul>"
  },
  {
    "number": 30,
    "id": "Q030",
    "questionHtml": "AWSリソースへのAPI操作履歴を監査する目的でCloudTrailを有効化しています。<br>CloudTrailが記録する情報として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "EC2のCPU使用率"
      },
      {
        "correct": false,
        "html": "VPCのネットワーク帯域"
      },
      {
        "correct": true,
        "html": "AWS APIの実行履歴"
      },
      {
        "correct": false,
        "html": "IAMポリシーの内容だけ"
      }
    ],
    "explanationHtml": "<p>この問題では、CloudTrailが記録する情報を理解しているかが問われています。</p><p>CloudTrailは、AWSアカウント内で実行されたAWS APIの呼び出し履歴（誰が・いつ・どこから・どの操作を行ったか）を記録します。CPU使用率などのパフォーマンスメトリクスは記録しません。</p>",
    "correctHtml": "<p><strong>C. AWS APIの実行履歴</strong></p><p>CloudTrailはAWS APIの呼び出し履歴を記録する監査サービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. EC2のCPU使用率</strong></p><p>パフォーマンスメトリクスはCloudWatchが収集する情報であり、CloudTrailの記録対象ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. VPCのネットワーク帯域</strong></p><p>ネットワークのトラフィック情報はCloudTrailの記録対象ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. IAMポリシーの内容だけ</strong></p><p>CloudTrailはIAMポリシーの内容そのものではなく、API操作の履歴を記録します。</p></div>",
    "pointsHtml": "<ul><li>CloudTrail＝AWS APIの実行履歴を記録</li><li>CPU使用率などのメトリクスはCloudWatch</li><li>「操作の証跡」はCloudTrail</li></ul>"
  },
  {
    "number": 31,
    "id": "Q031",
    "questionHtml": "AWS Configの主な目的として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "API実行履歴の保存"
      },
      {
        "correct": false,
        "html": "DDoS攻撃の防御"
      },
      {
        "correct": false,
        "html": "IAMユーザー認証"
      },
      {
        "correct": true,
        "html": "AWSリソース設定の変更履歴と準拠状況の確認"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS Configの主な目的を理解しているかが問われています。</p><p>AWS Configは、AWSリソースの設定を継続的に記録し、設定変更の履歴を保持するとともに、Configルールによってリソースが要件に準拠しているか（コンプライアンス）を評価するサービスです。</p>",
    "correctHtml": "<p><strong>D. AWSリソース設定の変更履歴と準拠状況の確認</strong></p><p>Configはリソース設定の変更履歴の記録と準拠状況の評価を主目的とします。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. API実行履歴の保存</strong></p><p>これはCloudTrailの役割です。</p></div><div class=\"incorrect-item\"><p><strong>B. DDoS攻撃の防御</strong></p><p>これはAWS Shieldの役割です。</p></div><div class=\"incorrect-item\"><p><strong>C. IAMユーザー認証</strong></p><p>これはIAMの役割であり、Configの目的ではありません。</p></div>",
    "pointsHtml": "<ul><li>Config＝リソース設定の変更履歴＋準拠状況の評価</li><li>CloudTrail（API履歴）との違いは頻出</li><li>Configルールでコンプライアンスチェック</li></ul>"
  },
  {
    "number": 32,
    "id": "Q032",
    "questionHtml": "AWS KMSを利用する主な目的として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMユーザーを管理する"
      },
      {
        "correct": false,
        "html": "ログイン履歴を保存する"
      },
      {
        "correct": true,
        "html": "暗号鍵を安全に管理する"
      },
      {
        "correct": false,
        "html": "DDoS攻撃を防御する"
      }
    ],
    "explanationHtml": "<p>この問題では、AWS KMSを利用する主な目的を理解しているかが問われています。</p><p>AWS KMSは、データ暗号化に使用する暗号鍵を安全に作成・保管・管理するサービスです。鍵のローテーションやアクセス制御、使用履歴の監査も可能です。</p>",
    "correctHtml": "<p><strong>C. 暗号鍵を安全に管理する</strong></p><p>KMSの主な目的は、暗号鍵の安全な作成・管理・アクセス制御です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMユーザーを管理する</strong></p><p>これはIAMの役割であり、KMSの目的ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. ログイン履歴を保存する</strong></p><p>API操作履歴の記録はCloudTrailの役割です。</p></div><div class=\"incorrect-item\"><p><strong>D. DDoS攻撃を防御する</strong></p><p>これはAWS Shieldの役割です。</p></div>",
    "pointsHtml": "<ul><li>KMS＝暗号鍵の安全な管理</li><li>鍵のローテーション・アクセス制御・監査</li><li>多くのAWSサービスの暗号化と連携</li></ul>"
  },
  {
    "number": 33,
    "id": "Q033",
    "questionHtml": "Amazon GuardDutyが検知対象として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "EC2のディスク容量不足"
      },
      {
        "correct": false,
        "html": "S3保存容量"
      },
      {
        "correct": true,
        "html": "不審なアクセスや異常な振る舞い"
      },
      {
        "correct": false,
        "html": "CloudFormationテンプレートの誤り"
      }
    ],
    "explanationHtml": "<p>この問題では、Amazon GuardDutyの検知対象を理解しているかが問われています。</p><p>GuardDutyは、CloudTrailログやVPCフローログ、DNSログなどを分析し、不審なアクセスや異常な振る舞い（マルウェア通信、不正な認証情報の利用、異常なAPI呼び出しなど）を検知します。</p>",
    "correctHtml": "<p><strong>C. 不審なアクセスや異常な振る舞い</strong></p><p>GuardDutyは脅威の兆候となる不審なアクセスや異常挙動を検知します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. EC2のディスク容量不足</strong></p><p>リソースのメトリクスに関する内容であり、CloudWatchで監視する対象です。</p></div><div class=\"incorrect-item\"><p><strong>B. S3保存容量</strong></p><p>ストレージ容量はGuardDutyの検知対象ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. CloudFormationテンプレートの誤り</strong></p><p>テンプレートの構文検証などはGuardDutyの役割ではありません。</p></div>",
    "pointsHtml": "<ul><li>GuardDuty＝不審なアクセス・異常挙動の脅威検知</li><li>ログ（CloudTrail/VPC/DNS）を継続分析</li><li>容量やメトリクスの監視はCloudWatch</li></ul>"
  },
  {
    "number": 34,
    "id": "Q034",
    "questionHtml": "ある企業では、複数のAWSアカウントでセキュリティ状況を一元的に把握したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": true,
        "html": "AWS Security Hub"
      },
      {
        "correct": false,
        "html": "Amazon Inspector"
      }
    ],
    "explanationHtml": "<p>この問題では、複数のAWSアカウントのセキュリティ状況を一元的に把握するサービスを理解しているかが問われています。</p><p>AWS Security Hubは、複数アカウント・複数サービスのセキュリティ検出結果を集約し、統合ダッシュボードで一元的にセキュリティ状況を把握できるサービスです。</p>",
    "correctHtml": "<p><strong>C. AWS Security Hub</strong></p><p>複数アカウントのセキュリティ検出結果を集約し、一元的に把握できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Config</strong></p><p>リソース設定の記録・準拠評価サービスであり、複数サービスのセキュリティ結果を集約する主目的のサービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、検出結果はSecurity Hubへ集約されます。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Inspector</strong></p><p>脆弱性診断サービスであり、セキュリティ状況の一元集約は行いません。</p></div>",
    "pointsHtml": "<ul><li>Security Hub＝複数アカウント・複数サービスの一元管理</li><li>GuardDuty/Inspector/Macieの結果を集約</li><li>「一元的に把握」ならSecurity Hub</li></ul>"
  },
  {
    "number": 35,
    "id": "Q035",
    "questionHtml": "ある企業では、Amazon S3バケット内のデータが誤って削除された場合でも復元できるようにしたいと考えています。<br>この要件を最も満たす設定はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": false,
        "html": "AWS CloudTrail"
      },
      {
        "correct": true,
        "html": "Amazon S3 Versioning"
      },
      {
        "correct": false,
        "html": "AWS Backup"
      }
    ],
    "explanationHtml": "<p>この問題では、S3バケット内のデータが誤って削除された場合でも復元できるようにする設定を理解しているかが問われています。</p><p>Amazon S3のバージョニング（Versioning）を有効にすると、オブジェクトの上書きや削除の際に以前のバージョンが保持されます。誤って削除しても以前のバージョンから復元できます。</p>",
    "correctHtml": "<p><strong>C. Amazon S3 Versioning</strong></p><p>バージョニングにより、誤削除・上書き時でも以前のバージョンから復元できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Config</strong></p><p>リソース設定の記録・評価サービスであり、S3オブジェクトの復元機能ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS CloudTrail</strong></p><p>API操作履歴を記録するサービスであり、削除されたデータを復元する機能はありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Backup</strong></p><p>バックアップを一元管理するサービスで復元にも有用ですが、この設問で問われている「S3の誤削除からの復元を実現する設定」として最も直接的なのはバージョニングです。</p></div>",
    "pointsHtml": "<ul><li>S3バージョニング＝誤削除・上書きからの復元</li><li>以前のバージョンを保持する</li><li>MFA Deleteと併用するとさらに保護が強化される</li></ul>"
  },
  {
    "number": 36,
    "id": "Q036",
    "questionHtml": "開発チームでは、Amazon EC2インスタンスへログインするための秘密鍵を安全に管理したいと考えています。<br>最も適切な方法はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAMポリシーへ記載する"
      },
      {
        "correct": true,
        "html": "AWS Secrets Managerで管理する"
      },
      {
        "correct": false,
        "html": "Amazon GuardDutyで保護する"
      },
      {
        "correct": false,
        "html": "AWS WAFへ登録する"
      }
    ],
    "explanationHtml": "<p>この問題では、EC2インスタンスへログインするための秘密鍵などの機密情報を安全に管理する方法を理解しているかが問われています。</p><p>AWS Secrets Managerは、秘密鍵やパスワード、APIキーなどの機密情報を暗号化して安全に保管し、必要時に取得できるサービスです。IAMポリシーへ直接記載したり、ソースコードへ埋め込んだりするのは危険です。</p>",
    "correctHtml": "<p><strong>B. AWS Secrets Managerで管理する</strong></p><p>秘密鍵などの機密情報を暗号化して安全に保管・取得できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAMポリシーへ記載する</strong></p><p>IAMポリシーは権限定義のためのものであり、秘密鍵などの機密情報を記載する場所ではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon GuardDutyで保護する</strong></p><p>脅威を検知するサービスであり、秘密鍵を保管する機能はありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS WAFへ登録する</strong></p><p>Webアプリケーション攻撃を防御するサービスであり、秘密鍵の管理には使用しません。</p></div>",
    "pointsHtml": "<ul><li>Secrets Manager＝機密情報（鍵・パスワード等）の安全な保管</li><li>ソースコードやポリシーへの直接記載は禁止</li><li>自動ローテーションにも対応</li></ul>"
  },
  {
    "number": 37,
    "id": "Q037",
    "questionHtml": "社内監査で、「Rootユーザーが最後に利用された日時」を確認したいという要件があります。<br>このような監査証跡を確認する際に最も役立つサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": true,
        "html": "AWS CloudTrail"
      },
      {
        "correct": false,
        "html": "Amazon Inspector"
      },
      {
        "correct": false,
        "html": "AWS IAM Identity Center"
      }
    ],
    "explanationHtml": "<p>この問題では、「Rootユーザーが最後に利用された日時」などの監査証跡を確認するサービスを理解しているかが問われています。</p><p>AWS CloudTrailは、Rootユーザーを含むすべての操作のAPI履歴を記録します。誰がいつ操作を行ったかを追跡できるため、Rootユーザーの利用状況の監査に役立ちます。</p>",
    "correctHtml": "<p><strong>B. AWS CloudTrail</strong></p><p>Rootユーザーの操作を含むAPI実行履歴を記録し、利用状況の監査に役立ちます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Config</strong></p><p>リソース設定の変更履歴を記録するサービスであり、Rootユーザーの操作履歴の監査を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Inspector</strong></p><p>脆弱性診断サービスであり、操作履歴の監査は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS IAM Identity Center</strong></p><p>シングルサインオンを提供するサービスであり、Rootユーザーの利用履歴監査を行うものではありません。</p></div>",
    "pointsHtml": "<ul><li>CloudTrail＝操作の監査証跡（Rootユーザー含む）</li><li>「誰が・いつ・何をしたか」を記録</li><li>監査要件にはCloudTrailを選ぶ</li></ul>"
  },
  {
    "number": 38,
    "id": "Q038",
    "questionHtml": "AWSアカウントでMFAが有効になっていないIAMユーザーを特定したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": false,
        "html": "AWS WAF"
      },
      {
        "correct": false,
        "html": "Amazon Inspector"
      },
      {
        "correct": true,
        "html": "AWS Trusted Advisor"
      }
    ],
    "explanationHtml": "<p>この問題では、MFAが有効になっていないIAMユーザーなどを特定するサービスを理解しているかが問われています。</p><p>AWS Trusted Advisorは、セキュリティチェック項目の一つとして、MFAが有効化されていないルートユーザーやIAMユーザーの検出など、ベストプラクティスからの逸脱を確認できます。</p>",
    "correctHtml": "<p><strong>D. AWS Trusted Advisor</strong></p><p>セキュリティチェックにより、MFA未設定などのベストプラクティス違反を特定できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、MFA未設定ユーザーの棚卸しを主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS WAF</strong></p><p>Webアプリケーション攻撃を防御するサービスであり、IAMユーザーの設定確認は行いません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Inspector</strong></p><p>脆弱性診断サービスであり、MFA設定状況の確認は行いません。</p></div>",
    "pointsHtml": "<ul><li>Trusted Advisor＝ベストプラクティスチェック</li><li>MFA未設定などのセキュリティ逸脱を検出</li><li>改善提案とセットで覚える</li></ul>"
  },
  {
    "number": 39,
    "id": "Q039",
    "questionHtml": "Webアプリケーションでは、利用者が入力したSQL文によってデータベースが不正操作される攻撃への対策を行いたいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Shield"
      },
      {
        "correct": true,
        "html": "AWS WAF"
      },
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": false,
        "html": "AWS Config"
      }
    ],
    "explanationHtml": "<p>この問題では、利用者が入力したSQL文によってデータベースが不正操作される攻撃（SQLインジェクション）への対策サービスを理解しているかが問われています。</p><p>AWS WAFは、SQLインジェクションやXSSなどのWebアプリケーション層の攻撃を検知・遮断できるサービスです。SQLインジェクション対策のマネージドルールも利用できます。</p>",
    "correctHtml": "<p><strong>B. AWS WAF</strong></p><p>SQLインジェクションなどのWebアプリケーション攻撃をルールに基づいて遮断できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Shield</strong></p><p>DDoS攻撃を防御するサービスであり、SQLインジェクション対策を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、リクエストをリアルタイムに遮断するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Config</strong></p><p>リソース設定の記録・評価サービスであり、Web攻撃の防御は行いません。</p></div>",
    "pointsHtml": "<ul><li>SQLインジェクション・XSS対策＝WAF</li><li>Shield（DDoS）との違いを整理</li><li>Q021と同じ論点（AWS WAF）</li></ul>"
  },
  {
    "number": 40,
    "id": "Q040",
    "questionHtml": "セキュリティ担当者は、「複数リージョンで発生している脅威検知結果」をまとめて確認したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Inspector"
      },
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": true,
        "html": "AWS Security Hub"
      },
      {
        "correct": false,
        "html": "AWS CloudTrail"
      }
    ],
    "explanationHtml": "<p>この問題では、複数リージョンで発生している脅威検知結果をまとめて確認するサービスを理解しているかが問われています。</p><p>AWS Security Hubは、複数リージョン・複数アカウント・複数サービスのセキュリティ検出結果を集約し、統合的に確認できるサービスです。GuardDutyなどの検知結果をまとめて把握できます。</p>",
    "correctHtml": "<p><strong>C. AWS Security Hub</strong></p><p>複数リージョン・複数サービスの脅威検知結果を集約して一元的に確認できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Inspector</strong></p><p>脆弱性診断サービスであり、複数サービスの検知結果を集約するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Config</strong></p><p>リソース設定の記録・評価サービスであり、脅威検知結果の集約を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS CloudTrail</strong></p><p>API操作履歴を記録するサービスであり、脅威検知結果を集約するものではありません。</p></div>",
    "pointsHtml": "<ul><li>Security Hub＝複数リージョン・サービスの検知結果を集約</li><li>GuardDutyなどの結果をまとめて確認</li><li>「まとめて確認」ならSecurity Hub</li></ul>"
  },
  {
    "number": 41,
    "id": "Q041",
    "questionHtml": "Amazon EC2インスタンスへ保存されているデータを暗号化したいと考えています。<br>暗号鍵を安全に管理するサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Secrets Manager"
      },
      {
        "correct": false,
        "html": "Amazon Cognito"
      },
      {
        "correct": true,
        "html": "AWS Key Management Service (AWS KMS)"
      },
      {
        "correct": false,
        "html": "AWS Certificate Manager"
      }
    ],
    "explanationHtml": "<p>この問題では、EC2に保存されているデータを暗号化する際に、暗号鍵を安全に管理するサービスを理解しているかが問われています。</p><p>AWS Key Management Service（AWS KMS）は、EBSボリュームなどEC2に紐づくデータの暗号化に使用する鍵を安全に作成・管理します。多くのAWSサービスと統合されています。</p>",
    "correctHtml": "<p><strong>C. AWS Key Management Service (AWS KMS)</strong></p><p>EC2（EBS等）のデータ暗号化に使用する暗号鍵を安全に管理できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Secrets Manager</strong></p><p>パスワードやAPIキーなどのシークレットを管理するサービスであり、暗号鍵管理を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Cognito</strong></p><p>アプリのエンドユーザー向け認証サービスであり、暗号鍵管理とは無関係です。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Certificate Manager</strong></p><p>SSL/TLS証明書を管理するサービスであり、データ暗号化用の鍵管理とは異なります。</p></div>",
    "pointsHtml": "<ul><li>KMS＝暗号鍵の安全な管理</li><li>EBS・S3・RDSなどの暗号化と連携</li><li>Q025・Q032と同じ論点（KMS）</li></ul>"
  },
  {
    "number": 42,
    "id": "Q042",
    "questionHtml": "IAMポリシーを設計する際のベストプラクティスとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AdministratorAccessを基本とする"
      },
      {
        "correct": false,
        "html": "将来利用する可能性を考えて広い権限を付与する"
      },
      {
        "correct": true,
        "html": "必要最小限の権限のみ付与する"
      },
      {
        "correct": false,
        "html": "Rootユーザーだけ利用する"
      }
    ],
    "explanationHtml": "<p>この問題では、IAMポリシー設計のベストプラクティスを理解しているかが問われています。</p><p>IAMポリシーは、業務に必要な最小限の権限のみを付与する（最小権限の原則）ように設計するのがベストプラクティスです。将来使うかもしれないという理由で広い権限を与えるのは避けるべきです。</p>",
    "correctHtml": "<p><strong>C. 必要最小限の権限のみ付与する</strong></p><p>最小権限の原則に基づき、業務に必要な権限だけを付与するのが正しい設計です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AdministratorAccessを基本とする</strong></p><p>管理者権限を基本とするのは最小権限の原則に反し、リスクが高くなります。</p></div><div class=\"incorrect-item\"><p><strong>B. 将来利用する可能性を考えて広い権限を付与する</strong></p><p>不要な権限は攻撃対象を広げるため、先回りして広く付与すべきではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Rootユーザーだけ利用する</strong></p><p>Rootユーザーの日常利用は推奨されず、ポリシー設計の考え方としても不適切です。</p></div>",
    "pointsHtml": "<ul><li>IAMポリシーは最小権限の原則で設計</li><li>「将来のため」に広い権限を付与しない</li><li>CLFで繰り返し問われる基本概念</li></ul>"
  },
  {
    "number": 43,
    "id": "Q043",
    "questionHtml": "AWSの責任共有モデルにおいて、Amazon RDSデータベースへ接続できるユーザーの管理は誰の責任ですか。",
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
        "html": "AWSサポート"
      }
    ],
    "explanationHtml": "<p>この問題では、責任共有モデルにおいて、Amazon RDSデータベースへ接続できるユーザーの管理が誰の責任かを理解しているかが問われています。</p><p>RDSはマネージドサービスですが、データベースへ接続するユーザーやアクセス権限の管理（データベースアカウントやIAM認証の設定など）は利用者の責任範囲です。AWSは基盤やハードウェア、OSパッチなどを担当します。</p>",
    "correctHtml": "<p><strong>B. 利用者</strong></p><p>データベースへ接続できるユーザーの管理はアクセス制御に該当し、利用者の責任です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS</strong></p><p>AWSは基盤やハードウェア、マネージド部分のOS/DBエンジンの保守を担いますが、接続ユーザーの管理は行いません。</p></div><div class=\"incorrect-item\"><p><strong>C. データセンター運営会社</strong></p><p>責任共有モデルの当事者ではありません（物理設備はAWSが担当）。</p></div><div class=\"incorrect-item\"><p><strong>D. AWSサポート</strong></p><p>技術サポートの窓口であり、利用者のアクセス管理を代行する責任は負いません。</p></div>",
    "pointsHtml": "<ul><li>マネージドサービスでもアクセス管理は利用者責任</li><li>RDSの接続ユーザー・権限管理は利用者</li><li>基盤・ハードウェア・OSパッチはAWS</li></ul>"
  },
  {
    "number": 44,
    "id": "Q044",
    "questionHtml": "ある企業では、社内システムからAWS APIを利用しています。<br>Access Keyをソースコードへ直接記載することは推奨されません。<br>最も適切な理由はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "API速度が低下するため"
      },
      {
        "correct": false,
        "html": "AWS料金が増加するため"
      },
      {
        "correct": true,
        "html": "認証情報が漏えいするリスクが高まるため"
      },
      {
        "correct": false,
        "html": "IAMユーザーが削除されるため"
      }
    ],
    "explanationHtml": "<p>この問題では、Access Keyをソースコードへ直接記載してはいけない理由を理解しているかが問われています。</p><p>アクセスキーをソースコードへ直接書き込むと、リポジトリの共有や公開時に第三者へ認証情報が漏えいし、AWSリソースを不正利用される危険が高まります。そのためIAMロールやSecrets Managerの利用が推奨されます。</p>",
    "correctHtml": "<p><strong>C. 認証情報が漏えいするリスクが高まるため</strong></p><p>ソースコードへの直接記載は認証情報漏えいの重大なリスクを生むため推奨されません。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. API速度が低下するため</strong></p><p>記載方法とAPIの速度には関係がありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS料金が増加するため</strong></p><p>記載方法が直接料金を増やすわけではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. IAMユーザーが削除されるため</strong></p><p>ソースコードへの記載によってIAMユーザーが削除されることはありません。</p></div>",
    "pointsHtml": "<ul><li>アクセスキーはソースコードへ埋め込まない</li><li>IAMロールや一時認証情報を利用する</li><li>漏えい時のリスクが最大の理由</li></ul>"
  },
  {
    "number": 45,
    "id": "Q045",
    "questionHtml": "IAMロールを利用する主なメリットとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Rootユーザーを削除できる"
      },
      {
        "correct": false,
        "html": "IAMユーザーが不要になる"
      },
      {
        "correct": false,
        "html": "CloudTrailが不要になる"
      },
      {
        "correct": true,
        "html": "長期的な認証情報を保持せず安全に権限を付与できる"
      }
    ],
    "explanationHtml": "<p>この問題では、IAMロールを利用する主なメリットを理解しているかが問われています。</p><p>IAMロールは、長期的なアクセスキーを保持せず、必要なときに一時的な認証情報を発行して権限を付与する仕組みです。EC2やLambdaなどのサービスに安全に権限を与えられ、キーの管理・漏えいリスクを低減できます。</p>",
    "correctHtml": "<p><strong>D. 長期的な認証情報を保持せず安全に権限を付与できる</strong></p><p>一時的な認証情報を利用するため、長期キーの保管・漏えいリスクを避けられます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Rootユーザーを削除できる</strong></p><p>Rootユーザーは削除できず、IAMロールの利用と関係ありません。</p></div><div class=\"incorrect-item\"><p><strong>B. IAMユーザーが不要になる</strong></p><p>IAMロールを使ってもIAMユーザーが不要になるわけではなく、用途が異なります。</p></div><div class=\"incorrect-item\"><p><strong>C. CloudTrailが不要になる</strong></p><p>IAMロールを使っても監査のためのCloudTrailは引き続き重要であり、不要にはなりません。</p></div>",
    "pointsHtml": "<ul><li>IAMロール＝一時的な認証情報による安全な権限付与</li><li>長期アクセスキーの保持を避けられる</li><li>EC2→S3などサービス間アクセスで活用</li></ul>"
  },
  {
    "number": 46,
    "id": "Q046",
    "questionHtml": "AWS CloudTrailのログを改ざんされにくい状態で長期間保管したいと考えています。<br>最も適切な保存先はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon EC2"
      },
      {
        "correct": false,
        "html": "Amazon EBS"
      },
      {
        "correct": true,
        "html": "Amazon S3"
      },
      {
        "correct": false,
        "html": "Amazon DynamoDB"
      }
    ],
    "explanationHtml": "<p>この問題では、CloudTrailのログを改ざんされにくい状態で長期保管する保存先を理解しているかが問われています。</p><p>CloudTrailのログはAmazon S3へ保存するのが基本です。S3はバージョニング、オブジェクトロック、ログファイル検証、バケットポリシーなどにより、長期保管と改ざん防止に適しています。</p>",
    "correctHtml": "<p><strong>C. Amazon S3</strong></p><p>CloudTrailログの長期保管と改ざん防止に適した標準的な保存先です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon EC2</strong></p><p>コンピューティングサービスであり、ログの長期保管・保全に適した保存先ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon EBS</strong></p><p>EC2にアタッチするブロックストレージであり、監査ログの長期保管の標準的な保存先ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon DynamoDB</strong></p><p>NoSQLデータベースであり、CloudTrailログの標準的な保存先ではありません。</p></div>",
    "pointsHtml": "<ul><li>CloudTrailログの保存先＝Amazon S3</li><li>オブジェクトロック/バージョニングで改ざん対策</li><li>長期・低コストの保管に適する</li></ul>"
  },
  {
    "number": 47,
    "id": "Q047",
    "questionHtml": "AWSアカウントの利用状況を監査したところ、AdministratorAccessを持つIAMユーザーが多数存在していました。<br>最も適切な改善策はどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Rootユーザーへ統合する"
      },
      {
        "correct": false,
        "html": "IAMユーザーを削除する"
      },
      {
        "correct": true,
        "html": "最小権限の原則に基づき権限を見直す"
      },
      {
        "correct": false,
        "html": "CloudTrailを無効化する"
      }
    ],
    "explanationHtml": "<p>この問題では、AdministratorAccessを持つIAMユーザーが多数存在する状況への改善策を理解しているかが問われています。</p><p>管理者権限を持つユーザーが多いと、漏えいや誤操作時の影響が大きくなります。最小権限の原則に基づき、各ユーザーの業務に必要な権限へ見直すのが適切です。</p>",
    "correctHtml": "<p><strong>C. 最小権限の原則に基づき権限を見直す</strong></p><p>各ユーザーの業務に必要な権限だけを付与するよう見直すことで、リスクを低減できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Rootユーザーへ統合する</strong></p><p>Rootユーザーの利用集中はリスクが高く、推奨されません。</p></div><div class=\"incorrect-item\"><p><strong>B. IAMユーザーを削除する</strong></p><p>業務に必要なユーザーまで削除するのは適切ではなく、根本的な改善策ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. CloudTrailを無効化する</strong></p><p>監査証跡を失うことになり、セキュリティを低下させる誤った対応です。</p></div>",
    "pointsHtml": "<ul><li>過剰な管理者権限は最小権限の原則で見直す</li><li>業務に必要な権限だけへ絞る</li><li>CloudTrailは無効化せず監査を継続</li></ul>"
  },
  {
    "number": 48,
    "id": "Q048",
    "questionHtml": "顧客向けWebサイトでは、利用者がGoogleアカウントなどでログインできるようにしたいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "IAM"
      },
      {
        "correct": false,
        "html": "IAM Identity Center"
      },
      {
        "correct": true,
        "html": "Amazon Cognito"
      },
      {
        "correct": false,
        "html": "AWS Organizations"
      }
    ],
    "explanationHtml": "<p>この問題では、顧客（エンドユーザー）がGoogleアカウントなどでログインできるようにするサービスを理解しているかが問われています。</p><p>Amazon Cognitoは、アプリのユーザー認証を提供し、GoogleやAppleなどの外部IDプロバイダーとのフェデレーション（ソーシャルログイン）にも対応しています。</p>",
    "correctHtml": "<p><strong>C. Amazon Cognito</strong></p><p>外部IDプロバイダー連携により、GoogleアカウントなどでのログインをWebサイトに実装できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. IAM</strong></p><p>AWSリソース利用者向けの認証・認可サービスであり、アプリのエンドユーザー認証には適しません。</p></div><div class=\"incorrect-item\"><p><strong>B. IAM Identity Center</strong></p><p>社員向けのシングルサインオンサービスであり、顧客向けのソーシャルログイン実装を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Organizations</strong></p><p>複数アカウントを管理するサービスであり、ユーザー認証機能はありません。</p></div>",
    "pointsHtml": "<ul><li>Cognito＝エンドユーザー認証＋外部IdP連携</li><li>Google/Appleなどのソーシャルログインに対応</li><li>Q007と同じ論点（Amazon Cognito）</li></ul>"
  },
  {
    "number": 49,
    "id": "Q049",
    "questionHtml": "AWSアカウント内で実施された設定変更を継続的に記録し、設定がベストプラクティスから逸脱した場合に検知したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS CloudTrail"
      },
      {
        "correct": true,
        "html": "AWS Config"
      },
      {
        "correct": false,
        "html": "Amazon GuardDuty"
      },
      {
        "correct": false,
        "html": "AWS Shield"
      }
    ],
    "explanationHtml": "<p>この問題では、設定変更を継続的に記録し、ベストプラクティスから逸脱した場合に検知するサービスを理解しているかが問われています。</p><p>AWS Configは、リソースの設定変更を継続的に記録し、Configルールによって設定が要件（ベストプラクティス）に準拠しているかを評価し、逸脱を検知します。</p>",
    "correctHtml": "<p><strong>B. AWS Config</strong></p><p>設定変更を継続的に記録し、ルールに基づいて逸脱を検知できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS CloudTrail</strong></p><p>API操作履歴を記録するサービスであり、設定の準拠状況評価を主目的とはしていません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon GuardDuty</strong></p><p>脅威を検知するサービスであり、設定の準拠評価は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Shield</strong></p><p>DDoS攻撃を防御するサービスであり、設定変更の記録・評価は行いません。</p></div>",
    "pointsHtml": "<ul><li>Config＝設定変更の記録＋準拠状況の評価・逸脱検知</li><li>CloudTrail（操作履歴）との違いに注意</li><li>Q019・Q031と同じ論点（AWS Config）</li></ul>"
  },
  {
    "number": 50,
    "id": "Q050",
    "questionHtml": "企業ではAWS環境全体のセキュリティレベルを継続的に向上させたいと考えています。<br>最も重要な考え方として適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AdministratorAccessを標準とする"
      },
      {
        "correct": false,
        "html": "Rootユーザーのみ利用する"
      },
      {
        "correct": false,
        "html": "IAMユーザーへ同一権限を付与する"
      },
      {
        "correct": true,
        "html": "多層防御と最小権限の原則を継続的に実践する"
      }
    ],
    "explanationHtml": "<p>この問題は「セキュリティ」章全体の総まとめで、AWS環境のセキュリティレベルを継続的に向上させるための最も重要な考え方を問うています。</p><p>AWSセキュリティの基本は、単一の対策に依存せず、IAM・MFA・暗号化・監視・脅威検知などを組み合わせる「多層防御（Defense in Depth）」と、必要最小限の権限だけを付与する「最小権限の原則」を継続的に実践することです。</p>",
    "correctHtml": "<p><strong>D. 多層防御と最小権限の原則を継続的に実践する</strong></p><p>複数の防御を組み合わせ、最小権限を継続的に維持することがAWSセキュリティの基本思想です。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AdministratorAccessを標準とする</strong></p><p>管理者権限の標準付与は最小権限の原則に反し、リスクを高めます。</p></div><div class=\"incorrect-item\"><p><strong>B. Rootユーザーのみ利用する</strong></p><p>Rootユーザーの日常利用は推奨されず、セキュリティ上不適切です。</p></div><div class=\"incorrect-item\"><p><strong>C. IAMユーザーへ同一権限を付与する</strong></p><p>業務に応じた権限分離を行わず、最小権限の原則に反します。</p></div>",
    "pointsHtml": "<ul><li>多層防御（Defense in Depth）＝複数対策の組み合わせ</li><li>最小権限の原則を継続的に維持する</li><li>セキュリティは一度きりでなく継続的改善が重要</li></ul>"
  }
];
