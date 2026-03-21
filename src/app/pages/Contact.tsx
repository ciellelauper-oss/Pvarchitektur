import { ScrollReveal } from '../components/ScrollReveal';

export function Contact() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 pt-[20px] md:pt-[12px]">
      {/* Contact Section */}
      <section className="mb-16 pb-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Side - Text & Contact Info */}
            <div>
              <h2 className="text-xl mb-6 text-white font-heading">Architektur entsteht im Dialog</h2>
              <p className="text-sm leading-loose text-[#999999] mb-12">
                Jedes Projekt beginnt mit einem Gespräch, offen und auf Augenhöhe.
              </p>
              <div className="text-sm leading-loose text-[#999999]">
                <div className="mb-6">
                  <div className="text-[#999999] mb-2">Paride Visca & Reto Seghers</div>
                </div>
                <div className="space-y-1 mb-6">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kannenfeldstrasse+22,+4056+Basel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-[#999999] no-underline md:hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <div>Kannenfeldstrasse 22</div>
                    <div>CH–4056 Basel</div>
                  </a>
                </div>
                <div className="space-y-1">
                  <div>
                    <a href="tel:+41619714435" className="text-[#999999] no-underline md:hover:text-white transition-colors duration-300">
                      T +41 61 971 44 35
                    </a>
                  </div>
                  <div>
                    <a href="mailto:info@pv-architektur.ch" className="text-[#999999] no-underline md:hover:text-white transition-colors duration-300">
                      info@pv-architektur.ch
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); }}>
                <div>
                  <input
                    type="text"
                    placeholder="Vor- und Nachname"
                    className="w-full bg-transparent border-b border-[#333333] text-white text-sm py-3 placeholder-[#666666] focus:outline-none focus:border-[#999999] transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-Mail"
                    className="w-full bg-transparent border-b border-[#333333] text-white text-sm py-3 placeholder-[#666666] focus:outline-none focus:border-[#999999] transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Ihre Nachricht"
                    rows={6}
                    className="w-full bg-transparent border-b border-[#333333] text-white text-sm py-3 placeholder-[#666666] focus:outline-none focus:border-[#999999] transition-colors duration-300 resize-none"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-sm text-[#999999] md:hover:text-white transition-colors duration-300 cursor-pointer font-normal"
                  >
                    Nachricht senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Offices Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {/* Basel Office */}
        <ScrollReveal delay={0}>
          <div className="group">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Kannenfeldstrasse+22,+4056+Basel,+Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Basel Office"
                  className="w-full h-full object-cover opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-base mb-4 text-white md:text-[#999999] md:group-hover:text-white transition-colors duration-300 font-heading">
                Hauptsitz PV Architektur & Baudienstleistungen AG
              </h3>
              <div className="text-sm text-[#999999] md:hover:text-white transition-colors duration-300 space-y-1 mb-6">
                <div>Kannenfeldstrasse 22</div>
                <div>CH–4056 Basel</div>
              </div>
            </a>
            <div className="text-sm space-y-2">
              <div>
                <a href="tel:+41619714435" className="text-[#999999] no-underline md:hover:text-white transition-colors duration-300">
                  T +41 61 971 44 35
                </a>
              </div>
              <div>
                <a href="mailto:info@pv-architektur.ch" className="text-[#999999] no-underline md:hover:text-white transition-colors duration-300">
                  info@pv-architektur.ch
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Itingen Office */}
        <ScrollReveal delay={100}>
          <div className="group">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Landstrasse+43,+4452+Itingen+BL,+Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Itingen Office"
                  className="w-full h-full object-cover opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-base mb-4 text-white md:text-[#999999] md:group-hover:text-white transition-colors duration-300 font-heading">
                Filiale PV Architektur & Baudienstleistungen AG
              </h3>
              <div className="text-sm text-[#999999] md:hover:text-white transition-colors duration-300 space-y-1 mb-6">
                <div>Landstrasse 43</div>
                <div>CH–4452 Itingen BL</div>
              </div>
            </a>
            <div className="text-sm space-y-2">
              <div>
                <a href="tel:+41619714435" className="text-[#999999] no-underline md:hover:text-white transition-colors duration-300">
                  T +41 61 971 44 35
                </a>
              </div>
              <div>
                <a href="mailto:info@pv-architektur.ch" className="text-[#999999] no-underline md:hover:text-white transition-colors duration-300">
                  info@pv-architektur.ch
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}