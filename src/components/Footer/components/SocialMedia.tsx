import Link from "next/link";
import { InstagramLogo } from "@phosphor-icons/react";

export function SocialMedia(): JSX.Element {
  return (
    <Link href="/" className="p-2 bg-slate-100 rounded-full flex justify-center items-center">
      <InstagramLogo size={20} color="#000000" />
    </Link>
  )
}
