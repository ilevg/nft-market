import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/my-tailwind.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { CollectionsProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Best NFT Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-800`}>
        <Header />
        <CollectionsProvider>
          {children}
        </CollectionsProvider>
        <Footer />
      </body>
    </html>
  );
}
