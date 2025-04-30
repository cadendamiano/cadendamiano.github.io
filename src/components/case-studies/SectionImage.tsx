
import React from "react";

interface SectionImageProps {
  image?: string;
  caption?: string;
  altText: string;
}

const SectionImage: React.FC<SectionImageProps> = ({ image, caption, altText }) => {
  if (!image) return null;

  return (
    <div className="mt-8 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={altText}
        className="w-full h-auto object-cover rounded-lg"
        onError={(e) => {
          console.error(`Failed to load image: ${image}`);
          e.currentTarget.style.display = 'none';
        }}
      />
      {caption && (
        <p className="text-sm text-gray-500 mt-2 italic">{caption}</p>
      )}
    </div>
  );
};

export default SectionImage;
