import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, Download, ArrowLeft, Globe } from "lucide-react";

const camilaImg = "/camila.png";


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
      "I'm a visual designer specialized in branding and UX/UI for digital products and scalable applications. I focus on clarity, consistency, and detail, creating thoughtful visual systems that elevate user experiences. My approach is minimalistic by nature, yet flexible enough to adapt to diverse brands and creative directions. With experience across complex apps and design systems, I translate ideas into clear, functional visual solutions. I enjoy shaping products from identity to interface, ensuring cohesion across platforms and multidisciplinary teams. Detail-driven and user-centered, I design with purpose, balance, and a strong understanding of how digital products, platforms, and users interact.",
    educationTitle: "Education",
    educationDegree: "Visual Design Professional",
    educationSchool: "Fundación Universitaria Bellas Artes 2009-2014",
    educationBody:
      "Visual Design Understands The Image As A Static, Environmental, Or Interactive Product. It Spans Fields Where Information And Communication Technologies Drive Organizations. The Program Emphasizes Research-Based Creative Processes, Enabling Designers To Justify Outcomes And Apply Replicable Methodologies Across Different Projects.",
    experienceTitle: "Experience",
    company: "CyberTouch Solutions LLC.",
    exp: [
      {
        period: "2014 - 2016",
        role: "Junior Designer",
        text: "Built strong design foundations, supporting branding and UX/UI projects through research and visual execution.",
      },
      {
        period: "2017 - 2019",
        role: "Mid Designer",
        text: "Developed independent design solutions, managing intermediate UX/UI workflows and establishing consistent component libraries.",
      },
      {
        period: "2020 - 2025",
        role: "Senior Designer",
        text: "Led complex branding and UX/UI projects, translating strategy into scalable, consistent digital design systems.",
      },
    ],
    portfolioTitle: "Portfolio",
    filters: {
      all: "All",
      ui: "UI Design",
      brand: "Brand System Design",
      logo: "Logo Design",
    },
    back: "Back",
    labels: { client: "Client", role: "Role", year: "Year", tools: "Tools", scope: "Scope" },
    contactTitle: "Contact me",
    contactSub: "Connect With Me And Let's Start Talking",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone Number",
      service: "Service Of Interest",
      website: "Website",
      details: "Project Details...",
      send: "Send",
    },
    footer: "Designed by Camila Rojas — UI & Graphic Designer",
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      portfolio: "Portafolio",
      contact: "Contáctame",
    },
    hire: "Contrátame",
    downloadCv: "Descargar CV",
    hi: "Hola, soy",
    name: "Camila Rojas",
    role: "Diseñadora UI y Gráfica",
    aboutTitle: "Sobre Mí",
    aboutSub: "Diseñando Interfaces Intuitivas E Identidades Visuales Memorables",
    aboutBody:
      "Soy diseñadora visual especializada en branding y UX/UI para productos digitales y aplicaciones escalables. Me enfoco en la claridad, la consistencia y el detalle, creando sistemas visuales cuidados que elevan la experiencia del usuario. Mi enfoque es minimalista por naturaleza, pero flexible para adaptarse a diversas marcas y direcciones creativas. Con experiencia en aplicaciones complejas y sistemas de diseño, traduzco ideas en soluciones visuales claras y funcionales. Disfruto dar forma a los productos desde la identidad hasta la interfaz, asegurando cohesión entre plataformas y equipos multidisciplinarios. Detallista y centrada en el usuario, diseño con propósito, equilibrio y un profundo entendimiento de cómo los productos digitales, las plataformas y los usuarios interactúan.",
    educationTitle: "Educación",
    educationDegree: "Profesional en Diseño Visual",
    educationSchool: "Fundación Universitaria Bellas Artes 2009-2014",
    educationBody:
      "El Diseño Visual comprende la imagen como un producto estático, ambiental o interactivo. Abarca campos donde las tecnologías de información y comunicación impulsan a las organizaciones. El programa enfatiza procesos creativos basados en la investigación, permitiendo a los diseñadores justificar resultados y aplicar metodologías replicables en diferentes proyectos.",
    experienceTitle: "Experiencia",
    company: "CyberTouch Solutions LLC.",
    exp: [
      {
        period: "2014 - 2016",
        role: "Diseñadora Junior",
        text: "Construí bases sólidas de diseño, apoyando proyectos de branding y UX/UI mediante investigación y ejecución visual.",
      },
      {
        period: "2017 - 2019",
        role: "Diseñadora Intermedia",
        text: "Desarrollé soluciones de diseño de forma independiente, gestionando flujos UX/UI intermedios y estableciendo librerías de componentes consistentes.",
      },
      {
        period: "2020 - 2025",
        role: "Diseñadora Senior",
        text: "Lideré proyectos complejos de branding y UX/UI, traduciendo estrategia en sistemas de diseño digital escalables y consistentes.",
      },
    ],
    portfolioTitle: "Portafolio",
    filters: {
      all: "Todos",
      ui: "Diseño UI",
      brand: "Sistema de Marca",
      logo: "Diseño de Logo",
    },
    back: "Volver",
    labels: { client: "Cliente", role: "Rol", year: "Año", tools: "Herramientas", scope: "Alcance" },
    contactTitle: "Contáctame",
    contactSub: "Conectemos y empecemos a conversar",
    form: {
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      service: "Servicio de Interés",
      website: "Sitio Web",
      details: "Detalles del Proyecto...",
      send: "Enviar",
    },
    footer: "Diseñado por Camila Rojas — UI y Diseñadora Gráfica",
  },
} as const;

