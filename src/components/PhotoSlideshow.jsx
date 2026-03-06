import { useState } from "react";

// Replace the src values below with your actual photo paths (e.g. "/photos/foto1.jpg")
const photos = [
  { src: "/1.jpg", alt: "Saha Çalışması 1" },
  { src: "/2.jpeg", alt: "Saha Çalışması 2" },
  { src: "/3.jpeg", alt: "Saha Çalışması 3" },
  { src: "/4.JPG", alt: "Saha Çalışması 4" },
];

export default function PhotoSlideshow() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="w-full px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-2 gap-2 w-full max-w-4xl mx-auto md:flex md:items-center md:gap-2 md:h-[400px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="relative rounded-lg overflow-hidden h-[180px] cursor-pointer md:flex-grow md:transition-all md:w-56 md:h-[400px] md:duration-500 md:hover:w-full"
            >
              {photo.src ? (
                <img
                  className="h-full w-full object-cover object-center"
                  src={photo.src}
                  alt={photo.alt}
                />
              ) : (
                <div className="h-full w-full bg-[#d4cfc7] flex items-end p-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8a8480]">
                    {photo.alt}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-8 rounded-xl overflow-hidden shadow-2xl"
            style={{
              animation: "pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {photos[selected].src ? (
              <img
                className="w-full h-auto object-cover"
                src={photos[selected].src}
                alt={photos[selected].alt}
              />
            ) : (
              <div
                className="w-full bg-[#d4cfc7] flex items-center justify-center"
                style={{ height: "500px" }}
              >
                <span className="font-mono text-sm uppercase tracking-widest text-[#8a8480]">
                  {photos[selected].alt}
                </span>
              </div>
            )}

            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#2d2d2d]/70 text-white hover:bg-[#2d2d2d] transition-colors"
            >
              ✕
            </button>
          </div>

          <style>{`
            @keyframes pop-in {
              0%   { transform: scale(0.6); opacity: 0; }
              100% { transform: scale(1);   opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
