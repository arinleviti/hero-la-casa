import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import styles from './page.module.css';

export default function LavoraConNoiPage() {
    return (
        <Container className={styles.formContainer}>
            {/* Centered title and paragraph */}
      <h1 className="text-center mb-3">LAVORA CON NOI</h1>
      <h3 className="text-center mb-5">
        Vuoi lavorare in un ambiente stimolante, dove passione e attenzione al cliente fanno davvero la differenza? Compila il form qui sotto e raccontaci di te!
      </h3>
            <Row className="align-items-center">
                {/* LEFT IMAGE */}
                <Col md={6} className="mb-4 mb-md-0">
                    <Image
                        src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1753101476/sabrinaStaff_twtkdy.jpg"
                        alt="Lavora con noi"
                        width={600}
                        height={450}
                        className={`img-fluid ${styles.roundedImage}`}
                    />
                </Col>

                {/* RIGHT FORM */}
                <Col md={6}>
                    <section className={styles.formSection}>
                        
                        <form
                            action="mailto:info@herolacasadelburger.it"
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nome" className="form-label">Nome*</label>
                                    <input type="text" className="form-control" id="nome" name="nome" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cognome" className="form-label">Cognome*</label>
                                    <input type="text" className="form-control" id="cognome" name="cognome" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email*</label>
                                    <input type="text" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="telefono" className="form-label">Telefono*</label>
                                    <input type="text" className="form-control" id="telefono" name="telefono" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="parlaci" className="form-label">Parlaci di te*</label>
                                <textarea className="form-control" id="parlaci" name="parlaci" rows={5} required></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cv" className="form-label">Carica il tuo CV*</label>
                                <input type="file" className="form-control" id="cv" name="cv" required />
                            </div>

                            <Button variant="dark" type="submit">
                                Invia
                            </Button>
                        </form>
                    </section>
                </Col>
            </Row>
        </Container>
    );
}
