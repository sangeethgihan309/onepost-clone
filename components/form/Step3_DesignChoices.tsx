
import React from 'react';
import { LetterData, Template, EnvelopeColor } from '../../types';
import { PRICING } from '../../constants';

interface Props {
  data: LetterData;
  setData: (data: LetterData) => void;
}

const Step3DesignChoices: React.FC<Props> = ({ data, setData }) => {

  const handleTemplateChange = (template: Template) => {
    setData({ ...data, design: { ...data.design, template } });
  };

  const handleEnvelopeColorChange = (color: EnvelopeColor) => {
    setData({ ...data, design: { ...data.design, envelopeColor: color } });
  };
  
  const handleWrappingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setData({ ...data, gift: { ...data.gift, wrapping: e.target.value as any } });
  }

  const handleReceiptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({ ...data, fine: { ...data.fine, physicalReceipt: e.target.checked } });
  }

  const handleAddOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setData({
      ...data,
      design: {
        ...data.design,
        addOns: { ...data.design.addOns, [name]: checked },
      },
    });
  };

  const templates: { name: Template; imageUrl: string }[] = [
    { name: 'Plain', imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=200&auto=format&fit=crop' },
    { name: 'Floral', imageUrl: 'https://images.unsplash.com/photo-1490750967868-58cb75062ed0?q=80&w=200&auto=format&fit=crop' },
    { name: 'Official', imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=200&auto=format&fit=crop' },
    { name: 'Festive', imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=200&auto=format&fit=crop' },
  ];

  const envelopeColors: { name: EnvelopeColor; colorClass: string }[] = [
      { name: 'Brown', colorClass: 'bg-[#D2B48C]' },
      { name: 'White', colorClass: 'bg-white' },
      { name: 'Red', colorClass: 'bg-red-500' },
  ];

  if (data.serviceType === 'fine') {
      return (
          <div className="space-y-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-primary">Receipt Options</h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                      <div>
                          <h3 className="text-lg font-bold">Physical Receipt via Post</h3>
                          <p className="text-gray-600 text-sm">Get the official payment receipt delivered to your address.</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-gray-500">+ රු. {PRICING.PHYSICAL_RECEIPT_FEE}</span>
                        <input 
                            type="checkbox" 
                            checked={data.fine.physicalReceipt} 
                            onChange={handleReceiptChange}
                            className="w-6 h-6 text-brand-blue rounded border-gray-300 focus:ring-brand-blue"
                        />
                      </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 text-sm text-gray-600 rounded">
                      <p>✓ Digital receipt will be sent via SMS/Email instantly (Free).</p>
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary">
          {data.serviceType === 'gift' ? 'Finishing Options' : 'Design & Finish'}
      </h2>
      
      {(data.serviceType === 'letter' || data.serviceType === 'invitation') && (
          <>
            {/* Template Gallery */}
            <div>
                <h3 className="text-lg font-semibold mb-2">{data.serviceType === 'invitation' ? 'Card Theme' : 'Paper Template'}</h3>
                <div className="flex space-x-4 overflow-x-auto p-2">
                {templates.map((t) => (
                    <div key={t.name} onClick={() => handleTemplateChange(t.name)} className={`cursor-pointer border-4 rounded-lg transition-all min-w-[100px] ${data.design.template === t.name ? 'border-brand-blue' : 'border-transparent'}`}>
                    <img src={t.imageUrl} alt={t.name} className="w-24 h-32 object-cover rounded-md" />
                    <p className="text-center text-sm mt-1">{t.name}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* Envelope Color */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Envelope Color</h3>
                <div className="flex space-x-4">
                    {envelopeColors.map(c => (
                        <div key={c.name} onClick={() => handleEnvelopeColorChange(c.name)} className={`w-12 h-12 rounded-full cursor-pointer border-2 ${c.colorClass} ${data.design.envelopeColor === c.name ? 'ring-4 ring-offset-2 ring-brand-blue' : 'border-gray-300'}`}></div>
                    ))}
                </div>
            </div>
          </>
      )}

      {/* Gift Wrapping Selection */}
      {data.serviceType === 'gift' && (
          <div>
              <h3 className="text-lg font-semibold mb-2">Wrapping Style</h3>
              <select value={data.gift.wrapping} onChange={handleWrappingChange} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="Standard">Standard (Free)</option>
                  <option value="Premium Gold">Premium Gold (+Rs. 200)</option>
                  <option value="Love Heart">Love Heart (+Rs. 200)</option>
              </select>
          </div>
      )}

       {/* Letter Specific Add-ons */}
       {data.serviceType === 'letter' && (
            <div>
                <h3 className="text-lg font-semibold mb-2">Add-ons</h3>
                <div className="space-y-2">
                    <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                        <input type="checkbox" name="handwrittenStyle" checked={data.design.addOns.handwrittenStyle} onChange={handleAddOnChange} className="h-5 w-5 text-brand-blue rounded border-gray-300 focus:ring-brand-blue" />
                        <div>
                             <span className="font-medium">Handwritten style (AI)</span>
                             <p className="text-xs text-gray-500">+ රු. {PRICING.HANDWRITTEN_STYLE}</p>
                        </div>
                    </label>
                    <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                        <input type="checkbox" name="sticker" checked={data.design.addOns.sticker} onChange={handleAddOnChange} className="h-5 w-5 text-brand-blue rounded border-gray-300 focus:ring-brand-blue" />
                        <div>
                            <span className="font-medium">Add a sticker (❤️/✨)</span>
                            <p className="text-xs text-gray-500">+ රු. {PRICING.STICKER}</p>
                        </div>
                    </label>
                </div>
            </div>
       )}

      {/* Printing Only: Live Design Experience */}
      {data.serviceType === 'printing' && (
        <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center text-brand-blue">
                <span className="mr-2">🎨</span> Live Design Experience
            </h3>
            <label className={`flex items-start space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all shadow-sm hover:shadow-md ${data.design.addOns.liveDesignSession ? 'border-accent bg-accent/5' : 'border-gray-200 bg-white hover:border-accent/50'}`}>
                <input type="checkbox" name="liveDesignSession" checked={data.design.addOns.liveDesignSession} onChange={handleAddOnChange} className="mt-1 h-5 w-5 text-accent rounded border-gray-300 focus:ring-accent" />
                <div className="flex-grow">
                    <span className="font-bold text-gray-800">Live Designer Session එකක් අවශ්‍යද?</span>
                    <p className="text-sm text-gray-600 mt-1">
                        Connect with a professional designer in real-time to perfect your print layout. <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full ml-1">Online</span>
                    </p>
                </div>
                <div className="text-right">
                    <span className="block font-bold text-accent">+ රු. {PRICING.LIVE_DESIGN_SESSION}</span>
                </div>
            </label>
        </div>
      )}

      {/* Gift Only: Packing Video */}
      {data.serviceType === 'gift' && (
        <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center text-pink-600">
                <span className="mr-2">🎥</span> Gift Unboxing/Packing Video
            </h3>
            <label className={`flex items-start space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all shadow-sm hover:shadow-md ${data.design.addOns.giftPackingVideo ? 'border-pink-500 bg-pink-50' : 'border-gray-200 bg-white hover:border-pink-300'}`}>
                <input type="checkbox" name="giftPackingVideo" checked={data.design.addOns.giftPackingVideo} onChange={handleAddOnChange} className="mt-1 h-5 w-5 text-pink-500 rounded border-gray-300 focus:ring-pink-500" />
                <div className="flex-grow">
                    <span className="font-bold text-gray-800">තෑග්ග අසුරන වීඩියෝවක් අවශ්‍යද?</span>
                    <p className="text-sm text-gray-600 mt-1">
                        ඔබේ තෑග්ග පාර්සල් කරන ආකාරය වීඩියෝ කර ඔබට එවන්නෙමු. (Sent via WhatsApp)
                    </p>
                </div>
                <div className="text-right">
                    <span className="block font-bold text-pink-500">+ රු. {PRICING.GIFT_PACKING_VIDEO}</span>
                </div>
            </label>
        </div>
      )}

    </div>
  );
};

export default Step3DesignChoices;
