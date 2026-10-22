"use client";

import { useState, useEffect } from "react";
import {
  Terminal,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Mail,
  Phone,
  Check,
  Copy,
  Sparkles,
  User,
  Briefcase,
  GraduationCap,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  Menu,
  X,
  Sun,
  Moon,
  Wrench,
  Zap,
  Radio,
} from "lucide-react";

// Base path helper for GitHub Pages repository deployment (/portafolio)
const basePath = process.env.NODE_ENV === "production" ? "/portafolio" : "";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.05 3.67C16.59 3.67 20.28 7.36 20.28 11.9C20.28 16.44 16.59 20.13 12.05 20.13C10.58 20.13 9.17 19.74 7.94 19.01L7.65 18.84L4.54 19.66L5.37 16.63L5.18 16.33C4.39 15.07 3.97 13.51 3.97 11.9C3.97 7.36 7.66 3.67 12.05 3.67M9.16 7.23C8.97 7.23 8.79 7.24 8.64 7.42C8.42 7.64 7.78 8.24 7.78 9.47C7.78 10.7 8.68 11.88 8.8 12.05C8.93 12.22 10.57 14.73 13.08 15.82C13.68 16.08 14.15 16.24 14.51 16.35C15.12 16.54 15.67 16.52 16.11 16.45C16.6 16.38 17.62 15.83 17.83 15.24C18.04 14.65 18.04 14.15 17.98 14.04C17.92 13.93 17.75 13.87 17.5 13.74C17.25 13.62 16.02 13.01 15.79 12.93C15.56 12.84 15.4 12.8 15.23 13.05C15.06 13.3 14.58 13.87 14.43 14.04C14.28 14.21 14.14 14.23 13.89 14.11C13.64 13.98 12.83 13.72 11.87 12.86C11.12 12.19 10.61 11.37 10.46 11.12C10.31 10.87 10.44 10.73 10.57 10.61C10.68 10.5 10.82 10.32 10.95 10.17C11.08 10.02 11.12 9.92 11.21 9.75C11.3 9.58 11.25 9.43 11.19 9.31C11.13 9.19 10.64 7.98 10.43 7.48C10.23 7 10.03 7.07 9.87 7.06C9.72 7.05 9.55 7.05 9.38 7.05L9.16 7.23Z" />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  // Track scroll progress for the interactive top HUD bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for smooth scroll-reveal animations as the user navigates down
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alejo.quiroz2534@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#08090c] dark:text-[#e1e4ea] selection:bg-blue-600 selection:text-white transition-colors duration-300 relative overflow-x-hidden font-sans">
      {/* High-fidelity ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-400/20 via-indigo-300/10 to-transparent dark:from-cyan-500/10 dark:via-indigo-500/5 dark:to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-sky-200/40 dark:bg-blue-600/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/35 dark:bg-purple-600/5 blur-3xl rounded-full" />
      </div>

      {/* TOP FLOATING HUD NAVIGATION BAR (SIEMPRE VISIBLE Y FIJO AL HACER SCROLL) */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/85 dark:bg-[#08090c]/85 border-b border-slate-200/80 dark:border-white/10 shadow-xs transition-colors overflow-hidden">
        {/* Barra interactiva superior de progreso de scroll */}
        <div
          className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 transition-all duration-150 ease-out z-10"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand with blue beacon */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 group-hover:scale-125 transition-transform shadow-xs" />
            <span className="font-mono text-sm tracking-wider font-bold text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              MERC4X<span className="text-blue-600 dark:text-blue-500">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav Links: HUD Central Isla Bien Organizada */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-neutral-300 shadow-2xs">
            <a
              href="#sobre-mi"
              className="px-3.5 py-1.5 rounded-full hover:bg-white dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white hover:shadow-2xs transition-all"
            >
              Sobre mí
            </a>
            <a
              href="#proyectos"
              className="px-3.5 py-1.5 rounded-full hover:bg-white dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white hover:shadow-2xs transition-all"
            >
              Proyectos
            </a>
            <a
              href="#enfoque"
              className="px-3.5 py-1.5 rounded-full hover:bg-white dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white hover:shadow-2xs transition-all"
            >
              Enfoque
            </a>
            <a
              href="#stack"
              className="px-3.5 py-1.5 rounded-full hover:bg-white dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white hover:shadow-2xs transition-all"
            >
              Tecnologías
            </a>
            <a
              href="#contacto"
              className="px-3.5 py-1.5 rounded-full hover:bg-white dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white hover:shadow-2xs transition-all"
            >
              Contacto
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Dark / Light Mode Switcher with crisp pill */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 transition-colors border border-slate-200 dark:border-white/5 shadow-2xs"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com/Merc4x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 transition-colors border border-slate-200 dark:border-white/5 shadow-2xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me/573116425806"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all shadow-md shadow-emerald-500/20 active:scale-95"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 transition-colors border border-slate-200 dark:border-white/5"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0c0e14]/95 backdrop-blur-2xl px-5 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-2 font-medium text-base text-slate-800 dark:text-neutral-200">
              <a
                href="#sobre-mi"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                Sobre mí
              </a>
              <a
                href="#proyectos"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                Proyectos de Ingeniería
              </a>
              <a
                href="#enfoque"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                Enfoque &amp; Metodología
              </a>
              <a
                href="#stack"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                Arsenal Tecnológico
              </a>
              <a
                href="#contacto"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                Contacto
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <a
                href="https://wa.me/573116425806"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA CON PADDING TOP ADECUADO PARA EL HUD FIJO */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-24">
        {/* HERO SECTION: FOTO COMO ELEMENTO PRINCIPAL Y PROTAGÓNICO */}
        <section className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-center space-y-6 sm:space-y-7 pb-16 sm:pb-20 border-b border-slate-200/80 dark:border-white/5">
          {/* 1. TU FOTO DE PERFIL ES LO PRIMERO QUE SE VE */}
          <div className="flex flex-col items-center justify-center pt-2 sm:pt-4">
            <div className="relative group">
              {/* Glowing aura frame (soft sky/blue in light mode, cyan/indigo in dark mode) */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-sky-400/25 dark:from-blue-600/30 dark:via-indigo-600/25 dark:to-cyan-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Main Photo Container with crisp shadow */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-white dark:bg-neutral-900 border-2 border-slate-200 dark:border-white/20 shadow-xl shadow-slate-200/70 dark:shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <img
                  src={`${basePath}/images/alejandro-mercado.jpg`}
                  alt="Alejandro Mercado"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating status beacon */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white dark:bg-[#0f1117] border border-slate-200 dark:border-white/15 text-xs font-mono font-medium text-slate-800 dark:text-neutral-200 shadow-md shadow-slate-200/60 dark:shadow-black/50">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Disponible para trabajar</span>
              </div>
            </div>
          </div>

          {/* 2. DATOS DE ESTUDIO Y UBICACIÓN */}
          <div className="pt-1">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200/80 dark:border-blue-500/20 text-blue-700 dark:text-cyan-400 text-xs font-mono font-medium shadow-2xs">
              <span>Ingeniería de Software &bull; 4.° Semestre en TdeA &bull; Medellín, CO</span>
            </div>
          </div>

          {/* 3. NOMBRE Y TITULAR DE IMPACTO ORIGINAL */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.1]">
              Hola, soy Alejo.
            </h1>
            <p className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent leading-[1.2]">
              Arquitectura de software con precisión, cadencia y flow.
            </p>
          </div>

          {/* 4. BIO SUCINTA */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Desarrollador Full Stack enfocado en la construcción de herramientas de escritorio con IA de audio, microservicios y plataformas web de alto rendimiento con <strong className="text-slate-900 dark:text-white font-semibold">Python, Next.js, Flask</strong> y <strong className="text-slate-900 dark:text-white font-semibold">Spring Boot</strong>.
          </p>

          {/* 5. BOTONES DE ACCIÓN RÁPIDA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 max-w-md mx-auto sm:max-w-none">
            <a
              href="#proyectos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 active:scale-95 text-center"
            >
              <span>Explorar mis proyectos</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/Merc4x"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold text-sm transition-all border border-slate-300 dark:border-white/10 shadow-sm active:scale-95 text-center"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-neutral-400" />
            </a>
          </div>
        </section>

        {/* METRICS & VALUE MATRIX STRIP */}
        <section className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out py-12 border-b border-slate-200/80 dark:border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] space-y-1 text-center sm:text-left hover:border-blue-300 dark:hover:border-white/20 transition-all">
              <div className="text-xs font-mono text-blue-700 dark:text-cyan-400 font-semibold">Educación Formal</div>
              <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white font-mono">4.° Semestre</div>
              <div className="text-xs text-slate-500 dark:text-neutral-400">Ingeniería en TdeA</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] space-y-1 text-center sm:text-left hover:border-blue-300 dark:hover:border-white/20 transition-all">
              <div className="text-xs font-mono text-blue-700 dark:text-cyan-400 font-semibold">Desktop AI</div>
              <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white font-mono">60 FPS HUD</div>
              <div className="text-xs text-slate-500 dark:text-neutral-400">WASAPI Loopback Audio</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] space-y-1 text-center sm:text-left hover:border-blue-300 dark:hover:border-white/20 transition-all">
              <div className="text-xs font-mono text-blue-700 dark:text-cyan-400 font-semibold">Arquitectura</div>
              <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white font-mono">Full Stack</div>
              <div className="text-xs text-slate-500 dark:text-neutral-400">Python + Next.js + Spring</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] space-y-1 text-center sm:text-left hover:border-blue-300 dark:hover:border-white/20 transition-all">
              <div className="text-xs font-mono text-blue-700 dark:text-cyan-400 font-semibold">Ubicación</div>
              <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white font-mono">Medellín</div>
              <div className="text-xs text-slate-500 dark:text-neutral-400">Colombia (UTC-5)</div>
            </div>
          </div>
        </section>

        {/* SECTION: SOBRE MÍ (DISEÑO EDITORIAL 2 COLUMNAS INSPIRADO) */}
        <section id="sobre-mi" className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out py-16 sm:py-24 border-b border-slate-200/80 dark:border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Columna Izquierda: Eyebrow + Gran Titular */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-sm font-semibold tracking-wide text-blue-600 dark:text-cyan-400">
                Sobre mí
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                Aprendo rápido, entrego con cuidado.
              </h2>
            </div>

            {/* Columna Derecha: Párrafos de biografía + Badges */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p>
                Desarrollador de software con enfoque autodidacta, técnico en Desarrollo de Software y estudiante de Ingeniería de Software en el <strong className="text-slate-900 dark:text-white font-semibold">Tecnológico de Antioquia (TdeA)</strong>. Construyo aplicaciones de punta a punta —del diseño de la interfaz a la API y la base de datos— y tengo experiencia en el sector deportivo. Me caracterizo por mi responsabilidad, compromiso y capacidad de adaptación.
              </p>
              <p>
                Busco seguir creciendo en un equipo donde pueda aportar mis habilidades técnicas y de trabajo en equipo, y ampliar mis conocimientos en distintas áreas de la programación.
              </p>

              {/* Badges de píldora idénticos a la referencia */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-neutral-300 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-neutral-400" />
                  <span>Medellín, Colombia</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-neutral-300 shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-500 dark:text-neutral-400" />
                  <span>Ingeniería de Software &bull; TdeA</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-neutral-300 shadow-2xs">
                  <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-neutral-400" />
                  <span>Español nativo &bull; Inglés intermedio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS: SHOWCASE INSPIRADO EN LA REFERENCIA */}
        <section id="proyectos" className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out py-16 sm:py-24 border-b border-slate-200/80 dark:border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-sm font-semibold tracking-wide text-blue-600 dark:text-cyan-400">
                Proyectos destacados
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
                Software listo para explorar.
              </h2>
              <p className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Cada proyecto cuenta con una demo en producción o su repositorio público: puedes ingresar a probar la funcionalidad, examinar la arquitectura y explorar el código fuente.
              </p>
            </div>
            <a
              href="https://github.com/Merc4x?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white transition-colors shrink-0"
            >
              <span>Todos los repositorios en GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-10 sm:space-y-12">
            {/* Project 1: WMS */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out group rounded-3xl sm:rounded-[2.5rem] bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 hover:border-blue-400 dark:hover:border-white/20 transition-all p-6 sm:p-10 shadow-lg shadow-slate-200/40 dark:shadow-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Columna Izquierda: Información, Features y Acciones */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-600 dark:text-cyan-400">
                      SaaS de Monitoreo de Flotas &bull; Tiempo Real
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                      WMS
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
                    Plataforma multi-empresa para ver en tiempo real los vehículos de una pyme sobre el mapa de Medellín, con simulación GPS, geocercas inteligentes, alertas automáticas y reportes detallados.
                  </p>

                  {/* Bullet points con estilo idéntico a la referencia */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✦</span>
                      <span>Mapa interactivo en vivo con simulador GPS sobre rutas reales de Medellín e historial.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✦</span>
                      <span>Geocercas dibujadas a mano alzada y alertas automáticas de robo, desvío y exceso de parada.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✦</span>
                      <span>Arquitectura frontend en Angular con Leaflet y base de datos SQLite con APIs optimizadas.</span>
                    </li>
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Angular", "Node.js", "SQLite", "Leaflet", "Azure Functions", "TypeScript"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 dark:bg-white/5 dark:text-cyan-400 border border-blue-200/70 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://merc4x.github.io/WMS/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/25 active:scale-95"
                    >
                      <span>Ver demo en vivo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href="https://github.com/Merc4x/WMS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-neutral-200 font-medium text-xs sm:text-sm transition-all border border-slate-200 dark:border-white/10 active:scale-95"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Código</span>
                    </a>
                  </div>
                </div>

                {/* Columna Derecha: Mockup estilo ventana de navegador con detalle flotante */}
                <div className="lg:col-span-6 relative">
                  <div className="rounded-2xl border border-slate-200/90 dark:border-white/15 bg-slate-100 dark:bg-[#141824] shadow-xl overflow-hidden group-hover:shadow-2xl transition-all">
                    {/* Traffic lights + URL Bar */}
                    <div className="h-9 px-3.5 bg-slate-200/80 dark:bg-[#10131d] border-b border-slate-200/90 dark:border-white/10 flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex-1 max-w-xs mx-auto text-center px-3 py-0.5 rounded-md bg-white dark:bg-white/5 text-[11px] font-mono text-slate-600 dark:text-neutral-400 truncate border border-slate-200/60 dark:border-white/5">
                        merc4x.github.io/WMS
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={`${basePath}/images/wms-preview.png`}
                        alt="WMS Plataforma de Monitoreo de Flotas"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Floating depth badge */}
                  <div className="hidden sm:inline-flex items-center gap-2 absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0c0e14] border border-slate-200 dark:border-white/15 text-xs font-mono font-semibold text-blue-700 dark:text-cyan-400 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span>SaaS &bull; GPS en Vivo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: LiveCopilot (Layout Alternado: Mockup a la izquierda, Texto a la derecha) */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out group rounded-3xl sm:rounded-[2.5rem] bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 hover:border-blue-400 dark:hover:border-white/20 transition-all p-6 sm:p-10 shadow-lg shadow-slate-200/40 dark:shadow-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Columna Texto: En mobile va primero, en desktop pasa a la derecha (order-2) */}
                <div className="lg:col-span-6 space-y-5 lg:order-2">
                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-600 dark:text-cyan-400">
                      Desktop AI Copilot &bull; Audio &amp; VAD en Tiempo Real
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                      LiveCopilot
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
                    Copiloto de escritorio nativo de alto rendimiento para Windows. Diseñado para captura de audio del sistema sin latencia, detección inteligente de voz y transcripción instantánea en un HUD flotante a 60 FPS.
                  </p>

                  {/* Bullet points con estilo idéntico a la referencia */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✦</span>
                      <span>Captura nativa de audio de Windows mediante loopback WASAPI sin cables virtuales.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✦</span>
                      <span>Detección de actividad de voz (VAD) en tiempo real con Silero para aislar voz de ruido.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✦</span>
                      <span>Transcripción instantánea acelerada por Groq Whisper en interfaz transparente a 60 FPS con PyQt6.</span>
                    </li>
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Python", "PyQt6", "Groq Whisper", "Silero VAD", "WASAPI", "Windows API"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 dark:bg-white/5 dark:text-cyan-400 border border-blue-200/70 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://github.com/Merc4x/LiveCopilot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/25 active:scale-95"
                    >
                      <span>Ver en GitHub</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href="https://github.com/Merc4x/LiveCopilot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-neutral-200 font-medium text-xs sm:text-sm transition-all border border-slate-200 dark:border-white/10 active:scale-95"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Código fuente</span>
                    </a>
                  </div>
                </div>

                {/* Columna Mockup: En mobile va segundo, en desktop pasa a la izquierda (order-1) */}
                <div className="lg:col-span-6 relative lg:order-1">
                  <div className="rounded-2xl border border-slate-200/90 dark:border-white/15 bg-slate-100 dark:bg-[#141824] shadow-xl overflow-hidden group-hover:shadow-2xl transition-all">
                    {/* Traffic lights + URL Bar */}
                    <div className="h-9 px-3.5 bg-slate-200/80 dark:bg-[#10131d] border-b border-slate-200/90 dark:border-white/10 flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex-1 max-w-xs mx-auto text-center px-3 py-0.5 rounded-md bg-white dark:bg-white/5 text-[11px] font-mono text-slate-600 dark:text-neutral-400 truncate border border-slate-200/60 dark:border-white/5">
                        github.com/Merc4x/LiveCopilot
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={`${basePath}/images/livecopilot.png`}
                        alt="LiveCopilot Desktop HUD"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Floating depth badge */}
                  <div className="hidden sm:inline-flex items-center gap-2 absolute -bottom-3 -left-3 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0c0e14] border border-slate-200 dark:border-white/15 text-xs font-mono font-semibold text-blue-700 dark:text-cyan-400 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span>WASAPI &bull; 60 FPS HUD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Soluciones en Salud Laboral */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out group rounded-3xl sm:rounded-[2.5rem] bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 hover:border-emerald-400 dark:hover:border-white/20 transition-all p-6 sm:p-10 shadow-lg shadow-slate-200/40 dark:shadow-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Columna Izquierda: Información, Features y Acciones */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
                      Plataforma Web SaaS &bull; SG-SST en Producción
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                      Soluciones en Salud Laboral
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
                    Plataforma web en producción para la gestión, divulgación técnica y asesoría en Seguridad y Salud en el Trabajo (SG-SST), capacitaciones corporativas y gestión de auditorías empresariales.
                  </p>

                  {/* Bullet points con estilo idéntico a la referencia */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">✦</span>
                      <span>Módulo centralizado para normatividad laboral colombiana, auditorías y gestión de riesgos.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">✦</span>
                      <span>Arquitectura backend modular en Python Flask con panel administrativo dinámico.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">✦</span>
                      <span>Despliegue en la nube Render con alta disponibilidad y base de datos relacional.</span>
                    </li>
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Python", "Flask", "Render Cloud", "HTML5 / CSS3", "JavaScript", "SG-SST"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 dark:bg-white/5 dark:text-emerald-400 border border-emerald-200/70 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://tutranquilidadlaboral.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/25 active:scale-95"
                    >
                      <span>Ver demo en vivo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href="https://github.com/Merc4x/proyecto_salud_laboral"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-neutral-200 font-medium text-xs sm:text-sm transition-all border border-slate-200 dark:border-white/10 active:scale-95"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Código</span>
                    </a>
                  </div>
                </div>

                {/* Columna Derecha: Mockup estilo ventana de navegador con detalle flotante */}
                <div className="lg:col-span-6 relative">
                  <div className="rounded-2xl border border-slate-200/90 dark:border-white/15 bg-slate-100 dark:bg-[#141824] shadow-xl overflow-hidden group-hover:shadow-2xl transition-all">
                    {/* Traffic lights + URL Bar */}
                    <div className="h-9 px-3.5 bg-slate-200/80 dark:bg-[#10131d] border-b border-slate-200/90 dark:border-white/10 flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex-1 max-w-xs mx-auto text-center px-3 py-0.5 rounded-md bg-white dark:bg-white/5 text-[11px] font-mono text-slate-600 dark:text-neutral-400 truncate border border-slate-200/60 dark:border-white/5">
                        tutranquilidadlaboral.onrender.com
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={`${basePath}/images/salud-laboral.png`}
                        alt="Soluciones en Salud Laboral Web Platform"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Floating depth badge */}
                  <div className="hidden sm:inline-flex items-center gap-2 absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0c0e14] border border-slate-200 dark:border-white/15 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Render Cloud &bull; Producción</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENFOQUE & METODOLOGÍA: PILARES */}
        <section id="enfoque" className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out py-16 sm:py-20 border-b border-slate-200/80 dark:border-white/5">
          <div className="space-y-3 mb-12">
            <div className="text-xs font-mono text-blue-700 dark:text-cyan-400 uppercase tracking-wider font-bold">
              Metodología de Trabajo
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              Los pilares con los que desarrollo.
            </h2>
            <p className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Combinación de ingeniería universitaria rigurosa con la cadencia y dinamismo del desarrollo de software moderno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.08)] hover:border-slate-300 dark:hover:border-white/20 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100/80 dark:bg-blue-900/30 border border-blue-200 dark:border-transparent flex items-center justify-center text-blue-700 dark:text-cyan-400 shadow-2xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                Rigor de Ingeniería (TdeA)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
                Formación en curso en el Tecnológico de Antioquia orientada a estructuras de datos, modelado relacional, algoritmos y patrones de arquitectura de software para soluciones robustas.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.08)] hover:border-slate-300 dark:hover:border-white/20 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100/80 dark:bg-purple-900/30 border border-purple-200 dark:border-transparent flex items-center justify-center text-purple-700 dark:text-purple-400 shadow-2xs">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                Vibe Coding &amp; Flow
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
                Adopción de herramientas de inteligencia artificial y aceleración iterativa para pasar de la concepción al prototipo funcional en horas, sin comprometer la limpieza del código.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.08)] hover:border-slate-300 dark:hover:border-white/20 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 dark:bg-emerald-900/30 border border-emerald-200 dark:border-transparent flex items-center justify-center text-emerald-700 dark:text-emerald-400 shadow-2xs">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                IA &bull; Audio &bull; Full Stack
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
                Capacidad probada de trabajar tanto en sistemas nativos de alto rendimiento (captura de audio en tiempo real y VAD) como en aplicaciones web de nivel empresarial.
              </p>
            </div>
          </div>
        </section>

        {/* ARSENAL TECNOLÓGICO */}
        <section id="stack" className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out py-16 sm:py-20 border-b border-slate-200/80 dark:border-white/5">
          <div className="space-y-3 mb-12">
            <div className="text-xs font-mono text-blue-700 dark:text-cyan-400 uppercase tracking-wider font-bold">
              Habilidades Técnicas
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              Herramientas del ecosistema.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] space-y-3 hover:border-slate-300 dark:hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 text-blue-700 dark:text-cyan-400 font-bold text-sm">
                <Code2 className="w-4 h-4" />
                <span>Frontend</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5 / CSS3"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 border border-slate-200/80 dark:border-transparent transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] space-y-3 hover:border-slate-300 dark:hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold text-sm">
                <Cpu className="w-4 h-4" />
                <span>Backend</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Python", "Flask", "FastAPI", "Java", "Spring Boot", "Node.js", "REST APIs"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 border border-slate-200/80 dark:border-transparent transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bases de Datos */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] space-y-3 hover:border-slate-300 dark:hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                <Layers className="w-4 h-4" />
                <span>Bases de Datos</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["PostgreSQL", "MongoDB", "SQLite", "SQL Relacional"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 border border-slate-200/80 dark:border-transparent transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Herramientas & DevOps */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] space-y-3 hover:border-slate-300 dark:hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                <Wrench className="w-4 h-4" />
                <span>DevOps &amp; Tools</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Git", "GitHub Actions", "Docker", "Linux", "VS Code", "Postman"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 border border-slate-200/80 dark:border-transparent transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CONTACTO */}
        <section id="contacto" className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out pt-16 sm:pt-20">
          <div className="relative rounded-3xl bg-white dark:bg-[#0f1117] border border-slate-200/90 dark:border-white/10 p-8 sm:p-14 text-center overflow-hidden shadow-xl">
            {/* Ambient center blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-blue-500/10 dark:bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200/80 dark:border-white/10 text-xs font-mono font-semibold text-blue-700 dark:text-cyan-400 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Contacto Directo</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
                ¿Hablamos sobre tu próximo proyecto?
              </h2>

              <p className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Abierto a colaboraciones, consultoría o roles de desarrollo de software. Escríbeme directamente por correo o WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
                <a
                  href="mailto:alejo.quiroz2534@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/25 active:scale-95 text-center"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>alejo.quiroz2534@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/573116425806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/20 active:scale-95 text-center"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-neutral-200 font-medium text-xs sm:text-sm transition-all border border-slate-300 dark:border-white/10 active:scale-95 shadow-sm text-center"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  <span>{copied ? "Copiado" : "Copiar Email"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/80 dark:border-white/5 py-8 text-center text-xs text-slate-500 dark:text-neutral-500 font-mono">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Alejandro Mercado &bull; Merc4x</p>
          <p>Medellín, Colombia &bull; TdeA Ingeniería de Software</p>
        </div>
      </footer>
    </div>
  );
}
