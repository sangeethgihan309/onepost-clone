
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ServiceType } from '../../types';

interface HomePageProps {
  onStart: (type?: ServiceType) => void;
  onGoHome: () => void;
}

const ServiceCard: React.FC<{ 
    title: string; 
    desc: string; 
    icon: string; 
    onClick: () => void; 
    delay: string;
    image: string;
    badge?: string;
}> = ({ title, desc, icon, onClick, delay, image, badge }) => (
    <div 
        onClick={onClick}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
        style={{ animationDelay: delay }}
    >
        <div className="h-56 overflow-hidden relative">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            <div className="absolute top-4 right-4 z-20">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 p-2 rounded-xl text-2xl shadow-sm">
                    {icon}
                </div>
            </div>

            {badge && (
                <div className="absolute top-4 left-4 bg-brand-blue/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    {badge}
                </div>
            )}

            <div className="absolute bottom-4 left-4 right-4 text-white z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                 <h3 className="font-serif text-2xl font-bold tracking-wide mb-1">{title}</h3>
                 <div className="h-0.5 w-12 bg-vintage-gold rounded-full group-hover:w-full transition-all duration-700"></div>
            </div>
        </div>
        <div className="p-6 relative bg-white h-full flex flex-col justify-between">
            <p className="text-gray-600 text-sm leading-relaxed font-sinhala line-clamp-3">{desc}</p>
            <div className="mt-4 flex items-center text-brand-blue text-sm font-bold uppercase tracking-wider group/link">
                <span>Start Now</span>
                <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
        </div>
    </div>
);

const Step: React.FC<{ number: string; title: string; desc: string }> = ({ number, title, desc }) => (
    <div className="relative flex flex-col items-center text-center max-w-xs mx-auto group">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 -z-10"></div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl group-hover:shadow-2xl transition-all duration-300 w-full h-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-blue-600 flex items-center justify-center text-2xl font-serif font-bold text-white mb-6 shadow-lg shadow-blue-200 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                {number}
            </div>
            <h4 className="font-bold text-xl mb-3 text-gray-900">{title}</h4>
            <p className="text-gray-600 leading-relaxed font-sinhala text-sm">{desc}</p>
        </div>
    </div>
);

