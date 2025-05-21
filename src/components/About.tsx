
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Stephanie Boms</h2>
          <Separator className="w-16 h-1 bg-deep-blue mb-8" />
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-lg">
              I'm a backend systems engineer with over 10 years of experience designing and building reliable, scalable systems across startups, governments, and regulated industries like healthcare and fintech.
            </p>
            
            <p className="mb-4 text-lg">
              My core strength lies in breaking complex technical challenges into real, reliable infrastructure — whether it's an API powering a national health platform, a system that needs to scale under pressure, or a fintech service that must be airtight.
            </p>
            
            <p className="mb-4 text-lg">
              I've led backend teams, advised founders, audited enterprise codebases, and helped cross-functional teams align around the right tech decisions. I bring deep technical clarity and long-term thinking to every project.
            </p>
            
            <p className="text-lg font-medium">
              If you care about building systems that won't break when it matters — I'd love to talk.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-grotesk text-xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Years of technical experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-grotesk text-xl font-bold mb-2">8+</h3>
            <p className="text-gray-600">Countries worked with</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-grotesk text-xl font-bold mb-2">35+</h3>
            <p className="text-gray-600">Enterprise systems delivered</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-grotesk text-xl font-bold mb-2">4+</h3>
            <p className="text-gray-600">Technical leadership roles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
