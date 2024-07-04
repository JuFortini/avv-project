'use client'

import { Typography } from "../../../utils/Typography";
import { EmailForm } from "./components/EmailForm";

export function Form(): JSX.Element {

  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container flex items-center 2xl:h-svh px-8 lg:px-16 py-8 xl:py-24 gap-20">
        <EmailForm />
        <Typography variant="h4" className="flex-1">Contato</Typography>
      </div>
    </section>
  );
}
