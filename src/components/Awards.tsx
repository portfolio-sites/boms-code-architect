
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Trophy, Users, Star, BookOpen, Lightbulb, Code } from "lucide-react";
import { useState } from "react";

const Awards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="awards" className="py-24 md:py-32 bg-gradient-to-b from-light-beige to-soft-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="pattern-overlay bg-dots-pattern"></div>
      
      {/* Decorative shapes */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-soft-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-soft-burgundy/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-3">
            <span className="bg-soft-gold/20 text-deep-gold px-4 py-2 rounded-full text-sm font-medium tracking-wide">
              PERSONAL ENDEAVORS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text font-serif">Community & Recreational Activities</h2>
          <Separator className="w-24 h-1 bg-gradient-to-r from-deep-gold to-royal-gold mx-auto mb-10" />
          <p className="text-navy-blue/80 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Beyond professional accomplishments, here are some aspects of my personal involvement and interests that reflect my values and character.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <Card 
            className={`border-0 presidential-card hover:shadow-[0_20px_50px_-12px_rgba(184,134,11,0.25)] transition-all duration-500 overflow-hidden rounded-2xl ${
              hoveredCard === 0 ? 'transform -translate-y-2' : ''
            }`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-1.5 bg-gradient-to-r from-deep-gold to-royal-gold"></div>
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-deep-gold to-royal-gold rounded-xl flex items-center justify-center shadow-lg">
                  <Trophy className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold gradient-text">Karaoke Champion</h3>
              </div>
              
              <div className="aspect-video bg-white rounded-xl mb-8 overflow-hidden flex items-center justify-center shadow-inner p-2 luxury-border">
                <img 
                  src="/lovable-uploads/e21d82f1-90b6-4538-9c79-89a4a6e10fdf.png" 
                  alt="First Place Halloween Karaoke 2023 Trophy" 
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
              
              <p className="text-lg leading-relaxed mb-8 font-sans text-navy-blue/80">
                Proud winner of the 2023 Halloween Karaoke Contest. My rendition of "Thriller" apparently brought down the house!
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-soft-gold/20 px-4 py-2 rounded-full text-sm font-medium text-deep-gold flex items-center">
                  <Star className="w-4 h-4 mr-2 text-deep-gold" /> First Place
                </span>
                <span className="bg-soft-cream px-4 py-2 rounded-full text-sm font-medium text-navy-blue flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2 text-deep-gold" /> Halloween 2023
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card 
            className={`border-0 presidential-card hover:shadow-[0_20px_50px_-12px_rgba(184,134,11,0.25)] transition-all duration-500 overflow-hidden rounded-2xl ${
              hoveredCard === 1 ? 'transform -translate-y-2' : ''
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-1.5 bg-gradient-to-r from-deep-gold to-royal-gold"></div>
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-deep-gold to-royal-gold rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold gradient-text">Animal Shelter Volunteer</h3>
              </div>
              
              <div className="aspect-video bg-white rounded-xl mb-8 overflow-hidden shadow-inner luxury-border">
                <div className="w-full h-full rounded-lg bg-navy-blue/5 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-soft-gold/20 rounded-full flex items-center justify-center mb-4">
                      <Heart className="h-7 w-7 text-deep-gold" />
                    </div>
                    <p className="font-serif text-lg text-deep-gold">No photo available</p>
                    <p className="text-sm text-navy-blue/60 mt-1">Animal shelter volunteer work</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-8 font-sans text-navy-blue/80">
                I regularly volunteer at a local pet shelter in Malta, helping with animal care, website maintenance, and social media. It's a welcome break from the digital world!
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-soft-emerald/10 px-4 py-2 rounded-full text-sm font-medium text-soft-emerald flex items-center">
                  <Users className="w-4 h-4 mr-2 text-soft-emerald" /> Community Work
                </span>
                <span className="bg-navy-blue/10 px-4 py-2 rounded-full text-sm font-medium text-navy-blue flex items-center">
                  <Code className="w-4 h-4 mr-2 text-navy-blue" /> Tech Support
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional interests */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 gradient-text font-serif">Leisure & Personal Interests</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="presidential-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(184,134,11,0.25)]">
              <div className="w-14 h-14 bg-soft-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-deep-gold" />
              </div>
              <h4 className="font-serif font-medium text-navy-blue mb-2">Reading</h4>
              <p className="text-sm text-navy-blue/70">Science fiction & tech books</p>
            </div>
            
            <div className="presidential-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(184,134,11,0.25)]">
              <div className="w-14 h-14 bg-soft-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deep-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-serif font-medium text-navy-blue mb-2">Fitness</h4>
              <p className="text-sm text-navy-blue/70">Running & weight training</p>
            </div>
            
            <div className="presidential-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(184,134,11,0.25)]">
              <div className="w-14 h-14 bg-soft-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deep-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h4 className="font-serif font-medium text-navy-blue mb-2">Music</h4>
              <p className="text-sm text-navy-blue/70">Playing guitar & singing</p>
            </div>
            
            <div className="presidential-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(184,134,11,0.25)]">
              <div className="w-14 h-14 bg-soft-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deep-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                </svg>
              </div>
              <h4 className="font-serif font-medium text-navy-blue mb-2">Travel</h4>
              <p className="text-sm text-navy-blue/70">Exploring new cultures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
