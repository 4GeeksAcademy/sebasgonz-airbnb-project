import type { RoomDetail } from "@/types";

interface RoomGalleryProps {
  room: RoomDetail;
  photoIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const RoomGallery = ({ room, photoIndex, onPrevious, onNext }: RoomGalleryProps) => (
  <section aria-label="Galería de fotos" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-100 via-orange-50 to-sky-100">
    <div className="flex aspect-[16/8] items-center justify-center text-[clamp(5rem,18vw,10rem)]" aria-label={`Foto ${photoIndex + 1} de ${room.photos.length}`}>{room.photos[photoIndex]}</div>
    <button onClick={onPrevious} className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl shadow transition hover:bg-white" aria-label="Foto anterior">‹</button>
    <button onClick={onNext} className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl shadow transition hover:bg-white" aria-label="Foto siguiente">›</button>
    <span className="absolute bottom-4 right-4 rounded-full bg-slate-900/75 px-3 py-1 text-xs font-semibold text-white">{photoIndex + 1} / {room.photos.length}</span>
  </section>
);