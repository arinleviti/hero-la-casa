'use client';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './find-us.module.css';
import dynamic from 'next/dynamic';

// Dynamically import LeafletMap to avoid SSR issues
const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function WhereWeAre() {
  const position: [number, number] = [46.314223, 11.598633]; // Via Minghetti 1, Predazzo

  return (
    <Container className={styles.sectionWrapper}>
      <Row className="align-items-center">

        {/* TEXT COLUMN */}
        <Col md={6} className={styles.text}>
          <h1 className="mb-3">DOVE SIAMO</h1>
          <p>
            Hero Burger ha aperto la sua nuova location in Via Minghetti 1, in una posizione centrale e con parcheggio comodo. Il locale mantiene il suo stile unico, offrendo hamburger di alta qualità in un ambiente moderno e accogliente, ideale per una pausa gustosa nel cuore di Predazzo.
          </p>
        </Col>

        {/* MAP COLUMN */}
        <Col md={6} className="mb-4 mb-md-0">
          <LeafletMap position={position} />
        </Col>      
      </Row>
    </Container>
  );
}

