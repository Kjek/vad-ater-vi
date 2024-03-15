import AdminMetaHeader from '@component/AdminMetaHeader';
import AdminMain from '@component/organisms/AdminMain/AdminMain';
import AdminTemplate from '@component/templates/AdminTemplate';
import type { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <>
      <AdminTemplate metaHeader={<AdminMetaHeader />} main={<AdminMain />} />
    </>
  );
};

export default LoginPage;
