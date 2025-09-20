import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { Saira_Condensed } from "next/font/google";
import "./globals.css";
import "@/lib/icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TagsProvider } from "@/context/TagsContext";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sairaCondensed = Saira_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rapkology",
  description: "Türkçe rap ve dünya müzik haberleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} antialiased flex flex-col min-h-screen`}
      >
        <TagsProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </TagsProvider>

      </body>
    </html>
  );
}
