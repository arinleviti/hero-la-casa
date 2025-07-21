import styles from './page.module.css';
import { staffCards } from '../Services/staffPremises';
import { Container, Row, Col, Button } from 'react-bootstrap';
import StaffCard from './Components/StaffCard/staff-card'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function StaffPremises() {
  return (
    <>
      <Container>
        <div className={styles.titleContainer}>
          <h1>DIETRO LE QUINTE E AL CENTRO DELLA SCENA: LO STAFF</h1>
        </div>
        <Row>
          {staffCards.map((staff, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className={styles.col}>
              <StaffCard
                imageUrl={staff.imageUrl}
                name={staff.name}
                description={staff.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <div className={styles.premisesContainer}>
        <div className={styles.premisesBackground} />
        <Container>
          <Row className={styles.premisesWrapper}>
            {/* IMAGE COLUMN */}
            <Col md={6} className={styles.imageWrapper}>
              <div className={styles.ratioBox}>
                <Image
                  src="/logo-nero.png"
                  alt="logo nero"
                  fill                /* ← key: let Image fill .ratioBox */
                  className={styles.image}
                  priority
                />
              </div>
            </Col>

            {/* TEXT COLUMN */}
            <Col md={6} className={styles.textWrapper}>
              <div className={styles.titleWrapper}><h1>IL NOSTRO NUOVO LOCALE</h1></div>
              <p className={styles.text}>
                Hero – La casa del burger si trova ora in una <strong>nuova sede</strong> nel centro di Predazzo. Il ristorante, grazie al grande successo ottenuto, si è trasferito in uno spazio più ampio, mantenendo però intatti l’arredamento in legno tipico e l’atmosfera calda e familiare che lo hanno reso celebre.
Che aspetti? <strong>Prenota un tavolo e assapora tutte le specialità!</strong>
              </p>
              <Button className={styles.reserveButton}>
                    RISERVA UN TAVOLO
                  </Button>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>

  )
}