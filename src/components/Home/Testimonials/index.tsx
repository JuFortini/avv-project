'use client'

import { TestimonialCard } from "./components/TestimonialCard";

export function Testimonials() {
  return (
    <section className="w-full bg-teal-50 px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
      <h2 className="font-serif font-bold text-center lg:text-start lg:col-span-1 text-2xl pt-16 lg:sticky lg:self-start lg:top-16">
        Preencher com texto de título da seção aqui
      </h2>
      <div className="lg:col-span-2 flex flex-col md:flex-row justify-center w-full gap-6 md:gap-16">
        <div className="flex flex-col gap-6 md:gap-16 md:py-16">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div className="flex flex-col gap-6 md:gap-16 md:pt-24 pb-8">
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}
