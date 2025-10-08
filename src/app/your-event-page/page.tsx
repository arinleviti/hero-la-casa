"use client";
import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Burger, burgers } from "@/app/Services/menuItems";
import BootstrapBurgerModal from "../components/SwiperObject/SwiperModal/swiper-modal";
import styles from "./page.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { it } from "date-fns/locale";
import Image from "next/image";

registerLocale("it", it);

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

  const total = useMemo(() => {
    const adults = Number(numAdults) || 0;
    const children = Number(numChildren) || 0;
    if (!menuType) return 0;
    const baseAdult =
      menuType === "fixed" ? PRICE_ADULT_FIXED : PRICE_ADULT_BUFFET;
    const baseChild =
      menuType === "fixed" ? PRICE_CHILD_FIXED : PRICE_CHILD_BUFFET;
    const baseTotal = adults * baseAdult + children * baseChild;
    const servicesTotal = services.reduce(
      (sum, s) => sum + SERVICE_PRICES[s] * (adults + children),
      0
    );
    return baseTotal + servicesTotal;
  }, [menuType, numAdults, numChildren, services]);

  const handleServiceToggle = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <>
   
      <Container className={styles.container}>
         <div className={styles.heroVideoWrapper}>
  <video
    src="/events/eventsResized.mp4"
    autoPlay
    muted
    loop
    playsInline
    className={styles.heroVideo}
  />
</div>
        <h1 className={styles.title}>
          Richiedi un Preventivo per il Tuo Evento
        </h1>
        <p className={styles.introParagraph}>
  Vuoi organizzare il tuo evento da <strong>Hero</strong>? Ti offriamo la possibilità di
  scegliere tra un <strong>menù a prezzo fisso</strong> — potrai gustare cinque dei nostri
  best seller — oppure un <strong>buffet con mini burger</strong>. Se lo desideri,
  possiamo preparare per te una torta su misura, oppure puoi portare la tua.  
  Compila questo breve questionario per ricevere un preventivo: inviaci la richiesta
  e ti risponderemo al più presto! Il nostro locale, <em>raffinatamente semplice</em>
  e dall’atmosfera accogliente, è perfetto per feste private ed eventi di lavoro.
  Offriamo anche opzioni <strong>vegan e gluten-free</strong>.
</p>

        <Form
          action="https://formsubmit.co/prenotazioni@herolacasadelburger.it"
          method="POST"
          className={styles.form}
        >
          {/* Hidden inputs for FormSubmit */}
          <input
            type="hidden"
            name="_subject"
            value="Nuova richiesta di preventivo per evento"
          />
          <input type="hidden" name="menuType" value={menuType || ""} />
          <input type="hidden" name="eventType" value={eventType || ""} />
          <input type="hidden" name="eventSubtype" value={eventSubtype} />
          <input type="hidden" name="services" value={services.join(", ")} />
          <input type="hidden" name="total" value={total.toFixed(2)} />

          {/* Step 1: Menu type */}
          <Row className={styles.row}>
            <Col>
              <h5 className={styles.sectionTitle}>Seleziona tipo di menù</h5>
              <div className={styles.buttonGroup}>
                <Button
                  className={`${styles.button} ${
                    menuType === "fixed" ? styles.activeButton : ""
                  }`}
                  onClick={() => setMenuType("fixed")}
                  type="button"
                >
                  Menù Fisso (5 Burger a scelta)
                </Button>
                <Button
                  className={`${styles.button} ${
                    menuType === "buffet" ? styles.activeButton : ""
                  }`}
                  onClick={() => setMenuType("buffet")}
                  type="button"
                >
                  Buffet con Mini Burger
                </Button>
              </div>

              {menuType && (
                <div className={styles.menuImageWrapper}>
                  <Image
                    src={
                      menuType === "fixed"
                        ? "/events/compleanno.webp"
                        : "/events/mini-burger.webp"
                    }
                    alt={
                      menuType === "fixed"
                        ? "Menù fisso"
                        : "Buffet con mini burger"
                    }
                    width={600}
                    height={300}
                    className={styles.menuImage}
                    priority
                  />
                </div>
              )}
            </Col>
          </Row>

          {/* Step 2: People */}
          <Row className={styles.row}>
            <Col md={6}>
              <Form.Group controlId="numAdults" className={styles.formGroup}>
                <Form.Label className={styles.label}>Adulti</Form.Label>
                <Form.Control
                  type="number"
                  name="numAdults"
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
                  name="numChildren"
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
                <h5 className={styles.sectionTitle}>
                  Al ristorante potrai scegliere tra questi burger:
                </h5>
                <div className={styles.buttonWrap}>
                  {burgers.map((burger: Burger) => (
                    <Button
                      key={burger.id}
                      className={styles.burgerButton}
                      variant="outline-secondary"
                      onClick={() => setSelectedBurger(burger)}
                      type="button"
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
                  className={`${styles.button} ${
                    eventType === "work" ? styles.activeButton : ""
                  }`}
                  onClick={() => setEventType("work")}
                  type="button"
                >
                  Lavorativo
                </Button>
                <Button
                  className={`${styles.button} ${
                    eventType === "private" ? styles.activeButton : ""
                  }`}
                  onClick={() => setEventType("private")}
                  type="button"
                >
                  Privato
                </Button>
              </div>
              {eventType && (
                <Form.Group
                  controlId="eventSubtype"
                  className={styles.formGroup}
                >
                  <Form.Label className={styles.label}>
                    Specifica il tipo di evento
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="eventSubtype"
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
                <Form.Label className={styles.label}>
                  Note (allergie, richieste particolari)
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="notes"
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
                    className={`${styles.button} ${
                      services.includes(service) ? styles.activeButton : ""
                    }`}
                    onClick={() => handleServiceToggle(service)}
                    type="button"
                  >
                    {service} (+€{SERVICE_PRICES[service].toFixed(2)} / persona)
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Step 8: Contact info */}
          <Row className={styles.row}>
            {Object.entries(contact).map(([key, value]) => (
              <Col
                md={key === "notes" ? 12 : 6}
                key={key}
                className={styles.col}
              >
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
                      locale="it"
                      className={styles.input}
                      placeholderText="gg/mm/aaaa"
                      name="date"
                    />
                  ) : key === "time" ? (
                    <DatePicker
                      selected={
                        contact.time
                          ? new Date(`1970-01-01T${contact.time}`)
                          : null
                      }
                      onChange={(time: Date | null) => {
                        if (time) {
                          const hours = time
                            .getHours()
                            .toString()
                            .padStart(2, "0");
                          const minutes = time
                            .getMinutes()
                            .toString()
                            .padStart(2, "0");
                          setContact((prev) => ({
                            ...prev,
                            time: `${hours}:${minutes}`,
                          }));
                        }
                      }}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeFormat="HH:mm"
                      dateFormat="HH:mm"
                      className={styles.input}
                      placeholderText="Seleziona un orario"
                      timeCaption="Orario"
                      name="time"
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      name={key}
                      value={value}
                      onChange={(e) =>
                        setContact((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }))
                      }
                      required
                      className={styles.input}
                    />
                  )}
                </Form.Group>
              </Col>
            ))}
          </Row>

          {/* Submit */}
          <Button
            type="submit"
            variant="success"
            className={styles.submitButton}
          >
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
