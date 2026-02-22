import { IconBox } from "./IconBox";

export default function CalloutItem({ title, desc, icon }) {
  return (
    <div className="relative mb-8 border-t border-[#cfcac2] pt-4">
      <IconBox>{icon}</IconBox>

      <div className="flex items-center text-sm font-bold text-[#2d2d2d]">
        <span className="mr-2 text-[#4a9e8e]">•</span>
        {title}
      </div>

      <p className="mt-1 text-xs leading-relaxed text-[#6b6b6b]">{desc}</p>
    </div>
  );
}
