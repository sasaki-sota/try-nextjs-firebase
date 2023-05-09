import { NextPage } from 'next';
import Services from './components/Services';

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default Home;
