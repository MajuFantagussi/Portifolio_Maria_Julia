import Image from "next/image";
import { GraduationCap } from "lucide-react";

export default function JobCard({
  title,
  period,
  description,
  icon: Icon = GraduationCap,
  links = [],
  image,
}) {
  return (
    <div className="group bg-white border border-stone-200 rounded-3xl p-8 
    grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 items-center
    shadow-sm hover:shadow-lg hover:border-[#6E00B3] transition-all duration-300">

      {/* TEXTO */}
      <div className="max-w-2xl">
        <h3 className="font-bold text-lg text-[#6E00B3] mb-2">
          {title}
        </h3>

        <p className="italic text-stone-500 text-sm mb-3">
          {period}
        </p>

        <p className="text-stone-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/*  IMAGEM  */}
      {image && (
        <div className="flex justify-center">
          <div className="bg-gray-100 p-3 rounded-2xl">
            <Image
              src={image}
              alt={title}
              width={200}
              height={200}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      )}

      {/* AÇÕES (ÍCONE + LINKS) */}
      <div className="flex flex-col items-center gap-3">

        {/* Ícone */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-stone-300 bg-white group-hover:bg-[#6E00B3] transition-all">
          <Icon className="w-5 h-5 text-[#6E00B3] group-hover:text-white" />
        </div>

        {/* Links */}
        {links.length > 0 && (
          <div className="flex flex-col gap-2">
            {links.map(({ icon: LinkIcon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 bg-white hover:bg-[#6E00B3] transition-all"
              >
                <LinkIcon className="w-4 h-4 text-[#6E00B3] hover:text-white" />
              </a>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}