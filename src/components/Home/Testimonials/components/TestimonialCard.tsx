'use client'

import { InstagramLogo, WhatsappLogo, UserSound, Envelope } from "@phosphor-icons/react";

export const TestimonialCardEnvironmentIcon = {
  Whatsapp: <WhatsappLogo size={24} color="#FFFFFF" />,
  Instagram: <InstagramLogo size={24} color="#FFFFFF" />,
  Pessoalmente: <UserSound size={24} color="#FFFFFF" />,
  Email: <Envelope size={24} color="#FFFFFF" />,
}

export type TestimonialCardEnvironmentIcon = typeof TestimonialCardEnvironmentIcon[keyof typeof TestimonialCardEnvironmentIcon]

interface TestimonialCardProps {
  name: string;
  location: string;
  environment?: string;
  testimonial: string;
}

export function TestimonialCard({ name, location, environment, testimonial }: TestimonialCardProps) {
  const _testimonialCardEnvironmentIcon = () => {
    switch (environment) {
      case "Whatsapp":
        return TestimonialCardEnvironmentIcon.Whatsapp;
      case "Instagram":
        return TestimonialCardEnvironmentIcon.Instagram;
      case "Pessoalmente":
        return TestimonialCardEnvironmentIcon.Pessoalmente;
      case "Email":
        return TestimonialCardEnvironmentIcon.Email;
      default:
        return <></>;
    }
  }
  return (
    <div className="bg-slate-50 rounded-lg divide-y w-full md:max-w-sm even:md:relative even:md:top-16">
      <div className="p-6 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h5 className="font-bold text-lg text-teal-500">{name}</h5>
          <p className="text-xs font-semibold font-serif text-slate-600">{location}</p>
        </div>
        {environment != undefined ?
          <div className="p-2 bg-teal-500 rounded-full">
            {_testimonialCardEnvironmentIcon()}
          </div> :
          <></>}
      </div>
      <p className="p-6 font-semibold text-teal-800">
        "{testimonial}"
      </p>
    </div>
  );
}
