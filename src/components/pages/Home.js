import React from 'react';
import MainSection from '../MainSection';
import Footer from '../Footer';
import App from '../../App';
//import InfoSection from '../InfoSection';
import SupportSection from '../SupportSection';
import HighlightedPost from '../HighlightedPost';

function Home() {
  return (
    <>
      <MainSection />
      <HighlightedPost />
      <SupportSection />
      <Footer />
    </>
  );
}

export default Home