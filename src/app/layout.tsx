import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Dock } from "@/components/layout/Dock";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { MouseGlow } from "@/components/layout/MouseGlow";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { PageTransition } from "@/components/layout/PageTransition";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="mesh-bg relative min-h-full flex flex-col bg-background text-foreground">
        <AmbientBackground />
        <MouseGlow />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10 flex-1 pb-24 md:pb-28">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Dock />
        <BackToTop />
      </body>
    </html>
  );
}
