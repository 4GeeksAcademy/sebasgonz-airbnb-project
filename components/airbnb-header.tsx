"use client";

import Link from "next/link";

const categories = [
  { label: "Todo", icon: "🌍" },
  { label: "Alojamientos", icon: "🏠" },
  { label: "Experiencias", icon: "🎈" },
  { label: "Servicios", icon: "🛎️" },
];

interface AirbnbHeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export const AirbnbHeader = ({ searchValue, onSearchChange }: AirbnbHeaderProps) => {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-[84px] max-w-[1920px] items-center justify-between gap-6 px-5 sm:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-1 text-[25px] font-bold tracking-[-1.5px] text-[#ff385c]" aria-label="Airbnb inicio">
          <span className="text-[31px] leading-none">△</span>
          <span>airbnb</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-12 lg:flex" aria-label="Categorías">
          {categories.map((category, index) => (
            <Link
              key={category.label}
              href="/catalog"
              className={`group relative flex items-center gap-3 py-7 text-[17px] font-semibold ${index === 0 ? "text-slate-900" : "text-slate-500"}`}
            >
              <span className="text-[31px] leading-none grayscale-[15%]">{category.icon}</span>
              <span>{category.label}</span>
              {index === 0 && <span className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-slate-900" />}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link href="/catalog" className="hidden text-[16px] font-semibold text-slate-800 xl:block">Conviértete en anfitrión</Link>
          <button className="hidden h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-xl transition hover:bg-slate-100 sm:flex" aria-label="Cambiar idioma y moneda">◎</button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl transition hover:bg-slate-200" aria-label="Abrir menú">☰</button>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1920px] justify-center px-5 pb-5 sm:px-10 lg:pb-12">
        <div className="flex w-full max-w-[1200px] items-center rounded-full border border-slate-200 bg-white p-2 shadow-[0_8px_28px_rgba(15,23,42,0.14)] lg:-mb-1">
          <label className="flex min-w-0 flex-1 flex-col items-start rounded-full px-5 py-2 text-left transition hover:bg-slate-50 sm:px-7" htmlFor="listing-search">
            <span className="text-[14px] font-bold text-slate-800">Dónde</span>
            <input id="listing-search" type="search" value={searchValue} onChange={(event) => onSearchChange(event.target.value)} placeholder="Explora destinos" className="w-full min-w-0 bg-transparent text-[17px] text-slate-500 outline-none placeholder:text-slate-500" aria-label="Buscar destinos y alojamientos" />
          </label>
          <span className="h-11 w-px bg-slate-200" />
          <button className="hidden min-w-0 flex-1 flex-col items-start rounded-full px-7 py-2 text-left transition hover:bg-slate-50 sm:flex" aria-label="Seleccionar fechas">
            <span className="text-[14px] font-bold text-slate-800">Fechas</span>
            <span className="truncate text-[17px] text-slate-500">Agrega fechas</span>
          </button>
          <span className="hidden h-11 w-px bg-slate-200 sm:block" />
          <button className="hidden min-w-0 flex-1 flex-col items-start rounded-full px-7 py-2 text-left transition hover:bg-slate-50 sm:flex" aria-label="Seleccionar huéspedes">
            <span className="text-[14px] font-bold text-slate-800">Quién</span>
            <span className="truncate text-[17px] text-slate-500">¿Cuántos?</span>
          </button>
          <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e50946] text-2xl text-white transition hover:bg-[#c9083e]" aria-label="Buscar">⌕</button>
        </div>
      </div>
    </header>
  );
};
