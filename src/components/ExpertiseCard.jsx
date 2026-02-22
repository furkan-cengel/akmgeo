import { IconBox } from "./IconBox";

export default function ExpertiseCard({ title, icon }) {
  return (
    <div className="relative flex min-h-[200px] flex-col justify-between bg-[#f2f1ee] p-8 transition-colors hover:bg-white">
      {/* PLUS */}
      <span className="absolute right-3 top-3 font-mono text-sm text-[#c4583a]">
        +
      </span>

      {/* ICON */}
      <IconBox>{icon}</IconBox>

      {/* TITLE */}
      <h3 className="border-t border-[#cfcac2] pt-4 text-xs font-bold text-[#2d2d2d]">
        {title}
      </h3>
    </div>
  );
}
