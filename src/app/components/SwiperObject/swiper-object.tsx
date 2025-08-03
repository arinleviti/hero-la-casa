

import BurgerSwiperClient from './swiper-object-client';
import { Burger } from '../../Services/menuItems';
import { Container,Row,Col } from 'react-bootstrap';
import styles from './swiper-object.module.css'; 
interface Props {
  burgers: Burger[];
}

export default function BurgerSwiper({ burgers }: Props) {
  return (
    <Container fluid className={styles.mySwiperWrapper}>
      <Row className="align-items-center">
        <Col md={4} className="mb-4 mb-md-0 px-md-5">
          <h1>BURGER PER TUTTI I GUSTI</h1>
          <p>
            Preparati freschi ogni giorno, avete una vasta scelta di hamburger di carne, veggie o pesce, accompagnati con patatine non fritte e salse gourmet
          </p>
        </Col>

        {/* Client component renders the other Col */}
        <BurgerSwiperClient burgers={burgers} />
      </Row>
    </Container>
  );
}