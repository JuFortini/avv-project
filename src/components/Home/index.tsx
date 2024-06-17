import { About } from "./About";
import { Exams } from "./Exams";
import { Presentation } from "./Presentation";

export function HomePage(): JSX.Element {
  return (
    <>
      <Presentation />
      <About />
      <Exams />
    </>
  )
}
