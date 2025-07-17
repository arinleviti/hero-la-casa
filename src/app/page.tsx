"use client";
import styles from './page.module.css';
import Landing from './components/LandingPage/landing-page';
import HeroSection from './components/HeroSection/hero-section';
import {heroContent, heroImage, videoData, textVideoData, picturesForBelt1} from './Services/assetsService';
import VideoSection from './components/VideoSection/video-section';
import PictureBelt from './components/PictureBelt/picture-belt';
import SwiperObject from './components/SwiperObject/swiper-object';
import{ burgers} from './Services/menuItems';
import { StaffSection } from './components/StaffSection/staff-section';
import MarqueeSection from './components/Marquee/marquee';

export default function HomePage() {

  return (
    <div className={styles.homeWrapper}>
      <Landing />
      {/* <Navbar /> */}
      <main style={{ padding: '2rem' }}>
        
        <div style={{ height: '35vh' }}></div> {/* add vertical space to scroll */}
      </main>
      <HeroSection textData={heroContent} imageData={heroImage} />
      <MarqueeSection />
      <VideoSection videoData={videoData} textVideoData={textVideoData} />
      <PictureBelt pictures={picturesForBelt1} />
      <SwiperObject burgers={burgers} />
      <StaffSection />
    </div>

  );
}
