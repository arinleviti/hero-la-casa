'use client';

import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';
import Image from 'next/image';
import WaveSeparator from '../../Services/assetsService'
import { useScroll, useTransform, motion } from 'framer-motion';

export default function NavbarBasic() {
    const [expanded, setExpanded] = useState(false);

    const { scrollYProgress } = useScroll();

    // Navbar logo opacity: 0 at top, 1 after 0.2 scroll
    const navbarLogoOpacity = useTransform(scrollYProgress, [0,0.19, 0.2], [0,0, 1]);


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
                    <motion.div style={{ opacity: navbarLogoOpacity }}><Navbar.Brand href="/" className={styles.navbarBrandCentered}>
                        <Image src="/logos/logo-crema.svg" alt="MyRestaurant logo" width={130} height={100} />
                    </Navbar.Brand></motion.div>

                    <Navbar.Collapse id="navbar-nav">
                        <div className={styles.navContent}>
                            {/* Left side links */}
                            <Nav className={styles.navSide}>
                                <Nav.Link as={Link} href="/">MENU</Nav.Link>
                                <Nav.Link as={Link} href="/menu">CHI SIAMO</Nav.Link>
                            </Nav>

                            {/* Right side links */}
                            <Nav className={styles.navSide}>
                                <Nav.Link as={Link} href="/about">DIARIO</Nav.Link>
                                <Nav.Link as={Link} href="/contact">LO STAFF</Nav.Link>
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