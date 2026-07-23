// 自動生成ファイル: publish/_build/parse.js により生成
const QUESTIONS = [
  {
    "number": 1,
    "id": "Q001",
    "questionHtml": "ある企業では、画像ファイルを大量に保存するWebサービスを構築しています。<br>保存するデータは容量が増減し、耐久性が高く、インターネット経由でアクセスできることが求められます。<br>この要件を最も満たすサービスはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "Amazon S3"
      },
      {
        "correct": false,
        "html": "Amazon EBS"
      },
      {
        "correct": false,
        "html": "Amazon EFS"
      },
      {
        "correct": false,
        "html": "Amazon FSx for Windows File Server"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSのオブジェクトストレージサービスであるAmazon S3について理解しているかが問われています。</p><p>Amazon S3（Simple Storage Service）は、画像・動画・バックアップ・ログなどを保存するオブジェクトストレージです。容量を事前に確保する必要がなく、保存するデータ量に応じて自動的に拡張されます。11桁の耐久性（99.999999999%）を持ち、HTTP/HTTPSを通じてインターネット経由でアクセスできるため、Webサービスの画像保管に最適です。</p>",
    "correctHtml": "<p><strong>A. Amazon S3</strong></p><p>容量が自動的に増減し、高い耐久性を備え、インターネット経由でアクセスできるという要件をすべて満たします。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. Amazon EBS</strong></p><p>EC2インスタンスへアタッチして使うブロックストレージであり、単体でインターネット経由アクセスはできません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon EFS</strong></p><p>Linux向けの共有ファイルストレージであり、大量の画像保管とインターネット公開という用途には最適ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon FSx for Windows File Server</strong></p><p>Windows向けのマネージドファイルシステムであり、本要件には適していません。</p></div>",
    "pointsHtml": "<ul><li>S3はオブジェクトストレージで容量無制限・高耐久</li><li>「インターネット経由」「大量ファイル」「容量が増減」というキーワードはS3</li><li>ストレージ3種の違い：S3（オブジェクト）／EBS（ブロック）／EFS・FSx（ファイル）</li></ul>"
  },
  {
    "number": 2,
    "id": "Q002",
    "questionHtml": "Amazon EC2インスタンスのOSをインストールするための永続ストレージが必要です。<br>EC2インスタンスに直接アタッチして利用するサービスとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon S3"
      },
      {
        "correct": true,
        "html": "Amazon EBS"
      },
      {
        "correct": false,
        "html": "Amazon EFS"
      },
      {
        "correct": false,
        "html": "Amazon Glacier"
      }
    ],
    "explanationHtml": "<p>この問題では、EC2インスタンスへ直接アタッチして利用するブロックストレージであるAmazon EBSについて理解しているかが問われています。</p><p>Amazon EBS（Elastic Block Store）は、EC2インスタンスにアタッチして使う永続的なブロックストレージです。OSやアプリケーション、データベースのファイルを保存でき、インスタンスを停止してもデータは保持されます。EC2のルートボリューム（OS領域）としても利用されます。</p>",
    "correctHtml": "<p><strong>B. Amazon EBS</strong></p><p>EC2インスタンスへ直接アタッチできる永続ブロックストレージであり、OSインストール領域として利用できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon S3</strong></p><p>オブジェクトストレージであり、EC2のOS領域として直接アタッチする用途には使えません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon EFS</strong></p><p>複数EC2から共有するファイルストレージであり、OSブートボリュームには使えません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Glacier</strong></p><p>長期アーカイブ用の低コストストレージであり、EC2へアタッチするものではありません。</p></div>",
    "pointsHtml": "<ul><li>EBSはEC2専用のブロックストレージで、OS・DB領域に利用</li><li>永続性があり、インスタンス停止後もデータを保持</li><li>EBS＝1インスタンスにアタッチ、EFS＝複数インスタンスで共有</li></ul>"
  },
  {
    "number": 3,
    "id": "Q003",
    "questionHtml": "Linuxベースの複数のAmazon EC2インスタンスから同時にアクセスできる共有ファイルストレージが必要です。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon S3"
      },
      {
        "correct": false,
        "html": "Amazon EBS"
      },
      {
        "correct": true,
        "html": "Amazon EFS"
      },
      {
        "correct": false,
        "html": "Amazon FSx for Lustre"
      }
    ],
    "explanationHtml": "<p>この問題では、複数のLinuxベースEC2インスタンスから同時にアクセスできる共有ファイルストレージであるAmazon EFSについて理解しているかが問われています。</p><p>Amazon EFS（Elastic File System）は、NFSプロトコルに対応したマネージドの共有ファイルストレージです。複数のEC2インスタンスから同時にマウントでき、容量も自動的に拡張されます。Webサーバーを複数台構成にして共通ファイルを扱う場合などに利用されます。</p>",
    "correctHtml": "<p><strong>C. Amazon EFS</strong></p><p>複数のLinux EC2インスタンスから同時にマウントできる共有ファイルストレージです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon S3</strong></p><p>オブジェクトストレージであり、ファイルシステムとしてマウントする一般的な用途ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon EBS</strong></p><p>原則として1つのインスタンスにアタッチするブロックストレージであり、複数台からの同時共有には向きません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon FSx for Lustre</strong></p><p>高性能computing（HPC）や機械学習向けの高速ファイルシステムであり、一般的なLinux共有ファイルストレージにはEFSが適切です。</p></div>",
    "pointsHtml": "<ul><li>EFSはLinux向けの共有ファイルストレージ（NFS）</li><li>複数EC2から同時アクセス可能・容量自動拡張</li><li>FSx for Lustreはハイパフォーマンス用途に特化</li></ul>"
  },
  {
    "number": 4,
    "id": "Q004",
    "questionHtml": "ある企業では、リレーショナルデータベースを利用した受注管理システムをAWSへ移行したいと考えています。<br>SQLによる検索やトランザクション処理を継続して利用したい場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon DynamoDB"
      },
      {
        "correct": true,
        "html": "Amazon RDS"
      },
      {
        "correct": false,
        "html": "Amazon ElastiCache"
      },
      {
        "correct": false,
        "html": "Amazon Redshift"
      }
    ],
    "explanationHtml": "<p>この問題では、マネージドのリレーショナルデータベースサービスであるAmazon RDSについて理解しているかが問われています。</p><p>Amazon RDSは、MySQL、PostgreSQL、MariaDB、Oracle、SQL Serverなどのリレーショナルデータベースをマネージドで提供します。SQLによる検索やトランザクション処理（ACID）に対応しており、受注管理のような業務システムをそのままAWSへ移行するのに適しています。バックアップやパッチ適用などの運用作業はAWSが代行します。</p>",
    "correctHtml": "<p><strong>B. Amazon RDS</strong></p><p>SQLとトランザクション処理を継続利用でき、既存のリレーショナルDBシステムをそのまま移行できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon DynamoDB</strong></p><p>NoSQLデータベースであり、SQLやリレーショナルなトランザクション処理には対応していません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon ElastiCache</strong></p><p>インメモリキャッシュサービスであり、永続的な業務データベースとしては利用しません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Redshift</strong></p><p>分析用のデータウェアハウスであり、日常的な受注トランザクション処理には向きません。</p></div>",
    "pointsHtml": "<ul><li>RDSはマネージドなリレーショナルDB（SQL・トランザクション）</li><li>「SQL」「受注管理」「既存RDB移行」というキーワードはRDS</li><li>RDS（SQL）とDynamoDB（NoSQL）の違いは頻出</li></ul>"
  },
  {
    "number": 5,
    "id": "Q005",
    "questionHtml": "IoTデバイスから毎秒数百万件のセンサーデータを受信しています。<br>スキーマが柔軟で、大量データを高速に処理できるデータベースとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon RDS"
      },
      {
        "correct": true,
        "html": "Amazon DynamoDB"
      },
      {
        "correct": false,
        "html": "Amazon Aurora"
      },
      {
        "correct": false,
        "html": "Amazon Neptune"
      }
    ],
    "explanationHtml": "<p>この問題では、フルマネージドのNoSQLデータベースであるAmazon DynamoDBについて理解しているかが問われています。</p><p>Amazon DynamoDBは、キーバリュー型およびドキュメント型のNoSQLデータベースです。スキーマが柔軟で、毎秒数百万件規模の書き込み・読み取りにも自動でスケールし、一桁ミリ秒の低レイテンシーを実現します。IoTデータやセンサーデータなど、大量かつ高スループットが求められるワークロードに最適です。</p>",
    "correctHtml": "<p><strong>B. Amazon DynamoDB</strong></p><p>スキーマが柔軟で、大量データを高速・低遅延で処理でき、自動スケーリングにも対応しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon RDS</strong></p><p>スキーマ固定のリレーショナルDBであり、毎秒数百万件規模の書き込みには不向きです。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Aurora</strong></p><p>高性能なリレーショナルDBですが、スキーマが柔軟なNoSQL用途ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Neptune</strong></p><p>グラフデータベースであり、関係性を扱う用途に特化しています。</p></div>",
    "pointsHtml": "<ul><li>DynamoDBはフルマネージドNoSQL（キーバリュー／ドキュメント）</li><li>「スキーマ柔軟」「大量」「高速」「IoT」はDynamoDB</li><li>NeptuneはグラフDBという特殊用途も押さえておく</li></ul>"
  },
  {
    "number": 6,
    "id": "Q006",
    "questionHtml": "開発チームでは、サーバーを管理することなく、イベント発生時だけプログラムを実行したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon EC2"
      },
      {
        "correct": false,
        "html": "Amazon ECS"
      },
      {
        "correct": true,
        "html": "AWS Lambda"
      },
      {
        "correct": false,
        "html": "AWS Elastic Beanstalk"
      }
    ],
    "explanationHtml": "<p>この問題では、サーバーレスコンピューティングサービスであるAWS Lambdaについて理解しているかが問われています。</p><p>AWS Lambdaは、サーバーを管理することなくコードを実行できるサービスです。イベント（S3へのアップロード、APIリクエスト、スケジュールなど）をトリガーに関数が実行され、実行時間とリクエスト回数に応じて課金されます。サーバーの構築・運用が不要で、イベント駆動型の処理に最適です。</p>",
    "correctHtml": "<p><strong>C. AWS Lambda</strong></p><p>サーバー管理不要で、イベント発生時だけコードを実行できるサーバーレスサービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon EC2</strong></p><p>仮想サーバーサービスであり、サーバーの管理が必要です。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon ECS</strong></p><p>コンテナを実行・管理するサービスであり、コンテナ環境の管理が必要です。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Elastic Beanstalk</strong></p><p>アプリケーションのデプロイを自動化するサービスであり、背後ではEC2などのサーバーが動作します。</p></div>",
    "pointsHtml": "<ul><li>Lambdaはサーバーレス（サーバー管理不要・イベント駆動）</li><li>実行時間とリクエスト回数に応じた課金</li><li>「サーバー管理なし」「イベント発生時だけ」はLambda</li></ul>"
  },
  {
    "number": 7,
    "id": "Q007",
    "questionHtml": "独自OSやミドルウェアを自由に構成できる仮想サーバーが必要です。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": true,
        "html": "Amazon EC2"
      },
      {
        "correct": false,
        "html": "AWS Lambda"
      },
      {
        "correct": false,
        "html": "Amazon Lightsail"
      },
      {
        "correct": false,
        "html": "AWS App Runner"
      }
    ],
    "explanationHtml": "<p>この問題では、仮想サーバーサービスであるAmazon EC2について理解しているかが問われています。</p><p>Amazon EC2（Elastic Compute Cloud）は、AWS上で仮想サーバーを提供するIaaSサービスです。OSやミドルウェアを自由に選択・構成でき、CPUやメモリなどのスペックも要件に応じて選べます。root/管理者権限でログインし、独自のソフトウェアをインストールできる柔軟性が特徴です。</p>",
    "correctHtml": "<p><strong>A. Amazon EC2</strong></p><p>OSやミドルウェアを自由に構成できる仮想サーバーサービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>B. AWS Lambda</strong></p><p>サーバーレスサービスであり、OSやミドルウェアを自由に構成することはできません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Lightsail</strong></p><p>簡易的なVPS型サービスであり、EC2ほど細かな構成の自由度はありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS App Runner</strong></p><p>コンテナWebアプリをフルマネージドでデプロイするサービスでありOSの自由な構成はできません。</p></div>",
    "pointsHtml": "<ul><li>EC2はIaaSの代表で、OS・ミドルウェアを自由に構成可能</li><li>「独自OS」「自由に構成」「仮想サーバー」はEC2</li><li>LightsailはシンプルなVPS型で自由度は限定的</li></ul>"
  },
  {
    "number": 8,
    "id": "Q008",
    "questionHtml": "DockerコンテナをAWS上で実行したいと考えています。<br>Kubernetesを利用せず、AWSネイティブなコンテナオーケストレーションサービスを利用したい場合、最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon EKS"
      },
      {
        "correct": true,
        "html": "Amazon ECS"
      },
      {
        "correct": false,
        "html": "AWS Lambda"
      },
      {
        "correct": false,
        "html": "Amazon EC2 Auto Scaling"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSネイティブなコンテナオーケストレーションサービスであるAmazon ECSについて理解しているかが問われています。</p><p>Amazon ECS（Elastic Container Service）は、AWSが独自に開発したコンテナオーケストレーションサービスです。Kubernetesを使わずにDockerコンテナのデプロイ・スケーリング・管理を行えます。実行基盤としてEC2またはサーバーレスのAWS Fargateを選択できます。</p>",
    "correctHtml": "<p><strong>B. Amazon ECS</strong></p><p>Kubernetesを使わないAWSネイティブなコンテナオーケストレーションサービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon EKS</strong></p><p>Kubernetesをマネージドで提供するサービスであり、「Kubernetesを利用しない」という条件に反します。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Lambda</strong></p><p>サーバーレスの関数実行サービスであり、コンテナオーケストレーションサービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon EC2 Auto Scaling</strong></p><p>EC2インスタンスの台数を自動増減する機能であり、コンテナのオーケストレーションは行いません。</p></div>",
    "pointsHtml": "<ul><li>ECSはAWS独自のコンテナオーケストレーション（Kubernetes不要）</li><li>EKSはKubernetesベース</li><li>実行基盤はEC2またはFargate（サーバーレス）から選択</li></ul>"
  },
  {
    "number": 9,
    "id": "Q009",
    "questionHtml": "Kubernetes環境を利用してコンテナアプリケーションを実行したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon ECS"
      },
      {
        "correct": false,
        "html": "AWS Lambda"
      },
      {
        "correct": true,
        "html": "Amazon EKS"
      },
      {
        "correct": false,
        "html": "AWS Elastic Beanstalk"
      }
    ],
    "explanationHtml": "<p>この問題では、マネージドKubernetesサービスであるAmazon EKSについて理解しているかが問われています。</p><p>Amazon EKS（Elastic Kubernetes Service）は、Kubernetesをマネージドで提供するサービスです。標準的なKubernetes環境をそのまま利用しつつ、コントロールプレーンの運用管理はAWSが担うため、Kubernetesの運用負荷を軽減できます。</p>",
    "correctHtml": "<p><strong>C. Amazon EKS</strong></p><p>Kubernetes環境をマネージドで利用できるサービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon ECS</strong></p><p>AWS独自のコンテナオーケストレーションであり、Kubernetesではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Lambda</strong></p><p>サーバーレスの関数実行サービスであり、Kubernetes環境ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Elastic Beanstalk</strong></p><p>アプリケーションのデプロイを自動化するサービスであり、Kubernetesを提供するものではありません。</p></div>",
    "pointsHtml": "<ul><li>EKSはマネージドKubernetes</li><li>「Kubernetes」というキーワードが出たらEKS</li><li>ECS（AWS独自）とEKS（Kubernetes）の違いは頻出</li></ul>"
  },
  {
    "number": 10,
    "id": "Q010",
    "questionHtml": "静的Webサイトのコンテンツを世界中へ低遅延で配信したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Global Accelerator"
      },
      {
        "correct": false,
        "html": "Amazon Route 53"
      },
      {
        "correct": true,
        "html": "Amazon CloudFront"
      },
      {
        "correct": false,
        "html": "Elastic Load Balancing"
      }
    ],
    "explanationHtml": "<p>この問題では、コンテンツ配信ネットワーク（CDN）であるAmazon CloudFrontについて理解しているかが問われています。</p><p>Amazon CloudFrontは、世界中に配置されたエッジロケーションを利用して、静的コンテンツや動画などをユーザーの近くから配信するCDNサービスです。コンテンツをキャッシュすることで低遅延・高速な配信を実現し、オリジンサーバーの負荷も軽減します。</p>",
    "correctHtml": "<p><strong>C. Amazon CloudFront</strong></p><p>エッジロケーションを利用して静的Webサイトを世界中へ低遅延で配信できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Global Accelerator</strong></p><p>ネットワーク経路を最適化するサービスであり、コンテンツをキャッシュ配信するCDNではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Route 53</strong></p><p>DNSサービスであり、コンテンツ配信を行うものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Elastic Load Balancing</strong></p><p>リクエストを複数サーバーへ分散するロードバランサーであり、世界中への低遅延配信を目的としたサービスではありません。</p></div>",
    "pointsHtml": "<ul><li>CloudFrontはCDN（エッジロケーションでキャッシュ配信）</li><li>「世界中」「低遅延」「コンテンツ配信」「エッジ」はCloudFront</li><li>CloudFront（コンテンツ配信）とGlobal Accelerator（経路最適化）の違いに注意</li></ul>"
  },
  {
    "number": 11,
    "id": "Q011",
    "questionHtml": "DNSレベルでドメイン名をIPアドレスへ名前解決したい場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon CloudFront"
      },
      {
        "correct": true,
        "html": "Amazon Route 53"
      },
      {
        "correct": false,
        "html": "AWS Global Accelerator"
      },
      {
        "correct": false,
        "html": "Elastic Load Balancing"
      }
    ],
    "explanationHtml": "<p>この問題では、マネージドDNSサービスであるAmazon Route 53について理解しているかが問われています。</p><p>Amazon Route 53は、AWSが提供するDNS（Domain Name System）サービスです。ドメイン名をIPアドレスへ名前解決するほか、ドメインの登録、ヘルスチェック、各種ルーティングポリシー（レイテンシー・加重・フェイルオーバーなど）にも対応しています。</p>",
    "correctHtml": "<p><strong>B. Amazon Route 53</strong></p><p>ドメイン名をIPアドレスへ名前解決するAWSのマネージドDNSサービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon CloudFront</strong></p><p>CDNサービスであり、DNSの名前解決を主目的とするものではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Global Accelerator</strong></p><p>ネットワーク経路を最適化するサービスであり、DNSサービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Elastic Load Balancing</strong></p><p>リクエストを分散するロードバランサーであり、DNS名前解決サービスではありません。</p></div>",
    "pointsHtml": "<ul><li>Route 53はAWSのマネージドDNS</li><li>「DNS」「名前解決」「ドメイン」はRoute 53</li><li>ヘルスチェックやルーティングポリシーも提供</li></ul>"
  },
  {
    "number": 12,
    "id": "Q012",
    "questionHtml": "複数のAmazon EC2インスタンスへアクセスを分散し、高可用性を実現したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Route 53"
      },
      {
        "correct": false,
        "html": "Amazon CloudFront"
      },
      {
        "correct": true,
        "html": "Elastic Load Balancing"
      },
      {
        "correct": false,
        "html": "Amazon API Gateway"
      }
    ],
    "explanationHtml": "<p>この問題では、負荷分散サービスであるElastic Load Balancing（ELB）について理解しているかが問われています。</p><p>Elastic Load Balancingは、受け取ったリクエストを複数のEC2インスタンスなどへ自動的に分散するロードバランサーです。ヘルスチェックにより異常なインスタンスへはリクエストを送らず、正常なインスタンスへ振り分けることで高可用性を実現します。</p>",
    "correctHtml": "<p><strong>C. Elastic Load Balancing</strong></p><p>複数のEC2インスタンスへアクセスを分散し、高可用性を実現します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Route 53</strong></p><p>DNSサービスであり、直接リクエストを分散するロードバランサーではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon CloudFront</strong></p><p>CDNサービスであり、コンテンツ配信を主目的とします。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon API Gateway</strong></p><p>APIを公開・管理するサービスであり、EC2への一般的な負荷分散を担うものではありません。</p></div>",
    "pointsHtml": "<ul><li>ELBはリクエストを複数サーバーへ分散するロードバランサー</li><li>ヘルスチェックにより可用性を向上</li><li>ELB（分散）とAuto Scaling（台数増減）はセットで頻出</li></ul>"
  },
  {
    "number": 13,
    "id": "Q013",
    "questionHtml": "Webサーバーへのアクセス数に応じて、自動的にAmazon EC2インスタンスの台数を増減させたいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Elastic Load Balancing"
      },
      {
        "correct": false,
        "html": "Amazon CloudWatch"
      },
      {
        "correct": true,
        "html": "Amazon EC2 Auto Scaling"
      },
      {
        "correct": false,
        "html": "AWS Systems Manager"
      }
    ],
    "explanationHtml": "<p>この問題では、EC2インスタンスの台数を自動で増減させるAmazon EC2 Auto Scalingについて理解しているかが問われています。</p><p>Amazon EC2 Auto Scalingは、CPU使用率やリクエスト数などのメトリクスに応じて、EC2インスタンスを自動的に追加・削除するサービスです。アクセスが増えれば台数を増やし、減れば台数を減らすことで、可用性の向上とコストの最適化を両立します。</p>",
    "correctHtml": "<p><strong>C. Amazon EC2 Auto Scaling</strong></p><p>アクセス数に応じてEC2インスタンスの台数を自動的に増減できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Elastic Load Balancing</strong></p><p>リクエストを分散するサービスであり、EC2の台数を増減するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon CloudWatch</strong></p><p>メトリクスを監視するサービスであり、単体でインスタンス台数を増減するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Systems Manager</strong></p><p>サーバーの運用管理サービスであり、負荷に応じた自動スケーリングを行うものではありません。</p></div>",
    "pointsHtml": "<ul><li>Auto Scalingは負荷に応じてEC2台数を自動増減</li><li>「アクセス数に応じて台数を増減」はAuto Scaling</li><li>ELB（分散）とAuto Scaling（台数増減）の役割の違いに注意</li></ul>"
  },
  {
    "number": 14,
    "id": "Q014",
    "questionHtml": "アプリケーションのメトリクスやCPU使用率などを監視し、アラームを設定したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS CloudTrail"
      },
      {
        "correct": true,
        "html": "Amazon CloudWatch"
      },
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": false,
        "html": "Amazon Inspector"
      }
    ],
    "explanationHtml": "<p>この問題では、監視サービスであるAmazon CloudWatchについて理解しているかが問われています。</p><p>Amazon CloudWatchは、AWSリソースやアプリケーションのメトリクス（CPU使用率、ネットワーク量など）やログを収集・監視するサービスです。しきい値を超えた際にアラームを発報し、通知やAuto Scalingのトリガーとして利用できます。</p>",
    "correctHtml": "<p><strong>B. Amazon CloudWatch</strong></p><p>メトリクスやCPU使用率を監視し、アラームを設定できる監視サービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS CloudTrail</strong></p><p>APIコールの操作履歴を記録する監査サービスであり、メトリクス監視を主目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Config</strong></p><p>リソースの構成変更を記録・評価するサービスであり、メトリクス監視サービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Inspector</strong></p><p>EC2やコンテナの脆弱性を評価するセキュリティサービスであり、汎用的なメトリクス監視は行いません。</p></div>",
    "pointsHtml": "<ul><li>CloudWatchはメトリクス／ログの監視とアラーム</li><li>CloudWatch（監視）とCloudTrail（操作履歴）の違いは頻出</li><li>Config（構成変更の記録）とも区別する</li></ul>"
  },
  {
    "number": 15,
    "id": "Q015",
    "questionHtml": "Webアプリケーションの更新内容を世界中へ迅速に反映させたいと考えています。<br>エッジロケーションを利用してコンテンツを配信するサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Route 53"
      },
      {
        "correct": true,
        "html": "Amazon CloudFront"
      },
      {
        "correct": false,
        "html": "AWS Global Accelerator"
      },
      {
        "correct": false,
        "html": "Amazon S3 Glacier"
      }
    ],
    "explanationHtml": "<p>この問題では、エッジロケーションを利用してコンテンツを配信するAmazon CloudFrontについて理解しているかが問われています。</p><p>Amazon CloudFrontは、世界中のエッジロケーションからコンテンツを配信するCDNサービスです。キャッシュの無効化（invalidation）を行うことで、更新したコンテンツを世界中のユーザーへ迅速に反映できます。</p>",
    "correctHtml": "<p><strong>B. Amazon CloudFront</strong></p><p>エッジロケーションを利用してコンテンツを世界中へ配信するCDNサービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Route 53</strong></p><p>DNSサービスであり、コンテンツをエッジ配信するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Global Accelerator</strong></p><p>ネットワーク経路を最適化するサービスであり、コンテンツのキャッシュ配信を行うCDNではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon S3 Glacier</strong></p><p>長期アーカイブ用の低コストストレージであり、コンテンツ配信サービスではありません。</p></div>",
    "pointsHtml": "<ul><li>「エッジロケーション」「コンテンツ配信」はCloudFront</li><li>CloudFrontはCDNで世界中へ低遅延配信</li><li>Global Accelerator（経路最適化）と混同しない</li></ul>"
  },
  {
    "number": 16,
    "id": "Q016",
    "questionHtml": "Amazon EC2インスタンスへSSH接続するための秘密鍵を紛失しました。<br>今後、OSへログインせずにリモート管理を行えるようにしたい場合、最も適切なサービスはどれですか。",
    "choices": [
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
        "html": "AWS Systems Manager"
      },
      {
        "correct": false,
        "html": "Amazon Inspector"
      }
    ],
    "explanationHtml": "<p>この問題では、サーバーの運用管理サービスであるAWS Systems Managerについて理解しているかが問われています。</p><p>AWS Systems Managerは、EC2インスタンスやオンプレミスサーバーを一元的に運用管理するサービスです。Session Managerを使えばSSHの秘密鍵やポート開放なしにインスタンスへ安全に接続でき、Run Commandによるコマンド実行、パッチ管理、Parameter Storeによる設定値管理などが行えます。</p>",
    "correctHtml": "<p><strong>C. AWS Systems Manager</strong></p><p>Session Managerなどを利用し、OSへログインせずにリモート管理を行えます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS CloudTrail</strong></p><p>APIコールの操作履歴を記録する監査サービスであり、リモート管理は行いません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Config</strong></p><p>リソースの構成変更を記録・評価するサービスであり、リモート管理サービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Inspector</strong></p><p>脆弱性を評価するセキュリティサービスであり、リモート管理を行うものではありません。</p></div>",
    "pointsHtml": "<ul><li>Systems Managerはサーバーの一元的な運用管理サービス</li><li>Session Managerで鍵なし・ポート開放なしのリモート接続が可能</li><li>Run Command、パッチ管理、Parameter Storeなどの機能を提供</li></ul>"
  },
  {
    "number": 17,
    "id": "Q017",
    "questionHtml": "ある企業では、複数のAWSサービスを組み合わせたサーバーレスAPIを構築しています。<br>HTTPリクエストを受け付けてAWS Lambdaを呼び出すサービスとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Elastic Load Balancing"
      },
      {
        "correct": false,
        "html": "Amazon CloudFront"
      },
      {
        "correct": true,
        "html": "Amazon API Gateway"
      },
      {
        "correct": false,
        "html": "Amazon Route 53"
      }
    ],
    "explanationHtml": "<p>この問題では、APIの公開・管理を行うAmazon API Gatewayについて理解しているかが問われています。</p><p>Amazon API Gatewayは、REST APIやHTTP API、WebSocket APIを作成・公開・管理するマネージドサービスです。HTTPリクエストを受け付けてバックエンドのAWS Lambdaを呼び出すことができ、認証・認可、アクセス制御、スロットリングなどの機能を提供します。サーバーレスAPIの入り口として広く利用されます。</p>",
    "correctHtml": "<p><strong>C. Amazon API Gateway</strong></p><p>HTTPリクエストを受け付けてLambdaを呼び出せるAPI公開・管理サービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Elastic Load Balancing</strong></p><p>リクエストを複数サーバーへ分散するロードバランサーであり、APIの管理機能を主目的とするものではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon CloudFront</strong></p><p>CDNサービスであり、APIを公開・管理するサービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Route 53</strong></p><p>DNSサービスであり、APIリクエストを受け付けてLambdaを呼び出すサービスではありません。</p></div>",
    "pointsHtml": "<ul><li>API GatewayはAPIの公開・管理（認証・スロットリングなど）</li><li>LambdaとAPI Gatewayの組み合わせはサーバーレスの定番構成</li><li>「HTTPリクエストを受け付けてLambdaを呼ぶ」はAPI Gateway</li></ul>"
  },
  {
    "number": 18,
    "id": "Q018",
    "questionHtml": "ECサイトでは、注文が完了するたびに「在庫管理」「配送手配」「購入者へのメール送信」をそれぞれ独立したシステムで処理しています。<br>1つのイベントを複数のシステムへ同時に通知したい場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon SQS"
      },
      {
        "correct": true,
        "html": "Amazon SNS"
      },
      {
        "correct": false,
        "html": "Amazon EventBridge"
      },
      {
        "correct": false,
        "html": "AWS Step Functions"
      }
    ],
    "explanationHtml": "<p>この問題では、Pub/Sub型の通知サービスであるAmazon SNSについて理解しているかが問われています。</p><p>Amazon SNS（Simple Notification Service）は、1つのメッセージを複数の受信先（サブスクライバー）へ同時に配信するPublish/Subscribe（Pub/Sub）型のサービスです。1つのイベントを複数のシステムへ同時に通知するファンアウト構成に最適で、Lambda、SQS、メール、SMSなどへ配信できます。</p>",
    "correctHtml": "<p><strong>B. Amazon SNS</strong></p><p>1つのイベントを複数のシステムへ同時に通知できるPub/Sub型サービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon SQS</strong></p><p>メッセージを一時的に蓄積して順番に処理するキューサービスであり、複数へ同時通知するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon EventBridge</strong></p><p>イベントをルールに従って振り分けるサービスであり、単純な複数同時通知にはSNSが適切です。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Step Functions</strong></p><p>複数の処理を順序立てて実行するワークフローサービスであり、同時通知を主目的とはしません。</p></div>",
    "pointsHtml": "<ul><li>SNSはPub/Sub型で1つのメッセージを複数へ同時配信（ファンアウト）</li><li>SNS（配る）とSQS（ためる）の違いは頻出</li><li>「複数システムへ同時通知」はSNS</li></ul>"
  },
  {
    "number": 19,
    "id": "Q019",
    "questionHtml": "バッチ処理を実行するシステムでは、処理要求を一時的に蓄積し、順番に処理したいと考えています。<br>システム同士を疎結合にするため、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon SNS"
      },
      {
        "correct": true,
        "html": "Amazon SQS"
      },
      {
        "correct": false,
        "html": "Amazon MQ"
      },
      {
        "correct": false,
        "html": "Amazon EventBridge"
      }
    ],
    "explanationHtml": "<p>この問題では、メッセージキューサービスであるAmazon SQSについて理解しているかが問われています。</p><p>Amazon SQS（Simple Queue Service）は、システム間のメッセージを一時的に蓄積するキューサービスです。送信側と受信側が同時に稼働していなくてもメッセージを保持でき、順番に処理できます。システム同士を疎結合にし、負荷の平準化や障害への耐性を高めます。</p>",
    "correctHtml": "<p><strong>B. Amazon SQS</strong></p><p>処理要求を一時的に蓄積して順番に処理でき、システム同士を疎結合にできます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon SNS</strong></p><p>複数へ同時配信する通知サービスであり、メッセージを蓄積して順番に処理するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon MQ</strong></p><p>Apache ActiveMQやRabbitMQ互換のマネージドメッセージブローカーであり、既存の標準プロトコル移行向けです。疎結合化のための一時蓄積用途にはSQSが標準的な選択です。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon EventBridge</strong></p><p>イベントをルールに従って振り分けるサービスであり、キューとして一時蓄積・順次処理する用途とは異なります。</p></div>",
    "pointsHtml": "<ul><li>SQSはメッセージを一時蓄積して順番に処理するキュー</li><li>「蓄積」「順番に処理」「疎結合」はSQS</li><li>SQS（ためる）とSNS（配る）の対比を押さえる</li></ul>"
  },
  {
    "number": 20,
    "id": "Q020",
    "questionHtml": "既存のMySQLデータベースをAWSへ移行したいと考えています。<br>MySQLとの互換性を維持しつつ、高可用性と高性能を実現したい場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon DynamoDB"
      },
      {
        "correct": false,
        "html": "Amazon Redshift"
      },
      {
        "correct": true,
        "html": "Amazon Aurora (MySQL互換)"
      },
      {
        "correct": false,
        "html": "Amazon ElastiCache"
      }
    ],
    "explanationHtml": "<p>この問題では、AWSが開発したクラウドネイティブなリレーショナルデータベースであるAmazon Auroraについて理解しているかが問われています。</p><p>Amazon Auroraは、MySQLおよびPostgreSQLと互換性を持つRDSファミリーのデータベースです。標準的なMySQLと比べて高い性能を発揮し、データを複数のアベイラビリティーゾーンに自動複製することで高可用性を実現します。既存のMySQLデータベースを互換性を保ちながら移行するのに適しています。</p>",
    "correctHtml": "<p><strong>C. Amazon Aurora (MySQL互換)</strong></p><p>MySQL互換性を保ちながら、高性能・高可用性を実現できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon DynamoDB</strong></p><p>NoSQLデータベースであり、MySQLとの互換性はありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Redshift</strong></p><p>分析用のデータウェアハウスであり、MySQLの移行先には適しません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon ElastiCache</strong></p><p>インメモリキャッシュサービスであり、永続的なリレーショナルDBではありません。</p></div>",
    "pointsHtml": "<ul><li>AuroraはMySQL／PostgreSQL互換の高性能・高可用RDB</li><li>RDSファミリーの一員で、標準MySQLより高性能</li><li>「MySQL互換」「高可用性・高性能」はAurora</li></ul>"
  },
  {
    "number": 21,
    "id": "Q021",
    "questionHtml": "数年分の売上データを分析し、BIツールから高速に集計したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon RDS"
      },
      {
        "correct": false,
        "html": "Amazon DynamoDB"
      },
      {
        "correct": true,
        "html": "Amazon Redshift"
      },
      {
        "correct": false,
        "html": "Amazon Athena"
      }
    ],
    "explanationHtml": "<p>この問題では、データウェアハウスサービスであるAmazon Redshiftについて理解しているかが問われています。</p><p>Amazon Redshiftは、大量のデータを高速に集計・分析するために設計されたフルマネージドのデータウェアハウス（DWH）です。列指向ストレージと並列処理により、数年分の売上データのような大規模データの集計をBIツールから高速に実行できます。</p>",
    "correctHtml": "<p><strong>C. Amazon Redshift</strong></p><p>大量データの集計・分析に特化したデータウェアハウスで、BIツールから高速集計できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon RDS</strong></p><p>業務システム向けのリレーショナルDBであり、大規模データの分析・集計には最適化されていません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon DynamoDB</strong></p><p>NoSQLデータベースであり、大規模な集計分析用途には向きません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Athena</strong></p><p>S3上のデータをSQLで直接分析するサーバーレスサービスであり、専用のDWHとしてBIから高速集計する用途にはRedshiftが適します。</p></div>",
    "pointsHtml": "<ul><li>Redshiftはデータウェアハウス（DWH）で大規模データ分析に特化</li><li>「数年分」「分析」「BIツール」「集計」はRedshift</li><li>Athena（S3を直接SQL分析）との使い分けに注意</li></ul>"
  },
  {
    "number": 22,
    "id": "Q022",
    "questionHtml": "読み取り処理が非常に多いWebアプリケーションで、データベースへの負荷を軽減したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon RDS"
      },
      {
        "correct": false,
        "html": "Amazon S3"
      },
      {
        "correct": true,
        "html": "Amazon ElastiCache"
      },
      {
        "correct": false,
        "html": "Amazon Aurora"
      }
    ],
    "explanationHtml": "<p>この問題では、インメモリキャッシュサービスであるAmazon ElastiCacheについて理解しているかが問われています。</p><p>Amazon ElastiCacheは、RedisやMemcached互換のインメモリデータストアをマネージドで提供するサービスです。頻繁に参照されるデータをメモリ上にキャッシュすることで、データベースへの読み取り負荷を軽減し、アプリケーションの応答速度を向上させます。</p>",
    "correctHtml": "<p><strong>C. Amazon ElastiCache</strong></p><p>頻繁に読み取るデータをメモリにキャッシュし、データベースへの負荷を軽減できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon RDS</strong></p><p>リレーショナルDBそのものであり、負荷を軽減するキャッシュ層ではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon S3</strong></p><p>オブジェクトストレージであり、DBの読み取りキャッシュ用途には使いません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Aurora</strong></p><p>高性能なリレーショナルDBですが、DBへの読み取り負荷を軽減するキャッシュ層ではありません。</p></div>",
    "pointsHtml": "<ul><li>ElastiCacheはインメモリキャッシュ（Redis／Memcached）</li><li>「読み取りが多い」「DB負荷軽減」「高速応答」はElastiCache</li><li>キャッシュによりDBへのアクセス回数を削減</li></ul>"
  },
  {
    "number": 23,
    "id": "Q023",
    "questionHtml": "法令により、アクセス頻度が極めて低いデータを10年間保存する必要があります。<br>取り出しには数時間かかっても問題ありません。<br>最もコスト効率の高いストレージクラスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon S3 Standard"
      },
      {
        "correct": false,
        "html": "S3 Glacier Instant Retrieval"
      },
      {
        "correct": false,
        "html": "S3 Glacier Flexible Retrieval"
      },
      {
        "correct": true,
        "html": "S3 Glacier Deep Archive"
      }
    ],
    "explanationHtml": "<p>この問題では、最も低コストなアーカイブ用ストレージクラスであるS3 Glacier Deep Archiveについて理解しているかが問われています。</p><p>S3 Glacier Deep Archiveは、Amazon S3のストレージクラスの中で最も低コストなアーカイブ向けクラスです。取り出しには通常12時間程度かかりますが、法令に基づく長期保存など、アクセス頻度が極めて低いデータの保管に最適です。</p>",
    "correctHtml": "<p><strong>D. S3 Glacier Deep Archive</strong></p><p>取り出しに時間がかかっても問題ない、アクセス頻度が極めて低いデータを最も低コストで保存できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon S3 Standard</strong></p><p>頻繁にアクセスするデータ向けの標準クラスであり、長期アーカイブとしてはコストが高くなります。</p></div><div class=\"incorrect-item\"><p><strong>B. S3 Glacier Instant Retrieval</strong></p><p>ミリ秒単位で即時取り出せるアーカイブクラスであり、Deep Archiveよりコストが高くなります。</p></div><div class=\"incorrect-item\"><p><strong>C. S3 Glacier Flexible Retrieval</strong></p><p>数分〜数時間で取り出せるアーカイブクラスであり、Deep Archiveより取り出しは速いがコストは高めです。</p></div>",
    "pointsHtml": "<ul><li>Deep ArchiveはS3で最安のアーカイブクラス（取り出しは最も遅い）</li><li>「10年保存」「取り出しに数時間OK」「最もコスト効率」はDeep Archive</li><li>Glacier系3種：Instant（即時）／Flexible（数分〜数時間）／Deep Archive（最安・最も遅い）</li></ul>"
  },
  {
    "number": 24,
    "id": "Q024",
    "questionHtml": "月に数回だけ参照するバックアップデータを低コストで保存したいと考えています。<br>数分から数時間の復元時間は許容できます。<br>最も適切なストレージクラスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon S3 Standard"
      },
      {
        "correct": false,
        "html": "S3 Intelligent-Tiering"
      },
      {
        "correct": true,
        "html": "S3 Glacier Flexible Retrieval"
      },
      {
        "correct": false,
        "html": "S3 Glacier Deep Archive"
      }
    ],
    "explanationHtml": "<p>この問題では、アーカイブ用ストレージクラスであるS3 Glacier Flexible Retrievalについて理解しているかが問われています。</p><p>S3 Glacier Flexible Retrievalは、低コストなアーカイブ向けストレージクラスで、数分から数時間の取り出し時間を選択できます。月に数回だけ参照するバックアップデータのように、頻度は低いがある程度の柔軟な復元時間を許容できるケースに適しています。</p>",
    "correctHtml": "<p><strong>C. S3 Glacier Flexible Retrieval</strong></p><p>低コストで保存でき、数分〜数時間の復元時間を許容できるバックアップに適しています。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon S3 Standard</strong></p><p>頻繁にアクセスするデータ向けであり、月数回参照のバックアップにはコストが高くなります。</p></div><div class=\"incorrect-item\"><p><strong>B. S3 Intelligent-Tiering</strong></p><p>アクセスパターンが不明・変動するデータに対して自動で階層を移動するクラスであり、既に頻度が明確なバックアップには専用のアーカイブクラスが適します。</p></div><div class=\"incorrect-item\"><p><strong>D. S3 Glacier Deep Archive</strong></p><p>最も低コストですが取り出しに12時間程度かかり、数分〜数時間の復元を求める本要件にはFlexible Retrievalが適します。</p></div>",
    "pointsHtml": "<ul><li>Flexible Retrievalは数分〜数時間で取り出せる低コストアーカイブ</li><li>「月数回参照」「数分〜数時間の復元許容」はFlexible Retrieval</li><li>復元時間の違い：Instant（即時）＜Flexible（数分〜数時間）＜Deep Archive（約12時間）</li></ul>"
  },
  {
    "number": 25,
    "id": "Q025",
    "questionHtml": "医療システムでは、アーカイブしたデータを数ミリ秒で取得できる必要があります。<br>最も適切なストレージクラスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "S3 Glacier Flexible Retrieval"
      },
      {
        "correct": false,
        "html": "S3 Glacier Deep Archive"
      },
      {
        "correct": true,
        "html": "S3 Glacier Instant Retrieval"
      },
      {
        "correct": false,
        "html": "S3 Standard-IA"
      }
    ],
    "explanationHtml": "<p>この問題では、即時取り出しに対応したアーカイブ用ストレージクラスであるS3 Glacier Instant Retrievalについて理解しているかが問われています。</p><p>S3 Glacier Instant Retrievalは、アーカイブ向けの低コストクラスでありながら、ミリ秒単位でデータを即時取り出せるのが特徴です。四半期に一度程度しかアクセスしないが、必要なときはすぐに取り出したいデータ（医療画像など）に最適です。</p>",
    "correctHtml": "<p><strong>C. S3 Glacier Instant Retrieval</strong></p><p>アーカイブデータをミリ秒単位で即時取り出せるストレージクラスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. S3 Glacier Flexible Retrieval</strong></p><p>取り出しに数分〜数時間かかるため、数ミリ秒での取得が必要な本要件には適しません。</p></div><div class=\"incorrect-item\"><p><strong>B. S3 Glacier Deep Archive</strong></p><p>取り出しに約12時間かかるため、即時取得の要件には適しません。</p></div><div class=\"incorrect-item\"><p><strong>D. S3 Standard-IA</strong></p><p>低頻度アクセス向けの標準クラスであり、Glacier系より保存コストが高くなります。</p></div>",
    "pointsHtml": "<ul><li>Instant Retrievalはミリ秒で即時取り出せるアーカイブクラス</li><li>「アーカイブ」かつ「数ミリ秒で取得」はInstant Retrieval</li><li>Glacier系3種の取り出し速度の違いを整理して覚える</li></ul>"
  },
  {
    "number": 26,
    "id": "Q026",
    "questionHtml": "複数のAWSサービス間で発生したイベントをルールに従って処理したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon SNS"
      },
      {
        "correct": false,
        "html": "Amazon SQS"
      },
      {
        "correct": true,
        "html": "Amazon EventBridge"
      },
      {
        "correct": false,
        "html": "AWS Step Functions"
      }
    ],
    "explanationHtml": "<p>この問題では、イベントバスサービスであるAmazon EventBridgeについて理解しているかが問われています。</p><p>Amazon EventBridgeは、AWSサービスやSaaS、独自アプリケーションから発生したイベントを、あらかじめ定義したルールに従って適切なターゲット（Lambda、Step Functions、SQSなど）へ振り分けるサービスです。イベント駆動型アーキテクチャの中核を担います。</p>",
    "correctHtml": "<p><strong>C. Amazon EventBridge</strong></p><p>複数のAWSサービス間のイベントをルールに従って処理・振り分けできます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon SNS</strong></p><p>Pub/Sub型の通知サービスであり、細かなルールに基づくイベントの振り分けを主目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon SQS</strong></p><p>メッセージを蓄積するキューサービスであり、ルールベースのイベント振り分けは行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Step Functions</strong></p><p>複数処理を順序立てて実行するワークフローサービスであり、イベントのルーティングを主目的とはしません。</p></div>",
    "pointsHtml": "<ul><li>EventBridgeはルールに基づくイベントの振り分け（イベントバス）</li><li>「イベントをルールに従って処理」はEventBridge</li><li>SNS（通知）／SQS（キュー）／EventBridge（ルール振り分け）の役割を区別</li></ul>"
  },
  {
    "number": 27,
    "id": "Q027",
    "questionHtml": "注文受付後に「在庫確認 → 決済 → 配送依頼」の順番で処理を実行したいと考えています。<br>ワークフロー全体を管理するサービスとして最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon EventBridge"
      },
      {
        "correct": false,
        "html": "Amazon SNS"
      },
      {
        "correct": true,
        "html": "AWS Step Functions"
      },
      {
        "correct": false,
        "html": "AWS Batch"
      }
    ],
    "explanationHtml": "<p>この問題では、ワークフローを管理するAWS Step Functionsについて理解しているかが問われています。</p><p>AWS Step Functionsは、複数の処理（Lambda関数やAWSサービスの呼び出しなど）を順序立てて実行するワークフローサービスです。ステートマシンとして順次処理、条件分岐、並列実行、リトライ、エラーハンドリングを視覚的に定義でき、「在庫確認→決済→配送依頼」のような一連の流れ全体を管理できます。</p>",
    "correctHtml": "<p><strong>C. AWS Step Functions</strong></p><p>複数の処理を順番に実行するワークフロー全体を管理できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon EventBridge</strong></p><p>イベントをルールに従って振り分けるサービスであり、処理の順序全体を管理するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon SNS</strong></p><p>複数へ同時通知するPub/Sub型サービスであり、順序立てたワークフロー管理は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Batch</strong></p><p>大規模なバッチ処理をスケジュール・実行するサービスであり、業務ステップの順序管理を主目的とはしません。</p></div>",
    "pointsHtml": "<ul><li>Step Functionsはワークフロー（順次処理・分岐・並列・リトライ）を管理</li><li>「順番に処理」「ワークフロー全体を管理」はStep Functions</li><li>Lambda（個々の処理）とStep Functions（処理をつなぐ）の関係を理解</li></ul>"
  },
  {
    "number": 28,
    "id": "Q028",
    "questionHtml": "AWSリソースをコードで管理し、同じ環境を何度でも再現したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Systems Manager"
      },
      {
        "correct": true,
        "html": "AWS CloudFormation"
      },
      {
        "correct": false,
        "html": "AWS Config"
      },
      {
        "correct": false,
        "html": "Amazon EC2 Auto Scaling"
      }
    ],
    "explanationHtml": "<p>この問題では、Infrastructure as Code（IaC）を実現するAWS CloudFormationについて理解しているかが問われています。</p><p>AWS CloudFormationは、AWSリソースの構成をYAMLまたはJSONのテンプレートとしてコードで定義し、同じ環境を何度でも自動的に構築・再現できるサービスです。手作業を排除し、環境の一貫性と再現性を確保できます。</p>",
    "correctHtml": "<p><strong>B. AWS CloudFormation</strong></p><p>AWSリソースをコード（テンプレート）で管理し、同じ環境を繰り返し再現できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Systems Manager</strong></p><p>サーバーの運用管理サービスであり、インフラ全体をコードで定義・構築するIaCサービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Config</strong></p><p>リソースの構成変更を記録・評価するサービスであり、インフラをコードで構築するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon EC2 Auto Scaling</strong></p><p>EC2の台数を自動増減する機能であり、インフラ構成をコード管理するものではありません。</p></div>",
    "pointsHtml": "<ul><li>CloudFormationはIaC（インフラをコードで管理・自動構築）</li><li>「コードで管理」「同じ環境を再現」はCloudFormation</li><li>テンプレートはYAML／JSONで記述</li></ul>"
  },
  {
    "number": 29,
    "id": "Q029",
    "questionHtml": "開発者はソースコードだけをデプロイし、インフラ構築はできるだけ自動化したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon ECS"
      },
      {
        "correct": false,
        "html": "AWS Lambda"
      },
      {
        "correct": true,
        "html": "AWS Elastic Beanstalk"
      },
      {
        "correct": false,
        "html": "AWS CloudFormation"
      }
    ],
    "explanationHtml": "<p>この問題では、アプリケーションのデプロイを自動化するAWS Elastic Beanstalkについて理解しているかが問われています。</p><p>AWS Elastic Beanstalkは、ソースコードをアップロードするだけで、EC2、Auto Scaling、ELBなどの必要なインフラを自動的に構築・管理してくれるPaaS的なサービスです。開発者はインフラの詳細を意識せず、アプリケーション開発に集中できます。</p>",
    "correctHtml": "<p><strong>C. AWS Elastic Beanstalk</strong></p><p>ソースコードをデプロイするだけで、必要なインフラ構築を自動化できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon ECS</strong></p><p>コンテナを実行・管理するサービスであり、インフラ構築を自動化するデプロイサービスとは異なります。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Lambda</strong></p><p>サーバーレスの関数実行サービスであり、EC2やELBを含むインフラ一式を自動構築するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS CloudFormation</strong></p><p>インフラをテンプレートで定義するIaCサービスであり、ソースコードのデプロイを主目的とはしません。</p></div>",
    "pointsHtml": "<ul><li>Elastic Beanstalkはコードをデプロイするとインフラを自動構築</li><li>「ソースコードだけデプロイ」「インフラ自動化」はBeanstalk</li><li>Beanstalk（アプリのデプロイ）とCloudFormation（インフラの定義）の違いを理解</li></ul>"
  },
  {
    "number": 30,
    "id": "Q030",
    "questionHtml": "EC2、EBS、RDSなど複数サービスのバックアップを一元管理したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon S3"
      },
      {
        "correct": false,
        "html": "AWS DataSync"
      },
      {
        "correct": true,
        "html": "AWS Backup"
      },
      {
        "correct": false,
        "html": "AWS Storage Gateway"
      }
    ],
    "explanationHtml": "<p>この問題では、バックアップを一元管理するAWS Backupについて理解しているかが問われています。</p><p>AWS Backupは、EC2、EBS、RDS、EFS、DynamoDBなど複数のAWSサービスのバックアップを一元的に管理するサービスです。バックアップポリシー（バックアッププラン）を設定することで、スケジュールに従った自動バックアップやライフサイクル管理を統合的に行えます。</p>",
    "correctHtml": "<p><strong>C. AWS Backup</strong></p><p>複数のAWSサービスのバックアップを一元的に管理できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon S3</strong></p><p>オブジェクトストレージであり、複数サービスのバックアップを統合管理する機能を主目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS DataSync</strong></p><p>オンプレミスとAWS間などのデータ転送・同期サービスであり、バックアップの一元管理サービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Storage Gateway</strong></p><p>オンプレミスとAWSストレージを接続するサービスであり、複数サービスのバックアップ統合管理を行うものではありません。</p></div>",
    "pointsHtml": "<ul><li>AWS Backupは複数サービスのバックアップを一元管理</li><li>「EC2・EBS・RDSなど複数サービス」「バックアップ一元管理」はAWS Backup</li><li>バックアッププランで自動化・ライフサイクル管理</li></ul>"
  },
  {
    "number": 31,
    "id": "Q031",
    "questionHtml": "オンプレミスのファイルサーバーをAWSへ継続的に同期したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Backup"
      },
      {
        "correct": false,
        "html": "Amazon EFS"
      },
      {
        "correct": true,
        "html": "AWS DataSync"
      },
      {
        "correct": false,
        "html": "AWS Transfer Family"
      }
    ],
    "explanationHtml": "<p>この問題では、データ転送・同期サービスであるAWS DataSyncについて理解しているかが問われています。</p><p>AWS DataSyncは、オンプレミスのストレージとAWS（S3、EFS、FSxなど）の間で、大量のデータを高速かつ安全に転送・同期するサービスです。スケジュール設定による継続的な同期にも対応しており、ファイルサーバーの移行や定期同期に適しています。</p>",
    "correctHtml": "<p><strong>C. AWS DataSync</strong></p><p>オンプレミスのファイルサーバーをAWSへ継続的に同期できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Backup</strong></p><p>複数サービスのバックアップを一元管理するサービスであり、オンプレとの継続同期を主目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon EFS</strong></p><p>AWS上の共有ファイルストレージそのものであり、オンプレとの同期を行うサービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Transfer Family</strong></p><p>FTP／FTPS／SFTPによるファイル転送をマネージドで提供するサービスであり、大量データの高速同期にはDataSyncが適します。</p></div>",
    "pointsHtml": "<ul><li>DataSyncはオンプレ⇔AWS間の高速データ転送・同期</li><li>「オンプレのファイルサーバー」「継続的に同期」はDataSync</li><li>Transfer Family（FTP/SFTP転送）との違いに注意</li></ul>"
  },
  {
    "number": 32,
    "id": "Q032",
    "questionHtml": "AWS上のアプリケーションが異常終了した場合に、自動的に通知を受け取りたいと考えています。<br>CPU使用率やエラーメトリクスを監視するサービスはどれですか。",
    "choices": [
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
        "html": "Amazon CloudWatch"
      },
      {
        "correct": false,
        "html": "AWS Systems Manager"
      }
    ],
    "explanationHtml": "<p>この問題では、監視サービスであるAmazon CloudWatchについて理解しているかが問われています。</p><p>Amazon CloudWatchは、CPU使用率やエラー数などのメトリクスを監視し、しきい値を超えた場合にアラームを発報するサービスです。アラームからSNSを通じて通知を送ることで、アプリケーションの異常終了などを自動的に検知・通知できます。</p>",
    "correctHtml": "<p><strong>C. Amazon CloudWatch</strong></p><p>CPU使用率やエラーメトリクスを監視し、異常時に通知を受け取れます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS CloudTrail</strong></p><p>APIコールの操作履歴を記録する監査サービスであり、メトリクス監視を主目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Config</strong></p><p>リソースの構成変更を記録・評価するサービスであり、メトリクス監視サービスではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Systems Manager</strong></p><p>サーバーの運用管理サービスであり、メトリクス監視とアラーム発報を主目的とはしません。</p></div>",
    "pointsHtml": "<ul><li>CloudWatchはメトリクス監視とアラーム（異常検知・通知）</li><li>「CPU使用率」「エラーメトリクス」「監視」「通知」はCloudWatch</li><li>CloudTrail（操作履歴）とConfig（構成変更）との違いを整理</li></ul>"
  },
  {
    "number": 33,
    "id": "Q033",
    "questionHtml": "Amazon S3に保存されたCSVファイルに対して、サーバーを構築せずSQLで分析したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Redshift"
      },
      {
        "correct": false,
        "html": "Amazon EMR"
      },
      {
        "correct": true,
        "html": "Amazon Athena"
      },
      {
        "correct": false,
        "html": "AWS Glue"
      }
    ],
    "explanationHtml": "<p>この問題では、S3上のデータをSQLで直接分析できるAmazon Athenaについて理解しているかが問われています。</p><p>Amazon Athenaは、Amazon S3に保存されたCSVやJSON、Parquetなどのデータに対して、サーバーを構築することなく標準SQLで直接クエリを実行できるサーバーレスの分析サービスです。実行したクエリのスキャン量に応じて課金されます。</p>",
    "correctHtml": "<p><strong>C. Amazon Athena</strong></p><p>サーバーを構築せずにS3上のCSVファイルをSQLで直接分析できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Redshift</strong></p><p>専用のデータウェアハウスであり、クラスターの構築が必要でサーバーレスではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon EMR</strong></p><p>HadoopやSparkによる分散処理サービスであり、クラスター構築が必要でサーバーレスのSQL分析には向きません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Glue</strong></p><p>データの抽出・変換・格納（ETL）を行うサービスであり、S3データを直接SQLで分析するものではありません。</p></div>",
    "pointsHtml": "<ul><li>AthenaはS3のデータをSQLで直接分析するサーバーレスサービス</li><li>「S3」「サーバー構築せず」「SQLで分析」はAthena</li><li>クエリのスキャン量に応じた課金</li></ul>"
  },
  {
    "number": 34,
    "id": "Q034",
    "questionHtml": "開発チームでは、データ変換やETL処理をできるだけマネージドサービスで実装したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Athena"
      },
      {
        "correct": false,
        "html": "Amazon EMR"
      },
      {
        "correct": true,
        "html": "AWS Glue"
      },
      {
        "correct": false,
        "html": "Amazon QuickSight"
      }
    ],
    "explanationHtml": "<p>この問題では、マネージドなETLサービスであるAWS Glueについて理解しているかが問われています。</p><p>AWS Glueは、データの抽出（Extract）、変換（Transform）、格納（Load）というETL処理をサーバーレスで実行できるマネージドサービスです。データカタログの作成やスキーマの自動検出（クローラー）にも対応しており、分析基盤へのデータ準備を効率化します。</p>",
    "correctHtml": "<p><strong>C. AWS Glue</strong></p><p>データ変換やETL処理をマネージドサービスとして実装できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Athena</strong></p><p>S3上のデータをSQLで分析するサービスであり、ETL処理を主目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon EMR</strong></p><p>HadoopやSparkによる分散処理サービスであり、クラスター管理を伴います。フルマネージドなETLにはGlueが適します。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon QuickSight</strong></p><p>分析結果を可視化するBIサービスであり、ETL処理を行うものではありません。</p></div>",
    "pointsHtml": "<ul><li>GlueはマネージドなETL（抽出・変換・格納）サービス</li><li>「データ変換」「ETL処理」「マネージド」はGlue</li><li>データ分析の流れ：Glue（加工）→保存→Athena/Redshift（分析）→QuickSight（可視化）</li></ul>"
  },
  {
    "number": 35,
    "id": "Q035",
    "questionHtml": "ある企業では、Amazon EC2インスタンスをインターネットへ接続したいと考えています。<br>パブリックサブネットからインターネットへの通信を可能にするために必要なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "NAT Gateway"
      },
      {
        "correct": true,
        "html": "Internet Gateway"
      },
      {
        "correct": false,
        "html": "AWS Direct Connect"
      },
      {
        "correct": false,
        "html": "AWS Site-to-Site VPN"
      }
    ],
    "explanationHtml": "<p>この問題では、VPCとインターネットを接続するInternet Gatewayについて理解しているかが問われています。</p><p>Internet Gatewayは、VPCとインターネットの間の通信を可能にするコンポーネントです。パブリックサブネットに配置されたEC2インスタンスは、ルートテーブルでInternet Gatewayを経由するルートを設定し、パブリックIPを持つことで、インターネットとの双方向通信が可能になります。</p>",
    "correctHtml": "<p><strong>B. Internet Gateway</strong></p><p>パブリックサブネットからインターネットへの通信を可能にします。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. NAT Gateway</strong></p><p>プライベートサブネットのインスタンスがインターネットへアウトバウンド通信するためのもので、外部からの受信は許可しません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Direct Connect</strong></p><p>オンプレミスとAWSを専用線で接続するサービスであり、VPCのインターネット接続用ではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Site-to-Site VPN</strong></p><p>オンプレミスとAWSをVPNで接続するサービスであり、パブリックサブネットのインターネット接続用ではありません。</p></div>",
    "pointsHtml": "<ul><li>Internet Gatewayはパブリックサブネットのインターネット双方向通信を可能にする</li><li>「パブリックサブネット」「インターネットへ接続」はInternet Gateway</li><li>NAT Gateway（アウトバウンドのみ）との違いに注意</li></ul>"
  },
  {
    "number": 36,
    "id": "Q036",
    "questionHtml": "プライベートサブネット内のAmazon EC2インスタンスから、インターネット上のソフトウェア更新プログラムを取得したいと考えています。<br>外部からの直接アクセスは受け付けない構成とする場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Internet Gateway"
      },
      {
        "correct": true,
        "html": "NAT Gateway"
      },
      {
        "correct": false,
        "html": "AWS Transit Gateway"
      },
      {
        "correct": false,
        "html": "Elastic Load Balancing"
      }
    ],
    "explanationHtml": "<p>この問題では、プライベートサブネットからのアウトバウンド通信を可能にするNAT Gatewayについて理解しているかが問われています。</p><p>NAT Gatewayは、プライベートサブネット内のEC2インスタンスがインターネットへアウトバウンド（外向き）通信を行えるようにするサービスです。ソフトウェア更新プログラムの取得などが可能になる一方、インターネット側からプライベートサブネットへの直接アクセス（インバウンド）は受け付けないため、セキュリティを保てます。</p>",
    "correctHtml": "<p><strong>B. NAT Gateway</strong></p><p>プライベートサブネットからのアウトバウンド通信を可能にし、外部からの直接アクセスは受け付けません。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Internet Gateway</strong></p><p>インターネットとの双方向通信を可能にするため、外部からの直接アクセスを受け付けない構成には適しません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Transit Gateway</strong></p><p>複数のVPCやオンプレミスを相互接続するハブであり、インターネットへのアウトバウンド通信を担うものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Elastic Load Balancing</strong></p><p>リクエストを分散するロードバランサーであり、プライベートサブネットからのインターネット接続用ではありません。</p></div>",
    "pointsHtml": "<ul><li>NAT Gatewayはプライベートサブネットのアウトバウンド通信のみを許可</li><li>「プライベートサブネット」「外部からの直接アクセスを受けない」「更新取得」はNAT Gateway</li><li>Internet Gateway（双方向）との違いを明確に</li></ul>"
  },
  {
    "number": 37,
    "id": "Q037",
    "questionHtml": "オンプレミス環境とAWSを専用線で接続し、安定した低遅延通信を実現したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Site-to-Site VPN"
      },
      {
        "correct": false,
        "html": "Amazon CloudFront"
      },
      {
        "correct": true,
        "html": "AWS Direct Connect"
      },
      {
        "correct": false,
        "html": "Amazon Route 53"
      }
    ],
    "explanationHtml": "<p>この問題では、専用線接続サービスであるAWS Direct Connectについて理解しているかが問われています。</p><p>AWS Direct Connectは、オンプレミス環境とAWSを専用線（物理回線）で接続するサービスです。インターネットを経由しないため、安定した通信品質、低遅延、一貫した帯域幅を実現できます。大容量データの定常的なやり取りや、厳しいネットワーク要件がある場合に利用されます。</p>",
    "correctHtml": "<p><strong>C. AWS Direct Connect</strong></p><p>専用線を利用してオンプレミスとAWSを接続し、安定した低遅延通信を実現します。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Site-to-Site VPN</strong></p><p>インターネット経由で暗号化接続するサービスであり、専用線ほどの安定性・低遅延は保証されません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon CloudFront</strong></p><p>CDNサービスであり、オンプレミスとの専用線接続を行うものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Route 53</strong></p><p>DNSサービスであり、専用線接続を提供するものではありません。</p></div>",
    "pointsHtml": "<ul><li>Direct Connectは専用線でオンプレ⇔AWSを接続（低遅延・安定）</li><li>「専用線」「安定」「低遅延」はDirect Connect</li><li>Direct Connect（専用線）とVPN（インターネット＋暗号化）の違いは頻出</li></ul>"
  },
  {
    "number": 38,
    "id": "Q038",
    "questionHtml": "オンプレミスとAWSを暗号化されたインターネット経由で接続したいと考えています。<br>専用線は不要です。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Direct Connect"
      },
      {
        "correct": false,
        "html": "Internet Gateway"
      },
      {
        "correct": true,
        "html": "AWS Site-to-Site VPN"
      },
      {
        "correct": false,
        "html": "AWS Global Accelerator"
      }
    ],
    "explanationHtml": "<p>この問題では、VPN接続サービスであるAWS Site-to-Site VPNについて理解しているかが問われています。</p><p>AWS Site-to-Site VPNは、オンプレミス環境とAWSを、インターネット経由でIPsecにより暗号化して接続するサービスです。専用線を敷設する必要がなく、比較的低コストかつ短期間で安全な接続を構築できます。</p>",
    "correctHtml": "<p><strong>C. AWS Site-to-Site VPN</strong></p><p>暗号化されたインターネット経由の接続を、専用線なしで実現できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Direct Connect</strong></p><p>専用線による接続サービスであり、「専用線は不要」という条件に反します。</p></div><div class=\"incorrect-item\"><p><strong>B. Internet Gateway</strong></p><p>VPCとインターネットを接続するコンポーネントであり、オンプレミスとの暗号化VPN接続を行うものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS Global Accelerator</strong></p><p>ネットワーク経路を最適化するサービスであり、オンプレミスとのVPN接続を行うものではありません。</p></div>",
    "pointsHtml": "<ul><li>Site-to-Site VPNはインターネット経由でIPsec暗号化接続（専用線不要）</li><li>「暗号化」「インターネット経由」「専用線不要」はVPN</li><li>Direct Connect（専用線）とVPN（インターネット暗号化）を対比して覚える</li></ul>"
  },
  {
    "number": 39,
    "id": "Q039",
    "questionHtml": "オンプレミスのバックアップソフトウェアを変更せず、バックアップデータをAWSへ保存したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Backup"
      },
      {
        "correct": false,
        "html": "AWS DataSync"
      },
      {
        "correct": true,
        "html": "AWS Storage Gateway"
      },
      {
        "correct": false,
        "html": "Amazon S3 Glacier"
      }
    ],
    "explanationHtml": "<p>この問題では、オンプレミスとAWSストレージを接続するAWS Storage Gatewayについて理解しているかが問われています。</p><p>AWS Storage Gatewayは、オンプレミス環境からAWSのストレージ（S3など）を、あたかもローカルストレージのように利用できるハイブリッドストレージサービスです。既存のバックアップソフトウェアやアプリケーションを変更せずに、バックアップデータをAWSへ保存できます。</p>",
    "correctHtml": "<p><strong>C. AWS Storage Gateway</strong></p><p>既存のバックアップソフトウェアを変更せず、バックアップデータをAWSへ保存できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Backup</strong></p><p>複数のAWSサービスのバックアップを一元管理するサービスであり、オンプレミスの既存バックアップソフトと連携させるものではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS DataSync</strong></p><p>オンプレとAWS間のデータ転送・同期サービスであり、既存バックアップソフトを介したバックアップ保存を主目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon S3 Glacier</strong></p><p>アーカイブ用のストレージクラスそのものであり、オンプレミスとの接続機能を提供するものではありません。</p></div>",
    "pointsHtml": "<ul><li>Storage GatewayはオンプレとAWSストレージをつなぐハイブリッドストレージ</li><li>「既存のバックアップソフトを変更せず」「オンプレからAWSへ保存」はStorage Gateway</li><li>DataSync（データ転送・同期）との使い分けに注意</li></ul>"
  },
  {
    "number": 40,
    "id": "Q040",
    "questionHtml": "複数のAWS移行プロジェクトの進捗状況を一元管理したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Application Migration Service"
      },
      {
        "correct": false,
        "html": "AWS Database Migration Service"
      },
      {
        "correct": true,
        "html": "AWS Migration Hub"
      },
      {
        "correct": false,
        "html": "AWS DataSync"
      }
    ],
    "explanationHtml": "<p>この問題では、移行プロジェクトを一元管理するAWS Migration Hubについて理解しているかが問われています。</p><p>AWS Migration Hubは、複数のAWS移行ツール（Application Migration Service、Database Migration Serviceなど）を横断して、移行プロジェクトの進捗状況を一元的に追跡・管理できるサービスです。移行の全体像を可視化し、進捗を一箇所で把握できます。</p>",
    "correctHtml": "<p><strong>C. AWS Migration Hub</strong></p><p>複数の移行プロジェクトの進捗状況を一元的に管理・追跡できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Application Migration Service</strong></p><p>サーバーをEC2へ移行する（リフト＆シフト）ためのツールであり、複数プロジェクトの進捗を横断管理するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Database Migration Service</strong></p><p>データベースを移行するためのツールであり、移行全体の進捗を一元管理するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. AWS DataSync</strong></p><p>データ転送・同期サービスであり、移行プロジェクトの進捗管理を行うものではありません。</p></div>",
    "pointsHtml": "<ul><li>Migration Hubは移行プロジェクトの進捗を一元管理・可視化</li><li>「複数の移行プロジェクト」「進捗を一元管理」はMigration Hub</li><li>個別の移行ツール（MGN／DMS）との役割の違いを理解</li></ul>"
  },
  {
    "number": 41,
    "id": "Q041",
    "questionHtml": "Oracle DatabaseからAmazon Aurora PostgreSQLへデータを移行したいと考えています。<br>ダウンタイムをできるだけ短くしたい場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS Migration Hub"
      },
      {
        "correct": false,
        "html": "AWS Glue"
      },
      {
        "correct": true,
        "html": "AWS Database Migration Service (AWS DMS)"
      },
      {
        "correct": false,
        "html": "Amazon EMR"
      }
    ],
    "explanationHtml": "<p>この問題では、データベース移行サービスであるAWS Database Migration Service（AWS DMS）について理解しているかが問われています。</p><p>AWS DMSは、データベースを最小限のダウンタイムでAWSへ移行するサービスです。移行元と移行先が異なるエンジン（例：Oracle→Aurora PostgreSQL）でも、AWS Schema Conversion Tool（SCT）と組み合わせて移行でき、継続的なレプリケーションにより移行中もソースDBを稼働させ続けられます。</p>",
    "correctHtml": "<p><strong>C. AWS Database Migration Service (AWS DMS)</strong></p><p>データベースを最小限のダウンタイムでAWSへ移行できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS Migration Hub</strong></p><p>移行プロジェクトの進捗を一元管理するサービスであり、実際のDB移行を実行するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS Glue</strong></p><p>データのETL処理を行うサービスであり、ダウンタイムを抑えたDB移行を目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon EMR</strong></p><p>HadoopやSparkによる分散処理サービスであり、データベース移行サービスではありません。</p></div>",
    "pointsHtml": "<ul><li>DMSはDBを最小ダウンタイムで移行するサービス</li><li>異種エンジン間移行はDMS＋SCTを併用</li><li>「データベース移行」「ダウンタイムを短く」はDMS</li></ul>"
  },
  {
    "number": 42,
    "id": "Q042",
    "questionHtml": "オンプレミスで稼働している多数のサーバーをAmazon EC2へ移行したいと考えています。<br>アプリケーションを大きく変更せず移行したい場合、最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "AWS DMS"
      },
      {
        "correct": false,
        "html": "AWS DataSync"
      },
      {
        "correct": false,
        "html": "AWS Backup"
      },
      {
        "correct": true,
        "html": "AWS Application Migration Service (AWS MGN)"
      }
    ],
    "explanationHtml": "<p>この問題では、サーバー移行サービスであるAWS Application Migration Service（AWS MGN）について理解しているかが問われています。</p><p>AWS Application Migration Service（AWS MGN）は、オンプレミスや他クラウドのサーバーを、アプリケーションを大きく変更せずにAmazon EC2へ移行（リフト＆シフト）するためのサービスです。ブロックレベルのレプリケーションにより、既存サーバーをそのままEC2上で稼働させられます。</p>",
    "correctHtml": "<p><strong>D. AWS Application Migration Service (AWS MGN)</strong></p><p>アプリケーションを大きく変更せずに、多数のサーバーをEC2へ移行できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. AWS DMS</strong></p><p>データベースの移行に特化したサービスであり、サーバー全体の移行を主目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>B. AWS DataSync</strong></p><p>データ転送・同期サービスであり、サーバー（OSやアプリ）そのものの移行を行うものではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Backup</strong></p><p>複数サービスのバックアップを一元管理するサービスであり、サーバー移行サービスではありません。</p></div>",
    "pointsHtml": "<ul><li>MGNはサーバーをEC2へリフト＆シフト移行するサービス</li><li>「多数のサーバー」「アプリを大きく変更せず」「EC2へ移行」はMGN</li><li>MGN（サーバー移行）とDMS（DB移行）の使い分けが重要</li></ul>"
  },
  {
    "number": 43,
    "id": "Q043",
    "questionHtml": "Amazon S3へ保存された売上データをグラフやダッシュボードとして可視化したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Athena"
      },
      {
        "correct": true,
        "html": "Amazon QuickSight"
      },
      {
        "correct": false,
        "html": "AWS Glue"
      },
      {
        "correct": false,
        "html": "Amazon Redshift"
      }
    ],
    "explanationHtml": "<p>この問題では、BI（ビジネスインテリジェンス）サービスであるAmazon QuickSightについて理解しているかが問われています。</p><p>Amazon QuickSightは、AWSのマネージドなBIサービスです。S3、Athena、RedshiftなどのデータソースをもとにグラフやダッシュボードをWebブラウザ上で作成し、データを可視化・共有できます。売上データの分析結果を経営層や関係者へ分かりやすく提示するのに適しています。</p>",
    "correctHtml": "<p><strong>B. Amazon QuickSight</strong></p><p>S3などのデータをグラフやダッシュボードとして可視化できるBIサービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Athena</strong></p><p>S3のデータをSQLで分析するサービスであり、それ自体でダッシュボードを作成・可視化するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Glue</strong></p><p>データのETL処理を行うサービスであり、可視化を行うものではありません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Redshift</strong></p><p>データウェアハウスであり、データの保存・集計を担いますが、可視化ツールそのものではありません。</p></div>",
    "pointsHtml": "<ul><li>QuickSightはAWSのBIサービス（グラフ・ダッシュボードで可視化）</li><li>「グラフ」「ダッシュボード」「可視化」はQuickSight</li><li>分析の流れ：Glue（加工）→Redshift/S3（保存）→Athena（分析）→QuickSight（可視化）</li></ul>"
  },
  {
    "number": 44,
    "id": "Q044",
    "questionHtml": "数TB規模のログデータを分散処理し、ビッグデータ分析を実施したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Redshift"
      },
      {
        "correct": false,
        "html": "Amazon Athena"
      },
      {
        "correct": false,
        "html": "AWS Glue"
      },
      {
        "correct": true,
        "html": "Amazon EMR"
      }
    ],
    "explanationHtml": "<p>この問題では、ビッグデータの分散処理サービスであるAmazon EMRについて理解しているかが問われています。</p><p>Amazon EMR（Elastic MapReduce）は、Apache Hadoop、Apache Spark、Hiveなどのオープンソースフレームワークを利用して、数TB〜PB規模の大規模データを分散処理するマネージドサービスです。大量のログデータのビッグデータ分析やバッチ処理に適しています。</p>",
    "correctHtml": "<p><strong>D. Amazon EMR</strong></p><p>数TB規模のログデータを分散処理し、ビッグデータ分析を実施できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Redshift</strong></p><p>データウェアハウスであり、SQLベースの集計分析には向きますが、Hadoop/Sparkによる汎用的な分散処理フレームワークではありません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Athena</strong></p><p>S3のデータをSQLで分析するサーバーレスサービスであり、大規模な分散処理フレームワークを実行するものではありません。</p></div><div class=\"incorrect-item\"><p><strong>C. AWS Glue</strong></p><p>ETL処理を行うサービスであり、大規模なビッグデータ分散処理基盤としてはEMRが適します。</p></div>",
    "pointsHtml": "<ul><li>EMRはHadoop／Sparkによるビッグデータの分散処理</li><li>「数TB規模」「分散処理」「ビッグデータ分析」はEMR</li><li>Athena（S3をSQL分析）やGlue（ETL）との役割の違いを整理</li></ul>"
  },
  {
    "number": 45,
    "id": "Q045",
    "questionHtml": "ECサイトでは、投稿された画像に不適切なコンテンツが含まれていないか自動判定したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Comprehend"
      },
      {
        "correct": false,
        "html": "Amazon Textract"
      },
      {
        "correct": true,
        "html": "Amazon Rekognition"
      },
      {
        "correct": false,
        "html": "Amazon Polly"
      }
    ],
    "explanationHtml": "<p>この問題では、画像・動画分析のAIサービスであるAmazon Rekognitionについて理解しているかが問われています。</p><p>Amazon Rekognitionは、機械学習を用いて画像や動画を分析するAIサービスです。物体・シーンの検出、顔認識、テキスト検出のほか、不適切なコンテンツ（アダルト・暴力表現など）の自動検出（コンテンツモデレーション）にも対応しており、投稿画像の自動判定に適しています。</p>",
    "correctHtml": "<p><strong>C. Amazon Rekognition</strong></p><p>画像に不適切なコンテンツが含まれていないかを自動判定できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Comprehend</strong></p><p>テキストの自然言語処理（感情分析など）を行うサービスであり、画像分析は行いません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Textract</strong></p><p>文書画像から文字を抽出するサービスであり、不適切コンテンツの判定は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Polly</strong></p><p>テキストを音声へ変換するサービスであり、画像分析は行いません。</p></div>",
    "pointsHtml": "<ul><li>Rekognitionは画像・動画の分析AI（物体・顔・不適切コンテンツ検出）</li><li>「画像」「不適切コンテンツ自動判定」はRekognition</li><li>AI系サービスは「入力が何か（画像／テキスト／音声）」で判断</li></ul>"
  },
  {
    "number": 46,
    "id": "Q046",
    "questionHtml": "顧客から寄せられたレビュー文章について、感情分析やキーフレーズ抽出を実施したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Rekognition"
      },
      {
        "correct": false,
        "html": "Amazon Translate"
      },
      {
        "correct": false,
        "html": "Amazon Textract"
      },
      {
        "correct": true,
        "html": "Amazon Comprehend"
      }
    ],
    "explanationHtml": "<p>この問題では、自然言語処理のAIサービスであるAmazon Comprehendについて理解しているかが問われています。</p><p>Amazon Comprehendは、機械学習を用いてテキストから意味を抽出する自然言語処理（NLP）サービスです。感情分析（ポジティブ／ネガティブ判定）、キーフレーズ抽出、エンティティ抽出、言語検出などに対応しており、レビュー文章の分析に適しています。</p>",
    "correctHtml": "<p><strong>D. Amazon Comprehend</strong></p><p>レビュー文章の感情分析やキーフレーズ抽出を実施できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Rekognition</strong></p><p>画像・動画を分析するサービスであり、テキストの感情分析は行いません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Translate</strong></p><p>テキストを別の言語へ翻訳するサービスであり、感情分析やキーフレーズ抽出は行いません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Textract</strong></p><p>文書画像から文字を抽出するサービスであり、テキストの意味解析は行いません。</p></div>",
    "pointsHtml": "<ul><li>Comprehendは自然言語処理（感情分析・キーフレーズ抽出・エンティティ抽出）</li><li>「感情分析」「キーフレーズ抽出」はComprehend</li><li>テキスト系AI：Comprehend（解析）／Translate（翻訳）／Textract（文字抽出）</li></ul>"
  },
  {
    "number": 47,
    "id": "Q047",
    "questionHtml": "紙の請求書をスキャンし、文字情報を自動抽出したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Rekognition"
      },
      {
        "correct": false,
        "html": "Amazon Comprehend"
      },
      {
        "correct": true,
        "html": "Amazon Textract"
      },
      {
        "correct": false,
        "html": "Amazon Polly"
      }
    ],
    "explanationHtml": "<p>この問題では、文書から文字を抽出するAIサービスであるAmazon Textractについて理解しているかが問われています。</p><p>Amazon Textractは、スキャンした文書や画像から、テキスト、手書き文字、フォーム（キーと値のペア）、表などを自動抽出するAIサービスです。単純なOCRを超えて構造化された情報も抽出できるため、請求書や帳票のデータ化に適しています。</p>",
    "correctHtml": "<p><strong>C. Amazon Textract</strong></p><p>紙の請求書をスキャンした画像から文字情報を自動抽出できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Rekognition</strong></p><p>画像・動画の物体や顔などを分析するサービスであり、文書からの文字・帳票抽出を主目的とはしません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Comprehend</strong></p><p>抽出済みテキストの意味を解析する自然言語処理サービスであり、画像からの文字抽出は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Polly</strong></p><p>テキストを音声へ変換するサービスであり、文字抽出は行いません。</p></div>",
    "pointsHtml": "<ul><li>Textractは文書・画像からの文字／フォーム／表の抽出（高度なOCR）</li><li>「紙の請求書」「スキャン」「文字を抽出」はTextract</li><li>Textract（文字を取り出す）→Comprehend（意味を解析）の流れ</li></ul>"
  },
  {
    "number": 48,
    "id": "Q048",
    "questionHtml": "海外向けECサイトで、商品説明を複数言語へ自動翻訳したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Comprehend"
      },
      {
        "correct": false,
        "html": "Amazon Textract"
      },
      {
        "correct": false,
        "html": "Amazon Rekognition"
      },
      {
        "correct": true,
        "html": "Amazon Translate"
      }
    ],
    "explanationHtml": "<p>この問題では、翻訳AIサービスであるAmazon Translateについて理解しているかが問われています。</p><p>Amazon Translateは、機械学習を用いてテキストを別の言語へ自動翻訳するサービスです。多数の言語ペアに対応しており、商品説明やWebコンテンツを複数言語へ翻訳し、多言語対応のサービスを効率的に構築できます。</p>",
    "correctHtml": "<p><strong>D. Amazon Translate</strong></p><p>商品説明を複数言語へ自動翻訳できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Comprehend</strong></p><p>テキストの感情分析やキーフレーズ抽出を行うサービスであり、翻訳は行いません。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Textract</strong></p><p>文書画像から文字を抽出するサービスであり、翻訳は行いません。</p></div><div class=\"incorrect-item\"><p><strong>C. Amazon Rekognition</strong></p><p>画像・動画を分析するサービスであり、翻訳は行いません。</p></div>",
    "pointsHtml": "<ul><li>Translateはテキストの多言語自動翻訳AI</li><li>「複数言語」「翻訳」はTranslate</li><li>テキスト系AIの役割分担を整理して覚える</li></ul>"
  },
  {
    "number": 49,
    "id": "Q049",
    "questionHtml": "音声案内システムを構築するため、テキストを自然な音声へ変換したいと考えています。<br>最も適切なサービスはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "Amazon Transcribe"
      },
      {
        "correct": false,
        "html": "Amazon Translate"
      },
      {
        "correct": true,
        "html": "Amazon Polly"
      },
      {
        "correct": false,
        "html": "Amazon Lex"
      }
    ],
    "explanationHtml": "<p>この問題では、音声合成のAIサービスであるAmazon Pollyについて理解しているかが問われています。</p><p>Amazon Pollyは、テキストを自然な音声（Text-to-Speech）へ変換するAIサービスです。多数の言語と音声（ボイス）に対応し、ニューラル音声による自然な発話が可能です。音声案内システムや読み上げ機能の構築に適しています。</p>",
    "correctHtml": "<p><strong>C. Amazon Polly</strong></p><p>テキストを自然な音声へ変換できる音声合成サービスです。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. Amazon Transcribe</strong></p><p>音声をテキストへ変換する（文字起こし）サービスであり、Pollyとは逆方向の処理です。</p></div><div class=\"incorrect-item\"><p><strong>B. Amazon Translate</strong></p><p>テキストを別言語へ翻訳するサービスであり、音声への変換は行いません。</p></div><div class=\"incorrect-item\"><p><strong>D. Amazon Lex</strong></p><p>チャットボットや音声対話（会話AI）を構築するサービスであり、単純な音声合成を主目的とはしません。</p></div>",
    "pointsHtml": "<ul><li>Pollyはテキストを音声へ変換（音声合成／Text-to-Speech）</li><li>「テキストを自然な音声へ変換」はPolly</li><li>Polly（合成）とTranscribe（文字起こし）は逆方向で対で覚える</li></ul>"
  },
  {
    "number": 50,
    "id": "Q050",
    "questionHtml": "ある企業では、AWSサービスを選定する際に「可能な限りインフラ運用をAWSへ任せ、開発へ集中したい」と考えています。<br>この要件を満たすサービス選定方針として最も適切なものはどれですか。",
    "choices": [
      {
        "correct": false,
        "html": "可能な限りAmazon EC2のみで構築する"
      },
      {
        "correct": false,
        "html": "物理サーバーをAWSへ設置する"
      },
      {
        "correct": false,
        "html": "すべてオンプレミスで構築する"
      },
      {
        "correct": true,
        "html": "要件を満たす範囲でマネージドサービスを優先して採用する"
      }
    ],
    "explanationHtml": "<p>この問題では、マネージドサービスを優先するというAWSのサービス選定方針の考え方について理解しているかが問われています。</p><p>AWSでは、インフラの構築・運用をできるだけAWSへ任せられるマネージドサービス（RDS、Lambda、S3など）を優先的に採用することが推奨されています。これにより、運用負荷（パッチ適用、バックアップ、スケーリングなど）を軽減し、企業は本来注力すべきアプリケーション開発や事業価値の創出に集中できます。これはAWS Well-Architected Frameworkにも通じる基本的な考え方です。</p>",
    "correctHtml": "<p><strong>D. 要件を満たす範囲でマネージドサービスを優先して採用する</strong></p><p>マネージドサービスを優先することで運用負荷を軽減し、開発に集中できます。</p>",
    "incorrectHtml": "<div class=\"incorrect-item\"><p><strong>A. 可能な限りAmazon EC2のみで構築する</strong></p><p>すべてEC2で構築するとOSやミドルウェアの運用負荷が増大し、開発に集中したいという要件に反します。</p></div><div class=\"incorrect-item\"><p><strong>B. 物理サーバーをAWSへ設置する</strong></p><p>クラウドの利点を活かせず、運用負荷を軽減して開発に集中するという方針に合致しません。</p></div><div class=\"incorrect-item\"><p><strong>C. すべてオンプレミスで構築する</strong></p><p>AWSのマネージドサービスを活用できず、インフラ運用をAWSへ任せたいという要件に反します。</p></div>",
    "pointsHtml": "<ul><li>マネージドサービスを優先すると運用負荷を軽減し開発に集中できる</li><li>「運用をAWSへ任せ、開発に集中」ならマネージドサービス優先</li><li>サーバーレス／マネージドの活用はWell-Architectedの推奨事項</li></ul>"
  }
];
