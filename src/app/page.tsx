"use client";
import styles from './page.module.css';
import Landing from './components/LandingPage/landing-page';
import HeroSection from './components/HeroSection/hero-section';
import {heroContent, heroImage, videoData, textVideoData, picturesForBelt1} from './Services/assetsService';
import VideoSection from './components/VideoSection/video-section';
import PictureBelt from './components/PictureBelt/picture-belt';
import SwiperObject from './components/SwiperObject/swiper-object';
import{ burgers} from './Services/menuItems';

export default function HomePage() {

  return (
    <div className={styles.homeWrapper}>
      <Landing />
      {/* <Navbar /> */}
      <main style={{ padding: '2rem' }}>
        
        <div style={{ height: '60vh' }}></div> {/* add vertical space to scroll */}
      </main>
      <HeroSection textData={heroContent} imageData={heroImage} />
      <VideoSection videoData={videoData} textVideoData={textVideoData} />
      <PictureBelt pictures={picturesForBelt1} />
      <SwiperObject burgers={burgers} />
    </div>

  );
}
