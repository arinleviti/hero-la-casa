'use client';

/**
 * Hero Burger — pagina "Il Compleanno"
 * ------------------------------------
 * Racconto + regolamento del contest annuale delle buste.
 * Layout in stile "storyPage" (blocchi alternati) + react-bootstrap per
 * Container/Row/Col/Card/Button.
 *
 * COSE DA AGGIORNARE PRIMA DI PUBBLICARE (cerca "PLACEHOLDER"):
 * - PLACEHOLDER.anno           → anno dell'edizione corrente
 * - PLACEHOLDER.dataRiapertura → data esatta di apertura buste a novembre
 * - PLACEHOLDER.notaExtra      → eventuali condizioni aggiuntive (scadenza
 *                                 buste, busta persa/dimenticata, ecc.)
 *
 * REGOLE (confermate):
 * - Esistono DUE tipi di busta segreta, distinti e non intercambiabili:
 *   busta adulti e busta bambini (fino a 13 anni).
 * - Buste distribuite dal 21 settembre al 31 ottobre, una a visita —
 *   ogni adulto ritira una busta adulti, ogni bambino una busta
 *   bambini. Nessun limite di quante se ne possono raccogliere in
 *   totale.
 * - Le buste si aprono SOLO da novembre in poi (non c'è una
 *   "riapertura": il locale resta sempre aperto).
 * - Al tavolo, gli adulti aprono complessivamente 1 busta adulti ogni
 *   2 adulti (arrotondato per difetto). Ogni bambino apre 1 busta
 *   bambini a testa, indipendentemente da quante ne ha raccolte.
 * - Premio principale: weekend per due persone. Premio principale
 *   bambini: ingresso a Gardaland. Più buste raccolte = più
 *   possibilità di vincere.
 *
 * VIDEO INTRO:
 * - Il video accanto al paragrafo introduttivo è in autoplay/muted/loop,
 *   affiancato a destra su desktop (Col md={5}) e impilato sotto al
 *   paragrafo su mobile (ordine naturale nel DOM, Col a piena larghezza
 *   sotto il breakpoint md). Nessuna cornice: solo angoli leggermente
 *   smussati via .heroVideo in page.module.css.
 */

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import styles from './page.module.css';

const PLACEHOLDER = {
  anno: '2026',
  dataRiapertura: 'inizio novembre',
  notaExtra:
    'Esempio: un tavolo di 4 adulti e 2 bambini apre 2 buste segrete adulti (4 ÷ 2) e 2 buste segrete bambini, una a testa. Le due tipologie di busta sono separate: non si possono scambiare tra loro.',
};

