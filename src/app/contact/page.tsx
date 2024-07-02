'use client'

import { Typography } from "../../utils/Typography";

export default function Contact(): JSX.Element {
  const email = window?.localStorage.getItem('email');
  return (
    <div className="flex h-svh w-screen justify-center items-center">
      <Typography variant="h1" className="bg-cyan-400">{email}</Typography>
      <button className="bg-rose-400" onClick={() => console.log('email no contato', email)}>
        Clicar aqui
      </button>
    </div>
  );
}
