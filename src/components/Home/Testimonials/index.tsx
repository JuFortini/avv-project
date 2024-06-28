'use client'

import Link from "next/link";
import { TestimonialSlice } from "../../../../prismicio-types";
import { createClient } from "../../../prismicio";
import { TestimonialCard } from "./components/TestimonialCard";
import { BookingButton } from "../../Header/components/BookingButton";

const _getTestimonials = async () => {
  try {
    const client = createClient();
    const testimonials = client.getSingle("testimonials");
    return testimonials;
  } catch (error) {
    console.log('error while getting testimonials from prismic', error);
  }
}

export const dynamic = "force-dynamic";

export async function Testimonials() {
  const _slices = await _getTestimonialsSlices();

  async function _getTestimonialsSlices() {
    const testimonials = await _getTestimonials();
    if (testimonials != null) {
      const allSlices = testimonials.data.slices;
      if (allSlices.length > 5) return allSlices.slice(0, 5);
      return allSlices;
    }
    return [];
  }

  if (_slices.length == 0) {
    return (<></>);
  }
  return (
    <section className="w-full bg-teal-50 px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 justify-items-center">
      <div className="text-center lg:text-start lg:col-span-1 pt-16 lg:sticky lg:self-start lg:top-0 flex flex-col gap-4 items-center lg:items-start max-w-xl">
        <h4 className="text-teal-500 text-sm font-bold tracking-widest">NOSSOS DEPOIMENTOS</h4>
        <h2 className="font-serif font-bold text-lg md:text-2xl">
          Os depoimentos satisfatórios de nossos pacientes são o que nos motivam cada dia.
        </h2>
        <h3 className="text-sm">
          Queremos continuar expandindo nossos atendimentos pelas comunidades e impactar cada vez mais a vida das pessoas.
        </h3>
        <BookingButton />
      </div>
      <div className="lg:col-span-2 grid md:grid-cols-2 grid-cols-1 justify-center w-full gap-6 md:gap-16 pt-0 pb-16 lg:pt-16">
        {_slices.map((t: TestimonialSlice) => (
          <TestimonialCard
            name={t.primary.name || ''}
            location={t.primary.location || ""}
            environment={t.primary.environment || undefined}
            testimonial={t.primary.testimonial || ""}
          />
        ))}
      </div>
    </section>
  );
}
