import React from "react";
import { cn } from "@/lib/utils";
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}
const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "left",
  className
}) => {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return <div className={cn("mb-12", alignment[align], className)}>
      <h2 className="font-bold text-center">{title}</h2>
      {subtitle && <p className="mt-4 text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>;
};
export default SectionHeading;