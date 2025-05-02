import React from 'react';
interface ColorSelectionProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}
export const ColorSelection = ({
  selectedColor,
  setSelectedColor
}: ColorSelectionProps) => {
  const colors = [{
    id: 'gold',
    name: 'Gold',
    bgClass: 'bg-amber-100'
  }, {
    id: 'silver',
    name: 'Silver',
    bgClass: 'bg-gray-200'
  }, {
    id: 'graphite',
    name: 'Graphite',
    bgClass: 'bg-gray-400'
  }];
  return <div>
      <p className="text-sm mb-2">Farbe</p>
      <div className="flex gap-3">
        {colors.map(color => <button key={color.id} className={`w-8 h-8 rounded-full ${color.bgClass} flex items-center justify-center ${selectedColor === color.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`} onClick={() => setSelectedColor(color.id)} aria-label={`Select ${color.name} color`} />)}
      </div>
    </div>;
};