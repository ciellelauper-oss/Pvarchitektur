import { useParams, Navigate, Link } from 'react-router';
import { partners } from '../data/partners';
import { ImageSlideshow } from '../components/ImageSlideshow';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function PartnerDetail() {
  const { id } = useParams<{ id: string }>();
  const partner = partners.find(p => p.id === id);

  if (!partner) {
    return <Navigate to="/ueber-uns#partnerfirmen" replace />;
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 md:pb-24 pt-8 md:pt-12">
      {/* Back Button */}
      <Link 
        to="/ueber-uns#partnerfirmen" 
        className="inline-flex items-center gap-2 mb-8 md:mb-12 text-[#999999] md:hover:text-white transition-colors duration-300 no-underline"
      >
        <ArrowLeft size={20} strokeWidth={2} />
        <span className="text-sm">Zurück zu Partnerfirmen</span>
      </Link>

      {/* Partner Title and Contact */}
      <ScrollReveal>
        <div className="mb-8 md:mb-12">
          <h1 className="mb-2 text-2xl md:text-4xl leading-tight text-white font-heading">
            {partner.name}
          </h1>
          <div className="text-sm text-[#999999] mb-8 md:mb-12">
            {partner.category}
          </div>

          {/* Contact Metadata */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:grid md:grid-cols-12 md:gap-8 text-sm">
            <div className="w-full md:col-span-3">
              <div className="text-white mb-2">Adresse</div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(partner.contact.address + ', ' + partner.contact.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999999] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <div>{partner.contact.address}</div>
                <div>{partner.contact.city}</div>
              </a>
            </div>
            {partner.contact.phone && (
              <div className="w-full md:col-span-3">
                <div className="text-white mb-2">Telefon</div>
                <a
                  href={`tel:${partner.contact.phone.replace(/\s/g, '')}`}
                  className="text-[#999999] hover:text-white transition-colors duration-300"
                >
                  {partner.contact.phone}
                </a>
              </div>
            )}
            <div className="w-full md:col-span-3">
              <div className="text-white mb-2">E-Mail</div>
              <a
                href={`mailto:${partner.contact.email}`}
                className="text-[#999999] hover:text-white transition-colors duration-300 break-words"
              >
                {partner.contact.email}
              </a>
            </div>
            <div className="w-full md:col-span-3">
              <div className="text-white mb-2">Website</div>
              <a
                href={partner.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#999999] hover:text-white transition-colors duration-300"
              >
                Besuchen
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Description */}
      <ScrollReveal>
        <div className="mb-8 md:mb-10">
          <div>
            <p className="text-base leading-loose text-[#999999]">
              {partner.description}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Images Section - Horizontal Slideshow */}
      {partner.images.length > 0 && (
        <ScrollReveal>
          <div className="-mx-6 md:-mx-8">
            <ImageSlideshow images={partner.images} title={partner.name} />
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}