const skills = [
  { name: "Figma", pct: 90, label: "Fi" },
  { name: "Adobe XD", pct: 90, label: "Xd" },
  { name: "Adobe Photoshop", pct: 80, label: "Ps" },
  { name: "Adobe Illustrator", pct: 100, label: "Ai" },
];

// 24 individual logo PNGs — served directly from /public (case-sensitive on Vercel)
const logoImages = [
  "/20_1b.png",
  "/21_2b.png",
  "/22_3b.png",
  "/23_4b.png",
  "/24_5b.png",
  "/25_6b.png",
  "/26_7b.png",
  "/27_8b.png",
  "/28_9b.png",
  "/29_10b.png",
  "/30_11b.png",
  "/31_12.png",
  "/32_13b.png",
  "/33_14b.png",
  "/34_15b.png",
  "/35_16b.png",
  "/36_17b.png",
  "/37_18b.png",
  "/38_19a.png",
  "/39_20b.png",
  "/40_21b.png",
  "/41_22b.png",
  "/42_23b.png",
  "/43_24b.png",
];

type Cat = "Ui Design" | "Brand System Design";

type Project = {
  name: string;
  cat: Cat;
  images: string[];
  client: string;
  role: string;
  year: string;
  tools: string;
  scope: string;
  description: { en: string; es: string };
};

