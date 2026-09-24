"use client";

import { useMemo, useState } from "react";
import { AirbnbHeader } from "@/components/airbnb-header";
import { ListingCard } from "@/components/listing-card";
import { listingData } from "@/components/listings";

type SortOrder = "asc" | "desc";

const CatalogPage = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedListings = useMemo(() => {
    return listingData
      .filter((listing) => `${listing.title} ${listing.location}`.toLowerCase().includes(search.toLowerCase()))
      .toSorted((first, second) => {
        const difference = first.pricePerNight - second.pricePerNight;
        return sortOrder === "asc" ? difference : -difference;
      });
  }, [search, sortOrder]);

  return (
    <div className="min-h-full bg-white text-slate-900">
      <AirbnbHeader searchValue={search} onSearchChange={setSearch} />
      <main className="mx-auto max-w-[1920px] px-5 pb-16 pt-7 sm:px-10 lg:pt-10">
        <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold text-[#e50946]">Resultados para tu búsqueda</p>
            <h1 className="text-2xl font-semibold tracking-[-0.5px] sm:text-3xl">{sortedListings.length} alojamientos encontrados</h1>
          </div>
          <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <span>Ordenar por</span>
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as SortOrder)}
              className="rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium outline-none transition focus:border-slate-900"
              aria-label="Ordenar alojamientos por precio"
            >
              <option value="asc">Precio: ascendente</option>
              <option value="desc">Precio: descendente</option>
            </select>
          </label>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)] lg:items-start">
          <section aria-label="Lista de alojamientos">
            {sortedListings.length > 0 ? (
              <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">
                {sortedListings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
              </div>
            ) : (
              <p className="rounded-2xl bg-slate-50 px-5 py-10 text-center text-slate-600">No encontramos alojamientos con esos criterios.</p>
            )}
          </section>

          <aside className="flex min-h-[320px] items-center justify-center rounded-2xl bg-slate-200 text-2xl font-semibold text-slate-500 lg:sticky lg:top-6 lg:h-[calc(100vh-180px)]" aria-label="Mapa de alojamientos">
            Mapa
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CatalogPage;
