
import React, { useEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import MetricCard from "@/components/case-studies/MetricCard";
import SectionImage from "@/components/case-studies/SectionImage";
import { caseStudiesData } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";
const CaseStudy = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const sectionRefs = {
    video: useRef<HTMLElement | null>(null),
    overview: useRef<HTMLElement | null>(null),
    challenge: useRef<HTMLElement | null>(null),
    process: useRef<HTMLElement | null>(null),
    results: useRef<HTMLElement | null>(null),
    learnings: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null)
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const caseStudy = caseStudiesData.find(study => study.id === id);
  if (!caseStudy) {
    return <Navigate to="/work" replace />;
  }
  const currentIndex = caseStudiesData.findIndex(study => study.id === id);
  const prevCaseStudy = currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null;
  const nextCaseStudy = currentIndex < caseStudiesData.length - 1 ? caseStudiesData[currentIndex + 1] : null;
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const createDescriptEmbed = (url: string) => {
    if (!url.includes("share.descript.com")) return url;
    return `<iframe src="${url}" width="100%" height="360" frameborder="0" allowfullscreen></iframe>`;
  };
  return <Layout>
      <SidebarProvider>
        <article className="py-20 w-full">
          <div className="container-custom">
            <header className="mb-12">
              <Link to="/work" className="inline-flex items-center text-gray-600 hover:text-primary mb-4">
                <ChevronLeft size={16} />
                <span className="ml-1">Back to all work</span>
              </Link>
              
              <h1 className="mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-gray-600">{caseStudy.company}</p>
            </header>
            
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12">
              <img src={caseStudy.heroImage} alt={`${caseStudy.title} hero image`} className="w-full h-full object-cover" />
            </div>
            
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudy.metrics.map((metric, index) => <MetricCard key={index} label={metric.label} value={metric.value} description={metric.description} />)}
              </div>
            </section>
            
            {/* Two-column layout starts here */}
            <div className="flex flex-col lg:flex-row">
              {/* Left sidebar - only visible on large screens and with right border */}
              <div className="hidden lg:block lg:w-64 sticky top-24 self-start border-r border-gray-200 pr-6 h-fit">
                <nav>
                  <ul className="space-y-3">
                    {caseStudy.videoUrl && <li>
                        <button onClick={() => scrollToSection(sectionRefs.video)} className="text-gray-600 hover:text-primary transition">Case Study Video</button>
                      </li>}
                    <li>
                      <button onClick={() => scrollToSection(sectionRefs.overview)} className="text-gray-600 hover:text-primary transition">
                        Project Overview
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection(sectionRefs.challenge)} className="text-gray-600 hover:text-primary transition">
                        The Challenge
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection(sectionRefs.process)} className="text-gray-600 hover:text-primary transition">
                        Process & Approach
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection(sectionRefs.results)} className="text-gray-600 hover:text-primary transition">
                        Results & Impact
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection(sectionRefs.learnings)} className="text-gray-600 hover:text-primary transition">
                        Key Learnings
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection(sectionRefs.contact)} className="text-gray-600 hover:text-primary transition">
                        Contact Me
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
              
              {/* Right content area */}
              <div className="lg:pl-12 flex-1">
                {caseStudy.videoUrl && <section ref={sectionRefs.video} className="mb-16 scroll-mt-24">
                    <h2 className="mb-4">Case Study Video Presentation</h2>
                    <p className="text-gray-600 mb-4">Duration: {caseStudy.videoDuration}</p>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                      <div className="w-full" dangerouslySetInnerHTML={{
                    __html: createDescriptEmbed(caseStudy.videoUrl)
                  }} />
                    </div>
                  </section>}
                
                <section ref={sectionRefs.overview} className="mb-12 scroll-mt-24">
                  <h2 className="mb-4">Project Overview</h2>
                  <p>{caseStudy.content.stage}</p>
                  <SectionImage image={caseStudy.content.stageImage} caption={caseStudy.content.stageImageCaption} altText={`${caseStudy.title} project overview`} />
                </section>
                
                <section ref={sectionRefs.challenge} className="mb-12 scroll-mt-24">
                  <h2 className="mb-4">The Challenge</h2>
                  <p>{caseStudy.content.problem}</p>
                  <SectionImage image={caseStudy.content.problemImage} caption={caseStudy.content.problemImageCaption} altText={`${caseStudy.title} challenge visualization`} />
                </section>
                
                <section ref={sectionRefs.process} className="mb-12 scroll-mt-24">
                  <h2 className="mb-4">Process & Approach</h2>
                  <p>{caseStudy.content.process}</p>
                  <SectionImage image={caseStudy.content.processImage} caption={caseStudy.content.processImageCaption} altText={`${caseStudy.title} process visualization`} />
                </section>
                
                <section ref={sectionRefs.results} className="mb-12 scroll-mt-24">
                  <h2 className="mb-4">Results & Impact</h2>
                  <p>{caseStudy.content.outcome}</p>
                  <SectionImage image={caseStudy.content.outcomeImage} caption={caseStudy.content.outcomeImageCaption} altText={`${caseStudy.title} results visualization`} />
                </section>
                
                <section ref={sectionRefs.learnings} className="mb-16 scroll-mt-24">
                  <h2 className="mb-4">Key Learnings</h2>
                  <p>{caseStudy.content.learnings}</p>
                  <SectionImage image={caseStudy.content.learningsImage} caption={caseStudy.content.learningsImageCaption} altText={`${caseStudy.title} learnings visualization`} />
                </section>
                
                <section ref={sectionRefs.contact} className="mb-16 p-8 bg-muted rounded-lg text-center scroll-mt-24">
                  <h2 className="mb-4">Want to discuss this project?</h2>
                  <p className="mb-6 text-lg">I'm happy to share more details about this case study and how similar approaches can benefit your organization.</p>
                  <Button asChild size="lg">
                    <a href="mailto:cadendamiano@gmail.com">Contact Me</a>
                  </Button>
                </section>
              </div>
            </div>
            {/* Two-column layout ends here */}
            
            <div className="mt-20 border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                {prevCaseStudy ? <Button asChild variant="outline" className="mb-4 md:mb-0 w-full md:w-auto">
                    <Link to={`/work/${prevCaseStudy.id}`} className="flex items-center">
                      <ChevronLeft size={16} />
                      <span className="ml-2">Previous: {prevCaseStudy.title}</span>
                    </Link>
                  </Button> : <div></div>}
                
                {nextCaseStudy && <Button asChild variant="outline" className="w-full md:w-auto">
                    <Link to={`/work/${nextCaseStudy.id}`} className="flex items-center">
                      <span className="mr-2">Next: {nextCaseStudy.title}</span>
                      <ChevronRight size={16} />
                    </Link>
                  </Button>}
              </div>
            </div>
          </div>
        </article>
      </SidebarProvider>
    </Layout>;
};
export default CaseStudy;
