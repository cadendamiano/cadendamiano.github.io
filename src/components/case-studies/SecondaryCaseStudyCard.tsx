
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface SecondaryCaseStudyCardProps {
  id: string;
  title: string;
  company: string;
  thumbnail: string;
  summary: string;
  className?: string;
}

const SecondaryCaseStudyCard: React.FC<SecondaryCaseStudyCardProps> = ({
  id,
  title,
  company,
  thumbnail,
  summary,
  className,
}) => {
  return (
    <Card className={cn("hover:shadow-md transition-shadow", className)}>
      <Link to={`/work/${id}`} className="block">
        <div className="relative h-40 overflow-hidden">
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h4 className="text-lg font-semibold line-clamp-1">{title}</h4>
          <p className="text-xs text-gray-500 mb-2">{company}</p>
          <p className="text-sm text-gray-600 line-clamp-2">{summary}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default SecondaryCaseStudyCard;
