# 03 AWSサービス

## Q001

#### ある企業では、画像ファイルを大量に保存するWebサービスを構築しています。
#### 保存するデータは容量が増減し、耐久性が高く、インターネット経由でアクセスできることが求められます。
#### この要件を最も満たすサービスはどれですか。

- [x] Amazon S3
- [ ] Amazon EBS
- [ ] Amazon EFS
- [ ] Amazon FSx for Windows File Server

---

## Q002

#### Amazon EC2インスタンスのOSをインストールするための永続ストレージが必要です。
#### EC2インスタンスに直接アタッチして利用するサービスとして最も適切なものはどれですか。

- [ ] Amazon S3
- [x] Amazon EBS
- [ ] Amazon EFS
- [ ] Amazon Glacier

---

## Q003

#### Linuxベースの複数のAmazon EC2インスタンスから同時にアクセスできる共有ファイルストレージが必要です。
#### 最も適切なサービスはどれですか。

- [ ] Amazon S3
- [ ] Amazon EBS
- [x] Amazon EFS
- [ ] Amazon FSx for Lustre

---

## Q004

#### ある企業では、リレーショナルデータベースを利用した受注管理システムをAWSへ移行したいと考えています。
#### SQLによる検索やトランザクション処理を継続して利用したい場合、最も適切なサービスはどれですか。

- [ ] Amazon DynamoDB
- [x] Amazon RDS
- [ ] Amazon ElastiCache
- [ ] Amazon Redshift

---

## Q005

#### IoTデバイスから毎秒数百万件のセンサーデータを受信しています。
#### スキーマが柔軟で、大量データを高速に処理できるデータベースとして最も適切なものはどれですか。

- [ ] Amazon RDS
- [x] Amazon DynamoDB
- [ ] Amazon Aurora
- [ ] Amazon Neptune

---

## Q006

#### 開発チームでは、サーバーを管理することなく、イベント発生時だけプログラムを実行したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon EC2
- [ ] Amazon ECS
- [x] AWS Lambda
- [ ] AWS Elastic Beanstalk

---

## Q007

#### 独自OSやミドルウェアを自由に構成できる仮想サーバーが必要です。
#### 最も適切なサービスはどれですか。

- [x] Amazon EC2
- [ ] AWS Lambda
- [ ] Amazon Lightsail
- [ ] AWS App Runner

---

## Q008

#### DockerコンテナをAWS上で実行したいと考えています。
#### Kubernetesを利用せず、AWSネイティブなコンテナオーケストレーションサービスを利用したい場合、最も適切なものはどれですか。

- [ ] Amazon EKS
- [x] Amazon ECS
- [ ] AWS Lambda
- [ ] Amazon EC2 Auto Scaling

---

## Q009

#### Kubernetes環境を利用してコンテナアプリケーションを実行したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon ECS
- [ ] AWS Lambda
- [x] Amazon EKS
- [ ] AWS Elastic Beanstalk

---

## Q010

#### 静的Webサイトのコンテンツを世界中へ低遅延で配信したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] AWS Global Accelerator
- [ ] Amazon Route 53
- [x] Amazon CloudFront
- [ ] Elastic Load Balancing

---

## Q011

#### DNSレベルでドメイン名をIPアドレスへ名前解決したい場合、最も適切なサービスはどれですか。

- [ ] Amazon CloudFront
- [x] Amazon Route 53
- [ ] AWS Global Accelerator
- [ ] Elastic Load Balancing

---

## Q012

#### 複数のAmazon EC2インスタンスへアクセスを分散し、高可用性を実現したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Route 53
- [ ] Amazon CloudFront
- [x] Elastic Load Balancing
- [ ] Amazon API Gateway

---

## Q013

#### Webサーバーへのアクセス数に応じて、自動的にAmazon EC2インスタンスの台数を増減させたいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Elastic Load Balancing
- [ ] Amazon CloudWatch
- [x] Amazon EC2 Auto Scaling
- [ ] AWS Systems Manager

---

## Q014

#### アプリケーションのメトリクスやCPU使用率などを監視し、アラームを設定したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] AWS CloudTrail
- [x] Amazon CloudWatch
- [ ] AWS Config
- [ ] Amazon Inspector

---

## Q015

#### Webアプリケーションの更新内容を世界中へ迅速に反映させたいと考えています。
#### エッジロケーションを利用してコンテンツを配信するサービスはどれですか。

- [ ] Amazon Route 53
- [x] Amazon CloudFront
- [ ] AWS Global Accelerator
- [ ] Amazon S3 Glacier

---

## Q016

#### Amazon EC2インスタンスへSSH接続するための秘密鍵を紛失しました。
#### 今後、OSへログインせずにリモート管理を行えるようにしたい場合、最も適切なサービスはどれですか。

- [ ] AWS CloudTrail
- [ ] AWS Config
- [x] AWS Systems Manager
- [ ] Amazon Inspector

---

## Q017

