import Link from "next/link";
import { MenuDropdown } from "./components/MenuDropdown";
import { BookingButton } from "./components/BookingButton";

export function Header(): JSX.Element {
  return (
    <>
      <div className="bg-teal-50 px-16 py-2 flex justify-between items-center">
        <div className="h-14">
          <Link href="/">
            <img src="/images/logo.svg" alt="logo" className="h-14" />
          </Link>
        </div>
        <MenuDropdown />
        <BookingButton />
      </div>
    </>
  );
};
