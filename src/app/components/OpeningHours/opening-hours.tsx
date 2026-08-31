import styles from './opening-hours.module.css';
import { getOpeningHours } from '../../Services/assetsService';
import { Container, Row, Col } from 'react-bootstrap';

export default function OpeningHours() {
  const { entries, lunchMenuNote, closureMessage } = getOpeningHours();

  return (
    <Container className={styles.openingHours}>
      <h2 className={styles.heading}>ORARI DI APERTURA</h2>
      {closureMessage ? (
        <p className={styles.closureNote}>{closureMessage}</p>
      ) : (
        <>
          <Row className={styles.hoursWrapper}>
            {entries.map(({ day, hours }) => (
              <Col xs={12} sm={6} md={4} key={day} className={styles.hourItem}>
                <strong>{day}:</strong> {hours}
              </Col>
            ))}
          </Row>
          {lunchMenuNote && (
            <p className={styles.lunchNote}>A pranzo il menu sarà ridotto</p>
          )}
        </>
      )}
    </Container>
  );
}