// UI Design: 6 projects — Brand System Design: 3 projects
const projects: Project[] = [
  {
    name: "DentalDrive",
    cat: "Ui Design",
    images: [
      "/2_rectangle_21.png",
      "/3_rectangle_26.png",
      "/4_rectangle_22.png",
    ],
    client: "CyberTouch Solutions",
    role: "UI Designer",
    year: "2022",
    tools: "Figma, Adobe XD",
    scope: "Web App UI",
    description: {
      en: "For DentalDrive, a cloud-based backup platform for dental professionals, I led the creation of the complete brand and visual identity. Although the logo was provided, I developed the full branding system, including color palette, typography, visual language, and UI direction. My work ensured a cohesive, modern identity that aligned with the product's purpose of securely organizing and managing dental files across devices.",
      es: "Para DentalDrive, una plataforma de respaldo en la nube para profesionales dentales, lideré la creación de la identidad de marca y visual. Aunque el logo fue provisto, desarrollé el sistema completo de branding: paleta, tipografía, lenguaje visual y dirección UI, asegurando una identidad cohesionada y moderna.",
    },
  },
  {
    name: "ProLicensor",
    cat: "Ui Design",
    images: [
      "/5_rectangle_26.png",
      "/6_rectangle_21.png",
      "/7_rectangle_22.png",
    ],
    client: "ProLicensor Inc.",
    role: "UI Designer",
    year: "2022",
    tools: "Figma",
    scope: "SaaS Dashboard",
    description: {
      en: "I created the complete brand identity for ProLicensor, including the logo, visual system, and design language. I also designed both the desktop application and the website for a seamless, unified experience. ProLicensor is a secure vault for purchasing, storing, and managing software licenses, and my work ensured a clear, trustworthy, and intuitive product across all platforms.",
      es: "Creé la identidad de marca completa de ProLicensor: logo, sistema visual y lenguaje de diseño. Diseñé además la aplicación de escritorio y el sitio web para una experiencia unificada. ProLicensor es una bóveda segura para comprar, almacenar y gestionar licencias de software.",
    },
  },
  {
    name: "DentXR",
    cat: "Ui Design",
    images: [
      "/8_rectangle_21.png",
      "/9_rectangle_22.png",
      "/10_rectangle_26.png",
    ],
    client: "DentXR",
    role: "UI & Brand",
    year: "2023",
    tools: "Figma, Illustrator",
    scope: "Brand & Product UI",
    description: {
      en: "I developed the complete visual foundation for DentXR, from designing the logo and brand identity to creating the UI and visual design of the app prototype. The platform uses AI to analyze dental X-rays, detect issues, and generate personalized dental treatment plans. My role included defining the design system, crafting the initial user flows for mobile and desktop, and ensuring visual consistency across the entire product experience.",
      es: "Desarrollé la base visual completa de DentXR: desde el diseño del logo e identidad hasta la UI y el prototipo de la app. La plataforma usa IA para analizar radiografías dentales, detectar problemas y generar planes de tratamiento personalizados.",
    },
  },
  {
    name: "uNext",
    cat: "Ui Design",
    images: [
      "/11_rectangle_21.png",
      "/12_rectangle_26.png",
      "/13_rectangle_22.png",
    ],
    client: "uNext",
    role: "UI Designer",
    year: "2023",
    tools: "Figma",
    scope: "Mobile & Web UI",
    description: {
      en: "I created the entire brand identity and product design for uNext, an advanced communication and productivity platform built for modern dentists. The app enables dentists to connect with patients, coordinate with their team, manage schedules, handle calls, and streamline support tasks—functioning as an integrated assistant and helpdesk system. I designed the logo, visual identity, and the full UI/UX for mobile, desktop, and web. I also led the design team, defining the design system, establishing guidelines, and ensuring consistency across this highly complex, multi-feature application.",
      es: "Creé la identidad de marca y el diseño de producto para uNext, una plataforma avanzada de comunicación y productividad para odontólogos modernos. Diseñé logo, identidad y toda la UX/UI para móvil, escritorio y web, además de liderar el equipo de diseño.",
    },
  },
  {
    name: "DDShared",
    cat: "Ui Design",
    images: [
      "/14_rectangle_26.png",
      "/15_rectangle_21.png",
      "/16_rectangle_22.png",
    ],
    client: "DDShared",
    role: "UI Designer",
    year: "2023",
    tools: "Figma",
    scope: "Web App UI",
    description: {
      en: "I created the complete brand identity and product design for DDShared, a secure cloud platform for sharing and backing up large files. The system focuses on encrypted storage, fast transfers, and safe collaboration across devices. My work included designing the logo, visual identity, and the full UI/UX for the application. I also led the design team, defining the design system, setting visual guidelines, and ensuring a cohesive and secure user experience throughout this high-reliability cloud product.",
      es: "Creé la identidad de marca y el diseño de producto de DDShared, una plataforma segura en la nube para compartir y respaldar archivos grandes. Diseñé logo, identidad y toda la UX/UI, además de liderar el equipo de diseño.",
    },
  },
  {
    name: "DDSMag",
    cat: "Ui Design",
    images: [
      "/17_rectangle_21.png",
      "/18_rectangle_22.png",
      "/19_rectangle_26.png",
    ],
    client: "DDSMag",
    role: "Brand & UI",
    year: "2024",
    tools: "Illustrator, Figma",
    scope: "Editorial Brand",
    description: {
      en: "I designed the full brand identity for DDSMAG, a digital magazine delivering the latest dental news across all devices. My role involved creating the logo, defining the visual style, and designing the complete interface for a seamless multi-platform reading experience.",
      es: "Diseñé la identidad completa de DDSMAG, una revista digital que entrega las últimas noticias dentales en todos los dispositivos. Creé el logo, definí el estilo visual y diseñé la interfaz para una experiencia de lectura multiplataforma.",
    },
  },
  {
    name: "DDSGroup",
    cat: "Brand System Design",
    images: [
      "/44_dds1__4_.png","/45_image_5.png","/46_ddslogo__1_.png",
      "/47_teko__2_.png","/48_image_3.png","/49_dds1__4_.png",
      "/50_teko__2_.png","/51_image_4.png","/52_image_3.png",
      "/53_dds1__4_.png","/54_image_5.png","/55_ddslogo__1_.png",
      "/56_teko__2_.png","/57_image_3.png","/58_image_4.png",
    ],
    client: "DDSGroup",
    role: "Brand Designer",
    year: "2024",
    tools: "Illustrator, Photoshop",
    scope: "Brand System",
    description: {
      en: "Led the end-to-end branding and visual design for DDSGroup and its ecosystem of dental applications, including the creation of the master brand, sub-brand logos, and a unified visual identity system. Defined the design language and UI style guidelines for all applications to ensure a consistent, scalable, and modern user experience across the entire platform.",
      es: "Lideré el branding y diseño visual de extremo a extremo para DDSGroup y su ecosistema de aplicaciones dentales: marca maestra, sub-marcas y sistema de identidad unificado. Definí el lenguaje de diseño y las guías de UI para todas las aplicaciones.",
    },
  },
  {
    name: "DicomShare",
    cat: "Brand System Design",
    images: [
      "/74_rectangle_29.png","/75_rectangle_38.png","/76_rectangle_34.png",
      "/77_rectangle_35.png","/78_rectangle_36.png","/79_rectangle_37.png",
      "/80_rectangle_30.png","/81_rectangle_39.png",
    ],
    client: "DicomShare",
    role: "Brand Designer",
    year: "2024",
    tools: "Illustrator",
    scope: "Brand System",
    description: {
      en: "Designed the complete visual identity and logo system for DICOM Share, a medical imaging platform focused on viewing, managing, and securely sharing X-rays and DICOM files. Developed a modern, clean, and technology-driven brand that communicates innovation, reliability, and ease of use within the healthcare ecosystem.",
      es: "Diseñé la identidad visual y el sistema de logo para DICOM Share, una plataforma de imágenes médicas enfocada en visualizar, gestionar y compartir de forma segura radiografías y archivos DICOM. Marca moderna, limpia y tecnológica.",
    },
  },
  {
    name: "London & Paris",
    cat: "Brand System Design",
    images: [
      "/89_rectangle_49.png","/90_rectangle_45.png","/91_rectangle_46.png",
      "/92_rectangle_47.png","/93_rectangle_48.png","/94_rectangle_72.png",
      "/95_rectangle_67.png","/96_rectangle_68.png",
    ],
    client: "London & Paris",
    role: "Brand Designer",
    year: "2025",
    tools: "Illustrator",
    scope: "Fashion Brand",
    description: {
      en: "London & Paris is a modeling and talent agency dedicated to representing emerging and established talent through a sophisticated and contemporary approach. This project involved the creation of a complete brand identity, developing a refined visual system that reflects elegance, professionalism, and the agency's international fashion-forward vision.",
      es: "London & Paris es una agencia de modelaje y talento dedicada a representar talento emergente y establecido con un enfoque sofisticado y contemporáneo. El proyecto incluyó una identidad de marca completa con un sistema visual refinado.",
    },
  },
];


