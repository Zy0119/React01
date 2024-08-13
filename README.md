## React 学習入門

## node_modules
プロジェクトの依存パッケージが格納されるフォルダです。

## public
 静的ファイル（画像、フォント、HTML ファイルなど）が含まれるフォルダです。index.html などのファイルがここに含まれ、アプリケーションの公開されるコンテンツを含みます`。

## src
 プロジェクトのソースコードが含まれるフォルダです。ここにはアプリケーションのメインコードが含まれております。

## package.json 
記載された依存関係に基づいて、自動的に管理されます。

## README.md
 プロジェクトの説明やセットアップ手順、使用方法などが記載されるマークダウンファイルです。プロジェクトの概要や使い方についての情報を提供します。





## JSX javascript と xml
 < html   コードを解析するときに < が見つかった場合、HTML として解析されます。
{ javascript  コードを解析するときに { が見つかった場合、javascript として解析されます。

##　命名規則
1. コンポーネント名
パスカルケース（PascalCase）を使用します。各単語の最初の文字を大文字にします。
例: MyComponent, UserProfile, HeaderNav
2. 関数名
キャメルケース（camelCase）を使用します。最初の単語は小文字で始まり、次の単語の最初の文字を大文字にします。
例: handleClick, fetchData, updateState
3. 変数名
キャメルケース（camelCase）を使用します。
例: userName, isLoggedIn, formData
4. ファイル名
コンポーネントファイル名には パスカルケース（PascalCase）を使用することが一般的です。これはコンポーネント名と一致させるためです。
例: MyComponent.js, UserProfile.jsx
関数やユーティリティファイルの場合、キャメルケース（camelCase）や スネークケース（snake_case）を使用することがあります。
例: fetchData.js, userHelpers.js
5. CSS クラス名
CSS クラス名には スネークケース（snake_case）や ケバブケース（kebab-case）を使用することが多いです。
例: user-profile, header-nav
6. Props 名
キャメルケース（camelCase）を使用します。
例: userName, isLoggedIn, onClickHandler
7. 状態管理の変数名
状態管理の変数には、キャメルケース（camelCase）を使用し、状態を表すことが明確になるようにします。
例: userData, loadingState, errorMessage
8. コンポーネントのファイル構造
コンポーネントを含むフォルダーは、通常コンポーネント名と同じ名前にします。
例: UserProfile/UserProfile.js