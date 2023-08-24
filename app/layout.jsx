import "@styles/globals.css";
import Provider from "@components/provider";
import SignIn from "@components/signin";
import ResponsiveAppBar from '@components/navbar'
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
          <Provider>
          <ResponsiveAppBar/>
          <SignIn />

            {children}
            
            </Provider>
        </main>
      </body>
    </html>
  );
}
