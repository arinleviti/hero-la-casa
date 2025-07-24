// reviews.tsx
'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewCard from './review-card';
import { reviews } from '../../Services/assetsService';
import styles from './reviews.module.css';

export default function Reviews() {
  return (
    <section className={styles.section}>
      <Container>
        <h1 className={`text-center mb-4 fw-bold ${styles.title}`}>COSA DICONO DI NOI</h1>
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
