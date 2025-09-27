import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import logo from "@/assets/editorzhub-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#portfolio" },
    { label: "Why Editorzhub?", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQs", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[92%] max-w-6xl">
        <nav className={`bg-white rounded-full px-4 sm:px-8 py-2.5 sm:py-3 transition-all duration-300 ${
          isScrolled ? "shadow-xl" : "shadow-lg"
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center space-x-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img 
                src={logo} 
                alt="Editorzhub" 
                className="h-7 sm:h-8 w-auto transform transition-transform group-hover:scale-105"
              />
              <span className="text-lg sm:text-xl font-bold inline-flex">
                {"Editorzhub.com".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                    style={{
                      animation: `typewriter 3s infinite`,
                      animationDelay: `${index * 0.15}s`
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-7 lg:space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#2b2d42] hover:bg-[#1d1e2e] text-white rounded-full px-6 py-2 text-sm font-semibold transition-all hover:shadow-lg"
              >
                Chat Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 sm:top-20 mx-2 sm:mx-4 bg-white rounded-2xl shadow-xl p-4 sm:p-6 animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-gray-700 hover:text-purple-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="bg-[#2b2d42] hover:bg-[#1d1e2e] text-white rounded-full w-full mt-4 h-12 text-base font-semibold"
              >
                Chat Now
              </Button>
            </div>
          </div>
        )}
      </header>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Header;