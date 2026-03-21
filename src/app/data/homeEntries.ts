export interface HomeEntry {
  id: string;
  category: 'Review' | 'Under Construction' | 'Publication' | 'Award';
  title: string;
  location?: string;
  source?: string;
  description: string;
  images: [string, string]; // Always two images
  linkText: string;
  linkUrl: string;
}

export const homeEntries: HomeEntry[] = [
  {
    id: '1',
    category: 'Review',
    title: 'Sportscapes',
    location: 'Kunstmuseum Basel Extension',
    source: 'aboutplatform.com',
    description: 'A comprehensive review exploring the intersection of sports infrastructure and architectural intervention. The article examines how contemporary architecture shapes athletic spaces and their impact on urban environments.',
    images: [
      'https://images.unsplash.com/photo-1737642256355-af3ecc10c5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA5MDkzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668133300525-58a15cc890fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwaG90b2dyYXBoeSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDkxMTI3NHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    linkText: 'Read more',
    linkUrl: '/news/1'
  },
  {
    id: '2',
    category: 'Under Construction',
    title: 'Housing Complex Seefeld',
    location: 'Zürich, Switzerland',
    description: 'Construction progress continues on schedule. The primary structure has been completed and facade installation is underway. The building demonstrates our approach to contemporary urban housing.',
    images: [
      'https://images.unsplash.com/photo-1698234790025-4f3faa2a2df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwcHJvZ3Jlc3N8ZW58MXx8fHwxNzcwOTExMjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1640702603390-98c659d55ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwY29tcGxleCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA5MDgwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    linkText: 'Project: Housing Complex Seefeld',
    linkUrl: '/projekte/6'
  },
  {
    id: '3',
    category: 'Publication',
    title: 'Material Strategies',
    location: 'Office Building Europaallee',
    source: 'Werk, Bauen + Wohnen',
    description: 'An in-depth analysis of material choices in contemporary office architecture. The publication examines how material decisions influence spatial experience and environmental performance.',
    images: [
      'https://images.unsplash.com/photo-1770281380438-63ff4ba9cee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwbWF0ZXJpYWwlMjBkZXRhaWx8ZW58MXx8fHwxNzcwOTExMjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1601307131573-12f1b94f68fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA4NzQ0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    linkText: 'Read more',
    linkUrl: '/news/3'
  },
  {
    id: '4',
    category: 'Award',
    title: 'Best Cultural Building 2021',
    location: 'Art Gallery Renovation, Munich',
    source: 'Deutsches Architektur Preis',
    description: 'Our renovation of the historic art gallery has been recognized with the German Architecture Prize. The jury praised the careful balance between preservation and contemporary intervention.',
    images: [
      'https://images.unsplash.com/photo-1680422252857-3b13987bd7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwOTA4MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBzcGFjZXxlbnwxfHx8fDE3NzA5MTEyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    linkText: 'Project: Art Gallery Renovation',
    linkUrl: '/projekte/9'
  },
  {
    id: '5',
    category: 'Under Construction',
    title: 'Municipal Theatre',
    location: 'Graz, Austria',
    description: 'The theatre project is entering its final construction phase. Interior finishes are being installed and technical systems are being commissioned. Opening is scheduled for autumn 2025.',
    images: [
      'https://images.unsplash.com/photo-1701275998609-119e2c09f443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzA5MDgwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1515100235140-6cb3498e8031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYXVkaXRvcml1bXxlbnwxfHx8fDE3NzA5MDkzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    linkText: 'Project: Municipal Theatre',
    linkUrl: '/projekte/5'
  }
];