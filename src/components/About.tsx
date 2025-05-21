
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
            
            <p className="mb-4 text-lg">
              Beyond my technical work, I've been a mentor for women in tech at Resplash Academy since 2019, and I spoke at the official Girls in ICT events in 2015 and 2016 to inspire senior secondary girls interested in STEM. In December, I was invited to speak at a webinar for Charis Intelligence in Lagos, where I also serve on the board of directors.
            </p>
            
            <p className="mb-4 text-lg">
              For the fun side of life, I volunteer at a pet shelter here in Malta, and I'm also a proud karaoke champion!
            </p>
            
            <p className="text-lg font-medium">
              If you care about building systems that won't break when it matters — I'd love to talk.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-grotesk text-xl font-bold mb-2">{counts.years}+</h3>
            <p className="text-gray-600">Years of technical experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-grotesk text-xl font-bold mb-2">{counts.countries}+</h3>
            <p className="text-gray-600">Countries worked with</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-grotesk text-xl font-bold mb-2">{counts.systems}+</h3>
            <p className="text-gray-600">Enterprise systems delivered</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-grotesk text-xl font-bold mb-2">{counts.leadership}+</h3>
            <p className="text-gray-600">Technical leadership roles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
