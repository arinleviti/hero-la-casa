
import Image from 'next/image';
import Link from 'next/link';
import styles from './review-card.module.css';

type TripAdvisorReviewCardProps = {
  avatarURL?: string;
  reviewerName?: string;
  date?: string;
  text: string;
  title: string;
  rating: number;
  tripAdvisorReviewURL?: string;
  tripAdvisorLogoURL?: string;
};

export default function TripAdvisorReviewCard({
  avatarURL,
  reviewerName,
  title,
  date,
  text,
  rating,
  tripAdvisorReviewURL,
  tripAdvisorLogoURL,
}: TripAdvisorReviewCardProps) {
  const fullCircles = Math.floor(rating);
  const circles = '●'.repeat(fullCircles);

  const CardContent = (
    <div className={styles.card}>
      <div className={styles.topRow}>
        {avatarURL && (
          <Image
            src={avatarURL}
            alt={`${reviewerName ?? 'Reviewer'} avatar`}
            width={60}
            height={60}
            className={styles.avatar}
            unoptimized
          />
        )}

        {tripAdvisorLogoURL && (
          <Image
            src={tripAdvisorLogoURL}
            alt="TripAdvisor logo"
            width={60}
            height={60}
            className={styles.logo}
            unoptimized
          />
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.title}><strong>{title}</strong></div>
        <div className={styles.rating}>{circles}</div>
        <p className={styles.text}>&quot;{text}&quot;</p>
        {(reviewerName || date) && (
          <div className={styles.reviewer}>
            {reviewerName && <span>{reviewerName}</span>}
            {reviewerName && date && <span> &middot; </span>}
            {date && <span>{date}</span>}
          </div>
        )}
      </div>
    </div>
  );

  return tripAdvisorReviewURL ? (
    <Link
      href={tripAdvisorReviewURL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkWrapper}
    >
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}
