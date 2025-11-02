"use client";
import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Burger, burgers } from "@/app/Services/menuItems";
import { Beer, beers } from "@/app/Services/menuItems";
import BootstrapBurgerModal from "../components/SwiperObject/SwiperModal/swiper-modal";
import styles from "./page.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { it } from "date-fns/locale";
import Image from "next/image";
import BootstrapBeerModal from "./BeerModal/beerModal";

registerLocale("it", it);

const SERVICE_PRICES: Record<string, number> = {
  "Torta di pasticceria": 4,
  "Un nostro dolce a scelta": 5
};
const EXTRA_FRIED_PRICES: Record<string, number> = {
  "Chicken Donuts Bacon": 1.5,
  "Breaded Mini Toast": 1.5
};
const allowedBurgersBasic: string[] = ["ANGUS DI ABERDEEN", "ITALIANO", "RUSTICO", "BANGKOK", "SOLEGGIATO"];
const allowedBurgersPremium: string[] = ["SEASON BURGER", "IL TARTUFO", "CRUDO", "MONACO", "LONDON"];


const MENU_DESCRIPTIONS: Record<string, string> = {
  basic: "Il Menù BASIC include 5 burger a scelta, perfetto per un pasto semplice e gustoso.",
  premium: "Il Menù PREMIUM offre 5 burger selezionati per un’esperienza più ricca.",
  hero: "Menù dedicato dalle 15 persone in sù dove per ogni persona sono compresi: 3 miniburger, 3 tipologie di fritti (Anelli di cipolla- ribs di pannocchia - stick di pollo artigianali) 2 tipologie di patate ( rustic - sweet potato )",
};

