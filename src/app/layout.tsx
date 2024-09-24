import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./Provider";
import Nav from "@/components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aung Myo Aye's Portfolio",
  description: "My Loving Creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          <div className="max-w-8xl mx-auto">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
