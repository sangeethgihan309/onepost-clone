import React, { useState } from 'react';
import HomePage from './components/pages/HomePage';
import CreateLetterPage from './components/pages/CreateLetterPage';
import ReviewPage from './components/pages/ReviewPage';
import SuccessPage from './components/pages/SuccessPage';
import { LetterData, ServiceType } from './types';
import { initialLetterData } from './constants';

export type Page = 'home' | 'create' | 'review' | 'success';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [letterData, setLetterData] = useState<LetterData>(initialLetterData);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const handleStart = (type?: ServiceType) => {
      if (type) {
          setLetterData({ ...letterData, serviceType: type });
      } else {
          setLetterData(initialLetterData);
      }
      navigateTo('create');
  };
  
  const handleLetterDataChange = (data: LetterData) => {
    setLetterData(data);
  };
  
  const resetAndGoHome = () => {
    setLetterData(initialLetterData);
    navigateTo('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onStart={handleStart} />;
      case 'create':
        return (
          <CreateLetterPage
            letterData={letterData}
            onDataChange={handleLetterDataChange}
            onProceedToReview={() => navigateTo('review')}
            onGoBackHome={() => navigateTo('home')}
          />
        );
      case 'review':
        return (
          <ReviewPage
            letterData={letterData}
            onGoBack={() => navigateTo('create')}
            onConfirmAndPay={() => navigateTo('success')}
          />
        );
      case 'success':
        return (
            <SuccessPage 
                orderId="OP-12345XYZ"
                onGoHome={resetAndGoHome}
            />
        );
      default:
        return <HomePage onStart={handleStart} />;
    }
  };

  return <div className="min-h-screen flex flex-col">{renderPage()}</div>;
};

export default App;