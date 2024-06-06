import { Presentation } from "./Presentation";
import { About } from "./components/About";

export function HomePage(): JSX.Element {
  return (
    <>
      <Presentation />
      <About />
    </>
  )
}
