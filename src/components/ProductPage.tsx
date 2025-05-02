import React, { useState } from 'react';
import { ChevronLeftIcon, InfoIcon, TruckIcon, StoreIcon } from 'lucide-react';
import { ProductImage } from './ProductImage';
import { ModelSelection } from './ModelSelection';
import { ColorSelection } from './ColorSelection';
export const ProductPage = () => {
  const [selectedModel, setSelectedModel] = useState('standard');
  const [selectedColor, setSelectedColor] = useState('gold');
  return <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 py-3 px-4">
        <h1 className="text-lg font-medium">Nova X Pro</h1>
        <div className="text-sm text-right">
          <p>
            Ab 1.199 € oder 49,96 €/Rate bei 24 Raten mit 0 % eff. Zins p.a.****
          </p>
        </div>
      </div>
      {/* Shipping options */}
      <div className="flex justify-end gap-6 py-3 px-4 border-b border-gray-100">
        <div className="flex items-center gap-2 text-sm">
          <TruckIcon size={16} />
          <span>Kostenloser Versand</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <StoreIcon size={16} />
          <span>Beim Store abholen</span>
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-col md:flex-row mt-4 px-4 gap-8">
        {/* Product image */}
        <div className="w-full md:w-2/3 bg-gray-50 rounded-lg p-4 relative">
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10">
            <ChevronLeftIcon size={20} />
          </button>
          <ProductImage color={selectedColor} />
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
        {/* Product details */}
        <div className="w-full md:w-1/3">
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-1">Modell.</h2>
            <p className="text-gray-600 mb-4">
              Welches ist das richtige Modell für dich?
            </p>
            <ModelSelection selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
            <div className="flex items-start gap-2 mt-4 text-sm text-gray-600">
              <InfoIcon size={16} className="mt-1 flex-shrink-0" />
              <p>
                Braucht du Hilfe beim Auswählen eines Modells? Sieh dir
                Unterschiede bei Displaygröße und Batterielaufzeit an.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-1">Farben.</h2>
            <p className="text-gray-600 mb-4">
              Wähle das, das dir am besten gefällt.
            </p>
            <ColorSelection selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          </div>
        </div>
      </div>
    </div>;
};