
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Bhisan Bhairav opened my eyes to the fierce love that destroys all illusion. I found myself in the sacred stillness.",
    author: "Sarah M.",
    role: "Spiritual Seeker"
  },
  {
    quote: "The 10-day journey was the most profound spiritual experience of my life. I finally understand what it means to live as consciousness itself.",
    author: "David K.",
    role: "Meditation Teacher"
  },
  {
    quote: "This path is not for the faint of heart, but for those ready to embrace their divine nature with fierce compassion.",
    author: "Priya S.",
    role: "Yoga Practitioner"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 px-6 bg-mystic-purple">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
            Voices from the <span className="text-gradient">Sacred Journey</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-mystic-cosmic/50 border-mystic-orange/20 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-mystic-orange text-4xl mb-4 font-playfair">"</div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-mystic-orange/20 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
