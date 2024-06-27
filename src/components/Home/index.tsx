'use client'

import { Suspense } from "react";
import { About } from "./About";
import { Exams } from "./Exams";
import { Presentation } from "./Presentation";
import { Partners } from "./Partners";
import { PartnersShimmer } from "./Partners/loading";
import { Testimonials } from "./Testimonials";

export function HomePage(): JSX.Element {
  return (
    <>
      <Presentation />
      <About />
      <Exams />
      <Suspense fallback={<PartnersShimmer />}>
        <Partners />
      </Suspense>
      {/* <Suspense fallback={<TestimonialsShimmer />}> */}
      <Testimonials />
      {/* </Suspense> */}
    </>
  )
}
