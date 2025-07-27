
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewCard from './review-card';
import { reviews } from '../../Services/assetsService';
import styles from './reviews.module.css';
import Image from 'next/image';

export default function Reviews() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerContainer}>
        <h1 className={`text-center mb-4 fw-bold ${styles.title}`}>COSA DICONO DI NOI</h1>
        <Image
            src={"Reviews/TravellersChoice.png"}
            alt="TripAdvisor logo"
            width={100}
            height={110}
            className={styles.logo}
            unoptimized
          />  
        </div>
        
        <Row className="justify-content-center gy-4">
          {reviews.map(({ id,title, text, rating, reviewerName, date, avatarURL, tripAdvisorLogoURL, tripAdvisorReviewURL }) => (
            <Col key={id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <ReviewCard
               text={text}
               title={title}
                rating={rating}
                reviewerName={reviewerName}
                date={date}
                avatarURL={avatarURL}
                tripAdvisorLogoURL={tripAdvisorLogoURL}
                tripAdvisorReviewURL={tripAdvisorReviewURL}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
