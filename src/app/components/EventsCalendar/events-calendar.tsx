'use client';

import { useEffect, useMemo, useRef, useState, ReactNode } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './events-calendar.module.css';
import {
  restaurantEvents,
  burgerOfTheMonthEvents,
  CalendarEntry,
  RestaurantEvent,
} from '../../Services/eventsService';
import { burgers, Burger } from '../../Services/menuItems';
import BootstrapBurgerModal from '../SwiperObject/SwiperModal/swiper-modal';

interface MonthColumn {
  year: number;
  month: number; // 0-indexed, matches Date.getMonth()
  label: string;
  emoji: string;
  entries: CalendarEntry[];
}

// One emoji per calendar month (index 0 = Gennaio ... 11 = Dicembre).
const MONTH_EMOJIS = [
  '❄️', // Gennaio
  '💘', // Febbraio
  '🌱', // Marzo
  '🌷', // Aprile
  '🌸', // Maggio
  '☀️', // Giugno
  '🍹', // Luglio
  '🏖️', // Agosto
  '🍂', // Settembre
  '🎃', // Ottobre
  '🍁', // Novembre
  '🎄', // Dicembre
];

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
      emoji: MONTH_EMOJIS[d.getMonth()],
      entries: [],
    });
  }

  return columns;
}

function entrySortDate(entry: CalendarEntry): string {
  return entry.data.from;
}

// A link starting with '/' is an internal page — navigate with next/link,
// same tab. Anything else is treated as external and opens in a new tab.
function isInternalLink(href: string): boolean {
  return href.startsWith('/');
}

interface SmartLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

function SmartLink({ href, className, children }: SmartLinkProps) {
  if (isInternalLink(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

interface EventVideoModalProps {
  event: RestaurantEvent | null;
  onClose: () => void;
}

// Plays the hosted clip (e.g. Cloudinary URL) directly instead of embedding
// Instagram's script, which avoids their embed JS (and its console
// violations) entirely — same pattern as VideoSection.
function EventVideoModal({ event, onClose }: EventVideoModalProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!event?.videoLink || !video) return;

    // Setting `muted` via JSX isn't always applied in time for the browser's
    // autoplay check, so we set it directly and trigger playback ourselves.
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was blocked by the browser; the visible controls let the
        // visitor start playback manually.
      });
    }
  }, [event?.videoLink]);

  if (!event || !event.videoLink) return null;

  const toggleMute = () => setIsMuted((prev) => !prev);

  return (
    <Modal
      show={true}
      onHide={onClose}
      centered
      fullscreen="sm-down"
      dialogClassName={styles.videoModalDialog}
      contentClassName={styles.videoModalContent}
    >
      <Modal.Header closeButton className={styles.videoModalHeader}>
        <Modal.Title className={styles.videoModalTitle}>{event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.videoModalBody}>
        <div className={styles.videoWrapper}>
          <video
            src={event.videoLink}
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            controls
            playsInline
            className={styles.videoElement}
            title={event.title}
          />
          <button
            type="button"
            className={styles.soundToggleButton}
            onClick={toggleMute}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="22" height="22">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="22" height="22">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            )}
          </button>
        </div>
        <SmartLink href={event.link} className={styles.videoInfoLink}>
          Clicca qui per info
        </SmartLink>
      </Modal.Body>
    </Modal>
  );
}

export default function EventsCalendar() {
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);
  const [selectedVideoEvent, setSelectedVideoEvent] = useState<RestaurantEvent | null>(null);

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
      placeInColumn({ kind: 'event', data: event }, event.from);
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

  const formatEventDate = (event: RestaurantEvent) =>
    event.from === event.to
      ? formatDayMonth(event.from)
      : `${formatDayMonth(event.from)} - ${formatDayMonth(event.to)}`;

  const renderEntry = (entry: CalendarEntry) => {
    if (entry.kind === 'event') {
      const { id, icon, title, link, videoLink } = entry.data;

      // Events with a videoLink open an in-page video modal instead of
      // navigating away.
      if (videoLink) {
        return (
          <button
            key={`event-${id}`}
            type="button"
            onClick={() => setSelectedVideoEvent(entry.data)}
            className={styles.entryRow}
          >
            <Image
              src={icon}
              alt=""
              width={56}
              height={56}
              className={styles.entryIcon}
            />
            <div className={styles.entryText}>
              <span className={styles.entryTitle}>{title}</span>
              <span className={styles.entryDate}>{formatEventDate(entry.data)}</span>
            </div>
          </button>
        );
      }

      return (
        <SmartLink key={`event-${id}`} href={link} className={styles.entryRow}>
          <Image
            src={icon}
            alt=""
            width={56}
            height={56}
            className={styles.entryIcon}
          />
          <div className={styles.entryText}>
            <span className={styles.entryTitle}>{title}</span>
            <span className={styles.entryDate}>{formatEventDate(entry.data)}</span>
          </div>
        </SmartLink>
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
          width={56}
          height={56}
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
              <div className={styles.monthHeader}>
                <span className={styles.monthEmoji}>{column.emoji}</span> {column.label}
              </div>
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

      <EventVideoModal
        event={selectedVideoEvent}
        onClose={() => setSelectedVideoEvent(null)}
      />
    </Container>
  );
}