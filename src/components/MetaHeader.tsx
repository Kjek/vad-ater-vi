import Head from 'next/head';

const MetaHeader = () => {
  return (
    <Head>
      <title>Lunch i Sundsvall</title>
      <meta
        property='og:title'
        content='Lunch i Sundsvall'
        key='title'
        charSet='UTF-8'
      />
      <meta name='description' content='Lunch i Sundsvall' />
      <meta
        name='keywords'
        content='HTML, CSS, JavaScript, TypeScript, NextJS, T3, T3 App, Prisma, tRPC, ReactJS'
      />
      <meta name='author' content='Kjek' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default MetaHeader;
