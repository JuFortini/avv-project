import { FooterContact } from "./components/FooterContact";
import { SiteMap } from "./components/SiteMap";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-teal-800 text-slate-100 flex justify-center">
      <div className="container px-8 lg:px-16 py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="flex-1">
          <FooterContact />
        </div>
        <div className="w-full lg:w-3/5">
          <SiteMap />
        </div>
      </div>
    </footer>
  );
}
