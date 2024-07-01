'use client'

import { Typography } from "../../../utils/Typography"
import { Achievements, AchievementsColor } from "./components/Achievements"

export function About(): JSX.Element {
  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container flex flex-col items-center justify-between 2xl:h-svh px-8 lg:px-16 py-8 xl:py-24 gap-y-20">
        <div className="space-y-4 max-w-3xl text-center">
          <Typography variant="small">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta saepe, eligendi consectetur
            nostrum atque temporibus dolore rerum, aliquam cum similique necessitatibus at voluptatem
            placeat illo non, nulla eos dignissimos quis. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Expedita porro saepe est recusandae, dolorum corrupti praesentium eius cupiditate consectetur
            ut blanditiis quisquam inventore dolore, iste commodi culpa autem, obcaecati nesciunt?
          </Typography>
          <Typography variant="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam obcaecati atque veniam
            quibusdam hic autem? Itaque eius libero molestiae hic asperiores laboriosam earum? Inventore
            repellat ut fugit rerum itaque.
          </Typography>
          <Typography variant="small">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente sunt impedit est nostrum quaerat
            quia non sequi earum nam unde ducimus, veniam corporis?
          </Typography>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-20 max-w-5xl">
          <Achievements color={AchievementsColor.Rose} title="456+" subtitle="Lorem ipsum" />
          <Achievements color={AchievementsColor.Teal} title="99%" subtitle="Lorem dolor" />
          <Achievements color={AchievementsColor.Fuchsia} title="40M" subtitle="Lorem iste" />
        </div>
      </div>
    </section>

  )
}
