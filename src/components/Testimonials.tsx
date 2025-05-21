
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-deep-blue text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Client Testimonials</h2>
          <Separator className="w-16 h-1 bg-white mx-auto mb-6" />
          <p className="text-white/80">Feedback from professionals I've worked with throughout my career</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="bg-white/10 border-0 h-full flex flex-col">
            <CardContent className="pt-6 flex-grow">
              <svg className="w-8 h-8 mb-4 text-white/50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 4C13.9999 4 15.9998 4 17.9998 5C19.9998 6 21 8 21 10C21 12 20 13.5 18.5 14.5C17 15.5 16 16 15.5 16.5C14.5 17.5 14 18.5 14 20H10C10 17.5 10.5 15.5 11.5 14.5C12.5 13.5 14 12.5 15 11.9C16 11.3 16.5 10.5 16.5 9.8C16.5 9.1 16 8.4 15.3 8C14.6 7.6 13.9 7.5 13 7.5C11.6 7.5 10.1 8.5 9.5 9.9L5.8 8.4C7.1 5.8 9.4 4 11.9999 4ZM12 21C13.1046 21 14 21.8954 14 23H10C10 21.8954 10.8954 21 12 21Z"></path>
              </svg>
              <p className="text-lg mb-4">
                "Stephanie came into our startup when everything was breaking — she didn't just fix the system, she changed the way we thought about engineering."
              </p>
            </CardContent>
            <CardFooter className="text-white/80">
              <div className="text-sm">
                <p className="font-medium">— CTO, Fintech Startup</p>
              </div>
            </CardFooter>
          </Card>
          
          {/* Testimonial 2 */}
          <Card className="bg-white/10 border-0 h-full flex flex-col">
            <CardContent className="pt-6 flex-grow">
              <svg className="w-8 h-8 mb-4 text-white/50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 4C13.9999 4 15.9998 4 17.9998 5C19.9998 6 21 8 21 10C21 12 20 13.5 18.5 14.5C17 15.5 16 16 15.5 16.5C14.5 17.5 14 18.5 14 20H10C10 17.5 10.5 15.5 11.5 14.5C12.5 13.5 14 12.5 15 11.9C16 11.3 16.5 10.5 16.5 9.8C16.5 9.1 16 8.4 15.3 8C14.6 7.6 13.9 7.5 13 7.5C11.6 7.5 10.1 8.5 9.5 9.9L5.8 8.4C7.1 5.8 9.4 4 11.9999 4ZM12 21C13.1046 21 14 21.8954 14 23H10C10 21.8954 10.8954 21 12 21Z"></path>
              </svg>
              <p className="text-lg mb-4">
                "Her deep understanding of backend architecture helped us scale our platform 10x without missing a beat. A rare technical talent who can translate complex challenges into elegant solutions."
              </p>
            </CardContent>
            <CardFooter className="text-white/80">
              <div className="text-sm">
                <p className="font-medium">— Engineering Director, Healthcare Platform</p>
              </div>
            </CardFooter>
          </Card>
          
          {/* Testimonial 3 */}
          <Card className="bg-white/10 border-0 h-full flex flex-col">
            <CardContent className="pt-6 flex-grow">
              <svg className="w-8 h-8 mb-4 text-white/50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 4C13.9999 4 15.9998 4 17.9998 5C19.9998 6 21 8 21 10C21 12 20 13.5 18.5 14.5C17 15.5 16 16 15.5 16.5C14.5 17.5 14 18.5 14 20H10C10 17.5 10.5 15.5 11.5 14.5C12.5 13.5 14 12.5 15 11.9C16 11.3 16.5 10.5 16.5 9.8C16.5 9.1 16 8.4 15.3 8C14.6 7.6 13.9 7.5 13 7.5C11.6 7.5 10.1 8.5 9.5 9.9L5.8 8.4C7.1 5.8 9.4 4 11.9999 4ZM12 21C13.1046 21 14 21.8954 14 23H10C10 21.8954 10.8954 21 12 21Z"></path>
              </svg>
              <p className="text-lg mb-4">
                "Stephanie's mentorship program transformed our junior backend developers. She brings both technical depth and a unique ability to explain complex concepts in accessible ways."
              </p>
            </CardContent>
            <CardFooter className="text-white/80">
              <div className="text-sm">
                <p className="font-medium">— Program Director, Tech Bootcamp</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
