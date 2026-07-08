'use client';

/**
 * Hero Burger — pagina "Il Compleanno"
 * ------------------------------------
 * Racconto + regolamento del contest annuale delle buste.
 * Layout in stile "storyPage" (blocchi alternati) + react-bootstrap per
 * Container/Row/Col/Card/Button. Niente Framer Motion, niente librerie extra.
 *
 * COSE DA AGGIORNARE PRIMA DI PUBBLICARE (cerca "PLACEHOLDER"):
 * - PLACEHOLDER.anno           → anno dell'edizione corrente
 * - PLACEHOLDER.dataRiapertura → data esatta di riapertura a novembre
 * - PLACEHOLDER.notaExtra      → eventuali condizioni aggiuntive (scadenza
 *                                 buste, busta persa/dimenticata, ecc.)
 */

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './page.module.css';
import { useState } from 'react';

const PLACEHOLDER = {
  anno: '2026',
  dataRiapertura: 'data da confermare',
  notaExtra:
    'Eventuali condizioni extra: scadenza delle buste, cosa fare se si perde o dimentica la busta, validità della sorpresa, ecc.',
};


export default function CompleannoPage() {
  

  return (
    <div className={styles.contestPage}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Settembre&nbsp;→&nbsp;Novembre</p>
        <h1 className={styles.title}>
          🎂 🎉
          <br />
          Il compleanno
          <br />
          di Hero&nbsp;Burger
        </h1>
        <p className={styles.subtitle}>
          Ogni settembre regaliamo una busta sigillata a ogni cliente.
          Quello che c&apos;è dentro, lo scopriamo insieme a novembre.
        </p>
      </div>

      <Container fluid="lg">
        <p className={styles.introText}>
          Ogni anno, per il nostro compleanno, chi viene a cena da Hero
          Burger durante il mese di settembre riceve una busta sigillata.
          Dentro c&apos;è una sorpresa — ma nessuno può aprirla subito.
          Bisogna aspettare la riapertura di novembre. È il nostro modo di
          allungare la festa oltre la serata, e di darvi una buona scusa per
          tornare.
        </p>

        <Row className={`${styles.block} g-4 align-items-center`}>
          <Col md={6} className={styles.graphicWrapper}>
            <Envelope />
          </Col>
          <Col md={6} className={styles.textWrapper}>
            <span className={styles.actLabel}>Atto I</span>
            <h2 className={styles.actTitle}>Settembre</h2>
            <p className={styles.actText}>
              Una busta a ogni cliente. Niente da fare se non conservarla:
              non si apre al tavolo, non si apre a casa, non si scuote per
              indovinare cosa c&apos;è dentro (va bene, potete provarci).
            </p>
          </Col>
        </Row>

        <Row
          className={`${styles.block} ${styles.reverse} g-4 align-items-center`}
        >
          <Col md={6} className={styles.graphicWrapper}>
            <Envelope open />
          </Col>
          <Col md={6} className={styles.textWrapper}>
            <span className={styles.actLabel}>Atto II</span>
            <h2 className={styles.actTitle}>Novembre</h2>
            <p className={styles.actText}>
              Quando riapriamo, si torna con la propria busta. Per ogni
              tavolo, però, se ne può aprire solo una — se siete in
              compagnia, è il momento di decidere insieme quale tentare.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className={styles.rulesCard}>
              <Card.Body>
                <h2 className={styles.rulesTitle}>
                  Il regolamento, in breve
                </h2>
                <ol className={styles.rulesList}>
                  <li>
                    Una busta a cliente, consegnata durante tutto il mese
                    di settembre {PLACEHOLDER.anno}.
                  </li>
                  <li>
                    Le buste restano sigillate fino alla riapertura di
                    novembre — niente anticipazioni.
                  </li>
                  <li>
                    Al tavolo si può aprire una sola busta, anche se i
                    commensali ne hanno più di una.
                  </li>
                </ol>
                <p className={styles.rulesNote}>{PLACEHOLDER.notaExtra}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className={styles.closing}>
              <p className={styles.closingText}>
                Buon compleanno a noi. Vi aspettiamo a settembre con le
                buste, e a novembre per scoprire cosa c&apos;è dentro.
              </p>
              <p className={styles.finePrint}>
                Hero Burger · Predazzo — riapertura{' '}
                {PLACEHOLDER.dataRiapertura}
              </p>
              <Button
                as="a"
                href="/"
                variant="outline-success"
                className={styles.backButton}
              >
                ← Torna al menù
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Envelope({ open = false }: { open?: boolean }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.envelope}>
      {open ? (
        <>
          <span className={styles.mysteryMark}>SORPRESA!</span>
          <div className={styles.flapOpen} />
        </>
      ) : (
        <>
          <div className={styles.flap} />
          
          <div className={styles.seal}>HB</div>
          <div className={styles.stamp}>
        Apertura
        <br />
        Dicembre
      </div>
       {clicked ? (
        <div className={styles.envelopeLabel}>Spiacente, si apre solo a novembre 😏</div>
      ) : (
        <div
          className={styles.envelopeLabel}
          onClick={() => setClicked(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setClicked(true);
          }}
          style={{ cursor: open ? 'default' : 'pointer' }}
        >
          Per: un cliente curioso (clicca se vuoi aprire)
        </div>
      )}
        </>
      )}
 
      <div className={styles.perforation} />
      
    </div>
  );
}