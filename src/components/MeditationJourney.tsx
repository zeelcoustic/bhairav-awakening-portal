
const journeyDays = [
  {
    day: 1,
    title: "I Am All That Exists",
    insight: "Seeing the world through the eye of Bhairava - dissolving the boundaries between self and cosmos",
    technique: "Unity Awareness Practice",
    outcome: "Experience the dissolution of separation between self and universe",
    symbol: "🕉️"
  },
  {
    day: 2,
    title: "My Vibration Shapes the Universe",
    insight: "From sadness to joy, dissolve illusion and recognize your power as the creator of reality",
    technique: "Emotion Shifting Meditation",
    outcome: "Realize how inner frequency colors your perception",
    symbol: "🌊"
  },
  {
    day: 3,
    title: "The Dance of Destruction and Creation",
    insight: "Embrace Bhairav's fierce nature - destroying what no longer serves to birth the new",
    technique: "Transformative Fire Practice",
    outcome: "Learn to release attachments and welcome renewal",
    symbol: "🔥"
  },
  {
    day: 4,
    title: "Sacred Silence Between Breaths",
    insight: "Finding the eternal pause where infinite possibility rests in perfect stillness",
    technique: "Breath Gap Meditation",
    outcome: "Touch the space of infinite potential within stillness",
    symbol: "🌸"
  },
  {
    day: 5,
    title: "Fire of Transformation",
    insight: "Allowing the inner fire to burn away false identities and reveal your divine essence",
    technique: "Inner Fire Awakening",
    outcome: "Purify consciousness and reveal authentic self",
    symbol: "⚡"
  },
  {
    day: 6,
    title: "Mirror of Consciousness",
    insight: "Bhairav as the perfect mirror - seeing reality without distortion or projection",
    technique: "Pure Awareness Practice",
    outcome: "Develop clear seeing beyond mental projections",
    symbol: "🌕"
  },
  {
    day: 7,
    title: "Beyond Fear, Beyond Death",
    insight: "Transcending the ultimate illusions that bind the soul to suffering",
    technique: "Fearlessness Meditation",
    outcome: "Recognize your eternal nature beyond all forms",
    symbol: "🦋"
  },
  {
    day: 8,
    title: "The Cosmic Play",
    insight: "Understanding life as divine theater where you are both the actor and the audience",
    technique: "Witness Consciousness Practice",
    outcome: "Experience detached participation in life's drama",
    symbol: "🎭"
  },
  {
    day: 9,
    title: "Integration of Opposites",
    insight: "Embracing all aspects of existence - light and shadow, pleasure and pain as one",
    technique: "Polarity Union Meditation",
    outcome: "Harmonize all contradictions within unified awareness",
    symbol: "☯️"
  },
  {
    day: 10,
    title: "Living as Bhairav",
    insight: "Embodying fierce compassion in daily life - the eternal dance of awakened consciousness",
    technique: "Embodied Awakening Practice",
    outcome: "Integrate awakened consciousness into every moment",
    symbol: "👁️"
  }
];

const MeditationJourney = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-mystic-cosmic via-mystic-purple-dark to-mystic-purple relative overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-mystic-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-mystic-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Your Sacred <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Ten profound awakenings that will transform your understanding of existence
          </p>
          <div className="mt-6 sm:mt-8 text-mystic-orange text-2xl sm:text-3xl">✧ ۞ ✧</div>
        </div>
        
        {/* Journey Cards - Mobile-Optimized Vertical Stack */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {journeyDays.map((day, index) => (
            <div 
              key={day.day}
              className="group relative bg-gradient-to-r from-mystic-purple-light/20 via-mystic-purple-light/30 to-mystic-purple-light/20 backdrop-blur-sm border border-mystic-orange/20 rounded-xl sm:rounded-2xl mx-2 sm:mx-4 md:mx-0 overflow-hidden hover:border-mystic-orange/60 transition-all duration-700 hover:shadow-2xl hover:shadow-mystic-orange/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glowing aura effect */}
              <div className="absolute inset-0 bg-fire-gradient opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-700"></div>
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-mystic-orange/30 animate-glow"></div>
              </div>
              
              {/* Card Content - Mobile-First Layout */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                {/* Mobile: Stacked Layout, Desktop: Horizontal Layout */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 text-center sm:text-left">
                  {/* Day Number and Symbol */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-fire-gradient flex items-center justify-center text-mystic-cosmic font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3">
                      {day.day}
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl group-hover:animate-float transition-transform duration-300">
                      {day.symbol}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-3 sm:space-y-4 max-w-full">
                    {/* Title - Mobile-First Typography */}
                    <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold text-white group-hover:text-gradient transition-all duration-300 leading-tight">
                      Day {day.day}: {day.title}
                    </h3>
                    
                    {/* Insight - Single Line on Mobile */}
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic group-hover:text-gray-200 transition-colors duration-300 break-words">
                      "{day.insight}"
                    </p>
                    
                    {/* Technique and Outcome - Stacked on Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                      <div className="text-center sm:text-left">
                        <span className="text-mystic-orange text-xs sm:text-sm font-medium uppercase tracking-wider block mb-1">Technique</span>
                        <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300 break-words">
                          {day.technique}
                        </p>
                      </div>
                      <div className="text-center sm:text-left">
                        <span className="text-mystic-gold text-xs sm:text-sm font-medium uppercase tracking-wider block mb-1">Outcome</span>
                        <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300 break-words">
                          {day.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sacred line connector - Hidden on mobile for cleaner look */}
              {index < journeyDays.length - 1 && (
                <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:block">
                  <div className="w-px h-4 sm:h-8 bg-gradient-to-b from-mystic-orange/40 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Sacred Closing */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: '1200ms' }}>
          <div className="text-mystic-orange text-2xl sm:text-3xl mb-4 sm:mb-6">✧ ۞ ✧</div>
          <p className="text-gray-400 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            "Each step on this sacred path dissolves another veil of illusion, revealing the infinite consciousness that you have always been"
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeditationJourney;
