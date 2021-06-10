import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Timeline from '../Timeline';
import About from '../About'
import Tokenomics from '../Tokenomics';
import Markets from '../Markets'
import FAQs from '../FAQs';

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
      <About />
      <Tokenomics />
      <Timeline />
      <Markets />
      <FAQs />
      <Footer />
    </>
  );
}

export default Home;
