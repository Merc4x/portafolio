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
  Activity,
  Zap,
  Radio,
  FileCode2,
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
    <div className="min-h-screen bg-[#f8fafc] text-neutral-900 dark:bg-[#08090c] dark:text-[#e1e4ea] selection:bg-blue-600 selection:text-white transition-colors duration-300 relative overflow-x-hidden font-sans">
      {/* Subtle ambient lighting meshes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-500/10 dark:from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl opacity-75" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-600/5 blur-3xl rounded-full" />
      </div>

      {/* TOP FLOATING NAVIGATION BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#08090c]/80 border-b border-neutral-200/80 dark:border-white/5 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand with blue beacon */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
            <span className="font-mono text-sm tracking-wider font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              MERC4X<span className="text-blue-600 dark:text-blue-500">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <a href="#proyectos" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Proyectos
            </a>
            <a href="#enfoque" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Enfoque
            </a>
            <a href="#stack" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Tecnologías
            </a>
            <a href="#contacto" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-white/5"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com/Merc4x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-white/5"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp Call to Action */}
            <a
              href="https://wa.me/573116425806"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-white/5"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-white/10 bg-white/95 dark:bg-[#0c0e14]/95 backdrop-blur-2xl px-5 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-2 font-medium text-base text-neutral-800 dark:text-neutral-200">
              <a
                href="#proyectos"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Proyectos de Ingeniería
              </a>
              <a
                href="#enfoque"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Enfoque &amp; Metodología
              </a>
              <a
                href="#stack"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Arsenal Tecnológico
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

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 md:pt-20 pb-24">
        {/* HERO SECTION: ORIGINAL HIGH-TECH SPLIT ARCHITECTURE */}
        <section className="grid lg:grid-cols-12 gap-10 sm:gap-14 items-center pb-16 sm:pb-24 border-b border-neutral-200/80 dark:border-white/5">
          {/* Left Column: Identity, Narrative & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & University Chip */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-cyan-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>4.° Semestre &bull; Ing. de Software en TdeA &bull; Medellín</span>
            </div>

            {/* Impactful Original Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              Arquitectura de software con{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                precisión, cadencia y flow.
              </span>
            </h1>

            {/* Pitch */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
              Soy <strong className="text-neutral-900 dark:text-white font-semibold">Alejandro Mercado</strong> (<span className="font-mono text-blue-600 dark:text-cyan-400 font-medium">@Merc4x</span>). Diseñador y desarrollador Full Stack especializado en la creación de herramientas de escritorio nativas con IA, APIs escalables y aplicaciones web completas en producción.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-95 text-center"
              >
                <span>Explorar Proyectos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/573116425806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-800 dark:text-white font-medium text-sm transition-all border border-neutral-200 dark:border-white/10 active:scale-95 shadow-sm text-center"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Directo</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300 font-medium text-sm transition-all border border-neutral-200 dark:border-white/10 active:scale-95 shadow-sm text-center"
                title="Copiar correo"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-neutral-400" />}
                <span>{copied ? "Copiado" : "Copiar Email"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Original Developer Identity Terminal & Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200 dark:border-white/10 shadow-2xl p-5 space-y-4">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-white/5 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span>merc4x.profile.tsx</span>
              </div>

              {/* Photo Frame Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 group">
                <img
                  src={`${basePath}/images/avatar.png`}
                  alt="Alejandro Mercado"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Status Indicator */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-[#08090c]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 text-[11px] font-mono text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Alejandro Mercado</span>
                </div>

                {/* Custom photo hint */}
                <div className="absolute bottom-3 inset-x-3 text-center px-2 py-1 rounded-md bg-white/90 dark:bg-[#08090c]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 text-[10px] text-neutral-500 dark:text-neutral-400">
                  Foto: <code className="text-blue-600 dark:text-cyan-400">public/images/avatar.png</code>
                </div>
              </div>

              {/* Specs & Capabilities mini-matrix */}
              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="flex justify-between items-center text-neutral-600 dark:text-neutral-400">
                  <span>Carrera:</span>
                  <span className="text-neutral-900 dark:text-white font-semibold">Ing. Software (TdeA)</span>
                </div>
                <div className="flex justify-between items-center text-neutral-600 dark:text-neutral-400">
                  <span>Semestre:</span>
                  <span className="text-blue-600 dark:text-cyan-400 font-semibold">4.° Semestre actual</span>
                </div>
                <div className="flex justify-between items-center text-neutral-600 dark:text-neutral-400">
                  <span>Especialidad:</span>
                  <span className="text-neutral-900 dark:text-white">Full Stack &bull; Audio AI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS & VALUE MATRIX STRIP */}
        <section className="py-12 border-b border-neutral-200/80 dark:border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-1">
              <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-medium">Educación Formal</div>
              <div className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">4.° Semestre</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">Ingeniería en TdeA</div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-1">
              <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-medium">Desktop AI</div>
              <div className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">60 FPS HUD</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">WASAPI Loopback Audio</div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-1">
              <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-medium">Arquitectura</div>
              <div className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">Full Stack</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">Python + Next.js + Spring</div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-1">
              <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-medium">Ubicación</div>
              <div className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">Medellín</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">Colombia (UTC-5)</div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS: SHOWCASE */}
        <section id="proyectos" className="py-16 sm:py-20 border-b border-neutral-200/80 dark:border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
            <div className="space-y-2">
              <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                Casos Reales
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Software de ingeniería en producción.
              </h2>
            </div>
            <a
              href="https://github.com/Merc4x?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              <span>Repositorios en GitHub</span>
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
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-[#08090c]/85 backdrop-blur-md border border-neutral-200 dark:border-white/10 text-xs font-mono text-blue-600 dark:text-cyan-400">
                  Desktop AI Copilot
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    LiveCopilot
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                    Copiloto de escritorio nativo para Windows con captura de loopback de audio WASAPI, detección por voz con Silero VAD y transcripción en tiempo real vía Groq Whisper, renderizado en un HUD flotante a 60 FPS con PyQt6.
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Ver Código en GitHub &rarr;</span>
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
                    Plataforma web en producción para la gestión, divulgación y asesoría técnica en Seguridad y Salud en el Trabajo (SG-SST), capacitaciones y auditorías empresariales desplegada en la nube Render.
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

        {/* ENFOQUE & METODOLOGÍA: PILARES ORIGINALES DE ALEJANDRO */}
        <section id="enfoque" className="py-16 sm:py-20 border-b border-neutral-200/80 dark:border-white/5">
          <div className="space-y-3 mb-12">
            <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
              Metodología de Trabajo
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Los pilares con los que desarrollo.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Combinación de ingeniería universitaria rigurosa con la cadencia y dinamismo del desarrollo de software moderno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Rigor de Ingeniería (TdeA)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Formación en curso en el Tecnológico de Antioquia orientada a estructuras de datos, modelado relacional, algoritmos y patrones de arquitectura de software para soluciones robustas.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Vibe Coding &amp; Flow
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Adopción de herramientas de inteligencia artificial y aceleración iterativa para pasar de la concepción al prototipo funcional en horas, sin comprometer la limpieza del código.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                IA &bull; Audio &bull; Full Stack
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Capacidad probada de trabajar tanto en sistemas nativos de alto rendimiento (captura de audio en tiempo real y VAD) como en aplicaciones web de nivel empresarial.
              </p>
            </div>
          </div>
        </section>

        {/* ARSENAL TECNOLÓGICO */}
        <section id="stack" className="py-16 sm:py-20 border-b border-neutral-200/80 dark:border-white/5">
          <div className="space-y-3 mb-12">
            <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
              Habilidades Técnicas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Herramientas del ecosistema.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-bold text-sm">
                <Code2 className="w-4 h-4" />
                <span>Frontend</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5 / CSS3"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
                <Cpu className="w-4 h-4" />
                <span>Backend</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Python", "Flask", "FastAPI", "Java", "Spring Boot", "Node.js", "REST APIs"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bases de Datos */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                <Layers className="w-4 h-4" />
                <span>Bases de Datos</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["PostgreSQL", "MongoDB", "SQLite", "SQL Relacional"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Herramientas & DevOps */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0f1117] border border-neutral-200/80 dark:border-white/10 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Wrench className="w-4 h-4" />
                <span>DevOps &amp; Tools</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Git", "GitHub Actions", "Docker", "Linux", "VS Code", "Postman"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CONTACTO */}
        <section id="contacto" className="pt-16 sm:pt-20">
          <div className="relative rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#0f1117] dark:to-[#08090c] border border-neutral-200 dark:border-white/10 p-8 sm:p-14 text-center overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-xs font-mono text-blue-600 dark:text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Contacto Directo</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                ¿Hablamos sobre tu próximo proyecto?
              </h2>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Abierto a colaboraciones, consultoría o roles de desarrollo de software. Escríbeme directamente por correo o WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
                <a
                  href="mailto:alejo.quiroz2534@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-95"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>alejo.quiroz2534@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/573116425806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+57 311 642 5806</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-800 dark:text-neutral-200 font-medium text-xs sm:text-sm transition-all border border-neutral-200 dark:border-white/10 active:scale-95 shadow-sm"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-neutral-400" />}
                  <span>{copied ? "Copiado" : "Copiar Email"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-white/5 py-8 text-center text-xs text-neutral-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Alejandro Mercado &bull; Merc4x</p>
          <p>Medellín, Colombia &bull; TdeA Ingeniería de Software</p>
        </div>
      </footer>
    </div>
  );
}
