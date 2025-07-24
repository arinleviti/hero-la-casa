'use client';
import styles from './opening-hours.module.css';
import {openingHours} from '../../Services/assetsService'

export default function OpeningHours() {
  return (
    <div className={styles.openingHours}>
      <h2 className={styles.heading}>ORARI DI APERTURA</h2>
      <div className={styles.hoursWrapper}>
        {openingHours.map(({ day, hours }) => (
          <span key={day} className={styles.hourItem}>
            <strong>{day}:</strong> {hours}
          </span>
        ))}
      </div>
    </div>
  );
}
