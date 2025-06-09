
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const journeyDays = [
  {
    day: 1,
    title: "I Am All That Exists",
    description: "Seeing the world through the eye of Bhairava - dissolving the boundaries between self and cosmos"
  },
  {
    day: 2,
    title: "My Vibration Shapes the Universe",
    description: "From sadness to joy, dissolve illusion and recognize your power as the creator of reality"
  },
  {
    day: 3,
    title: "The Dance of Destruction and Creation",
    description: "Embrace Bhairav's fierce nature - destroying what no longer serves to birth the new"
  },
  {
    day: 4,
    title: "Sacred Silence Between Breaths",
    description: "Finding the eternal pause where infinite possibility rests in perfect stillness"
  },
  {
    day: 5,
    title: "Fire of Transformation",
    description: "Allowing the inner fire to burn away false identities and reveal your divine essence"
  },
  {
    day: 6,
    title: "Mirror of Consciousness",
    description: "Bhairav as the perfect mirror - seeing reality without distortion or projection"
  },
  {
    day: 7,
    title: "Beyond Fear, Beyond Death",
    description: "Transcending the ultimate illusions that bind the soul to suffering"
  },
  {
    day: 8,
    title: "The Cosmic Play",
    description: "Understanding life as divine theater where you are both the actor and the audience"
  },
  {
    day: 9,
    title: "Integration of Opposites",
    description: "Embracing all aspects of existence - light and shadow, pleasure and pain as one"
  },
  {
    day: 10,
    title: "Living as Bhairav",
    description: "Embodying fierce compassion in daily life - the eternal dance of awakened consciousness"
  }
];

const MeditationJourney = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-mystic-purple to-mystic-cosmic">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
            Your Inner Journey – <span className="text-gradient">Day by Day</span>
          </h2>
          <p className="text-xl text-gray-300">
            10 transformative days of guided meditation and sacred practice
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {journeyDays.map((day) => (
            <AccordionItem 
              key={day.day} 
              value={`day-${day.day}`}
              className="bg-mystic-purple-light/20 border-mystic-orange/30 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-mystic-purple-light/30 transition-colors duration-300">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fire-gradient flex items-center justify-center text-mystic-cosmic font-bold">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-white">
                      {day.title}
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-300 leading-relaxed ml-14">
                  {day.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default MeditationJourney;
