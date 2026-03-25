import { LuLinkedin } from "react-icons/lu";

export default function LinkedinButton({ 
  icon: Icon = LuLinkedin,
  link = "https://www.linkedin.com/in/bianca-emily-louren%C3%A7o/" 
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-11 right-0 bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-3 text-sm font-medium hover:bg-blue-600 transition z-20"
    >
      <Icon className="w-5 h-5 text-white" />
      LinkedIn
    </a>
  );
}