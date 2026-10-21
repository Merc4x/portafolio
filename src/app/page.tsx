"use client";

import { useState } from "react";
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
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alejo.quiroz2534@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#08090c] text-[#e1e4ea] selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Ambient glowing backdrop lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/12 via-purple-600/6 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 blur-3xl rounded-full" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08090c]/85 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
            <span className="font-mono text-sm tracking-wider font-semibold text-white group-hover:text-blue-400 transition-colors">
              MERC4X<span className="text-blue-500">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#sobre-mi" className="hover:text-white transition-colors">
              Sobre Mí
            </a>
            <a href="#proyectos" className="hover:text-white transition-colors">
              Proyectos
            </a>
            <a href="#habilidades" className="hover:text-white transition-colors">
              Habilidades
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Disponible para trabajar</span>
            </div>

            <a
              href="https://github.com/Merc4x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors border border-white/5"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/573116425806"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-blue-600/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors border border-white/5"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0c0e14]/95 backdrop-blur-2xl px-5 py-6 space-y-4 animate-in slide-in-from-top-2">
            <div className="flex items-center gap-2 pb-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible para nuevos proyectos</span>
            </div>

            <nav className="flex flex-col space-y-3 font-medium text-base text-neutral-200">
              <a
                href="#sobre-mi"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                Sobre Mí
              </a>
              <a
                href="#proyectos"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                Proyectos Destacados
              </a>
              <a
                href="#habilidades"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                Habilidades &amp; Stack
              </a>
              <a
                href="#contacto"
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                Contacto Directo
              </a>
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="https://wa.me/573116425806"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>

              <a
                href="mailto:alejo.quiroz2534@gmail.com"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-200 font-medium text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>alejo.quiroz2534@gmail.com</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-14 md:pt-20 pb-20 sm:pb-28">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center pb-14 sm:pb-20 border-b border-white/5">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Academic badge (wrapped gracefully on mobile) */}
            <div className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[11px] sm:text-xs font-mono tracking-wide leading-tight max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>4.° SEMESTRE &bull; ING. DE SOFTWARE EN TdeA &bull; FULL STACK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.1] break-words">
              Engineering with <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                precision, flow &amp; purpose.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Hola, soy <strong className="text-white font-semibold">Alejandro Mercado</strong>. Estudiante de <span className="text-white font-semibold">4.° semestre de Ingeniería de Software en el Tecnológico de Antioquia (TdeA)</span> y desarrollador Full Stack. Construyo productos digitales escalables combinando bases sólidas de ingeniería con la velocidad del <span className="text-blue-400 font-mono">vibe coding</span> y arquitectura limpia.
            </p>

            {/* Quick Metadata Chips */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] sm:text-xs">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                Medellín, Colombia
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/5 text-neutral-300 text-[11px] sm:text-xs">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                Ing. Software (4.° Semestre) &bull; TdeA
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] sm:text-xs">
                <Terminal className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                Vibe Coding &amp; Flow
              </span>
            </div>

            {/* CTA Buttons (Mobile full width, Desktop inline) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 active:scale-95 text-center"
              >
                <span>Ver Proyectos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/573116425806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all border border-white/10 active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+57 311 642 5806</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all border border-white/10 active:scale-95 text-center"
                title="Copiar correo"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
                <span>{copied ? "Copiado al portapapeles" : "Copiar Correo"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: APARTADO DE LA FOTO DE PERFIL */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative group w-full max-w-[290px] sm:max-w-sm mx-auto">
              {/* Outer decorative aura ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-cyan-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#0f1117] border border-white/10 overflow-hidden shadow-2xl p-3.5 sm:p-4">
                {/* Image Frame */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-white/5">
                  <img
                    src={`${basePath}/images/avatar.png`}
                    alt="Foto de Alejandro Mercado"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-1 rounded-md bg-[#08090c]/85 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-mono text-neutral-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Alejandro Mercado</span>
                  </div>

                  {/* Replace Photo Hint Pill */}
                  <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3 text-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#08090c]/90 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] text-neutral-400">
                    Tu foto en <code className="text-blue-400 font-mono">public/images/avatar.png</code>
                  </div>
                </div>

                {/* Profile Card Metadata */}
                <div className="pt-3.5 sm:pt-4 px-1 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-white text-sm sm:text-base">Alejandro Mercado</h3>
                      <p className="text-[11px] sm:text-xs text-blue-400 font-mono">4.° Semestre Ing. Software &bull; TdeA</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                      Medellín, CO
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed pt-0.5">
                    Estudiante en el Tecnológico de Antioquia. Desarrollando soluciones con interfaces modernas, microservicios y copilotos con IA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: SOBRE MÍ & BENTO VALUES */}
        <section id="sobre-mi" className="py-14 sm:py-20 border-b border-white/5">
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <div className="text-xs font-mono text-blue-400 tracking-wider">01 / PERFIL Y ENFOQUE</div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ingeniería, arquitectura y código limpio.
            </h2>
            <p className="text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Combino el rigor técnico de la ingeniería con la velocidad de ejecución y adopción de IA para crear productos resistentes y escalables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Bento Card 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1117]/80 border border-white/5 hover:border-white/15 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 sm:mb-5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Ingeniería de Software (TdeA)</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Actualmente cursando el 4.° semestre en el Tecnológico de Antioquia (TdeA). Formación universitaria enfocada en estructuras de datos, algoritmia, patrones de diseño de software y calidad de código.
              </p>
            </div>

            {/* Bento Card 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1117]/80 border border-white/5 hover:border-white/15 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 sm:mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Arquitectura Full Stack</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Construcción de interfaces reactivas con Next.js y React conectadas a backends robustos y seguros en Python, Java (Spring Boot) o Node.js.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1117]/80 border border-white/5 hover:border-white/15 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 sm:mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Vibe Coding &amp; Flow</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Metodología acelerada potenciada por herramientas avanzadas de IA. Reducción drástica del ciclo entre la idea, la validación y el despliegue a producción.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: PROYECTOS DESTACADOS */}
        <section id="proyectos" className="py-14 sm:py-20 border-b border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="text-xs font-mono text-blue-400 tracking-wider">02 / CASOS DE ESTUDIO</div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Software en producción y código abierto.
              </h2>
            </div>
            <a
              href="https://github.com/Merc4x?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <span>Ver todos en GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Project 1: LiveCopilot */}
            <div className="group rounded-2xl bg-[#0f1117] border border-white/10 hover:border-white/20 transition-all overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border-b border-white/5">
                <img
                  src={`${basePath}/images/livecopilot.png`}
                  alt="LiveCopilot Desktop App"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-1 rounded-md bg-[#08090c]/85 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono text-blue-400">
                  Desktop AI Copilot
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    LiveCopilot
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                    Copiloto de escritorio para Windows con captura de loopback de audio WASAPI, detección por voz con Silero VAD y transcripción en tiempo real vía Groq Whisper, renderizado en un HUD flotante a 60 FPS.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/5 border border-white/5 text-neutral-300">
                    Python
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/5 border border-white/5 text-neutral-300">
                    PyQt6
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/5 border border-white/5 text-neutral-300">
                    Groq Whisper
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/5 border border-white/5 text-neutral-300">
                    Silero VAD
                  </span>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="https://github.com/Merc4x/LiveCopilot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Ver Repositorio &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Soluciones en Salud Laboral */}
            <div className="group rounded-2xl bg-[#0f1117] border border-white/10 hover:border-white/20 transition-all overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border-b border-white/5">
                <img
                  src={`${basePath}/images/salud-laboral.png`}
                  alt="Soluciones en Salud Laboral Platform"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-1 rounded-md bg-[#08090c]/85 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono text-emerald-400">
                  Web SaaS &bull; En Producción
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Soluciones en Salud Laboral
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                    Plataforma web integral para la gestión, divulgación y asesoría en Seguridad y Salud en el Trabajo (SG-SST), auditorías y capacitaciones empresariales desplegada en la nube.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/5 border border-white/5 text-neutral-300">
                    Python
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/5 border border-white/5 text-neutral-300">
                    Flask
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/5 border border-white/5 text-neutral-300">
                    Render Cloud
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/5 border border-white/5 text-neutral-300">
                    SG-SST
                  </span>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="https://tutranquilidadlaboral.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo en Vivo</span>
                  </a>

                  <a
                    href="https://github.com/Merc4x/proyecto_salud_laboral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: STACK TECNOLÓGICO */}
        <section id="habilidades" className="py-14 sm:py-20 border-b border-white/5">
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <div className="text-xs font-mono text-blue-400 tracking-wider">03 / ARSENAL TÉCNICO</div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Herramientas y tecnologías.
            </h2>
            <p className="text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Tecnologías dominadas para el desarrollo de soluciones completas de extremo a extremo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Category 1: Frontend */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1117] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                <Code2 className="w-4 h-4" />
                <span>Frontend</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  React 19 &amp; Next.js 16
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  TypeScript &amp; JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  Tailwind CSS v4
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  HTML5 &amp; Responsive UI
                </li>
              </ul>
            </div>

            {/* Category 2: Backend */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1117] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                <Cpu className="w-4 h-4" />
                <span>Backend</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  Python (Flask, FastAPI)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  Java (Spring Boot)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  Node.js &amp; Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  RESTful APIs Architecture
                </li>
              </ul>
            </div>

            {/* Category 3: Databases */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1117] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Layers className="w-4 h-4" />
                <span>Bases de Datos</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  SQLite
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Modelado Relacional &amp; SQL
                </li>
              </ul>
            </div>

            {/* Category 4: Tools & DevOps */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1117] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Herramientas &amp; DevOps</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                  Git &amp; GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                  GitHub Actions CI/CD
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                  Docker &amp; Linux
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                  Postman &amp; VS Code
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: CONTACTO */}
        <section id="contacto" className="pt-14 sm:pt-20">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0f1117] to-[#08090c] border border-white/10 p-6 sm:p-14 text-center overflow-hidden">
            {/* Ambient center blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[300px] bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>DISPONIBLE PARA NUEVAS OPORTUNIDADES</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                ¿Hablamos sobre tu próximo proyecto?
              </h2>

              <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
                Abierto a propuestas como desarrollador, consultoría técnica y proyectos colaborativos. Contáctame por correo o mensaje directo.
              </p>

              {/* Full width stacked buttons on mobile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3">
                <a
                  href="mailto:alejo.quiroz2534@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 active:scale-95 break-all text-center"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>alejo.quiroz2534@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/573116425806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/20 active:scale-95 text-center"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+57 311 642 5806</span>
                </a>

                <a
                  href="https://github.com/Merc4x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all border border-white/10 active:scale-95 text-center"
                >
                  <GithubIcon className="w-4 h-4 shrink-0" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-6 sm:py-8 text-center text-[11px] sm:text-xs text-neutral-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p>&copy; {new Date().getFullYear()} Alejandro Mercado &bull; Portafolio Profesional</p>
          <p>Next.js 16 &bull; TypeScript &bull; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
