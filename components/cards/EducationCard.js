import { GraduationCap } from "lucide-react";

export default function EducationCard({ title, period, icon: Icon = GraduationCap }) {
  return (
    <div
      className="text-white rounded-3xl p-6 flex items-center justify-between shadow-lg transition-all"
      style={{ backgroundColor: "#6E00B3" }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#a282b7")}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#6E00B3")}
    >
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        {/* period em roxo claro para manter hierarquia */}
        <p className="italic font-bold text-sm" style={{ color: "#D8A8F5" }}>{period}</p>
      </div>
      <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center ml-4 p-2">
        <Icon className="w-6 h-6" style={{ color: "#6E00B3" }} />
      </div>
    </div>
  );
}