export const LoadingRoom = () => (
  <main className="mx-auto w-full max-w-6xl animate-pulse px-5 py-8 sm:px-10">
    <div className="mb-7 h-8 w-2/3 rounded bg-slate-100" />
    <div className="aspect-[16/8] rounded-3xl bg-slate-100" />
    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4"><div className="h-7 w-1/2 rounded bg-slate-100" /><div className="h-24 rounded bg-slate-100" /></div>
      <div className="h-72 rounded-2xl bg-slate-100" />
    </div>
  </main>
);