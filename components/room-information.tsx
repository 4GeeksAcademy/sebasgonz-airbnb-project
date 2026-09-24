import type { RoomDetail } from "@/types";

export const RoomInformation = ({ room }: { room: RoomDetail }) => (
  <div>
    <section className="border-b border-slate-200 pb-7">
      <p className="mb-2 text-sm font-semibold text-[#e50946]">{room.category}</p>
      <h1 className="text-3xl font-semibold tracking-[-1px] sm:text-4xl">{room.title}</h1>
      <p className="mt-2 text-slate-600">{room.location}</p>
      <p className="mt-3 text-sm font-semibold">★ {room.rating} · {room.reviews} reseñas</p>
    </section>
    <section className="flex items-center gap-4 border-b border-slate-200 py-7" aria-label="Información del anfitrión">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-2xl">👤</div>
      <div><h2 className="font-semibold">Anfitrión: {room.hostName}</h2><p className="mt-1 text-sm text-slate-500">Anfitrión desde hace {room.hostYears} años</p></div>
    </section>
    <section className="border-b border-slate-200 py-7" aria-labelledby="amenities-title">
      <h2 id="amenities-title" className="mb-5 text-xl font-semibold">Lo que ofrece este alojamiento</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {room.amenities.map((amenity) => <div key={amenity.label} className="flex items-center gap-3 text-slate-700"><span className="text-2xl" aria-hidden="true">{amenity.icon}</span><span>{amenity.label}</span></div>)}
      </div>
    </section>
  </div>
);