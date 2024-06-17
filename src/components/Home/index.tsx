import { About } from "./About";
import { Presentation } from "./Presentation";

export function HomePage(): JSX.Element {
  return (
    <>
      <Presentation />
      <About />
    </>
  )
}
