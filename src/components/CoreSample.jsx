export default function CoreSample() {
  return (
    <div className="relative h-[480px] w-[320px] overflow-hidden border border-[#2d2d2d] bg-[#d8d4cc]">
      {/* SCANNER */}
      <div className="scanner absolute left-0 top-0 h-[2px] w-full bg-[#c4583a]">
        <span className="absolute right-2 -top-5 text-[10px] font-mono tracking-wider text-[#c4583a]">
          SCANNING
        </span>
      </div>

      {/* LAYERS */}
      <div className="absolute top-[14%] h-[22%] w-full border-b border-dashed border-[#2d2d2d] bg-[#4a9e8e]/10" />

      <div className="absolute top-[40%] h-[6%] w-full border-y-2 border-[#4a9e8e] bg-[#c4583a]/20" />

      <div className="absolute top-[55%] h-[26%] w-full border-b border-dashed border-[#2d2d2d] bg-[#4a9e8e]/15" />

      {/* LOCAL CSS */}
      <style>
        {`
          .scanner {
            animation: scan 4s linear infinite;
          }

          @keyframes scan {
            0% { top: 0%; }
            100% { top: 100%; }
          }
        `}
      </style>
    </div>
  );
}
