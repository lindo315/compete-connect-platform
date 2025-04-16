
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is edited
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    
    setFormErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send the form data to a server
      console.log("Sending message:", formData);
      
      // Show success message
      toast.success("Your message has been sent! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
              <p className="text-neutral-muted max-w-2xl mx-auto">
                Have questions or need assistance? We're here to help. Reach out to our team using the form below or through any of our contact channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact info */}
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Our Location</h3>
                        <p className="text-neutral-muted mt-1">
                          123 Innovation Drive<br />
                          San Francisco, CA 94103<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone Number</h3>
                        <p className="text-neutral-muted mt-1">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-xs text-neutral-muted mt-1">
                          Monday to Friday, 9am to 6pm PST
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-neutral-muted mt-1">
                          support@competeconnect.com
                        </p>
                        <p className="text-neutral-muted mt-1">
                          info@competeconnect.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-border">
                    <h3 className="font-medium mb-3">Follow Us</h3>
                    <div className="flex space-x-3">
                      <a href="#" className="text-neutral-muted hover:text-primary transition-colors" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      </a>
                      <a href="#" className="text-neutral-muted hover:text-primary transition-colors" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </a>
                      <a href="#" className="text-neutral-muted hover:text-primary transition-colors" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </a>
                      <a href="#" className="text-neutral-muted hover:text-primary transition-colors" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact form */}
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className={formErrors.name ? "border-alert" : ""}
                        />
                        {formErrors.name && (
                          <p className="text-alert text-sm">{formErrors.name}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={formErrors.email ? "border-alert" : ""}
                        />
                        {formErrors.email && (
                          <p className="text-alert text-sm">{formErrors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={formErrors.message ? "border-alert" : ""}
                      />
                      {formErrors.message && (
                        <p className="text-alert text-sm">{formErrors.message}</p>
                      )}
                    </div>
                    
                    <Button type="submit" className="w-full sm:w-auto flex items-center gap-2">
                      <Send size={16} />
                      <span>Send Message</span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-10 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Our Location</h2>
              <div className="w-full h-96 bg-neutral-background rounded-lg overflow-hidden">
                <iframe
                  title="CompeteConnect Office Location"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.159536338443!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1626899500000!5m2!1sen!2sus"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
