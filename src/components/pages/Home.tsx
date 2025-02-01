import React from 'react';
import MainSection from '../MainSection';
import Footer from '../Footer';
import App from '../../App';
//import InfoSection from '../InfoSection';
import SupportSection from '../SupportSection';
import HighlightedPost from '../HighlightedPost';
import VideoSection from '../VideoSection';

function Home() {
  return (
    <>
      <MainSection />
      <HighlightedPost />
      <SupportSection />
      <VideoSection />
      <Footer />
    </>
  );
}

export default Home