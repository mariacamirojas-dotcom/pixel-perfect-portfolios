import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, Download, ArrowLeft } from "lucide-react";
import headshotAsset from "@/assets/portfolio/headshot.png.asset.json";
import dentalDriveAsset from "@/assets/portfolio/dentaldrive.png.asset.json";
import proficensorAsset from "@/assets/portfolio/proficensor.png.asset.json";
import dentxrAsset from "@/assets/portfolio/dentxr.png.asset.json";
import unextAsset from "@/assets/portfolio/unext.png.asset.json";
import ddsharedAsset from "@/assets/portfolio/ddshared.png.asset.json";
import ddsmagAsset from "@/assets/portfolio/ddsmag.png.asset.json";
import ddsfixAsset from "@/assets/portfolio/ddsfix.png.asset.json";
import dicomshareAsset from "@/assets/portfolio/dicomshare.png.asset.json";
import londonParisAsset from "@/assets/portfolio/londonparis.png.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact me", href: "#contact" },
];

const skills = [
  { name: "Figma", pct: 90, label: "Fi" },
  { name: "Adobe XD", pct: 90, label: "Xd" },
  { name: "Adobe Photoshop", pct: 80, label: "Ps" },
  { name: "Adobe Illustrator", pct: 100, label: "Ai" },
];

const experience = [
  {
    period: "2014 - 2016",
    role: "Junior Designer",
    text: "Delivered daily translations, supporting branding and UX/UI projects through research and visual execution.",
  },
  {
    period: "2017 - 2019",
    role: "Mid Designer",
    text: "Developed independent design solutions, managing live models UX/UI workflows and establishing consistent component libraries.",
  },
  {
    period: "2020 - 2025",
    role: "Senior Designer",
    text: "Led cross-team branding and UX/UI projects, translating strategy into scalable, consistent digital design systems.",
  },
];

type Project = {
  name: string;
  tag: string;
  cat: string;
  image: string;
  client: string;
  role: string;
  year: string;
  tools: string;
  scope: string;
  description: string;
};

const projects: Project[] = [
  { name: "DentalDrive", tag: "UI Design", cat: "UI Design", image: dentalDriveAsset.url, client: "CyberTouch Solutions", role: "UI Designer", year: "2022", tools: "Figma, Adobe XD", scope: "Web App UI", description: "DentalDrive is a dental practice management platform designed to streamline daily workflows for clinics. The UI focuses on clarity, quick access to patient records and a consistent visual language across every module of the product." },
  { name: "Proficensor", tag: "UI Design", cat: "UI Design", image: proficensorAsset.url, client: "Proficensor Inc.", role: "UI Designer", year: "2022", tools: "Figma", scope: "SaaS Dashboard", description: "Proficensor is a monitoring dashboard for professional exams. The interface highlights data density with a calm, focused layout, giving proctors the tools they need without noise." },
  { name: "DentXR", tag: "UI & Graphic Design", cat: "Brand System Design", image: dentxrAsset.url, client: "DentXR", role: "UI & Brand", year: "2023", tools: "Figma, Illustrator", scope: "Brand & Product UI", description: "DentXR blends dental imaging with immersive XR experiences. The visual system merges a bold gradient identity with a precise product UI, connecting brand and interface." },
  { name: "uNext", tag: "UI Design", cat: "UI Design", image: unextAsset.url, client: "uNext", role: "UI Designer", year: "2023", tools: "Figma", scope: "Mobile & Web UI", description: "uNext is a learning platform focused on continuous education. The UI proposes a light, editorial feel across mobile and desktop, keeping content the main character." },
  { name: "DDShared", tag: "UI Design", cat: "UI Design", image: ddsharedAsset.url, client: "DentalDrive", role: "UI Designer", year: "2023", tools: "Figma", scope: "Web App UI", description: "DDShared extends the DentalDrive ecosystem with collaboration features. The UI emphasises shared workspaces and a fast, keyboard-friendly navigation." },
  { name: "DDSMag", tag: "UI Design", cat: "Brand System Design", image: ddsmagAsset.url, client: "DDS Magazine", role: "Brand & UI", year: "2024", tools: "Illustrator, Figma", scope: "Editorial Brand", description: "DDSMag is an editorial brand for the dental industry. The system combines strong typography with a bold red accent, applied consistently across print and digital pieces." },
  { name: "DDSFix", tag: "Brand System Design", cat: "Brand System Design", image: ddsfixAsset.url, client: "DDSFix", role: "Brand Designer", year: "2024", tools: "Illustrator, Photoshop", scope: "Brand System", description: "DDSFix is a repair and maintenance service. The identity leans on a violet palette with confident marks, applied across stationery, apparel and digital touchpoints." },
  { name: "Dicom Share", tag: "Brand System Design", cat: "Brand System Design", image: dicomshareAsset.url, client: "Dicom Share", role: "Brand Designer", year: "2024", tools: "Illustrator", scope: "Brand System", description: "Dicom Share is a medical imaging exchange service. The brand system relies on a clean geometric mark and a cool palette that translates trust and precision." },
  { name: "London & Paris Fashion", tag: "Brand System Design", cat: "Logo Design", image: londonParisAsset.url, client: "London & Paris Fashion", role: "Logo Designer", year: "2025", tools: "Illustrator", scope: "Logo & Wordmark", description: "A refined logo exploration for a fashion label bridging London and Paris. The wordmark balances editorial serif details with a modern, restrained rhythm." },
];

const filters = ["All", "UI Design", "Brand System Design", "Logo Design"];


