import Image from "next/image";
import { IconType } from "react-icons";

type ProjectLink = {
  icon: IconType;
  url: string;
};

type ProjectCardProps = {
  numero: string;
  title: string;
  description: React.ReactNode;
  icon?: IconType;
  image?: string;
  link?: string;
  links?: ProjectLink[];
};

export default function ProjectCard({
  numero,
  title,
  description,
  icon: Icon,
  image = "/icons/Star.svg",
  link,
  links = [],
}: ProjectCardProps) {
  const normalizedLinks =
    links && links.length > 0
      ? links
      : link && Icon
      ? [{ icon: Icon, url: link }]
      : [];

  return (
    <div className="group bg-neutral-50 border-2 border-stone-950 rounded-3xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-md hover:shadow-lg hover:bg-white transition-shadow">
      
      {/* Texto */}
      <div className="flex-1 text-left">
        <h1 className="font-bold text-5xl text-stone-950 mb-4">{numero}</h1>
        {/* título em roxo principal */}
        <h3 className="font-bold mb-1" style={{ color: "#6E00B3" }}>{title}</h3>
        <p className="text-stone-950 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Imagem */}
      <div className="mt-6 md:mt-0 md:mx-12 flex justify-center md:justify-center items-center w-full md:w-auto">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-contain w-60 md:w-[200px]"
        />
      </div>

      {/* Ícones de link */}
      {normalizedLinks.length > 0 && (
      <div className="flex gap-3 mt-6 md:mt-0 justify-center w-full md:w-auto md:flex-col">
          {normalizedLinks.map(({ icon: LinkIcon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-50 border-2 border-stone-950 rounded-full w-14 h-14 flex items-center justify-center p-2 group-hover:bg-white transition"
            >
              {/* ícone em roxo principal */}
              <LinkIcon className="w-6 h-6" style={{ color: "#6E00B3" }} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}