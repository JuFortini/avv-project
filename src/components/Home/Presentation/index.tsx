'use client'

import { Hero } from "./components/Hero";

export function Presentation(): JSX.Element {
  return (
    <section className="flex flex-col justify-center 2xl:h-svh items-center xl:flex-row h-max bg-teal-50 pt-32 xl:pb-16 pb-4 px-8 lg:px-16 gap-y-8 gap-x-20">
      <div className="w-full max-w-[40rem] xl:max-w-[34rem] space-y-4 sm:space-y-10 text-center xl:text-left">
        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif">
          Lorem ipsum dolor sit, amet consec tetur.
        </h1>
        <h2 className="text-sm sm:text-base xl:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quia nesciunt? Vitae quia neque
          officiis magnam nisi repellat. Corporis tempore similique aperiam culpa! Et, impedit laudantium.
          Reprehenderit et eius repellendus.
        </h2>
      </div>
      <Hero />
    </section>
  )
}
