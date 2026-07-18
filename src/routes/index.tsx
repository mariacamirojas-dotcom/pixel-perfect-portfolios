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
    aboutBody: "I'm a visual designer specialized in branding and UX/UI for digital products and scalable applications. I focus on clarity, consistency, and detail, creating thoughtful visual systems that elevate user experiences.",
    educationTitle: "Education",
    educationDegree: "Visual Design Professional",
    educationSchool: "Fundación Universitaria Bellas Artes 2009-2014",
    educationBody: "Visual Design Understands The Image As A Static, Environmental, Or Interactive Product.",
    experienceTitle: "Experience",
    company: "CyberTouch Solutions LLC.",
    exp: [
      { period: "2014 - 2016", role: "Junior Designer", text: "Built strong design foundations." },
      { period: "2017 - 2019", role: "Mid Designer", text: "Developed independent design solutions." },
      { period: "2020 - 2025", role: "Senior Designer", text: "Led complex branding and UX/UI projects." },
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
    aboutBody: "Soy diseñadora visual especializada en branding y UX/UI para productos digitales y aplicaciones escalables. Me enfoco en la claridad, la consistencia y el detalle.",
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

type Cat = "Ui Design" | "Brand System Design";
type Project = { name: string; cat: Cat; images: string[]; client: string; role: string; year: string; tools: string; scope: string; description: { en: string; es: string } };

const projects: Project[] = [
  { name: "DentalDrive", cat: "Ui Design", images: ["/2_rectangle_21.png", "/20_1b.png"], client: "CyberTouch Solutions", role: "UI Designer", year: "2022", tools: "Figma, Adobe XD", scope: "Web App UI", description: { en: "For DentalDrive...", es: "Para DentalDrive..." } },
  { name: "ProLicensor", cat: "Ui Design", images: ["/3_rectangle_26.png", "/21_2b.png", "/22_3b.png"], client: "ProLicensor Inc.", role: "UI Designer", year: "2022", tools: "Figma", scope: "SaaS Dashboard", description: { en: "I created...", es: "Creé la identidad..." } },
  { name: "DentXR", cat: "Ui Design", images: ["/4_rectangle_22.png", "/23_4b.png", "/24_5b.png", "/25_6b.png"], client: "DentXR", role: "UI & Brand", year: "2023", tools: "Figma, Illustrator", scope: "Brand & Product UI", description: { en: "I developed...", es: "Desarrollé la base..." } },
  { name: "uNext", cat: "Ui Design", images: ["/5_rectangle_26.png", "/26_7b.png", "/27_8b.png"], client: "uNext", role: "UI Designer", year: "2023", tools: "Figma", scope: "Mobile & Web UI", description: { en: "I created...", es: "Creé la identidad..." } },
  { name: "DDShared", cat: "Ui Design", images: ["/6_rectangle_21.png", "/28_9b.png", "/29_10b.png"], client: "DDShared", role: "UI Designer", year: "2023", tools: "Figma", scope: "Web App UI", description: { en: "I created...", es: "Creé la identidad..." } },
  { name: "DDSMag", cat: "Ui Design", images: ["/7_rectangle_22.png", "/30_11b.png", "/31_12.png"], client: "DDSMag", role: "Brand & UI", year: "2024", tools: "Illustrator, Figma", scope: "Editorial Brand", description: { en: "I designed...", es: "Diseñé la identidad..." } },
  { name: "DDSGroup", cat: "Brand System Design", images: ["/8_rectangle_21.png", "/32_13b.png", "/33_14b.png", "/34_15b.png"], client: "DDSGroup", role: "Brand Designer", year: "2024", tools: "Illustrator, Photoshop", scope: "Brand System", description: { en: "Led the...", es: "Lideré el branding..." } },
  { name: "DicomShare", cat: "Brand System Design", images: ["/9_rectangle_22.png", "/35_16b.png", "/36_17b.png"], client: "DicomShare", role: "Brand Designer", year: "2024", tools: "Illustrator", scope: "Brand System", description: { en: "Designed the...", es: "Diseñé la identidad..." } },
  { name: "London & Paris", cat: "Brand System Design", images: ["/10_rectangle_26.png", "/37_18b.png", "/38_19a.png", "/39_20b.png"], client: "London & Paris", role: "Brand Designer", year: "2025", tools: "Illustrator", scope: "Fashion Brand", description: { en: "London & Paris is...", es: "London & Paris es..." } },
];

function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const L = t[lang];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">{L.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {projects.map((p) => (
          <div key={p.name} className="border rounded-lg overflow-hidden">
            <img src={p.images[0]} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold">{p.name}</h2>
              <p className="text-sm text-gray-600">{p.cat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```[cite: 1]
