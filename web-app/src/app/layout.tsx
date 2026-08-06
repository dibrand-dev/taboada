import type { Metadata } from "next";
import Script from "next/script";
import { Tenor_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SchemaMarkup, getBaseKnowledgeGraphSchema } from "@/components/SchemaMarkup";

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
  metadataBase: new URL('https://draceciliataboada.com.ar'),
  title: {
    default: 'Dra. María Cecilia Taboada | Oftalmología de Alta Complejidad',
    template: '%s | Dra. María Cecilia Taboada'
  },
  description: 'Clínica oftalmológica de excelencia. Especialistas en salud visual, medicina preventiva, tecnología de precisión y atención personalizada.',
  openGraph: {
    title: 'Dra. María Cecilia Taboada | Oftalmología Premium',
    description: 'Medicina preventiva y atención oftalmológica de alta complejidad con tecnología de última generación.',
    url: 'https://draceciliataboada.com.ar',
    siteName: 'Dra. María Cecilia Taboada',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. María Cecilia Taboada | Oftalmología Premium',
    description: 'Medicina preventiva y atención oftalmológica de alta complejidad.',
  },
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
        <SchemaMarkup schema={getBaseKnowledgeGraphSchema()} />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TS78XHGM');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col selection:bg-secondary-container selection:text-on-secondary-container bg-surface-container-lowest text-on-surface">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TS78XHGM"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
