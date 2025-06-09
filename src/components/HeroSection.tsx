
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cosmic-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=3880&h=2586')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mystic-purple/50 to-mystic-cosmic"></div>
      </div>
      
      {/* Mystical particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-mystic-gold rounded-full animate-float opacity-70"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-mystic-orange rounded-full animate-float delay-1000 opacity-60"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-mystic-gold rounded-full animate-float delay-2000 opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-mystic-orange rounded-full animate-float delay-3000 opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Awaken Your{" "}
          <span className="text-gradient">Divine Consciousness</span>
          <br />
          Through Ancient Wisdom
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
          Join the path of Bhisan Bhairav – the fierce mirror of truth and liberation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-fire-gradient hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-medium animate-glow"
          >
            Begin Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-mystic-orange text-mystic-orange hover:bg-mystic-orange hover:text-mystic-cosmic transition-all duration-300 px-8 py-6 text-lg"
          >
            Watch Introduction
          </Button>
        </div>
        
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-mystic-orange rounded-full flex justify-center">
            <div className="w-1 h-3 bg-mystic-orange rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
