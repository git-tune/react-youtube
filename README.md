# 概要 
Reduxなどのthird party moduleを使わずに  
最新のreact開発手法である、react hooksを使用してglobal state管理を実現  
React + YouTube APIを使ったYouTubeクローンアプリ  
https://git-tune.github.io/react-youtube/

# 説明
* Functional Component中心のReact開発  
* React Router Domによるページ遷移  
* useStateを使ったLocal State管理  
* useReducer + ContextAPI + useContextを使ったGlobal State管理  
Storeの呼び出しにはuseContextフックを使用  
Storeの更新にはdispatch関数を使用  
  
* CSS Moduleパターンを使ったスタイリング手法  
* Promise.allによる最適化  
動画の切り替えと関連動画の更新に遅延が生じるため、これを最適化  
  
* 縦横比(アスペクト比)を保持したレスポンシブル対応  
