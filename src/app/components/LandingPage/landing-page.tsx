
import dynamic from 'next/dynamic';

const LandingInner = dynamic(() => import('./LandingInner'), { ssr: false });


export default function Landing() {
  return <LandingInner />;
} 