'use client';

import { useEffect } from 'react';

export default function TripAdvisorWidgets() {
  useEffect(() => {
    // Dynamically load TripAdvisor widget scripts after component mounts
    const script1 = document.createElement('script');
    script1.src = "https://www.jscache.com/wejs?wtype=certificateOfExcellence&uniq=380&locationId=15668261&lang=en_US&year=2024&display_version=2";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://www.jscache.com/wejs?wtype=cdsscrollingravenarrow&uniq=608&locationId=15668261&lang=en_US&border=true&display_version=2";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // Cleanup scripts on unmount
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.8rem' }}>
        COSA DICONO DI NOI
      </h2>

      <div id="TA_certificateOfExcellence380" className="TA_certificateOfExcellence" style={{ marginBottom: '2rem' }}>
        <ul id="In9fWK" className="TA_links 7GvRVqb2Ck" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li id="cUH2gRkK" className="oKzZbC2I" style={{ display: 'inline-block' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Restaurant_Review-g670804-d15668261-Reviews-HERO_La_casa_del_Burger-Predazzo_Province_of_Trento_Trentino_Alto_Adige.html"
            >
              <img
                src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2024_L.png"
                alt="TripAdvisor"
                className="widCOEImg"
                id="CDSWIDCOELOGO"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </a>
          </li>
        </ul>
      </div>

      <div id="TA_cdsscrollingravenarrow608" className="TA_cdsscrollingravenarrow">
        <ul id="BkOIx7NQg" className="TA_links NuFDlAublX" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li id="TN840IbaF" className="QG1uCoKbRBhw" style={{ display: 'inline-block' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Restaurant_Review-g670804-d15668261-Reviews-HERO_La_casa_del_Burger-Predazzo_Province_of_Trento_Trentino_Alto_Adige.html"
            >
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_vertical.svg"
                alt="TripAdvisor"
                className="widEXCIMG"
                id="CDSWIDEXCLOGO"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
