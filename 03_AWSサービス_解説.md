# 03_AWSサービス_解説

## Q001

### 解説

この問題では、AWSで仮想サーバーを提供するサービスについて理解しているかが問われています。

Amazon EC2（Elastic Compute Cloud）は、AWS上で自由にOSやミドルウェアを構築・管理できる仮想サーバーサービスです。CPUやメモリのスペックを選択でき、Webサーバーや業務システムなど幅広い用途で利用されています。

#### 正解

**B. Amazon EC2**

Amazon EC2はIaaSに分類されるサービスであり、OSへのログインやソフトウェアのインストールなどを自由に行えます。

#### 不正解

**A. Amazon S3**

オブジェクトストレージサービスです。

**C. AWS Lambda**

サーバーレスでコードを実行するサービスであり、サーバー管理は不要です。

**D. Amazon RDS**

リレーショナルデータベースサービスです。

---

### 試験のポイント

EC2とLambdaは頻繁に比較されます。

- EC2：サーバーを管理する
- Lambda：サーバーを意識せずコードを実行する

---

## Q002

### 解説

この問題では、AWSのオブジェクトストレージサービスについて理解しているかが問われています。

Amazon S3（Simple Storage Service）は、画像・動画・バックアップ・ログファイルなどを保存するためのオブジェクトストレージです。高い耐久性（99.999999999%）を備えています。

#### 正解

**D. Amazon S3**

容量を意識せず保存できることが大きな特徴です。

#### 不正解

**A. Amazon EBS**

EC2専用のブロックストレージです。

**B. Amazon EFS**

共有ファイルストレージです。

**C. Amazon FSx**

WindowsやNetAppなどのファイルシステムを提供します。

---

### 試験のポイント

ストレージの違い

- S3：オブジェクト
- EBS：ブロック
- EFS：ファイル

この違いは頻出です。

---

## Q003

### 解説

この問題では、AWSのリレーショナルデータベースサービスについて理解しているかが問われています。

Amazon RDSはMySQL、PostgreSQL、MariaDB、Oracle Database、SQL Serverなどをマネージドサービスとして提供します。

バックアップやパッチ適用などの運用作業をAWSが代行するため、データベース管理の負荷を軽減できます。

#### 正解

**A. Amazon RDS**

リレーショナルデータベースを簡単に運用できるサービスです。

#### 不正解

**B. DynamoDB**

NoSQLデータベースです。

**C. Redshift**

データウェアハウスサービスです。

**D. ElastiCache**

インメモリキャッシュサービスです。

---

### 試験のポイント

RDSとDynamoDBの違い

- RDS：SQL
- DynamoDB：NoSQL

ここは非常によく出題されます。

---

## Q004

### 解説

この問題では、サーバーレスコンピューティングサービスであるAWS Lambdaについて理解しているかが問われています。

Lambdaではサーバーの構築や運用を行う必要がなく、コードをアップロードするだけでイベントに応じて自動実行されます。

利用時間に応じて課金されるため、小規模処理やイベント駆動型システムとの相性が非常に良いサービスです。

#### 正解

**C. AWS Lambda**

サーバーレスアーキテクチャを代表するサービスです。

#### 不正解

**A. Amazon EC2**

仮想サーバーサービスです。

**B. Amazon ECS**

コンテナ実行サービスです。

**D. AWS Batch**

バッチ処理サービスです。

---

### 試験のポイント

Lambdaの特徴

- サーバー管理不要
- 自動スケーリング
- 実行時間課金

---

## Q005

### 解説

この問題では、AWSのNoSQLデータベースであるAmazon DynamoDBについて理解しているかが問われています。

DynamoDBはフルマネージド型NoSQLデータベースであり、高速・高可用性・自動スケーリングが特徴です。

大量アクセスが発生するWebサービスやモバイルアプリでよく利用されます。

#### 正解

**B. Amazon DynamoDB**

キーバリュー型およびドキュメント型データを高速に処理できます。

#### 不正解

**A. Amazon RDS**

リレーショナルデータベースです。

**C. Amazon Aurora**

RDS互換のリレーショナルデータベースです。

**D. Amazon Redshift**

分析用データウェアハウスです。

---

### 試験のポイント

データベースサービス整理

- RDS：リレーショナルDB
- Aurora：高性能リレーショナルDB
- DynamoDB：NoSQL
- Redshift：分析基盤（DWH）

CLF試験ではサービス名だけでなく、「どの用途で利用するか」が問われます。

---

## Q006

### 解説

この問題では、Amazon Auroraについて理解しているかが問われています。

Amazon AuroraはAWSが独自開発したクラウドネイティブなリレーショナルデータベースです。MySQLおよびPostgreSQLとの互換性を持ちながら、高性能・高可用性を実現しています。

RDSファミリーの一つですが、通常のRDSよりも高い性能と自動フェイルオーバー機能を備えていることが特徴です。

#### 正解

**C. Amazon Aurora**

Auroraは高性能なリレーショナルデータベースサービスです。

#### 不正解

**A. DynamoDB**

NoSQLデータベースです。

**B. Amazon Redshift**