#### ある企業では、複数のAWSサービスを組み合わせたサーバーレスAPIを構築しています。
#### HTTPリクエストを受け付けてAWS Lambdaを呼び出すサービスとして最も適切なものはどれですか。

- [ ] Elastic Load Balancing
- [ ] Amazon CloudFront
- [x] Amazon API Gateway
- [ ] Amazon Route 53
---

## Q018

#### ECサイトでは、注文が完了するたびに「在庫管理」「配送手配」「購入者へのメール送信」をそれぞれ独立したシステムで処理しています。
#### 1つのイベントを複数のシステムへ同時に通知したい場合、最も適切なサービスはどれですか。

- [ ] Amazon SQS
- [x] Amazon SNS
- [ ] Amazon EventBridge
- [ ] AWS Step Functions

---

## Q019

#### バッチ処理を実行するシステムでは、処理要求を一時的に蓄積し、順番に処理したいと考えています。
#### システム同士を疎結合にするため、最も適切なサービスはどれですか。

- [ ] Amazon SNS
- [x] Amazon SQS
- [ ] Amazon MQ
- [ ] Amazon EventBridge

---

## Q020

#### 既存のMySQLデータベースをAWSへ移行したいと考えています。
#### MySQLとの互換性を維持しつつ、高可用性と高性能を実現したい場合、最も適切なサービスはどれですか。

- [ ] Amazon DynamoDB
- [ ] Amazon Redshift
- [x] Amazon Aurora (MySQL互換)
- [ ] Amazon ElastiCache

---

## Q021

#### 数年分の売上データを分析し、BIツールから高速に集計したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon RDS
- [ ] Amazon DynamoDB
- [x] Amazon Redshift
- [ ] Amazon Athena

---

## Q022

#### 読み取り処理が非常に多いWebアプリケーションで、データベースへの負荷を軽減したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon RDS
- [ ] Amazon S3
- [x] Amazon ElastiCache
- [ ] Amazon Aurora

---

## Q023

#### 法令により、アクセス頻度が極めて低いデータを10年間保存する必要があります。
#### 取り出しには数時間かかっても問題ありません。
#### 最もコスト効率の高いストレージクラスはどれですか。

- [ ] Amazon S3 Standard
- [ ] S3 Glacier Instant Retrieval
- [ ] S3 Glacier Flexible Retrieval
- [x] S3 Glacier Deep Archive

---

## Q024

#### 月に数回だけ参照するバックアップデータを低コストで保存したいと考えています。
#### 数分から数時間の復元時間は許容できます。
#### 最も適切なストレージクラスはどれですか。

- [ ] Amazon S3 Standard
- [ ] S3 Intelligent-Tiering
- [x] S3 Glacier Flexible Retrieval
- [ ] S3 Glacier Deep Archive

---

## Q025

#### 医療システムでは、アーカイブしたデータを数ミリ秒で取得できる必要があります。
#### 最も適切なストレージクラスはどれですか。

- [ ] S3 Glacier Flexible Retrieval
- [ ] S3 Glacier Deep Archive
- [x] S3 Glacier Instant Retrieval
- [ ] S3 Standard-IA

---

## Q026

#### 複数のAWSサービス間で発生したイベントをルールに従って処理したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon SNS
- [ ] Amazon SQS
- [x] Amazon EventBridge
- [ ] AWS Step Functions

---

## Q027

#### 注文受付後に「在庫確認 → 決済 → 配送依頼」の順番で処理を実行したいと考えています。
#### ワークフロー全体を管理するサービスとして最も適切なものはどれですか。

- [ ] Amazon EventBridge
- [ ] Amazon SNS
- [x] AWS Step Functions
- [ ] AWS Batch

---

## Q028

#### AWSリソースをコードで管理し、同じ環境を何度でも再現したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] AWS Systems Manager
- [x] AWS CloudFormation
- [ ] AWS Config
- [ ] Amazon EC2 Auto Scaling

---

## Q029

#### 開発者はソースコードだけをデプロイし、インフラ構築はできるだけ自動化したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon ECS
- [ ] AWS Lambda
- [x] AWS Elastic Beanstalk
- [ ] AWS CloudFormation

---

## Q030

#### EC2、EBS、RDSなど複数サービスのバックアップを一元管理したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon S3
- [ ] AWS DataSync
- [x] AWS Backup
- [ ] AWS Storage Gateway

---

## Q031

#### オンプレミスのファイルサーバーをAWSへ継続的に同期したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] AWS Backup
- [ ] Amazon EFS
- [x] AWS DataSync
- [ ] AWS Transfer Family

---

## Q032

#### AWS上のアプリケーションが異常終了した場合に、自動的に通知を受け取りたいと考えています。
#### CPU使用率やエラーメトリクスを監視するサービスはどれですか。

- [ ] AWS CloudTrail
- [ ] AWS Config
- [x] Amazon CloudWatch
- [ ] AWS Systems Manager

---

## Q033

