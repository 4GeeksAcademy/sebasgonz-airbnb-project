import type { RoomDetail } from "@/types";

interface BookingCardProps {
  room: RoomDetail;
  guests: number;
  onGuestsChange: (guests: number) => void;
}

export const BookingCard = ({ room, guests, onGuestsChange }: BookingCardProps) => (
  <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.12)] lg:sticky lg:top-6" aria-label="Tarjeta de reserva">
    <div className="flex items-baseline gap-1"><strong className="text-2xl">${room.pricePerNight}</strong><span className="text-slate-600">noche</span></div>
    <div className="mt-6 rounded-xl border border-slate-300">
      <div className="border-b border-slate-200 p-4"><p className="text-xs font-bold uppercase tracking-wide">Huéspedes</p><p className="mt-1 text-sm text-slate-500">{guests} {guests === 1 ? "huésped" : "huéspedes"}</p></div>
      <div className="flex items-center justify-between p-4"><span className="text-sm text-slate-600">Cantidad</span><div className="flex items-center gap-3"><button onClick={() => onGuestsChange(Math.max(1, guests - 1))} disabled={guests === 1} className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-lg disabled:cursor-not-allowed disabled:opacity-40" aria-label="Reducir huéspedes">−</button><span className="w-4 text-center">{guests}</span><button onClick={() => onGuestsChange(Math.min(room.maxGuests, guests + 1))} disabled={guests === room.maxGuests} className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-lg disabled:cursor-not-allowed disabled:opacity-40" aria-label="Aumentar huéspedes">+</button></div></div>
    </div>
    <button className="mt-5 w-full rounded-xl bg-[#e50946] px-5 py-3.5 font-semibold text-white transition hover:bg-[#c9083e]" onClick={() => alert(`Reserva iniciada para ${guests} huéspedes`)}>Reservar</button>
    <p className="mt-4 text-center text-xs text-slate-500">Aún no se te cobrará nada</p>
  </aside>
);