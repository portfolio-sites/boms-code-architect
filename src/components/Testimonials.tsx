
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Stephanie's expertise in Laravel and Vue.js transformed our web application. She improved performance by 40% and implemented complex features with ease.",
      author: "CTO, Fintech Startup",
      avatar: "blue"
    },
    {
      text: "Her deep understanding of backend architecture helped us scale our healthcare platform 10x without missing a beat. A rare technical talent who can translate complex challenges into elegant solutions.",
      author: "Engineering Director, Healthcare Platform",
      avatar: "green"
    },
    {
      text: "Stephanie's work on our Java-based loyalty program was exceptional. She delivered a robust system that handles millions of transactions daily with zero downtime.",
      author: "Product Manager, MTech Communications",
      avatar: "yellow"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-deep-blue text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Client Testimonials</h2>
          <Separator className="w-16 h-1 bg-white mx-auto mb-6" />
          <p className="text-white/80">Feedback from professionals I've worked with throughout my career</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Active testimonial with animation */}
          <Card className="bg-white/10 border-0 mb-8 animate-fade-in">
            <CardContent className="pt-8 pb-4">
              <div className="mb-6 flex items-start justify-center">
                <svg className="w-12 h-12 text-white/30 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9999 4C13.9999 4 15.9998 4 17.9998 5C19.9998 6 21 8 21 10C21 12 20 13.5 18.5 14.5C17 15.5 16 16 15.5 16.5C14.5 17.5 14 18.5 14 20H10C10 17.5 10.5 15.5 11.5 14.5C12.5 13.5 14 12.5 15 11.9C16 11.3 16.5 10.5 16.5 9.8C16.5 9.1 16 8.4 15.3 8C14.6 7.6 13.9 7.5 13 7.5C11.6 7.5 10.1 8.5 9.5 9.9L5.8 8.4C7.1 5.8 9.4 4 11.9999 4ZM12 21C13.1046 21 14 21.8954 14 23H10C10 21.8954 10.8954 21 12 21Z"></path>
                </svg>
              </div>
              <p className="text-xl md:text-2xl text-center mb-4 font-light">
                "{testimonials[activeTestimonial].text}"
              </p>
            </CardContent>
            <CardFooter className="text-white/80 justify-center pb-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-2 overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${
                    activeTestimonial === 0 ? 'from-blue-400 to-purple-600' :
                    activeTestimonial === 1 ? 'from-green-400 to-blue-600' :
                    'from-yellow-400 to-orange-600'
                  }`}></div>
                </div>
                <p className="font-medium">— {testimonials[activeTestimonial].author}</p>
              </div>
            </CardFooter>
          </Card>
          
          {/* Testimonial indicator dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
