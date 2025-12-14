
import React from 'react';
import { LetterData } from '../../types';
import Header from '../Header';
import Footer from '../Footer';
import { PRICING } from '../../constants';

interface Props {
  letterData: LetterData;
  onGoBack: () => void;
  onConfirmAndPay: () => void;
}

const ReviewPage: React.FC<Props> = ({ letterData, onGoBack, onConfirmAndPay }) => {
    const [view, setView] = React.useState<'letter' | 'envelope'>('letter');

    const calculateTotal = () => {
        let total = 0;
        const { serviceType, design, printing, gift, invitation, fine } = letterData;
        const { addOns } = design;

        if (serviceType === 'letter') {
            total += PRICING.BASE;
            if (addOns.handwrittenStyle) total += PRICING.HANDWRITTEN_STYLE;
            if (addOns.sticker) total += PRICING.STICKER;
        } else if (serviceType === 'printing') {
            const unitPrice = PRICING.PRINTING[printing.productType] || 0;
            total += unitPrice * printing.quantity;
            if (addOns.liveDesignSession) total += PRICING.LIVE_DESIGN_SESSION;
        } else if (serviceType === 'gift') {
            total += PRICING.GIFTS[gift.item] || 0;
            if (gift.wrapping !== 'Standard') total += PRICING.GIFTS.WRAPPING_PREMIUM;
            if (addOns.giftPackingVideo) total += PRICING.GIFT_PACKING_VIDEO;
        } else if (serviceType === 'invitation') {
            total += PRICING.INVITATIONS.UNIT_PRICE * invitation.guestCount;
            total += PRICING.INVITATIONS.DESIGN_FEE;
        } else if (serviceType === 'fine') {
            total += fine.amount;
            total += PRICING.FINE_SERVICE_CHARGE;
            if (fine.physicalReceipt) total += PRICING.PHYSICAL_RECEIPT_FEE;
        }

        return total;
    };

    const total = calculateTotal();

    const LetterPreview = () => (
        <div className="w-full max-w-2xl mx-auto bg-white p-12 shadow-lg border relative" style={{aspectRatio: '210/297'}}>
            <p className="absolute top-2 left-2 text-gray-300 text-xs select-none">Preview Only</p>
            <div className="text-primary whitespace-pre-wrap break-words" style={{fontFamily: letterData.message.font === 'Sinhala' ? "'Noto Sans Sinhala'" : "'Poppins'", fontSize: `${letterData.message.fontSize}px`}}>
                {letterData.message.content}
            </div>
        </div>
    );

    const EnvelopePreview = () => (
        <div className="w-full max-w-2xl mx-auto bg-[#D2B48C] p-8 shadow-lg border" style={{aspectRatio: '2/1'}}>
            <div className="w-1/2 h-1/2 bg-white/80 p-4 border-2 border-dashed border-gray-500">
                <p className="font-sans font-bold">{letterData.recipient.name}</p>
                <p className="font-sans whitespace-pre-line">{letterData.recipient.address}</p>
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center">
                <span className="text-xs">මුද්දරය</span>
            </div>
        </div>
    );

    const GenericPreview = ({ title, children }: { title: string, children?: React.ReactNode }) => (
        <div className="w-full max-w-2xl mx-auto bg-white p-8 shadow-lg border rounded-lg min-h-[300px] flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            {children}
        </div>
    );

    const renderPreview = () => {
        switch (letterData.serviceType) {
            case 'letter':
                return view === 'letter' ? <LetterPreview /> : <EnvelopePreview />;
            case 'gift':
                return (
                    <GenericPreview title="Gift Order">
                         <div className="text-6xl mb-4">🎁</div>
                         <p className="text-xl font-bold text-pink-600">{letterData.gift.item}</p>
                         <p className="text-gray-500">{letterData.gift.wrapping} Wrapping</p>
                         {letterData.design.addOns.giftPackingVideo && (
                             <div className="mt-4 bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-bold text-sm">
                                 🎥 Video Requested
                             </div>
                         )}
                    </GenericPreview>
                );
            case 'printing':
                 return (
                    <GenericPreview title="Printing Job">
                         <div className="text-6xl mb-4">🖨️</div>
                         <p className="text-xl font-bold text-accent">{letterData.printing.productType}</p>
                         <p className="text-gray-500">{letterData.printing.material} | Qty: {letterData.printing.quantity}</p>
                         {letterData.design.addOns.liveDesignSession && (
                             <div className="mt-4 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                                 🎨 Live Design Session Included
                             </div>
                         )}
                    </GenericPreview>
                );
            case 'fine':
                 return (
                    <GenericPreview title="Fine Payment">
                         <div className="text-6xl mb-4">🚓</div>
                         <p className="text-xl font-bold text-red-600">Ref: {letterData.fine.referenceNo}</p>
                         <p className="text-gray-500">Vehicle: {letterData.fine.vehicleNo}</p>
                         <p className="font-mono text-lg mt-2">LKR {letterData.fine.amount.toFixed(2)}</p>
                    </GenericPreview>
                );
            case 'invitation':
                 return (
                    <GenericPreview title="Invitation Order">
                         <div className="text-6xl mb-4">📨</div>
                         <p className="text-xl font-bold text-purple-600">{letterData.invitation.eventType}</p>
                         <p className="text-gray-500">{letterData.invitation.guestCount} Guests</p>
                         <p className="mt-2 text-sm text-gray-400">Venue: {letterData.invitation.venue}</p>
                    </GenericPreview>
                );
            default:
                return null;
        }
    }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onGoHome={onGoBack} />
      <main className="flex-grow bg-gray-50 py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Review & Confirm</h1>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {letterData.serviceType === 'letter' && (
                  <div className="flex justify-center mb-4 space-x-2">
                    <button onClick={() => setView('letter')} className={`px-4 py-2 rounded-lg ${view === 'letter' ? 'bg-brand-blue text-white' : 'bg-white'}`}>View as Letter</button>
                    <button onClick={() => setView('envelope')} className={`px-4 py-2 rounded-lg ${view === 'envelope' ? 'bg-brand-blue text-white' : 'bg-white'}`}>View as Envelope</button>
                  </div>
              )}
              {renderPreview()}
            </div>
            
            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg h-fit">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-4 text-sm">
                    <div className="pb-4 border-b">
                        <h3 className="font-semibold text-gray-500 uppercase text-xs tracking-wider mb-1">Customer Info</h3>
                        <p className="font-bold">{letterData.recipient.name}</p>
                        <p className="text-gray-600 whitespace-pre-line">{letterData.recipient.address}</p>
                    </div>

                     {/* Dynamic Details based on Service Type */}
                     <div>
                        <h3 className="font-semibold text-gray-500 uppercase text-xs tracking-wider mb-2">Item Details</h3>
                        
                        {letterData.serviceType === 'letter' && (
                            <>
                                <p className="flex justify-between"><span>Service</span> <span>Letter Writing</span></p>
                                <p className="flex justify-between"><span>Template</span> <span>{letterData.design.template}</span></p>
                                {letterData.design.addOns.handwrittenStyle && <p className="flex justify-between text-brand-blue"><span>Add-on</span> <span>Handwritten Style</span></p>}
                            </>
                        )}

                        {letterData.serviceType === 'gift' && (
                            <>
                                <p className="flex justify-between"><span>Item</span> <span>{letterData.gift.item}</span></p>
                                <p className="flex justify-between"><span>Wrapping</span> <span>{letterData.gift.wrapping}</span></p>
                                {letterData.design.addOns.giftPackingVideo && <p className="flex justify-between text-pink-600 font-bold"><span>Extra</span> <span>Packing Video</span></p>}
                            </>
                        )}

                        {letterData.serviceType === 'printing' && (
                            <>
                                <p className="flex justify-between"><span>Product</span> <span>{letterData.printing.productType}</span></p>
                                <p className="flex justify-between"><span>Quantity</span> <span>{letterData.printing.quantity}</span></p>
                                {letterData.design.addOns.liveDesignSession && <p className="flex justify-between text-accent font-bold"><span>Extra</span> <span>Live Design</span></p>}
                            </>
                        )}

                        {letterData.serviceType === 'fine' && (
                             <p className="flex justify-between"><span>Fine Amount</span> <span>LKR {letterData.fine.amount}</span></p>
                        )}
                    </div>

                     <hr className="border-dashed"/>
                     
                     <div className="flex justify-between items-end">
                         <span className="text-gray-600 font-medium">Total Amount</span>
                         <span className="text-3xl font-bold text-brand-blue">රු. {total.toFixed(2)}</span>
                     </div>
                </div>

                <div className="mt-8">
                     <div className="bg-gray-100 p-4 rounded-lg text-center border border-gray-200">
                         <p className="font-bold text-gray-800">Secure Checkout</p>
                         <p className="text-xs text-gray-500 mt-1">PayHere (Cards/Genie) / Bank Transfer</p>
                     </div>
                </div>
                
                <div className="mt-6 flex flex-col space-y-3">
                    <button onClick={onConfirmAndPay} className="w-full bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-dark transition-colors text-lg shadow-lg shadow-accent/30">
                        Pay & Place Order
                    </button>
                    <button onClick={onGoBack} className="w-full text-center text-gray-500 hover:text-gray-800 text-sm">
                        Go Back & Edit
                    </button>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewPage;
