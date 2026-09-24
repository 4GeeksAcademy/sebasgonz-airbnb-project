"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BookingCard } from "@/components/booking-card";
import { LoadingRoom } from "@/components/loading-room";
import { RoomGallery } from "@/components/room-gallery";
import { RoomInformation } from "@/components/room-information";
import { listingData } from "@/components/listings";
import type { RoomDetail } from "@/types";

const roomDetails: Record<string, Partial<RoomDetail>> = {
  "1": { reviews: 128, hostName: "Mariana", hostYears: 6, maxGuests: 4, amenities: [{ icon: "🌊", label: "Vista al mar" }, { icon: "📶", label: "Wifi rápido" }, { icon: "🍳", label: "Cocina equipada" }, { icon: "🧺", label: "Lavadora" }, { icon: "❄️", label: "Aire acondicionado" }, { icon: "🚗", label: "Estacionamiento" }], photos: ["🌴", "🌅", "🛋️", "🛏️"] },
};

const fallbackDetail: Partial<RoomDetail> = {
  reviews: 86,
  hostName: "Santiago",
  hostYears: 4,
  maxGuests: 6,
  amenities: [{ icon: "📶", label: "Wifi rápido" }, { icon: "🍳", label: "Cocina equipada" }, { icon: "🏊", label: "Piscina" }, { icon: "🧺", label: "Lavadora" }, { icon: "🌿", label: "Patio privado" }, { icon: "🚗", label: "Estacionamiento" }],
  photos: ["🏡", "🌄", "🛋️", "🛏️"],
};

const getRoomDetail = (id: string): RoomDetail => {
  const listing = listingData.find((item) => item.id === id) ?? listingData[0];
  return { ...listing, ...fallbackDetail, ...roomDetails[id] } as RoomDetail;
};

const RoomPage = () => {
  const params = useParams<{ id: string }>();
  const [room, setRoom] = useState<RoomDetail | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const timer = window.setTimeout(() => setRoom(getRoomDetail(params.id)), 900);
    return () => window.clearTimeout(timer);
  }, [params.id]);

  if (!room) return <LoadingRoom />;

  const previousPhoto = () => setPhotoIndex((current) => (current - 1 + room.photos.length) % room.photos.length);
  const nextPhoto = () => setPhotoIndex((current) => (current + 1) % room.photos.length);

  return (
    <div className="min-h-full bg-white text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-10">
        <Link href="/" className="flex items-center gap-1 text-2xl font-bold tracking-[-1.5px] text-[#ff385c]" aria-label="Volver al inicio"><span className="text-3xl leading-none">△</span>airbnb</Link>
        <div className="flex items-center gap-2"><button className="rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-slate-100" aria-label="Compartir alojamiento">↗ Compartir</button><button className="rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-slate-100" aria-label="Guardar alojamiento">♡ Guardar</button></div>
      </header>
      <main className="mx-auto max-w-6xl px-5 pb-16 sm:px-10">
        <div className="mb-5 flex items-center gap-2 text-sm text-slate-500"><Link href="/catalog" className="font-semibold text-slate-900 hover:underline">‹ Volver a resultados</Link><span>/</span><span>{room.location}</span></div>
        <RoomGallery room={room} photoIndex={photoIndex} onPrevious={previousPhoto} onNext={nextPhoto} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start"><RoomInformation room={room} /><BookingCard room={room} guests={guests} onGuestsChange={setGuests} /></div>
      </main>
    </div>
  );
};

export default RoomPage;
