import Image from "next/image";

export default function AcademicCard({
  title,
  period,
  description,
  image,
  type = "Extensão",
}) {
  return (
    <div className="group relative bg-white border border-stone-100 rounded-3xl p-6 
    flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start
    shadow-sm hover:shadow-md transition-all duration-300">

      {/* LINHA LATERAL */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-[#9333EA] rounded-full opacity-20 group-hover:opacity-60 transition-all" />

      {/* TAG */}
      <span className="absolute -top-3 right-6 bg-[#9333EA] text-white text-xs px-3 py-1 rounded-full shadow-md">
        {type}
      </span>

      {/* IMAGEM */}
      {image && (
        <div className="flex-shrink-0">
          <div className="bg-gray-100 p-2 rounded-2xl">
            <Image
              src={image}
              alt={title}
              width={120}
              height={120}
              className="rounded-xl object-cover w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
            />
          </div>
        </div>
      )}

      {/* TEXTO */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="font-semibold text-lg text-stone-900 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-stone-500 mb-2">
          {period}
        </p>
        <p className="text-sm text-stone-700 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}