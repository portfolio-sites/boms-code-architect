
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Stephanie's expertise in Laravel and Vue.js transformed our web application. She improved performance by 40% and implemented complex features with ease.",
      author: "CTO, Fintech Startup",
      company: "PayFlow Solutions",
      avatar: "blue"
    },
    {
      text: "Her deep understanding of backend architecture helped us scale our healthcare platform 10x without missing a beat. A rare technical talent who can translate complex challenges into elegant solutions.",
      author: "Engineering Director, Healthcare Platform",
      company: "MedConnect Systems",
      avatar: "green"
    },
    {
      text: "Stephanie's work on our Java-based loyalty program was exceptional. She delivered a robust system that handles millions of transactions daily with zero downtime.",
      author: "Product Manager, MTech Communications",
      company: "MTech Communications",
      avatar: "yellow"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const navigateTestimonial = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-[#1D4ED8]/95 to-[#0A1F44] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Reviews from Previous Companies</h2>
          <Separator className="w-16 h-1 bg-white mx-auto mb-6" />
          <p className="text-white/80">Feedback from professionals I've worked with throughout my career</p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Active testimonial with animation */}
          <Card className="bg-white/10 backdrop-blur-sm border-0 mb-8 animate-fade-in relative overflow-hidden">
            <CardContent className="pt-8 pb-4">
              <div className="absolute top-4 left-4 text-white/20">
                <Quote size={32} />
              </div>
              <p className="text-xl md:text-2xl text-center mb-4 font-light px-4 md:px-8 pt-6">
                "{testimonials[activeTestimonial].text}"
              </p>
            </CardContent>
            <CardFooter className="text-white/80 justify-center pb-6 flex flex-col">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-2 overflow-hidden shadow-lg">
                  <div className={`w-full h-full bg-gradient-to-br ${
                    activeTestimonial === 0 ? 'from-blue-400 to-purple-600' :
                    activeTestimonial === 1 ? 'from-green-400 to-blue-600' :
                    'from-yellow-400 to-orange-600'
                  }`}></div>
                </div>
                <p className="font-medium text-white">— {testimonials[activeTestimonial].author}</p>
                <p className="text-sm text-white/70">{testimonials[activeTestimonial].company}</p>
              </div>
            </CardFooter>
          </Card>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between pointer-events-none">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigateTestimonial('prev')}
              className="bg-white/10 text-white rounded-full pointer-events-auto hover:bg-white/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigateTestimonial('next')}
              className="bg-white/10 text-white rounded-full pointer-events-auto hover:bg-white/20"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
          
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