データ分析用のデータウェアハウスです。

**D. ElastiCache**

キャッシュサービスです。

---

### 試験のポイント

RDSファミリー

- RDS：標準的なRDB
- Aurora：高性能RDB
- DynamoDB：NoSQL

Auroraは「RDSとは別サービス」ではなく、「RDSファミリーの一員」である点も覚えておきましょう。

---

## Q007

### 解説

この問題では、Amazon EBSについて理解しているかが問われています。

Amazon EBS（Elastic Block Store）は、EC2インスタンスに接続して利用するブロックストレージです。

OSやアプリケーション、データベースの保存領域として利用されます。

#### 正解

**A. Amazon EBS**

EC2のディスクとして利用されるストレージサービスです。

#### 不正解

**B. Amazon S3**

オブジェクトストレージです。

**C. Amazon EFS**

複数EC2で共有できるファイルストレージです。

**D. Amazon Glacier**

長期アーカイブ用ストレージです。

---

### 試験のポイント

ストレージ比較

- EBS：EC2専用ディスク
- EFS：共有フォルダ
- S3：オブジェクト保存

この違いは非常によく出題されます。

---

## Q008

### 解説

この問題では、Amazon EFSについて理解しているかが問われています。

Amazon EFS（Elastic File System）は、Linuxベースの複数EC2インスタンスから同時にマウントできる共有ファイルストレージです。

アプリケーションサーバーを複数台構成にする場合などに利用されます。

#### 正解

**D. Amazon EFS**

共有ファイルシステムを提供するサービスです。

#### 不正解

**A. Amazon EBS**

1つのEC2へ接続するブロックストレージです。

**B. Amazon S3**

ファイル共有用ではありません。

**C. Amazon FSx**

用途別のマネージドファイルシステムです。

---

### 試験のポイント

覚え方

- EBS＝1台用
- EFS＝複数台共有

試験では頻繁に比較されます。

---

## Q009

### 解説

この問題では、Amazon CloudFrontについて理解しているかが問われています。

CloudFrontはCDN（Content Delivery Network）サービスです。

世界中のエッジロケーションへコンテンツをキャッシュし、利用者へ最も近い場所から配信することで、Webサイトの表示速度を向上させます。

#### 正解

**B. Amazon CloudFront**

静的コンテンツや動画配信などで利用される代表的なCDNです。

#### 不正解

**A. Route 53**

DNSサービスです。

**C. Global Accelerator**

ネットワーク経路を最適化するサービスです。

**D. ELB**

ロードバランサーです。

---

### 試験のポイント

CloudFrontとGlobal Accelerator

- CloudFront：コンテンツ配信を高速化
- Global Accelerator：ネットワーク経路を最適化

この違いはCLFでも狙われます。

---

## Q010

### 解説

この問題では、Amazon Route 53について理解しているかが問われています。

Route 53はAWSのDNS（Domain Name System）サービスです。

ドメイン名をIPアドレスへ変換するだけでなく、ヘルスチェックやルーティングポリシーも提供しています。

#### 正解

**C. Amazon Route 53**

AWSのマネージドDNSサービスです。

#### 不正解

**A. CloudFront**

CDNサービスです。

**B. ELB**

ロードバランサーです。

**D. API Gateway**

API公開サービスです。

---

### 試験のポイント

Route 53

- DNS
- ドメイン管理
- ヘルスチェック
- フェイルオーバー

DNSサービスであることを確実に覚えましょう。

---

## Q011

### 解説

この問題では、Elastic Load Balancing（ELB）について理解しているかが問われています。

ELBは複数のEC2インスタンスへアクセスを自動的に分散し、システム全体の可用性を向上させるサービスです。

障害が発生したサーバーへはリクエストを送らず、正常なサーバーへ振り分けます。

#### 正解

**A. Elastic Load Balancing（ELB）**

アクセスを複数サーバーへ分散するロードバランサーです。

#### 不正解

**B. Route 53**

DNSサービスです。

**C. CloudFront**

CDNサービスです。

**D. Auto Scaling**

EC2台数を自動で増減するサービスです。

---

### 試験のポイント

混同しやすいサービス

- ELB：アクセスを振り分ける
- Auto Scaling：サーバー台数を増減する

試験では「ELB＋Auto Scaling」の組み合わせが頻出です。

---

## Q012

### 解説

この問題では、Amazon EC2の台数を自動的に増減させる**Amazon EC2 Auto Scaling**について理解しているかが問われています。

Auto Scalingは、CPU使用率やリクエスト数などのメトリクスに応じてEC2インスタンスを自動で追加・削除し、可用性の向上とコスト最適化を実現します。

#### 正解

**B. Amazon EC2 Auto Scaling**

負荷に応じてEC2の台数を自動調整できます。

#### 不正解

**A. Elastic Load Balancing**

リクエストを分散するサービスであり、EC2台数は変更しません。

**C. Amazon CloudFront**

CDNサービスです。

**D. AWS Lambda**

サーバーレス実行サービスです。

---

### 試験のポイント

ELBとの違い

