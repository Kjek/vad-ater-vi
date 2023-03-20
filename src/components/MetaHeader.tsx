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
      <meta
        name='description'
        content='Vad äter vi? Kolla dagens eller veckans lunch i Sundsvall. Här listas olika restaurangers lunchmenyer för nuvarande vecka så man lätt kan ta reda på vad man vill äta för lunch.'
      />
      <meta
        name='keywords'
        content='lunch, sundsvall, mat, meny, menyer, restaurang, dagens lunch, veckans lunch, lunch i sundsvall, vad äter vi'
      />
      <meta name='author' content='Kjek' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='canonical' href='https://www.vadätervi.nu/' />
    </Head>
  );
};

export default MetaHeader;
