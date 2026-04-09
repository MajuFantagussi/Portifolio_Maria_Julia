import { SiPython } from "react-icons/si";

const SkillCard = ({ icon: Icon = SiPython, name, link }) => {
  const content = (
    <div
      className={`group bg-neutral-50 border-2 rounded-2xl 
      w-32 h-32
      p-2 flex flex-col items-center justify-center gap-1.5
      hover:shadow-lg transition-all cursor-pointer`}
      style={{ borderColor: "#6E00B3" }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#a282b7")}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "")}
    >
      <Icon
      className="w-10 h-10 transition-colors group-hover:text-white"
      style={{ color: "#6E00B3" }}
    />
    <span className="text-sm font-medium text-gray-700 text-center transition-colors group-hover:text-white">
      {name}
    </span>
  </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default SkillCard;