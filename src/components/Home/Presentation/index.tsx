'use client'

import { motion } from "framer-motion";
import { Typography } from "../../../utils/Typography";
import { Hero } from "./components/Hero";

export function Presentation(): JSX.Element {
  return (
    <section className=" bg-teal-50 flex w-full justify-center">
      <div className="container flex flex-col justify-center 2xl:h-svh items-center xl:flex-row h-max pt-32 xl:pb-16 pb-4 px-8 lg:px-16 gap-y-8 gap-x-20">
        <div className="w-full max-w-[40rem] xl:max-w-[34rem] flex flex-col gap-4 sm:gap-10 text-center xl:text-left" >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 220 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeIn" }}
            >
              <Typography variant="small" className="text-teal-500 font-bold tracking-widest">QUEM SOMOS</Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
            >
              <Typography variant="h1">
                Lorem ipsum dolor sit, amet consec tetur.
              </Typography>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          >
            <Typography variant="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quia nesciunt? Vitae quia neque
              officiis magnam nisi repellat. Corporis tempore similique aperiam culpa! Et, impedit laudantium.
              Reprehenderit et eius repellendus.
            </Typography>
          </motion.div>
        </div>
        <Hero />
      </div>
    </section>
  )
}
