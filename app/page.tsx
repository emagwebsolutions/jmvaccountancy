'use client';
import Sectionfour from '@/components/home/Sectionfour';
import Sectionone from '@/components/home/Sectionone';
import Sectionthree from '@/components/home/Sectionthree';
import Sectiontwo from '@/components/home/Sectiontwo';
import Header from '@/components/home/Header';
import Universal from '@/components/Universal';

const Home = () => {
  return (
    <Universal>
      <div className="home">
        <Header />
        <Sectionone />
        <Sectiontwo />
        <Sectionthree />
        <Sectionfour />
      </div>
    </Universal>
  );
};
export default Home;
