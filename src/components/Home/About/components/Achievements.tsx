import { Typography } from "../../../../utils/Typography";

export const AchievementsColor = {
  Teal: 'bg-teal-200',
  Fuchsia: 'bg-fuchsia-200',
  Rose: 'bg-rose-200',
}

export type AchievementsColor = typeof AchievementsColor[keyof typeof AchievementsColor]

interface AchievementsProps {
  color: AchievementsColor;
  title: string;
  subtitle: string;
}

export function Achievements({ color, title, subtitle }: AchievementsProps): JSX.Element {
  return (
    <div className={`flex flex-1 flex-col justify-center w-full ${color} text-center font-serif h-full rounded-2xl space-y-4 py-8`}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="p">{subtitle}</Typography>
    </div>
  );
}
