import { Suspense } from "react";
import { Typography } from "../../../../utils/Typography";
import { EmailContact } from "./EmailContact";
import { ContactShimmer } from "./loading";
import { DirectContact } from "./DirectContact";
import { motion } from "framer-motion";


export async function Personal() {
  return (
    <div className="flex-1 flex flex-col items-center lg:items-start justify-start gap-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
      >
        <Typography variant="h1" className="max-w-xl animate-in slide-in-from-bottom-56 fade-in duration-500">Entre em contato com a nossa equipe</Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
      >
        <Typography variant="h5" className="max-w-lg animate-in slide-in-from-bottom-56 fade-in duration-500">Nós queremos visitar sua cidade e ajudar com a saúde visual da sua comunidade. Nos mande uma mensagem e retornaremos assim que for possível.</Typography>
      </motion.div>
      <motion.div
        className="flex flex-col items-center lg:items-start gap-8 w-full animate-in slide-in-from-bottom-56 fade-in duration-1000"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeIn" }}
      >
        <Typography variant="h5" className="font-bold font-serif">Informações de contato</Typography>
        <Suspense fallback={<ContactShimmer />}>
          <DirectContact />
        </Suspense>
        {/* // TODO: atualizar email aqui */}
        <a href="mailto:contact@gmail.com">
          <EmailContact />
        </a>
      </motion.div>
    </div>
  );
}
