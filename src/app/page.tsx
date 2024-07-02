import { Metadata } from "next";

import { HomePage } from "../components/Home";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('http://localhost:3000'),
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

export default function Index() {
  return <HomePage />
}
