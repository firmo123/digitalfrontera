import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import FilmGrain from "@/components/ui/FilmGrain";

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Digital Frontera | Web Design for Small Businesses",
    template: "%s | Digital Frontera",
  },
  description:
    "Simple, professional websites for small businesses across the North East. Built by someone who understands your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-body">
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FilmGrain />
      </body>
    </html>
  );
}
