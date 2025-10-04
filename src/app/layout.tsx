import type { Metadata } from "next";
import { Noto_Sans, Google_Sans_Code } from "next/font/google";
import "./globals.css";
import { Header } from "./Components/Header";
import { ConditionalFooter } from "./Components/conditionalFooter";

const notoSans = Noto_Sans({
  variable: "--font-notosans",
  weight: "400",
  subsets: ["latin"],
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-googleSansCode",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VisagismWeb",
  description:
    "Aqui a gente te transforma na sua melhor versão, venha nos conhecer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`flex flex-col min-h-screen ${
          (notoSans.variable, googleSansCode.variable)
        } ${(notoSans.variable, googleSansCode.variable)} antialiased`}
      >
        <Header />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
