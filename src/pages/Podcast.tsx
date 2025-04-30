import React from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
const PodcastEpisode = ({
  title,
  guest,
  company,
  description,
  imageUrl,
  episodeUrl
}) => {
  return <div className="flex flex-col md:flex-row gap-6 mb-12 pb-12 border-b border-gray-200 last:border-0">
      <div className="md:w-1/3">
        <img src={imageUrl} alt={`${title} with ${guest}`} className="rounded-lg w-full aspect-square object-cover" />
      </div>
      
      <div className="md:w-2/3">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {guest}, {company}
        </p>
        
        <p className="mb-4">{description}</p>
        
        <Button asChild variant="outline">
          <a href={episodeUrl} target="_blank" rel="noopener noreferrer">
            Listen to Episode
          </a>
        </Button>
      </div>
    </div>;
};
const Podcast = () => {
  // Featured episodes data
  const featuredEpisodes = [{
    title: "Bridging Design and Product in Enterprise SaaS",
    guest: "Sarah Johnson",
    company: "Design Lead at Figma",
    description: "In this episode, we discuss how to effectively bridge the gap between design and product teams in enterprise SaaS environments. Sarah shares insights from her experience at Figma and provides practical strategies for designers looking to have more impact on product decisions.",
    imageUrl: "https://www.wayofproduct.com/api/v1/video/upload/05faba07-b1e6-4d4a-a4ab-7289165cb917/preview.gif?height=480",
    episodeUrl: "#"
  }, {
    title: "#136 Embracing Bootstrapping, VC Funding Myths, and Achieving Financial Freedom",
    guest: "w/ Rob Walling",
    company: "Co-Founder of Drip & Tinyseed",
    description: "Rob spends most of his time teaching people how to build million-dollar startups without venture capital. He also helps SaaS founders build incredible businesses. Rob has started six companies, written five books, Invested in 200+ startups, and has 15M+ podcast downloads on his podcast, Startups for the Rest of Us.",
    imageUrl: "https://www.wayofproduct.com/api/v1/video/upload/562c7967-9ce2-43a5-8ee5-a1f17eb2f594/preview.gif?height=480",
    episodeUrl: "https://www.wayofproduct.com/p/136-embracing-bootstrapping-vc-funding"
  }, {
    title: "Scaling Design Systems for Enterprise Products",
    guest: "Alicia Rogers",
    company: "Design Systems Lead at Adobe",
    description: "Alicia breaks down how Adobe approaches design systems at scale and provides insights on how to balance consistency with flexibility. We discuss governance models, adaptation strategies, and measuring the business impact of design system investments.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1470",
    episodeUrl: "#"
  }];
  return <Layout>
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
          <SectionHeading title="Featured Episodes" subtitle="Some of the most popular episodes from the podcast." />
          
          <div className="mt-12">
            {featuredEpisodes.map((episode, index) => <PodcastEpisode key={index} title={episode.title} guest={episode.guest} company={episode.company} description={episode.description} imageUrl={episode.imageUrl} episodeUrl={episode.episodeUrl} />)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Podcast;