import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isScrolled: boolean;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform
        ${isActive 
          ? 'bg-red-600 text-white shadow-lg' 
          : 'text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-105'
        }`}
    >
      {children}
    </button>
  );
};

// Component for mobile navigation links
const MobileNavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onClick, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onClick(page)}
      className={`block w-full text-left px-4 py-3 text-lg rounded-md transition-colors duration-200
        ${isActive
          ? 'bg-red-600 text-white'
          : 'text-slate-200 hover:bg-slate-700'
        }`}
    >
      {children}
    </button>
  );
};


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navClass = isScrolled
    ? 'bg-slate-900/80 backdrop-blur-sm shadow-red-500/20 shadow-lg'
    : 'bg-transparent';

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to ensure scroll is re-enabled on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-white cursor-pointer flex items-center gap-2"
            onClick={() => setCurrentPage(Page.Home)}
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h6a1 1 0 100-2H7zM7 9a1 1 0 000 2h2a1 1 0 100-2H7zm4 0a1 1 0 100 2h2a1 1 0 100-2h-2zm-4 4a1 1 0 100 2h2a1 1 0 100-2H7zm4 0a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
            </svg> */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-red-400">
              TKD Academy
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {Object.values(Page).map((page) => (
              <NavLink key={page} page={page} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                {page}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button 
              className="text-white p-1" 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div 
            className="absolute inset-0 bg-black/60" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-slate-900 shadow-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-white">Navigation</h2>
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-1 text-slate-300 hover:text-white"
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col space-y-3">
                    {Object.values(Page).map((page) => (
                        <MobileNavLink key={page} page={page} currentPage={currentPage} onClick={handleMobileNavClick}>
                            {page}
                        </MobileNavLink>
                    ))}
                </nav>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
