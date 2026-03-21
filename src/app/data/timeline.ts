export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '1998',
    title: 'Beginn der Tätigkeit',
    description: 'Paride Visca beginnt eigenständig in Basel mit der Planung kleiner Wohnbauten und Umbauten, Aufbau eines regionalen Netzwerks aus Fachbetrieben.'
  },
  {
    id: 2,
    year: '2003',
    title: 'Erweiterung der Aktivitäten',
    description: 'Verstärkte Ausrichtung auf Mehrfamilienhäuser und komplexere Sanierungsaufgaben im Raum Basel.'
  },
  {
    id: 3,
    year: '2008',
    title: 'Erste grössere Wohnprojekte',
    description: 'Umsetzung grösserer Wohnüberbauungen, Ausbau der Kapazitäten durch erste Mitarbeitende.'
  },
  {
    id: 4,
    year: '2012',
    title: 'Partnerschaft mit Reto Seghers',
    description: 'Reto Seghers tritt als wichtiger Partner in die Praxis ein, ergänzt Kompetenzen in Bauleitung und Projektsteuerung.'
  },
  {
    id: 5,
    year: '2015',
    title: 'Professionalisierung der Praxis',
    description: 'Fortlaufende Optimierung der internen Abläufe, verstärkte Verantwortung in der Projektleitung und Begleitung komplexerer Bauvorhaben.'
  },
  {
    id: 6,
    year: '2018',
    title: 'Gründung der AG',
    description: 'Formale Eintragung als PV Architektur & Baudienstleistungen AG, Ausbau der Leistungen von der Planung über Projektleitung bis zur Realisierung.'
  },
  {
    id: 7,
    year: '2021',
    title: 'Netzwerk mit Partnerfirmen',
    description: 'Vertiefte Zusammenarbeit mit spezialisierten Fachpartnern zur Sicherung gleichbleibender Qualität über verschiedene Bauaufgaben hinweg.'
  },
  {
    id: 8,
    year: '2024',
    title: 'Über 100 realisierte Projekte',
    description: 'Kontinuierliche Betreuung zahlreicher Bauvorhaben in Wohn- und Gewerbebau, Etablierung als verlässlicher regionaler Partner.'
  }
];