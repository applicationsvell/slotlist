# シサミル

パチスロの設定示唆・演出をすぐ引ける早見帳です。名前は「示唆を見る」から。いまは「L青春ブタ野郎はバニーガール先輩の夢を見ない（青ブタ）」を収録しています。

## 使うURL

https://applicationsvell.github.io/slotlist/

## ホーム画面に追加する

- iPhone：Safariで上のURLを開く →「共有」→「ホーム画面に追加」
- Android：Chromeで開く → 右上のメニュー →「ホーム画面に追加」（または「アプリをインストール」）

ホーム画面のアイコンから開くと、全画面のアプリとして動きます。一度開けば、電波が弱いホールの中でも見られます。新しい内容は、電波があるときに開き直すと入ります。

## 画像の出典

画面写真は [一撃（1geki）の青ブタ解析ページ](https://1geki.jp/slot/l_ao_buta/) から、出典リンクを付けて引用しています。ちょんぼりすた・なな徹はリンクのみで、画像は使っていません。

## 開発メモ

- `src/page.html`：ページの本体。claude.ai のアーティファクト版もこのファイルから公開する（画像は `img/` を一緒に送る）
- `node src/build-app.js`：`src/page.html` から、ルートの `index.html`・`manifest.webmanifest`・`sw.js` を作り直す。ページや画像を変えたら必ず実行する（`sw.js` の版が変わり、アプリに新しい内容が届く）
- `node src/icon.js`：`icons/` のアイコンを作り直す（Playwright が必要）
- アプリ版では `window.APP_MODE` が true になる。アーティファクト版との違いは「台の情報」の案内文と、時計などの帯の色だけ
- 公開は GitHub Pages（Settings → Pages → Deploy from a branch）
