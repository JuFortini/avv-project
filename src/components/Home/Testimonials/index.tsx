'use client'

import Link from "next/link";
import { TestimonialSlice } from "../../../../prismicio-types";
import { createClient } from "../../../prismicio";
import { TestimonialCard } from "./components/TestimonialCard";
import { BookingButton } from "../../Header/components/BookingButton";
import { Typography } from "../../../utils/Typography";

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
    <section className="bg-teal-50 flex justify-center">
      <div className="container w-full px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 justify-items-center">
        <div className="text-center lg:text-start lg:col-span-1 pt-16 pb-0 lg:pb-16 lg:sticky lg:self-start lg:top-0 flex flex-col gap-4 items-center lg:items-start max-w-xl">
          <Typography variant="small" className="text-teal-500 font-bold tracking-widest">NOSSOS DEPOIMENTOS</Typography>
          <Typography variant="h3" className="font-serif font-bold">
            Os depoimentos satisfatórios de nossos pacientes são o que nos motivam cada dia.
          </Typography>
          <Typography variant="p" className="pb-4">
            Queremos continuar expandindo nossos atendimentos pelas comunidades e impactar cada vez mais a vida das pessoas.
          </Typography>
          <BookingButton />
        </div>
        <div className="lg:col-span-2 grid md:grid-cols-2 grid-cols-1 justify-center w-full gap-6 md:gap-16 pt-0 pb-16 lg:pt-16">
          {_slices.map((t: TestimonialSlice) => (
            <TestimonialCard
              key={t.id}
              name={t.primary.name || ''}
              location={t.primary.location || ""}
              environment={t.primary.environment || undefined}
              testimonial={t.primary.testimonial || ""}
            />
          ))}
        </div>
      </div>
    </section>

  );
}
