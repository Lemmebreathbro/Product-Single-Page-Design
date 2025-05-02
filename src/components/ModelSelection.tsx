import React from 'react';
interface ModelSelectionProps {
  selectedModel: string;
  setSelectedModel: (model: string) => void;
}
export const ModelSelection = ({
  selectedModel,
  setSelectedModel
}: ModelSelectionProps) => {
  const models = [{
    id: 'standard',
    name: 'Nova X Pro',
    display: '6.1" Display',
    price: '1.199 €',
    monthly: '49,96 €/Rate',
    installments: 'bei 24 Raten mit 0 %',
    interest: 'eff. Zins p.a.****'
  }, {
    id: 'max',
    name: 'Nova X Pro Max',
    display: '6.9" Display',
    price: '1.449 €',
    monthly: '60,38 €/Rate',
    installments: 'bei 24 Raten mit 0 %',
    interest: 'eff. Zins p.a.****'
  }];
  return <div className="space-y-3">
      {models.map(model => <div key={model.id} className={`border rounded-lg p-3 cursor-pointer ${selectedModel === model.id ? 'border-blue-500' : 'border-gray-300'}`} onClick={() => setSelectedModel(model.id)}>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">{model.name}</p>
              <p className="text-sm text-gray-600">{model.display}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{model.price}</p>
              <p className="text-xs text-gray-600">oder {model.monthly}</p>
              <p className="text-xs text-gray-600">{model.installments}</p>
              <p className="text-xs text-gray-600">{model.interest}</p>
            </div>
          </div>
        </div>)}
    </div>;
};