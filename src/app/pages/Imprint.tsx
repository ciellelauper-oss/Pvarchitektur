import { Link } from 'react-router';
import { ScrollReveal } from '../components/ScrollReveal';

export function Imprint() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-8">
      {/* Page Header */}
      <div className="pt-2 pb-4 mb-2">
        <ScrollReveal>
          <h1 className="text-xl text-white font-heading">Impressum</h1>
        </ScrollReveal>
      </div>

      {/* Content */}
      <div className="max-w-[900px] pb-24">
        <div className="text-sm text-[#999999] leading-loose space-y-8">
          <ScrollReveal delay={0}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">Verantwortliche Instanz:</h3>
              <p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Stapfelberg+9,+4051+Basel,+Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block cursor-pointer"
                >
                  <span className="group-hover:text-white transition-colors duration-300">PV-Architektur</span><br />
                  <span className="group-hover:text-white transition-colors duration-300">Stapfelberg 9</span><br />
                  <span className="group-hover:text-white transition-colors duration-300">4051 Basel</span><br />
                  <span className="group-hover:text-white transition-colors duration-300">Schweiz</span>
                </a><br />
                <a 
                  href="tel:+41619714435"
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  T +41 61 971 44 35
                </a><br />
                <a 
                  href="mailto:info@pv-architektur.ch"
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  info@pv-architektur.ch
                </a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">Vertretungsberechtigte Person:</h3>
              <p>Paride Visca</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">Haftungsausschluss:</h3>
              <p>
                Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p className="mt-3">
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">Urheberrecht:</h3>
              <p>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschliesslich PV-Architektur oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <p>
                Weitere Informationen finden Sie in unserer{' '}
                <Link 
                  to="/datenschutz" 
                  className="text-[#999999] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}