function Portfolio() {
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

  const toggleLang = () => setLang((l) => (l === "en" ? "es" : "en"));

  const LangButton = ({ className = "" }: { className?: string }) => (
    <button
      onClick={toggleLang}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-border hover:bg-muted transition ${className}`}
      aria-label="Toggle language"
    >
      <Globe size={14} />
      {lang === "en" ? "ES" : "EN"}
    </button>
  );

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((n, i) => (
              <a
                key={n.key}
                href={n.href}
                className={`transition-colors hover:opacity-80 ${
                  i === 0 ? "text-gradient font-semibold" : "text-muted-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <LangButton />
            <a
              href="#contact"
              className="inline-flex px-5 py-2 rounded-md text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-90 transition"
            >
              {L.hire}
            </a>
          </div>
          <div className="md:hidden ml-auto flex items-center gap-2">
            <LangButton />
            <button className="p-2" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/40 px-5 py-4 flex flex-col gap-4 bg-background">
            {nav.map((n) => (
              <a
                key={n.key}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2 text-center rounded-md text-sm font-medium text-white bg-gradient-brand"
            >
              {L.hire}
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-muted-foreground text-lg font-light">{L.hi}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-1">{L.name}</h2>
            <h1 className="mt-4 text-[2rem] sm:text-5xl md:text-[3.75rem] font-extrabold leading-[1.05] text-gradient whitespace-nowrap">
              {L.role}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-md text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-90 transition"
              >
                {L.hire}
              </a>
              <a
                href="/CV-CamilaRojas.pdf"
                download
                className="px-6 py-2.5 rounded-md text-sm font-medium border border-border hover:bg-muted transition"
              >
                {L.downloadCv}
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 justify-self-center md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-brand opacity-30 blur-2xl" />
              <img
                src={camilaImg}
                alt="Camila Rojas"
                width={320}
                height={320}
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">{L.aboutTitle}</h2>
          <p className="mt-3 text-muted-foreground text-sm">{L.aboutSub}</p>
        </div>
        <p className="mt-8 text-muted-foreground leading-[1.9] text-[15px] text-justify">
          {L.aboutBody}
        </p>
        <a
          href="/CV-CamilaRojas.pdf"
          download
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-90 transition"
        >
          <Download size={16} /> {L.downloadCv}
        </a>
      </section>


      {/* EDUCATION */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold">{L.educationTitle}</h2>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">{L.educationDegree}</h3>
          <p className="text-sm text-muted-foreground mt-1">{L.educationSchool}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-4xl">
            {L.educationBody}
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold">{L.experienceTitle}</h2>
        <p className="mt-2 font-medium">{L.company}</p>
        <div className="mt-10 relative grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="hidden md:block absolute top-2 left-[8%] right-[8%] h-px bg-border" />
          {L.exp.map((e) => (
            <div key={e.period} className="relative">
              <div className="w-4 h-4 rounded-full bg-gradient-brand shadow-glow mb-6" />
              <p className="text-sm text-gradient font-semibold">{e.period}</p>
              <p className="mt-2 font-semibold">{e.role}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((s) => (
            <div key={s.name} className="flex flex-col items-center text-center">
              <div
                className="ring-conic w-24 h-24 rounded-full grid place-items-center"
                style={{ ["--pct" as string]: `${s.pct}%` } as React.CSSProperties}
              >
                <div className="w-[86%] h-[86%] rounded-full bg-background grid place-items-center text-lg font-semibold">
                  {s.label}
                </div>
              </div>
              <p className="mt-4 text-gradient font-bold">{s.pct}%</p>
              <p className="text-sm text-muted-foreground">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{L.portfolioTitle}</h2>

        {activeProject ? (
          <div className="mt-8 rounded-xl bg-card border border-border p-5 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <button
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <ArrowLeft size={16} /> {L.back}
              </button>
              <span className="text-xs px-3 py-1 rounded-md text-white bg-gradient-brand shadow-glow">
                {activeProject.cat === "Ui Design" ? L.filters.ui : L.filters.brand}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">{L.labels.client}</dt>
                  <dd className="font-medium mt-1">{activeProject.client}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{L.labels.role}</dt>
                  <dd className="font-medium mt-1">{activeProject.role}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{L.labels.year}</dt>
                  <dd className="font-medium mt-1">{activeProject.year}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{L.labels.tools}</dt>
                  <dd className="font-medium mt-1">{activeProject.tools}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{L.labels.scope}</dt>
                  <dd className="font-medium mt-1">{activeProject.scope}</dd>
                </div>
              </dl>
              <div>
                <div className="aspect-[16/10] rounded-lg overflow-hidden bg-card border border-border">
                  <img
                    src={activeProject.image}
                    alt={activeProject.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{activeProject.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {activeProject.description[lang]}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {filterList.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-4 py-1.5 rounded-md text-sm transition ${
                    filter === f.id
                      ? "text-white bg-gradient-brand shadow-glow"
                      : "text-muted-foreground border border-border hover:bg-muted"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {filter === "Logo Design" ? (
              /* Clean transparent grid of individual logo PNGs */
              <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {logoImages.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square flex items-center justify-center p-3 rounded-xl bg-card/40 hover:bg-card/70 transition-colors"
                  >
                    <img
                      src={src}
                      alt={`Logo design ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {visible.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setActiveProject(p)}
                    className="group text-left rounded-xl overflow-hidden bg-card border border-border hover:border-ring/60 transition"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-card">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {p.cat === "Ui Design" ? L.filters.ui : L.filters.brand}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-3xl px-5 sm:px-8 pb-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{L.contactTitle}</h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">{L.contactSub}</p>
        <form
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder={L.form.name}
            className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring"
          />
          <input
            placeholder={L.form.email}
            type="email"
            className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring"
          />
          <input
            placeholder={L.form.phone}
            className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring"
          />
          <select className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring text-muted-foreground">
            <option>{L.form.service}</option>
            <option>{L.filters.ui}</option>
            <option>{L.filters.brand}</option>
            <option>{L.filters.logo}</option>
          </select>
          <input
            placeholder={L.form.website}
            className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring"
          />
          <textarea
            placeholder={L.form.details}
            rows={5}
            className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring sm:row-span-2"
          />
          <div className="sm:col-span-2 flex justify-end">
            <button className="px-8 py-2.5 rounded-md text-sm font-medium border border-border hover:bg-muted transition">
              {L.form.send}
            </button>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <p className="text-gradient font-bold text-lg">Camila Rojas</p>
          <nav className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.key} href={n.href} className="hover:text-foreground transition">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Mail size={14} /> mariacamirojas@gmail.com
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={14} /> +57 3018584572
            </span>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">{L.footer}</p>
        </div>
      </footer>
    </div>
  );
}
