import Link from "next/link";

export function BookingButton(): JSX.Element {
  return (
    <>
      <Link
        href="/contact"
        className="transition duration-200 hover:opacity-80 px-6 py-3 xl:px-8 xl:py-3 whitespace-nowrap bg-teal-400 text-slate-100 font-semibold rounded-full text-xs xl:text-sm w-min"
      >
        Reserve uma visita
      </Link>
    </>
  );
}
