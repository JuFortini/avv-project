import { useState } from "react";
import { FAQAccordion } from "./components/FAQAccordion";
import { FAQS, FAQProps } from "./data/FAQS";

export function FAQ(): JSX.Element {
  const _faqs = FAQS;
  const [questionOpened, setQuestionOpened] = useState<FAQProps | null>(null);
  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container flex justify-center px-8 w-full lg:px-16 py-16">
        <div className="flex flex-col justify-between items-center gap-12 max-w-screen-lg bg-teal-200 w-full rounded-xl p-8">
          <h1 className="text-2xl font-serif font-bold">Perguntas frequentes</h1>
          <div className="w-full flex flex-col gap-4">
            {_faqs.map((e: FAQProps) => (
              <FAQAccordion
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