function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const visible = projects.filter((p) => filter === "All" || p.cat === filter);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((n, i) => (
              <a key={n.label} href={n.href} className={`transition-colors hover:opacity-80 ${i === 0 ? "text-gradient font-semibold" : "text-muted-foreground"}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex px-5 py-2 rounded-md text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-90 transition">
            Hire Me
          </a>
          <button className="md:hidden ml-auto p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/40 px-5 py-4 flex flex-col gap-4 bg-background">
            {nav.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-muted-foreground">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-5 py-2 text-center rounded-md text-sm font-medium text-white bg-gradient-brand">Hire Me</a>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="text-muted-foreground text-lg">Hi I am</p>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-1">Camila Rojas</h2>
            <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gradient">
              UI &amp; Graphic Designer
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-6 py-2.5 rounded-md text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-90 transition">Hire Me</a>
              <a href="#" className="px-6 py-2.5 rounded-md text-sm font-medium border border-border hover:bg-muted transition">Download CV</a>
            </div>
          </div>
          <div className="justify-self-center md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-brand opacity-30 blur-2xl" />
              <img
                src={camila}
                alt="Camila Rojas"
                width={288}
                height={288}
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover grayscale border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-3xl px-5 sm:px-8 pb-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        <p className="mt-3 text-muted-foreground text-sm">Designing Intuitive Interfaces And Memorable Visual Identities</p>
        <p className="mt-8 text-muted-foreground leading-relaxed">
          I'm a visual designer specialized in branding and UX/UI for digital products and scalable applications. I focus on clarity, consistency, and detail, creating thoughtful visual systems that elevate user experiences. My approach is minimalistic by nature, yet flexible enough to adapt to diverse brands and creative directions. With experience across complex apps and design systems, I translate ideas into clear, functional visual solutions. I enjoy shaping products from identity to interface, ensuring cohesion across platforms and multidisciplinary teams. Detail-driven and user-centered, I design with purpose, balance, and a strong understanding of how digital products, platforms, and users interact.
        </p>
        <a href="#" className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-90 transition">
          <Download size={16} /> Download CV
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Visual Design Professional</h3>
          <p className="text-sm text-muted-foreground mt-1">Fundación Universitaria Bellas Artes 2009-2014</p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-4xl">
            Visual Design Understands The Image As A Static, Environmental, Or Interactive Product. It Spans Fields Where Information And Communication Technologies Drive Organizations. The Program Emphasizes Research-Based Creative Processes, Enabling Designers To Justify Outcomes And Apply Replicable Methodologies Across Different Projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
        <p className="mt-2 font-medium">CyberTouch Solutions LLC.</p>
        <div className="mt-10 relative grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="hidden md:block absolute top-2 left-[8%] right-[8%] h-px bg-border" />
          {experience.map((e) => (
            <div key={e.period} className="relative">
              <div className="w-4 h-4 rounded-full bg-gradient-brand shadow-glow mb-6" />
              <p className="text-sm text-gradient font-semibold">{e.period}</p>
              <p className="mt-2 font-semibold">{e.role}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

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

      <section id="portfolio" className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Portfolio</h2>

        {activeProject ? (
          <div className="mt-8 rounded-xl bg-card border border-border p-5 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <button
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <ArrowLeft size={16} /> Back
              </button>
              <span className="text-xs px-3 py-1 rounded-md text-white bg-gradient-brand shadow-glow">
                {activeProject.cat}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Client</dt>
                  <dd className="font-medium mt-1">{activeProject.client}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="font-medium mt-1">{activeProject.role}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Year</dt>
                  <dd className="font-medium mt-1">{activeProject.year}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Tools</dt>
                  <dd className="font-medium mt-1">{activeProject.tools}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Scope</dt>
                  <dd className="font-medium mt-1">{activeProject.scope}</dd>
                </div>
              </dl>
              <div>
                <div className={`aspect-[16/10] rounded-lg bg-gradient-to-br ${activeProject.tint} grid place-items-center`}>
                  <span className="text-7xl font-black text-white/90 drop-shadow-lg">{activeProject.label}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{activeProject.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{activeProject.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-md text-sm transition ${
                    filter === f ? "text-white bg-gradient-brand shadow-glow" : "text-muted-foreground border border-border hover:bg-muted"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {visible.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setActiveProject(p)}
                  className="group text-left rounded-xl overflow-hidden bg-card border border-border hover:border-ring/60 transition"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${p.tint} grid place-items-center relative`}>
                    <span className="text-5xl font-black text-white/90 drop-shadow-lg">{p.label}</span>
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.tag}</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-5 sm:px-8 pb-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Contact me</h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">Connect With Me And Let's Start Talking</p>
        <form className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Name" className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring" />
          <input placeholder="Email" type="email" className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring" />
          <input placeholder="Phone Number" className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring" />
          <select className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring text-muted-foreground">
            <option>Service Of Interest</option>
            <option>UI Design</option>
            <option>Brand System</option>
            <option>Logo Design</option>
          </select>
          <input placeholder="Website" className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring" />
          <textarea placeholder="Project Details" rows={5} className="px-4 py-3 rounded-md bg-input border border-border text-sm outline-none focus:border-ring sm:row-span-2" />
          <div className="sm:col-span-2 flex justify-end">
            <button className="px-8 py-2.5 rounded-md text-sm font-medium border border-border hover:bg-muted transition">Send</button>
          </div>
        </form>
      </section>

      <footer className="border-t border-border/40 py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <p className="text-gradient font-bold text-lg">Camila Rojas</p>
          <nav className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-foreground transition">{n.label}</a>
            ))}
          </nav>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Mail size={14} /> mariacamirojas@gmail.com</span>
            <span className="inline-flex items-center gap-2"><Phone size={14} /> +57 3018584572</span>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Designed by Camila Rojas UI &amp; Graphic Designer</p>
        </div>
      </footer>
    </div>
  );
}
