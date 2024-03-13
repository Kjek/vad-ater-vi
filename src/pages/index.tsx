import Header from '@component/molecules/Header/Header';
import { type NextPage } from 'next';
import MetaHeader from '../components/MetaHeader';
import HomeTemplate from '@component/templates/HomeTemplate';
import Main from '@component/organisms/Main/Main';

const Home: NextPage = () => {
  return (
    <>
      <HomeTemplate
        metaHeader={<MetaHeader />}
        header={<Header />}
        main={<Main />}
      />
    </>
  );
};

export default Home;
