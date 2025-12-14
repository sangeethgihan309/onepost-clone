
import React from 'react';
import { LetterData, PrintingProduct } from '../../types';

interface Props {
  data: LetterData;
  setData: (data: LetterData) => void;
}

const Step2PrintingSpecs: React.FC<Props> = ({ data, setData }) => {
  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      ...data,
      printing: { ...data.printing, productType: e.target.value as PrintingProduct },
    });
  };

  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      ...data,
      printing: { ...data.printing, material: e.target.value },
    });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      printing: { ...data.printing, quantity: Number(e.target.value) },
    });
  };

  const handleInstructionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({
      ...data,
      printing: { ...data.printing, instructions: e.target.value },
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary">Printing Specifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
          <select 
            value={data.printing.productType} 
            onChange={handleProductChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
          >
            <option value="Banner">Banner (Vinyl)</option>
            <option value="Business Cards">Business Cards</option>
            <option value="Flyer">Flyer (A5)</option>
            <option value="Sticker">Sticker Sheet</option>
          </select>
        </div>

        {/* Material */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Material / Finish</label>
          <select 
            value={data.printing.material} 
            onChange={handleMaterialChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
          >
            <option value="Glossy">Glossy Finish</option>
            <option value="Matte">Matte Finish</option>
            <option value="Canvas">Canvas Texture</option>
          </select>
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
        <div className="flex items-center space-x-4">
            <input 
                type="number" 
                min="1" 
                value={data.printing.quantity} 
                onChange={handleQuantityChange}
                className="w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
            />
            <span className="text-sm text-gray-500">
                {data.printing.productType === 'Business Cards' ? 'Pack(s) of 100' : 'Unit(s)'}
            </span>
        </div>
      </div>

      {/* Design Instructions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Design Instructions / Text</label>
        <textarea
          rows={4}
          value={data.printing.instructions}
          onChange={handleInstructionsChange}
          placeholder="Describe what you need on your print. E.g., 'Happy Birthday Nimal', Company Logo, etc."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
        ></textarea>
        <div className="mt-2 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:bg-gray-50">
            <p className="text-brand-blue font-semibold">Upload Your Design (PDF/JPG/PNG)</p>
            <p className="text-xs text-gray-500">Drag and drop or click to upload</p>
        </div>
      </div>
    </div>
  );
};

export default Step2PrintingSpecs;
