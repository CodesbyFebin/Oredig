import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "OREDIG | Ore Mining Voxel Game on Solana",
  description: "Browser-based high-stakes voxel metaverse and ore-mining game built natively on Solana. Mine blocks, survive the frontier, and own on-chain assets.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "OREDIG | Ore Mining Voxel Game on Solana",
    description: "Browser-based high-stakes voxel metaverse and ore-mining game built natively on Solana.",
    url: "https://oredig.com",
    siteName: "OREDIG",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "OREDIG — Ore Mining Voxel Game on Solana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OREDIG | Ore Mining Voxel Game on Solana",
    description: "Mine. Survive. Own on-chain assets.",
    images: ["/og.jpg"],
  },
  themeColor: "#010409",
};

import { WalletContextProvider } from "@/components/providers/WalletContextProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased bg-[#010409] text-[#e8f5e8] overflow-x-hidden">
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