- ELB：リクエストを振り分ける
- Auto Scaling：サーバー台数を増減する

両者はセットで利用されることが多く、CLFでも頻出です。

---

## Q013

### 解説

この問題では、メッセージキューサービスである**Amazon Simple Queue Service（SQS）**について理解しているかが問われています。

SQSはシステム間のメッセージを一時的に保存することで、システム同士を疎結合にし、障害時にもメッセージを失わずに処理を継続できます。

#### 正解

**A. Amazon SQS**

送信側と受信側が同時に動作していなくてもメッセージを保持できます。

#### 不正解

**B. Amazon SNS**

メッセージを複数へ配信する通知サービスです。

**C. Amazon EventBridge**

イベントルーティングサービスです。

**D. Amazon MQ**

メッセージブローカーサービスです。

---

### 試験のポイント

SQS

- Queue
- 順番に処理
- 一時保存
- 疎結合

「Queue＝行列」と覚えるとイメージしやすくなります。

---

## Q014

### 解説

この問題では、通知サービスである**Amazon Simple Notification Service（SNS）**について理解しているかが問われています。

SNSは1つのメッセージを複数の受信先へ同時に配信できるサービスです。

メール、SMS、Lambda、SQSなどへ通知できます。

#### 正解

**D. Amazon SNS**

Publish/Subscribe（Pub/Sub）モデルを採用しています。

#### 不正解

**A. Amazon SQS**

キューイングサービスです。

**B. EventBridge**

イベントルーティングサービスです。

**C. CloudWatch**

監視サービスです。

---

### 試験のポイント

SQSとSNS

- SQS：ためる
- SNS：配る

この違いはCLF試験で非常によく出題されます。

---

## Q015

### 解説

この問題では、AWSサービスやSaaSから発生したイベントを条件に応じて転送する**Amazon EventBridge**について理解しているかが問われています。

EventBridgeでは、イベントルールを定義することで、LambdaやStep Functionsなどへイベントを自動的に振り分けられます。

#### 正解

**C. Amazon EventBridge**

イベント駆動型アーキテクチャを実現するサービスです。

#### 不正解

**A. Amazon SQS**

キューサービスです。

**B. Amazon SNS**

通知サービスです。

**D. CloudFormation**

インフラ構築サービスです。

---

### 試験のポイント

違いを整理

- SNS：通知
- SQS：キュー
- EventBridge：イベント振り分け

役割を区別できるようにしましょう。

---

## Q016

### 解説

この問題では、複数のLambdaなどをワークフローとして実行できる**AWS Step Functions**について理解しているかが問われています。

Step Functionsを利用すると、処理の順番や条件分岐、並列実行、リトライなどを視覚的に設計できます。

#### 正解

**B. AWS Step Functions**

サーバーレスアプリケーションのワークフロー管理サービスです。

#### 不正解

**A. AWS Lambda**

個々の処理を実行するサービスです。

**C. EventBridge**

イベントを転送するサービスです。

**D. SQS**

メッセージキューサービスです。

---

### 試験のポイント

役割の違い

- Lambda：処理を実行する
- Step Functions：処理をつなぐ

この関係を理解すると覚えやすくなります。

---

## Q017

### 解説

この問題では、APIを公開・管理する**Amazon API Gateway**について理解しているかが問われています。

API Gatewayを利用すると、REST APIやHTTP APIを簡単に公開でき、Lambdaなどのバックエンドサービスと連携できます。

認証、アクセス制御、スロットリングなどの機能も提供されています。

#### 正解

**A. Amazon API Gateway**

APIを安全かつ効率的に公開するためのマネージドサービスです。

#### 不正解

**B. Elastic Load Balancing**

ロードバランサーです。

**C. Route 53**

DNSサービスです。

**D. CloudFront**

CDNサービスです。

---

### 試験のポイント

API GatewayとELBは混同されやすいサービスです。

- API Gateway：APIを公開・管理する
- ELB：HTTPやTCPなどの通信を複数サーバーへ分散する

API GatewayはLambdaと組み合わせたサーバーレス構成で頻繁に利用されます。

---

### コンピューティング
- Amazon EC2
- AWS Lambda
- Amazon EC2 Auto Scaling

### ストレージ
- Amazon S3
- Amazon EBS
- Amazon EFS

### データベース
- Amazon RDS
- Amazon Aurora
- Amazon DynamoDB

### ネットワーク
- Amazon Route 53
- Elastic Load Balancing
- Amazon CloudFront

### アプリケーション統合
- Amazon SQS
- Amazon SNS
- Amazon EventBridge
- AWS Step Functions
- Amazon API Gateway

これらはCLF試験で最も出題頻度が高いAWSサービスです。**「サービス名」だけでなく、「どのような場面で利用するか」まで説明できること**を目標にしましょう。

---

## Q018

### 解説

この問題では、AWSのコンテナオーケストレーションサービスである**Amazon Elastic Container Service（Amazon ECS）**について理解しているかが問われています。

Amazon ECSは、Dockerコンテナのデプロイ・実行・管理を容易にするマネージドサービスです。AWSとの親和性が高く、EC2またはAWS Fargate上でコンテナを実行できます。

