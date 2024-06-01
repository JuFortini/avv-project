import { MenuButton } from "./MenuButton";

export function MenuDropdown(): JSX.Element {
  return (
    <>
      <div className="flex gap-x-4">
        <MenuButton title="home" route="/" />
        <MenuButton title="sobre" route="/about" />
        <MenuButton title="exames" route="/exams" />
        <MenuButton title="equipe" route="/team" />
        <MenuButton title="blog" route="/blog" />
        <MenuButton title="contato" route="/contact" />
      </div>
    </>
  );
}