#### Amazon S3に保存されたCSVファイルに対して、サーバーを構築せずSQLで分析したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Redshift
- [ ] Amazon EMR
- [x] Amazon Athena
- [ ] AWS Glue

---

## Q034

#### 開発チームでは、データ変換やETL処理をできるだけマネージドサービスで実装したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Athena
- [ ] Amazon EMR
- [x] AWS Glue
- [ ] Amazon QuickSight
---

## Q035

#### ある企業では、Amazon EC2インスタンスをインターネットへ接続したいと考えています。
#### パブリックサブネットからインターネットへの通信を可能にするために必要なサービスはどれですか。

- [ ] NAT Gateway
- [x] Internet Gateway
- [ ] AWS Direct Connect
- [ ] AWS Site-to-Site VPN

---

## Q036

#### プライベートサブネット内のAmazon EC2インスタンスから、インターネット上のソフトウェア更新プログラムを取得したいと考えています。
#### 外部からの直接アクセスは受け付けない構成とする場合、最も適切なサービスはどれですか。

- [ ] Internet Gateway
- [x] NAT Gateway
- [ ] AWS Transit Gateway
- [ ] Elastic Load Balancing

---

## Q037

#### オンプレミス環境とAWSを専用線で接続し、安定した低遅延通信を実現したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] AWS Site-to-Site VPN
- [ ] Amazon CloudFront
- [x] AWS Direct Connect
- [ ] Amazon Route 53

---

## Q038

#### オンプレミスとAWSを暗号化されたインターネット経由で接続したいと考えています。
#### 専用線は不要です。
#### 最も適切なサービスはどれですか。

- [ ] AWS Direct Connect
- [ ] Internet Gateway
- [x] AWS Site-to-Site VPN
- [ ] AWS Global Accelerator

---

## Q039

#### オンプレミスのバックアップソフトウェアを変更せず、バックアップデータをAWSへ保存したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] AWS Backup
- [ ] AWS DataSync
- [x] AWS Storage Gateway
- [ ] Amazon S3 Glacier

---

## Q040

#### 複数のAWS移行プロジェクトの進捗状況を一元管理したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] AWS Application Migration Service
- [ ] AWS Database Migration Service
- [x] AWS Migration Hub
- [ ] AWS DataSync

---

## Q041

#### Oracle DatabaseからAmazon Aurora PostgreSQLへデータを移行したいと考えています。
#### ダウンタイムをできるだけ短くしたい場合、最も適切なサービスはどれですか。

- [ ] AWS Migration Hub
- [ ] AWS Glue
- [x] AWS Database Migration Service (AWS DMS)
- [ ] Amazon EMR

---

## Q042

#### オンプレミスで稼働している多数のサーバーをAmazon EC2へ移行したいと考えています。
#### アプリケーションを大きく変更せず移行したい場合、最も適切なサービスはどれですか。

- [ ] AWS DMS
- [ ] AWS DataSync
- [ ] AWS Backup
- [x] AWS Application Migration Service (AWS MGN)

---

## Q043

#### Amazon S3へ保存された売上データをグラフやダッシュボードとして可視化したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Athena
- [x] Amazon QuickSight
- [ ] AWS Glue
- [ ] Amazon Redshift

---

## Q044

#### 数TB規模のログデータを分散処理し、ビッグデータ分析を実施したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Redshift
- [ ] Amazon Athena
- [ ] AWS Glue
- [x] Amazon EMR

---

## Q045

#### ECサイトでは、投稿された画像に不適切なコンテンツが含まれていないか自動判定したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Comprehend
- [ ] Amazon Textract
- [x] Amazon Rekognition
- [ ] Amazon Polly

---

## Q046

#### 顧客から寄せられたレビュー文章について、感情分析やキーフレーズ抽出を実施したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Rekognition
- [ ] Amazon Translate
- [ ] Amazon Textract
- [x] Amazon Comprehend

---

## Q047

#### 紙の請求書をスキャンし、文字情報を自動抽出したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Rekognition
- [ ] Amazon Comprehend
- [x] Amazon Textract
- [ ] Amazon Polly

---

## Q048

#### 海外向けECサイトで、商品説明を複数言語へ自動翻訳したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Comprehend
- [ ] Amazon Textract
- [ ] Amazon Rekognition
- [x] Amazon Translate

---

## Q049

#### 音声案内システムを構築するため、テキストを自然な音声へ変換したいと考えています。
#### 最も適切なサービスはどれですか。

- [ ] Amazon Transcribe
- [ ] Amazon Translate
- [x] Amazon Polly
- [ ] Amazon Lex

---

## Q050

#### ある企業では、AWSサービスを選定する際に「可能な限りインフラ運用をAWSへ任せ、開発へ集中したい」と考えています。
#### この要件を満たすサービス選定方針として最も適切なものはどれですか。

- [ ] 可能な限りAmazon EC2のみで構築する
- [ ] 物理サーバーをAWSへ設置する
- [ ] すべてオンプレミスで構築する
- [x] 要件を満たす範囲でマネージドサービスを優先して採用する