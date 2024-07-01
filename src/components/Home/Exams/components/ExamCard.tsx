'use client'

import Link from "next/link";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { ReactElement } from "react";
import { Typography } from "../../../../utils/Typography";
import { ReadMoreButton } from "../../../../utils/ReadMoreButton";

interface ExamCardProps {
  icon: ReactElement;
  name: string;
  description: string;
  redirection: string;
}

export function ExamCard({ icon, name, description, redirection }: ExamCardProps): JSX.Element {
  const personalShadow = 'shadow-[0_16px_32px_-16px_rgba(58,135,118,0.1)]';
  return (
    <article className={`p-8 flex flex-col justify-between gap-6 items-center w-full lg:max-w-[24rem] bg-slate-50 rounded-2xl ${personalShadow}`}>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex h-24 w-24">{icon}</div>
        <Typography variant="h5" className="font-semibold font-serif">{name}</Typography>
        <Typography variant="small" className="text-center">{description}</Typography>
      </div>
      <ReadMoreButton redirection={redirection} />
    </article>
  );
}
