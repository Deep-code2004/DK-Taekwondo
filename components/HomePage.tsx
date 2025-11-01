import React from 'react';
import { Page } from '../types';
import Button from './Button';
import AIAssistant from './AIAssistant';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const testimonials = [
    {
        quote: "Joining this academy was the best decision for my daughter. Her confidence has soared, and she's learned so much about discipline and respect. The instructors are fantastic!",
        name: "Anita M.",
        relation: "Parent",
    },
    {
        quote: "I've been training here for two years and it feels like a second family. The classes are challenging but incredibly rewarding. I'm in the best shape of my life, both mentally and physically.",
        name: "Hardik J.",
        relation: "Adult Student",
    },
    {
        quote: "Our son can't wait to go to class each week. He's not only learning self-defense but also valuable life skills like perseverance and focus. We couldn't be happier.",
        name: "Kishor & Sunita J.",
        relation: "Parents",
    },
];

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <div className="min-h-screen -mt-20 flex items-center justify-center relative px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://picsum.photos/1600/1200?image=1059')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center text-white p-6 rounded-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight" style={{textShadow: '2px 2px 8px rgba(220, 38, 38, 0.7)'}}>
            Master the Way of the Foot and Fist
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-slate-200">
            Embark on a transformative journey of self-discovery, discipline, and physical excellence at the premier Taekwondo Academy.
          </p>
          <Button onClick={() => setCurrentPage(Page.Admission)} size="lg" variant="primary">
            Start Your Journey Today
          </Button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Taekwondo?</h2>
        <p className="text-slate-400 mb-12 max-w-3xl mx-auto">
          Taekwondo is more than just a martial art; it's a way of life that builds character, improves health, and fosters a strong sense of community.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-red-500">Build Confidence</h3>
            <p className="text-slate-300">Overcome challenges and achieve your goals in a supportive environment, boosting your self-esteem inside and outside the dojang.</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-red-500">Enhance Fitness</h3>
            <p className="text-slate-300">Improve your strength, flexibility, coordination, and cardiovascular health through dynamic kicks, strikes, and forms.</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-red-500">Instill Discipline</h3>
            <p className="text-slate-300">Learn the core tenets of Taekwondo: Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit.</p>
          </div>
        </div>
      </div>

      {/* Online Class Section */}
      <div className="container mx-auto px-6 text-center">
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-red-500 shadow-lg max-w-4xl mx-auto ring-1 ring-red-500/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Train From Anywhere with Online Classes</h3>
            <p className="text-slate-300 mb-6">
                Can't make it to our dojang? Join our live-streamed online classes and learn Taekwondo from the comfort of your home. Perfect for students who live far away or have busy schedules.
            </p>
            <Button onClick={() => setCurrentPage(Page.Schedule)} size="lg" variant="secondary">
                View Online Schedule
            </Button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">What Our Students Say</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-lg text-left relative">
                    <svg className="absolute top-4 left-6 w-12 h-12 text-slate-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.333 8h-2.667c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333c0-4.418-2.667-8-5.333-10.667zM25.333 8h-2.667c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333c0-4.418-2.667-8-5.333-10.667z" />
                    </svg>
                    <p className="relative text-slate-300 mb-6 italic z-10">"{testimonial.quote}"</p>
                    <div className="text-right">
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-red-400">{testimonial.relation}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* AI Assistant Section */}
      <AIAssistant />
    </div>
  );
};

export default HomePage;