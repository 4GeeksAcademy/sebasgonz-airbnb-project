import type { Listing } from "@/types";
import Link from "next/link";

export const ListingCard = ({ listing }: { listing: Listing }) => {
  return (
    <article className="group relative min-w-0">
      <Link href={`/rooms/${listing.id}`} aria-label={`Ver detalles de ${listing.title}`}>
        <div className="relative flex aspect-[1.08] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 via-orange-50 to-sky-100 text-7xl transition group-hover:shadow-lg">
          <span aria-hidden="true">{listing.imageUrl}</span>
        </div>
        <div className="px-1 pt-3">
          <div className="flex items-start justify-between gap-3">
            <h2 className="truncate text-[15px] font-semibold text-slate-900">{listing.title}</h2>
            <span className="shrink-0 text-sm text-slate-800">★ {listing.rating}</span>
          </div>
          <p className="mt-1 text-sm text-slate-500">{listing.location}</p>
          <p className="mt-2 text-sm text-slate-900"><strong>${listing.pricePerNight}</strong> noche</p>
        </div>
      </Link>
      <button className="absolute right-3 top-3 text-2xl text-white drop-shadow-md transition hover:scale-110" aria-label={`Guardar ${listing.title}`}>♡</button>
    </article>
  );
};
