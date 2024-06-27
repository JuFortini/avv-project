'use client'

import { WhatsappLogo } from "phosphor-react";

export function TestimonialCard() {
  return (
    <div className="bg-slate-50 rounded-lg divide-y w-full md:max-w-sm">
      <div className="p-6 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h5 className="font-bold text-lg text-teal-500">Nome da Pessoa Silva</h5>
          <p className="text-xs font-semibold font-serif text-slate-600">Cidade da Pessoa Town</p>
        </div>
        <div className="p-2 bg-teal-500 rounded-full">
          <WhatsappLogo size={24} color="#FFFFFF" />
        </div>
      </div>
      <p className="p-6 font-semibold text-teal-800">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores pariatur ipsam rerum
        dolores itaque fugiat corporis laboriosam eveniet neque sunt sit iste voluptates voluptatibus,
        cumque tenetur unde id ipsum."
      </p>
    </div>
  );
}
