import Head from 'next/head';
import { Header } from '../components/Header';
// import { HomePage } from '../components/PagesComponents/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Associação Visão Voluntária</title>
      </Head>
      <Header />
      <div>
        <h1 className="text-3xl font-bold font-serif text-fuchsia-600">
          Hello World!!! Oi
        </h1>
      </div>
    </>
  );
}
