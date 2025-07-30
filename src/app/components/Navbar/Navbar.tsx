
'use client';

import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import WaveSeparator from '../../Services/assetsService';
import { useScroll, useTransform, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function NavbarBasic() {
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const { scrollY } = useScroll();
    const desktopLogoOpacity = useTransform(scrollY, [0, 280, 300], [0, 0, 1]);
    const mobileLogoOpacity = useTransform(scrollY, [0, 240, 250], [0, 0, 1]);

    const pathname = usePathname();
    const isHome = pathname === '/';
    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const navbarLogoOpacity = isMobile ? mobileLogoOpacity : desktopLogoOpacity
    return (

        <Navbar
            expand="lg"
            expanded={expanded}
            className={styles.navbar}
            onToggle={(isExpanded) => setExpanded(isExpanded)}
        >
            <div className={styles.navbarContentWrapper}>
                <Container fluid className={styles.navbarContainer}>

                    {/* === Centered Logo === */}
                    <Navbar.Brand href="/" className={styles.navbarBrandCenteredWrapper}>
                        {isHome ? (
                            <motion.div style={{ opacity: navbarLogoOpacity }}>
                                <Image
                                id="navbar-logo"
                                    src="/logos/logo-crema.svg"
                                    alt="Hero Burger logo"
                                    width={130}
                                    height={100}
                                />
                            </motion.div>
                        ) : (
                            <Image
                            
                                src="/logos/logo-crema.svg"
                                alt="Hero Burger logo"
                                width={130}
                                height={100}
                            />
                        )}
                    </Navbar.Brand>

                    {/* === Burger icon to the right === */}
                    <Navbar.Toggle
                        aria-controls="navbar-nav"
                        className={styles.navbarToggle}
                        onClick={() => setExpanded(!expanded)}
                    />

                    {/* === Collapsible Menu === */}
                    <Navbar.Collapse
                        id="navbar-nav"
                        className={expanded ? styles.expandedCollapse : ''}
                    >
                        <div className={styles.navContent}>
                            {/* Left links */}
                            <Nav className={`${styles.navSide} ${styles.left}`}>
                                <Nav.Link as={Link} href="/menu-page" onClick={() => setExpanded(false)}>MENU</Nav.Link>
                                <Nav.Link as={Link} href="/staffAndPremises" onClick={() => setExpanded(false)}>LO STAFF E IL LOCALE</Nav.Link>
                                <Nav.Link as={Link} href="/blog/1" onClick={() => setExpanded(false)}>DIARIO DI BORDO</Nav.Link>
                                <Nav.Link as={Link} href="/Experiences" onClick={() => setExpanded(false)}>ESPERIENZE</Nav.Link>
                            </Nav>

                            {/* Right links */}
                            <Nav className={`${styles.navSide} ${styles.right}`}>
                                <Nav.Link as={Link} href="/OurStory" onClick={() => setExpanded(false)}>LA NOSTRA STORIA</Nav.Link>
                                <Nav.Link as={Link} href="/WorkWithUs" onClick={() => setExpanded(false)}>LAVORA CON NOI</Nav.Link>
                                <Nav.Link as={Link} href="/#find-us" onClick={() => setExpanded(false)}>COME RAGGIUNGERCI</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>

                {/* Wave separator */}
                <div className={styles.waveWrapper}>
                    <WaveSeparator />
                </div>
            </div>
        </Navbar>
    );
}
