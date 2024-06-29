import { Plus } from "@phosphor-icons/react";
import { Minus } from "@phosphor-icons/react/dist/ssr";
import { MouseEventHandler } from "react";
import { Typography } from "../../../../utils/Typography";

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
        <button onClick={onClick} className="flex justify-between w-full text-start items-center font-semibold">
          <Typography variant="p">{question}</Typography>
          <div className="min-w-6">
            {isOpen ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
          </div>
        </button>
        <div className={`overflow-hidden transition-[max-height] duration-300 ease-in ${isOpen ? "max-h-20" : "max-h-0"}`}>
          <Typography variant="small" className="pt-4">{answer}</Typography>
        </div>
      </div>
    </div>
  );
}
