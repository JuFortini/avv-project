'use client'

import { Form } from "./components/Form";
import { Personal } from "./components/Personal";

export function MainContact(): JSX.Element {

  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container flex items-center 2xl:h-svh px-8 lg:px-16 py-8 xl:py-24 gap-20">
        <Form />
        <Personal />
      </div>
    </section>
  );
}
