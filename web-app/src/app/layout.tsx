import type { Metadata } from "next";
import { Tenor_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <link href="https://lh3.googleusercontent.com/aida-public/AB6AXuA_O5KHVHjc7_uXKWhCErQj_oVuCUEN3wOQJFQGBYYfstFcVecO63oVw0knHAiXKj11bql7zb0Bw4TOIZHEoGtecB0xTcuZlrlmXhFxRd0V5hfnjBot9U6RSTGHXQA1BYQZy2gx_WSekstViAnrjBrN7vWO1srwwtPv8eAMw7aiHHhKSZ6hS2XJTP2aSErtibJmMNJawsGYXMPYcnLx0PCTnqC5TpFCSFPEhNtyrff_MOZ2-EXQTMYDt8uAE1GrLhmsbQ" rel="icon" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.WTT_API = {
                config: {
                  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiI3Yjk4MTMwOS1iMDhiLTRlZDgtYjgwNi02NThkNmQzNTQ3NTIiLCJjb25uZWN0aW9uSWQiOiJmNWE4MmQzYi00NjVjLTRhZmQtYTRhMC1hYjllODBlMWQwNmQiLCJpYXQiOjE3ODM5NjMwODl9.vZcma-aMe0UKDXOXXz61MOxVBF1UbhFN6GZWidLWRZo",
                  title: "¡Bienvenido al soporte!", // a title to be presented on the widget
                  subtitle: "¿Cómo podemos ayudar?", // (optional) a subtitle to be presented on the widget
                  position: "left", // (optional) values: left or right / default: left
                  initialMessages: ["Hola, ¿cómo podemos ayudarte?"], // (optional) values: an array of messages to be shown when the contact open the widget for the first time
                  toggleButtonEnabled: true, // (optional) enables a toggle button that opens/close the widget
                  toggleButtonBgColor: "#42a5f5", // (optional) the html background color of the entire chat widget
                  isAudioEnabled: false // enable the option to the widget user send audio messages
                }
                // You can contact our Support team for more advanced configurations.
              };
            `,
          }}
        />
        <script async crossOrigin="anonymous" src="https://public.whaticket.com/widget/production/wtt-widget-default.js"></script>
      </head>
      <body className="min-h-full flex flex-col selection:bg-secondary-container selection:text-on-secondary-container bg-surface-container-lowest text-on-surface">
        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
