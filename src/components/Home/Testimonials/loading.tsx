import { TestimonialCardShimmer } from "./components/TestimonialCardShimmer";

export function TestimonialsShimmer(): JSX.Element {
  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container w-full px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 justify-items-center">
        <div className="text-center lg:text-start lg:col-span-1 pt-16 lg:sticky lg:self-start lg:top-0 flex flex-col gap-4 items-center lg:items-start w-full md:max-w-xl">
          <div className="animate-pulse bg-slate-300 h-6 w-48"></div>
          <div className="animate-pulse bg-slate-300 h-20 w-full"></div>
          <div className="animate-pulse bg-slate-300 h-12 w-full"></div>
          <div className="animate-pulse bg-slate-300 h-12 w-40"></div>
        </div>
        <div className="lg:col-span-2 grid md:grid-cols-2 grid-cols-1 justify-center w-full gap-6 md:gap-16 pt-0 pb-16 lg:pt-16">
          <TestimonialCardShimmer />
          <TestimonialCardShimmer />
          <TestimonialCardShimmer />
        </div>
      </div>
    </section>
  );
}
