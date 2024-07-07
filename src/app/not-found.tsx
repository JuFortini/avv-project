'use client'

import { Player } from "@lottiefiles/react-lottie-player";

export default function NotFound(): JSX.Element {
  return (
    <section className="flex w-screen h-screen bg-white justify-center items-center">
      <Player
        src='https://lottie.host/b42a9a95-80b5-478b-986f-83f6eff48055/jl55lK5xkJ.json'

        className="w-full"
        autoplay
        loop
      />
    </section>
  );
}
