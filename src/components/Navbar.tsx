
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navLinks = [
  { text: "Главная", href: "#" },
  { text: "Услуги", href: "#" },
  { text: "О нас", href: "#" },
  { text: "Отзывы", href: "#" },
  { text: "Контакты", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-matrix-dark/80 backdrop-blur-md border-b border-matrix-purple/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white flex items-center">
            <span className="text-matrix-purple mr-2">
              <Icon name="Zap" className="h-6 w-6" />
            </span>
            LeadTech
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-matrix-purple transition-colors text-sm font-medium"
              >
                {link.text}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button 
              className="bg-matrix-purple hover:bg-matrix-purple/90 text-white"
            >
              Заказать звонок
            </Button>
          </div>
          
          <button 
            className="md:hidden text-gray-300 hover:text-matrix-purple"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-matrix-purple/20 bg-matrix-dark/90 backdrop-blur-md">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-300 hover:text-matrix-purple transition-colors text-sm font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <Button 
              className="w-full bg-matrix-purple hover:bg-matrix-purple/90 text-white mt-4"
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
