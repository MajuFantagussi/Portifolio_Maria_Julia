import { GraduationCap } from "lucide-react";

export default function ExtensionCard({ title, period, description, icon: Icon = GraduationCap, link }) {
  return (
    <div className="group bg-neutral-50 border-2 border-stone-950 rounded-3xl p-6 flex items-start justify-between shadow-md hover:shadow-lg hover:bg-white transition-shadow">
      <div className="flex-1">
        {/* título em roxo principal */}
        <h3 className="font-bold mb-1" style={{ color: "#6E00B3" }}>{title}</h3>
        <p className="italic text-stone-950 text-base mb-3">{period}</p>
        <p className="text-stone-950 text-sm leading-relaxed">{description}</p>
        {link && (
          <a
            href="https://www.sbv.ifsp.edu.br/component/content/article/138-noticias-publicadas/pagina-inicial/arquivadas/2034-alunos-do-bacharelado-em-ci%C3%AAncia-da-computa%C3%A7%C3%A3o-participam-de-concurso-cultural"
            target="_blank"
            className="font-bold underline underline-offset-4"
            style={{ color: "#9333EA" }}
          >
            {link}
          </a>
        )}
      </div>

      <div className="bg-neutral-50 border-2 border-stone-950 rounded-full w-14 h-14 flex items-center justify-center ml-4 p-2 group-hover:bg-white">
        {/* ícone em roxo principal */}
        <Icon className="w-6 h-6" style={{ color: "#6E00B3" }} />
      </div>
    </div>
  );
}