'use client';
import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Burger, burgers } from "@/app/Services/menuItems";
import BootstrapBurgerModal from "../components/SwiperObject/SwiperModal/swiper-modal";
import styles from "./page.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";

registerLocale("it", it);
import { it } from "date-fns/locale";

 const SERVICE_PRICES: Record<string, number> = {
    "Torta di pasticceria": 5,
    "Torta propria": 2.5,
    Tiramisu: 3,
    Cheesecake: 3,
    "Dolce misto": 3,
  };

export default function EventQuoteForm() {
  const [menuType, setMenuType] = useState<"fixed" | "buffet" | null>(null);
  const [numAdults, setNumAdults] = useState<string>("");
  const [numChildren, setNumChildren] = useState<string>("");
  const [eventType, setEventType] = useState<"work" | "private" | null>(null);
  const [eventSubtype, setEventSubtype] = useState("");
  const [notes, setNotes] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

  const PRICE_ADULT_FIXED = 15;
  const PRICE_CHILD_FIXED = 10;
  const PRICE_ADULT_BUFFET = 18;
  const PRICE_CHILD_BUFFET = 12;

 

  //useMomo=Only recalculate this value if something it depends on has changed; otherwise, reuse the previous result.
  const total = useMemo(() => {
    const adults = Number(numAdults) || 0;
  const children = Number(numChildren) || 0;
    if (!menuType) return 0;
    const baseAdult = menuType === "fixed" ? PRICE_ADULT_FIXED : PRICE_ADULT_BUFFET;
    const baseChild = menuType === "fixed" ? PRICE_CHILD_FIXED : PRICE_CHILD_BUFFET;
    const baseTotal = adults * baseAdult + children * baseChild;
    const servicesTotal =
      //Loops through all selected services (services array).Multiplies service price by total people.Sums everything.
      services.reduce((sum, s) => sum + SERVICE_PRICES[s] * (adults + children), 0);
    return baseTotal + servicesTotal;
  }, [menuType, numAdults, numChildren, services]);

  const handleServiceToggle = (service: string) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

     if (!menuType) {
    alert("Seleziona un tipo di menù");
    return;
  }

  if (!eventType) {
    alert("Seleziona il tipo di evento");
    return;
  }
    const formData = {
      menuType,
      numAdults,
      numChildren,
      eventType,
      eventSubtype,
      notes,
      services,
      contact,
      total,
    };
    console.log("Form submitted:", formData);
    alert("Richiesta inviata! Ti contatteremo presto.");
  };

  return (
    <>
      <Container className={styles.container}>
        <h1 className={styles.title}>Richiedi un Preventivo per il Tuo Evento</h1>

        <Form onSubmit={handleSubmit} className={styles.form}>
          {/* Step 1: Menu type */}
          <Row className={styles.row}>
            <Col>
              <h5 className={styles.sectionTitle}>Seleziona tipo di menù</h5>
              <div className={styles.buttonGroup}>
                <Button
                  className={`${styles.button} ${menuType === "fixed" ? styles.activeButton : ""}`}
                  onClick={() => setMenuType("fixed")}
                >
                  Menù Fisso (5 Burger a scelta)
                </Button>
                <Button
                  className={`${styles.button} ${menuType === "buffet" ? styles.activeButton : ""}`}
                  onClick={() => setMenuType("buffet")}
                >
                  Buffet con Mini Burger
                </Button>
              </div>
            </Col>
          </Row>

          {/* Step 2: People */}
          <Row className={styles.row}>
            <Col md={6}>
              <Form.Group controlId="numAdults" className={styles.formGroup}>
                <Form.Label className={styles.label}>Adulti</Form.Label>
                <Form.Control
                  type="number"
                  value={numAdults}
                  onChange={(e) => setNumAdults(e.target.value)}
                  placeholder="0"
                  required
                  className={styles.input}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="numChildren" className={styles.formGroup}>
                <Form.Label className={styles.label}>Bambini</Form.Label>
                <Form.Control
                  type="number"
                  value={numChildren}
                  onChange={(e) => setNumChildren(e.target.value)}
                  placeholder="0"
                  required
                  className={styles.input}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Step 3: Buffet burgers (if fixed menu) */}
          {menuType === "fixed" && (
            <Row className={styles.row}>
              <Col>
                <h5 className={styles.sectionTitle}>Al ristorante potrai scegliere tra questi burger:</h5>
                <div className={styles.buttonWrap}>
                  {burgers.map((burger: Burger) => (
                    <Button
                      key={burger.id}
                      className={styles.burgerButton}
                      variant="outline-secondary"
                      onClick={() => setSelectedBurger(burger)}
                    >
                      {burger.name}
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>
          )}

          {/* Step 4: Event type */}
          <Row className={styles.row}>
            <Col>
              <h5 className={styles.sectionTitle}>Tipo di evento</h5>
              <div className={styles.buttonGroup}>
                <Button
                  className={`${styles.button} ${eventType === "work" ? styles.activeButton : ""}`}
                  onClick={() => setEventType("work")}
                >
                  Lavorativo
                </Button>
                <Button
                  className={`${styles.button} ${eventType === "private" ? styles.activeButton : ""}`}
                  onClick={() => setEventType("private")}
                >
                  Privato
                </Button>
              </div>
              {eventType && (
                <Form.Group controlId="eventSubtype" className={styles.formGroup}>
                  <Form.Label className={styles.label}>Specifica il tipo di evento</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Es. Compleanno, Riunione, Laurea..."
                    value={eventSubtype}
                    onChange={(e) => setEventSubtype(e.target.value)}
                    required
                    className={styles.input}
                  />
                </Form.Group>
              )}
            </Col>
          </Row>

          {/* Step 5: Notes */}
          <Row className={styles.row}>
            <Col>
              <Form.Group controlId="notes" className={styles.formGroup}>
                <Form.Label className={styles.label}>Note (allergie, richieste particolari)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={styles.textarea}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Step 6: Extra services */}
          <Row className={styles.row}>
            <Col>
              <h5 className={styles.sectionTitle}>Servizi Aggiuntivi</h5>
              <div className={styles.buttonWrap}>
                {Object.keys(SERVICE_PRICES).map((service) => (
                  <Button
                    key={service}
                    className={`${styles.button} ${services.includes(service) ? styles.activeButton : ""
                      }`}
                    onClick={() => handleServiceToggle(service)}
                  >
                    {service} (+€{SERVICE_PRICES[service].toFixed(2)} / persona)
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/*   
        <Row className="mb-4">
          <Col>
            <div className={styles.totalWrapper}>
              <h4 className={styles.total}>Totale: €{total.toFixed(2)}</h4>
            </div>
          </Col>
        </Row> */}

          {/* Step 8: Contact info */}
          <Row className={styles.row}>
            {Object.entries(contact).map(([key, value]) => (
              <Col md={key === "notes" ? 12 : 6} key={key} className={styles.col}>
                <Form.Group controlId={key} className={styles.formGroup}>
                  <Form.Label className={styles.label}>
                    {key === "name"
                      ? "Nome"
                      : key === "surname"
                        ? "Cognome"
                        : key === "email"
                          ? "Email"
                          : key === "phone"
                            ? "Telefono"
                            : key === "date"
                              ? "Data evento"
                              : "Ora evento"}
                  </Form.Label>

                  {key === "date" ? (
                    <DatePicker
                      selected={contact.date ? new Date(contact.date) : null}
                      onChange={(date: Date | null) => {
                        if (date) {
                          setContact((prev) => ({
                            ...prev,
                            date: date.toISOString().split("T")[0],
                          }));
                        }
                      }}
                      dateFormat="dd/MM/yyyy"
                      locale="it" // Italian locale
                      className={styles.input}
                      placeholderText="gg/mm/aaaa"
                    />
                  ) : key === "time" ? (
                    <DatePicker
                      selected={contact.time ? new Date(`1970-01-01T${contact.time}`) : null}
                      onChange={(time: Date | null) => {
                        if (time) {
                          const hours = time.getHours().toString().padStart(2, "0");
                          const minutes = time.getMinutes().toString().padStart(2, "0");
                          setContact((prev) => ({ ...prev, time: `${hours}:${minutes}` }));
                        }
                      }}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeFormat="HH:mm" // 24-hour format
                      dateFormat="HH:mm"
                      className={styles.input}
                      placeholderText="Seleziona un orario"
                      timeCaption="Orario"
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      value={value}
                      onChange={(e) => setContact((prev) => ({ ...prev, [key]: e.target.value }))}
                      required
                      className={styles.input}
                    />
                  )}
                </Form.Group>
              </Col>
            ))}
          </Row>


          {/* Submit */}
          <Button type="submit" variant="success" className={styles.submitButton}>
            Invia Richiesta
          </Button>
        </Form>

        {/* Burger Modal */}
        {selectedBurger && (
          <BootstrapBurgerModal
            burger={selectedBurger}
            onClose={() => setSelectedBurger(null)}
          />
        )}
      </Container>
      {/* Totale fissato in basso a destra */}
      <div className={styles.totalWrapper}>
        <h4 className={styles.total}>Totale: €{total.toFixed(2)}</h4>
      </div>
    </>
  );
}