const HomePage: React.FC<HomePageProps> = ({ onStart, onGoHome }) => {
  return (
    <>
      <Header onGoHome={onGoHome} />
      <main className="overflow-hidden bg-white">
        
        {/* Hero Section with Digital Post Office Concept */}
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
            
            {/* Background Image - Modern Workspace / Digital Connection */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed animate-fade-in"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop')`,
                }}
            ></div>

            {/* Modern Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-brand-blue/20 z-0 backdrop-blur-[2px]"></div>
            
            {/* Animated Particles/Shapes (CSS only) */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-60 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 relative z-10 pt-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8 animate-slide-up">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm text-brand-blue text-xs font-bold tracking-[0.2em] uppercase mb-4">
                            <span className="relative flex h-2 w-2 mr-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                            </span>
                            Sri Lanka's First Digital Post Office
                        </div>
                        
                        <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] drop-shadow-sm">
                            ඩිජිටල් ලෝකයෙන්, <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-600 relative inline-block">
                                හදවතටම
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-vintage-gold opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                            </span>
                        </h1>
                        
                        <p className="font-sinhala text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            දුරකථනයෙන් ටයිප් කරන පණිවිඩය, අපි අලංකාර ලිපියක් ලෙස මුද්‍රණය කර, කවරයක බහා, ඔබේ ආදරණීයයන්ගේ දෑතටම තැපැල් කරන්නෙමු.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                            <button 
                                onClick={() => onStart('letter')}
                                className="group px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden relative"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-blue to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative flex items-center gap-3">
                                    <span>ලිපියක් යවන්න</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                </div>
                            </button>
                            <button 
                                onClick={() => onStart('fine')}
                                className="px-8 py-4 bg-white/80 backdrop-blur text-gray-900 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 hover:border-red-100 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-lg"
                            >
                                <span>දඩ ගෙවන්න</span>
                                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">New</span>
                            </button>
                        </div>

                        <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200/50 mt-8 max-w-md mx-auto lg:mx-0">
                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-bold text-gray-900">2K+</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Letters Sent</p>
                            </div>
                            <div className="h-10 w-px bg-gray-200"></div>
                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-bold text-gray-900">100%</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Secure</p>
                            </div>
                            <div className="h-10 w-px bg-gray-200"></div>
                             <div className="text-center lg:text-left">
                                <p className="text-3xl font-bold text-gray-900">24/7</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Online</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Digital to Physical Concept */}
                    <div className="hidden lg:block relative h-[650px] w-full animate-float">
                         {/* Main Device Frame */}
                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[650px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl z-20 overflow-hidden">
                            {/* Screen Content */}
                            <div className="w-full h-full bg-white relative">
                                <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-brand-blue/10 to-transparent z-10"></div>
                                {/* Chat UI Representation */}
                                <div className="p-6 pt-12 space-y-4">
                                    <div className="flex items-end gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                        <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none max-w-[80%]">
                                            <div className="h-2 w-32 bg-gray-300 rounded mb-2"></div>
                                            <div className="h-2 w-20 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-brand-blue"></div>
                                        <div className="bg-brand-blue text-white p-3 rounded-2xl rounded-br-none max-w-[80%]">
                                            <p className="text-xs opacity-90">අම්මේ, ලබන සතියේ මම ගෙදර එනවා...</p>
                                        </div>
                                    </div>
                                    
                                    {/* Transformation Animation */}
                                    <div className="absolute top-1/2 left-0 right-0 flex justify-center">
                                        <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center gap-2 transform translate-y-12">
                                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-pulse">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            <p className="text-xs font-bold text-gray-800">Printing...</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom Action */}
                                <div className="absolute bottom-0 w-full bg-white border-t p-4 pb-8">
                                    <div className="w-full h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold">Send Letter</div>
                                </div>
                            </div>
                         </div>

                         {/* Floating Elements - Physical Letters */}
                         <img 
                            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=400&auto=format&fit=crop"
                            className="absolute top-20 -right-4 w-48 rounded-lg shadow-2xl rotate-12 border-4 border-white z-10 animate-float"
                            style={{ animationDelay: '1s' }}
                            alt="Physical Letter"
                         />
                         <div className="absolute bottom-40 -left-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-30 animate-float" style={{ animationDelay: '2s' }}>
                             <div className="flex items-center gap-3">
                                 <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                 </div>
                                 <div>
                                     <p className="font-bold text-sm text-gray-800">Delivered</p>
                                     <p className="text-xs text-gray-500">Kandy, Sri Lanka</p>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-brand-blue font-bold tracking-widest text-xs uppercase mb-3 block">Our Services</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">ඔබට අවශ්‍ය දේ තෝරන්න</h2>
                    <p className="text-gray-600 font-sinhala text-lg leading-relaxed">
                        සාම්ප්‍රදායික තැපැල් සේවයේ විශ්වාසය සහ නවීන තාක්ෂණයේ වේගය සමඟ, ඔබට අවශ්‍ය ඕනෑම දෙයක් ගෙදරටම යවා ගන්න.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ServiceCard 
                        title="Letters"
                        desc="ඔබේ සිතුවිලි අලංකාර කඩදාසියක මුද්‍රණය කර ආදරණීයයන්ට තැපැල් කරන්න."
                        icon="✉️"
                        image="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop"
                        onClick={() => onStart('letter')}
                        delay="0s"
                        badge="Popular"
                    />
                    <ServiceCard 
                        title="Pay Fines"
                        desc="රථවාහන දඩ සහ ගාස්තු පෝලිම් වල නොසිට ගෙවන්න. රිසිට්පත ගෙදරටම."
                        icon="👮"
                        image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
                        onClick={() => onStart('fine')}
                        delay="0.1s"
                        badge="New"
                    />
                    <ServiceCard 
                        title="Gifts"
                        desc="මල්, චොකලට්, සහ පොත් වැනි තෑගි පණිවිඩයක් සමඟ යවන්න."
                        icon="🎁"
                        image="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop"
                        onClick={() => onStart('gift')}
                        delay="0.2s"
                    />
                    <ServiceCard 
                        title="Printing"
                        desc="බැනර්, කාඩ්පත් සහ ඡායාරූප උසස් තත්ත්වයෙන් මුද්‍රණය කරගන්න."
                        icon="🖨️"
                        image="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=800&auto=format&fit=crop"
                        onClick={() => onStart('printing')}
                        delay="0.3s"
                    />
                </div>
            </div>
        </section>

        {/* How it Works - Pipeline Design */}
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="font-serif text-4xl font-bold mb-4 text-gray-900">සරල පියවර 3ක් පමණයි</h2>
                     <p className="text-gray-500">From your screen to their hands</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 relative px-4">
                    {/* Connecting Dashed Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-0 transform -translate-y-8"></div>
                    
                    <Step 
                        number="01" 
                        title="ඔබ ලියන්න" 
                        desc="අපගේ වෙබ් අඩවිය හරහා ඔබේ ලිපිය හෝ පණිවිඩය සකසා ගන්න." 
                    />
                    <Step 
                        number="02" 
                        title="අපි සකසමු" 
                        desc="උසස් තත්ත්වයේ කඩදාසි සහ කවර භාවිතා කර එය අලංකාරව සකසන්නෙමු." 
                    />
                    <Step 
                        number="03" 
                        title="තැපැල් කිරීම" 
                        desc="ශ්‍රී ලංකා තැපෑල හරහා ආරක්ෂිතව ලබන්නාගේ ලිපිනයටම යවන්නෙමු." 
                    />
                </div>
            </div>
        </section>

        {/* Emotional Hook / CTA */}
        <section className="py-28 relative overflow-hidden bg-gray-900">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10"></div>
            
            <div className="container mx-auto px-6 relative z-20 text-center">
                <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">වචන වලට පණ දෙන්න.</h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light font-sinhala leading-relaxed">
                    ඩිජිටල් තිරයකින් ඔබ්බට ගොස්, ස්පර්ශ කළ හැකි, දැනෙන මතකයක් තිළිණ කරන්න.
                </p>
                <button 
                    onClick={() => onStart('letter')}
                    className="bg-vintage-gold text-white font-bold py-5 px-16 rounded-full text-lg shadow-[0_0_20px_rgba(214,158,46,0.5)] hover:bg-yellow-600 hover:shadow-[0_0_30px_rgba(214,158,46,0.7)] hover:scale-105 transition-all transform ring-4 ring-white/10"
                >
                    දැන්ම පටන් ගන්න
                </button>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default HomePage;
