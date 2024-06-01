import { MenuButton } from "./MenuButton";

export function MenuDropdown(): JSX.Element {
  return (
    <>
      <div className="flex gap-x-4">
        <MenuButton title="home" isSelected />
        <MenuButton title="sobre" />
        <MenuButton title="exames" />
        <MenuButton title="equipe" />
        <MenuButton title="blog" />
      </div>
    </>
  );
}
