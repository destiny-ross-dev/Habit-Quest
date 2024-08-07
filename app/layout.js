import { cinzel } from "./lib/fonts";
import "./reset.css";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
import Footer from "./components/Footer";
import { Providers } from "./_contexts/Providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/7100b798d1.js"></Script>
      <body className={`${cinzel.className} flex flex-col min-h-[100vh]`}>
        <Providers>
          <Header />
          <div className="flex-1 p-8 bg-green text-white">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
