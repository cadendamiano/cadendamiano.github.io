import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-6">
              Product Strategist with a <span className="text-primary">design-driven</span> approach
            </h1>
            
            <p className="mb-8 text-xl max-w-2xl">Making B2B SaaS products that work as good as they 
sound in the sales pitch.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="mailto:cadendamiano@gmail.com">Contact Me</a>
              </Button>
              
              <Button asChild size="lg" variant="outline">
                <a href="https://www.linkedin.com/in/caden-damiano/" target="blank">Let's Connect</a>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="h-px bg-gray-200 w-16 mr-4"></div>
              <p className="text-gray-600">Host of the Way of Product Podcast — 7 years, 97.7% CAGR</p>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img src="/lovable-uploads/7f13e8ec-5a48-4a45-be26-2dd622df61fe.png" alt="Caden Damiano - Product Lead" className="rounded-lg shadow-lg z-10 relative max-w-md mx-auto" />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;