export default function EventQuoteForm() {
  const [menuType, setMenuType] = useState<"basic" | "premium" | "hero" | null>(null);
  const [numAdults, setNumAdults] = useState<string>("");
  const [numChildren, setNumChildren] = useState<string>("");
  const [eventType, setEventType] = useState<"work" | "private" | null>(null);
  const [eventSubtype, setEventSubtype] = useState("");
  const [notes, setNotes] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [selectedFried, setSelectedFried] = useState<string | null>(null);
  const [friedQuantities, setFriedQuantities] = useState<Record<string, number>>({});
  const [beerSelected, setBeerSelected] = useState(false);
  const [beerQuantity, setBeerQuantity] = useState(0);
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);
  const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);
  const [showHeroAlert, setShowHeroAlert] = useState(false);

  const PRICE_ADULT_BASIC = 13;
  const PRICE_CHILD_BASIC = 9;
  const PRICE_ADULT_PREMIUM = 16;
  const PRICE_CHILD_PREMIUM = 12;
  const PRICE_ADULT_HERO = 20;
  const PRICE_CHILD_HERO = 11;

  const total = useMemo(() => {
    const adults = Number(numAdults) || 0;
    const children = Number(numChildren) || 0;
    if (!menuType) return 0;
    const baseAdult =
      menuType === "basic" ? PRICE_ADULT_BASIC : menuType === "premium" ? PRICE_ADULT_PREMIUM : PRICE_ADULT_HERO;
    const baseChild =
      menuType === "basic" ? PRICE_CHILD_BASIC : menuType === "premium" ? PRICE_CHILD_PREMIUM : PRICE_CHILD_HERO;
    const baseTotal = adults * baseAdult + children * baseChild;
    const servicesTotal = services.reduce(
      (sum, s) => sum + SERVICE_PRICES[s] * (adults /* + children */),
      0
    );
    // Object.entries turns an object into an array of [key, value] pairs
    //reduce() takes an array and goes through it element by element keeping track of some ongoing result (called the accumulator)
    //array.reduce((accumulator, currentValue) => {
    // combine them somehow
    // return newAccumulator;
    //  }, initialValue);
    const extraFriedTotal = Object.entries(friedQuantities).reduce(
      (sum, [item, qty]) => sum + (EXTRA_FRIED_PRICES[item] || 0) * qty,
      0
    );
    const beerTotal = beerQuantity * 30;
    return baseTotal + servicesTotal + extraFriedTotal + beerTotal;
  }, [menuType, numAdults, numChildren, services, friedQuantities, beerQuantity]);

  const handleServiceSelect = (service: string) => {
    setServices((prev) => (prev.includes(service) ? [] : [service]));
  };
  const handleFriedClick = (item: string) => {
    setSelectedFried((prev) => (prev === item ? null : item)); // toggle selection
  };

  const handleQuantityChange = (item: string, quantity: number) => {
    setFriedQuantities((prev) => ({
      ...prev,
      [item]: quantity,
    }));
  };
  const totalPeople = Number(numAdults || 0) + Number(numChildren || 0);

  useEffect(() => {
    // Show alert only if HERO menu is selected and total people < 15
    if (menuType === "hero" && totalPeople < 15) {
      setShowHeroAlert(true);
    } else {
      setShowHeroAlert(false);
    }
  }, [menuType, totalPeople]);
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
          scegliere tra due <strong>menù a prezzo fisso</strong> — potrai gustare cinque dei nostri
          best seller — oppure un <strong>buffet con mini burger</strong>. Se lo desideri,
          possiamo preparare per te una torta su misura, oppure puoi portare la tua.
          Compila questo breve questionario per ricevere un preventivo: inviaci la richiesta
          e ti risponderemo al più presto! Il nostro locale, raffinatamente semplice
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
          <input
            type="hidden"
            name="friedItems"
            value={Object.entries(friedQuantities)
              .map(([item, qty]) => `${item}: ${qty}`)
              .join(", ")}
          />
          <input
            type="hidden"
            name="beerSelected"
            value={beerSelected ? "Yes" : "No"}
          />
          <input
            type="hidden"
            name="beerQuantity"
            value={beerQuantity || 0}
          />

          {/* Step 1: Menu type */}
          <Row className={styles.row}>
            <Col>
              <h5 className={styles.sectionTitle}>Seleziona tipo di menù</h5>
              <div className={styles.buttonGroup}>
                <Button
                  className={`${styles.button} ${menuType === "basic" ? styles.activeButton : ""}`}
                  onClick={() => setMenuType("basic")}
                  type="button"
                >
                  Menù BASIC<br />
                  <small>(€{PRICE_ADULT_BASIC} adulti / €{PRICE_CHILD_BASIC} bambini)</small>
                </Button>
                <Button
                  className={`${styles.button} ${menuType === "premium" ? styles.activeButton : ""}`}
                  onClick={() => setMenuType("premium")}
                  type="button"
                >
                  Menù PREMIUM<br />
                  <small>(€{PRICE_ADULT_PREMIUM} adulti / €{PRICE_CHILD_PREMIUM} bambini)</small>
                </Button>
                <Button
                  className={`${styles.button} ${menuType === "hero" ? styles.activeButton : ""}`}
                  onClick={() => setMenuType("hero")}
                  type="button"
                >
                  Menù HERO<br />
                  <small>(€{PRICE_ADULT_HERO} adulti / €{PRICE_CHILD_HERO} bambini)</small>
                </Button>
              </div>

              {menuType && (
                <>
                  <div className={styles.menuImageWrapper}>
                    <Image
                      src={
                        menuType === "basic"
                          ? "/events/compleanno.webp"
                          : menuType === "premium"
                            ? "/events/premium-buffet.webp"
                            : "/events/mini-burger.webp"
                      }
                      alt={
                        menuType === "basic"
                          ? "Menù BASIC"
                          : menuType === "premium"
                            ? "Menù PREMIUM"
                            : "Menù HERO"
                      }
                      width={600}
                      height={300}
                      className={styles.menuImage}
                      priority
                    />
                  </div>

                  {/* Descrizione dinamica */}
                  <div className={styles.introParagraph}>
                    <br></br>
                    {MENU_DESCRIPTIONS[menuType]}
                  </div>
                </>
              )}
            </Col>
          </Row>
          {showHeroAlert && (
            <p style={{ color: "red", marginTop: "0.5rem" }}>
              Attenzione: il Menù HERO è disponibile solo da 15 persone in su.
            </p>
          )}

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
            {<Col md={6}>
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
            </Col>}
          </Row>

          {/* Step 3: Buffet burgers */}
          {menuType === "basic" ? (
            <Row className={styles.row}>
              <Col>
                <h5 className={styles.sectionTitle}>
                  Al ristorante potrai scegliere tra questi burger:
                </h5>
                <div className={styles.buttonWrap}>
                  {burgers
                    .filter((burger) => allowedBurgersBasic.includes(burger.name))
                    .map((burger: Burger) => (
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
          ) : menuType === "premium" ? (
            <Row className={styles.row}>
              <Col>
                <h5 className={styles.sectionTitle}>
                  Al ristorante potrai scegliere tra questi burger:
                </h5>
                <div className={styles.buttonWrap}>
                  {burgers
                    .filter((burger) => allowedBurgersPremium.includes(burger.name))
                    .map((burger: Burger) => (
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
          ) : null}

          {/* Step 4: Event type */}
          <Row className={styles.row}>
            <Col>
              <h5 className={styles.sectionTitle}>Tipo di evento</h5>
              <div className={styles.buttonGroup}>
                <Button
                  className={`${styles.button} ${eventType === "work" ? styles.activeButton : ""
                    }`}
                  onClick={() => setEventType("work")}
                  type="button"
                >
                  Lavorativo
                </Button>
                <Button
                  className={`${styles.button} ${eventType === "private" ? styles.activeButton : ""
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
                    placeholder="Es. Compleanno, Cena Aziendale, Laurea..."
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

          {/* Step 6: Servizio Dolce */}
          <Row className={styles.row}>
            <Col>
              <h5 className={styles.sectionTitle}>Servizio Dolce (scegline uno)</h5>
              <div className={styles.buttonWrap}>
                {Object.keys(SERVICE_PRICES).map((service) => (
                  <Button
                    key={service}
                    className={`${styles.button} ${services.includes(service) ? styles.activeButton : ""
                      }`}
                    onClick={() => handleServiceSelect(service)}
                    type="button"
                  >
                    {service} (+€{SERVICE_PRICES[service].toFixed(2)} / persona)
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Step 7: Extra fried */}
          <Row className={styles.row}>
            <Col>
              <h5 className={styles.sectionTitle}>Fritti Extra</h5>
              <div className={styles.buttonWrap}>
                {Object.keys(EXTRA_FRIED_PRICES).map((item) => (
                  <Button
                    key={item}
                    className={`${styles.button} ${selectedFried === item ? styles.activeButton : ""}`}
                    onClick={() => handleFriedClick(item)}
                    type="button"
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  >
                    {item} (+€{EXTRA_FRIED_PRICES[item].toFixed(2)} / pezzo)
                  </Button>
                ))}
              </div>

              {/* Show quantity input + photo for selected item */}
              {selectedFried && (
                <div style={{ marginTop: "1rem" }}>
                  <label>Numero di pezzi: </label>
                  <input
                    type="number"
                    min={1}
                    value={friedQuantities[selectedFried] || ""}
                    onChange={(e) => handleQuantityChange(selectedFried, Number(e.target.value))}
                    style={{ width: "60px", marginLeft: "0.5rem" }}
                    placeholder="0"
                  />
                  <div style={{ marginTop: "0.5rem" }}>
                    <Image
                      src={`/fritti/${selectedFried.replaceAll(" ", "-")}.webp`}
                      alt={selectedFried}
                      width={200}
                      height={120}
                    />
                  </div>
                </div>
              )}
            </Col>
          </Row>
          {/* Step 7b: Beer quantity */}
          <Row className={styles.row}>
            <Col>
              <h5 className={styles.sectionTitle}>Mondo di Birra</h5>
              <Button
                className={`${styles.button} ${beerSelected ? styles.activeButton : ""}`}
                onClick={() => setBeerSelected((prev) => !prev)} // solo toggle visibilità
                type="button"
                style={{ marginBottom: "0.5rem" }}
              >
                Mondo di Birra (3L) - €30 per tanica da 3L
              </Button>

              {beerSelected && (
                <>
                  <div style={{ marginTop: "0.5rem" }}>
                    <label>Numero di taniche da 3L: </label>
                    <input
                      type="number"
                      min={0}
                      value={beerQuantity}
                      onChange={(e) => setBeerQuantity(Number(e.target.value))}
                      style={{ width: "60px", marginLeft: "0.5rem" }}
                      placeholder="0"
                    />

                    <div style={{ marginTop: "0.5rem" }}>
                      <p>Prezzo: €{beerQuantity * 30}</p>
                    </div>
                  </div>
                  <Row className={styles.row}>
                    <Col>
                      <h5 className={styles.sectionTitle}>
                        Al ristorante potrai scegliere tra queste birre:
                      </h5>
                      <div className={styles.buttonWrap}>
                        {beers
                          .map((beer: Beer) => (
                            <Button
                              key={beer.id}
                              className={styles.burgerButton}
                              variant="outline-secondary"
                              onClick={() => setSelectedBeer(beer)}
                              type="button"
                            >
                              {beer.name}
                            </Button>
                          ))}
                      </div>
                    </Col>
                  </Row>
                </>
              )}
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
                      filterDate={(date) => date.getDay() !== 1} // Exclude Mondays (1 = Monday)
                      minDate={new Date()} // Optional: prevent past dates
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
                      minTime={new Date(new Date().setHours(18, 30, 0, 0))} // 18:30
                      maxTime={new Date(new Date().setHours(21, 0, 0, 0))}  // 21:00
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
        {/* Beer Modal */}
        {selectedBeer && (
          <BootstrapBeerModal
            beer={selectedBeer}
            onClose={() => setSelectedBeer(null)}
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
