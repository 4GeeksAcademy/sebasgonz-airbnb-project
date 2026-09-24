"use client";

import { useEffect, useState } from "react";
import { AirbnbHeader } from "@/components/airbnb-header";
import { ListingCard } from "@/components/listing-card";
import { listingData } from "@/components/listings";
import type { Listing } from "@/types";

const categories = [
  { label: "Todo", icon: "✨" },
  { label: "Playa", icon: "🏖️" },
  { label: "Mansiones", icon: "🏰" },
  { label: "Tendencias", icon: "🔥" },
  { label: "Piscinas", icon: "🏊" },
  { label: "Campo", icon: "🌾" },
  { label: "Islas", icon: "🏝️" },
];

const filterListings = (search: string, category: string) => {
  return listingData.filter((listing) => {
    const matchesSearch = `${listing.title} ${listing.location}`.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Todo" || listing.category === category;
    return matchesSearch && matchesCategory;
  });
};

const Home = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setListings(listingData);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (!isLoading) setListings(filterListings(value, activeCategory));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (!isLoading) setListings(filterListings(search, category));
  };

  return (
    <div className="min-h-full bg-white text-slate-900">
      <AirbnbHeader searchValue={search} onSearchChange={handleSearchChange} />
      <main className="mx-auto max-w-[1920px] px-5 pb-16 pt-7 sm:px-10 lg:pt-10">
        <div className="mb-8 flex gap-7 overflow-x-auto border-b border-slate-100 pb-4" aria-label="Filtrar por categoría">
          {categories.map((category) => {
            const isActive = activeCategory === category.label;
            return (
                <button key={category.label} onClick={() => handleCategoryChange(category.label)} className={`flex min-w-fit flex-col items-center gap-2 border-b-2 pb-3 text-xs font-semibold transition ${isActive ? "border-slate-900 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-900"}`} aria-pressed={isActive}>
                <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                {category.label}
              </button>
            );
          })}
        </div>

        <section aria-live="polite">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-sm font-semibold text-[#e50946]">Estancias para tu próxima aventura</p>
              <h1 className="text-2xl font-semibold tracking-[-0.5px] sm:text-3xl">Explora alojamientos</h1>
            </div>
            {!isLoading && <span className="text-sm text-slate-500">{listings.length} resultados</span>}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-label="Cargando alojamientos">
              {Array.from({ length: 4 }, (_, index) => <div key={index} className="aspect-[1.08] animate-pulse rounded-2xl bg-slate-100" />)}
            </div>
          ) : listings.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
            </div>
          ) : (
            <p className="rounded-2xl bg-slate-50 px-5 py-10 text-center text-slate-600">No encontramos alojamientos con esos criterios.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
