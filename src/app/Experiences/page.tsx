import { Col, Container, Row } from 'react-bootstrap';
import style from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ExperienceSection from './experience-section';
import { expBirthday, expStPatrick, expValentine, expHalloween } from '../Services/assetsService';

export default function StaffSection() {
  return (
    <>
    <Container className={style.mainContainer}>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0 px-md-5">
            <Image
              src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1753274769/experiences-main_uni7ht.webp"
              alt="staff-img"
              layout="responsive"
              width={600}
              height={450}
              priority
              
            />
        </Col>
        <Col md={6} className={style.textContainer}>
         <Link href="/staffAndPremises" passHref className={style.clickableText}>
         
          <h1>OGNI BOCCONE UN’ESPERIENZA</h1>
          <p>
            Da Hero, ogni occasione diventa speciale. Che sia l’euforia di Carnevale, la dolcezza di San Valentino, o il calore delle festività tradizionali, c’è sempre un motivo per festeggiare. Le nostre serate a tema sono pensate per sorprenderti, con menù dedicati e atmosfere uniche.Vivi l’esperienza di una festa che si rinnova, dove ogni dettaglio racconta una storia e ogni boccone un viaggio. 
          </p>
          </Link>
        </Col>
      </Row>
    </Container>
    <ExperienceSection header={expBirthday.header} subheader={expBirthday.subheader} picUrls={expBirthday.picUrls} alt={expBirthday.alt} popupImg={expBirthday.popupImg}/>
    <ExperienceSection header={expStPatrick.header} subheader={expStPatrick.subheader} picUrls={expStPatrick.picUrls} alt={expStPatrick.alt} popupImg={expStPatrick.popupImg}/>
    <ExperienceSection header={expHalloween.header} subheader={expHalloween.subheader} picUrls={expHalloween.picUrls} alt={expHalloween.alt} popupImg={expHalloween.popupImg}/>
    <ExperienceSection header={expValentine.header} subheader={expValentine.subheader} picUrls={expValentine.picUrls} alt={expValentine.alt} popupImg={expValentine.popupImg}/>
</>
  );
}