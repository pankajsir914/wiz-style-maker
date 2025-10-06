import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/editorzhub-logo-new.png";

const Footer = () => {
  return (
    <footer className="relative mt-12 sm:mt-16 lg:mt-20">
      {/* Gradient Background */}
      <div className="relative bg-gradient-to-r from-pink-100 via-purple-50 to-yellow-50 py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Logo */}
          <div className="flex flex-col items-center mb-2 sm:mb-3">
            <img 
              src={logo} 
              alt="Editorzhub" 
              className="h-32 sm:h-28 w-auto mb-3 sm:mb-4"
            />
            <p className="text-center text-sm sm:text-base text-gray-600 max-w-md px-4">
              Editing that understands your story. Built for creators, coaches, and growing brands.
            </p>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-200 mb-6 sm:mb-8"></div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Copyright */}
            <div className="text-xs sm:text-[length:var(--font-body-sm)] text-gray-600 text-center md:text-left">
              © 2025 Editorzhub.com Private Limited | <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/ravish-kumar-prajapati/ linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/ravishkumar6887/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
