export interface NewsItem {
  id: string;
  category: 'Planung' | 'Baustart' | 'Baufortschritt' | 'Fertigstellung';
  title: string;
  location?: string;
  source?: string;
  description: string;
  image: string;
  images?: string[]; // Optional multiple images for slideshow
  year: string;
  date: string; // Publication date in format DD.MM.YYYY
  projectId?: string; // Optional link to related project
  linkUrl: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    category: 'Fertigstellung',
    title: 'Fertigstellung der Wohnüberbauung',
    location: 'Wallbach, Schweiz',
    description: 'Die Wohnüberbauung in Wallbach wurde erfolgreich fertiggestellt. Die Anlage verbindet hochwertigen Wohnraum mit klarer architektonischer Sprache und schafft loftartige Räume mit Galerieebenen in den Dachgeschossen.',
    image: 'https://images.unsplash.com/photo-1765920774482-00ddfe797342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBtdXNldW0lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA5MDgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1765920774482-00ddfe797342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBtdXNldW0lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA5MDgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1737642256355-af3ecc10c5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA5MDkzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764925400996-6bd368c19450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZhY2FkZSUyMGRldGFpbHxlbnwxfHx8fDE3NzA5MDkzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1701789668339-140f67db12df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzIxOTI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2024',
    date: '15.11.2024',
    projectId: '1',
    linkUrl: '/news/1'
  },
  {
    id: '2',
    category: 'Baufortschritt',
    title: 'Rohbau abgeschlossen',
    location: 'Pratteln, Schweiz',
    description: 'Der Rohbau des Wohnhauses in Pratteln wurde planmässig fertiggestellt. Die tragenden Strukturen und Aussenwände stehen, der Innenausbau kann beginnen.',
    image: 'https://images.unsplash.com/photo-1767122225720-1d11b6a7f79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHByb2dyZXNzfGVufDF8fHx8MTc3MTA5Njk1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1767122225720-1d11b6a7f79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHByb2dyZXNzfGVufDF8fHx8MTc3MTA5Njk1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1766595680977-fd4818afa337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBmb3VuZGF0aW9ufGVufDF8fHx8MTc3MjE5MjkxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759130396155-70cf3fe17e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMHByb2dyZXNzJTIwY3JhbmV8ZW58MXx8fHwxNzcyMTkyOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768321903885-d0a6798485d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwY29uc3RydWN0aW9uJTIwaW50ZXJpb3IlMjB3b3JrfGVufDF8fHx8MTc3MjE5MjkxOHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2025',
    date: '03.02.2025',
    projectId: '2',
    linkUrl: '/news/2'
  },
  {
    id: '3',
    category: 'Baustart',
    title: 'Spatenstich für Sanierung MFH',
    location: 'Basel, Schweiz',
    description: 'Der Baustart für die Sanierung des Mehrfamilienhauses in Basel ist erfolgt. Nach den Aushubarbeiten wird die Glaskuppel im Dachgeschoss eingebaut.',
    image: 'https://images.unsplash.com/photo-1762160974215-b501fe23b747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYmVnaW5uaW5nfGVufDF8fHx8MTc3MTE2MTAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1762160974215-b501fe23b747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYmVnaW5uaW5nfGVufDF8fHx8MTc3MTE2MTAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1766595680977-fd4818afa337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBmb3VuZGF0aW9ufGVufDF8fHx8MTc3MjE5MjkxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768321903885-d0a6798485d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwY29uc3RydWN0aW9uJTIwaW50ZXJpb3IlMjB3b3JrfGVufDF8fHx8MTc3MjE5MjkxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759244567819-e1c156060857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lsaWdodCUyMHdpbmRvdyUyMHJvb2Z0b3AlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyMTkyOTE4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2025',
    date: '20.01.2025',
    projectId: '3',
    linkUrl: '/news/3'
  },
  {
    id: '4',
    category: 'Planung',
    title: 'Baugenehmigung erteilt',
    location: 'Birsfelden, Schweiz',
    description: 'Die Baugenehmigung für beide Mehrfamilienhäuser in Birsfelden wurde erteilt. Die Ausführungsplanung wird finalisiert, Baustart ist für Frühjahr 2025 geplant.',
    image: 'https://images.unsplash.com/photo-1742415106102-77bbfe14b872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcGxhbm5pbmclMjBibHVlcHJpbnRzfGVufDF8fHx8MTc3MTE2MTAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1742415106102-77bbfe14b872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcGxhbm5pbmclMjBibHVlcHJpbnRzfGVufDF8fHx8MTc3MTE2MTAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764740109279-c7a8abd78821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwcGxhbm5pbmclMjBkZXNrfGVufDF8fHx8MTc3MjE5MjkyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760192019665-ec3576e19921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGhvdXNpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzIxOTI5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2024',
    date: '15.12.2024',
    projectId: '4',
    linkUrl: '/news/4'
  },
  {
    id: '5',
    category: 'Fertigstellung',
    title: 'Fertigstellung Doppelhaus am Waldrand',
    location: 'Wallbach, Schweiz',
    description: 'Das Doppelhaus am Waldrand von Wallbach wurde fertiggestellt. Die klare volumetrische Struktur mit grossflächigen Verglasungen schafft eine enge Beziehung zur umgebenden Landschaft.',
    image: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1763703337532-eb7fbaa46126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nbGUlMjBmYW1pbHklMjBob21lJTIwZ2FyZGVufGVufDF8fHx8MTc3MjE5MjkxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760341841961-2ef454d38725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmYWNhZGUlMjBuYXR1cmFsJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzcyMTkyOTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767725106455-a69c3d9803fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJhbGNvbnklMjB0ZXJyYWNlJTIwdmlld3xlbnwxfHx8fDE3NzIxOTI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2024',
    date: '12.07.2024',
    projectId: '5',
    linkUrl: '/news/5'
  },
  {
    id: '6',
    category: 'Fertigstellung',
    title: 'Neugestaltung Beauty-Salon abgeschlossen',
    location: 'Basel, Schweiz',
    description: 'Der Beauty-Salon in Basel wurde vollständig neu gestaltet. Klare Linien, zurückhaltende Materialien und präzise Lichtführung schaffen eine ruhige, hochwertige Atmosphäre.',
    image: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1763612812693-9b021dfa016b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYmVhdXR5JTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIxOTI5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1771678040129-477a44bd37ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzcGFjZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcyMTkyOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1701789668339-140f67db12df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzIxOTI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2024',
    date: '03.06.2024',
    projectId: '6',
    linkUrl: '/news/6'
  },
  {
    id: '7',
    category: 'Fertigstellung',
    title: 'Mehrfamilienhaus fertiggestellt',
    location: 'Biel-Benken, Schweiz',
    description: 'Das Mehrfamilienhaus in Biel-Benken wurde fertiggestellt. Die Setzung reagiert auf die Topografie und orientiert die Wohnräume gezielt zur Landschaft mit grosszügigen Verglasungen.',
    image: 'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDg4NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1548123834-a01c85936eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGNvdXJ0eWFyZHxlbnwxfHx8fDE3NzA5MDkzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759503393199-c86cbd2c44df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY291cnR5YXJkJTIwZ3JlZW58ZW58MXx8fHwxNzcyMTkyOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767725106455-a69c3d9803fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJhbGNvbnklMjB0ZXJyYWNlJTIwdmlld3xlbnwxfHx8fDE3NzIxOTI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2024',
    date: '18.04.2024',
    projectId: '7',
    linkUrl: '/news/7'
  },
  {
    id: '8',
    category: 'Baufortschritt',
    title: 'Fassadenarbeiten im vollen Gang',
    location: 'Magden, Schweiz',
    description: 'Die Fassadenarbeiten am Mehrfamilienhaus in Magden schreiten planmässig voran. Die Verkleidung der Aussenwände wird in den kommenden Wochen abgeschlossen.',
    image: 'https://images.unsplash.com/photo-1767122225720-1d11b6a7f79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHByb2dyZXNzfGVufDF8fHx8MTc3MTA5Njk1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1767122225720-1d11b6a7f79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHByb2dyZXNzfGVufDF8fHx8MTc3MTA5Njk1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759130396155-70cf3fe17e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMHByb2dyZXNzJTIwY3JhbmV8ZW58MXx8fHwxNzcyMTkyOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639818019702-bba773c78923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG91c2UlMjBmYWNhZGUlMjBkZXRhaWx8ZW58MXx8fHwxNzcyMTkyOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764080400291-94c14583fdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aW5kb3dzJTIwZmFjYWRlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzIxOTI5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2024',
    date: '10.11.2024',
    projectId: '8',
    linkUrl: '/news/8'
  },
  {
    id: '9',
    category: 'Planung',
    title: 'Vorprojektphase abgeschlossen',
    location: 'Wallbach, Schweiz',
    description: 'Die Vorprojektphase für die Wohnüberbauung wurde abgeschlossen. Das Konzept wurde von den Behörden positiv aufgenommen, die Baubewilligung wird eingereicht.',
    image: 'https://images.unsplash.com/photo-1742415106102-77bbfe14b872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcGxhbm5pbmclMjBibHVlcHJpbnRzfGVufDF8fHx8MTc3MTE2MTAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1742415106102-77bbfe14b872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcGxhbm5pbmclMjBibHVlcHJpbnRzfGVufDF8fHx8MTc3MTE2MTAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764740109279-c7a8abd78821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwcGxhbm5pbmclMjBkZXNrfGVufDF8fHx8MTc3MjE5MjkyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1765920774482-00ddfe797342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBtdXNldW0lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA5MDgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2024',
    date: '08.10.2024',
    projectId: '1',
    linkUrl: '/news/9'
  },
  {
    id: '10',
    category: 'Baustart',
    title: 'Baustelleneinrichtung abgeschlossen',
    location: 'Wallbach, Schweiz',
    description: 'Die Baustelleneinrichtung für das Doppelhaus am Waldrand ist abgeschlossen. Die Aushubarbeiten beginnen nächste Woche, Fundamente werden im März betoniert.',
    image: 'https://images.unsplash.com/photo-1762160974215-b501fe23b747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYmVnaW5uaW5nfGVufDF8fHx8MTc3MTE2MTAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1762160974215-b501fe23b747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYmVnaW5uaW5nfGVufDF8fHx8MTc3MTE2MTAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1766595680977-fd4818afa337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBmb3VuZGF0aW9ufGVufDF8fHx8MTc3MjE5MjkxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759130396155-70cf3fe17e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMHByb2dyZXNzJTIwY3JhbmV8ZW58MXx8fHwxNzcyMTkyOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    year: '2024',
    date: '25.02.2024',
    projectId: '5',
    linkUrl: '/news/10'
  }
];
