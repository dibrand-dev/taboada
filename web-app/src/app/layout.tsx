import type { Metadata } from "next";
import { Tenor_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const tenorSans = Tenor_Sans({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-tenor" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "Dra. María Cecilia Taboada | Oftalmología de Excelencia",
  description: "Clínica de oftalmología de alta complejidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${tenorSans.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col selection:bg-secondary-container selection:text-on-secondary-container bg-surface-container-lowest text-on-surface">
        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
