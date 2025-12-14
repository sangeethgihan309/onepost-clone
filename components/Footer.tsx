
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} OnePost. All Rights Reserved.</p>
            <p className="text-sm text-gray-400">ඩිජිටල් ලෝකයේදී පැරණි ලියුම්කවරයේ රසය.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent">Facebook</a>
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
