import { useState } from "react";
import { FAQAccordion } from "./components/FAQAccordion";
import { FAQS, FAQProps } from "./data/FAQS";
import { Typography } from "../../../utils/Typography";

export function FAQ(): JSX.Element {
  const _faqs = FAQS;
  const personalShadow = 'shadow-[0_16px_32px_-16px_rgba(58,135,118,0.6)]';
  const [questionOpened, setQuestionOpened] = useState<FAQProps | null>(null);
  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container flex justify-center px-8 w-full lg:px-16 py-16">
        <div className={`flex flex-col justify-between items-center gap-12 max-w-screen-lg bg-teal-200 w-full rounded-xl p-8 ${personalShadow} animate-in slide-in-from-bottom-56 fade-in duration-1000`}>
          <Typography variant="h2" className="text-center font-semibold">Perguntas frequentes</Typography>
          <div className="w-full flex flex-col gap-4">
            {_faqs.map((e: FAQProps) => (
              <FAQAccordion
                key={e.id}
                isOpen={e == questionOpened}
                onClick={() => setQuestionOpened(e == questionOpened ? null : e)}
                question={e.question}
                answer={e.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
