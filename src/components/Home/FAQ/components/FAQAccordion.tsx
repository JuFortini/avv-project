import { Plus } from "@phosphor-icons/react";
import { Minus } from "@phosphor-icons/react/dist/ssr";
import { MouseEventHandler } from "react";

interface FAQAccordionProps {
  isOpen: boolean;
  onClick: MouseEventHandler;
  question: string;
  answer: string;
}

export function FAQAccordion({ isOpen, question, answer, onClick }: FAQAccordionProps): JSX.Element {
  return (
    <div>
      <div className="bg-slate-50 rounded-md flex flex-col px-4 py-2">
        <button onClick={onClick} className="flex justify-between w-full items-center font-semibold">
          <h4>{question}</h4>
          <div className="transition delay-300 duration-300 ease-in">
            {isOpen ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
          </div>
        </button>
        <div className={`overflow-hidden transition-[max-height] duration-300 ease-in ${isOpen ? "max-h-20" : "max-h-0"}`}>
          <p className="pt-4 text-sm">{answer}</p>
        </div>
      </div>
    </div>
  );
}
