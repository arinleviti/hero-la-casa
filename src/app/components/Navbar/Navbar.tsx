'use client';

import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';
import Image from 'next/image';
import WaveSeparator from '../../Services/assetsService'
import { useScroll, useTransform, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function NavbarBasic() {
    const [expanded, setExpanded] = useState(false);

    /* const { scrollYProgress } = useScroll();

    const navbarLogoOpacity = useTransform(scrollYProgress, [0, 0.19, 0.2], [0, 0, 1]); */

    const { scrollY } = useScroll();
    const navbarLogoOpacity = useTransform(scrollY, [0, 280, 300], [0, 0, 1]);

    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <Navbar expand="lg" expanded={expanded} className={styles.navbar}>
            <div className={styles.navbarContentWrapper}>
                <Container fluid className={styles.navbarContainer}>
                    <Navbar.Toggle
                        aria-controls="navbar-nav"
                        onClick={() => setExpanded(!expanded)}
                    />
                    {/* Center logo */}
                    {/* Navbar Brand with motion opacity */}
                    {isHome && (
                        <motion.div style={{ opacity: navbarLogoOpacity }}><Navbar.Brand href="/" className={styles.navbarBrandCentered}>
                            <Image src="/logos/logo-crema.svg" alt="MyRestaurant logo" width={130} height={100} />
                        </Navbar.Brand></motion.div>
                    )}
                    {!isHome && (
                        <Navbar.Brand href="/" className={styles.navbarBrandCentered}>
                            <Image src="/logos/logo-crema.svg" alt="MyRestaurant logo" width={130} height={100} />
                        </Navbar.Brand>
                    )}
                    <Navbar.Collapse id="navbar-nav">
                        <div className={styles.navContent}>
                            {/* Left side links */}
                            <Nav className={`${styles.navSide} ${styles.left}`}>
                                <Nav.Link as={Link} href="/menu-page">MENU</Nav.Link>
                                {/* <Nav.Link as={Link} href="/menu">CHI SIAMO</Nav.Link> */}
                                <Nav.Link as={Link} href="/staffAndPremises">LO STAFF E IL LOCALE</Nav.Link>
                                <Nav.Link as={Link} href="/blog/1">DIARIO DI BORDO</Nav.Link>
                                <Nav.Link as={Link} href="/Experiences">ESPERIENZE</Nav.Link>
                            </Nav>

                            {/* Right side links */}
                            <Nav className={`${styles.navSide} ${styles.right}`}>


                                <Nav.Link as={Link} href="/OurStory">LA NOSTRA STORIA</Nav.Link>
                                <Nav.Link as={Link} href="/WorkWithUs">LAVORA CON NOI</Nav.Link>
                                <Nav.Link as={Link} href="/#find-us">COME RAGGIUNGERCI</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
                {/* Wavy pattern here */}
                <div className={styles.waveWrapper}>
                    <WaveSeparator />
                </div>
            </div>
        </Navbar>
    );
}