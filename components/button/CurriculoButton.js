import { GraduationCap } from "lucide-react";

export default function CurriculoButton({
  icon: Icon = GraduationCap,
  link = "/docs/Maria_Julia_CV.pdf"
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#6E00B3] text-white px-6 py-3 font-extralight rounded-full shadow-sm hover:bg-[#5a0096] transition-colors flex items-center gap-2"
    >
      Currículo
      <Icon className="w-5 h-5 text-white" />
    </a>
  );
}