#### 正解

**B. Amazon ECS**

DockerコンテナをAWS上で効率的に管理・実行できるサービスです。

#### 不正解

**A. Amazon EC2**

仮想サーバーサービスであり、コンテナ管理機能はありません。

**C. AWS Lambda**

サーバーレス実行サービスです。

**D. Amazon EKS**

Kubernetesを利用するコンテナサービスです。

---

### 試験のポイント

コンテナサービスの違い

- ECS：AWS独自のコンテナ管理
- EKS：Kubernetes
- Fargate：コンテナ実行環境

---

## Q019

### 解説

この問題では、**Amazon Elastic Kubernetes Service（Amazon EKS）**について理解しているかが問われています。

Amazon EKSは、Kubernetesをマネージドサービスとして提供するサービスです。Kubernetesの管理負荷を軽減しながら、標準的なKubernetes環境を利用できます。

#### 正解

**D. Amazon EKS**

Kubernetesベースでコンテナを運用したい場合に利用します。

#### 不正解

**A. Amazon ECS**

AWS独自のコンテナ管理サービスです。

**B. AWS Lambda**

コンテナオーケストレーションサービスではありません。

**C. AWS Batch**

バッチ処理サービスです。

---

### 試験のポイント

ECSとEKSの違い

- ECS：AWS独自
- EKS：Kubernetes

「Kubernetes」というキーワードが出たらEKSを思い出しましょう。

---

## Q020

### 解説

この問題では、サーバーを意識せずコンテナを実行できる**AWS Fargate**について理解しているかが問われています。

AWS Fargateを利用すると、EC2インスタンスを管理することなく、ECSやEKSのコンテナを実行できます。

#### 正解

**A. AWS Fargate**

コンテナの実行環境をサーバーレスで提供します。

#### 不正解

**B. Amazon ECS**

コンテナ管理サービスです。

**C. Amazon EKS**

Kubernetes管理サービスです。

**D. Amazon EC2**

仮想サーバーです。

---

### 試験のポイント

役割を整理しましょう。

- ECS：コンテナを管理
- Fargate：コンテナを動かす環境
- EC2：サーバーを管理する環境

---

## Q021

### 解説

この問題では、アプリケーションを簡単にデプロイできる**AWS Elastic Beanstalk**について理解しているかが問われています。

Elastic Beanstalkでは、ソースコードをアップロードするだけで、EC2・Auto Scaling・ELBなどの必要なAWSリソースを自動構築できます。

#### 正解

**C. AWS Elastic Beanstalk**

インフラ構築を意識せずアプリケーションをデプロイできます。

#### 不正解

**A. CloudFormation**

インフラをコードで定義するサービスです。

**B. EC2**

仮想サーバーサービスです。

**D. Lambda**

サーバーレスサービスです。

---

### 試験のポイント

BeanstalkとCloudFormation

- Beanstalk：アプリをデプロイ
- CloudFormation：インフラを構築

目的の違いを理解しましょう。

---

## Q022

### 解説

この問題では、Infrastructure as Code（IaC）を実現する**AWS CloudFormation**について理解しているかが問われています。

CloudFormationでは、YAMLまたはJSONでAWSリソースをテンプレートとして定義し、同じ構成の環境を何度でも自動構築できます。

#### 正解

**B. AWS CloudFormation**

インフラ構成をコードで管理できるサービスです。

#### 不正解

**A. Elastic Beanstalk**

アプリケーションのデプロイサービスです。

**C. AWS Config**

構成変更を記録するサービスです。

**D. Systems Manager**

運用管理サービスです。

---

### 試験のポイント

CloudFormationのキーワード

- IaC（Infrastructure as Code）
- テンプレート
- YAML
- JSON
- 自動構築

Terraformとの違いはCLFでは問われませんが、「インフラをコードで管理するサービス」という役割は確実に押さえておきましょう。

---

## Q023

### 解説

この問題では、AWSリソースを一元的に運用・管理する**AWS Systems Manager**について理解しているかが問われています。

AWS Systems Managerは、EC2インスタンスやオンプレミスサーバーを一元管理できる運用支援サービスです。パッチ適用、設定管理、リモートコマンド実行（Run Command）など、多くの運用機能を提供しています。

#### 正解

**D. AWS Systems Manager**

複数のサーバーを効率的に管理・運用するためのサービスです。

#### 不正解

**A. Amazon CloudWatch**

監視サービスです。

**B. AWS Config**

構成変更履歴を管理するサービスです。

**C. AWS CloudFormation**

インフラ構築を自動化するサービスです。

---

### 試験のポイント

Systems Managerでできること

- パッチ管理
- Run Command
- Session Manager
- Parameter Store

「AWS環境の運用管理サービス」と覚えておきましょう。

---

## Q024

### 解説

この問題では、AWS Backupについて理解しているかが問われています。

AWS Backupは、Amazon EBS、Amazon RDS、Amazon EFS、Amazon DynamoDBなど複数のAWSサービスのバックアップを一元管理できるサービスです。

バックアップポリシーを設定することで、自動的にバックアップを取得できます。

