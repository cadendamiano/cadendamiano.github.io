
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  id: string;
  title: string;
  company: string;
  thumbnail: string;
  summary: string;
  metric?: {
    label: string;
    value: string;
  };
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  company,
  thumbnail,
  summary,
  metric,
  className,
}) => {
  return (
    <Link 
      to={`/work/${id}`} 
      className={cn(
        "group block overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={`${title} case study thumbnail`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6  bg-white">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
          
          {metric && (
            <div className="bg-muted px-4 py-2 rounded-lg">
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-xs text-gray-600">{metric.label}</p>
            </div>
          )}
        </div>
        
        <p className="mt-3 text-gray-700 line-clamp-3">{summary}</p>
        
        <span className="mt-4 inline-flex items-center text-primary font-medium">
          Read case study
          <svg 
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
