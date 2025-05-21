
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Trophy, Users, Star, BookOpen, Lightbulb, Code } from "lucide-react";
import { useState } from "react";

const Awards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="awards" className="py-20 bg-beige dark:bg-charcoal/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="pattern-overlay bg-dots-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-3">
            <span className="bg-orange/10 dark:bg-orange/20 text-orange dark:text-orange-light px-4 py-2 rounded-full text-sm font-medium tracking-wide">
              PERSONAL ENDEAVORS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-charcoal dark:text-beige">Community & Recreational Activities</h2>
          <Separator className="w-24 h-0.5 bg-orange/30 mx-auto mb-8" />
          <p className="text-graphite dark:text-beige/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond professional accomplishments, here are some aspects of my personal involvement and interests that reflect my values and character.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            className={`border border-beige/20 dark:border-beige/10 bg-white dark:bg-charcoal hover:shadow-lg transition-all duration-500 overflow-hidden rounded-lg ${
              hoveredCard === 0 ? 'transform -translate-y-1' : ''
            }`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-1 bg-orange"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center shadow-sm">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-beige">Karaoke Champion</h3>
              </div>
              
              <div className="aspect-video bg-beige/50 dark:bg-charcoal/50 rounded-lg mb-6 overflow-hidden shadow-sm border border-beige/20 dark:border-charcoal/30">
                <img 
                  src="/lovable-uploads/e21d82f1-90b6-4538-9c79-89a4a6e10fdf.png" 
                  alt="First Place Halloween Karaoke 2023 Trophy" 
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
              
              <p className="text-base leading-relaxed mb-6 text-graphite dark:text-beige/80">
                Proud winner of the 2023 Halloween Karaoke Contest. My rendition of "Thriller" apparently brought down the house!
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange/10 dark:bg-orange/20 px-3 py-1 rounded-full text-sm font-medium text-orange dark:text-orange-light flex items-center">
                  <Star className="w-4 h-4 mr-1 text-orange" /> First Place
                </span>
                <span className="bg-beige dark:bg-charcoal/80 px-3 py-1 rounded-full text-sm font-medium text-graphite dark:text-beige/80 flex items-center">
                  <Lightbulb className="w-4 h-4 mr-1 text-gold" /> Halloween 2023
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card 
            className={`border border-beige/20 dark:border-beige/10 bg-white dark:bg-charcoal hover:shadow-lg transition-all duration-500 overflow-hidden rounded-lg ${
              hoveredCard === 1 ? 'transform -translate-y-1' : ''
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-1 bg-orange"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center shadow-sm">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-beige">Animal Shelter Volunteer</h3>
              </div>
              
              <div className="aspect-video bg-beige/50 dark:bg-charcoal/50 rounded-lg mb-6 overflow-hidden shadow-sm border border-beige/20 dark:border-charcoal/30">
                <img 
                  src="/lovable-uploads/bdc55307-cabc-4b9b-ba2d-42df32914a49.png" 
                  alt="Speaking at Girls in ICT Day 2016" 
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              
              <p className="text-base leading-relaxed mb-6 text-graphite dark:text-beige/80">
                I regularly volunteer at a local pet shelter in Malta, helping with animal care, website maintenance, and social media. It's a welcome break from the digital world!
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange/10 dark:bg-orange/20 px-3 py-1 rounded-full text-sm font-medium text-orange dark:text-orange-light flex items-center">
                  <Users className="w-4 h-4 mr-1 text-orange" /> Community Work
                </span>
                <span className="bg-orange/10 dark:bg-orange/20 px-3 py-1 rounded-full text-sm font-medium text-orange dark:text-orange-light flex items-center">
                  <Code className="w-4 h-4 mr-1 text-orange" /> Tech Support
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional interests */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8 text-charcoal dark:text-beige">Leisure & Personal Interests</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-charcoal rounded-lg p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-beige/20 dark:border-beige/10">
              <div className="w-12 h-12 bg-orange/10 dark:bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-5 w-5 text-orange" />
              </div>
              <h4 className="font-medium text-charcoal dark:text-beige mb-2">Reading</h4>
              <p className="text-sm text-graphite dark:text-beige/70">Science fiction & tech books</p>
            </div>
            
            <div className="bg-white dark:bg-charcoal rounded-lg p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-beige/20 dark:border-beige/10">
              <div className="w-12 h-12 bg-orange/10 dark:bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-medium text-charcoal dark:text-beige mb-2">Fitness</h4>
              <p className="text-sm text-graphite dark:text-beige/70">Running & weight training</p>
            </div>
            
            <div className="bg-white dark:bg-charcoal rounded-lg p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-beige/20 dark:border-beige/10">
              <div className="w-12 h-12 bg-orange/10 dark:bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h4 className="font-medium text-charcoal dark:text-beige mb-2">Music</h4>
              <p className="text-sm text-graphite dark:text-beige/70">Playing guitar & singing</p>
            </div>
            
            <div className="bg-white dark:bg-charcoal rounded-lg p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-beige/20 dark:border-beige/10">
              <div className="w-12 h-12 bg-orange/10 dark:bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                </svg>
              </div>
              <h4 className="font-medium text-charcoal dark:text-beige mb-2">Travel</h4>
              <p className="text-sm text-graphite dark:text-beige/70">Exploring new cultures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
