import Link from "next/link";
import { useRouter } from "next/router";

interface MenuButtonProps {
  title: string
  route: string
}

export function MenuButton({ title, route }: MenuButtonProps): JSX.Element {
  const router = useRouter();
  return (
    <div>
      <Link
        href={route}
        className={`px-4 py-2 rounded-full
        ${router.pathname === route && 'bg-slate-100'}
        transition duration-200 hover:bg-slate-100 text-sm xl:text-base text-slate-600`}
      >
        {title}
      </Link>
    </div>
  );
}
