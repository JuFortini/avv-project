'use client'

import Link from "next/link";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { ReactElement } from "react";

interface ExamCardProps {
  icon: ReactElement;
  name: string;
  description: string;
  action: string;
}

export function ExamCard({ icon, name, description, action }: ExamCardProps): JSX.Element {
  const personalShadow = 'shadow-[0_16px_32px_-16px_rgba(58,135,118,0.1)]';
  return (
    <article className={`p-8 flex flex-col justify-between gap-6 items-center w-full lg:max-w-[24rem] bg-slate-50 rounded-2xl ${personalShadow}`}>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex h-24 w-24">{icon}</div>
        <h4 className="text-xl font-semibold font-serif">{name}</h4>
        <p className="text-center">{description}</p>
      </div>
      <div className="flex items-center space-x-2 group">
        <Link className="transition duration-500 group-hover:-translate-x-1" href={action}>Saiba mais</Link>
        <ArrowCircleRight
          className="transition duration-500 group-hover:translate-x-1"
          size={28}
          weight="fill"
          color="#3F9482"
        />
      </div>
    </article>
  );
}
