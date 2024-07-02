'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export function EmailField(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(false);
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const validateEmail = (e) => {
    if (e.target?.value && e.target.value.match(isValidEmail)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 text-xs xl:text-sm">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="rounded-full flex-1 px-4 text-slate-900 focus:outline-none"
          onChange={(value) => {
            validateEmail(value);
            setEmail(value.target?.value);
          }}
        />
        <button
          disabled={!isActive}
          className={`transition duration-200 hover:opacity-80 px-6 py-3 xl:px-8 xl:py-3 whitespace-nowrap ${isActive ? 'bg-teal-400' : 'bg-slate-400'} font-semibold rounded-full w-min`}
          onClick={() => {
            if (window != null) {
              localStorage.setItem('email', email);
            }
            router.push('/contact');
          }}
        >
          Entre em contato
        </button>
      </div>
      <p className="text-xs">
        Ao digitar seu email e clicar em "Entre em contato" você será redirecionado para preencher outros dados antes do envio.
      </p>
    </div>
  );
}
