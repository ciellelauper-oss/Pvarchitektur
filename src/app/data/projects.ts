export type ProjectType = 'EFH' | 'MFH' | 'Wohnüberbauung' | 'Gewerbe';
export type ProjectStatus = 'Abgeschlossen' | 'In Ausführung' | 'Wettbewerb';
export type ProjectService = 'Neubau' | 'Sanierung / Umbau';

export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  status: ProjectStatus;
  type: ProjectType;
  service: ProjectService;
  description: string;
  coverImage: string;
  images: string[];
  team?: string;
  collaborators?: string;
  photographer?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Wohnüberbauung',
    location: 'Wallbach, Schweiz',
    year: '2024',
    status: 'Abgeschlossen',
    type: 'Wohnüberbauung',
    service: 'Neubau',
    description: 'Die Wohnüberbauung in Wallbach liegt im ländlich geprägten Kontext am Rhein. Die Anlage verbindet Grosszügigkeit mit einer klaren architektonischen Sprache und schafft hochwertigen Wohnraum mit ruhiger Ausstrahlung.\\n\\nDie Wohnungen sind offen organisiert und profitieren von durchdachten Grundrissen. In den Dachgeschossen entstehen loftartige Räume mit Galerieebenen, die zusätzliche Raumtiefe und flexible Nutzung ermöglichen.\\n\\nMaterialität und Innenausbau folgen einem zeitlosen Konzept. Reduzierte Details, klare Linien und eine zurückhaltende Gestaltung bilden den Rahmen für individuelles Wohnen in einem dörflichen Umfeld.',
    coverImage: 'https://images.unsplash.com/photo-1765920774482-00ddfe797342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBtdXNldW0lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA5MDgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1765920774482-00ddfe797342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBtdXNldW0lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA5MDgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1737642256355-af3ecc10c5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA5MDkzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764925400996-6bd368c19450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZhY2FkZSUyMGRldGFpbHxlbnwxfHx8fDE3NzA5MDkzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1701789668339-140f67db12df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzIxOTI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767725106455-a69c3d9803fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJhbGNvbnklMjB0ZXJyYWNlJTIwdmlld3xlbnwxfHx8fDE3NzIxOTI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759503393199-c86cbd2c44df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY291cnR5YXJkJTIwZ3JlZW58ZW58MXx8fHwxNzcyMTkyOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    team: 'Projektleitung: Paride Visca, Projektarchitekt: Reto Seghers',
    collaborators: 'Bauingenieur: Ingenieurbüro Meyer AG'
  },
  {
    id: '2',
    title: 'Wohnhaus',
    location: 'Pratteln, Schweiz',
    year: '2024',
    status: 'Abgeschlossen',
    type: 'EFH',
    service: 'Neubau',
    description: 'Das Wohnhaus in Pratteln wurde als individuell entwickelter Neubau konzipiert. Architektur, Grundriss und Materialisierung sind konsequent auf die Bedürfnisse der Bauherrschaft abgestimmt.\\n\\nDer Entwurf verbindet eine eigenständige Formensprache mit hoher konstruktiver Qualität. Räume sind präzise proportioniert und ermöglichen fliessende Übergänge zwischen Innen- und Aussenbereich.\\n\\nDer Innenausbau folgt einem klaren, reduzierten Konzept. Hochwertige Materialien und sorgfältig ausgearbeitete Details prägen das Haus und verleihen ihm eine ruhige, dauerhafte Atmosphäre.',
    coverImage: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1763703337532-eb7fbaa46126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nbGUlMjBmYW1pbHklMjBob21lJTIwZ2FyZGVufGVufDF8fHx8MTc3MjE5MjkxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1770786174932-293eaf17f919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGVudHJhbmNlJTIwZG9vcnxlbnwxfHx8fDE3NzIxOTI5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1704428381527-71b82d7fc7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjB3aGl0ZXxlbnwxfHx8fDE3NzIxMTkyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwYnJpZ2h0fGVufDF8fHx8MTc3MjE5MjkxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1704040686324-e0552fbc9167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdGFpcmNhc2V8ZW58MXx8fHwxNzcyMTkyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    team: 'Projektleitung: Paride Visca, Projektarchitekt: Reto Seghers',
    collaborators: 'Bauingenieur: Ingenieurbüro Meyer AG'
  },
  {
    id: '3',
    title: 'Mehrfamilienhaus Sanierung',
    location: 'Basel, Schweiz',
    year: '2024',
    status: 'Abgeschlossen',
    type: 'MFH',
    service: 'Sanierung / Umbau',
    description: 'Im Rahmen der Sanierung eines Mehrfamilienhauses in Basel wurde das Dachgeschoss grundlegend neu interpretiert. Der Einbau einer Glaskuppel in den bestehenden Dachstuhl bringt zusätzliches Tageslicht in den Raum und schafft eine neue räumliche Qualität.\\n\\nDie Intervention verbindet Bestand und zeitgenössische Architektur. Die Konstruktion bleibt ablesbar, während der Ausbau mit präzisen Details und hochwertigen Materialien umgesetzt wurde.\\n\\nSo entsteht im Dachgeschoss ein heller, offener Wohnraum, der den Charakter des Bestands respektiert und zugleich eine eigenständige Atmosphäre entwickelt.',
    coverImage: 'https://images.unsplash.com/photo-1601307131573-12f1b94f68fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA4NzQ0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1601307131573-12f1b94f68fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA4NzQ0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759244567819-e1c156060857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lsaWdodCUyMHdpbmRvdyUyMHJvb2Z0b3AlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyMTkyOTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768321903885-d0a6798485d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwY29uc3RydWN0aW9uJTIwaW50ZXJpb3IlMjB3b3JrfGVufDF8fHx8MTc3MjE5MjkxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760192019665-ec3576e19921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGhvdXNpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzIxOTI5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760227013293-becf5cb42325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHN0YWlyY2FzZSUyMGRldGFpbHxlbnwxfHx8fDE3NzA5MDkzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    team: 'Projektleitung: Paride Visca, Projektarchitekt: Reto Seghers',
    collaborators: 'Bauingenieur: Ingenieurbüro Meyer AG'
  },
  {
    id: '4',
    title: 'Mehrfamilienhäuser',
    location: 'Birsfelden, Schweiz',
    year: '2024',
    status: 'Abgeschlossen',
    type: 'MFH',
    service: 'Neubau',
    description: 'In Birsfelden entstanden zwei Mehrfamilienhäuser mit jeweils vier Etagenwohnungen. Die Baukörper sind klar gegliedert und fügen sich selbstverständlich in das bestehende Umfeld ein.\\n\\nGrosszügige Wohnbereiche und durchgehende Grundrisse schaffen helle, offene Räume. Die Terrassen orientieren sich ins Grüne und erweitern den Wohnraum nach aussen.\\n\\nArchitektur, Materialwahl und Detailausbildung folgen einem ruhigen, zeitlosen Konzept. Ziel war es, langlebige Wohnqualität mit einer präzisen, zurückhaltenden Gestaltung zu verbinden.',
    coverImage: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768118421324-8bae7959ad23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYmFsY29ueXxlbnwxfHx8fDE3NzA5MDkzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1548123834-a01c85936eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGNvdXJ0eWFyZHxlbnwxfHx8fDE3NzA5MDkzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1714366451508-ac5e5090c4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjEzNDU0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639818019702-bba773c78923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG91c2UlMjBmYWNhZGUlMjBkZXRhaWx8ZW58MXx8fHwxNzcyMTkyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764080400291-94c14583fdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aW5kb3dzJTIwZmFjYWRlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzIxOTI5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    team: 'Projektleitung: Paride Visca, Projektarchitekt: Reto Seghers',
    collaborators: 'Bauingenieur: Ingenieurbüro Meyer AG'
  },
  {
    id: '5',
    title: 'Doppelhaus',
    location: 'Wallbach, Schweiz',
    year: '2024',
    status: 'Abgeschlossen',
    type: 'EFH',
    service: 'Neubau',
    description: 'Am Waldrand von Wallbach entstand ein Doppel-Einfamilienhaus mit klarer volumetrischer Struktur. Die beiden Einheiten sind präzise gegliedert und bilden eine ruhige architektonische Einheit.\\n\\nEin überdachter Aussenbereich fasst Eingang und Parkierung zusammen und definiert den Übergang zwischen öffentlichem und privatem Raum.\\n\\nDas offene Raumkonzept mit grossflächigen Verglasungen bringt viel Tageslicht ins Innere und schafft eine enge Beziehung zur umgebenden Landschaft. Innen- und Aussenraum sind visuell miteinander verbunden und unterstützen ein grosszügiges Wohngefühl.\\n\\nMaterialität und Detailausbildung folgen einer reduzierten, zeitlosen Haltung.',
    coverImage: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1763703337532-eb7fbaa46126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nbGUlMjBmYW1pbHklMjBob21lJTIwZ2FyZGVufGVufDF8fHx8MTc3MjE5MjkxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760341841961-2ef454d38725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmYWNhZGUlMjBuYXR1cmFsJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzcyMTkyOTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1770786174932-293eaf17f919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGVudHJhbmNlJTIwZG9vcnxlbnwxfHx8fDE3NzIxOTI5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwYnJpZ2h0fGVufDF8fHx8MTc3MjE5MjkxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767725106455-a69c3d9803fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJhbGNvbnklMjB0ZXJyYWNlJTIwdmlld3xlbnwxfHx8fDE3NzIxOTI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    team: 'Projektleitung: Paride Visca, Projektarchitekt: Reto Seghers',
    collaborators: 'Bauingenieur: Ingenieurbüro Meyer AG'
  },
  {
    id: '6',
    title: 'Beauty-Salon',
    location: 'Basel, Schweiz',
    year: '2024',
    status: 'Abgeschlossen',
    type: 'Gewerbe',
    service: 'Sanierung / Umbau',
    description: 'Für einen Beauty-Salon in Basel wurde ein bestehender Innenraum vollständig neu gestaltet. Ziel war es, eine ruhige, hochwertige Atmosphäre zu schaffen, die Professionalität und Wohlbefinden verbindet.\\n\\nKlare Linien, zurückhaltende Materialien und eine präzise Lichtführung strukturieren den Raum. Die Zonierung trennt Empfang, Behandlungsbereiche und Rückzugsräume, ohne die Offenheit des Grundrisses zu verlieren.\\n\\nDie Gestaltung folgt einem reduzierten Konzept, das die Nutzung in den Mittelpunkt stellt und eine zeitlose, elegante Umgebung für Kundschaft und Personal schafft.',
    coverImage: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1763612812693-9b021dfa016b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYmVhdXR5JTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIxOTI5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1771678040129-477a44bd37ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzcGFjZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcyMTkyOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1701789668339-140f67db12df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzIxOTI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639818019702-bba773c78923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG91c2UlMjBmYWNhZGUlMjBkZXRhaWx8ZW58MXx8fHwxNzcyMTkyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    team: 'Projektleitung: Paride Visca, Projektarchitekt: Reto Seghers',
    collaborators: 'Bauingenieur: Ingenieurbüro Meyer AG'
  },
  {
    id: '7',
    title: 'Mehrfamilienhaus',
    location: 'Biel-Benken, Schweiz',
    year: '2024',
    status: 'Abgeschlossen',
    type: 'MFH',
    service: 'Neubau',
    description: 'In Biel-Benken entstand ein Mehrfamilienhaus in unmittelbarer Nähe zum Naherholungsgebiet mit Blick ins Leimental. Die Setzung des Baukörpers reagiert auf die Topografie und orientiert die Wohnräume gezielt zur Landschaft.\\n\\nGrosszügige Verglasungen und klar strukturierte Grundrisse schaffen helle, offene Räume mit starkem Bezug zur Umgebung. Aussenräume erweitern die Wohnungen und verstärken die Verbindung zwischen Innen und Natur.\\n\\nArchitektur und Materialisierung folgen einem reduzierten, zeitlosen Konzept mit Fokus auf langlebiger Wohnqualität.',
    coverImage: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1548123834-a01c85936eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGNvdXJ0eWFyZHxlbnwxfHx8fDE3NzA5MDkzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759503393199-c86cbd2c44df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY291cnR5YXJkJTIwZ3JlZW58ZW58MXx8fHwxNzcyMTkyOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767725106455-a69c3d9803fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJhbGNvbnklMjB0ZXJyYWNlJTIwdmlld3xlbnwxfHx8fDE3NzIxOTI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760192019665-ec3576e19921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGhvdXNpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzIxOTI5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764080400291-94c14583fdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aW5kb3dzJTIwZmFjYWRlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzIxOTI5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    team: 'Projektleitung: Paride Visca, Projektarchitekt: Reto Seghers',
    collaborators: 'Bauingenieur: Ingenieurbüro Meyer AG'
  },
  {
    id: '8',
    title: 'Mehrfamilienhaus',
    location: 'Magden, Schweiz',
    year: '2024',
    status: 'Abgeschlossen',
    type: 'MFH',
    service: 'Neubau',
    description: 'An der Bünn 17 in Magden entstand ein Mehrfamilienhaus mit klar gegliedertem Baukörper und ruhiger architektonischer Präsenz. Die Setzung reagiert auf die dörfliche Struktur und fügt sich selbstverständlich in das bestehende Umfeld ein.\\n\\nDie Wohnungen sind funktional organisiert und profitieren von grosszügigen Öffnungen mit natürlicher Belichtung. Aussenräume erweitern die Wohnflächen und schaffen eine direkte Verbindung zur Umgebung.\\n\\nMaterialität und Detailausbildung folgen einer reduzierten, zeitlosen Haltung. Ziel war es, langlebige Wohnqualität mit präziser architektonischer Klarheit zu verbinden.',
    coverImage: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768118421324-8bae7959ad23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYmFsY29ueXxlbnwxfHx8fDE3NzA5MDkzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1548123834-a01c85936eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGNvdXJ0eWFyZHxlbnwxfHx8fDE3NzA5MDkzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1714366451508-ac5e5090c4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjEzNDU0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639818019702-bba773c78923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG91c2UlMjBmYWNhZGUlMjBkZXRhaWx8ZW58MXx8fHwxNzcyMTkyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1704040686324-e0552fbc9167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdGFpcmNhc2V8ZW58MXx8fHwxNzcyMTkyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    team: 'Projektleitung: Paride Visca, Projektarchitekt: Reto Seghers',
    collaborators: 'Bauingenieur: Ingenieurbüro Meyer AG'
  }
];
