
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-mystic-purple to-mystic-cosmic">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
            Answer the <span className="text-gradient">Sacred Call</span>
          </h2>
          <p className="text-xl text-gray-300">
            Take the first step on your journey of divine awakening
          </p>
        </div>
        
        <div className="bg-mystic-purple-light/20 backdrop-blur-sm border border-mystic-orange/20 rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-white mb-2 block">Sacred Name</Label>
              <Input 
                id="name"
                placeholder="Enter your name"
                className="bg-mystic-cosmic/50 border-mystic-orange/30 text-white placeholder:text-gray-400"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-mystic-cosmic/50 border-mystic-orange/30 text-white placeholder:text-gray-400"
              />
            </div>
            
            <div>
              <Label htmlFor="calling" className="text-white mb-2 block">Why are you called to this path?</Label>
              <Textarea 
                id="calling"
                placeholder="Share what draws you to the teachings of Bhisan Bhairav..."
                rows={4}
                className="bg-mystic-cosmic/50 border-mystic-orange/30 text-white placeholder:text-gray-400"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-fire-gradient hover:scale-105 transition-all duration-300 py-6 text-lg font-medium animate-glow"
            >
              Receive the Call of Bhairav
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
