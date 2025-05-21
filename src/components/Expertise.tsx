
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Users, Shield } from "lucide-react";

const Expertise = () => {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What You Can Bring Me In For</h2>
          <Separator className="w-16 h-1 bg-deep-blue mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Backend & Infrastructure Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Backend Architecture Design</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>API Scalability & Design Reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Infrastructure for Regulated Industries</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Legacy System Overhauls</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Technical Leadership & Advisory</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Fractional CTO Services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Startup Technical Due Diligence</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Dev Team Structure & Hiring Guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Developer Operations & Team Scaling</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Systems Integrity & Oversight</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Secure Data Governance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Compliance-Ready Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Platform Audit & System Health Checks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                  <span>Architecture Coaching for Founders</span>
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
