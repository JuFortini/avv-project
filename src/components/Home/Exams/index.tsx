'use client'

import Link from "next/link";
import { ExamCard } from "./components/ExamCard";
import { ColorBlindnessIcon } from "./images/ColorBlindnessIcon";
import { FundusMapIcon } from "./images/FundusMapIcon";
import { GlassesPrescriptionIcon } from "./images/GlassesPrescriptionIcon";
import { Typography } from "../../../utils/Typography";

export function Exams(): JSX.Element {
  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container px-8 lg:px-16 py-16 2xl:h-svh w-full flex flex-col justify-between items-center">
        {/* // TODO: implementar redirecionamentos */}
        <Typography variant="h2" className="font-semibold p-8 lg:pb-20">Nossos exames</Typography>
        <div className="flex flex-col items-center lg:items-start justify-start gap-y-8 w-full">
          <div className="flex flex-col lg:flex-row self-center gap-y-8 lg:gap-x-20">
            <ExamCard
              icon={<ColorBlindnessIcon />}
              name="Examescopia"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam tempore
            dolorem unde animi consequatur corporis fugiat nobis illum, labore, cum soluta quam harum voluptate,
            officiis quia laborum adipisci voluptas."
              action="/"
            />
            <ExamCard
              icon={<GlassesPrescriptionIcon />}
              name="Examescopia"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis tempore,
              possimus tenetur veniam eveniet magni quo necessitatibus, quisquam quam illum quae a?
              Eius laborum a fuga quia voluptate ex."
              action="/"
            />
            <ExamCard
              icon={<FundusMapIcon />}
              name="Examescopia"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, earum deserunt?
              Exercitationem esse ducimus beatae quia accusantium velit modi quae sapiente deleniti eveniet
              quibusdam sequi laboriosam natus minus, nemo ipsum!"
              action="/"
            />
          </div>
          <Link
            className="rounded bg-teal-400 transition duration-200 hover:opacity-80 w-min text-nowrap py-2 px-4 text-sm text-slate-50 font-semibold"
            href="/exams"
          >
            Ver todos
          </Link>
        </div>
      </div>
    </section>

  );
}
