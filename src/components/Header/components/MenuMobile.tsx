import { BookingButton } from "./BookingButton";
import { MenuButton } from "./MenuButton";

export function MenuMobile(): JSX.Element {
  return (
    <div className="p-8 flex-col space-y-10 bg-teal-50 rounded-b-lg">
      <div className="flex-col space-y-4">
        <MenuButton title="home" route="/" />
        <MenuButton title="sobre" route="/about" />
        <MenuButton title="exames" route="/exams" />
        <MenuButton title="equipe" route="/team" />
        <MenuButton title="blog" route="/blog" />
        <MenuButton title="contato" route="/contact" />
      </div>
      <div className="pr-12">
        <BookingButton />
      </div>
    </div>
  );
}
