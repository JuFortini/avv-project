import { Typography } from "../../../utils/Typography"
import { EmailField } from "./EmailField"
import { SocialMedia } from "./SocialMedia";

export function FooterContact(): JSX.Element {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <Typography variant="h4" className="font-serif">Associação Visão Voluntária</Typography>
        <Typography variant="small" className="col-span-2 block lg:hidden">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio alias praesentium eos nulla vero?
          Obcaecati corrupti, officia id officiis ex quis voluptatibus reiciendis soluta excepturi a iure
          veritatis ipsa sequi.
        </Typography>
      </div>
      <EmailField />
      <div className="gap-2 flex">
        <SocialMedia />
        <SocialMedia />
        <SocialMedia />
        <SocialMedia />
      </div>
    </div>
  );
}
