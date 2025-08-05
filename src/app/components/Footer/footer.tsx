
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';
import {WaveSeparatorFlipped} from '../../Services/assetsService'
import { SiReact } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>

 
  <div className={styles.waveInner}>
    <WaveSeparatorFlipped/>
  </div>

    <footer className={styles.footer}>
       
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={4} className={styles.logoCol}>
            <div className={styles.logoWrapper}>
              <Image
                src="/logo-giallino.png"
                alt="Hero Burger Logo"
                width={70}
                height={80}
              />
            </div>
          </Col>

          <Col xs={12} md={4} className={styles.centerCol}>
            <div className={styles.contact}>
              <p>Via Minghetti 1, Predazzo (TN)</p>
              <p>
                <a href="tel:+393334160031">+39 333 41 60 031</a>
              </p>
              <p>
                <a href="mailto:info@herolacasadelburger.it">
                  info@herolacasadelburger.it
                </a>
              </p>
            </div>
          </Col>

          <Col xs={12} md={4} className={styles.rightCol}>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/herolacasadelburger" target="_blank" rel="noopener noreferrer">
                <Image src="/SocialIcons/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/herolacasadelburger/" target="_blank" rel="noopener noreferrer">
                <Image src="/SocialIcons/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.tiktok.com/@herolacasadelburger1" target="_blank" rel="noopener noreferrer">
                <Image src="/SocialIcons/tiktok.png" alt="TikTok" width={24} height={24} />
              </a>
              <a href="https://www.youtube.com/@Hero-laCasadelBurger" target="_blank" rel="noopener noreferrer">
                <Image src="/SocialIcons/youtube.png" alt="YouTube" width={24} height={24} />
              </a>
            </div>
            <p className={styles.privacy}>
              &copy; {currentYear} Hero Burger. Tutti i diritti riservati.{' '}
              <Link href="/Privacy" className={styles.privacyLink}>
                Privacy Policy
              </Link>             
            </p>
             <p className={styles.signature}>
    
    <a
      href="https://arinleviti.site"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.signatureLink}
    >
     Designed & built with React <SiReact style={{ color: '#ccc', verticalAlign: 'middle'}} /> by Arin Leviti
    </a>
  </p>
          </Col>
        </Row>
        
      </Container> 
     
    </footer>
    </>
  );
}
