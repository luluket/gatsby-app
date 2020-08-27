import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Sponsors from "../components/sponsors.js"
export default function contact() {
  return (
    <Layout>
      <Title title="Kontaktirajte nas"></Title>

      <div className="container mt-3">
        <div className="font-weight-bold py-2">+385 21 344 6859</div>
        <div className="font-weight-bold py-2">
          Ruđera Boškovića 32, 10000 Split
        </div>
        <div className="font-weight-bold py-2">info@ffacility.hr</div>
        <p>
          Ako ste u nedoumici, imamo popis često postavljanih pitanja koja će
          vam pomoći da koristite naše stranice, pokazati kako registrirati
          račun i pratiti svoje narudžbe.
        </p>
        <span className="font-weight-bold">Email:</span>
        <p>
          Ako ne možete pronaći odgovor na vaše pitanje, pošaljite poruku našem
          timu za korisnike putem centra za poruke na vašem računu. Uvijek
          dajemo sve kako bi odgovorili na vaše upite u roku 24h.
        </p>
        <span className="font-weight-bold">Pohvale i prijedlozi:</span>
        <p>
          Uvijek težimo boljoj usluzi i želimo saznati vaša mišljenja. Komentari
          o našoj usluzi, čak i nove ideje čine vaše iskustvo s nama još boljim
          i uvijek su dobrodošli.
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h6 className="border-bottom p-2">Pomoć i informacije</h6>
            <ul className="list-group-flush">
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.34926478,14.6507352 C10.6183524,15.9198228 11.9635202,16.7318171 13.2447593,17.2840269 L16.4221165,14.1066697 C16.7225956,13.8061906 17.2097685,13.8061906 17.5102476,14.1066697 L20.7746407,17.3710628 C21.0751198,17.6715419 21.0751198,18.1587148 20.7746407,18.4591939 L19.9585424,19.2752921 C18.4451709,20.7886636 16.324403,21.2121111 13.9738217,20.9074887 C11.5280175,20.5905259 9.09140996,19.7137455 6.62893719,17.3710628 C4.2862545,14.90859 3.40947407,12.4719825 3.09251131,10.0261783 C2.78788892,7.67559701 3.21133638,5.55482909 4.72470787,4.0414576 L5.54080615,3.22535932 C5.84128524,2.92488023 6.3284581,2.92488023 6.62893719,3.22535932 L9.8933303,6.48975243 C10.1938094,6.79023152 10.1938094,7.27740438 9.8933303,7.57788347 L6.71597306,10.7552407 C7.26818295,12.0364798 8.08017716,13.3816476 9.34926478,14.6507352 L9.34926478,14.6507352 Z"></path>
                </svg>
                služba za korisnike
              </li>
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,14.4452017 21.1179427,16.7564187 19.5448599,18.5633646 L18.0364037,17.2501397 C19.2954713,15.8038921 20,13.9578458 20,12 C20,7.581722 16.418278,4 12,4 L12,6 L8,3 L12,-1.71807013e-13 L12,2 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,9.55479826 2.88205727,7.24358127 4.45514006,5.43663535 L5.96359628,6.74986033 C4.70452866,8.19610785 4,10.0421542 4,12 C4,16.418278 7.581722,20 12,20 L12,18 L16,21 L12,24 L12,22 Z"></path>
                </svg>
                pravila o povratu
              </li>
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.83652345,17.9961822 C9.3919824,19.723605 7.82412481,21 5.958194,21 C4.09226318,21 2.52440559,19.723605 2.07986455,17.9961822 L1,17.9961822 L1,4 L15.9694148,4 L15.9694148,6.00193404 C18.6390737,5.98791883 19.9739032,5.98091123 19.9739032,5.98091123 C19.9739032,5.98091123 20.9750253,7.64969887 22.9772694,10.9872742 L23,18.0240497 L21.8455118,18.013418 C21.3950059,19.7320885 19.8313785,21 17.971659,21 C16.1057282,21 14.5378706,19.723605 14.0933296,17.9961822 L9.83652345,17.9961822 Z M14.9682928,7.9834564 L14.9682928,11.9885467 L20.9750253,11.9885467 L20.9750253,10.9872742 L18.9727811,7.9834564 L14.9682928,7.9834564 Z M5.958194,18.9974548 C7.06400292,18.9974548 7.96043817,18.1008848 7.96043817,16.9949097 C7.96043817,15.8889345 7.06400292,14.9923645 5.958194,14.9923645 C4.85238508,14.9923645 3.95594983,15.8889345 3.95594983,16.9949097 C3.95594983,18.1008848 4.85238508,18.9974548 5.958194,18.9974548 Z M17.971659,18.9974548 C19.0774679,18.9974548 19.9739032,18.1008848 19.9739032,16.9949097 C19.9739032,15.8889345 19.0774679,14.9923645 17.971659,14.9923645 C16.8658501,14.9923645 15.9694148,15.8889345 15.9694148,16.9949097 C15.9694148,18.1008848 16.8658501,18.9974548 17.971659,18.9974548 Z"></path>
                </svg>
                informacije o dostavi
              </li>
            </ul>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <h6 className="border-bottom p-2">Informacije o tvrtki</h6>
            <ul className="list-group-flush">
              <li className="list-group-item ">o nama</li>
              <li className="list-group-item">pravila privatnosti</li>
              <li className="list-group-item">uvjeti i pravila</li>
            </ul>
          </div>
        </div>

        <Sponsors />
      </div>
    </Layout>
  )
}
