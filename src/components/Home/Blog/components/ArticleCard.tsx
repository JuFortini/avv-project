'use client'

import Link from "next/link";
import { Typography } from "../../../../utils/Typography";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { GradientImage } from "./GradientImage";
import { ReadMoreButton } from "../../../../utils/ReadMoreButton";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  redirection: string;
}

export function ArticleCard({ image, title, description, redirection }: ArticleCardProps): JSX.Element {
  const personalShadow = 'shadow-[0_16px_32px_-16px_rgba(58,135,118,0.1)]';
  return (
    <article
      className={`flex flex-col overflow-hidden items-center gap-4 h-full lg:max-w-[24rem] bg-slate-50 rounded-2xl ${personalShadow}`}
    >
      <GradientImage image={image} />
      <div className="px-6 flex flex-col items-center gap-2">
        <Typography variant="h4" className="text-center font-semibold font-serif">{title}</Typography>
        <Typography variant="small" className="text-center line-clamp-5">{description}</Typography>
      </div>
      <ReadMoreButton redirection={redirection} />
    </article>
  );
}
