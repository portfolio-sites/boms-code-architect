
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Selected Work</h2>
          <Separator className="w-16 h-1 bg-deep-blue mx-auto mb-8" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100 w-fit">Government Health Infrastructure</Badge>
              <CardTitle className="text-2xl font-bold">GovHealth API Revamp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Designed and restructured backend logic for a national health records API used by over 2M citizens. Improved uptime by 42%, reduced latency by 33%.
              </p>
              <div>
                <p className="font-medium">Role:</p>
                <p>Lead Systems Architect</p>
              </div>
              <div>
                <p className="font-medium">Technologies:</p>
                <p className="font-mono text-sm">.NET, React, Docker, Azure</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Project 2 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100 w-fit">Fintech</Badge>
              <CardTitle className="text-2xl font-bold">Rello Payment Platform</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Developed a fintech application for loyalty and rewards management using Java backend and React frontend. Created scalable architecture to handle 200K+ daily transactions.
              </p>
              <div>
                <p className="font-medium">Role:</p>
                <p>Full-stack Developer</p>
              </div>
              <div>
                <p className="font-medium">Technologies:</p>
                <p className="font-mono text-sm">Java, React, PostgreSQL, AWS</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Project 3 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100 w-fit">E-Government</Badge>
              <CardTitle className="text-2xl font-bold">E-Government Service Portal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Led development of services.gov.ng, enabling citizens to access government services online. Built secure backend services integrating with multiple government databases.
              </p>
              <div>
                <p className="font-medium">Role:</p>
                <p>Systems Analyst & Lead Developer</p>
              </div>
              <div>
                <p className="font-medium">Technologies:</p>
                <p className="font-mono text-sm">Java, .NET, Joomla, MySQL</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Project 4 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Badge className="mb-2 bg-amber-100 text-amber-800 hover:bg-amber-100 w-fit">Gaming</Badge>
              <CardTitle className="text-2xl font-bold">Game Admin Portal v2</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Rebuilt administrative dashboard for gaming platform, enhancing reporting features and affiliate tracking. Improved data accuracy and response time for stakeholders.
              </p>
              <div>
                <p className="font-medium">Role:</p>
                <p>Software Developer</p>
              </div>
              <div>
                <p className="font-medium">Technologies:</p>
                <p className="font-mono text-sm">Symfony, React.js, .NET</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
