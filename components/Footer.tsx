import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Taekwondo Academy</h3>
          <p className="text-slate-400 max-w-md mb-4">
            Discipline. Respect. Strength. Join us to begin your journey.
          </p>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.instagram.com/deep_khatri_2004?igsh=MTN3OGh3eDJ1YWJqMw==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors duration-300" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 4.573a.75.75 0 01.75.75v1.518a.75.75 0 01-.75.75h-1.518a.75.75 0 01-.75-.75V7.323a.75.75 0 01.75-.75h1.518zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0-1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" clipRule="evenodd" /></svg>
            </a>
            <a 
              href="https://wa.link/gijsni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-500 transition-colors duration-300"
              aria-label="Chat on WhatsApp"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.39 0-4.54 3.68-8.22 8.22-8.22 2.23 0 4.33.87 5.82 2.36s2.36 3.58 2.36 5.82c0 4.54-3.68 8.22-8.22 8.22zm4.49-5.97c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12c-.17.25-.64.82-.79.98s-.29.19-.54.06c-.25-.12-1.09-.4-2.07-1.28-1.52-1.37-1.89-1.92-1.96-2.08-.07-.17 0-.26.11-.35.1-.09.25-.25.37-.37.12-.12.17-.21.25-.35s.04-.25-.02-.37c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.55-.42h-.52c-.17 0-.44.06-.67.31s-.86.84-.86 2.06c0 1.22.88 2.39 1 2.56.12.17 1.76 2.68 4.26 3.76.59.26 1.05.41 1.41.52.59.18 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18s-.25-.11-.5-.24z" />
              </svg>
            </a>
          </div>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Taekwondo Academy. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;