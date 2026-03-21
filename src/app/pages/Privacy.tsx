import { ScrollReveal } from '../components/ScrollReveal';

export function Privacy() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-8">
      {/* Page Header */}
      <div className="pt-2 pb-4 mb-2">
        <ScrollReveal>
          <h1 className="text-xl text-white font-heading">Datenschutzerklärung</h1>
        </ScrollReveal>
      </div>

      {/* Content */}
      <div className="max-w-[900px] pb-24">
        <div className="text-sm text-[#999999] leading-loose space-y-8">
          <ScrollReveal delay={0}>
            <p>
              Wir bei PV-Architektur nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">1. Verantwortlicher</h3>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-3">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Stapfelberg+9,+Basel,+Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block cursor-pointer"
                >
                  <span className="group-hover:text-white transition-colors duration-300">PV-Architektur</span><br />
                  <span className="group-hover:text-white transition-colors duration-300">Stapfelberg 9</span><br />
                  <span className="group-hover:text-white transition-colors duration-300">Basel, Schweiz</span>
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

          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">2. Erhebung und Verarbeitung personenbezogener Daten</h3>
              <p>
                Wir erheben und verarbeiten personenbezogene Daten ausschließlich im Rahmen unseres Kontaktformulars. Wenn Sie das Kontaktformular auf unserer Website nutzen, um mit uns in Verbindung zu treten, werden die folgenden Daten erhoben:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Nachrichtentext</li>
              </ul>
              <p className="mt-3">
                Diese Daten werden nur zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Ohne Ihre ausdrückliche Zustimmung werden diese Daten nicht an Dritte weitergegeben.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">3. Rechtsgrundlage der Verarbeitung</h3>
              <p>
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Unser berechtigtes Interesse besteht darin, Ihre Anfrage zu beantworten und Ihnen den bestmöglichen Service zu bieten.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">4. Speicherdauer</h3>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">5. Ihre Rechte</h3>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">6. Sicherheit</h3>
              <p>
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns verwalteten Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div>
              <h3 className="text-base mb-4 text-white font-heading">7. Änderungen dieser Datenschutzerklärung</h3>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div>
              <p>Stand: Mai 2024</p>
              <p className="mt-4">
                Wenn Sie Fragen zu dieser Datenschutzerklärung haben, wenden Sie sich bitte direkt an uns.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}