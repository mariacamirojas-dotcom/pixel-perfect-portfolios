import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, Download, ArrowLeft, Globe } from "lucide-react";
import camilaPng from "@/assets/camila.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

type Lang = "en" | "es";

const t = {
  en: {
    nav: { home: "Home", about: "About me", portfolio: "Portfolio", contact: "Contact me" },
    hire: "Hire Me",
    downloadCv: "Download CV",
    hi: "Hi I am",
    name: "Camila Rojas",
    role: "UI & Graphic Designer",
    aboutTitle: "About Me",
    aboutSub: "Designing Intuitive Interfaces And Memorable Visual Identities",
    aboutBody: "I'm a visual designer specialized in branding and UX/UI for digital products and scalable applications. I focus on clarity, consistency, and detail, creating thoughtful visual systems that elevate user experiences. My approach is minimalistic by nature, yet flexible enough to adapt to diverse brands and creative directions.",
    educationTitle: "Education",
    educationDegree: "Visual Design Professional",
    educationSchool: "Fundación Universitaria Bellas Artes 2009-2014",
    educationBody: "Visual Design Understands The Image As A Static, Environmental, Or Interactive Product.",
    experienceTitle: "Experience",
    company: "CyberTouch Solutions LLC.",
    exp: [
      { period: "2014 - 2016", role: "Junior Designer", text: "Built strong design foundations, supporting branding and UX/UI projects through research and visual execution." },
      { period: "2017 - 2019", role: "Mid Designer", text: "Developed independent design solutions, managing intermediate UX/UI workflows." },
      { period: "2020 - 2025", role: "Senior Designer", text: "Led complex branding and UX/UI projects, translating strategy into scalable, consistent digital design systems." },
    ],
    portfolioTitle: "Portfolio",
    filters: { all: "All", ui: "UI Design", brand: "Brand System Design", logo: "Logo Design" },
    back: "Back",
    labels: { client: "Client", role: "Role", year: "Year", tools: "Tools", scope: "Scope" },
    contactTitle: "Contact me",
    contactSub: "Connect With Me And Let's Start Talking",
    form: { name: "Name", email: "Email", phone: "Phone Number", service: "Service Of Interest", website: "Website", details: "Project Details...", send: "Send" },
    footer: "Designed by Camila Rojas — UI & Graphic Designer",
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", portfolio: "Portafolio", contact: "Contáctame" },
    hire: "Contrátame",
    downloadCv: "Descargar CV",
    hi: "Hola, soy",
    name: "Camila Rojas",
    role: "Diseñadora UI y Gráfica",
    aboutTitle: "Sobre Mí",
    aboutSub: "Diseñando Interfaces Intuitivas E Identidades Visuales Memorables",
    aboutBody: "Soy diseñadora visual especializada en branding y UX/UI para productos digitales y aplicaciones escalables. Me enfoco en la claridad, la consistencia y el detalle, creando sistemas visuales cuidados.",
    educationTitle: "Educación",
    educationDegree: "Profesional en Diseño Visual",
    educationSchool: "Fundación Universitaria Bellas Artes 2009-2014",
    educationBody: "El Diseño Visual comprende la imagen como un producto estático, ambiental o interactivo.",
    experienceTitle: "Experiencia",
    company: "CyberTouch Solutions LLC.",
    exp: [
      { period: "2014 - 2016", role: "Diseñadora Junior", text: "Construí bases sólidas de diseño." },
      { period: "2017 - 2019", role: "Diseñadora Intermedia", text: "Desarrollé soluciones de diseño de forma independiente." },
      { period: "2020 - 2025", role: "Diseñadora Senior", text: "Lideré proyectos complejos de branding y UX/UI." },
    ],
    portfolioTitle: "Portafolio",
    filters: { all: "Todos", ui: "Diseño UI", brand: "Sistema de Marca", logo: "Diseño de Logo" },
    back: "Volver",
    labels: { client: "Cliente", role: "Rol", year: "Año", tools: "Herramientas", scope: "Alcance" },
    contactTitle: "Contáctame",
    contactSub: "Conectemos y empecemos a conversar",
    form: { name: "Nombre", email: "Correo", phone: "Teléfono", service: "Servicio de Interés", website: "Sitio Web", details: "Detalles del Proyecto...", send: "Enviar" },
    footer: "Diseñado por Camila Rojas — UI y Diseñadora Gráfica",
  },
} as const;

function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
        <h1 className="text-2xl font-bold">Portafolio de Camila Rojas</h1>
        <p>Estructura original restaurada.</p>
    </div>
  );
}
