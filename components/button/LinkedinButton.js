import { LuLinkedin } from "react-icons/lu";

export default function LinkedinButton({
  icon: Icon = LuLinkedin,
  link = "https://www.linkedin.com/in/maria-julia-fantagussi-447662256/"
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-11 right-0 bg-[#6E00B3] text-white px-6 py-3 rounded-full flex items-center gap-3 text-sm font-medium hover:bg-[#5a0096] transition z-20 shadow-md"
    >
      <Icon className="w-5 h-5 text-white" />
      LinkedIn
    </a>
  );
}