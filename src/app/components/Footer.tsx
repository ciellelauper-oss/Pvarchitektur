import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-[#333333] bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Hauptsitz */}
          <div>
            <h3 className="text-sm mb-4 text-white font-heading">Hauptsitz</h3>
            <div className="text-sm text-[#999999] space-y-1">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Kannenfeldstrasse+22,+4056+Basel,+Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="text-[#999999] md:group-hover:text-white transition-colors duration-300">PV Architektur &</div>
                <div className="text-[#999999] md:group-hover:text-white transition-colors duration-300">Baudienstleistungen AG</div>
                <div className="pt-2 text-[#999999] md:group-hover:text-white transition-colors duration-300">Kannenfeldstrasse 22</div>
                <div className="text-[#999999] md:group-hover:text-white transition-colors duration-300">CH–4056 Basel</div>
              </a>
              <a 
                href="tel:+41619714435"
                className="block pt-2 text-[#999999] md:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                T +41 61 971 44 35
              </a>
              <a 
                href="mailto:info@pv-architektur.ch"
                className="block text-[#999999] md:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                info@pv-architektur.ch
              </a>
            </div>
          </div>

          {/* Filiale */}
          <div>
            <h4 className="text-sm mb-4 text-white font-heading">Filiale</h4>
            <div className="text-sm text-[#999999] space-y-1">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Landstrasse+43,+4452+Itingen+BL,+Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="text-[#999999] md:group-hover:text-white transition-colors duration-300">PV Architektur &</div>
                <div className="text-[#999999] md:group-hover:text-white transition-colors duration-300">Baudienstleistungen AG</div>
                <div className="pt-2 text-[#999999] md:group-hover:text-white transition-colors duration-300">Landstrasse 43</div>
                <div className="text-[#999999] md:group-hover:text-white transition-colors duration-300">CH–4452 Itingen BL</div>
              </a>
              <a 
                href="tel:+41619714435"
                className="block pt-2 text-[#999999] md:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                T +41 61 971 44 35
              </a>
              <a 
                href="mailto:info@pv-architektur.ch"
                className="block text-[#999999] md:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                info@pv-architektur.ch
              </a>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-sm mb-4 text-white font-heading">Rechtliches</h4>
            <div className="text-sm text-[#999999] space-y-1">
              <Link 
                to="/datenschutz"
                className="block text-[#999999] md:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Datenschutz
              </Link>
              <Link 
                to="/impressum"
                className="block text-[#999999] md:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}