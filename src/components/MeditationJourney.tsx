
const journeyDays = [
  {
    day: 1,
    title: "I Am All That Exists",
    description: "Seeing the world through the eye of Bhairava - dissolving the boundaries between self and cosmos",
    mantra: "I am the universe experiencing itself",
    icon: "🕉️"
  },
  {
    day: 2,
    title: "My Vibration Shapes the Universe",
    description: "From sadness to joy, dissolve illusion and recognize your power as the creator of reality",
    mantra: "My frequency creates my reality",
    icon: "🌊"
  },
  {
    day: 3,
    title: "The Dance of Destruction and Creation",
    description: "Embrace Bhairav's fierce nature - destroying what no longer serves to birth the new",
    mantra: "In destruction, I find rebirth",
    icon: "🔥"
  },
  {
    day: 4,
    title: "Sacred Silence Between Breaths",
    description: "Finding the eternal pause where infinite possibility rests in perfect stillness",
    mantra: "In stillness, I touch eternity",
    icon: "🌸"
  },
  {
    day: 5,
    title: "Fire of Transformation",
    description: "Allowing the inner fire to burn away false identities and reveal your divine essence",
    mantra: "I am purified by divine fire",
    icon: "⚡"
  },
  {
    day: 6,
    title: "Mirror of Consciousness",
    description: "Bhairav as the perfect mirror - seeing reality without distortion or projection",
    mantra: "I reflect pure awareness",
    icon: "🌕"
  },
  {
    day: 7,
    title: "Beyond Fear, Beyond Death",
    description: "Transcending the ultimate illusions that bind the soul to suffering",
    mantra: "I am eternal, beyond all form",
    icon: "🦋"
  },
  {
    day: 8,
    title: "The Cosmic Play",
    description: "Understanding life as divine theater where you are both the actor and the audience",
    mantra: "I dance in the cosmic play",
    icon: "🎭"
  },
  {
    day: 9,
    title: "Integration of Opposites",
    description: "Embracing all aspects of existence - light and shadow, pleasure and pain as one",
    mantra: "I unite all polarities within",
    icon: "☯️"
  },
  {
    day: 10,
    title: "Living as Bhairav",
    description: "Embodying fierce compassion in daily life - the eternal dance of awakened consciousness",
    mantra: "I am Bhairav awakened",
    icon: "👁️"
  }
];

const MeditationJourney = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-mystic-purple to-mystic-cosmic">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
            The 10-Day <span className="text-gradient">Awakening Journey</span>
          </h2>
          <p className="text-xl text-gray-300">
            Each day is a portal into your sacred transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {journeyDays.map((day, index) => (
            <div 
              key={day.day}
              className="group relative bg-mystic-purple-light/20 backdrop-blur-sm border border-mystic-orange/20 rounded-xl p-6 hover:border-mystic-orange/60 hover:bg-mystic-purple-light/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-mystic-orange/20 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-fire-gradient opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500"></div>
              
              {/* Day number badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 rounded-full bg-fire-gradient flex items-center justify-center text-mystic-cosmic font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                  {day.day}
                </div>
                <div className="text-3xl group-hover:animate-float">
                  {day.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-playfair text-lg font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {day.title}
              </h3>
              
              {/* Mantra */}
              <p className="text-mystic-orange text-sm italic mb-3 font-light group-hover:text-mystic-orange-light transition-colors duration-300">
                "{day.mantra}"
              </p>
              
              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {day.description}
              </p>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl border border-mystic-orange/30 animate-glow"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Sacred decoration */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1200ms' }}>
          <div className="text-mystic-orange text-2xl mb-4">✧ ۞ ✧</div>
          <p className="text-gray-400 italic text-sm">
            "Each step on this path dissolves another veil of illusion"
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeditationJourney;
