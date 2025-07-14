import { Col, Container, Row } from 'react-bootstrap';
import style from './staff-section.module.css';
import Image from 'next/image';

export function StaffSection() {
  return (
    <Container className={style.mainContainer}>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0 px-md-5">
            <Image
              src="/staff-collage.png"
              alt="staff-img"
              layout="responsive"
              width={600}
              height={450}
              priority
              
            />
        </Col>
        <Col md={6} className={style.textContainer}>
          <h1>IL LOCALE E LO STAFF</h1>
          <p>
            Servire un esperienza differenziante parte anche dall’offrire un locale e un’accoglienza unica. Un ambiente esclusivo ed elegante ma allo stesso tempo
            avvolgente e profumato come il legno dei boschi della valle
          </p>
        </Col>
      </Row>
    </Container>
  );
}