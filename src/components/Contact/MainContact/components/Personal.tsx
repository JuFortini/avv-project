import { Typography } from "../../../../utils/Typography";
import { DirectContact } from "./DirectContact";
import { EmailContact } from "./EmailContact";

export function Personal(): JSX.Element {
  return (
    <div className="flex-1 flex flex-col items-center lg:items-start justify-start gap-8 w-full">
      <Typography variant="h1" className="max-w-xl">Entre em contato com a nossa equipe</Typography>
      <Typography variant="h5" className="max-w-lg">Nós queremos visitar sua cidade e ajudar com a saúde visual da sua comunidade. Nos mande uma mensagem e retornaremos assim que for possível.</Typography>
      <div className="flex flex-col items-center lg:items-start gap-8 w-full">
        <Typography variant="h5" className="font-bold font-serif">Informações de contato</Typography>
        <DirectContact />
        <EmailContact />
      </div>
    </div>
  );
}