#### 正解

**B. AWS Backup**

AWS全体のバックアップ運用を統合管理できます。

#### 不正解

**A. Amazon S3**

ストレージサービスです。

**C. AWS Storage Gateway**

オンプレミスとの接続サービスです。

**D. Amazon Glacier**

長期アーカイブ用ストレージです。

---

### 試験のポイント

AWS Backup

- バックアップの自動化
- 一元管理
- バックアップポリシー

サービスごとの個別設定ではなく、一括管理できることが特徴です。

---

## Q025

### 解説

この問題では、オンプレミス環境とAWSストレージを接続する**AWS Storage Gateway**について理解しているかが問われています。

Storage Gatewayを利用すると、オンプレミス環境からAmazon S3やAmazon EBSなどのAWSストレージをローカルストレージのように利用できます。

#### 正解

**A. AWS Storage Gateway**

オンプレミスとAWSストレージをシームレスに接続できます。

#### 不正解

**B. AWS Snowball**

物理デバイスを使ったデータ移行サービスです。

**C. Amazon S3**

ストレージサービスです。

**D. AWS Backup**

バックアップ管理サービスです。

---

### 試験のポイント

Storage GatewayとSnow Familyの違い

- Storage Gateway：ネットワーク経由で接続
- Snow Family：物理機器でデータ移行

この違いはCLFで頻出です。

---

## Q026

### 解説

この問題では、大容量データを物理デバイスで移行する**AWS Snow Family**について理解しているかが問われています。

Snow Family（Snowball、Snowcone、Snowmobile）は、ネットワーク回線では転送に時間がかかる大量データを、安全にAWSへ移行するためのサービスです。

#### 正解

**C. AWS Snow Family**

数TB〜PB級のデータ移行に適しています。

#### 不正解

**A. AWS Storage Gateway**

継続的なオンライン接続サービスです。

**B. AWS DataSync**

ネットワーク経由のデータ転送サービスです。

**D. Amazon S3 Transfer Acceleration**

S3へのインターネット転送を高速化する機能です。

---

### 試験のポイント

Snow Familyの使い分け

- Snowcone：小型・可搬性重視
- Snowball：一般的な大容量データ移行
- Snowmobile：超大容量（PB級）のデータ移行

CLFでは「物理デバイスによるデータ移行」と覚えれば十分です。

---

## Q027

### 解説

この問題では、マネージドファイルストレージサービスである**Amazon FSx**について理解しているかが問われています。

Amazon FSxは、Windows File Server、NetApp ONTAP、OpenZFS、Lustreなど、用途に応じたファイルシステムをマネージドサービスとして提供します。

#### 正解

**D. Amazon FSx**

特定のファイルシステムをAWS上で利用したい場合に適しています。

#### 不正解

**A. Amazon EFS**

Linux向け共有ファイルシステムです。

**B. Amazon EBS**

ブロックストレージです。

**C. Amazon S3**

オブジェクトストレージです。

---

### 試験のポイント

ファイルストレージの違い

- EBS：ブロックストレージ
- EFS：Linux共有ファイルシステム
- FSx：WindowsやLustreなど用途別ファイルシステム

用途で区別できるようにしましょう。

---

## Q028

### 解説

この問題では、FTP・FTPS・SFTPサーバーをマネージドで提供する**AWS Transfer Family**について理解しているかが問われています。

AWS Transfer Familyを利用すると、既存システムを大きく変更することなく、安全にAmazon S3やAmazon EFSへファイル転送を行えます。

#### 正解

**B. AWS Transfer Family**

企業間ファイル転送（B2B）やレガシーシステムとの連携でよく利用されます。

#### 不正解

**A. Amazon S3**

ストレージサービスです。

**C. AWS DataSync**

データ同期サービスです。

**D. AWS Storage Gateway**

オンプレミスとのストレージ連携サービスです。

---

### 試験のポイント

ファイル転送サービスの違い

- Transfer Family：FTP / FTPS / SFTP対応
- DataSync：高速データ同期
- Storage Gateway：ストレージ連携
- Snow Family：物理データ移行

「転送方法」の違いを理解すると問題を解きやすくなります。

---

## Q029

### 解説

この問題では、AWSのデータウェアハウスサービスである**Amazon Redshift**について理解しているかが問われています。

Amazon Redshiftは、大量のデータを高速に分析するために設計されたフルマネージド型のデータウェアハウス（DWH）です。BIツールと連携し、売上分析や経営分析などに利用されます。

#### 正解

**C. Amazon Redshift**

大量データの集計や分析を高速に実行できるサービスです。

#### 不正解

**A. Amazon RDS**

業務システム向けのリレーショナルデータベースです。

**B. Amazon DynamoDB**

NoSQLデータベースです。

**D. Amazon ElastiCache**

キャッシュサービスです。

---

### 試験のポイント

データベース系サービスの違い

- RDS：業務データ
- DynamoDB：NoSQL
- Redshift：分析用データウェアハウス

「分析」がキーワードならRedshiftを選びましょう。

---

## Q030

### 解説

