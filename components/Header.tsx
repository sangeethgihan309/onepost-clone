import React from 'react';

interface HeaderProps {
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={onGoHome} className="flex items-center space-x-3 cursor-pointer group">
          <div className="bg-brand-blue/10 p-2 rounded-lg group-hover:bg-brand-blue/20 transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-blue">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-2xl text-primary leading-none tracking-tight">OnePost</span>
            <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase">Send Anything</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center font-sans text-sm font-medium">
          <a onClick={onGoHome} className="text-gray-600 hover:text-brand-blue cursor-pointer transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Services</a>
          <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
            <button className="hidden md:block border-2 border-accent text-accent font-bold py-2 px-6 rounded-full hover:bg-accent hover:text-white transition-all duration-300 text-sm shadow-sm hover:shadow-md">
            Login / Sign-up
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