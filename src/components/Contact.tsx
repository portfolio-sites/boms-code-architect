
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Let's Connect</h2>
            <Separator className="w-16 h-0.5 bg-emerald-400 mx-auto mb-6" />
            <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Interested in working together, booking me for a session, or getting a technical referral? Use the form below or reach out directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border-gray-200 dark:border-gray-700 focus:border-emerald-300 focus:ring-emerald-200 dark:focus:border-emerald-600 dark:focus:ring-emerald-800"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="border-gray-200 dark:border-gray-700 focus:border-emerald-300 focus:ring-emerald-200 dark:focus:border-emerald-600 dark:focus:ring-emerald-800"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Purpose
                  </label>
                  <Select value={formState.purpose} onValueChange={handleSelectChange}>
                    <SelectTrigger className="border-gray-200 dark:border-gray-700 focus:border-emerald-300 focus:ring-emerald-200 dark:focus:border-emerald-600 dark:focus:ring-emerald-800">
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
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={4}
                    className="border-gray-200 dark:border-gray-700 focus:border-emerald-300 focus:ring-emerald-200 dark:focus:border-emerald-600 dark:focus:ring-emerald-800"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="space-y-5">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">Email</h3>
                </div>
                <a href="mailto:Steffanie07@gmail.com" className="font-medium text-emerald-600 hover:underline dark:text-emerald-400">
                  Steffanie07@gmail.com
                </a>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">Current Location</h3>
                </div>
                <p className="font-medium text-gray-600 dark:text-gray-300">Swieqi, Malta</p>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">LinkedIn</h3>
                </div>
                <a href="https://www.linkedin.com/in/stephanie-boms-07" target="_blank" rel="noopener noreferrer" className="font-medium text-emerald-600 hover:underline dark:text-emerald-400">
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
