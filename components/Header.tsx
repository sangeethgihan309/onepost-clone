import React from 'react';

interface HeaderProps {
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={onGoHome} className="flex items-center space-x-3 cursor-pointer group">
          <div className="bg-gradient-to-br from-brand-blue to-blue-600 p-2.5 rounded-xl shadow-lg shadow-brand-blue/30 group-hover:scale-105 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-2xl text-gray-800 leading-none tracking-tight">OnePost</span>
            <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase mt-0.5">Sri Lanka</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center font-sans text-sm font-medium">
          <a onClick={onGoHome} className="text-gray-600 hover:text-brand-blue cursor-pointer transition-colors hover:bg-blue-50 px-3 py-1.5 rounded-lg">Home</a>
          <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors hover:bg-blue-50 px-3 py-1.5 rounded-lg">Services</a>
          <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors hover:bg-blue-50 px-3 py-1.5 rounded-lg">Track</a>
          <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors hover:bg-blue-50 px-3 py-1.5 rounded-lg">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-gray-900 text-white font-bold py-2.5 px-6 rounded-full hover:bg-gray-800 transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Get Started
            </button>
            <button className="md:hidden text-primary p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;