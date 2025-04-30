
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import PodcastPreview from "@/components/home/PodcastPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedWork />
      <PodcastPreview />
    </Layout>
  );
};

export default Index;
