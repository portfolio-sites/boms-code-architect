
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useTheme } from "./theme-provider";

const Contact = () => {
  const { resolvedTheme } = useTheme();
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
  
  const bgColor = resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white';
  
  return (
    <section id="contact" className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4">Let's Connect</h2>
            <Separator className="w-12 h-px bg-emerald-400 mx-auto mb-4" />
            <p className="text-base max-w-xl mx-auto text-gray-600 dark:text-gray-400 font-light">
              Interested in working together or have a question? Use the form below or reach out directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-light mb-1 text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border-gray-200 dark:border-gray-800"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-light mb-1 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="border-gray-200 dark:border-gray-800"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="purpose" className="block text-sm font-light mb-1 text-gray-700 dark:text-gray-300">
                    Purpose
                  </label>
                  <Select value={formState.purpose} onValueChange={handleSelectChange}>
                    <SelectTrigger className="border-gray-200 dark:border-gray-800">
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
                  <label htmlFor="message" className="block text-sm font-light mb-1 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={4}
                    className="border-gray-200 dark:border-gray-800"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="space-y-4">
              <div className={`p-5 rounded border border-gray-100 dark:border-gray-800 ${resolvedTheme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-base font-normal text-gray-800 dark:text-gray-200">Email</h3>
                </div>
                <a href="mailto:Steffanie07@gmail.com" className="font-light text-emerald-600 hover:underline dark:text-emerald-400">
                  Steffanie07@gmail.com
                </a>
              </div>
              
              <div className={`p-5 rounded border border-gray-100 dark:border-gray-800 ${resolvedTheme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-base font-normal text-gray-800 dark:text-gray-200">Current Location</h3>
                </div>
                <p className="font-light text-gray-600 dark:text-gray-400">Swieqi, Malta</p>
              </div>
              
              <div className={`p-5 rounded border border-gray-100 dark:border-gray-800 ${resolvedTheme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                    <Linkedin className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-base font-normal text-gray-800 dark:text-gray-200">LinkedIn</h3>
                </div>
                <a href="https://www.linkedin.com/in/stephanie-boms-07" target="_blank" rel="noopener noreferrer" className="font-light text-emerald-600 hover:underline dark:text-emerald-400">
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
