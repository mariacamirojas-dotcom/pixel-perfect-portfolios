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
    portfolioTitle: "Portfolio",
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", portfolio: "Portafolio", contact: "Contáctame" },
    hire: "Contrátame",
    downloadCv: "Descargar CV",
    hi: "Hola, soy",
    name: "Camila Rojas",
    role: "Diseñadora UI y Gráfica",
    portfolioTitle: "Portafolio",
  },
} as const;

function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const L = t[lang];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* HEADER */}
      <header className="p-6 flex justify-between items-center border-b">
        <span className="font-bold">CR.DESIGN</span>
        <div className="flex gap-4">
          <button onClick={() => setLang(lang === "en" ? "es" : "en")} className="text-sm font-bold">
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <p className="text-lg text-gray-500">{L.hi}</p>
        <h2 className="text-4xl font-bold mt-2">{L.name}</h2>
        <h1 className="text-5xl font-extrabold mt-4">{L.role}</h1>
      </section>

      {/* PORTFOLIO GRID - Imágenes cargadas desde la carpeta public */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{L.portfolioTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "DentalDrive", img: "/2_rectangle_21.png" },
            { name: "ProLicensor", img: "/3_rectangle_26.png" },
            { name: "DentXR", img: "/4_rectangle_22.png" },
            { name: "uNext", img: "/5_rectangle_26.png" },
            { name: "DDShared", img: "/6_rectangle_21.png" },
            { name: "DDSMag", img: "/7_rectangle_22.png" }
          ].map((item) => (
            <div key={item.name} className="border p-2 rounded-lg">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-64 object-cover rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400';
                  console.error(`Error cargando imagen: ${item.img}`);
                }}
              />
              <p className="mt-2 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
