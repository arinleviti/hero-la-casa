"use client";

import Navbar from './components/Navbar/Navbar';
import Landing from './components/LandingPage/landing-page';

export default function HomePage() {

  return (
    <div className="homeWrapper">
      <Landing />
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to My Restaurant</h1>
        <p>Delicious food served with love.</p>
        <div style={{ height: '150vh' }}></div> {/* add vertical space to scroll */}
      </main>
    </div>

  );
}
