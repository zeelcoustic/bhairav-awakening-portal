
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    title: "Sacred Teachings",
    description: "Ancient wisdom from the cosmic consciousness, revealing the mysteries of existence through timeless sacred texts.",
    icon: "🕉️"
  },
  {
    title: "Fierce Wisdom",
    description: "The transformative power of Bhairav cuts through illusion with compassionate intensity, awakening your true nature.",
    icon: "🔱"
  },
  {
    title: "Inner Silence",
    description: "Discover the profound stillness within chaos, where the deepest truths emerge in the space between thoughts.",
    icon: "🧘‍♂️"
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-mystic-cosmic to-mystic-purple">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Bhisan Bhairav</span> Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three sacred pillars that form the foundation of your spiritual transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.title} 
              className="bg-mystic-purple-light/30 border-mystic-purple-light/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-float">{pillar.icon}</div>
                <CardTitle className="font-playfair text-2xl text-white mb-2">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
