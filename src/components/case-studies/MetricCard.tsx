
import React from "react";

interface MetricCardProps {
  label: string;
  value: string;
  description?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, description }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg">
      <p className="text-sm text-gray-600 uppercase tracking-wider">{label}</p>
      <p className="text-3xl font-bold text-primary mt-1">{value}</p>
      {description && (
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      )}
    </div>
  );
};

export default MetricCard;
