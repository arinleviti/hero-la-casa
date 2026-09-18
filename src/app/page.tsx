/* 'use client'; */
import styles from './page.module.css';
import Landing from './components/LandingPage/landing-page';
import HeroSection from './components/HeroSection/hero-section';
import { heroContent, heroImage, videoData, textVideoData, picturesForBelt1 } from './Services/assetsService';
import VideoSection from './components/VideoSection/video-section';
import FindUs from './components/FindUs/find-us'
import PictureBelt from './components/PictureBelt/picture-belt';
import SwiperObject from './components/SwiperObject/swiper-object';
import { burgers } from './Services/menuItems';
import { StaffSection } from './components/StaffSection/staff-section';
import MarqueeSection from './components/Marquee/marquee';
/* import { useEffect } from 'react'; */
import Reviews from './components/Reviews/reviews'
import LatestPost from './components/LatestPost/latest-post';
import OpeningHours from './components/OpeningHours/opening-hours';
import TextForSEO from './components/VideoSection/text-for-seo';
import ScrollToFindUs from './components/scroll-to-find-us'; // client island
import EventsCalendar from './components/EventsCalendar/events-calendar';
/* import OlympicHero from './components/olympicHeroSection/olympic-hero'; */


export default function HomePage() {

  return (
  
    
    <div className={styles.homeWrapper} >
      
      <Landing />
      {/* <Navbar /> */}
      <main style={{ padding: '2rem' }}>

        <div style={{ height: '35vh' }}></div> {/* add vertical space to scroll */}
      </main>
{/*       <OlympicHero burgers={burgers} /> */}
      <HeroSection textData={heroContent} imageData={heroImage} />
      <MarqueeSection />
      <VideoSection videoData={videoData} textVideoData={textVideoData} />
      <TextForSEO textVideoData={textVideoData} />
      <EventsCalendar />
      <PictureBelt pictures={picturesForBelt1} />
      <SwiperObject burgers={burgers} />
      <StaffSection />
      <div id="find-us">
        <FindUs />
      </div>
      <LatestPost/>
      <Reviews/>
      <OpeningHours/>

      {/* Client-side UseEffect isolated b here */}
      <ScrollToFindUs />

    </div>

  );
}
