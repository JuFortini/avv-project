'use client'

import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { sendEmail, EmailState } from "../../../../utils/send-email";
import { FormData } from "../../../../utils/send-email";
import { Player } from "@lottiefiles/react-lottie-player";

export function Form(): JSX.Element {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailState, setEmailState] = useState<EmailState>();
  const fieldStyle = "rounded-3xl border-2 border-teal-50 px-4 py-2 flex-1 outline-none"
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isValidPhone = /\d+/g;

  useEffect(() => {
    if (typeof window.localStorage !== "undefined" && email === '') {
      const email = window.localStorage.getItem('email') ?? '';
      setEmail(email);
    };
  }, []);

  useEffect(() => {
    formValidator();
  }, [name, lastName, email, phone, message]);

  function formValidator() {
    if (name.length > 2 &&
      lastName.length > 2 &&
      email.match(isValidEmail) &&
      phone.match(isValidPhone)?.join('').length == 11 &&
      message.length > 50) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  async function handleForm(event) {
    event.preventDefault();

    setEmailState(EmailState.Loading);
    const formdata: FormData = {
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    const response = await sendEmail(formdata);
    setEmailState(response);

    clearForm();
  }

  function clearForm() {
    if (typeof window.localStorage !== "undefined") {
      localStorage.clear();
    };

    setName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  if (emailState === EmailState.Loading) {
    return (
      <Player
        src="https://lottie.host/9dd46b7b-0159-4db9-885f-bc3349a9a0d2/VTK9SaB8Ic.json"
        className="w-80"
        autoplay
        loop
      />
    );
  }

  if (emailState === EmailState.Success) {
    return (
      <Player
        src="https://lottie.host/2af3d09d-5619-4d73-b375-cda2d88d6fdd/S7o4JI88lC.json"
        className="w-80"
        autoplay
        keepLastFrame
      />
    );
  }

  if (emailState === EmailState.Error) {
    return (
      <Player
        src="https://lottie.host/fa823ad5-ee58-405a-9ae0-8964d6d9a665/AZLW8hfUI7.json"
        className="w-80"
        autoplay
        keepLastFrame
      />
    );
  }

  return (
    <form className="bg-slate-50 p-8 rounded-2xl flex-1 flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          className={fieldStyle}
          placeholder="Seu nome"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
        <input
          className={fieldStyle}
          placeholder="Seu sobrenome"
          value={lastName}
          onChange={(e) => { setLastName(e.target.value) }}
        />
      </div>
      <input
        type="email"
        placeholder="Seu e-mail"
        value={email}
        className={fieldStyle}
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <InputMask
        mask="(99) 99999-9999"
        maskChar=' '
        placeholder="Seu telefone"
        value={phone}
        onChange={(e) => { setPhone(e.target.value) }}
        className={fieldStyle}
      />
      <textarea
        rows={7}
        onChange={(e) => { setMessage(e.target.value) }}
        className={fieldStyle}
        placeholder="Por favor, digite sua mensagem aqui..."
      />
      <button
        disabled={!isFormValid}
        onClick={(e) => handleForm(e)}
        className={`transition duration-200 hover:opacity-80 px-6 py-3 xl:px-8 xl:py-3 whitespace-nowrap ${isFormValid ? 'bg-teal-400' : 'bg-slate-400'} font-semibold rounded-full w-min`}
      >
        Enviar
      </button>
    </form>
  );
}
