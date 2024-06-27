import { Marcellus, Mulish } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Header } from "../components/Header";

import './global.css';

const marcellus =
  Marcellus({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-marcellus",
  });

const mulish =
  Mulish({
    weight: "variable",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-mulish",
  });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${marcellus.variable} ${mulish.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
