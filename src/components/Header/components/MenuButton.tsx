import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuButtonProps {
  title: string
  route: string
}

export function MenuButton({ title, route }: MenuButtonProps): JSX.Element {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={route}
        className={`px-4 py-2 rounded-full
        ${pathname === route && 'bg-slate-100'}
        transition duration-200 hover:bg-slate-100 text-sm xl:text-base text-slate-600`}
      >
        {title}
      </Link>
    </div>
  );
}
