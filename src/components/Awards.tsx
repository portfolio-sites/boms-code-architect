
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Medal, Trophy, Heart } from "lucide-react";

const Awards = () => {
  return (
    <section id="awards" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Recognition & Community</h2>
          <Separator className="w-16 h-1 bg-deep-blue mx-auto mb-8" />
          <p className="text-lg max-w-2xl mx-auto">
            Achievements and activities that complement my technical expertise and demonstrate my commitment to the industry and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-grotesk text-xl font-bold">Technical Excellence</h3>
              </div>
              
              <div className="aspect-square bg-gray-100 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e21d82f1-90b6-4538-9c79-89a4a6e10fdf.png" 
                  alt="First Place Halloween Karaoke 2023 Trophy" 
                  className="object-contain w-full h-full p-4"
                />
              </div>
              
              <p className="text-lg">
                Recognized for outstanding contributions to system architecture and performance optimization at MTech Communications, resulting in a 40% improvement in application response time.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-grotesk text-xl font-bold">Community Contributions</h3>
              </div>
              
              <div className="aspect-square bg-gray-100 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ccbe82b5-cf22-4aab-9ca1-2b75e556fb1e.png" 
                  alt="Speaking at Girls in ICT 2016" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <p className="text-lg mb-4">
                Speaker at the Girls in ICT events (2015-2016), promoting diversity and inclusion in technology fields. Active mentor to emerging women developers through Resplash Academy.
              </p>
              
              <p className="text-lg">
                Board member at Charis Intelligence, providing technical guidance and strategic direction for educational technology initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-6">Key Industry Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full">
              <img 
                src="/lovable-uploads/e9ba93a9-bc30-4911-9119-7e316fb0ef99.png" 
                alt="MTC Media logo" 
                className="max-w-full h-16 object-contain mb-2"
              />
              <p className="font-medium text-center text-sm mt-2">MTC Media</p>
              <p className="text-xs text-gray-500 text-center">Laravel & Vue.js Development</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full">
              <img 
                src="/lovable-uploads/4406eb65-8acc-411b-97f3-bb0179745128.png" 
                alt="MTech Communications logo" 
                className="max-w-full h-16 object-contain mb-2"
              />
              <p className="font-medium text-center text-sm mt-2">MTech Communications</p>
              <p className="text-xs text-gray-500 text-center">Java & React Native Development</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full">
              <div className="h-16 flex items-center justify-center mb-2">
                <span className="font-bold text-xl text-deep-blue">Ministry of Health</span>
              </div>
              <p className="font-medium text-center text-sm mt-2">Ministry of Health</p>
              <p className="text-xs text-gray-500 text-center">Healthcare System Architecture</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full">
              <div className="h-16 flex items-center justify-center mb-2">
                <span className="font-bold text-xl text-deep-blue">Dukka</span>
              </div>
              <p className="font-medium text-center text-sm mt-2">Dukka</p>
              <p className="text-xs text-gray-500 text-center">Java API Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
