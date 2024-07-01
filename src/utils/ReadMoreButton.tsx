import { ArrowCircleRight } from "@phosphor-icons/react";
import Link from "next/link";

interface ReadMoreButtonProps {
  redirection: string;
}

export function ReadMoreButton({ redirection }: ReadMoreButtonProps): JSX.Element {
  return (
    <div className="flex items-center space-x-2 group pb-6">
      <Link className="transition duration-500 group-hover:-translate-x-1 text-sm md:text-base lg:text-lg" href={redirection}>Saiba mais</Link>
      <ArrowCircleRight
        className="transition duration-500 group-hover:translate-x-1"
        size={28}
        weight="fill"
        color="#3F9482"
      />
    </div>
  );
}
