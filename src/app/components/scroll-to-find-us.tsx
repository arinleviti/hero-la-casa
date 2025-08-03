'use client';
import { useEffect } from 'react';

export default function ScrollToFindUs() {
  useEffect(() => {
    if (window.location.hash === '#find-us') {
      setTimeout(() => {
        const el = document.getElementById('find-us');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return null; // This component just runs the effect
}