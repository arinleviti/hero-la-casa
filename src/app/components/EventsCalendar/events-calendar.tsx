'use client';

import { useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './events-calendar.module.css';
import {
  restaurantEvents,
  burgerOfTheMonthEvents,
  CalendarEntry,
} from '../../Services/eventsService';
import { burgers, Burger } from '../../Services/menuItems';
import BootstrapBurgerModal from '../SwiperObject/SwiperModal/swiper-modal';

interface MonthColumn {
  year: number;
  month: number; // 0-indexed, matches Date.getMonth()
  label: string;
  entries: CalendarEntry[];
}

// Builds [thisMonth, nextMonth, monthAfter] as empty buckets to fill.
function buildEmptyMonthColumns(): MonthColumn[] {
  const now = new Date();
  const columns: MonthColumn[] = [];

  for (let i = 0; i < 3; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const rawLabel = d.toLocaleDateString('it-IT', { month: 'long' });
    columns.push({
      year: d.getFullYear(),
      month: d.getMonth(),
      label: rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1),
      entries: [],
    });
  }

  return columns;
}

function entrySortDate(entry: CalendarEntry): string {
  return entry.kind === 'event' ? entry.data.date : entry.data.from;
}

export default function EventsCalendar() {
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

  const monthColumns = useMemo(() => {
    const columns = buildEmptyMonthColumns();

    const placeInColumn = (entry: CalendarEntry, isoDate: string) => {
      const d = new Date(isoDate);
      const column = columns.find(
        (c) => c.year === d.getFullYear() && c.month === d.getMonth()
      );
      if (column) {
        column.entries.push(entry);
      }
    };

    restaurantEvents.forEach((event) => {
      placeInColumn({ kind: 'event', data: event }, event.date);
    });

    burgerOfTheMonthEvents.forEach((bom) => {
      placeInColumn({ kind: 'burgerOfTheMonth', data: bom }, bom.from);
    });

    columns.forEach((c) =>
      c.entries.sort((a, b) => entrySortDate(a).localeCompare(entrySortDate(b)))
    );

    return columns;
  }, []);

  const formatDayMonth = (isoDate: string) =>
    new Date(isoDate).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
    });

  const renderEntry = (entry: CalendarEntry) => {
    if (entry.kind === 'event') {
      const { id, icon, title, date, link } = entry.data;
      return (
        <a
          key={`event-${id}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.entryRow}
        >
          <Image
            src={`/events-icons/${icon}`}
            alt=""
            width={28}
            height={28}
            className={styles.entryIcon}
          />
          <div className={styles.entryText}>
            <span className={styles.entryTitle}>{title}</span>
            <span className={styles.entryDate}>{formatDayMonth(date)}</span>
          </div>
        </a>
      );
    }

    const { id, burgerId, from, to } = entry.data;
    const burger = burgers.find((b) => b.id === burgerId);
    if (!burger) return null;

    return (
      <button
        key={`bom-${id}`}
        type="button"
        onClick={() => setSelectedBurger(burger)}
        className={`${styles.entryRow} ${styles.burgerOfTheMonthRow}`}
      >
        <Image
          src={burger.imageSmallUrl || '/images/placeholder.png'}
          alt=""
          width={28}
          height={28}
          className={styles.entryIcon}
        />
        <div className={styles.entryText}>
          <span className={styles.entryTitle}>Burger del mese: {burger.name}</span>
          <span className={styles.entryDate}>
            {formatDayMonth(from)} - {formatDayMonth(to)}
          </span>
        </div>
      </button>
    );
  };

  return (
    <Container className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h2>PROSSIMI EVENTI</h2>
      </div>
      <Row>
        {monthColumns.map((column) => (
          <Col
            key={`${column.year}-${column.month}`}
            xs={12}
            md={4}
            className={styles.col}
          >
            <div className={styles.monthCard}>
              <div className={styles.monthHeader}>{column.label}</div>
              {column.entries.length === 0 ? (
                <p className={styles.emptyState}>Nessun evento in programma</p>
              ) : (
                column.entries.map((entry) => renderEntry(entry))
              )}
            </div>
          </Col>
        ))}
      </Row>

      <BootstrapBurgerModal
        burger={selectedBurger}
        onClose={() => setSelectedBurger(null)}
      />
    </Container>
  );
}