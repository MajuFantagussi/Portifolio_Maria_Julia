import { GraduationCap } from "lucide-react";

export default function ExtensionCard({
  title,
  period,
  description,
  icon: Icon = GraduationCap,
  links = [],
}) {
  return (
    <div className="group bg-white border-2 border-transparent rounded-3xl p-6 flex items-start justify-between shadow-md hover:shadow-xl hover:border-[#6E00B3] transition-all duration-300">

      <div className="flex-1">
        <h3 className="font-bold mb-2 text-[#6E00B3]">
          {title}
        </h3>

        <p className="italic text-stone-600 text-base mb-3">
          {period}
        </p>

        <p className="text-stone-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {links.length > 0 && (
        <div className="flex gap-3 ml-4">
          {links.map(({ icon: LinkIcon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-stone-300 bg-white hover:bg-[#6E00B3] transition-all duration-300"
            >
              <LinkIcon className="w-6 h-6 text-[#6E00B3] hover:text-white" />
            </a>
          ))}
        </div>
      )}

      <div className="ml-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-stone-300 bg-white hover:bg-[#6E00B3] transition-all duration-300">
          <Icon className="w-6 h-6 text-[#6E00B3] hover:text-white" />
        </div>
      </div>

    </div>
  );
}