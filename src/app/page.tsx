"use client";

import Navbar from './components/Navbar/Navbar';
import Landing from './components/LandingPage/landing-page';
import HeroSection from './components/HeroSection/hero-section';
import {heroContent, heroImage} from './Services/assetsService';

export default function HomePage() {

  return (
    <div className="homeWrapper">
      <Landing />
      <Navbar />
      <main style={{ padding: '2rem' }}>
        
        <div style={{ height: '150vh' }}></div> {/* add vertical space to scroll */}
      </main>
      <HeroSection textData={heroContent} imageData={heroImage} />
    </div>

  );
}