この問題では、ビッグデータ処理サービスである**Amazon EMR（Elastic MapReduce）**について理解しているかが問われています。

Amazon EMRでは、Apache Hadoop、Apache Spark、Hiveなどのオープンソースフレームワークを利用して、大規模データを分散処理できます。

#### 正解

**A. Amazon EMR**

大量データを並列処理するためのサービスです。

#### 不正解

**B. Amazon Redshift**

分析用データウェアハウスです。

**C. AWS Glue**

ETLサービスです。

**D. Amazon Athena**

SQLによる分析サービスです。

---

### 試験のポイント

分析サービスの役割

- EMR：分散処理
- Glue：データ加工
- Athena：SQL分析
- Redshift：分析基盤

役割を区別できるようにしましょう。

---

## Q031

### 解説

この問題では、Amazon S3上のデータをSQLで分析できる**Amazon Athena**について理解しているかが問われています。

Athenaではデータベースを構築することなく、S3へ保存されたCSVやJSON、Parquetなどのファイルを直接SQLで検索できます。

#### 正解

**D. Amazon Athena**

サーバーを構築せずにS3データを分析できます。

#### 不正解

**A. Amazon RDS**

リレーショナルデータベースです。

**B. Amazon Redshift**

データウェアハウスです。

**C. Amazon EMR**

分散処理サービスです。

---

### 試験のポイント

Athenaの特徴

- S3を直接分析
- SQL利用
- サーバーレス
- クエリ実行量課金

CLFでは非常によく出題されます。

---

## Q032

### 解説

この問題では、ETLサービスである**AWS Glue**について理解しているかが問われています。

ETLとは、Extract（抽出）、Transform（変換）、Load（格納）の略です。

AWS Glueでは、データを収集・加工し、分析基盤へ取り込む処理を自動化できます。

#### 正解

**B. AWS Glue**

データ分析前の前処理を行うサービスです。

#### 不正解

**A. Amazon Athena**

SQL分析サービスです。

**C. Amazon EMR**

分散処理サービスです。

**D. Amazon Redshift**

データウェアハウスです。

---

### 試験のポイント

データ分析の流れ

- Glue：データを加工
- Redshift：保存
- Athena：分析

この流れで覚えると理解しやすくなります。

---

## Q033

### 解説

この問題では、リアルタイムデータを収集・処理する**Amazon Kinesis**について理解しているかが問われています。

Amazon Kinesisは、ログ、IoTデータ、センサーデータなどをリアルタイムで収集・処理・分析するためのサービスです。

#### 正解

**C. Amazon Kinesis**

ストリーミングデータをリアルタイムに処理できます。

#### 不正解

**A. Amazon SQS**

メッセージキューサービスです。

**B. Amazon SNS**

通知サービスです。

**D. AWS Glue**

ETLサービスです。

---

### 試験のポイント

リアルタイム処理

- Kinesis：リアルタイムデータ
- SQS：メッセージキュー
- SNS：通知

この違いは試験でも狙われます。

---

## Q034

### 解説

この問題では、BIサービスである**Amazon QuickSight**について理解しているかが問われています。

QuickSightでは、RedshiftやAthenaなどの分析結果をグラフやダッシュボードとして可視化できます。

#### 正解

**A. Amazon QuickSight**

AWSのBI（Business Intelligence）サービスです。

#### 不正解

**B. Amazon Athena**

SQL分析サービスです。

**C. AWS Glue**

ETLサービスです。

**D. Amazon EMR**

分散処理サービスです。

---

### 試験のポイント

分析系サービスの流れ

- Kinesis：収集
- Glue：加工
- Redshift：保存
- Athena：分析
- QuickSight：可視化

この一連の流れをイメージできるようになると、CLF試験だけでなくSAA試験でも役立ちます。

---

## Part2まとめ

このパートで学習したサービス

### コンテナ・アプリケーション
- Amazon ECS
- Amazon EKS
- AWS Fargate
- AWS Elastic Beanstalk
- AWS CloudFormation

### 運用・ハイブリッド
- AWS Systems Manager
- AWS Backup
- AWS Storage Gateway
- AWS Snow Family
- Amazon FSx
- AWS Transfer Family

### 分析・ビッグデータ
- Amazon Redshift
- Amazon EMR
- Amazon Athena
- AWS Glue
- Amazon Kinesis
- Amazon QuickSight

### 覚え方

**コンテナ**
- ECS：AWS独自
- EKS：Kubernetes
- Fargate：実行環境

**分析**
- Glue：加工
- Redshift：保存
- Athena：SQL分析
- QuickSight：可視化

この流れを理解しておくと、AWSサービス同士の役割を整理しやすくなります。

---

## Q035

### 解説

この問題では、AWS上で独立した仮想ネットワークを構築する**Amazon VPC（Virtual Private Cloud）**について理解しているかが問われています。

Amazon VPCでは、IPアドレス範囲やサブネット、ルートテーブル、インターネットゲートウェイなどを自由に設計し、安全なネットワークを構築できます。

#### 正解

**B. Amazon VPC**

AWS上に独自のネットワーク環境を構築するサービスです。

