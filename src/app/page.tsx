import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import { notFound } from "next/navigation";
import { HomePage } from "../components/Home";

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Associação Visão Voluntária',
    description: '',
    icons: "/favicon.svg",
    openGraph: {
      title: 'Associação Visão Voluntária',
      description: '',
      images: [
        {
          url: '/images/og_image.png' || "",
        },
      ],
    },
  };
}

export default async function Index() {
  return <HomePage />

}
