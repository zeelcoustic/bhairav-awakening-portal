
const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-mystic-cosmic border-t border-mystic-orange/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-playfair text-3xl font-bold text-gradient mb-4">
            Bhisan Bhairav
          </h3>
          <p className="text-gray-400 italic font-light">
            "In the fierce stillness, I find myself."
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="#about" className="text-gray-400 hover:text-mystic-orange transition-colors duration-300">
            About
          </a>
          <a href="#meditation" className="text-gray-400 hover:text-mystic-orange transition-colors duration-300">
            Meditation
          </a>
          <a href="#contact" className="text-gray-400 hover:text-mystic-orange transition-colors duration-300">
            Contact
          </a>
          <a href="#terms" className="text-gray-400 hover:text-mystic-orange transition-colors duration-300">
            Terms
          </a>
        </div>
        
        <div className="text-center border-t border-mystic-orange/10 pt-8">
          <p className="text-gray-500 text-sm">
            © 2024 Bhisan Bhairav. All rights reserved. May all beings awaken to their divine nature.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
