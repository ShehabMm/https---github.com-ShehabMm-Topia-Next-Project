import "@styles/globals.css";
export const metadata = {
  title: "Topia",
  description: "Discover and share AI prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main"></div>
        <div className="gradient"></div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
