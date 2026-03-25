import { GraduationCap } from "lucide-react";

export default function CurriculoButton({
  icon: Icon = GraduationCap,
  link = "/docs/Curriculo_Bianca_Lourenco.pdf"
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-700 text-white px-6 py-3 font-extralight rounded-full shadow-sm hover:bg-blue-600 transition-colors flex items-center gap-2"
    >
      Currículo
      <Icon className="w-5 h-5 text-white" />
    </a>
  );
}