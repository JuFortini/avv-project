import { Suspense } from "react";
import { About } from "./About";
import { Exams } from "./Exams";
import { Partners } from "./Partners";
import { Presentation } from "./Presentation";
import { PartnersShimmer } from "./Partners/loading";

export function HomePage(): JSX.Element {
  return (
    <>
      <Presentation />
      <About />
      <Exams />
      <Suspense fallback={<PartnersShimmer />}>
        <Partners />
      </Suspense>
    </>
  )
}
