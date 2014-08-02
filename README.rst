==============
 やる気フック
==============

Facebook, Twitter, はてなブックマークなどの「やる気がない時に開かれることの多いサイト」を開いた時に、
「やる気を出す」か「5分だけ見る」かの選択を迫るダイアログを表示するChrome拡張です。

「5分だけ見る」を選択すると5分後にまたダイアログが開きます。だらだら見続けて気がついた時には予想外に時間が過ぎている現象を防げます。
「やる気を出す」を選ぶと「やる気のでるアドバイス」を開きます。(http://www.nhiro.org/yaruki/)


インストール
============

Chrome Web Storeからインストールできます。 https://chrome.google.com/webstore/detail/%E3%82%84%E3%82%8B%E6%B0%97%E3%83%95%E3%83%83%E3%82%AF/dfkndiabiangeeaioieoipmdkhmgmhgg


未実装のアイデア
================

- フック対象をユーザが設定できるようにする
- 「5分だけ見る」を選んだ回数を集計する
- アイコンにパイチャートを出して、5分間の休憩時間がいくら残ってるか可視化
- アイコンからのポップアップで集計データを可視化

デザイン
========

5分間の休憩時間は、ドメインやページごとではなく、ブラウザ全体で共有されています。
これは、この拡張が扱っているものが個別のサービスやページではなく、ブラウザの前に座っている「1人の人間」だからです。
なので例えば、人間がTwitterを開いて「今から5分間休憩とする」と意思決定し、その1分後にFacebookを開いた場合は、休憩期間継続中と考え、ダイアログを表示しません。


自分の行動を観察
================

拡張機能→やる気フック→バックグラウンドページ とたどることで自分の行動のログを見ることができます。

  1:16:28: opened www.facebook.com, in_break: false
  1:16:31: start timer
  1:17:36: opened twitter.com, in_break: true
  1:18:51: opened b.hatena.ne.jp, in_break: true
  1:21:31: timeout
  1:21:37: yaruki
  1:22:08: opened www.facebook.com, in_break: false
  1:22:11: start timer


License
=======

MIT License http://opensource.org/licenses/MIT

Icons are under GPL
http://www.iconarchive.com/show/elementary-icons-by-danrabbit/Apps-fusion-icon-icon.html

