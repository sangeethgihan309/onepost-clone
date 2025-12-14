
import React, { useState } from 'react';
import { LetterData, ServiceType } from '../../types';
import Step1RecipientDetails from '../form/Step1_RecipientDetails';
import Step2MessageInput from '../form/Step2_MessageInput';
import Step2PrintingSpecs from '../form/Step2_PrintingSpecs';
import Step2GiftSelection from '../form/Step2_GiftSelection';
import Step2InvitationDetails from '../form/Step2_InvitationDetails';
import Step2FineDetails from '../form/Step2_FineDetails'; // New
import Step3DesignChoices from '../form/Step3_DesignChoices';
import LivePreview from '../form/LivePreview';
import PriceCalculator from '../form/PriceCalculator';
import Header from '../Header';
import Footer from '../Footer';
import { initialLetterData } from '../../constants';

interface CreateLetterPageProps {
  letterData: LetterData;
  onDataChange: (data: LetterData) => void;
  onProceedToReview: () => void;
  onGoBackHome: () => void;
}

const CreateLetterPage: React.FC<CreateLetterPageProps> = ({ letterData, onDataChange, onProceedToReview, onGoBackHome }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleServiceChange = (type: ServiceType) => {
    // Reset add-ons when changing service to ensure service-specific features
    // (like Live Design for Printing or Packing Video for Gifts) don't persist.
    onDataChange({ 
        ...letterData, 
        serviceType: type,
        design: {
            ...letterData.design,
            addOns: { ...initialLetterData.design.addOns }
        }
    });
    setStep(1); // Reset step when changing service
  };

  const getStepTitles = () => {
    if (letterData.serviceType === 'fine') {
        return ['ගෙවන්නාගේ විස්තර', 'දඩ විස්තර', 'රිසිට්පත'];
    }
    return ['ලබන්නා', 'විස්තර', 'විකල්ප'];
  }

  const stepTitles = getStepTitles();

  const Stepper = () => (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className={`font-bold ${step >= 1 ? 'text-brand-blue' : 'text-gray-400'}`}>
            {stepTitles[0]}
        </span>
        <span className={`font-bold ${step >= 2 ? 'text-brand-blue' : 'text-gray-400'}`}>
            {stepTitles[1]}
        </span>
        <span className={`font-bold ${step >= 3 ? 'text-brand-blue' : 'text-gray-400'}`}>
             {stepTitles[2]}
        </span>
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        <div 
          className="absolute top-0 left-0 h-2 bg-brand-blue rounded-full transition-all duration-500"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <Header onGoHome={onGoBackHome} />
        <main className="flex-grow container mx-auto px-4 py-8">
        
        {/* Service Selector */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-4">
            <div className="bg-white p-1 rounded-full shadow-sm border inline-flex whitespace-nowrap">
                <button 
                    onClick={() => handleServiceChange('letter')}
                    className={`px-4 md:px-6 py-2 rounded-full font-bold transition-all ${letterData.serviceType === 'letter' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                    Letters ✉️
                </button>
                <button 
                    onClick={() => handleServiceChange('gift')}
                    className={`px-4 md:px-6 py-2 rounded-full font-bold transition-all ${letterData.serviceType === 'gift' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                    Gifts 🎁
                </button>
                <button 
                    onClick={() => handleServiceChange('invitation')}
                    className={`px-4 md:px-6 py-2 rounded-full font-bold transition-all ${letterData.serviceType === 'invitation' ? 'bg-purple-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                    Invites 📨
                </button>
                <button 
                    onClick={() => handleServiceChange('printing')}
                    className={`px-4 md:px-6 py-2 rounded-full font-bold transition-all ${letterData.serviceType === 'printing' ? 'bg-accent text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                    Printing 🖨️
                </button>
                 <button 
                    onClick={() => handleServiceChange('fine')}
                    className={`px-4 md:px-6 py-2 rounded-full font-bold transition-all ${letterData.serviceType === 'fine' ? 'bg-red-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                    Pay Fine 👮
                </button>
            </div>
        </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg h-fit">
              <Stepper />
              <div className="transition-all duration-300 min-h-[400px]">
                {step === 1 && (
                    <Step1RecipientDetails 
                        data={letterData} 
                        setData={onDataChange} 
                        customTitle={letterData.serviceType === 'fine' ? 'ගෙවන්නාගේ විස්තර (Payer Details)' : undefined}
                    />
                )}
                
                {step === 2 && (
                    <>
                        {letterData.serviceType === 'letter' && <Step2MessageInput data={letterData} setData={onDataChange} />}
                        {letterData.serviceType === 'printing' && <Step2PrintingSpecs data={letterData} setData={onDataChange} />}
                        {letterData.serviceType === 'gift' && <Step2GiftSelection data={letterData} setData={onDataChange} />}
                        {letterData.serviceType === 'invitation' && <Step2InvitationDetails data={letterData} setData={onDataChange} />}
                        {letterData.serviceType === 'fine' && <Step2FineDetails data={letterData} setData={onDataChange} />}
                    </>
                )}

                {step === 3 && <Step3DesignChoices data={letterData} setData={onDataChange} />}
              </div>
              <div className="mt-8 flex justify-between pt-4 border-t">
                {step > 1 ? (
                  <button onClick={prevStep} className="bg-gray-200 text-primary font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                    ආපසු
                  </button>
                ) : <div/>}
                {step < 3 ? (
                  <button onClick={nextStep} className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-blue-dark transition-colors">
                    ඊළඟ
                  </button>
                ) : (
                  <button onClick={onProceedToReview} className="bg-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-accent-dark transition-colors">
                    ගෙවීමට යන්න
                  </button>
                )}
              </div>
            </div>

            {/* Preview and Price Section */}
            <div className="lg:col-span-1 space-y-8">
              <div className="sticky top-24 space-y-6">
                <LivePreview letterData={letterData} />
                <PriceCalculator 
                    data={letterData}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </div>
  );
};

export default CreateLetterPage;
