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
  description: "Portafolio profesional de Alejandro Mercado (Merc4x) — Estudiante de 4.° semestre de Ingeniería de Software en el Tecnológico de Antioquia (TdeA) y Desarrollador Full Stack.",
  keywords: ["Alejandro Mercado", "Merc4x", "TdeA", "Tecnológico de Antioquia", "Ingeniería de Software", "Full Stack Developer", "React", "Next.js", "Python", "Spring Boot"],
  authors: [{ name: "Alejandro Mercado", url: "https://github.com/Merc4x" }],
  openGraph: {
    title: "Alejandro Mercado | Full Stack Developer",
    description: "Estudiante de 4.° semestre de Ingeniería de Software en TdeA & Desarrollador Full Stack.",
    url: "https://merc4x.github.io/portafolio",
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
