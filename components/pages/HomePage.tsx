
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ServiceType } from '../../types';

interface HomePageProps {
  onStart: (type?: ServiceType) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; colorClass: string; onClick: () => void }> = ({ icon, title, description, colorClass, onClick }) => (
  <div 
    onClick={onClick}
    className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100 h-full flex flex-col items-center text-center relative overflow-hidden"
  >
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${colorClass}`}>
        {icon}
    </div>
    <h3 className="font-sans font-bold text-xl mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{description}</p>
    
    <button className="text-sm font-bold text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">
        දැන්ම පටන් ගන්න <span>→</span>
    </button>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <>
      <Header onGoHome={() => onStart()} />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1456324504439-367cee13d824?q=80&w=2070&auto=format&fit=crop')` 
                }}
            ></div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
            
            <div className="relative container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center pt-10">
                <div className="text-left animate-fade-in">
                    <div className="inline-block bg-accent/20 border border-accent/30 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
                        <span className="text-accent font-bold text-xs uppercase tracking-widest">Digital Post Office</span>
                    </div>
                    <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight drop-shadow-2xl">
                        ලිපි, තෑගි, ආරාධනා සහ <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-300">රජයේ දඩ ගෙවීම්</span> <br/>
                        එකම තැනකින්!
                    </h1>
                    <p className="font-sinhala text-xl md:text-2xl text-gray-200 mb-4 font-light">
                        ඩිජිටල් ලෝකයේදීත් පැරණී ලියුම්කවරයේ රසය නැවත ලබාගන්න.
                    </p>
                    <p className="text-white/80 text-lg mb-8 flex items-center gap-2">
                        <span className="bg-white/20 p-1 rounded-full"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                    </p> 

                    {/* Quick Action Buttons */}
                    <div className="grid grid-cols-2 gap-4 max-w-md">
                        <button onClick={() => onStart('letter')} className="group flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blue-dark text-white p-4 rounded-xl shadow-lg hover:shadow-brand-blue/50 transition-all duration-300 transform hover:-translate-y-1">
                            <span className="text-2xl group-hover:rotate-12 transition-transform">✉️</span>
                            <span className="font-bold">ලිපියක් ලියන්න</span>
                        </button>
                        <button onClick={() => onStart('printing')} className="group flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1">
                            <span className="text-2xl group-hover:rotate-12 transition-transform">🖨️</span>
                            <span className="font-bold">Print කරන්න</span>
                        </button>
                        <button onClick={() => onStart('gift')} className="group flex items-center justify-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-1">
                            <span className="text-2xl group-hover:rotate-12 transition-transform">🎁</span>
                            <span className="font-bold">තෑග්ගක් යවන්න</span>
                        </button>
                         <button onClick={() => onStart('fine')} className="group flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white p-4 rounded-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-1">
                            <span className="text-2xl group-hover:rotate-12 transition-transform">👮</span>
                            <span className="font-bold">දඩ ගෙවන්න</span>
                        </button>
                    </div>
                </div>

                {/* Hero Visual Composition - Hidden on mobile, visible on MD+ */}
                <div className="hidden md:block relative h-[500px]">
                     {/* Abstract composition of elements */}
                    <img 
                        src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=1000&auto=format&fit=crop" 
                        className="absolute top-0 right-0 w-80 h-96 object-cover rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 z-10 border-4 border-white/20"
                        alt="Letter"
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop" 
                        className="absolute bottom-10 left-10 w-64 h-64 object-cover rounded-2xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-500 z-20 border-4 border-white/20"
                        alt="Gift"
                    />
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/30 text-white shadow-xl z-30">
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <p className="font-mono text-sm opacity-80">Processing Request...</p>
                        <p className="font-bold text-lg mt-1">OnePost Services Active</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-brand-blue font-bold tracking-widest text-sm uppercase">What we do</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-2">අපගේ සේවාවන්</h2>
                <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              <FeatureCard 
                onClick={() => onStart('letter')}
                colorClass="bg-blue-100 text-blue-600"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>} 
                title="Letters" 
                description="ඔබේ අදහස් ලස්සනට මුද්‍රණය කර ආදරණීයයන්ට තැපැල් කරන්න." 
              />
              <FeatureCard 
                onClick={() => onStart('gift')}
                colorClass="bg-pink-100 text-pink-600"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>} 
                title="Gifts" 
                description="මල්, චොකලට් සහ තෑගි ගෙදරටම යවන්න. පුදුම කරන්න." 
              />
              <FeatureCard 
                onClick={() => onStart('invitation')}
                colorClass="bg-purple-100 text-purple-600"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>} 
                title="Invitations" 
                description="උත්සව සඳහා ආරාධනා පත්‍ර නිර්මාණය කර යවන්න." 
              />
              <FeatureCard 
                onClick={() => onStart('printing')}
                colorClass="bg-orange-100 text-orange-600"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>} 
                title="Printing" 
                description="බැනර්, photos සහ ව්‍යාපාරික කාඩ්පත් ඇතුලු සියලුම මුද්‍රණයන් සිදු කර ගන්න ." 
              />
              <FeatureCard 
                onClick={() => onStart('fine')}
                colorClass="bg-red-100 text-red-600"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>} 
                title="Pay Fines" 
                description="රථවාහන සහ දඩ මුදල් පහසුවෙන් ගෙවන්න." 
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
