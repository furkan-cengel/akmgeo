export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#2d2d2d] bg-[#ece9e3]">
      <div className="mx-auto flex max-w-[1400px] items-end justify-between px-8 py-6">
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Anıl Kutluay Engineering"
            className="h-8 w-auto"
          />
        </div>

        {/* NAV */}
        <nav className="flex gap-8 text-xs font-bold uppercase tracking-wide">
          {["About", "Expertise", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#2d2d2d] transition-colors hover:text-[#4a9e8e]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
