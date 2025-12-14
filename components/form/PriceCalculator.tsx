
import React from 'react';
import { LetterData } from '../../types';
import { PRICING } from '../../constants';

interface Props {
  data: LetterData;
}

const PriceCalculator: React.FC<Props> = ({ data }) => {
  const { serviceType, design, printing, gift, invitation, fine } = data;
  const { addOns } = design;

  const calculateTotal = () => {
    let total = 0;

    if (serviceType === 'letter') {
        total += PRICING.BASE;
        if (addOns.handwrittenStyle) total += PRICING.HANDWRITTEN_STYLE;
        if (addOns.sticker) total += PRICING.STICKER;
    } else if (serviceType === 'printing') {
        const unitPrice = PRICING.PRINTING[printing.productType] || 0;
        total += unitPrice * printing.quantity;
    } else if (serviceType === 'gift') {
        total += PRICING.GIFTS[gift.item] || 0;
        if (gift.wrapping !== 'Standard') total += PRICING.GIFTS.WRAPPING_PREMIUM;
    } else if (serviceType === 'invitation') {
        total += PRICING.INVITATIONS.UNIT_PRICE * invitation.guestCount;
        total += PRICING.INVITATIONS.DESIGN_FEE;
    } else if (serviceType === 'fine') {
        total += fine.amount;
        total += PRICING.FINE_SERVICE_CHARGE;
        if (fine.physicalReceipt) total += PRICING.PHYSICAL_RECEIPT_FEE;
    }

    // Live Design is only for Printing
    if (addOns.liveDesignSession && serviceType === 'printing') {
        total += PRICING.LIVE_DESIGN_SESSION;
    }

    // Packing Video is only for Gifts
    if (addOns.giftPackingVideo && serviceType === 'gift') {
        total += PRICING.GIFT_PACKING_VIDEO;
    }

    return total;
  };

  const total = calculateTotal();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">මිල ගණනය</h3>
      <div className="space-y-2 text-gray-700">
        
        {serviceType === 'letter' && (
             <div className="flex justify-between">
                <span>Base Letter</span>
                <span>රු. {PRICING.BASE.toFixed(2)}</span>
            </div>
        )}

        {serviceType === 'printing' && (
            <div className="flex justify-between">
                <span>{printing.productType} (x{printing.quantity})</span>
                <span>රු. {(PRICING.PRINTING[printing.productType] * printing.quantity).toFixed(2)}</span>
            </div>
        )}

        {serviceType === 'gift' && (
             <>
                <div className="flex justify-between">
                    <span>{gift.item}</span>
                    <span>රු. {PRICING.GIFTS[gift.item]?.toFixed(2)}</span>
                </div>
                {gift.wrapping !== 'Standard' && (
                    <div className="flex justify-between text-sm">
                        <span>{gift.wrapping} Wrapping</span>
                        <span>රු. {PRICING.GIFTS.WRAPPING_PREMIUM.toFixed(2)}</span>
                    </div>
                )}
             </>
        )}

        {serviceType === 'invitation' && (
             <>
                <div className="flex justify-between">
                    <span>Cards (x{invitation.guestCount})</span>
                    <span>රු. {(PRICING.INVITATIONS.UNIT_PRICE * invitation.guestCount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span>Base Design Fee</span>
                    <span>රු. {PRICING.INVITATIONS.DESIGN_FEE.toFixed(2)}</span>
                </div>
             </>
        )}
        
        {serviceType === 'fine' && (
             <>
                <div className="flex justify-between">
                    <span>Fine Amount</span>
                    <span>රු. {fine.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span>Service Charge</span>
                    <span>රු. {PRICING.FINE_SERVICE_CHARGE.toFixed(2)}</span>
                </div>
                {fine.physicalReceipt && (
                    <div className="flex justify-between text-sm">
                        <span>Physical Receipt Post</span>
                        <span>රු. {PRICING.PHYSICAL_RECEIPT_FEE.toFixed(2)}</span>
                    </div>
                )}
             </>
        )}

        {/* Addons */}
        {serviceType === 'letter' && addOns.handwrittenStyle && (
          <div className="flex justify-between text-sm">
            <span>Handwritten Style</span>
            <span>රු. {PRICING.HANDWRITTEN_STYLE.toFixed(2)}</span>
          </div>
        )}
        
        {addOns.liveDesignSession && serviceType === 'printing' && (
             <div className="flex justify-between text-accent font-medium">
                <span>✨ Live Designer</span>
                <span>රු. {PRICING.LIVE_DESIGN_SESSION.toFixed(2)}</span>
            </div>
        )}

        {addOns.giftPackingVideo && serviceType === 'gift' && (
             <div className="flex justify-between text-pink-500 font-medium">
                <span>🎥 Packing Video</span>
                <span>රු. {PRICING.GIFT_PACKING_VIDEO.toFixed(2)}</span>
            </div>
        )}

        <hr className="my-2 border-t border-gray-300" />
        <div className="flex justify-between font-bold text-lg text-primary">
          <span>Total</span>
          <span>රු. {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
