import { LuGithub } from "react-icons/lu";

export default function GitHubButton({ icon: Icon = LuGithub, link = "https://github.com/BiaLoure"}) {
  return (
        <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-11 left-6 bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 text-sm font-medium hover:opacity-90 transition z-20"
    >
      <Icon className="w-5 h-5 text-white" />
      GitHub
    </a>
  );
}