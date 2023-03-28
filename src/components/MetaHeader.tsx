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

      {/* PWA Stuff */}
      <link rel='manifest' href='manifest.json' />

      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='application-name' content='VÄV' />
      <meta name='apple-mobile-web-app-title' content='VÄV' />
      <meta name='theme-color' content='#111827' />
      <meta name='msapplication-navbutton-color' content='#111827' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <meta name='msapplication-starturl' content='/' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='icon-192x192.png'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='192x192'
        href='icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='256x256'
        href='icon-256x256.png'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='256x256'
        href='icon-256x256.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='384x384'
        href='icon-384x384.png'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='384x384'
        href='icon-384x384.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='512x512'
        href='icon-512x512.png'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='512x512'
        href='icon-512x512.png'
      />
    </Head>
  );
};

export default MetaHeader;
