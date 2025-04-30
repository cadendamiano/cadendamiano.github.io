
import React from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { caseStudiesData } from "@/data/caseStudies";

const Work = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            title="Featured Work"
            subtitle="Case studies showcasing my approach to product design and leadership in enterprise B2B SaaS."
            className="max-w-3xl mx-auto"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {caseStudiesData.map((study) => (
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
          
          {/* Additional Projects section commented out as it's out of scope for the current release
          <div className="mt-24 mb-12">
            <Separator className="mb-16" />
            <SectionHeading
              title="Additional Projects"
              subtitle="A selection of other projects I've worked on throughout my career."
              className="max-w-3xl mx-auto"
              align="center"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {secondaryCaseStudiesData.map((study) => (
                <SecondaryCaseStudyCard
                  key={study.id}
                  id={study.id}
                  title={study.title}
                  company={study.company}
                  thumbnail={study.thumbnail}
                  summary={study.summary}
                />
              ))}
            </div>
          </div>
          */}
        </div>
      </section>
    </Layout>
  );
};

export default Work;
