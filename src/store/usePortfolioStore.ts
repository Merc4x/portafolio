import { create } from "zustand";

export type SectionId = "inicio" | "sobre-mi" | "proyectos" | "enfoque" | "stack" | "contacto";

interface PortfolioState {
  theme: "dark" | "light";
  mobileMenuOpen: boolean;
  isBooting: boolean;
  activeSection: SectionId;
  isTransitioning: boolean;
  projectFilter: "all" | "fullstack" | "desktop";
  setTheme: (theme: "dark" | "light") => void;
  setMobileMenuOpen: (open: boolean) => void;
  setIsBooting: (booting: boolean) => void;
  setActiveSection: (section: SectionId) => void;
  triggerSectionTransition: (section: SectionId) => void;
  setProjectFilter: (filter: "all" | "fullstack" | "desktop") => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  theme: "dark",
  mobileMenuOpen: false,
  isBooting: true,
  activeSection: "inicio",
  isTransitioning: false,
  projectFilter: "all",
  setTheme: (theme) => set({ theme }),
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  setIsBooting: (isBooting) => set({ isBooting }),
  setActiveSection: (activeSection) => set({ activeSection }),
  triggerSectionTransition: (section) => {
    set({ activeSection: section, isTransitioning: true, mobileMenuOpen: false });
    setTimeout(() => {
      set({ isTransitioning: false });
    }, 650);
  },
  setProjectFilter: (projectFilter) => set({ projectFilter }),
}));
