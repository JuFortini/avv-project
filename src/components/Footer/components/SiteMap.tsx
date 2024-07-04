import Link from "next/link";
import { Typography } from "../../../utils/Typography";
import { NavigationList } from "./NavigationList";

export function SiteMap(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-10 justify-items-center">
      <Typography variant="small" className="col-span-2 hidden lg:block">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio alias praesentium eos nulla vero?
        Obcaecati corrupti, officia id officiis ex quis voluptatibus reiciendis soluta excepturi a iure
        veritatis ipsa sequi.
      </Typography>
      <NavigationList title="Navegação">
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/exams">Exames</Link>
        <Link href="/cities">Cidades atendidas</Link>
        <Link href="/blog">Blog</Link>
      </NavigationList>
      { /* // TODO: atualizar redirecionamento */}
      <NavigationList title="Principais Exames">
        <Link href="/">Exame 1</Link>
        <Link href="/">Exame 2</Link>
        <Link href="/">Exame 3</Link>
        <Link href="/">Exame 4</Link>
        <Link href="/">Exame 5</Link>
        <Link href="/">Exame 6</Link>
        <Link href="/exams">Ver todos</Link>
      </NavigationList>
    </div>
  );
}
