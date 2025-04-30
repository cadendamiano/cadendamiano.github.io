
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/section-heading";
import { Button } from "@/components/ui/button";

const PodcastPreview = () => {
  return (
    <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="mb-6">Podcast</h2>
              <h1 className="mb-6">The Way of Product</h1>
              
              <p className="mb-4">
                For the past 7 years, I've hosted conversations with industry leaders across all disciplines in the product development process. With the intention of improving my taste as a product professional. 
              </p>
              
              <p className="mb-4">
                I'm currently on track to recording my 150th episode, and its been a key differentiator in how I approach customer problems. 
              </p>
              
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="https://www.wayofproduct.com" target="_blank" rel="noopener noreferrer">
                  Explore the Show
                </a>
              </Button>
            </div>

            <div className="relative">
              <img alt="Way of Product Podcast" className="rounded-lg shadow-lg z-10 relative" src="/lovable-uploads/41275c6d-1d4f-4c6b-bfc8-b5e096d75aee.jpg" />
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary/10 rounded-lg -z-10"></div>
            </div>
            
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center mb-20">
          {/* Three-column stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Podcast Growth</h3>
                  <p className="text-3xl font-bold text-primary">97.7% CAGR</p>
                  <p className="text-sm text-gray-600 mt-2">Compound Annual Growth Rate since 2018</p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Follows</h3>
                  <p className="text-3xl font-bold text-primary">Top 10%</p>
                  <p className="text-sm text-gray-600 mt-2">Most followed podcasts in the world</p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Shares</h3>
                  <p className="text-3xl font-bold text-primary">Top 15%</p>
                  <p className="text-sm text-gray-600 mt-2">Most shared podcasts in the world</p>
                </div>
              </div>
          </div>
          
        </div>
    </section>
  );
};

export default PodcastPreview;
