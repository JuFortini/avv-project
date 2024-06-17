import { ExamCard } from "./components/ExamCard";
import { ColorBlindnessIcon } from "./images/ColorBlindnessIcon";
import { FundusMapIcon } from "./images/FundusMapIcon";
import { GlassesPrescriptionIcon } from "./images/GlassesPrescriptionIcon";

export function Exams(): JSX.Element {
  return (
    <>
      {/* // TODO: implementar redirecionamentos */}
      <div className="bg-teal-50 px-8 lg:px-16 py-24 lg:py-2 h-svh w-full flex justify-center items-center space-x-20">
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
    </>
  );
}
