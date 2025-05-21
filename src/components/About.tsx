
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const About = () => {
  const [counts, setCount] = useState({
    years: 0,
    countries: 0,
    systems: 0,
    leadership: 0
  });

  const targetCounts = {
    years: 10,
    countries: 8,
    systems: 35,
    leadership: 4
  };

  useEffect(() => {
    const duration = 2000;
    const frameRate = 60;
    const framesCount = duration / 1000 * frameRate;
    let frame = 0;

    const interval = setInterval(() => {
      if (frame < framesCount) {
        frame++;
        const progress = frame / framesCount;
        
        setCount({
          years: Math.ceil(progress * targetCounts.years),
          countries: Math.ceil(progress * targetCounts.countries),
          systems: Math.ceil(progress * targetCounts.systems),
          leadership: Math.ceil(progress * targetCounts.leadership)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, []);
  
  // Skills animation
  const [currentSkillCategory, setCurrentSkillCategory] = useState(0);
  
  const skillCategories = [
    {
      title: "Backend & APIs",
      skills: ["Laravel", "PHP", "Java", "Symfony", ".NET", "MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Frontend & Mobile",
      skills: ["React", "Angular", "Vue.js", "Next.js", "React Native", "Flutter", "JavaScript", "jQuery"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "SEO", "Google Analytics", "Git", "CI/CD", "WordPress", "Google Tag Manager"]
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillCategory((prev) => (prev + 1) % skillCategories.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Stephanie Boms</h2>
          <Separator className="w-16 h-1 bg-deep-blue mb-8" />
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-lg text-gray-700">
              I'm a seasoned software developer with over 10 years of experience designing and building reliable, scalable systems across government sectors, fintech, gaming, and healthcare industries.
            </p>
            
            <p className="mb-4 text-lg text-gray-700">
              My core strength lies in full-stack development, particularly backend architecture — whether it's building APIs for national healthcare platforms, developing fintech applications with Java, or creating scalable systems using Laravel and Vue.js.
            </p>
            
            <p className="mb-4 text-lg text-gray-700">
              I've worked with organizations across multiple countries including the UK, Nigeria, Malta, Germany, Scotland, and Cyprus, bringing technical expertise and cross-cultural collaboration to every project.
            </p>
            
            <div className="my-8 bg-gray-50 rounded-lg shadow-sm transition-all duration-500 overflow-hidden">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4 text-deep-blue">{skillCategories[currentSkillCategory].title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[currentSkillCategory].skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-deep-blue/10 text-deep-blue rounded-full text-sm animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-deep-blue via-blue-500 to-purple-500"></div>
            </div>
            
            <p className="text-lg font-medium text-gray-800">
              If you're looking for a developer who can build robust, scalable systems that stand the test of time — I'd love to talk.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-grotesk text-3xl font-bold mb-2 text-deep-blue">{counts.years}+</h3>
            <p className="text-gray-600">Years of technical experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-grotesk text-3xl font-bold mb-2 text-deep-blue">{counts.countries}+</h3>
            <p className="text-gray-600">Countries worked with</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-grotesk text-3xl font-bold mb-2 text-deep-blue">{counts.systems}+</h3>
            <p className="text-gray-600">Enterprise systems delivered</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-grotesk text-3xl font-bold mb-2 text-deep-blue">{counts.leadership}+</h3>
            <p className="text-gray-600">Technical leadership roles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
