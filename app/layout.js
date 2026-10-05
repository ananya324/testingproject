export const metadata = { title: "Deploy test" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#0f1b2d", color: "#e8eef7" }}>
        {children}
      </body>
    </html>
  );
}
