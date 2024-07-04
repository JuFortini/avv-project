'use client'

import { Form } from "./components/Form";
import { Personal } from "./components/Personal";

export function MainContact(): JSX.Element {

  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container flex flex-col lg:flex-row text-center lg:text-start items-center 2xl:h-svh h-max px-8 lg:px-16 xl:pb-16 pb-4 pt-32 xl:py-24 gap-20">
        <Form />
        <Personal />
      </div>
    </section>
  );
}
