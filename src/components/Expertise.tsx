
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Code, Briefcase } from "lucide-react";
import { useState } from "react";

const Expertise = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  return (
    <section id="expertise" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Expertise</h2>
          <Separator className="w-16 h-1 bg-deep-blue mx-auto mb-8" />
          <p className="text-gray-600 text-lg">Specialized skills from a decade of development experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card 
            className={`border-0 shadow-lg transition-all duration-300 ${hoveredCard === 0 ? 'transform -translate-y-2 shadow-xl' : ''}`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Backend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Laravel & Symfony API Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Java Enterprise Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Database Architecture (MongoDB, MySQL, PostgreSQL)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>PHP & .NET Systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card 
            className={`border-0 shadow-lg transition-all duration-300 ${hoveredCard === 1 ? 'transform -translate-y-2 shadow-xl' : ''}`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Frontend & Mobile</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>React, Angular & Vue.js Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Next.js & Modern JS Frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>React Native & Flutter Mobile Apps</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Responsive UI/UX Implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card 
            className={`border-0 shadow-lg transition-all duration-300 ${hoveredCard === 2 ? 'transform -translate-y-2 shadow-xl' : ''}`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Industry Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Government & Healthcare Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Fintech & Payment Platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Gaming & Event Management</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Docker & DevOps Implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
