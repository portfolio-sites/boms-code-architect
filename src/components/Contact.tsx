
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Linkedin } from "lucide-react";
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
    
    // Form submission logic - this would typically be an API call
    setTimeout(() => {
      const formData = {
        to: "Steffanie07@gmail.com",
        subject: `Contact Form: ${formState.purpose}`,
        ...formState
      };
      
      console.log("Form submitted:", formData);
      
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
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#1F2937]">Let's Connect</h2>
            <Separator className="w-16 h-1 bg-[#2563EB] mx-auto mb-8" />
            <p className="text-lg max-w-2xl mx-auto text-[#6B7280]">
              Interested in working together, booking me for a session, or getting a technical referral? Use the form below or reach out directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#1F2937]">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#1F2937]">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium mb-1 text-[#1F2937]">
                    Purpose
                  </label>
                  <Select value={formState.purpose} onValueChange={handleSelectChange}>
                    <SelectTrigger className="border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]">
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
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#1F2937]">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={4}
                    className="border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-grotesk text-lg font-bold text-[#1F2937]">Email</h3>
                </div>
                <a href="mailto:Steffanie07@gmail.com" className="font-medium text-[#2563EB] hover:underline">
                  Steffanie07@gmail.com
                </a>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-grotesk text-lg font-bold text-[#1F2937]">Current Location</h3>
                </div>
                <p className="font-medium text-[#6B7280]">Swieqi, Malta</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-grotesk text-lg font-bold text-[#1F2937]">LinkedIn</h3>
                </div>
                <a href="https://www.linkedin.com/in/stephanie-boms-07" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2563EB] hover:underline">
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
