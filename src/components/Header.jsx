import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className="bg-white w-full shadow-md z-10 fixed">
      <div className="container w-full bg-white mx-auto px-4 py-4 z-10 fixed">
        <div className="flex justify-between items-center ">
          <div className="flex items-center pl-16">
            <img src="/1.png" alt="PrimeStep Solutions Logo" className="h-10 w-auto" />
            <img src="/2.png" alt="PrimeStep Solutions Logo" className="h-7 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-6 pr-16">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="text-[#52656C] hover:text-[#F7941E] transition-colors duration-300">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#52656C] hover:text-[#F7941E] transition-colors duration-300">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item, index) => (
              <div key={index} className="py-2">
                <a href={item.href} className="block text-[#52656C] hover:text-[#F7941E] transition-colors duration-300">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
