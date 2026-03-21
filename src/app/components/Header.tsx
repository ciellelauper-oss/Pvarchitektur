import { Link, useLocation } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import logo from 'figma:asset/aa6f2871e841c9284c47fd60ff0fbed76f30d699.png';
import { useMobileMenu } from '../context/MobileMenuContext';
import { Search, Menu } from 'lucide-react';
import { useNavigate } from 'react-router';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isActive = (path: string) => {
    if (path === '/home') {
      return location.pathname === '/home' || location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/suche?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      e.preventDefault();
      navigate(`/suche?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#333333]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-4 md:py-8">
          <div className="flex items-center justify-between">
            {/* Left: Logo + Navigation */}
            <div className="flex items-center gap-6 md:gap-12">
              <Link 
                to="/home" 
                className="no-underline flex items-center"
                onClick={handleNavClick}
              >
                <img src={logo} alt="PV Architektur Logo" className="h-6 w-auto" />
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 md:gap-12 text-sm md:text-base">
                <Link 
                  to="/home" 
                  className={`no-underline transition-colors duration-300 font-heading ${
                    isActive('/home') ? 'text-white' : 'text-[#999999] hover:text-white'
                  }`}
                  onClick={handleNavClick}
                >
                  Home
                </Link>
                <Link 
                  to="/ueber-uns" 
                  className={`no-underline transition-colors duration-300 font-heading ${
                    isActive('/ueber-uns') ? 'text-white' : 'text-[#999999] hover:text-white'
                  }`}
                  onClick={handleNavClick}
                >
                  Über uns
                </Link>
                <Link 
                  to="/projekte" 
                  className={`no-underline transition-colors duration-300 font-heading ${
                    isActive('/projekte') ? 'text-white' : 'text-[#999999] hover:text-white'
                  }`}
                  onClick={handleNavClick}
                >
                  Projekte
                </Link>
                <Link 
                  to="/news" 
                  className={`no-underline transition-colors duration-300 font-heading ${
                    isActive('/news') ? 'text-white' : 'text-[#999999] hover:text-white'
                  }`}
                  onClick={handleNavClick}
                >
                  News
                </Link>
                <Link 
                  to="/kontakt" 
                  className={`no-underline transition-colors duration-300 font-heading ${
                    isActive('/kontakt') ? 'text-white' : 'text-[#999999] hover:text-white'
                  }`}
                  onClick={handleNavClick}
                >
                  Kontakt
                </Link>
              </nav>
            </div>

            {/* Right: Search + Mobile Menu */}
            <div className="flex items-center gap-6">
              {/* Desktop Search */}
              <div className="hidden md:flex items-center gap-2 h-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  ref={searchInputRef}
                  onKeyDown={handleKeyDown}
                  className={`w-48 bg-transparent border-b border-[#333333] text-white text-sm px-0 py-1 focus:outline-none focus:border-[#666666] transition-all duration-200 ${
                    searchOpen ? 'opacity-100' : 'opacity-0 w-0'
                  }`}
                />
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="text-[#999999] hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 flex-shrink-0"
                >
                  <Search size={20} />
                </button>
              </div>

              {/* Mobile: Current Page Indicator */}
              <span className="md:hidden text-sm text-white">
                {(location.pathname === '/home' || location.pathname === '/') && 'Home'}
                {location.pathname.startsWith('/ueber-uns') && 'Über uns'}
                {location.pathname.startsWith('/projekte') && 'Projekte'}
                {location.pathname.startsWith('/projekt/') && 'Projekte'}
                {location.pathname.startsWith('/news') && 'News'}
                {location.pathname.startsWith('/kontakt') && 'Kontakt'}
                {location.pathname.startsWith('/partner/') && 'Partnerfirmen'}
                {location.pathname.startsWith('/suche') && 'Suche'}
              </span>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-[#999999] transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Covers everything below header */}
      {mobileMenuOpen && (
        <div 
          className="fixed top-[57px] left-0 right-0 bottom-0 z-40 bg-black md:hidden flex flex-col"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav className="flex flex-col items-center justify-start pt-16 flex-1 gap-8 text-xl">
            <Link 
              to="/home" 
              className="no-underline text-white transition-colors duration-300 font-heading"
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link 
              to="/ueber-uns" 
              className="no-underline text-white transition-colors duration-300 font-heading"
              onClick={handleNavClick}
            >
              Über uns
            </Link>
            <Link 
              to="/projekte" 
              className="no-underline text-white transition-colors duration-300 font-heading"
              onClick={handleNavClick}
            >
              Projekte
            </Link>
            <Link 
              to="/news" 
              className="no-underline text-white transition-colors duration-300 font-heading"
              onClick={handleNavClick}
            >
              News
            </Link>
            <Link 
              to="/kontakt" 
              className="no-underline text-white transition-colors duration-300 font-heading"
              onClick={handleNavClick}
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Search at Bottom */}
          <div className="px-6 pb-8 border-t border-[#333333]" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch} className="flex items-center gap-2 pt-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Suche"
                className="flex-1 bg-transparent border-b border-[#333333] text-white text-sm px-0 py-2 focus:outline-none focus:border-[#666666] transition-all duration-200 placeholder:text-[#666666]"
              />
              <button
                type="submit"
                className="text-white transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 flex-shrink-0"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}