
import React from 'react';
import { LetterData } from '../../types';

interface Props {
  data: LetterData;
  setData: (data: LetterData) => void;
  customTitle?: string;
}

const Step1RecipientDetails: React.FC<Props> = ({ data, setData, customTitle }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            recipient: {
                ...data.recipient,
                [name]: value,
            },
        });
    };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary">{customTitle || 'ලබන්නාගේ විස්තර'}</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {customTitle ? 'නම' : 'ලබන්නාගේ නම'}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.recipient.name}
          onChange={handleChange}
          placeholder="උදා: ඒ. බී. සී. පෙරේරා"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"
          required
        />
         {data.recipient.name === '' && <p className="text-red-500 text-xs mt-1">නම අනිවාර්යයි.</p>}
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          {customTitle ? 'ලිපිනය (රිසිට්පත තැපැල් කිරීමට)' : 'ලබන්නාගේ ලිපිනය'}
        </label>
        <textarea
          id="address"
          name="address"
          value={data.recipient.address}
          onChange={handleChange}
          rows={4}
          placeholder="නිවසේ අංකය,&#10;වීදිය,&#10;නගරය,&#10;තැපැල් අංකය"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"
          required
        ></textarea>
        {data.recipient.address === '' && <p className="text-red-500 text-xs mt-1">ලිපිනය අනිවාර්යයි.</p>}
        <p className="text-xs text-gray-500 mt-1">Google Places API ඒකාබද්ධ කිරීම සඳහා යෝජිතයි.</p>
      </div>
    </div>
  );
};

export default Step1RecipientDetails;