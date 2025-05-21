import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { ExternalLink, Github, ArrowUp } from "lucide-react";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  badgeColor: string;
  description: string;
  role: string;
  technologies: string;
  fullDescription: string;
  results: string;
  githubLink?: string;
  liveLink?: string;
  screenshots?: string[];
}

// Define badge color mapping to avoid template literal usage in className
const getBadgeColorClasses = (color: string) => {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    green: "bg-green-100 text-green-800 hover:bg-green-100",
    purple: "bg-purple-100 text-purple-800 hover:bg-purple-100",
    amber: "bg-amber-100 text-amber-800 hover:bg-amber-100",
    red: "bg-red-100 text-red-800 hover:bg-red-100"
  };
  return colorMap[color] || "bg-gray-100 text-gray-800 hover:bg-gray-100";
};

const projects: Project[] = [
  {
    id: 1,
    title: "GovHealth API Revamp",
    category: "Government Health Infrastructure",
    badgeColor: "blue",
    description: "Designed and restructured backend logic for a national health records API used by over 2M citizens. Improved uptime by 42%, reduced latency by 33%.",
    role: "Lead Systems Architect",
    technologies: ".NET, React, Docker, Azure",
    fullDescription: "Led a comprehensive revamp of the national health records API, making it more reliable and performant for over 2 million citizens. The project involved complex data migration, implementation of new security protocols, and rebuilding the backend architecture from the ground up.",
    results: "Achieved 99.99% uptime (up from 96%), reduced average API response time from 1.2s to 0.4s, and implemented GDPR-compliant data handling across all endpoints.",
    githubLink: "https://github.com/steffanie07/govhealth-api",
  },
  {
    id: 2,
    title: "Rello Payment Platform",
    category: "Fintech",
    badgeColor: "green",
    description: "Developed a fintech application for loyalty and rewards management using Java backend and React frontend. Created scalable architecture to handle 200K+ daily transactions.",
    role: "Full-stack Developer",
    technologies: "Java, React, PostgreSQL, AWS",
    fullDescription: "Built a comprehensive payment platform that integrated with multiple banking partners and handled complex loyalty program logic. Developed a microservices architecture to ensure scalability and fault tolerance for high transaction volumes.",
    results: "Successfully processed over 5 million transactions in the first year, with 99.98% transaction success rate and an average processing time of under 300ms.",
    githubLink: "https://github.com/steffanie07/rello-payment",
    liveLink: "https://rello-payments.com"
  },
  {
    id: 3,
    title: "E-Government Service Portal",
    category: "E-Government",
    badgeColor: "purple",
    description: "Led development of services.gov.ng, enabling citizens to access government services online. Built secure backend services integrating with multiple government databases.",
    role: "Systems Analyst & Lead Developer",
    technologies: "Java, .NET, Joomla, MySQL",
    fullDescription: "Developed and deployed a comprehensive e-government portal allowing citizens to access critical government services online. Integrated with over 15 different government departments and databases to provide a unified access point for services.",
    results: "Reduced average service processing time from 14 days to 3 days, with over 500,000 documents processed in the first year of operation.",
    githubLink: "https://github.com/steffanie07/egovportal",
  },
  {
    id: 4,
    title: "Game Admin Portal v2",
    category: "Gaming",
    badgeColor: "amber",
    description: "Rebuilt administrative dashboard for gaming platform, enhancing reporting features and affiliate tracking. Improved data accuracy and response time for stakeholders.",
    role: "Software Developer",
    technologies: "Symfony, React.js, .NET",
    fullDescription: "Redesigned and rebuilt the administrative dashboard for a major gaming platform, focusing on advanced reporting capabilities, real-time analytics, and comprehensive affiliate tracking tools.",
    results: "Reduced report generation time by 78% and improved data accuracy by implementing new validation protocols. Enhanced user satisfaction with modern, responsive UI/UX design.",
    githubLink: "https://github.com/steffanie07/game-admin",
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Selected Work</h2>
          <Separator className="w-16 h-1 bg-deep-blue mx-auto mb-6" />
          <p className="text-gray-600 mb-8">Dive into some of my most impactful projects and technical accomplishments</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <Badge className={`mb-2 ${getBadgeColorClasses(project.badgeColor)} w-fit`}>
                      {project.category}
                    </Badge>
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{project.description}</p>
                    <div>
                      <p className="font-medium">Role:</p>
                      <p>{project.role}</p>
                    </div>
                    <div>
                      <p className="font-medium">Technologies:</p>
                      <p className="font-mono text-sm">{project.technologies}</p>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="text-deep-blue hover:text-white hover:bg-deep-blue">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <Badge className={`mb-2 ${getBadgeColorClasses(project.badgeColor)} w-fit`}>
                    {project.category}
                  </Badge>
                  <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Overview</h3>
                    <p>{project.fullDescription}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">Role</h3>
                    <p>{project.role}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">Technologies</h3>
                    <p className="font-mono text-sm">{project.technologies}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">Results</h3>
                    <p>{project.results}</p>
                  </div>
                </div>
                
                <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                  {project.githubLink && (
                    <Button variant="outline" onClick={() => window.open(project.githubLink, '_blank')} className="w-full sm:w-auto font-medium">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  )}
                  
                  {project.liveLink && (
                    <Button onClick={() => window.open(project.liveLink, '_blank')} className="w-full sm:w-auto bg-deep-blue hover:bg-deep-blue/90 text-white font-medium">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  
                  <DialogClose asChild>
                    <Button variant="secondary" className="w-full sm:w-auto">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      {showScrollToTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-md bg-deep-blue text-white hover:bg-deep-blue/90 z-40"
          onClick={scrollToTop}
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </section>
  );
};

export default Projects;
