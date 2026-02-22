export default function ProjectRow({ label, title, desc, index }) {
  return (
    <div
      className={`grid grid-cols-[200px_1fr] gap-4 border-y border-[#cfcac2] px-4 py-6 ${
        index % 2 === 0 ? "bg-[#f2f1ee]" : "bg-[#ece9e3]"
      }`}
    >
      <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#c4583a]">
        <span className="text-[0.6rem] text-[#4a9e8e]">■</span>
        {label}
      </div>

      <div>
        <h3 className="mb-2 text-sm font-bold text-[#2d2d2d]">{title}</h3>
        <p className="max-w-xl text-sm leading-relaxed text-[#6b6b6b]">
          {desc}
        </p>
      </div>
    </div>
  );
}
