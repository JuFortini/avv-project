import { ReactNode } from "react";
import { Typography } from "../../../utils/Typography";

interface NavigationListProps {
  title: string;
  children: ReactNode;
}

export function NavigationList({ title, children }: NavigationListProps): JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      <Typography variant="p" className="font-serif">{title}</Typography>
      <div className="flex flex-col gap-4 text-xs md:text-sm lg:text-base">
        {children}
      </div>
    </div>
  );
}
