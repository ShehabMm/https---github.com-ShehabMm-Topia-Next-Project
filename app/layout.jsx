import "@styles/globals.css"; 
import Nav from "@components/nav"
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

        <main className="app">
          <Nav/>
          {children}</main>
      </body>
    </html>
  );
}
