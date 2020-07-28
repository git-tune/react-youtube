# 概要 
Reduxなどのthird party moduleを使わずに、  
最新のreact開発手法である、react hooksを使用してglobal state管理を実現。  
React + YouTube APIを使ったYouTubeクローンアプリをSPAとして実装。  
https://git-tune.github.io/react-youtube/

# 説明
* Functional Component中心のReact開発  
* React Router Domによるページ遷移  
* useStateを使ったLocal State管理  
* useReducer + ContextAPI + useContextを使ったGlobal State管理  
* CSS Moduleパターンを使ったスタイリング手法  
* Promise.allによる最適化  
* 縦横比(アスペクト比)を保持したレスポンシブル対応  

# 補足
関数コンポーネントについて  
* [コンポーネントと props](https://ja.reactjs.org/docs/components-and-props.html)  
* [関数コンポーネントはクラスとどう違うのか?](https://overreacted.io/ja/how-are-function-components-different-from-classes/)  

React Hooksについて  
* [フック API リファレンス](https://ja.reactjs.org/docs/hooks-reference.html)  
* [ベストな手法は？ Reactのステート管理方法まとめ](https://ics.media/entry/200409/)  
* [ReactでReduxを使わずにFluxパターンを実装する](https://qiita.com/zakioooo/items/2a9aa7c7d370765a3af0)  
* [useReducerの本質：良いパフォーマンスのためのロジックとコンポーネント設計](https://qiita.com/uhyo/items/cea1bd157453a85feebf)

SPA(Single Page Application)について  
* [SPA(Single Page Application)ってなに？](https://digitalidentity.co.jp/blog/creative/about-single-page-application.html)  
* [シングルページアプリケーション（SPA）の導入メリット＆デメリット](https://www.oro.com/ja/technology/001/)  
* [SPA(Single Page Application)の基本](https://qiita.com/takanorip/items/82f0c70ebc81e9246c7a)  
* [React Router](https://reactrouter.com/web/guides/quick-start)  
* [ささっと学ぶReact Router v4](https://the2g.com/2789)  

CSS Muduleパターンについて  
* [モジュール化についてしっくりと理解できないので、ちゃんと考えてみました](https://www.yoheim.net/blog.php?q=20130602)  

Promiss.all()について
* [Promise.all() MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)  
* [Promise.all()で非同期処理を並列に捌く](https://common-engineer.com/javascript/promise-all)  

Youtube APIの登録について  
* [YouTube Data API の概要](https://developers.google.com/youtube/v3/getting-started?hl=ja)  
* [YouTube API APIキーの取得方法](https://qiita.com/chieeeeno/items/ba0d2fb0a45db786746f)  