// Smoothly scrolls to the calculator section instead of doing a real
// navigation — this is an in-page jump, not a link to another page.
function scrollToCalculator(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document
    .getElementById('calcolatore-buste')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function CompleannoPage() {
  return (
    <div className={styles.contestPage}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>
          21&nbsp;Settembre&nbsp;→&nbsp;31&nbsp;Ottobre
        </p>
        <h1 className={styles.title}>
          <span className={styles.titleEmojis}>🎂 🎉</span>
          <br />
          Buon compleanno hero
      
        </h1>
        <p className={styles.subtitle}>
          Dal 21 settembre al 31 ottobre, a ogni visita ritiri una busta
          segreta — una versione per gli adulti, una diversa per i
          bambini fino a 13 anni. Quello che c&apos;è dentro lo scopriamo
          tutti insieme da novembre.
        </p>
        <a href="#calcolatore-buste" onClick={scrollToCalculator} className={styles.jumpLink}>
          Salta subito al calcolatore buste ↓
        </a>
      </div>

      <Container fluid="lg">
        <Row className={`${styles.introRow} g-4 align-items-center`}>
          <Col md={7}>
            <p className={styles.introText}>
              Ogni anno, per il nostro compleanno, dal 21 settembre al 31
              ottobre chi viene a cena da Hero Burger può ritirare una busta
              segreta — una a visita, per ogni adulto e per ogni bambino
              fino a 13 anni. <strong>Attenzione: sono due buste diverse — ognuna vince qualcosa, con premi dedicati per adulti e bambini.</strong> Gli adulti
              ritirano la busta segreta adulti, i bambini la busta segreta
              bambini — non sono intercambiabili. Non c&apos;è un limite: più
              buste raccogliete, più vincerete. Il
              primo premio è <strong>un weekend per due persone al Colonia Resort</strong> a Vittorio Veneto,  <strong>nove gift card</strong> in palio, oltre a tanti altri
              premi. Per i più piccoli, il traguardo più ambito è
              l&apos;ingresso a Gardaland 🦕🎡🏰🎢. Le buste restano segrete —
              nessuno può sbirciare prima del tempo. Si aprono tutte a
              partire da novembre.
            </p>
          </Col>
          <Col md={5}>
            <IntroVideo />
          </Col>
        </Row>

        <Row className={`${styles.block} g-4 align-items-center`}>
          <Col md={6} className={styles.graphicWrapper}>
            <Envelope />
          </Col>
          <Col md={6} className={styles.textWrapper}>
            <span className={styles.actLabel}>Atto I</span>
            <h2 className={styles.actTitle}>La raccolta</h2>
            <p className={styles.actText}>
              Dal 21 settembre al 31 ottobre, a ogni visita si ritira una
              busta segreta — quella adulti o quella bambini a seconda di
              chi la ritira. Niente da fare se
              non conservarla: non si apre al tavolo, non si apre a casa,
              non si scuote per indovinare cosa c&apos;è dentro (va bene,
              potete provarci).
            </p>
          </Col>
        </Row>

        <Row
          className={`${styles.block} ${styles.reverse} g-4 align-items-center`}
        >
          <Col md={6} className={styles.graphicWrapper}>
            <div className={styles.envelopeStack}>
              <Envelope open />
              <ScatteredEnvelopes />
            </div>
          </Col>
          <Col md={6} className={styles.textWrapper}>
            <span className={styles.actLabel}>Atto II</span>
            <h2 className={styles.actTitle}>Novembre</h2>
            <p className={styles.actText}>
              Da novembre si torna con le buste raccolte. Alla fine del pasto, alla cassa gli
              adulti aprono in tutto 1 busta segreta adulti ogni 2 adulti
              presenti; ogni bambino, invece, apre la sua busta segreta
              bambini — una a testa. Le due tipologie restano separate:
              le buste bambini non contano per il conteggio degli adulti,
              e viceversa. In palio il weekend per due persone e, per i
              più piccoli, l&apos;ingresso a Gardaland.
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
                    Esistono due tipi di busta segreta, distinti e non
                    intercambiabili: busta adulti e busta bambini (fino a
                    13 anni).
                  </li>
                  <li>
                    Dal 21 settembre al 31 ottobre {PLACEHOLDER.anno}, a
                    ogni visita si ritira una busta segreta — gli adulti
                    la busta adulti, i bambini la busta bambini.
                  </li>
                  <li>
                    Non c&apos;è un limite: più buste si raccolgono, più
                    aumentano le possibilità di vincere. Il primo premio è
                    un weekend per due persone, più tanti altri premi in
                    palio — per i bambini, il premio più bello è
                    l&apos;ingresso a Gardaland.
                  </li>
                  <li>
                    Le buste restano segrete fino a novembre — niente
                    anticipazioni.
                  </li>
                  <li>
                    Al tavolo, gli adulti aprono 1 busta adulti ogni 2
                    adulti presenti (es. 4 adulti → 2 buste); ogni bambino
                    apre 1 busta bambini tutta sua.
                  </li>
                </ol>
                <p className={styles.rulesNote}>{PLACEHOLDER.notaExtra}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row id="calcolatore-buste" className={styles.calculatorAnchor}>
          <Col>
            <EnvelopeCalculator />
          </Col>
        </Row>

        <Row>
          <Col>
            <div className={styles.closing}>
              <p className={styles.closingText}>
                Buon compleanno a noi! Vi aspettiamo dal 21 settembre per il ritiro
                delle buste, e da novembre per scoprire cosa c&apos;è dentro.
              </p>
              <p className={styles.finePrint}>
                Hero Burger · Predazzo — apertura buste da{' '}
                {PLACEHOLDER.dataRiapertura}
              </p>
              <Button
                as="a"
                href="/"
                variant="outline-success"
                className={styles.backButton}
              >
                ← Torna alla home
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Video introduttivo — autoplay muto, clic per attivare l'audio     */
/* ---------------------------------------------------------------- */

function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    if (!nextMuted) {
      // Alcuni browser richiedono una nuova chiamata a play() dopo aver
      // tolto il muto in risposta a un'interazione utente.
      video.play().catch(() => {});
    }
    setIsMuted(nextMuted);
  };

  return (
    <div className={styles.heroVideoWrapper}>
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dvr9t29vj/video/upload/v1788528276/202609041517-2_vyogmk.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={styles.heroVideo}
        onClick={toggleSound}
      />
      <button
        type="button"
        className={styles.heroVideoSoundToggle}
        onClick={toggleSound}
        aria-label={isMuted ? 'Attiva audio video' : 'Disattiva audio video'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Calcolatore buste apribili                                        */
/* ---------------------------------------------------------------- */

function EnvelopeCalculator() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const adultEnvelopes = Math.floor(adults / 2);
  const childEnvelopes = children;
  const totalEnvelopes = adultEnvelopes + childEnvelopes;

  const handleAdultsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setAdults(Number.isNaN(value) ? 0 : Math.min(Math.max(value, 0), 50));
  };

  const handleChildrenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setChildren(Number.isNaN(value) ? 0 : Math.min(Math.max(value, 0), 50));
  };

  return (
    <Card className={styles.calculatorCard}>
      <Card.Body>
        <h2 className={styles.calculatorTitle}>
          Quante buste potrete aprire?
        </h2>
        <p className={styles.calculatorSubnote}>
          ⚠️ Vale solo da novembre in poi — è il momento in cui le buste
          raccolte si possono finalmente aprire. Ricorda: busta adulti e
          busta bambini sono due tipi diversi e si contano separatamente.
        </p>

        <div className={styles.calculatorInputs}>
          <div className={styles.calculatorField}>
            <label className={styles.calculatorLabel} htmlFor="adultsInput">
              Adulti al tavolo
            </label>
            <Form.Control
              id="adultsInput"
              type="number"
              min={0}
              max={50}
              value={adults}
              onChange={handleAdultsChange}
              className={styles.calculatorInput}
            />
          </div>
          <div className={styles.calculatorField}>
            <label
              className={styles.calculatorLabel}
              htmlFor="childrenInput"
            >
              Bambini (fino a 13 anni)
            </label>
            <Form.Control
              id="childrenInput"
              type="number"
              min={0}
              max={50}
              value={children}
              onChange={handleChildrenChange}
              className={styles.calculatorInput}
            />
          </div>
        </div>

        <div className={styles.calculatorResult}>
          <div className={styles.calculatorResultNumber}>
            {totalEnvelopes}
          </div>
          <div className={styles.calculatorResultLabel}>
            {totalEnvelopes === 1 ? 'busta apribile' : 'buste apribili'} da
            novembre
          </div>
          <div className={styles.calculatorBreakdown}>
            {adultEnvelopes} {adultEnvelopes === 1 ? 'busta segreta adulti' : 'buste segrete adulti'}{' '}
            · {childEnvelopes}{' '}
            {childEnvelopes === 1 ? 'busta segreta bambini' : 'buste segrete bambini'}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

/* ---------------------------------------------------------------- */
/* Envelope chiusa/aperta                                            */
/* ---------------------------------------------------------------- */

function Envelope({ open = false }: { open?: boolean }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.envelope}>
      {open ? (
        <>
          <div className={styles.mysteryMark}>
            <span className={styles.mysteryText}>SORPRESA!</span>
            <span className={styles.mysteryEmoji}>🤯</span>
          </div>
          <div className={styles.flapOpen} />
          <div className={styles.perforation} />
        </>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/envelopes/envelope-busta-hero.webp"
            alt="Busta segreta Hero Burger"
            className={styles.envelopeImage}
            draggable={false}
          />

          {clicked ? (
            <div className={styles.envelopeLabel}>
              Spiacente, si apre solo da novembre 😏
            </div>
          ) : (
            <div
              className={styles.envelopeLabel}
              onClick={() => setClicked(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setClicked(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              Per: chi non vede l&apos;ora di sbirciare (clicca qui)
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Bustine sparse che volano via al tap                              */
/* ---------------------------------------------------------------- */

type ScatterSpot = {
  id: number;
  top: string; // % relative to the envelope box
  left: string; // %
  rotate: number;
  width: string; // % of envelope width
};

// Fixed layout so it doesn't jump around on every re-render.
const SCATTER_LAYOUT: ScatterSpot[] = [
  { id: 1, top: '-30%', left: '-4%', rotate: -14, width: '54%' },
  { id: 2, top: '-24%', left: '54%', rotate: 10, width: '48%' },
  { id: 3, top: '14%', left: '24%', rotate: -5, width: '56%' },
  { id: 4, top: '46%', left: '62%', rotate: 16, width: '46%' },
  { id: 5, top: '52%', left: '-8%', rotate: 7, width: '44%' },
];

// Random "fly away" vector per envelope, memoized so it stays stable
// once the exit animation starts.
function useFlyVectors(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 260 + Math.random() * 160;
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance - 100, // bias upward, feels lighter
          spin: (Math.random() > 0.5 ? 1 : -1) * (120 + Math.random() * 120),
        };
      }),
    [count]
  );
}

// Random idle "float" motion per envelope — different duration/delay/
// direction so they don't all bob in perfect unison.
function useFloatSettings(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }, () => ({
        duration: 2.6 + Math.random() * 1.4, // 2.6s–4s
        delay: Math.random() * 1.2,
        yDrift: 6 + Math.random() * 5, // 6–11px bob
        rotateDrift: 2 + Math.random() * 2.5, // 2–4.5deg wiggle
      })),
    [count]
  );
}

function ScatteredEnvelopes() {
  const [remainingIds, setRemainingIds] = useState(
    SCATTER_LAYOUT.map((s) => s.id)
  );
  const flyVectors = useFlyVectors(SCATTER_LAYOUT.length);
  const floatSettings = useFloatSettings(SCATTER_LAYOUT.length);

  // Tapping ANY envelope sends the whole flock flying at once.
  const handleTap = () => {
    setRemainingIds([]);
  };

  return (
    <div className={styles.scatterLayer}>
      <AnimatePresence>
        {SCATTER_LAYOUT.filter((s) => remainingIds.includes(s.id)).map(
          (spot, i) => (
            <motion.button
              key={spot.id}
              type="button"
              aria-label="Busta misteriosa"
              className={styles.miniEnvelope}
              style={{ top: spot.top, left: spot.left, width: spot.width }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                x: flyVectors[i].x,
                y: flyVectors[i].y,
                rotate: spot.rotate + flyVectors[i].spin,
                scale: 0.5,
                transition: { duration: 0.55, ease: 'easeIn' },
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleTap}
            >
              {/* idle float — separate layer so it doesn't fight the
                  entrance/exit animation on the parent button */}
              <motion.div
                animate={{
                  y: [0, -floatSettings[i].yDrift, 0],
                  rotate: [
                    spot.rotate,
                    spot.rotate + floatSettings[i].rotateDrift,
                    spot.rotate - floatSettings[i].rotateDrift,
                    spot.rotate,
                  ],
                }}
                transition={{
                  duration: floatSettings[i].duration,
                  delay: floatSettings[i].delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/envelopes/envelope-busta-hero.webp"
                  alt=""
                  draggable={false}
                />
              </motion.div>
            </motion.button>
          )
        )}
      </AnimatePresence>
    </div>
  );
}