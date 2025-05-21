
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  
  const experiences = [
    {
      company: "Cursor",
      location: "Malta",
      role: "Software Developer",
      period: "April 2024 - Present",
      description: "Contracted to develop robust software solutions for the Ministry for Health, contributing to the optimization of healthcare services.",
      skills: ["PHP", "Laravel", "Vue.js"],
      logo: "cursor"
    },
    {
      company: "Tornado Games",
      location: "Malta",
      role: "Software Developer",
      period: "October 2023 - April 2024",
      description: "Collaborated in a team for game and feature implementations, including the development of version 2 for the game admin portal. Worked in the affiliate arm of the business using Symfony.",
      skills: ["Symfony", "PHP", "JavaScript"],
      logo: "tornado"
    },
    {
      company: "Sigma World",
      location: "Cyprus",
      role: "Web Developer",
      period: "August 2023 - October 2023",
      description: "Led the refactoring and innovation of the event management system using PHP. Worked with the team to build and maintain the affiliated sites.",
      skills: ["PHP", "JavaScript", "MySQL"],
      logo: "sigma"
    },
    {
      company: "Triesbeot",
      location: "Germany",
      role: "Software Developer",
      period: "June 2023 - August 2023",
      description: "Developed a cross-platform mobile application with React Native and Laravel APIs.",
      skills: ["React Native", "Laravel", "API Development"],
      logo: "tries"
    },
    {
      company: "Dukka",
      location: "Lagos",
      role: "Software Developer",
      period: "October 2022 - August 2023",
      description: "Contributed to the development of Dukka, a bookkeeping application that facilitates payments in multiple forms. Played a key role in building the core API of the application using Java.",
      skills: ["Java", "API Development", "Finance Tech"],
      logo: "dukka"
    },
    {
      company: "MTC Media",
      location: "Scotland",
      role: "Full Stack Developer",
      period: "January 2022 - May 2023",
      description: "Managed full lifecycle web and application development, from requirement identification to deployment, focusing on Laravel and Vue.js.",
      skills: ["Laravel", "Vue.js", "Full Stack"],
      logo: "mtc"
    },
    {
      company: "MTech Communications",
      location: "Nigeria",
      role: "Full Stack Developer",
      period: "May 2018 - January 2022",
      description: "Designed and deployed mobile apps integrating React Native with Laravel API and PostgreSQL. Collaborated with the team to develop Rello, a fintech application designed to manage loyalty and rewards programs, utilizing a Java back-end and Angular front-end.",
      skills: ["React Native", "Java", "Angular", "PostgreSQL"],
      logo: "mtech"
    },
    {
      company: "Federal Ministry of Communications",
      location: "Nigeria",
      role: "Systems Analyst",
      period: "September 2014 - May 2018",
      description: "Led the development of the E-Government Service Portal (services.gov.ng), an online platform allowing citizens to access government services such as passport applications, tax filings, and document verifications. Utilized Java for secure and scalable back-end services, ensuring smooth integration with multiple government databases and payment systems.",
      skills: ["Java", "System Architecture", "Government Tech"],
      logo: "ministry"
    }
  ];

  const renderLogoPlaceholder = (company: string) => {
    const initials = company.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();
    const colors = [
      "from-blue-400 to-purple-600",
      "from-green-400 to-blue-500",
      "from-yellow-400 to-orange-500",
      "from-red-400 to-pink-500",
      "from-indigo-400 to-cyan-400",
      "from-emerald-400 to-teal-500",
      "from-violet-400 to-fuchsia-500",
      "from-amber-400 to-red-500"
    ];
    
    const colorIndex = experiences.findIndex(exp => exp.company === company) % colors.length;
    
    return (
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-white text-xl font-bold`}>
        {initials}
      </div>
    );
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Experience</h2>
          <Separator className="w-16 h-1 bg-deep-blue mb-8" />
          <p className="text-lg text-gray-700">
            Over a decade of experience building enterprise systems across government, fintech, healthcare, and gaming sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Timeline Navigation - Desktop */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 space-y-1">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`cursor-pointer p-3 rounded-lg flex items-center gap-3 transition-all border-l-4 ${
                    activeExperience === index 
                      ? 'bg-deep-blue/5 border-deep-blue' 
                      : 'border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    activeExperience === index ? 'bg-deep-blue' : 'bg-gray-400'
                  }`}></div>
                  <div>
                    <p className={`font-medium ${
                      activeExperience === index ? 'text-deep-blue' : 'text-gray-700'
                    }`}>
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500">{exp.period.split(' - ')[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Timeline Navigation - Mobile */}
          <div className="lg:hidden mb-6 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
                    activeExperience === index 
                      ? 'bg-deep-blue text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience Details */}
          <div className="lg:col-span-3">
            <Card className="p-6 shadow-lg border-0 animate-fade-in">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {renderLogoPlaceholder(experiences[activeExperience].company)}
                  <div>
                    <h3 className="text-2xl font-bold">{experiences[activeExperience].company}</h3>
                    <p className="text-gray-600">{experiences[activeExperience].location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-deep-blue">{experiences[activeExperience].role}</p>
                  <p className="text-gray-600">{experiences[activeExperience].period}</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700">
                  {experiences[activeExperience].description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {experiences[activeExperience].skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
