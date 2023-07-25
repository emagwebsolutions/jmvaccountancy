import Hamburger from './Hamburger';
import { useState } from 'react';
import Footer from './includes/Footer';
import Nav from './includes/Nav';

const Universal = ({ children }: { children: React.ReactNode }) => {
  const [showNav, setShowNav] = useState(false);

  const handleHamburger = () => {
    setShowNav(true);
  };

  const hideHamburger = () => {
    setShowNav(false);
  };

  return (
    <>
      <Hamburger handleHamburger={handleHamburger} />
      <Nav show={showNav} hide={hideHamburger} />
      {children}
      <Footer />
    </>
  );
};

export default Universal;
