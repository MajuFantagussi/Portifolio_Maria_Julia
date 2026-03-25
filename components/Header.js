"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import CurriculoButton from "@/components/button/CurriculoButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

 useEffect(() => {
  const updateScrollMargin = () => {
    const header = document.querySelector("header");
    if (!header) return;
    const headerHeight = header.offsetHeight;

    document.querySelectorAll("section").forEach((section) => {
      section.style.scrollMarginTop = `${headerHeight + 10}px`;
    });
  };

  updateScrollMargin();
  window.addEventListener("resize", updateScrollMargin);

  // 🔹 Recalcula sempre que o menu abre ou fecha
  return () => window.removeEventListener("resize", updateScrollMargin);
}, [menuOpen]); // 👈 mantenha sempre aqui

  return (
    <header className="bg-gray-50/70 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#top" className="flex items-center cursor-pointer">
              <Image
                src="/icons/Bianca.svg"
                alt="Bianca"
                width={48}
                height={48}
                className="w-22 h-22"
              />
            </a>
          </div>

          {/* Links Desktop */}
          <div className="hidden lg:flex items-center gap-8 border border-stone-950 rounded-3xl px-6 py-3 shadow-sm transition-shadow">
            <a href="#habilidades" className="text-stone-950 hover:text-blue-700 transition-colors">Habilidades</a>
            <a href="#experiencias" className="text-stone-950 hover:text-blue-700 transition-colors">Experiências</a>
            <a href="#sobre" className="text-stone-950 hover:text-blue-700 transition-colors">Sobre mim</a>
            <a href="#projetos" className="text-stone-950 hover:text-blue-700 transition-colors">Projetos</a>
            <a href="#contato" className="text-stone-950 hover:text-blue-700 transition-colors">Contato</a>
          </div>

          {/* Botão Currículo Desktop */}
          <div className="hidden lg:block">
            <CurriculoButton icon={Download} link="/docs/Curriculo_Bianca_Lourenco.pdf" />
          </div>

          {/* Botão Hambúrguer */}
          <button
            className="lg:hidden p-2 border-stone-950 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6 text-stone-950" /> : <Menu className="w-6 h-6 text-stone-950" />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border border-stone-950 rounded-3xl shadow-md p-6 flex flex-col items-center gap-5">
            <a href="#habilidades" onClick={handleLinkClick} className="text-stone-950 hover:text-blue-700 transition-colors">Habilidades</a>
            <a href="#experiencias" onClick={handleLinkClick} className="text-stone-950 hover:text-blue-700 transition-colors">Experiências</a>
            <a href="#sobre" onClick={handleLinkClick} className="text-stone-950 hover:text-blue-700 transition-colors">Sobre mim</a>
            <a href="#projetos" onClick={handleLinkClick} className="text-stone-950 hover:text-blue-700 transition-colors">Projetos</a>
            <a href="#contato" onClick={handleLinkClick} className="text-stone-950 hover:text-blue-700 transition-colors">Contato</a>

            <div className="pt-2">
              <CurriculoButton icon={Download} link="/docs/Curriculo.pdf" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
