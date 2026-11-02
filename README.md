# GRID LAB Next.js テスト版

Node.js 20.9 以上をインストールして、プロジェクトフォルダで以下を実行してください。

```bash
npm install
npm run dev
```

http://localhost:3000 を開きます。

`app/page.jsx` から `public/substation_test.html` を iframe で表示しています。
既存のHTMLとJavaScriptをそのまま使うための暫定構成です。将来の機能拡張では React コンポーネントへの移行を推奨します。
