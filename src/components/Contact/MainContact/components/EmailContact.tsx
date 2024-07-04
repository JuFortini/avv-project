import { PaperPlane } from "@phosphor-icons/react";
import { Typography } from "../../../../utils/Typography";

export function EmailContact(): JSX.Element {
  return (
    <div className="flex gap-2 items-center">
      <div className="rounded-full bg-teal-600 p-2 w-min h-min">
        <PaperPlane size={28} color="#FFFFFF" weight="fill" />
      </div>
      <div>
        <Typography variant="small" className="font-extrabold text-teal-600">E-mail</Typography>
        <Typography variant="small">contato@gmail.com</Typography>
      </div>
    </div>
  );
}
