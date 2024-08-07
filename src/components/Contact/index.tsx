import { Footer } from "../Footer";
import { FAQ } from "../FAQ";
import { MainContact } from "./MainContact";

export function ContactPage(): JSX.Element {
  return (
    <>
      <MainContact />
      <FAQ />
      <Footer />
    </>
  );
}
