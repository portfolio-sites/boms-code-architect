
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Trophy, Users, Star, BookOpen, Lightbulb, Code } from "lucide-react";
import { useState } from "react";

const Awards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="awards" className="py-20 md:py-28 bg-gradient-to-b from-white to-light-gray relative overflow-hidden">
      {/* Background pattern */}
      <div className="pattern-overlay bg-dots-pattern"></div>
      
      {/* Decorative shapes */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-soft-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-0 w-60 h-60 bg-soft-green/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-2">
            <span className="bg-soft-purple/20 text-royal-blue px-3 py-1 rounded-full text-sm font-medium">
              Personal Side
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Fun Stuff & Community</h2>
          <Separator className="w-16 h-1 bg-gradient-to-r from-royal-blue to-vivid-blue mx-auto mb-8" />
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            Beyond code and systems, here are some things I enjoy and contribute to in my free time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <Card 
            className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl ${
              hoveredCard === 0 ? 'transform -translate-y-2' : ''
            }`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-2 bg-gradient-to-r from-royal-blue to-vivid-blue"></div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-blue to-vivid-blue rounded-xl flex items-center justify-center shadow-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-grotesk text-2xl font-bold gradient-text">Karaoke Champion</h3>
              </div>
              
              <div className="aspect-video bg-white rounded-xl mb-6 overflow-hidden flex items-center justify-center shadow-inner p-2">
                <img 
                  src="/lovable-uploads/e21d82f1-90b6-4538-9c79-89a4a6e10fdf.png" 
                  alt="First Place Halloween Karaoke 2023 Trophy" 
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
              
              <p className="text-lg leading-relaxed">
                Proud winner of the 2023 Halloween Karaoke Contest. My rendition of "Thriller" apparently brought down the house!
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-soft-yellow px-3 py-1 rounded-full text-sm font-medium text-slate-gray flex items-center">
                  <Star className="w-4 h-4 mr-1 text-amber-500" /> First Place
                </span>
                <span className="bg-soft-blue/20 px-3 py-1 rounded-full text-sm font-medium text-slate-gray flex items-center">
                  <Lightbulb className="w-4 h-4 mr-1 text-amber-500" /> Halloween 2023
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card 
            className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl ${
              hoveredCard === 1 ? 'transform -translate-y-2' : ''
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-2 bg-gradient-to-r from-royal-blue to-vivid-blue"></div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-blue to-vivid-blue rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-grotesk text-2xl font-bold gradient-text">Animal Shelter Volunteer</h3>
              </div>
              
              <div className="aspect-video bg-white rounded-xl mb-6 overflow-hidden shadow-inner">
                <img 
                  src="/lovable-uploads/ccbe82b5-cf22-4aab-9ca1-2b75e556fb1e.png" 
                  alt="Animal Shelter Volunteering" 
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              
              <p className="text-lg leading-relaxed">
                I regularly volunteer at a local pet shelter in Malta, helping with animal care, website maintenance, and social media. It's a welcome break from the digital world!
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-soft-green px-3 py-1 rounded-full text-sm font-medium text-slate-gray flex items-center">
                  <Users className="w-4 h-4 mr-1 text-green-500" /> Community Work
                </span>
                <span className="bg-soft-blue/20 px-3 py-1 rounded-full text-sm font-medium text-slate-gray flex items-center">
                  <Code className="w-4 h-4 mr-1 text-blue-500" /> Tech Support
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional interests */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Other Interests</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-soft-yellow/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-amber-500" />
              </div>
              <h4 className="font-medium mb-2">Reading</h4>
              <p className="text-sm text-slate-gray">Science fiction & tech books</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-soft-green/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Fitness</h4>
              <p className="text-sm text-slate-gray">Running & weight training</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-soft-blue/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Music</h4>
              <p className="text-sm text-slate-gray">Playing guitar & singing</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-soft-purple/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Travel</h4>
              <p className="text-sm text-slate-gray">Exploring new cultures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
