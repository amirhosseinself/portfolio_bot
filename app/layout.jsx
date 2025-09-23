// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Telegram Bot Test",
  description: "Testing my Next.js app with bot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body style={{ fontFamily: "sans-serif", padding: "2rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1>سلام! 👋</h1>
        </header>
        <main>{children}</main>
        <footer
          style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}
        >
          تست
        </footer>
      </body>
    </html>
  );
}
