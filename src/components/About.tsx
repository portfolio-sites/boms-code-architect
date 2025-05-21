
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
  
  // Skills categories
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        { name: ".NET (4.5-7.0)", level: 95 },
        { name: "React (16-18)", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "Laravel", level: 88 },
        { name: "PHP", level: 85 },
        { name: "Symfony", level: 82 },
        { name: "Java", level: 80 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 78 },
        { name: "Next.js", level: 75 }
      ]
    },
    {
      title: "Leadership & Management",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Agile Methodologies", level: 92 },
        { name: "Project Management", level: 88 },
        { name: "Mentoring", level: 95 },
        { name: "Client Engagement", level: 85 },
        { name: "Cross-Functional Collaboration", level: 90 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "Microsoft SharePoint", level: 88 },
        { name: "SEO & Analytics", level: 75 },
        { name: "Google Tag Manager", level: 72 }
      ]
    },
    {
      title: "Databases & Mobile",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 75 }
      ]
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-[#1F2937]">About Me</h2>
          <Separator className="w-16 h-1 bg-[#2563EB] mb-6" />
          
          {/* Mobile-optimized bio */}
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-base md:text-lg text-[#1F2937]">
              Software Developer and Team Lead with {counts.years}+ years experience building solutions across {counts.countries} countries. Expertise in .NET, Laravel, React, Java, and more.
            </p>
            
            <p className="hidden md:block mb-6 text-lg text-[#1F2937]">
              Over the years, I've built solutions in <span className="text-[#2563EB] font-medium">.Net, Laravel, Vue, React, and Java</span>—empowering sectors like healthcare, finance, gaming, and government. My core strength lies in full-stack development, particularly backend architecture and system design.
            </p>
            
            <p className="hidden md:block mb-6 text-lg text-[#1F2937]">
              I've worked with organizations across multiple countries including the UK, Nigeria, Malta, Germany, Scotland, and Cyprus, bringing technical expertise and cross-cultural collaboration to every project.
            </p>
          </div>
        </div>
        
        {/* Stats card grid - optimized for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-grotesk text-2xl md:text-3xl font-bold mb-1 text-[#2563EB]">{counts.years}+</h3>
            <p className="text-[#6B7280] text-sm md:text-base">Years experience</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-grotesk text-2xl md:text-3xl font-bold mb-1 text-[#2563EB]">{counts.countries}+</h3>
            <p className="text-[#6B7280] text-sm md:text-base">Countries</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-grotesk text-2xl md:text-3xl font-bold mb-1 text-[#2563EB]">{counts.systems}+</h3>
            <p className="text-[#6B7280] text-sm md:text-base">Systems built</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-grotesk text-2xl md:text-3xl font-bold mb-1 text-[#2563EB]">{counts.leadership}+</h3>
            <p className="text-[#6B7280] text-sm md:text-base">Leadership roles</p>
          </div>
        </div>
        
        {/* Skills & Tools - Mobile optimized */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-[#1F2937] text-center">Skills & Tools</h2>
          <Separator className="w-16 h-1 bg-[#2563EB] mx-auto mb-8" />
          
          {/* Mobile skills carousel */}
          <div className="block md:hidden snap-scroll-container pb-4 -mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto snap-mandatory snap-x hide-scrollbar">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="snap-center min-w-[85%] flex-shrink-0">
                  <Card className="h-full border-0 shadow-md">
                    <div className="bg-[#2563EB] text-white p-3">
                      <h3 className="text-lg font-medium">{category.title}</h3>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {category.skills.slice(0, 5).map((skill, skillIndex) => (
                          <div key={skillIndex}>
                            <div className="flex justify-between mb-1">
                              <span className="text-[#1F2937] font-medium text-sm">{skill.name}</span>
                              <span className="text-[#6B7280] text-xs">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="h-1.5 rounded-full bg-[#2563EB]" 
                                style={{ 
                                  width: `${skill.level}%`, 
                                  animation: 'growWidth 1.5s ease-out'
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-1">
              {skillCategories.map((_, index) => (
                <div key={index} className="h-1.5 w-6 bg-gray-200 rounded-full mx-0.5">
                  <div className="h-1.5 w-6 rounded-full bg-[#2563EB] opacity-30"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop skills grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-md overflow-hidden">
                <div className="bg-[#2563EB] text-white p-4">
                  <h3 className="text-xl font-medium">{category.title}</h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-[#1F2937] font-medium">{skill.name}</span>
                          <span className="text-[#6B7280] text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-[#2563EB]" 
                            style={{ 
                              width: `${skill.level}%`, 
                              animation: 'growWidth 1.5s ease-out'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Education Section - Mobile optimized */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-[#1F2937] text-center">Education</h2>
          <Separator className="w-16 h-1 bg-[#2563EB] mx-auto mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-1">Newcastle University, UK</h3>
                <h4 className="text-base md:text-lg font-medium text-[#2563EB] mb-1 md:mb-2">MSc Internet Technologies</h4>
                <p className="text-[#6B7280] text-sm">September 2011 – July 2012</p>
              </div>
            </Card>
            
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-1">Middlesex University, UK</h3>
                <h4 className="text-base md:text-lg font-medium text-[#2563EB] mb-1 md:mb-2">BSc Computer Science</h4>
                <p className="text-[#6B7280] text-sm">September 2008 – July 2011</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
