
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const About = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="mb-6">About Me</h1>
              
              <p className="mb-4">
                With over a decade of experience spanning software development, design, and product management, I help enterprise B2B SaaS companies create products that drive business growth and deliver exceptional user experiences.
              </p>
              
              <p className="mb-4">
                My career began in front-end development before transitioning to design leadership roles where I built and managed design teams. Now as a Product Lead, I leverage this hybrid skillset to bridge technical constraints, business goals, and user needs.
              </p>
              
              <p className="mb-8">
                I also host the Design-to-Product podcast, where I've interviewed over 200 industry leaders about the intersection of design, product, and business strategy.
              </p>
              
              <Button asChild variant="outline" className="mr-4">
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              
              <Button asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1470" 
                alt="Caden Damiano" 
                className="rounded-lg shadow-lg z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <Input id="name" type="text" placeholder="Your name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="Message subject" />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={6}
                  required 
                />
              </div>
              
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
