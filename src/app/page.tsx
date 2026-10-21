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
  Heart,
  Wrench,
  BookOpen,
  Calendar,
  ChevronRight,
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

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#f8fafc] text-neutral-900 dark:bg-[#08090c] dark:text-[#e1e4ea] selection:bg-blue-600 selection:text-white transition-colors duration-250 relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-500/10 dark:from-blue-600/12 via-purple-500/5 dark:via-purple-600/6 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 blur-3xl rounded-full" />
      </div>

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#08090c]/85 border-b border-neutral-200/80 dark:border-white/5 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand with blue beacon and MERC4X.DEV */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
            <span className="font-mono text-sm tracking-wider font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              MERC4X<span className="text-blue-600 dark:text-blue-500">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <a href="#sobre-mi" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Sobre mí
            </a>
            <a href="#proyectos" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Proyectos
            </a>
            <a href="#trayectoria" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Trayectoria
            </a>
            <a href="#habilidades" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Habilidades
            </a>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-white/5"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/Merc4x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-white/5"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Primary Action Button (Blue pill) */}
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              <span>Contáctame</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-white/5"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-white/10 bg-white/95 dark:bg-[#0c0e14]/95 backdrop-blur-2xl px-5 py-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 pb-1 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponible para trabajar</span>
            </div>

            <nav className="flex flex-col space-y-2 font-medium text-base text-neutral-800 dark:text-neutral-200">
              <a
                href="#sobre-mi"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Sobre mí
              </a>
              <a
                href="#proyectos"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#trayectoria"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Trayectoria &amp; Educación
              </a>
              <a
                href="#habilidades"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#contacto"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Contacto
              </a>
            </nav>

            <div className="pt-3 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-2">
              <a
                href="https://wa.me/573116425806"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Escríbeme por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-24">
        {/* HERO SECTION (Centered Avatar Layout inspired by Duan Gómez) */}
        <section className="text-center space-y-6 sm:space-y-7 pb-16 border-b border-neutral-200/80 dark:border-white/5">
          {/* Centered Avatar Frame with status badge */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-white/15 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <img
                  src={`${basePath}/images/avatar.png`}
                  alt="Alejandro Mercado"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status pill under avatar */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#0f1117] border border-neutral-200 dark:border-white/15 text-[11px] font-medium text-neutral-800 dark:text-neutral-200 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Disponible para trabajar</span>
              </div>
            </div>
          </div>

          {/* Subtitle tag */}
          <div className="pt-2">
            <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 font-mono tracking-wide">
              Estudiante de Ingeniería de Software &bull; TdeA &bull; 4.° semestre
            </p>
          </div>

          {/* Main Giant Headline with Gradient */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              Hola, soy Alejandro.
            </h1>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent leading-[1.15]">
              Construyo software que se siente bien hecho.
            </p>
          </div>

          {/* Bio text */}
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Desarrollador full-stack en Medellín, Colombia. Creo aplicaciones web completas, servicios escalables y herramientas de alto impacto con <span className="text-neutral-900 dark:text-white font-medium">React, Next.js, Python, Flask</span> y <span className="text-neutral-900 dark:text-white font-medium">Spring Boot</span>.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 max-w-md mx-auto sm:max-w-none">
            <a
              href="#proyectos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-95"
            >
              <span>Ver proyectos</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/Merc4x"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-800 dark:text-white font-semibold text-sm transition-all border border-neutral-200 dark:border-white/10 active:scale-95 shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://wa.me/573116425806"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-emerald-600 dark:text-emerald-400 font-semibold text-sm transition-all border border-neutral-200 dark:border-white/10 active:scale-95 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </section>

        {/* STATS COUNTER ROW (Inspired by Duan Gómez Image 2) */}
        <section className="py-12 border-b border-neutral-200/80 dark:border-white/5">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-mono tracking-tight">
                4.°
              </div>
              <div className="text-[11px] sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                semestre en TdeA
              </div>
            </div>

            <div className="space-y-1 border-x border-neutral-200 dark:border-white/10">
              <div className="text-3xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tracking-tight">
                2+
              </div>
              <div className="text-[11px] sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                proyectos publicados
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-mono tracking-tight">
                100%
              </div>
              <div className="text-[11px] sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                código limpio &amp; tipado
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE HIGHLIGHT BANNER (Inspired by Duan Gómez Image 2) */}
        <section className="py-12 border-b border-neutral-200/80 dark:border-white/5">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/40 border border-blue-500/20 dark:border-blue-500/20 p-6 sm:p-10 overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Mi enfoque técnico
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                Arquitectura Full Stack &amp; Vibe Coding.
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Desarrollo de software a medida combinando ingeniería formal con metodologías ágiles de alta cadencia. Diseño y construyo productos completos —desde la interfaz hasta el despliegue en la nube— con obsesión por el detalle y el rendimiento.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-100 transition-all shadow-md active:scale-95"
              >
                <span>Conocer proyectos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* "SOBRE MÍ" SECTION (Inspired by Duan Gómez Image 3) */}
        <section id="sobre-mi" className="py-16 border-b border-neutral-200/80 dark:border-white/5">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Bold statement */}
            <div className="md:col-span-5 space-y-3">
              <div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
                Sobre mí
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                Aprendo rápido, entrego con cuidado.
              </h2>
            </div>

            {/* Right Column: Paragraph and Tag Pills */}
            <div className="md:col-span-7 space-y-6">
              <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                Desarrollador de software con enfoque universitario y autodidacta, actualmente cursando el <strong className="text-neutral-900 dark:text-white">4.° semestre de Ingeniería de Software en el Tecnológico de Antioquia (TdeA)</strong>. Construyo aplicaciones de punta a punta —del diseño de la interfaz a la API y la base de datos. Me caracterizo por mi responsabilidad, código modular y capacidad de adaptación.
              </p>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                Busco seguir creciendo en equipos de desarrollo donde pueda aportar mis habilidades técnicas, colaborar con pasión y diseñar soluciones escalables.
              </p>

              {/* Tag Pills (Image 3 style) */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  Medellín, Colombia
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                  Ingeniería de Software &bull; TdeA
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <Globe className="w-3.5 h-3.5 text-neutral-500" />
                  Español nativo &bull; Inglés técnico
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* "TRAYECTORIA: EXPERIENCIA Y FORMACIÓN" (Inspired by Duan Gómez Image 4) */}
        <section id="trayectoria" className="py-16 border-b border-neutral-200/80 dark:border-white/5">
          <div className="space-y-2 mb-10">
            <div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
              Trayectoria
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Experiencia y formación.
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Timeline of Projects / Software Development */}
            <div className="md:col-span-7 space-y-6">
              {/* Item 1: LiveCopilot */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    LiveCopilot &bull; Asistente IA de Escritorio
                  </h3>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-md">
                    Python / AI
                  </span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Desarrollador Principal &bull; Código Abierto
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 list-disc list-inside leading-relaxed">
                  <li>Captura de audio nativo loopback en Windows con WASAPI y segmentación inteligente por voz con Silero VAD.</li>
                  <li>Transcripción en tiempo real con Groq Whisper API y generación de sugerencias inteligentes asistidas con IA.</li>
                  <li>Interfaz HUD flotante con aceleración por hardware renderizada a 60 FPS con PyQt6.</li>
                </ul>
              </div>

              {/* Item 2: Soluciones en Salud Laboral */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Soluciones en Salud Laboral &bull; Web SaaS
                  </h3>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-md">
                    En Producción
                  </span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Desarrollador Full Stack &bull; Plataforma Web
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 list-disc list-inside leading-relaxed">
                  <li>Plataforma web integral para la gestión y divulgación de Seguridad y Salud en el Trabajo (SG-SST).</li>
                  <li>Desarrollo de servicios backend con Python, Flask, plantillas dinámicas y base de datos relacional.</li>
                  <li>Despliegue y configuración en la nube en Render con integración continua.</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Educación Card (Image 4 right card) */}
            <div className="md:col-span-5">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-bold text-base">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>Educación</span>
                </div>

                {/* Degree 1 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                    Ingeniería de Software
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Tecnológico de Antioquia (TdeA)
                  </p>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">
                    En curso &bull; 4.° semestre
                  </p>
                </div>

                <div className="border-t border-neutral-200 dark:border-white/10" />

                {/* Training 2 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                    Desarrollo Full Stack &amp; Vibe Coding
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Especialización práctica autodidacta
                  </p>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    React &bull; Next.js &bull; Python &bull; Spring Boot
                  </p>
                </div>

                <div className="border-t border-neutral-200 dark:border-white/10" />

                {/* Degree 3 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                    Bachiller Académico
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Graduado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VITRINA DE PROYECTOS DESTACADOS CON MOCKUPS */}
        <section id="proyectos" className="py-16 border-b border-neutral-200/80 dark:border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
            <div className="space-y-2">
              <div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
                Proyectos
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Software en producción y código abierto.
              </h2>
            </div>
            <a
              href="https://github.com/Merc4x?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              <span>Ver todos en GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: LiveCopilot */}
            <div className="group rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all overflow-hidden flex flex-col shadow-sm">
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-white/5">
                <img
                  src={`${basePath}/images/livecopilot.png`}
                  alt="LiveCopilot Desktop App"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-[#08090c]/85 backdrop-blur-md border border-neutral-200 dark:border-white/10 text-xs font-mono text-blue-600 dark:text-blue-400">
                  Desktop AI Copilot
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    LiveCopilot
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                    Copiloto de escritorio para Windows con captura de loopback de audio WASAPI, detección por voz con Silero VAD y transcripción en tiempo real vía Groq Whisper, renderizado en un HUD flotante a 60 FPS.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-700 dark:text-neutral-300">
                    Python
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-700 dark:text-neutral-300">
                    PyQt6
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-700 dark:text-neutral-300">
                    Groq Whisper
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-700 dark:text-neutral-300">
                    Silero VAD
                  </span>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-white/5 flex items-center justify-between">
                  <a
                    href="https://github.com/Merc4x/LiveCopilot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Ver Repositorio &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Soluciones en Salud Laboral */}
            <div className="group rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all overflow-hidden flex flex-col shadow-sm">
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-white/5">
                <img
                  src={`${basePath}/images/salud-laboral.png`}
                  alt="Soluciones en Salud Laboral Platform"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-[#08090c]/85 backdrop-blur-md border border-neutral-200 dark:border-white/10 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  Web SaaS &bull; En Producción
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Soluciones en Salud Laboral
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                    Plataforma web integral para la gestión, divulgación y asesoría en Seguridad y Salud en el Trabajo (SG-SST), auditorías y capacitaciones empresariales desplegada en la nube.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-700 dark:text-neutral-300">
                    Python
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-700 dark:text-neutral-300">
                    Flask
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-700 dark:text-neutral-300">
                    Render Cloud
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-700 dark:text-neutral-300">
                    SG-SST
                  </span>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-white/5 flex items-center justify-between">
                  <a
                    href="https://tutranquilidadlaboral.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo en Vivo</span>
                  </a>

                  <a
                    href="https://github.com/Merc4x/proyecto_salud_laboral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* "HABILIDADES: HERRAMIENTAS CON LAS QUE CONSTRUYO" (Inspired by Duan Gómez Image 5) */}
        <section id="habilidades" className="py-16 border-b border-neutral-200/80 dark:border-white/5">
          <div className="space-y-2 mb-10">
            <div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
              Habilidades
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Herramientas con las que construyo.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Frontend */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React 19", "Next.js 16", "TypeScript", "JavaScript", "Tailwind CSS v4", "HTML5 / CSS3"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-800 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Backend */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Flask", "FastAPI", "Java", "Spring Boot", "Node.js", "APIs REST"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-800 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Bases de datos */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Bases de datos</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "SQLite", "Modelado de datos SQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-800 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 4: Herramientas */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Herramientas &amp; DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "GitHub Actions CI/CD", "Docker", "Linux", "VS Code", "Postman"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-800 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 5: Habilidades blandas & Filosofía */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-4 sm:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Metodología &amp; Habilidades Blandas</h3>
              <div className="flex flex-wrap gap-2">
                {["Vibe Coding & Flow", "Código Limpio", "Comunicación asertiva", "Trabajo en equipo", "Resolución de problemas", "Autogestión"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-800 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CONTACTO */}
        <section id="contacto" className="pt-16">
          <div className="relative rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#0f1117] dark:to-[#08090c] border border-neutral-200 dark:border-white/10 p-8 sm:p-14 text-center overflow-hidden shadow-lg">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-xs font-mono text-blue-600 dark:text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>¿Hablamos sobre tu próximo proyecto?</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                Construyamos algo extraordinario juntos.
              </h2>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Abierto a propuestas como desarrollador, proyectos colaborativos o vacantes de ingeniería. Contáctame directamente por correo o WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3">
                <a
                  href="mailto:alejo.quiroz2534@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-95"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>alejo.quiroz2534@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/573116425806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+57 311 642 5806</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-800 dark:text-neutral-200 font-medium text-xs sm:text-sm transition-all border border-neutral-200 dark:border-white/10 active:scale-95 shadow-sm"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-neutral-500" />}
                  <span>{copied ? "Copiado al portapapeles" : "Copiar Correo"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MINIMALIST FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-white/5 py-8 text-center text-xs text-neutral-500 dark:text-neutral-500 font-mono">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Alejandro Mercado &bull; Portafolio Profesional</p>
          <p>Medellín, Colombia &bull; TdeA</p>
        </div>
      </footer>
    </div>
  );
}
