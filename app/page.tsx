"use client";

// Imports do React e AOS
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components Imports
import Image from "next/image";
import Header from "@/components/Header";
import EducationCard from '@/components/cards/EducationCard';
import ExtensionCard from "@/components/cards/ExtensionCard";
import SkillCard from "@/components/cards/SkillCard";
import ProjectCard from "@/components/cards/ProjectCard";

// CSS Import
import './globals.css';

// Icons Imports
import { GraduationCap, Briefcase, Trophy, BarChart2, Database } from "lucide-react";
import {
  SiPython, SiPostgresql, SiMysql, SiGit, SiJavascript, SiDatabricks, SiFigma
} from "react-icons/si";
import { FaInstagram, FaJava, FaWhatsapp } from "react-icons/fa";
import { LuGithub, LuLinkedin } from "react-icons/lu";

import GitHubButton from "@/components/button/GitHubButtton";
import LinkedinButton from "@/components/button/LinkedinButton";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50" id="top">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <Header />

        {/* Seção de Apresentação */}
        <section className="mb-16" data-aos="fade-up">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-28 px-6 md:px-0">

            {/* Coluna da esquerda */}
            <div className="text-left md:text-left max-w-xl" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 mb-2">
                Eu sou <span style={{ color: "#6E00B3" }}>Maria Julia</span>,
              </h1>
              {/* Subtítulo */}
              <h2 className="text-lg md:text-xl font-semibold mb-6" style={{ color: "#a282b7" }}>
                Analista de Dados Jr.
              </h2>
              <p className="text-stone-900 leading-relaxed mb-8">
                Desde 2022, venho construindo minha trajetória na área de dados, unindo formação em Ciência da
                Computação com experiência prática em ETL, modelagem analítica e visualização de dados.
                Tenho perfil hands-on e foco em transformar dados em decisões de negócio — atuando em parceria
                com times de tecnologia e negócio.
              </p>
            </div>

            {/* Coluna da direita - Imagem com botões sobrepostos */}
            <div className="relative flex justify-center items-center md:w-[420px] md:h-[420px]" data-aos="zoom-in">
              <div className="absolute inset-0 rounded-full border-2 border-gray-50"></div>
              {/* TODO: substitua pelo seu ícone em /icons/Icon.svg */}
              <Image
                src="/icons/Icon.svg"
                alt="Maria Julia"
                width={400}
                height={400}
                className="z-10 object-contain"
              />
              <GitHubButton icon={LuGithub} />
              <LinkedinButton icon={LuLinkedin} />
            </div>
          </div>
        </section>

        {/* Seção de Habilidades */}
        <section className="mb-16" id="habilidades" data-aos="fade-up">
          <h2 className="text-3xl text-center font-bold text-stone-950 mb-6 section-spacing">Habilidades</h2>

          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-6">
              <SkillCard icon={Database}     name="SQL"            link="" />
              <SkillCard icon={SiPython}     name="Python"         link="" />
              <SkillCard icon={SiPostgresql} name="PostgreSQL"     link="" />
              <SkillCard icon={SiMysql}      name="MySQL"          link="" />
              <SkillCard icon={BarChart2}    name="Power BI / DAX" link="" />
              <SkillCard icon={SiDatabricks} name="Databricks"     link="" />
              <SkillCard icon={SiGit}        name="Git"            link="" />
              <SkillCard icon={SiJavascript} name="JavaScript"     link="" />
              <SkillCard icon={FaJava}       name="Java"           link="" />
              <SkillCard icon={SiFigma}      name="Figma"          link="" />
            </div>
          </div>
        </section>

        {/* Seção de Experiências */}
        <section className="mb-12" id="experiencias" data-aos="fade-up">
          <h2 className="text-3xl text-center font-bold text-stone-950 mb-6 section-spacing">Experiências</h2>

          {/* Labels de subseção */}
          <h4 className="text-base text-center font-bold mb-6 section-spacing" style={{ color: "#9333EA" }}>
            FORMAÇÃO ACADÊMICA
          </h4>
          <div className="space-y-6 mb-10">
            <EducationCard
              title="Bacharelado em Ciências da Computação - Instituto Federal de São Paulo (IFSP)"
              period="2022 - 2025"
              icon={GraduationCap}
            />
          </div>

          <h4 className="text-base text-center font-bold mb-6 section-spacing" style={{ color: "#9333EA" }}>
            EXPERIÊNCIA PROFISSIONAL
          </h4>
          <div className="space-y-6">
            <ExtensionCard
              title="Estagiária em PMO — Dados e Indicadores · Bosch Campinas"
              period="Fev/2025 – Fev/2026"
              description="Participação em processos ETL com consolidação e validação de dados de múltiplas fontes. Estruturação de bases analíticas como fonte da verdade (SSOT) para consumo padronizado entre áreas. Desenvolvimento de dashboards em Power BI com KPIs operacionais e financeiros para suporte à tomada de decisão gerencial. Automação com VBA, reduzindo 75% do tempo operacional e gerando economia anual de R$170 mil."
              icon={Briefcase}
              link=""
            />
          </div>
        </section>

        {/* Seção de Projetos */}
        <section className="mb-20" id="projetos" data-aos="fade-up">
          <h2 className="text-3xl text-center font-bold text-stone-950 mb-6 section-spacing">Projetos</h2>

          <div className="space-y-6">
            <ProjectCard
              numero="01"
              title="TaskRep — Aplicativo Mobile de Organização de Tarefas e Despesas (TCC)"
              description={
                <>
                  <b>TaskRep</b> é um aplicativo mobile desenvolvido como <b>Trabalho de Conclusão de Curso</b>, com foco
                  em organização de tarefas e controle de despesas. O projeto envolveu <b>modelagem relacional de dados</b>,
                  mapeamento de <b>casos de uso</b>, levantamento de requisitos e definição de <b>métricas e indicadores</b>
                  para suporte à tomada de decisão.
                </>
              }
              image="/icons/TaskRep.svg"
              icon={LuGithub}
              link="https://github.com/MajuFantagussi"
            />

            <ProjectCard
              numero="02"
              title="IF + Empreendedor — Sistemas Financeiros para Microempreendedores"
              description={
                <>
                  Projeto de extensão com desenvolvimento de sistemas financeiros para microempreendedores.
                  Envolveu <b>modelagem e implementação de banco de dados relacional em PostgreSQL</b>,
                  estruturação de indicadores financeiros e análise de fluxo de caixa — transformando
                  dados operacionais em visibilidade real para gestão do negócio.
                </>
              }
              image="/icons/Extensao.svg"
              icon={LuGithub}
              link=""
            />
          </div>
        </section>

        {/* Seção de Liderança */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl text-center font-bold text-stone-950 mb-6 section-spacing">Liderança</h2>
          <div className="space-y-6">
            <ExtensionCard
              title="Presidente — Associação Atlética Acadêmica Arthur Chiodi"
              period="2024"
              description="Liderança de equipe, gestão financeira e orçamentária, negociação com fornecedores e acompanhamento de indicadores para tomada de decisão. Responsável pela condução estratégica e operacional da Atlética ao longo do mandato."
              icon={Trophy}
              link=""
            />
          </div>
        </section>

        {/* Seção Sobre Mim */}
        <section className="relative flex flex-col md:flex-row items-center justify-center gap-36 md:py-16 bg-gray-50 overflow-hidden" id="sobre">

          {/* Coluna da Esquerda - Foto */}
          <div className="relative inline-block" data-aos="fade-right">
            <Image
              src="/icons/Foto1.png"
              alt="Maria Julia"
              width={400}
              height={400}
              className="object-cover w-[290px] md:w-[320px] lg:w-[360px] h-auto rounded-2xl min-w-[290px] min-h-[290px]"
            />
            <span className="absolute bottom-4 right-0">
              <Image
                src="/icons/Flower.svg"
                alt="Flor"
                width={120}
                height={120}
              />
            </span>
          </div>

          {/* Coluna da Direita - Texto */}
          <div className="max-w-xl text-left md:text-left" data-aos="fade-left">
            <h2 className="relative flex items-center gap-2 text-3xl font-extrabold text-stone-950 mb-4">
              Sobre{" "}
              <span className="ml-1" style={{ color: "#6E00B3" }}>Mim</span>!
              <Image
                src="/icons/Star.svg"
                alt="Estrela"
                width={100}
                height={100}
                className="ml-2 md:ml-4 w-[100px] md:w-[100px] h-auto"
              />
            </h2>
            <br />
            <p className="text-stone-900 leading-relaxed mb-4">
              Oi! Sou a MJ, formada em Ciência da Computação pelo IFSP. Minha paixão está em trabalhar com dados —
              desde a construção de pipelines e modelagem até dashboards que contam histórias e ajudam times a
              tomar melhores decisões. Tive a oportunidade de colocar isso em prática na Bosch, onde trabalhei com
              ETL, Power BI e automação em projetos reais.
            </p>
            <p className="text-stone-900 leading-relaxed">
              Sou comunicativa, analítica e gosto de resolver problemas. Tenho inglês avançado e estou sempre
              buscando aprender — seja em novas ferramentas de dados ou em desafios que me tirem da zona de conforto.
            </p>
          </div>
        </section>

        {/* Seção de Contato */}
        <section className="" id="contato">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Coluna Esquerda */}
            <div className="max-w-lg text-left md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <h2 className="text-3xl font-extrabold text-stone-950 mt-20">
                  Entre em{" "}
                  <span style={{ color: "#6E00B3" }}>Contato</span>!
                </h2>
                <Image
                  src="/icons/Star.svg"
                  alt="Estrela decorativa"
                  width={100}
                  height={100}
                  className="top-3 right-75"
                />
              </div>

              <p className="text-stone-950 text-sm leading-relaxed my-6">
                Estou aberta a novas oportunidades em dados e adoraria conversar sobre como posso contribuir com o seu time!
              </p>

              <p className="font-semibold text-stone-950 my-4">
                mj.fantagussi@gmail.com
              </p>
              <p className="font-semibold text-stone-950 mb-8">
                (19) 98130-5464
              </p>
            </div>

            {/* Coluna Direita - Ícones */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-6 md:mr-0">
              <SkillCard icon={LuGithub}   name="GitHub"   link="https://github.com/MajuFantagussi" />
              <SkillCard icon={LuLinkedin} name="LinkedIn" link="https://linkedin.com/in/maria-julia-fantagussi" />
            </div>
          </div>
        </section>

      </div>

      {/* Rodapé */}
      <div
        className="mt-16 text-white py-6 flex flex-col md:flex-row items-center justify-between 2xl:px-54 xl:px-24 lg:px-10 md:px-8 px-4"
        style={{ backgroundColor: "#6E00B3" }}
      >
        <h3 className="font-bold text-xl">Maria Julia Fantagussi.</h3>
        <button className="font-semibold px-6 py-2 rounded-full text-sm shadow-sm transition-all" style={{ backgroundColor: "white", color: "#6E00B3" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#f3e6fc")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "white")}
        >
          <a
            href="" // TODO: link do repositório do portfólio
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Projeto
          </a>
        </button>
        <p className="font-semibold text-sm mt-4 md:mt-0">Feito com Next.js e Tailwind CSS</p>
      </div>
    </main>
  );
}