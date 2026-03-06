export default function CoreSample() {
  return (
    <div className="relative h-[260px] w-full max-w-[320px] overflow-hidden border border-[#2d2d2d] bg-[#cec9c0] md:h-[480px] md:w-[320px]">
      {/* GEOLOGICAL LAYERS — positioned to match callout items roughly */}

      {/* Layer 1: Topsoil / Surface */}
      <div className="geo-l1 absolute top-0 w-full border-b border-dashed border-[#2d2d2d]/25" style={{ height: "20%" }} />

      {/* Layer 2: Clay / Silt */}
      <div className="geo-l2 absolute w-full border-b border-dashed border-[#2d2d2d]/25" style={{ top: "20%", height: "20%" }} />

      {/* Layer 3: Marker bed (distinctive) */}
      <div
        className="geo-l3 absolute w-full"
        style={{ top: "40%", height: "7%", borderTop: "2px solid #4a9e8e", borderBottom: "2px solid #4a9e8e" }}
      />

      {/* Layer 4: Consolidated rock */}
      <div className="geo-l4 absolute w-full border-b border-dashed border-[#2d2d2d]/25" style={{ top: "47%", height: "23%" }} />

      {/* Layer 5: Bedrock */}
      <div className="geo-l5 absolute w-full" style={{ top: "70%", height: "30%" }} />

      {/* SCANNER LINE — gradient glow */}
      <div className="geo-scanner absolute left-0 top-0 w-full" style={{ height: "3px" }} />

      <style>{`
        /* Base layer colors */
        .geo-l1 { background-color: rgba(181, 135, 74, 0.18); }
        .geo-l2 { background-color: rgba(168, 200, 196, 0.20); }
        .geo-l3 { background-color: rgba(196, 88, 58, 0.28); }
        .geo-l4 { background-color: rgba(74, 158, 142, 0.18); }
        .geo-l5 { background-color: rgba(55, 50, 45, 0.22); }

        /* Scanner: gradient glow bar */
        .geo-scanner {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(196, 88, 58, 0.85) 50%,
            transparent 100%
          );
          box-shadow: 0 0 10px 3px rgba(196, 88, 58, 0.45);
          animation: geo-scan 4s linear infinite;
        }

        @keyframes geo-scan {
          0%   { top: 0%; }
          100% { top: 100%; }
        }

        /*
          Layer "polish" animations — each layer brightens as the scanner passes.
          Scanner takes 4s. Layer centers (% from top):
            L1 ~ 10%  → peak at 10% keyframe (0.4s)
            L2 ~ 30%  → peak at 30% keyframe (1.2s)
            L3 ~ 43%  → peak at 43% keyframe (1.72s)
            L4 ~ 58%  → peak at 58% keyframe (2.32s)
            L5 ~ 85%  → peak at 85% keyframe (3.4s)
        */
        .geo-l1 {
          animation: polish-1 4s linear infinite;
        }
        @keyframes polish-1 {
          0%,  5% { background-color: rgba(181,135,74, 0.18); }
          10%, 16% { background-color: rgba(181,135,74, 0.60); }
          23%,100% { background-color: rgba(181,135,74, 0.18); }
        }

        .geo-l2 {
          animation: polish-2 4s linear infinite;
        }
        @keyframes polish-2 {
          0%,  24% { background-color: rgba(168,200,196, 0.20); }
          30%, 36% { background-color: rgba(168,200,196, 0.65); }
          44%, 100% { background-color: rgba(168,200,196, 0.20); }
        }

        .geo-l3 {
          animation: polish-3 4s linear infinite;
        }
        @keyframes polish-3 {
          0%,  37% { background-color: rgba(196,88,58, 0.28); }
          43%, 49% { background-color: rgba(196,88,58, 0.75); }
          57%, 100% { background-color: rgba(196,88,58, 0.28); }
        }

        .geo-l4 {
          animation: polish-4 4s linear infinite;
        }
        @keyframes polish-4 {
          0%,  52% { background-color: rgba(74,158,142, 0.18); }
          58%, 64% { background-color: rgba(74,158,142, 0.60); }
          72%, 100% { background-color: rgba(74,158,142, 0.18); }
        }

        .geo-l5 {
          animation: polish-5 4s linear infinite;
        }
        @keyframes polish-5 {
          0%,  79% { background-color: rgba(55,50,45, 0.22); }
          85%, 91% { background-color: rgba(55,50,45, 0.55); }
          98%, 100% { background-color: rgba(55,50,45, 0.22); }
        }
      `}</style>
    </div>
  );
}
