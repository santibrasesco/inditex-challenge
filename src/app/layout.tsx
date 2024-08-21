import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CharacterProvider } from "./(ui)/context/CharacterContext";
import { Header } from "./(ui)/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel",
  description: "Marvel characters search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CharacterProvider>
          <Header />
          {children}
        </CharacterProvider>
      </body>
    </html>
  );
}
