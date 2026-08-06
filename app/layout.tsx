import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valeryan Ramadhan — Frontend Developer",
  description:
    "Portfolio of Valeryan Ramadhan, a frontend developer crafting fast, accessible, and thoughtfully animated web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="font-body antialiased selection:bg-accent selection:text-bg">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
