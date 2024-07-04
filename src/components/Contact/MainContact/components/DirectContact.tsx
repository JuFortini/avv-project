import { Typography } from "../../../../utils/Typography";
import { SocialMedia, SocialMediaTheme, SocialMediaType } from "../../../Footer/components/SocialMedia";

export function DirectContact(): JSX.Element {
  return (
    <div className="flex gap-8 items-center">
      <div
        className="w-32 h-32 rounded-3xl border-4 bg-cover bg-center border-slate-50"
        style={{ backgroundImage: `url('/images/man-image.jpg')` }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <Typography variant="p" className="font-bold">André Ribeiro</Typography>
          <Typography variant="p">Coordenador de logística</Typography>
        </div>
        <div className="flex gap-2">
          <SocialMedia type={SocialMediaType.Telefone} theme={SocialMediaTheme.Dark} />
          <SocialMedia type={SocialMediaType.Whatsapp} theme={SocialMediaTheme.Dark} />
        </div>
      </div>
    </div>
  );
}
