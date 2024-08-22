import type { Metadata } from "next";
import "./globals.css";
import { CharacterProvider } from "./(ui)/context/CharacterContext";
import { Header } from "./(ui)/components/header/Header";

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
      <body>
        <CharacterProvider>
          <Header />
          {children}
        </CharacterProvider>
      </body>
    </html>
  );
}
