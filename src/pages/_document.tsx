import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" type="image/ico" />
          {/* <meta
            name="description"
            content="Somos a empresa de inteligência de dados que transforma o Open Finance em resultados de negócios."
          />
          <meta
            name="keywords"
            content="Quanto, Open Finance, Inteligência de dados, Análise de renda, Extrato categorizado, Tecnologia financeira"
          /> */}
          <meta property="og:title" content="Associação Visão Voluntária" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/og_image.png" />
          {/* <meta
            property="og:description"
            content="Somos a empresa de inteligência de dados que transforma o Open Finance em resultados de negócios."
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
