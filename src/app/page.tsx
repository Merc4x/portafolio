"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  ExternalLink,
  Code2,
  Terminal,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

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

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 0 0-1.62 1.62c0 .9.72 1.62 1.62 1.62a1.62 1.62 0 0 0 1.62-1.62c0-.9-.72-1.62-1.62-1.62Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090c] text-[#e1e4ea] selection:bg-blue-600 selection:text-white">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 blur-3xl rounded-full" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08090c]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-mono text-sm tracking-wider font-semibold text-white group-hover:text-cyan-400 transition-colors">
              MERC4X<span className="text-blue-500">.DEV</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#sobre-mi" className="hover:text-white transition-colors">
              Sobre mí
            </a>
            <a href="#proyectos" className="hover:text-white transition-colors">
              Proyectos
            </a>
            <a href="#stack" className="hover:text-white transition-colors">
              Habilidades
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponible para proyectos</span>
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
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-6">
              <Code2 className="w-3.5 h-3.5" />
              <span>ESTUDIANTE DE INGENIERÍA DE SOFTWARE · FULL STACK</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Engineering with{" "}
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                precision and flow.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed mb-8 max-w-2xl">
              Hola, soy <b>Alejandro Mercado</b>. Desarrollo productos digitales
              escalables y aplicaciones web completas combinando bases sólidas de
              ingeniería con metodologías ágiles de <i>vibe coding</i>.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="px-6 py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all shadow-sm"
              >
                Ver Proyectos
              </a>

              <a
                href="https://wa.me/573116425806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all border border-white/10"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Hablemos por WhatsApp</span>
              </a>

              <a
                href="mailto:alejo.quiroz2534@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all border border-white/10"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Correo Directo</span>
              </a>
            </div>
          </div>
        </section>

        {/* Sobre Mí Cards */}
        <section id="sobre-mi" className="py-16 border-t border-white/5">
          <div className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              01. Perfil Profesional
            </h2>
            <p className="text-2xl font-bold text-white tracking-tight">
              Ingeniería, arquitectura y código limpio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Ingeniería de Software
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Formación universitaria orientada a algoritmos, estructuras de
                datos, patrones de diseño y estándares rigurosos de calidad de software.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Arquitectura Full Stack
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Desarrollo de interfaces reactivas con Next.js y React, conectado a
                servicios robustos construidos en Python, Spring Boot y Node.js.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Vibe Coding & Flow
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Flujo de trabajo acelerado potenciado por herramientas de IA y
                desarrollo asistido para iterar de la idea a producción con rapidez.
              </p>
            </div>
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section id="proyectos" className="py-16 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                02. Proyectos Destacados
              </h2>
              <p className="text-2xl font-bold text-white tracking-tight">
                Software en producción y código abierto.
              </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proyecto 1: LiveCopilot */}
            <div className="group rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                <Image
                  src="/images/livecopilot.png"
                  alt="LiveCopilot Preview"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Desktop AI Copilot
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Open Source
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    LiveCopilot
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    Copiloto de escritorio para Windows con captura de audio loopback
                    (WASAPI), segmentación por voz en tiempo real con Silero-VAD,
                    transcripción con Groq Whisper y sugerencias conversacionales con IA en un HUD flotante a 60 FPS.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-neutral-300 border border-white/5">
                      Python
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-neutral-300 border border-white/5">
                      PyQt6
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-neutral-300 border border-white/5">
                      Groq Whisper
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-neutral-300 border border-white/5">
                      Silero VAD
                    </span>
                  </div>

                  <a
                    href="https://github.com/Merc4x/LiveCopilot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                  >
                    <span>Explorar Código en GitHub</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 2: Soluciones en Salud Laboral */}
            <div className="group rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                <Image
                  src="/images/salud-laboral.png"
                  alt="Soluciones en Salud Laboral"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      Plataforma Web SaaS
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Desplegado en Render
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    Soluciones en Salud Laboral
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    Plataforma web integral orientada a la difusión, gestión y contratación
                    de servicios en Seguridad y Salud en el Trabajo (SG-SST), auditorías preventivas,
                    capacitaciones y canal directo de agendamiento.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-neutral-300 border border-white/5">
                      Python
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-neutral-300 border border-white/5">
                      Flask
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-neutral-300 border border-white/5">
                      Jinja2
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-neutral-300 border border-white/5">
                      Render
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="https://tutranquilidadlaboral.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Visitar Sitio en Vivo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <span className="text-neutral-600">·</span>

                    <a
                      href="https://github.com/Merc4x/proyecto_salud_laboral"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                    >
                      <span>Ver Código</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stack Tecnológico */}
        <section id="stack" className="py-16 border-t border-white/5">
          <div className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              03. Habilidades Técnicas
            </h2>
            <p className="text-2xl font-bold text-white tracking-tight">
              Herramientas y tecnologías que domino.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                Frontend &amp; UI
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  React &amp; Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  TypeScript &amp; JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Tailwind CSS &amp; CSS3
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Diseño Responsivo &amp; UX
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                Backend &amp; Servicios
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  Java &amp; Spring Boot
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  Python &amp; FastAPI / Flask
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  Node.js &amp; Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  Diseño de APIs RESTful
                </li>
              </ul>
            </div>

            {/* Bases de Datos y Herramientas */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                Bases de Datos &amp; DevOps
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  PostgreSQL &amp; MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Docker &amp; Contenedores
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Git &amp; GitHub Actions (CI/CD)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Postman &amp; Testing
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-24 border-t border-white/5 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              ¿Hablamos de tu próximo proyecto?
            </h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Estoy disponible para proyectos freelance, colaboraciones o nuevas
              oportunidades como desarrollador Full Stack.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:alejo.quiroz2534@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>alejo.quiroz2534@gmail.com</span>
              </a>

              <a
                href="https://wa.me/573116425806"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (+57 311 642 5806)</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-neutral-400">
              <a
                href="https://github.com/Merc4x"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/TU-USUARIO"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-neutral-500 font-mono">
        <p>© 2026 Alejandro Mercado (Merc4x) · Diseñado y desarrollado con Next.js y Tailwind CSS</p>
      </footer>
    </div>
  );
}
