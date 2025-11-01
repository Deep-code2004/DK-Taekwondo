
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import InstructorsPage from './components/InstructorsPage';
import SchedulePage from './components/SchedulePage';
import AdmissionPage from './components/AdmissionPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage setCurrentPage={setCurrentPage} />;
      case Page.About:
        return <AboutPage />;
      case Page.Instructors:
        return <InstructorsPage />;
      case Page.Schedule:
        return <SchedulePage />;
      case Page.Admission:
        return <AdmissionPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isScrolled={isScrolled} 
      />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