#### 不正解

**A. Route 53**

DNSサービスです。

**C. CloudFront**

CDNサービスです。

**D. API Gateway**

API公開サービスです。

---

### 試験のポイント

VPCはAWSネットワークの基本です。

- VPC＝ネットワーク
- Subnet＝ネットワークの区画
- Security Group＝インスタンス単位の通信制御

---

## Q036

### 解説

この問題では、オンプレミス環境とAWSを専用線で接続する**AWS Direct Connect**について理解しているかが問われています。

Direct Connectはインターネットを経由せずAWSへ接続するため、安定した通信品質と低遅延を実現できます。

#### 正解

**C. AWS Direct Connect**

専用線を利用してAWSへ接続するサービスです。

#### 不正解

**A. AWS VPN**

インターネット経由で暗号化通信を行います。

**B. AWS Transit Gateway**

VPC同士を接続するサービスです。

**D. Route 53**

DNSサービスです。

---

### 試験のポイント

Direct ConnectとVPN

- Direct Connect：専用線
- VPN：インターネット＋暗号化

---

## Q037

### 解説

この問題では、**AWS Site-to-Site VPN**について理解しているかが問われています。

VPNはインターネットを利用してオンプレミス環境とAWSを安全に接続するサービスです。

#### 正解

**A. AWS Site-to-Site VPN**

低コストでAWSと接続できます。

#### 不正解

**B. Direct Connect**

専用線です。

**C. CloudFront**

CDNです。

**D. VPC**

ネットワークです。

---

### 試験のポイント

VPNは

- インターネット利用
- IPsec暗号化
- 比較的安価

---

## Q038

### 解説

この問題では、複数のVPCやVPNを接続する**AWS Transit Gateway**について理解しているかが問われています。

Transit Gatewayを利用すると、多数のVPCをハブ＆スポーク型で接続でき、ネットワーク構成を簡素化できます。

#### 正解

**D. AWS Transit Gateway**

複数VPC接続を一元管理できます。

#### 不正解

**A. VPC Peering**

VPC同士を1対1で接続します。

**B. Direct Connect**

専用線接続です。

**C. Route 53**

DNSです。

---

### 試験のポイント

- VPC Peering：1対1
- Transit Gateway：多数接続

---

## Q039

### 解説

この問題では、複数AWSアカウントを管理する**AWS Organizations**について理解しているかが問われています。

Organizationsでは請求の統合やSCP（Service Control Policies）によるアクセス制御を実現できます。

#### 正解

**B. AWS Organizations**

企業全体でAWSアカウントを管理できます。

#### 不正解

**A. IAM**

単一アカウント管理です。

**C. Control Tower**

Organizationsの利用を支援するサービスです。

**D. CloudFormation**

IaCサービスです。

---

### 試験のポイント

Organizations

- アカウント管理
- SCP
- 請求統合

---

## Q040

### 解説

この問題では、マルチアカウント環境を迅速に構築する**AWS Control Tower**について理解しているかが問われています。

Control TowerはOrganizationsを利用しながら、ガードレールやアカウント作成を自動化します。

#### 正解

**C. AWS Control Tower**

AWSマルチアカウント環境の標準構成を短時間で構築できます。

#### 不正解

**A. Organizations**

基盤サービスです。

**B. IAM**

認証・認可です。

**D. Config**

構成管理です。

---

### 試験のポイント

- Organizations＝管理
- Control Tower＝初期構築・運用支援

---

## Q041

### 解説

この問題では、AWS環境の改善提案を行う**AWS Trusted Advisor**について理解しているかが問われています。

Trusted Advisorはコスト、セキュリティ、耐障害性などの観点から環境を分析し、改善点を提案します。

#### 正解

**A. AWS Trusted Advisor**

AWS公式のベストプラクティス診断サービスです。

#### 不正解

**B. CloudWatch**

監視サービスです。

**C. GuardDuty**

脅威検知です。

**D. Config**

構成管理です。

---

### 試験のポイント

キーワードは

- コスト最適化
- セキュリティ
- ベストプラクティス

---

## Q042

### 解説

この問題では、AWS Well-Architected Frameworkに基づいてワークロードを評価する**AWS Well-Architected Tool**について理解しているかが問われています。

このツールを利用すると、AWSが推奨する設計原則に照らしてシステムを評価できます。

#### 正解

**D. AWS Well-Architected Tool**

設計レビューを支援するサービスです。

#### 不正解

**A. Trusted Advisor**

運用改善提案です。

**B. Config**

構成管理です。

**C. CloudFormation**

IaCサービスです。

---

### 試験のポイント

Trusted Advisorとの違い

- Trusted Advisor：環境改善
- Well-Architected Tool：設計レビュー

---

## Q043

### 解説

この問題では、AWS Marketplaceについて理解しているかが問われています。

AWS Marketplaceでは、AWS上で利用できるソフトウェアやAMI、SaaS製品を購入・導入できます。

#### 正解

**B. AWS Marketplace**

AWS公式マーケットプレイスです。

#### 不正解

**A. AWS Support**

サポートサービスです。

**C. AWS Artifact**

