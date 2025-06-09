
const learnings = [
  "Who is Bhairav? Understanding the cosmic destroyer and creator",
  "Meaning of fierce compassion - Love that destroys limitation",
  "Breaking illusion through silence - The power of sacred stillness",
  "Awakening non-dual awareness - Experiencing oneness with all",
  "Daily integration practices - Bringing the divine into everyday life"
];

const LearningSection = () => {
  return (
    <section className="py-20 px-6 bg-mystic-purple">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
            What You'll <span className="text-gradient">Learn</span>
          </h2>
          <p className="text-xl text-gray-300">
            Sacred teachings that will transform your understanding of existence
          </p>
        </div>
        
        <div className="grid gap-6">
          {learnings.map((learning, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-mystic-purple-light/30 border border-mystic-orange/20 hover:border-mystic-orange/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-fire-gradient flex items-center justify-center text-mystic-cosmic font-bold group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                {learning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
