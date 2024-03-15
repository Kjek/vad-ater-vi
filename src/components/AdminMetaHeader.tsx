import Head from 'next/head';
import { ThemeScript } from 'src/lib/getTheme';

const AdminMetaHeader = () => {
  return (
    <Head>
      <ThemeScript />
      <title>Adminsida</title>
    </Head>
  );
};

export default AdminMetaHeader;
