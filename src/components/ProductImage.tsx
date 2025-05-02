import React from 'react';
interface ProductImageProps {
  color: string;
}
export const ProductImage = ({
  color
}: ProductImageProps) => {
  // Use different images based on the color selection
  const getImageUrl = () => {
    // Using a generic smartphone image
    return 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3';
  };
  return <div className="flex justify-center items-center py-8">
      <img src={getImageUrl()} alt="Nova X Pro Smartphone" className="max-h-[400px] object-contain" />
    </div>;
};