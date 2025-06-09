
const bonuses = [
  {
    title: "Cosmic Parivar Community",
    description: "Access to our private sacred circle where fellow seekers share insights and support each other's journey",
    icon: "👥"
  },
  {
    title: "Ritual Audio Downloads",
    description: "Guided mantras, sacred chants, and meditation practices you can access anytime, anywhere",
    icon: "🎵"
  },
  {
    title: "Daily Reflection Journal",
    description: "Beautifully designed digital journal with prompts for deeper integration of your experiences",
    icon: "📓"
  },
  {
    title: "Full Moon Fire Meditation",
    description: "Exclusive monthly live sessions harnessing lunar energy for profound transformation",
    icon: "🌕"
  }
];

const BonusSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-mystic-cosmic to-mystic-purple">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
            Sacred <span className="text-gradient">Bonus</span> Inclusions
          </h2>
          <p className="text-xl text-gray-300">
            Additional gifts to deepen your spiritual practice
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {bonuses.map((bonus, index) => (
            <div 
              key={bonus.title}
              className="flex items-start gap-6 p-6 rounded-lg bg-mystic-purple-light/20 border border-mystic-orange/20 hover:border-mystic-orange/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 text-3xl group-hover:animate-float">
                {bonus.icon}
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                  {bonus.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
