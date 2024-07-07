export function ContactShimmer(): JSX.Element {
  return (
    <div className="flex gap-8 items-center">
      <div className="w-32 h-32 rounded-3xl bg-slate-300" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="h-6 w-32 bg-slate-300 rounded-md" />
          <div className="h-6 w-40 bg-slate-300 rounded-md" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 w-10 bg-slate-300 rounded-full" />
          <div className="h-10 w-10 bg-slate-300 rounded-full" />
        </div>
      </div>
    </div>
  );
  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container px-8 w-full lg:px-16 py-16 flex flex-col justify-between items-center gap-16">
        <div className="animate-pulse rounded-md bg-slate-300 h-6 w-2/3"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-32 gap-y-4 max-w-xl animate-pulse">
          <div className="h-10 w-32 bg-slate-300 rounded-md"></div>
          <div className="h-10 w-32 bg-slate-300 rounded-md"></div>
          <div className="h-10 w-32 bg-slate-300 rounded-md"></div>
          <div className="h-10 w-32 bg-slate-300 rounded-md"></div>
          <div className="h-10 w-32 bg-slate-300 rounded-md"></div>
          <div className="h-10 w-32 bg-slate-300 rounded-md"></div>
        </div>
      </div>
    </section>
  );
}
