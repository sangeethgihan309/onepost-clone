
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface SuccessPageProps {
  orderId: string;
  onGoHome: () => void;
}

const ConfettiPiece: React.FC<{ color: string; left: string; delay: string }> = ({ color, left, delay }) => (
  <div
    className="absolute w-2 h-4 top-0 animate-confetti-rain"
    style={{ backgroundColor: color, left: left, animationDelay: delay }}
  ></div>
);

const SuccessPage: React.FC<SuccessPageProps> = ({ orderId, onGoHome }) => {
  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`මම OnePost එකෙන් ලියුමක් යැව්වා! එය ඉතා පහසුයි. நீங்களும் முயற்சிக்கலாம். https://onepost.lk`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onGoHome={onGoHome} />
      <main className="flex-grow flex items-center justify-center bg-gray-50 p-4 relative overflow-hidden">
         {/* Confetti Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <ConfettiPiece 
              key={i}
              color={['#48BB78', '#3182CE', '#D2B48C', '#E53E3E'][i % 4]}
              left={`${Math.random() * 100}%`}
              delay={`${Math.random() * 2}s`}
            />
          ))}
        </div>

        <div className="text-center bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full z-10 animate-fade-in">
          <div className="flex justify-center mb-4">
             <svg className="w-20 h-20 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">ගෙවීම සාර්ථකයි!</h1>
          <p className="text-gray-600 mb-6">ඔබගේ ඇණවුම අපට ලැබී ඇත. ඔබගේ ලිපිය ඉක්මනින්ම යවනු ඇත.</p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
            <p className="font-semibold">Order ID: <span className="font-mono text-brand-blue">{orderId}</span></p>
            <p className="font-semibold">Estimated Delivery: <span className="font-normal">දින 3-5 (ශ්‍රී ලංකා තැපැල්)</span></p>
            <a href="#" className="text-brand-blue hover:underline font-bold mt-2 block">Track Your Letter →</a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={shareOnWhatsApp} className="bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              Share on WhatsApp
            </button>
             <button onClick={onGoHome} className="bg-gray-200 text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
              මුල් පිටුවට යන්න
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;
