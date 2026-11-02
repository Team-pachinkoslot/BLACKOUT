export const metadata = {
  title: 'GRID LAB | 変電所サイバー演習',
  description: '架空の変電所を舞台にしたサイバーセキュリティ演習',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
