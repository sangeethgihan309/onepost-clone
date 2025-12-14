
import React from 'react';
import { LetterData, GiftItem } from '../../types';
import { PRICING } from '../../constants';

interface Props {
  data: LetterData;
  setData: (data: LetterData) => void;
}

const Step2GiftSelection: React.FC<Props> = ({ data, setData }) => {
  const handleItemChange = (item: GiftItem) => {
    setData({
      ...data,
      gift: { ...data.gift, item },
    });
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({
      ...data,
      gift: { ...data.gift, note: e.target.value },
    });
  };

  const giftItems: { name: GiftItem; price: number; icon: string }[] = [
    { name: 'Chocolates', price: PRICING.GIFTS.Chocolates, icon: '🍫' },
    { name: 'Flowers', price: PRICING.GIFTS.Flowers, icon: '💐' },
    { name: 'Soft Toy', price: PRICING.GIFTS['Soft Toy'], icon: '🧸' },
    { name: 'Book Bundle', price: PRICING.GIFTS['Book Bundle'], icon: '📚' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary">තෑග්ගක් තෝරන්න</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {giftItems.map((gift) => (
          <div 
            key={gift.name}
            onClick={() => handleItemChange(gift.name)}
            className={`cursor-pointer border-2 rounded-lg p-4 text-center transition-all ${data.gift.item === gift.name ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300'}`}
          >
            <div className="text-4xl mb-2">{gift.icon}</div>
            <h3 className="font-bold text-gray-800">{gift.name}</h3>
            <p className="text-sm text-gray-500">රු. {gift.price}</p>
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          පුද්ගලික සටහනක් එක් කරන්න (Gift Card Free)
        </label>
        <textarea
          rows={3}
          value={data.gift.note}
          onChange={handleNoteChange}
          placeholder="Happy Birthday! Love from..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
        ></textarea>
      </div>
    </div>
  );
};

export default Step2GiftSelection;
