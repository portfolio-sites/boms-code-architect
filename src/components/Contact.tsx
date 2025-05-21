
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, purpose: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormState({
        name: "",
        email: "",
        purpose: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's Talk.</h2>
            <Separator className="w-16 h-1 bg-deep-blue mx-auto mb-8" />
            <p className="text-lg max-w-2xl mx-auto">
              Interested in working together, booking me for a session, or getting a technical referral? Use the form below or reach out via email.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium mb-1">
                    Purpose
                  </label>
                  <Select value={formState.purpose} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="speaking">Speaking</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="mentorship">Mentorship</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={4}
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-grotesk text-lg font-bold">Email</h3>
                </div>
                <p className="font-medium">hello@stephanieboms.com</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-grotesk text-lg font-bold mb-4">Location</h3>
                <p>Swieqi, Malta</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-grotesk text-lg font-bold mb-4">Available for</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                    <span>Remote consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                    <span>Technical advisory roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                    <span>Speaking engagements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-deep-blue rounded-full mt-2 mr-2"></span>
                    <span>Project-based collaborations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
