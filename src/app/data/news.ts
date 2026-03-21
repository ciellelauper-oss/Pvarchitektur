export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
}

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Kunstmuseum Basel Extension awarded RIBA International Prize',
    date: '12.02.2026',
    content: 'The Kunstmuseum Basel Extension has been awarded the RIBA International Prize 2026. The jury praised the building\'s careful integration with the existing museum and its creation of contemplative spaces for art.'
  },
  {
    id: '2',
    title: 'University Library Extension construction begins',
    date: '15.01.2026',
    content: 'Construction has begun on the University Library Extension in Vienna. The project is scheduled for completion in 2027.'
  },
  {
    id: '3',
    title: 'Exhibition at Architekturzentrum Wien',
    date: '03.12.2025',
    content: 'Selected projects will be exhibited at the Architekturzentrum Wien from December 2025 to March 2026 as part of the group exhibition "Architecture and Context".'
  },
  {
    id: '4',
    title: 'Mixed Use Development Viadukt completed',
    date: '28.11.2025',
    content: 'The Mixed Use Development Viadukt in Bern has been completed and handed over to the client. The project establishes a new urban quarter in the city center.'
  },
  {
    id: '5',
    title: 'Lecture at ETH Zürich',
    date: '15.10.2025',
    content: 'The practice will present recent work in a lecture at ETH Zürich as part of the Architecture Lecture Series.'
  }
];
