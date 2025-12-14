
import React, { useEffect, useState } from 'react';
import { LetterData } from '../../types';

interface Props {
  letterData: LetterData;
}

const LivePreview: React.FC<Props> = ({ letterData }) => {
  const { recipient, message, design, serviceType, printing, gift, invitation, fine } = letterData;
  const [showLiveDesigner, setShowLiveDesigner] = useState(false);
  const [designerStatus, setDesignerStatus] = useState('Connecting...');

  useEffect(() => {
    // Only show live designer overlay if it is printing service and enabled
    if (serviceType === 'printing' && design.addOns.liveDesignSession) {
        setShowLiveDesigner(true);
        setTimeout(() => setDesignerStatus('Waiting for available designer...'), 1000);
        setTimeout(() => setDesignerStatus('Connected to Kasun (Graphic Designer)'), 3500);
    } else {
        setShowLiveDesigner(false);
        setDesignerStatus('Connecting...');
    }
  }, [design.addOns.liveDesignSession, serviceType]);

  const getTemplateBg = () => {
    switch(design.template) {
        case 'Floral': return 'https://images.unsplash.com/photo-1490750967868-58cb75062ed0?q=80&w=1000&auto=format&fit=crop';
        case 'Festive': return 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop';
        case 'Official': return 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1000&auto=format&fit=crop';
        default: return 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1000&auto=format&fit=crop';
    }
  }

  const getGiftImage = () => {
      switch(gift.item) {
          case 'Chocolates': return 'https://images.unsplash.com/photo-1511381971716-6c770830a6df?q=80&w=1000&auto=format&fit=crop';
          case 'Flowers': return 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1000&auto=format&fit=crop';
          case 'Soft Toy': return 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=1000&auto=format&fit=crop';
          case 'Book Bundle': return 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop';
      }
  }

  const getInvitationBg = () => {
      switch(invitation.eventType) {
          case 'Wedding': return 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1000&auto=format&fit=crop';
          case 'Birthday': return 'https://images.unsplash.com/photo-1530103862676-de3c9a59af38?q=80&w=1000&auto=format&fit=crop';
          default: return 'https://images.unsplash.com/photo-1528642474493-227685b69b10?q=80&w=1000&auto=format&fit=crop';
      }
  }

  const getFontFamily = () => {
    if (design.addOns.handwrittenStyle) return "'cursive', 'Noto Sans Sinhala'";
    return message.font === 'Sinhala' ? "'Noto Sans Sinhala', sans-serif" : "'Poppins', sans-serif";
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
      <h3 className="text-xl font-bold text-center mb-4">Live Preview</h3>
      
      <div className="relative w-full aspect-[210/297] bg-gray-100 shadow-inner overflow-hidden">
        
        {/* Live Design Overlay */}
        {showLiveDesigner && (
            <div className="absolute inset-0 z-50 flex flex-col">
                <div className="bg-gray-900 text-white p-2 text-xs flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span>LIVE SESSION</span>
                    </div>
                    <span>{designerStatus}</span>
                </div>
                <div className="flex-grow relative bg-black">
                    <img 
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW54eW15ZGQ1eW54eW15ZGQ1eW54eW15ZGQ1eW54eW15ZGQ1eW54eW15ZGQ1/L8K62iTDkzGX6/giphy.gif" 
                        alt="Designer Working" 
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
            </div>
        )}

        {/* Letter Preview */}
        {serviceType === 'letter' && (
             <div 
             className="w-full h-full p-8 bg-cover bg-center"
             style={{ backgroundImage: `url(${getTemplateBg()})`}}
             >
             <div className="bg-white/70 p-4 rounded h-full relative">
                 <div className="text-right text-xs text-gray-600 mb-4">
                     <p className="font-bold">{recipient.name || 'ලබන්නාගේ නම'}</p>
                     <p className="whitespace-pre-line">{recipient.address || 'ලිපිනය'}</p>
                 </div>
                 <div style={{ fontFamily: getFontFamily(), fontSize: `${message.fontSize}px`, lineHeight: 1.8 }} className="text-primary whitespace-pre-wrap break-words">
                 {message.content || 'ඔබේ පණිවිඩය මෙතන පෙනෙනු ඇත...'}
                 </div>
                 {design.addOns.sticker && <div className="absolute bottom-10 right-10 text-4xl">❤️</div>}
             </div>
           </div>
        )}

        {/* Gift Preview */}
        {serviceType === 'gift' && (
             <div className="w-full h-full bg-pink-50 flex flex-col items-center justify-center p-4 relative">
                 <img src={getGiftImage()} className="w-full max-h-[60%] object-cover rounded-lg shadow-lg mb-4" />
                 <div className="bg-white p-4 rounded shadow w-full text-center border-t-4 border-pink-400">
                     <h4 className="font-bold text-pink-600 text-lg">{gift.item}</h4>
                     <p className="text-gray-500 text-sm">{gift.wrapping} Wrapping</p>
                     {gift.note && <p className="mt-2 italic text-gray-600 font-serif">"{gift.note}"</p>}
                 </div>
                 {design.addOns.giftPackingVideo && (
                     <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full shadow animate-pulse">
                         🎥 Video Requested
                     </div>
                 )}
             </div>
        )}

        {/* Invitation Preview */}
        {serviceType === 'invitation' && (
             <div 
             className="w-full h-full p-6 bg-cover bg-center flex items-center justify-center"
             style={{ backgroundImage: `url(${getInvitationBg()})`}}
             >
                 <div className="bg-white/90 p-6 text-center shadow-2xl border-4 border-double border-gray-300 w-full">
                     <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2 uppercase tracking-widest">{invitation.eventType}</h2>
                     <p className="text-gray-500 text-sm mb-4">INVITATION</p>
                     <hr className="w-16 mx-auto border-gray-400 mb-4"/>
                     <p className="text-lg font-bold mb-2 text-brand-blue">{invitation.date || 'Date'}</p>
                     <p className="text-gray-700 mb-2">@ {invitation.time || 'Time'}</p>
                     <p className="text-gray-600 italic">{invitation.venue || 'Venue'}</p>
                 </div>
             </div>
        )}

        {/* Printing Preview */}
        {serviceType === 'printing' && (
             <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center p-4 relative">
                <div className="bg-white p-8 shadow-xl w-full h-[60%] flex items-center justify-center border border-gray-300">
                    <p className="text-2xl font-bold text-gray-300 transform -rotate-12">PRINT PREVIEW</p>
                </div>
                <div className="text-center bg-white/90 p-2 rounded w-full mt-4">
                    <p className="font-bold text-sm">{printing.productType}</p>
                    <p className="text-xs text-gray-600">{printing.material} | Qty: {printing.quantity}</p>
                </div>
             </div>
        )}
        
        {/* Fine Receipt Preview */}
        {serviceType === 'fine' && (
             <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4">
                 <div className="bg-white p-4 w-full shadow-md border-t-4 border-red-500 text-sm font-mono leading-tight">
                     <div className="text-center mb-4 border-b pb-2">
                         <h2 className="font-bold text-lg">PAYMENT RECEIPT</h2>
                         <p>Govt. of Sri Lanka</p>
                         <p className="text-xs text-gray-500">{new Date().toLocaleDateString()}</p>
                     </div>
                     <div className="space-y-2 mb-4">
                         <div className="flex justify-between">
                             <span>REF:</span>
                             <span className="font-bold">{fine.referenceNo || '-------'}</span>
                         </div>
                         <div className="flex justify-between">
                             <span>TYPE:</span>
                             <span>{fine.fineType}</span>
                         </div>
                         <div className="flex justify-between">
                             <span>VEHICLE:</span>
                             <span>{fine.vehicleNo || '-------'}</span>
                         </div>
                     </div>
                     <div className="flex justify-between border-t border-b py-2 font-bold text-lg">
                         <span>TOTAL:</span>
                         <span>LKR {fine.amount}</span>
                     </div>
                     <div className="mt-6 text-center text-xs text-gray-400">
                         <p>This is a generated preview.</p>
                         <p>OnePost Service</p>
                     </div>
                 </div>
             </div>
        )}

      </div>
    </div>
  );
};

export default LivePreview;