監査レポートです。

**D. AWS IQ**

専門家紹介サービスです。

---

### 試験のポイント

Marketplace

- ソフトウェア購入
- AMI
- SaaS

---

## Q044

### 解説

この問題では、アプリケーション設定を安全に管理する**AWS AppConfig**について理解しているかが問われています。

AppConfigを利用すると、アプリケーションの設定値をデプロイせずに変更できます。

#### 正解

**A. AWS AppConfig**

設定値の安全な変更を実現します。

#### 不正解

**B. Systems Manager**

運用管理サービスです。

**C. CloudFormation**

IaCです。

**D. Elastic Beanstalk**

アプリケーションデプロイです。

---

### 試験のポイント

AppConfig＝設定変更

コード変更なしで設定を更新できます。

---

## Q045

### 解説

この問題では、コンテナWebアプリを簡単に公開できる**AWS App Runner**について理解しているかが問われています。

App RunnerはソースコードやコンテナイメージからWebアプリケーションを簡単に公開できるフルマネージドサービスです。

#### 正解

**C. AWS App Runner**

Webアプリ公開を簡単に実現できます。

#### 不正解

**A. ECS**

コンテナ管理です。

**B. Lambda**

サーバーレスです。

**D. EC2**

仮想サーバーです。

---

### 試験のポイント

App Runnerは

- Webアプリ
- コンテナ
- サーバー管理不要

---

## Q046

### 解説

この問題では、小規模システム向けサービスである**Amazon Lightsail**について理解しているかが問われています。

LightsailはVPSのようなシンプルな料金体系で、Webサイトやブログを簡単に構築できます。

#### 正解

**B. Amazon Lightsail**

初心者向けクラウドサービスです。

#### 不正解

**A. EC2**

柔軟性の高い仮想サーバーです。

**C. ECS**

コンテナサービスです。

**D. Lambda**

サーバーレスです。

---

### 試験のポイント

Lightsail

- VPS感覚
- 固定料金
- 初心者向け

---

## Q047

### 解説

この問題では、クラウド型デスクトップサービスである**Amazon WorkSpaces**について理解しているかが問われています。

WorkSpacesを利用すると、クラウド上のWindows/Linuxデスクトップへ安全にアクセスできます。

#### 正解

**A. Amazon WorkSpaces**

DaaS（Desktop as a Service）を提供します。

#### 不正解

**B. EC2**

仮想サーバーです。

**C. AppStream 2.0**

アプリ配信サービスです。

**D. Lightsail**

VPSサービスです。

---

### 試験のポイント

WorkSpaces＝デスクトップ

---

## Q048

### 解説

この問題では、アプリケーション配信サービスである**Amazon AppStream 2.0**について理解しているかが問われています。

AppStream 2.0では、デスクトップ全体ではなくアプリケーションのみをストリーミング配信できます。

#### 正解

**D. Amazon AppStream 2.0**

アプリケーション配信サービスです。

#### 不正解

**A. WorkSpaces**

デスクトップ配信です。

**B. EC2**

仮想サーバーです。

**C. Lightsail**

VPSです。

---

### 試験のポイント

- WorkSpaces：デスクトップ
- AppStream：アプリだけ

---

## Q049

### 解説

この問題では、ブラウザからAWS CLIを利用できる**AWS CloudShell**について理解しているかが問われています。

CloudShellではローカル環境へCLIをインストールすることなくAWS CLIを利用できます。

#### 正解

**B. AWS CloudShell**

ブラウザだけでCLI操作が可能です。

#### 不正解

**A. Cloud9**

IDEサービスです。

**C. EC2**

仮想サーバーです。

**D. Systems Manager**

運用管理です。

---

### 試験のポイント

CloudShell

- ブラウザ
- AWS CLI
- インストール不要

---

## Q050

### 解説

この問題はAWSサービス全体の総まとめです。

CLF試験では「サービス名」だけではなく、「どのような課題を解決するサービスなのか」が問われます。サービスの分類を理解しておくことで、似たサービスとの違いも判断しやすくなります。

#### 正解

**D. サービスの役割を理解し、適切な用途で選択すること**

AWSでは目的に応じて適切なサービスを組み合わせることが重要です。

#### 不正解

**A. すべてEC2で構築する**

用途に応じたサービス選択が重要です。

**B. サービス名だけ覚える**

役割まで理解する必要があります。

**C. 料金だけで判断する**

機能や要件も考慮する必要があります。

---

### 試験のポイント

CLFで最重要となるサービス分類

- コンピューティング（EC2、Lambda、ECS、EKS）
- ストレージ（S3、EBS、EFS、FSx）
- データベース（RDS、Aurora、DynamoDB、Redshift）
- ネットワーク（VPC、Route 53、ELB、CloudFront）
- 分析（Athena、Glue、EMR、QuickSight）
- セキュリティ（IAM、KMS、GuardDuty、CloudTrail）
- 運用管理（CloudFormation、Systems Manager、Backup）

**試験ではサービス名を見た瞬間に「何をするサービスか」を一言で説明できるレベルを目指しましょう。**

---
