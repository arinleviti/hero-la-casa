// app/privacy/page.tsx
import { Container } from 'react-bootstrap';

export const metadata = {
  title: 'Privacy Policy | Hero Burger',
  description: 'Informativa sulla privacy per Hero Burger',
};

export default function PrivacyPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Informativa sulla Privacy</h1>

      <p>
        Benvenuto su <strong>Hero Burger</strong> (“noi”, “nostro”, “ci”).
        Rispettiamo la tua privacy e ci impegniamo a proteggere i tuoi dati
        personali in conformità al <strong>GDPR</strong> e alle normative
        vigenti. Utilizzando il nostro sito web, accetti la presente Informativa
        sulla Privacy.
      </p>

      <h2 className="mt-4">1. Dati che raccogliamo</h2>
      <ul>
        <li>
          <strong>Commenti ai post del blog:</strong> Nome (anche nickname),
          indirizzo email (non visibile pubblicamente) e contenuto del commento
        </li>
        <li>
          <strong>Cookie e dati di utilizzo:</strong> Cookie tecnici necessari e
          (opzionale) cookie di Google Analytics
        </li>
      </ul>

      <h2 className="mt-4">2. Come utilizziamo i tuoi dati</h2>
      <ul>
        <li>Pubblicare i tuoi commenti sul blog</li>
        <li>Contattarti solo in relazione ai tuoi commenti, se necessario</li>
        <li>Analizzare il traffico del sito (se Google Analytics è attivato)</li>
      </ul>

      <p>
        Non vendiamo né condividiamo i tuoi dati con terze parti per fini
        commerciali.
      </p>

      <h2 className="mt-4">3. Conservazione dei dati</h2>
      <ul>
        <li>
          I commenti e le email associate vengono conservati a tempo
          indeterminato, salvo richiesta di cancellazione
        </li>
        <li>I cookie possono essere conservati fino a 12 mesi</li>
      </ul>

      <h2 className="mt-4">4. I tuoi diritti (GDPR)</h2>
      <p>
        Hai diritto di richiedere l’accesso, la rettifica o la cancellazione dei
        tuoi dati personali. Puoi anche ritirare il consenso ai cookie quando il
        banner sarà attivo.
      </p>
      <p>
        Per esercitare i tuoi diritti, contattaci: <br />
        📧{' '}
        <a href="mailto:info@herolacasadelburger.it">
          info@herolacasadelburger.it
        </a>
      </p>

      <h2 className="mt-4">5. Cookie</h2>
      <p>
        Utilizziamo cookie tecnici necessari e, se abilitato, Google Analytics
        per raccogliere dati anonimi sulle visite. L’elenco completo dei cookie
        sarà disponibile tramite Cookiebot dopo l’attivazione.
      </p>

      <h2 className="mt-4">6. Servizi di terze parti</h2>
      <ul>
        <li>Google Analytics (opzionale) – analisi anonima del traffico</li>
        <li>Provider di hosting – dati conservati in UE o paesi equivalenti</li>
      </ul>

      <h2 className="mt-4">7. Modifiche alla Privacy Policy</h2>
      <p>
        Ci riserviamo il diritto di aggiornare questa Privacy Policy. La versione
        più recente sarà sempre disponibile su questa pagina.
      </p>
    </Container>
  );
}
