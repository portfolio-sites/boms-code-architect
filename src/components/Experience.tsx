
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
      role: "Software Developer & Team Lead",
      period: "May 2024 - Present",
      description: "Led a cross-functional team building healthcare solutions for the Ministry for Health using .Net and React.js. Introduced agile standups, SharePoint workflows, and mentored teammates in modern frameworks.",
      skills: [".NET", "React.js", "SharePoint", "Team Leadership"],
      logo: "cursor"
    },
    {
      company: "Tornado Games",
      location: "Malta",
      role: "Software Developer",
      period: "October 2023 - May 2024",
      description: "Developed admin portal (v2) and game features using Symfony and React. Improved affiliate tracking using .Net and SharePoint dashboards.",
      skills: ["Symfony", "React", ".NET", "SharePoint"],
      logo: "tornado"
    },
    {
      company: "Sigma World",
      location: "Cyprus",
      role: "Web Developer",
      period: "August 2023 - October 2023",
      description: "Refactored event system using PHP & React, enhancing scalability by 30%.",
      skills: ["PHP", "React", "Event Systems"],
      logo: "sigma"
    },
    {
      company: "Triesbeot",
      location: "Malta",
      role: "Software Developer",
      period: "June 2023 - August 2023",
      description: "Built cross-platform mobile app using React Native and Laravel APIs.",
      skills: ["React Native", "Laravel", "API Development"],
      logo: "tries"
    },
    {
      company: "Dukka",
      location: "Lagos",
      role: "Software Developer",
      period: "October 2022 - August 2023",
      description: "Engineered core APIs for a bookkeeping app with Java, enabling multi-form payment support.",
      skills: ["Java", "API Development", "Finance Tech"],
      logo: "dukka"
    },
    {
      company: "MTC Media",
      location: "Scotland",
      role: "Full Stack Developer",
      period: "January 2022 - May 2023",
      description: "Delivered client websites with Drupal, Laravel & Vue.js; led full-cycle deployments.",
      skills: ["Drupal", "Laravel", "Vue.js", "Full Stack"],
      logo: "mtc"
    },
    {
      company: "MTech Communications",
      location: "Nigeria",
      role: "Full Stack Developer",
      period: "May 2018 - January 2022",
      description: "Developed fintech app (Rello) with Java + Angular; built React Native mobile apps with Laravel APIs.",
      skills: ["Java", "Angular", "React Native", "Laravel"],
      logo: "mtech"
    },
    {
      company: "Federal Ministry of Communications",
      location: "Nigeria",
      role: "Systems Analyst",
      period: "September 2014 - May 2018",
      description: "Led development of services.gov.ng using Java and .Net; integrated with databases and payment systems.",
      skills: ["Java", ".NET", "System Architecture", "Government Tech"],
      logo: "ministry"
    }
  ];

  const renderLogoPlaceholder = (company: string) => {
    const initials = company.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();
    const colors = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-blue-600",
      "from-yellow-500 to-orange-600",
      "from-red-500 to-pink-600",
      "from-indigo-500 to-cyan-500",
      "from-emerald-500 to-teal-600",
      "from-violet-500 to-fuchsia-600",
      "from-amber-500 to-red-600"
    ];
    
    const colorIndex = experiences.findIndex(exp => exp.company === company) % colors.length;
    
    return (
      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-white text-xl font-bold shadow-md`}>
        {initials}
      </div>
    );
  };

  // Companies I've worked at - Logos display
  const companyLogos = [
    { name: "MTC Media", logo: "/lovable-uploads/e9ba93a9-bc30-4911-9119-7e316fb0ef99.png", description: "Laravel & Vue.js Development" },
    { name: "MTech Communications", logo: "/lovable-uploads/4406eb65-8acc-411b-97f3-bb0179745128.png", description: "Java & React Native Development" },
    { name: "Cursor", color: "from-blue-500 to-purple-600", description: "Healthcare System Architecture" },
    { name: "Dukka", color: "from-green-500 to-blue-600", description: "Java API Development" }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#1F2937]">Companies I've Worked With</h2>
          <Separator className="w-16 h-1 bg-deep-blue mb-6" />
          <p className="text-lg text-[#6B7280]">
            Building enterprise systems across government, fintech, healthcare, and gaming sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Timeline Navigation - Desktop */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 space-y-1 pr-4">
              {experiences.map((exp, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full cursor-pointer p-3 rounded-lg flex items-center gap-3 transition-all border-l-4 ${
                    activeExperience === index 
                      ? 'bg-blue-50 border-[#2563EB]' 
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    activeExperience === index ? 'bg-[#2563EB]' : 'bg-gray-400'
                  }`}></div>
                  <div className="text-left">
                    <p className={`font-medium ${
                      activeExperience === index ? 'text-[#2563EB]' : 'text-[#1F2937]'
                    }`}>
                      {exp.company}
                    </p>
                    <p className="text-sm text-[#6B7280]">{exp.period.split(' - ')[0]}</p>
                  </div>
                </button>
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
                      ? 'bg-[#2563EB] text-white' 
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
            <Card className="p-6 md:p-8 shadow-lg border-0 animate-fade-in">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-4 border-b">
                <div className="flex items-center gap-4">
                  {renderLogoPlaceholder(experiences[activeExperience].company)}
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F2937]">{experiences[activeExperience].company}</h3>
                    <p className="text-[#6B7280]">{experiences[activeExperience].location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#2563EB]">{experiences[activeExperience].role}</p>
                  <p className="text-[#6B7280]">{experiences[activeExperience].period}</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-[#1F2937] mb-6">
                  {experiences[activeExperience].description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {experiences[activeExperience].skills.map((skill, index) => (
                    <Badge key={index} variant={
                      index % 5 === 0 ? "blue" : 
                      index % 5 === 1 ? "green" : 
                      index % 5 === 2 ? "purple" :
                      index % 5 === 3 ? "amber" : "red"
                    }>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-6">Featured Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {companyLogos.map((company, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full">
                {company.logo ? (
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="max-w-full h-16 object-contain mb-2"
                  />
                ) : (
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${company.color} flex items-center justify-center text-white text-xl font-bold mb-2`}>
                    {company.name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                )}
                <p className="font-medium text-center text-sm mt-2">{company.name}</p>
                <p className="text-xs text-gray-500 text-center">{company.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
