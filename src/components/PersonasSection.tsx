
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const personas = [
  {
    title: "The Seeker",
    description: "You feel called to something greater, searching for meaning beyond the material world. Your soul yearns for ancient wisdom and spiritual awakening.",
    icon: "🔍"
  },
  {
    title: "The Burned-Out Mystic",
    description: "You've explored many paths but feel spiritually exhausted. Bhairav offers fierce clarity to cut through spiritual confusion and find authentic practice.",
    icon: "🕯️"
  },
  {
    title: "The Yogic Warrior",
    description: "Ready to embrace the fierce aspects of spirituality. You understand that true transformation requires courage to face your deepest shadows.",
    icon: "⚔️"
  },
  {
    title: "The Inner Child",
    description: "You maintain wonder and openness to mystery. Your innocent heart is ready to receive the profound teachings of cosmic consciousness.",
    icon: "🌟"
  }
];

const PersonasSection = () => {
  return (
    <section className="py-20 px-6 bg-mystic-purple">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
            Who Is This <span className="text-gradient">For?</span>
          </h2>
          <p className="text-xl text-gray-300">
            Four sacred archetypes called to the path of Bhairav
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <Card 
              key={persona.title}
              className="bg-mystic-cosmic/50 border-mystic-orange/20 hover:border-mystic-orange/50 transition-all duration-300 group hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-3xl mb-3 group-hover:animate-float">
                  {persona.icon}
                </div>
                <CardTitle className="font-playfair text-xl text-white">
                  {persona.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed text-sm">
                  {persona.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
