import { MenuButton } from "./MenuButton";

export function MenuDropdown(): JSX.Element {
  return (
    <>
      <div className="md:flex xl:gap-x-4 hidden">
        <MenuButton title="home" route="/" />
        <MenuButton title="sobre" route="/about" />
        <MenuButton title="exames" route="/exams" />
        <MenuButton title="cidades" route="/cities" />
        <MenuButton title="blog" route="/blog" />
        <MenuButton title="contato" route="/contact" />
      </div>
    </>
  );
}
