import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Ana Sayfa", href: "#home" },
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "İletişim", href: "#iletisim" },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#2d2d2d] bg-[#ece9e3]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-8 md:py-6">
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Anıl Kutluay Engineering"
            className="h-7 w-auto md:h-8"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="text-[#2d2d2d] transition-colors hover:text-[#4a9e8e]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menü"
        >
          <span
            className={`block h-[2px] w-6 bg-[#2d2d2d] transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#2d2d2d] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#2d2d2d] transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-40" : "max-h-0"}`}
      >
        <nav className="flex flex-col border-t border-[#2d2d2d]/20 bg-[#ece9e3] px-6 py-4 gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="text-sm font-bold uppercase tracking-wide text-[#2d2d2d] hover:text-[#4a9e8e] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
