'use client'

import { Typography } from "../../../utils/Typography";
import { Hero } from "./components/Hero";

export function Presentation(): JSX.Element {
  return (
    <section className=" bg-teal-50 flex w-full justify-center">
      <div className="container flex flex-col justify-center 2xl:h-svh items-center xl:flex-row h-max pt-32 xl:pb-16 pb-4 px-8 lg:px-16 gap-y-8 gap-x-20">
        <div className="w-full max-w-[40rem] xl:max-w-[34rem] space-y-4 sm:space-y-10 text-center xl:text-left">
          <Typography variant="h1" className="">
            Lorem ipsum dolor sit, amet consec tetur.
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quia nesciunt? Vitae quia neque
            officiis magnam nisi repellat. Corporis tempore similique aperiam culpa! Et, impedit laudantium.
            Reprehenderit et eius repellendus.
          </Typography>
        </div>
        <Hero />
      </div>
    </section>
  )
}
