import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090c" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  title: "Alejandro Mercado | Software Engineer & Full Stack Developer",
  description: "Portafolio profesional de Alejandro Mercado (Merc4x) — Estudiante de 4.° semestre de Ingeniería de Software en el Tecnológico de Antioquia (TdeA) y Desarrollador Full Stack.",
  keywords: ["Alejandro Mercado", "Merc4x", "TdeA", "Tecnológico de Antioquia", "Ingeniería de Software", "Full Stack Developer", "React", "Next.js", "Python", "Spring Boot"],
  authors: [{ name: "Alejandro Mercado", url: "https://github.com/Merc4x" }],
  openGraph: {
    title: "Alejandro Mercado | Software Engineer & Full Stack Developer",
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
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#f8fafc] text-neutral-900 dark:bg-[#08090c] dark:text-[#e1e4ea] min-h-screen antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
