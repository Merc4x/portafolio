import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejandro Mercado | Full Stack Developer",
  description: "Portafolio profesional de Alejandro Mercado (Merc4x) — Estudiante de Ingeniería de Software y Desarrollador Full Stack.",
  keywords: ["Alejandro Mercado", "Merc4x", "Full Stack Developer", "Ingeniería de Software", "React", "Next.js", "Python", "Spring Boot"],
  authors: [{ name: "Alejandro Mercado", url: "https://github.com/Merc4x" }],
  openGraph: {
    title: "Alejandro Mercado | Full Stack Developer",
    description: "Estudiante de Ingeniería de Software & Desarrollador Full Stack.",
    url: "https://merc4x.github.io",
    siteName: "Alejandro Mercado Portfolio",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="bg-[#08090c] text-[#e1e4ea] min-h-screen antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
