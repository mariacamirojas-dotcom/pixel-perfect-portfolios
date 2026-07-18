import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, Download, ArrowLeft, Globe } from "lucide-react";

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
    aboutBody:
      "I'm a visual designer specialized in branding and UX/UI for digital products and scalable applications. I focus on clarity, consistency, and detail, creating thoughtful visual systems that elevate user experiences. My approach is minimalistic by nature, yet flexible enough to adapt to diverse brands and creative directions. With experience across complex apps and design systems, I translate ideas into clear, functional visual solutions.",
    educationTitle: "Education",
    educationDegree: "Visual Design Professional",
    educationSchool: "Fundación Universitaria Bellas Artes 2009-2014",
    educationBody:
      "Visual Design Understands The Image As A Static, Environmental, Or Interactive Product. It Spans Fields Where Information And Communication Technologies Drive Organizations.",
    experienceTitle: "Experience",
    company: "CyberTouch Solutions LLC.",
    exp: [
      { period: "2014 - 2016", role: "Junior Designer", text: "Built strong design foundations, supporting branding and UX/UI projects." },
      { period: "2017 - 2019", role: "Mid Designer", text: "Developed independent design solutions, managing intermediate UX/UI workflows." },
      { period: "2020 - 2025", role: "Senior Designer", text: "Led complex branding and UX/UI projects, translating strategy into scalable systems." },
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
    aboutBody:
      "Soy diseñadora visual especializada en branding y UX/UI para productos digitales y aplicaciones escalables. Me enfoco en la claridad, la consistencia y el detalle, creando sistemas visuales cuidados que elevan la experiencia del usuario. Mi enfoque es minimalista por naturaleza, pero flexible para adaptarse a diversas marcas y direcciones creativas. Con experiencia en aplicaciones complejas y sistemas de diseño, traduzco ideas en soluciones visuales claras y funcionales.",
    educationTitle: "Educación",
    educationDegree: "Profesional en Diseño Visual",
    educationSchool: "Fundación Universitaria Bellas Artes 2009-2014",
    educationBody:
      "El Diseño Visual comprende la imagen como un producto estático, ambiental o interactivo. Abarca campos donde las tecnologías de información y comunicación impulsan a las organizaciones.",
    experienceTitle: "Experiencia",
    company: "CyberTouch Solutions LLC.",
    exp: [
      { period: "2014 - 2016", role: "Diseñadora Junior", text: "Construí bases sólidas de diseño, apoyando proyectos de branding y UX/UI." },
      { period: "2017 - 2019", role: "Diseñadora Intermedia", text: "Desarrollé soluciones de diseño de forma independiente, gestionando flujos UX/UI." },
      { period: "2020 - 2025", role: "Diseñadora Senior", text: "Lideré proyectos complejos de branding y UX/UI, traduciendo estrategia en sistemas." },
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

const skills = [
  { name: "Figma", pct: 90, label: "Fi" },
  { name: "Adobe XD", pct: 90, label: "Xd" },
  { name: "Adobe Photoshop", pct: 80, label: "Ps" },
  { name: "Adobe Illustrator", pct: 100, label: "Ai" },
];

const logoImages = [
  "/20_1b.png", "/21_2b.png", "/22_3b.png", "/23_4b.png", "/24_5b.png", "/25_6b.png",
  "/26_7b.png", "/27_8b.png", "/28_9b.png", "/29_10b.png", "/30_11b.png", "/31_12.png",
  "/32_13b.png", "/33_14b.png", "/34_15b.png", "/35_16b.png", "/36_17b.png", "/37_18b.png",
  "/38_19a.png", "/39_20b.png", "/40_21b.png", "/41_22b.png", "/42_23b.png", "/43_24b.png",
];

type Cat = "Ui Design" | "Brand System Design";
type LayoutType = "dental-drive" | "pro-licensor" | "dentxr" | "unext" | "ddshared" | "ddsmag" | "ddsgroup" | "dicomshare" | "london-paris";

type Project = {
  name: string;
  cat: Cat;
  thumbnail: string;
  layoutType: LayoutType;
  images: string[];
  client: string;
  role: string;
  year: string;
  tools: string;
  scope: string;
  description: { en: string; es: string };
};

const projects: Project[] = [
  {
    name: "DentalDrive",
    cat: "Ui Design",
    thumbnail: "/images/dental-drive-thumb.png",
    layoutType: "dental-drive",
    images: ["/images/dental-1.png", "/images/dental-2.png", "/images/dental-3.png", "/images/dental-4.png", "/images/dental-5.png"],
    client: "CyberTouch Solutions",
    role: "UI Designer",
    year: "2022",
    tools: "Figma, Adobe XD",
    scope: "Web App UI",
    description: {
      en: "For DentalDrive, a cloud-based backup platform for dental professionals, I led the creation of the complete brand visual identity and web layout system.",
      es: "Para DentalDrive, una plataforma de respaldo en la nube para profesionales dentales, lideré la creación de la identidad visual de marca y el sistema de pantallas web.",
    },
  },
  {
    name: "ProLicensor",
    cat: "Ui Design",
    thumbnail: "/images/pro-thumb.png",
    layoutType: "pro-licensor",
    images: ["/images/pro-1.png", "/images/pro-2.png", "/images/pro-3.png", "/images/pro-4.png"],
    client: "ProLicensor Inc.",
    role: "UI Designer",
    year: "2022",
    tools: "Figma",
    scope: "SaaS Dashboard",
    description: {
      en: "I created the complete brand identity for ProLicensor, including desktop application dashboards and user workflow architecture.",
      es: "Creé la identidad de marca completa de ProLicensor, incluyendo los dashboards de la aplicación de escritorio y la arquitectura de flujos.",
    },
  },
  {
    name: "DentXR",
    cat: "Ui Design",
    thumbnail: "/images/dentxr-thumb.png",
    layoutType: "dentxr",
    images: ["/images/dentxr-1.png", "/images/dentxr-2.png", "/images/dentxr-3.png"],
    client: "DentXR",
    role: "UI & Brand",
    year: "2023",
    tools: "Figma, Illustrator",
    scope: "Brand & Product UI",
    description: {
      en: "The platform uses AI to analyze dental X-rays, detect issues, and display precise clinical data in an dark-themed elegant interface.",
      es: "La plataforma utiliza IA para analizar radiografías dentales, detectar problemas y mostrar datos clínicos precisos en una interfaz oscura y elegante.",
    },
  },
  {
    name: "uNext",
    cat: "Ui Design",
    thumbnail: "/images/unext-thumb.png",
    layoutType: "unext",
    images: ["/images/unext-1.png", "/images/unext-2.png", "/images/unext-3.png", "/images/unext-4.png"],
    client: "uNext",
    role: "UI Designer",
    year: "2023",
    tools: "Figma",
    scope: "Mobile & Web UI",
    description: {
      en: "An advanced communication and productivity platform built for modern dentists. Features clean grids and minimal UI modules.",
      es: "Una plataforma avanzada de comunicación y productividad para odontólogos modernos. Destaca por sus cuadrículas limpias y módulos UI minimalistas.",
    },
  },
  {
    name: "DDShared",
    cat: "Ui Design",
    thumbnail: "/images/ddshared-thumb.png",
    layoutType: "ddshared",
    images: ["/images/ddshared-1.png", "/images/ddshared-2.png", "/images/ddshared-3.png", "/images/ddshared-4.png"],
    client: "DDShared",
    role: "UI Designer",
    year: "2023",
    tools: "Figma",
    scope: "Web App UI",
    description: {
      en: "Secure cloud platform for sharing and backing up large clinical files with encrypted components and data indicators.",
      es: "Plataforma segura en la nube para compartir y respaldar archivos clínicos grandes con componentes encriptados e indicadores de datos.",
    },
  },
  {
    name: "DDSMag",
    cat: "Ui Design",
    thumbnail: "/images/ddsmag-thumb.png",
    layoutType: "ddsmag",
    images: ["/images/ddsmag-1.png", "/images/ddsmag-2.png", "/images/ddsmag-3.png", "/images/ddsmag-4.png"],
    client: "DDSMag",
    role: "Brand & UI",
    year: "2024",
    tools: "Illustrator, Figma",
    scope: "Editorial Brand",
    description: {
      en: "A multi-device digital magazine layout focused on typography hierarchy and clean structural components.",
      es: "Diseño de revista digital multidispositivo enfocado en jerarquías tipográficas claras y componentes estructurales limpios.",
    },
  },
  {
    name: "DDSGroup",
    cat: "Brand System Design",
    thumbnail: "/images/ddsgroup-thumb.png",
    layoutType: "ddsgroup",
    images: logoImages,
    client: "DDSGroup",
    role: "Brand Designer",
    year: "2024",
    tools: "Illustrator, Photoshop",
    scope: "Brand System",
    description: {
      en: "Master identity system and logofolio design for the complete ecosystem of applications and corporate sub-brands.",
      es: "Sistema de identidad maestro y diseño de logofolio para el ecosistema completo de aplicaciones y sub-marcas corporativas.",
    },
  },
  {
    name: "DicomShare",
    cat: "Brand System Design",
    thumbnail: "/images/dicom-thumb.png",
    layoutType: "dicomshare",
    images: ["/images/dicom-1.png", "/images/dicom-2.png", "/images/dicom-3.png", "/images/dicom-4.png"],
    client: "DicomShare",
    role: "Brand Designer",
    year: "2024",
    tools: "Illustrator",
    scope: "Brand System",
    description: {
      en: "Visual identity and logo systems for medical imaging software platforms with asymmetric presentation grids.",
      es: "Identidad visual y sistemas de logotipos para plataformas de software de imágenes médicas con cuadrículas de presentación asimétricas.",
    },
  },
  {
    name: "London & Paris",
    cat: "Brand System Design",
    thumbnail: "/images/london-thumb.png",
    layoutType: "london-paris",
    images: ["/images/london-1.png", "/images/london-2.png", "/images/london-3.png", "/images/london-4.png", "/images/london-5.png"],
    client: "London & Paris",
    role: "Brand Designer",
    year: "2025",
    tools: "Illustrator",
    scope: "Fashion Brand",
    description: {
      en: "A refined visual layout system reflecting elegance, editorial pacing, and high-fashion minimalism.",
      es: "Un refinado sistema de diseño visual que refleja elegancia, ritmo editorial y minimalismo de alta costura.",
    },
  },
];

// Componente auxiliar para mitigar imágenes rotas durante dev
function SafeImage({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`w-full h-full bg-neutral-900/40 border border-neutral-800 flex items-center justify-center p-4 text-[10px] tracking-wider text-neutral-500 font-mono uppercase ${className}`}>
        Placeholder: {alt || "UI View"}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      onError={() => setError(true)}
    />
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const [filter, setFilter] = useState<"All" | Cat | "Logo Design">("All");
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const L = t[lang];

  const nav = [
    { key: "home", label: L.nav.home, href: "#home" },
    { key: "about", label: L.nav.about, href: "#about" },
    { key: "portfolio", label: L.nav.portfolio, href: "#portfolio" },
    { key: "contact", label: L.nav.contact, href: "#contact" },
  ];

  const filterList: Array<{ id: "All" | Cat | "Logo Design"; label: string }> = [
    { id: "All", label: L.filters.all },
    { id: "Ui Design", label: L.filters.ui },
    { id: "Brand System Design", label: L.filters.brand },
    { id: "Logo Design", label: L.filters.logo },
  ];

  const visible =
    filter === "Logo Design"
      ? []
      : projects.filter((p) => filter === "All" || p.cat === filter);

  const renderProjectGrid = (project: Project) => {
    const imgs = project.images;

    switch (project.layoutType) {
      case "dental-drive":
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch w-full">
            <div className="md:col-span-5 aspect-square md:aspect-auto rounded-xl overflow-hidden bg-neutral-900/20 flex items-center justify-center p-4">
              <SafeImage src={imgs[0]} alt="Brand Highlight" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              {imgs.slice(1, 5).map((src, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900/10">
                  <SafeImage src={src} alt={`UI State ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        );

      case "pro-licensor":
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
            <div className="md:col-span-5 aspect-square md:aspect-auto min-h-[260px] bg-white rounded-xl overflow-hidden flex items-center justify-center p-8 shadow-inner">
              <SafeImage src={imgs[0]} alt="White Logo Block" className="max-w-full max-h-full object-contain filter invert-0" />
            </div>
            <div className="md:col-span-7 flex flex-col gap-4">
              {imgs.slice(1, 4).map((src, idx) => (
                <div key={idx} className="aspect-[16/6] rounded-xl overflow-hidden bg-neutral-900/10">
                  <SafeImage src={src} alt={`Dashboard Screen ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        );

      case "dentxr":
        return (
          <div className="space-y-4 w-full">
            <div className="aspect-[21/9] rounded-xl overflow-hidden bg-neutral-900/20">
              <SafeImage src={imgs[0]} alt="Hero Dashboard" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900/10">
                <SafeImage src={imgs[1]} alt="Interface Focus" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900/10">
                <SafeImage src={imgs[2] || imgs[0]} alt="Component Spec Card" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        );

      case "unext":
        return (
          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
            {imgs.slice(0, 4).map((src, idx) => (
              <div key={idx} className="aspect-square bg-neutral-50/5 rounded-xl overflow-hidden p-3 flex items-center justify-center border border-neutral-800/20">
                <SafeImage src={src} alt={`Grid Clean Module ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        );

      case "ddshared":
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
            <div className="md:col-span-5 aspect-square md:aspect-auto min-h-[260px] bg-neutral-900/40 rounded-xl overflow-hidden flex items-center justify-center p-6">
              <SafeImage src={imgs[0]} alt="Encrypted Storage Logo Block" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="md:col-span-7 flex flex-col gap-4">
              {imgs.slice(1, 4).map((src, idx) => (
                <div key={idx} className="aspect-[16/6] rounded-xl overflow-hidden bg-neutral-900/10">
                  <SafeImage src={src} alt={`Cloud UI Screen ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        );

      case "ddsmag":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="aspect-square bg-white rounded-xl overflow-hidden flex items-center justify-center p-8">
              <SafeImage src={imgs[0]} alt="Editorial Magazine Logo" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="flex flex-col gap-4 justify-between">
              {imgs.slice(1, 4).map((src, idx) => (
                <div key={idx} className="flex-1 min-h-[110px] rounded-xl overflow-hidden bg-neutral-900/10">
                  <SafeImage src={src} alt={`Editorial Layout Spec ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        );

      case "ddsgroup":
        return (
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 bg-neutral-900/10 p-6 rounded-xl border border-neutral-800/10 w-full">
            {imgs.map((src, idx) => (
              <div key={idx} className="aspect-square flex items-center justify-center p-3 rounded-lg bg-neutral-950/40 border border-neutral-800/30 transition hover:border-neutral-700">
                <SafeImage src={src} alt={`Logofolio item ${idx + 1}`} className="w-full h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        );

      case "dicomshare":
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
            <div className="md:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900/10">
                <SafeImage src={imgs[0]} alt="Clinical View Portrait 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900/10">
                <SafeImage src={imgs[1]} alt="Clinical View Portrait 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="flex-1 min-h-[160px] rounded-xl overflow-hidden bg-neutral-900/10">
                <SafeImage src={imgs[2]} alt="Diagnostic Interface Large" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-h-[110px] rounded-xl overflow-hidden bg-neutral-900/10">
                <SafeImage src={imgs[3]} alt="UI Action Bar Module" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        );

      case "london-paris":
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch w-full">
            <div className="md:col-span-8 grid grid-cols-2 gap-4">
              {imgs.slice(0, 4).map((src, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900/10">
                  <SafeImage src={src} alt={`Fashion Book Spec ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="md:col-span-4 aspect-square md:aspect-auto rounded-xl bg-neutral-950 overflow-hidden flex items-center justify-center p-1 border border-neutral-900">
              <SafeImage src={imgs[4] || imgs[0]} alt="Editorial Identity Poster" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        );

      default:
        return (
          <div className="aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900/10 w-full">
            <SafeImage src={project.thumbnail} alt={project.name} className="w-full h-full object-cover" />
          </div>
        );
    }
  };

  return (
    <div id="home" className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <a key={n.key} href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === "en" ? "es" : "en")} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-border hover:bg-muted transition">
              <Globe size={14} /> {lang === "en" ? "ES" : "EN"}
            </button>
            <a href="#contact" className="inline-flex px-5 py-2 rounded-md text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-90 transition">
              {L.hire}
            </a>
            <button onClick={() => setOpen(!open)} className="p-2 md:hidden text-muted-foreground hover:text-foreground">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-b border-border/40 bg-background px-5 py-4 space-y-3 flex flex-col text-sm">
            {nav.map((n) => (
              <a key={n.key} href={n.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground block">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-24 pb-20 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-gradient">{L.hi}</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none text-foreground">{L.name}</h1>
          <p className="text-xl sm:text-2xl font-light text-muted-foreground">{L.role}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a href="#contact" className="px-6 py-3 rounded-md text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-90 transition">
              {L.hire}
            </a>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-border hover:bg-muted transition text-muted-foreground hover:text-foreground">
              <Download size={16} /> {L.downloadCv}
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-brand opacity-25 blur-3xl absolute -z-10 animate-pulse" />
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-card border border-border/60 shadow-xl overflow-hidden flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">[ Avatar Placeholder ]</span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 border-t border-border/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-gradient">{L.aboutTitle}</h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-snug">{L.aboutSub}</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground font-light leading-relaxed text-justify whitespace-pre-line">{L.aboutBody}</p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12 bg-card/20 rounded-2xl border border-border/40 my-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center font-bold text-sm text-gradient shadow-sm">
                {s.label}
              </div>
              <div>
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.pct}% Proficiency</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 border-t border-border/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-gradient">{L.educationTitle}</h2>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-foreground">{L.educationDegree}</h3>
              <p className="text-xs text-muted-foreground font-medium">{L.educationSchool}</p>
              <p className="text-xs text-muted-foreground/80 leading-relaxed pt-2 font-light">{L.educationBody}</p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-gradient">{L.experienceTitle}</h2>
            <div className="border-l border-border/60 pl-6 space-y-8">
              {L.exp.map((item, idx) => (
                <div key={idx} className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-border border border-background" />
                  <span className="text-xs font-mono text-muted-foreground font-semibold">{item.period}</span>
                  <h4 className="text-lg font-bold text-foreground">{item.role} <span className="text-sm font-normal text-muted-foreground">/ {L.company}</span></h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 border-t border-border/20">
        <h2 className="text-3xl sm:text-4xl font-black text-center tracking-tight mb-8">{L.portfolioTitle}</h2>

        {activeProject ? (
          <div className="mt-8 border-t border-border/30 pt-10 animate-fadeIn">
            <div className="flex items-center justify-between gap-4 mb-12">
              <button onClick={() => setActiveProject(null)} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition">
                <ArrowLeft size={14} /> {L.back}
              </button>
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground bg-neutral-900/40 px-3 py-1 rounded-full border border-neutral-800/40">
                {activeProject.cat === "Ui Design" ? L.filters.ui : L.filters.brand}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-x-16 gap-y-10 items-start">
              <dl className="space-y-6 text-xs tracking-wide">
                <div>
                  <dt className="text-muted-foreground uppercase font-medium">{L.labels.client}</dt>
                  <dd className="font-semibold text-foreground mt-1.5 text-sm">{activeProject.client}</dd>
                </div>
                <div className="border-t border-border/20 pt-4">
                  <dt className="text-muted-foreground uppercase font-medium">{L.labels.role}</dt>
                  <dd className="font-semibold text-foreground mt-1.5 text-sm">{activeProject.role}</dd>
                </div>
                <div className="border-t border-border/20 pt-4">
                  <dt className="text-muted-foreground uppercase font-medium">{L.labels.year}</dt>
                  <dd className="font-semibold text-foreground mt-1.5 text-sm">{activeProject.year}</dd>
                </div>
                <div className="border-t border-border/20 pt-4">
                  <dt className="text-muted-foreground uppercase font-medium">{L.labels.tools}</dt>
                  <dd className="font-semibold text-foreground mt-1.5 text-sm">{activeProject.tools}</dd>
                </div>
                <div className="border-t border-border/20 pt-4">
                  <dt className="text-muted-foreground uppercase font-medium">{L.labels.scope}</dt>
                  <dd className="font-semibold text-foreground mt-1.5 text-sm">{activeProject.scope}</dd>
                </div>
              </dl>

              <div className="space-y-10 w-full">
                {renderProjectGrid(activeProject)}
                <div className="max-w-3xl pt-2 border-t border-neutral-900">
                  <p className="text-muted-foreground leading-[1.8] text-[14px] text-justify font-light">
                    {activeProject.description[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-2">
              {filterList.map((f) => (
                <button key={f.id} onClick={() => setFilter(f.id)} className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${filter === f.id ? "text-white bg-gradient-brand shadow-glow" : "text-muted-foreground border border-border hover:bg-muted"}`}>
                  {f.label}
                </button>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {visible.map((p) => (
                <button key={p.name} onClick={() => { setActiveProject(p); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }} className="group text-left rounded-xl overflow-hidden bg-card border border-border hover:border-ring/60 transition duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden bg-neutral-900/20">
                    <SafeImage src={p.thumbnail} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 bg-neutral-950/20">
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.cat === "Ui Design" ? L.filters.ui : L.filters.brand}</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 border-t border-border/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-widest font-semibold text-gradient">{L.contactTitle}</h2>
              <h3 className="text-3xl font-bold tracking-tight">{L.contactSub}</h3>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground font-light">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>contacto@camilarojas.design</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>+57 300 000 0000</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder={L.form.name} className="w-full bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-ring" />
                <input type="email" placeholder={L.form.email} className="w-full bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-ring" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder={L.form.phone} className="w-full bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-ring" />
                <input type="text" placeholder={L.form.service} className="w-full bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-ring" />
              </div>
              <input type="url" placeholder={L.form.website} className="w-full bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-ring" />
              <textarea rows={4} placeholder={L.form.details} className="w-full bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-ring resize-none" />
              <button type="submit" className="px-6 py-2.5 rounded-md text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-90 transition float-right">
                {L.form.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-8 bg-neutral-950/20 text-center text-xs text-muted-foreground font-light">
        <p>{L.footer}</p>
      </footer>
    </div>
  );
}
