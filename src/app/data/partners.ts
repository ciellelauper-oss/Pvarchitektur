export interface Partner {
  id: string;
  name: string;
  category: string;
  description: string;
  services: string[];
  contact: {
    address: string;
    city: string;
    phone: string;
    email: string;
    website: string;
  };
  image: string;
  images: string[]; // Multiple images for slideshow
}

export const partners: Partner[] = [
  {
    id: "nodue-home",
    name: "NOIDUE home gmbh",
    category: "Immobilienentwicklung",
    description: "NOIDUE home gmbh ist spezialisiert auf die Entwicklung und Realisierung hochwertiger Wohn- und Geschäftsbauten. Mit langjähriger Erfahrung im Bereich Projektentwicklung und einem tiefen Verständnis für Marktbedürfnisse entstehen Immobilien, die Bestand haben.",
    services: [
      "Projektentwicklung",
      "Immobilienvermarktung",
      "Bauherrenvertretung",
      "Investorenberatung"
    ],
    contact: {
      address: "Lerchenweg 2",
      city: "CH-4303 Kaiseraugst",
      phone: "+41 79 829 52 41",
      email: "info@noidue-roomdesign.ch",
      website: "https://www.noidue-roomdesign.ch"
    },
    image: "https://images.unsplash.com/photo-1764019097365-639b5bd93cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1764019097365-639b5bd93cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1764019097365-639b5bd93cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "viba-immobilien",
    name: "VIBA Immobilien Kaiseraugst",
    category: "Immobilienverwaltung",
    description: "VIBA Immobilien bietet professionelle Dienstleistungen rund um Vermietung, Verwaltung und Verkauf von Wohn- und Gewerbeimmobilien. Unser Fokus liegt auf individueller Betreuung und langfristigen Partnerschaften.",
    services: [
      "Immobilienverwaltung",
      "Vermietung",
      "Verkauf",
      "Liegenschaftsunterhalt"
    ],
    contact: {
      address: "Rheinstrasse 45",
      city: "CH-4303 Kaiseraugst",
      phone: "+41 61 234 56 78",
      email: "info@viba-immobilien.ch",
      website: "https://www.viba-immobilien.ch"
    },
    image: "https://images.unsplash.com/photo-1649068491097-8d0d19a6e378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEwODc5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1649068491097-8d0d19a6e378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEwODc5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1649068491097-8d0d19a6e378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEwODc5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "noi-due-aurum",
    name: "NOIDUE AURUM",
    category: "Anlagenberatung",
    description: "NOIDUE AURUM – Anlagen, deren Glanz ausstrahlt. Wir beraten Sie umfassend bei Immobilieninvestments und entwickeln Strategien für nachhaltige Wertschöpfung. Diskretion, Kompetenz und Weitblick prägen unsere Arbeit.",
    services: [
      "Anlageberatung",
      "Portfolioentwicklung",
      "Investitionsanalyse",
      "Vermögensverwaltung"
    ],
    contact: {
      address: "Aeschenvorstadt 71",
      city: "CH-4051 Basel",
      phone: "+41 61 345 67 89",
      email: "info@noidueaurum.ch",
      website: "https://www.noidueaurum.ch"
    },
    image: "https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwY29uc3VsdGluZyUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwY29uc3VsdGluZyUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwY29uc3VsdGluZyUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "nodue-room-design",
    name: "NOIDUE room design",
    category: "Innenarchitektur",
    description: "NOIDUE room design gestaltet Innenräume mit Fokus auf Funktion, Ästhetik und Atmosphäre. Von der Konzeption bis zur finalen Umsetzung begleiten wir Sie bei der Realisierung individueller Raumkonzepte.",
    services: [
      "Innenarchitektur",
      "Möbeldesign",
      "Lichtplanung",
      "Materialberatung"
    ],
    contact: {
      address: "Spalenring 12",
      city: "CH-4055 Basel",
      phone: "+41 61 456 78 90",
      email: "info@nodue-roomdesign.ch",
      website: "https://www.nodue-roomdesign.ch"
    },
    image: "https://images.unsplash.com/photo-1680209081346-14756fdfa26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGZ1cm5pdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1680209081346-14756fdfa26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGZ1cm5pdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1680209081346-14756fdfa26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGZ1cm5pdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "reinpunkt",
    name: "reinPunkt",
    category: "Bauleitung & Projektmanagement",
    description: "reinPunkt steht für präzise Bauleitung und professionelles Projektmanagement. Mit klarer Kommunikation und strukturierter Abwicklung stellen wir sicher, dass Bauprojekte termingerecht und budgetkonform realisiert werden.",
    services: [
      "Bauleitung",
      "Projektmanagement",
      "Qualitätssicherung",
      "Terminplanung"
    ],
    contact: {
      address: "Güterstrasse 88",
      city: "CH-4053 Basel",
      phone: "+41 61 567 89 01",
      email: "info@reinpunkt.ch",
      website: "https://www.reinpunkt.ch"
    },
    image: "https://images.unsplash.com/photo-1769247178314-08cfd0886972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYW5hZ2VtZW50JTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc3MTE0OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1769247178314-08cfd0886972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYW5hZ2VtZW50JTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc3MTE0OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1769247178314-08cfd0886972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYW5hZ2VtZW50JTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc3MTE0OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "fela-ag",
    name: "Fela AG",
    category: "Fenster & Türen",
    description: "Ihr Fachpartner in der Schweiz. Wenn Sie auf der Suche nach hochwertigen Fenstern und Türen für Ihr Neu- oder Umbauprojekt sind, dann sind Sie bei uns genau richtig. Unser erfahrenes und kompetentes Team steht Ihnen von der ersten Beratung bis zur sorgfältigen Montage fachkundig zur Seite.\n\nDie Fela AG ist Ihr zuverlässiger Fachpartner für Fenster, Eingangs-, Neben- und Innentüren, Umbau und Neubau in der gesamten Schweiz.",
    services: [
      "Fenster",
      "Eingangstüren",
      "Neben- und Innentüren",
      "Umbau und Neubau"
    ],
    contact: {
      address: "Mattstrasse 18",
      city: "CH-6052 Hergiswil",
      phone: "+41 41 630 21 21",
      email: "info@fela-fenster.ch",
      website: "https://fela-fenster.ch"
    },
    image: "https://images.unsplash.com/photo-1764525981659-9a6204260359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1764525981659-9a6204260359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1764525981659-9a6204260359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  }
];      website: "https://www.noidue-roomdesign.ch"
    },
    image: "https://images.unsplash.com/photo-1764019097365-639b5bd93cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1764019097365-639b5bd93cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1764019097365-639b5bd93cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "viba-immobilien",
    name: "VIBA Immobilien Kaiseraugst",
    category: "Immobilienverwaltung",
    description: "VIBA Immobilien bietet professionelle Dienstleistungen rund um Vermietung, Verwaltung und Verkauf von Wohn- und Gewerbeimmobilien. Unser Fokus liegt auf individueller Betreuung und langfristigen Partnerschaften.",
    services: [
      "Immobilienverwaltung",
      "Vermietung",
      "Verkauf",
      "Liegenschaftsunterhalt"
    ],
    contact: {
      address: "Rheinstrasse 45",
      city: "CH-4303 Kaiseraugst",
      phone: "+41 61 234 56 78",
      email: "info@viba-immobilien.ch",
      website: "https://www.viba-immobilien.ch"
    },
    image: "https://images.unsplash.com/photo-1649068491097-8d0d19a6e378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEwODc5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1649068491097-8d0d19a6e378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEwODc5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1649068491097-8d0d19a6e378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEwODc5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "noi-due-aurum",
    name: "NOIDUE AURUM",
    category: "Anlagenberatung",
    description: "NOIDUE AURUM – Anlagen, deren Glanz ausstrahlt. Wir beraten Sie umfassend bei Immobilieninvestments und entwickeln Strategien für nachhaltige Wertschöpfung. Diskretion, Kompetenz und Weitblick prägen unsere Arbeit.",
    services: [
      "Anlageberatung",
      "Portfolioentwicklung",
      "Investitionsanalyse",
      "Vermögensverwaltung"
    ],
    contact: {
      address: "Aeschenvorstadt 71",
      city: "CH-4051 Basel",
      phone: "+41 61 345 67 89",
      email: "info@noidueaurum.ch",
      website: "https://www.noidueaurum.ch"
    },
    image: "https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwY29uc3VsdGluZyUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwY29uc3VsdGluZyUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwY29uc3VsdGluZyUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzExNDk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "nodue-room-design",
    name: "NOIDUE room design",
    category: "Innenarchitektur",
    description: "NOIDUE room design gestaltet Innenräume mit Fokus auf Funktion, Ästhetik und Atmosphäre. Von der Konzeption bis zur finalen Umsetzung begleiten wir Sie bei der Realisierung individueller Raumkonzepte.",
    services: [
      "Innenarchitektur",
      "Möbeldesign",
      "Lichtplanung",
      "Materialberatung"
    ],
    contact: {
      address: "Spalenring 12",
      city: "CH-4055 Basel",
      phone: "+41 61 456 78 90",
      email: "info@nodue-roomdesign.ch",
      website: "https://www.nodue-roomdesign.ch"
    },
    image: "https://images.unsplash.com/photo-1680209081346-14756fdfa26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGZ1cm5pdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1680209081346-14756fdfa26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGZ1cm5pdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1680209081346-14756fdfa26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGZ1cm5pdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "reinpunkt",
    name: "reinPunkt",
    category: "Bauleitung & Projektmanagement",
    description: "reinPunkt steht für präzise Bauleitung und professionelles Projektmanagement. Mit klarer Kommunikation und strukturierter Abwicklung stellen wir sicher, dass Bauprojekte termingerecht und budgetkonform realisiert werden.",
    services: [
      "Bauleitung",
      "Projektmanagement",
      "Qualitätssicherung",
      "Terminplanung"
    ],
    contact: {
      address: "Güterstrasse 88",
      city: "CH-4053 Basel",
      phone: "+41 61 567 89 01",
      email: "info@reinpunkt.ch",
      website: "https://www.reinpunkt.ch"
    },
    image: "https://images.unsplash.com/photo-1769247178314-08cfd0886972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYW5hZ2VtZW50JTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc3MTE0OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1769247178314-08cfd0886972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYW5hZ2VtZW50JTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc3MTE0OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1769247178314-08cfd0886972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYW5hZ2VtZW50JTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc3MTE0OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "fela-ag",
    name: "Fela AG",
    category: "Fenster & Türen",
    description: "Ihr Fachpartner in der Schweiz. Wenn Sie auf der Suche nach hochwertigen Fenstern und Türen für Ihr Neu- oder Umbauprojekt sind, dann sind Sie bei uns genau richtig. Unser erfahrenes und kompetentes Team steht Ihnen von der ersten Beratung bis zur sorgfältigen Montage fachkundig zur Seite.\n\nDie Fela AG ist Ihr zuverlässiger Fachpartner für Fenster, Eingangs-, Neben- und Innentüren, Umbau und Neubau in der gesamten Schweiz.",
    services: [
      "Fenster",
      "Eingangstüren",
      "Neben- und Innentüren",
      "Umbau und Neubau"
    ],
    contact: {
      address: "Mattstrasse 18",
      city: "CH-6052 Hergiswil",
      phone: "+41 41 630 21 21",
      email: "info@fela-fenster.ch",
      website: "https://fela-fenster.ch"
    },
    image: "https://images.unsplash.com/photo-1764525981659-9a6204260359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1764525981659-9a6204260359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1764525981659-9a6204260359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxMTQ5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  }
];
