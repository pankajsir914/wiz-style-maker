import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = "Hi, I need help with performance marketing for my business.";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background text-foreground px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm">
        Chat with us!
      </span>
    </button>
  );
};

export default FloatingWhatsApp;