
import React from 'react';
import { LetterData } from '../../types';

interface Props {
  data: LetterData;
  setData: (data: LetterData) => void;
}

const Step2FineDetails: React.FC<Props> = ({ data, setData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      fine: {
        ...data.fine,
        [name]: value,
      },
    });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
          ...data,
          fine: { ...data.fine, amount: Number(e.target.value) }
      })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary">දඩ විස්තර (Fine Details)</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">දඩ වර්ගය (Type)</label>
        <select 
          name="fineType" 
          value={data.fine.fineType} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
        >
          <option value="Traffic">Traffic (රථවාහන)</option>
          <option value="Police">Police (පොලිස්)</option>
          <option value="Municipal">Municipal (නගර සභා)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">දඩ පත්‍රිකා අංකය (Reference No)</label>
          <input 
            type="text" 
            name="referenceNo" 
            value={data.fine.referenceNo} 
            onChange={handleChange} 
            placeholder="E.g., REF-123456"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">වාහන අංකය / රියදුරු බලපත්‍ර අංකය</label>
          <input 
            type="text" 
            name="vehicleNo" 
            value={data.fine.vehicleNo} 
            onChange={handleChange} 
             placeholder="E.g., WP CA-1234"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 uppercase"
          />
        </div>
      </div>

       <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">දඩ මුදල (Amount)</label>
        <div className="flex items-center space-x-2">
            <span className="text-gray-500 font-bold">LKR</span>
            <input 
                type="number" 
                min="0"
                value={data.fine.amount} 
                onChange={handleAmountChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 text-lg font-bold"
            />
        </div>
        <p className="text-xs text-gray-500 mt-1">කරුණාකර දඩ පත්‍රිකාවේ සඳහන් නිවැරදි මුදල ඇතුලත් කරන්න.</p>
      </div>
    </div>
  );
};

export default Step2FineDetails;