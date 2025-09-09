import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Gradient Background */}
      <div className="relative bg-gradient-to-r from-pink-100 via-purple-50 to-yellow-50 py-12">
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Adymize</span>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-200 mb-8"></div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-600 text-center md:text-left">
              © 2025 Adymize Private Limited | <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/company/adymize" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/adymize" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/adymize" 
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