
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/section-heading";
import CaseStudyCard from "../case-studies/CaseStudyCard";
import { caseStudiesData } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";

const FeaturedWork = () => {
  // Take only the first 3 case studies for the featured section
  const featuredCaseStudies = caseStudiesData.slice(0, 3);

  return (
    <section className="py-20 bg-secondary">
      <div className="container-custom">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A selection of my best case studies demonstrating product strategy and design impact." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCaseStudies.map((study) => (
            <CaseStudyCard 
              key={study.id}
              id={study.id}
              title={study.title}
              company={study.company}
              thumbnail={study.thumbnail}
              summary={study.summary}
              metric={{
                label: study.metrics[0].label,
                value: study.metrics[0].value
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;
