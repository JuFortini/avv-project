import Head from 'next/head';
import { Header } from '../components/Header';
import { HomePage } from '../components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Associação Visão Voluntária</title>
      </Head>
      <Header />

      <HomePage />
      <HomePage />
    </>
  );
}
