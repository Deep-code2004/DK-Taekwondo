import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Our Philosophy</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Rooted in tradition, focused on personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src="https://image2url.com/images/1762012014234-fe6f8cc2-a30c-4a2f-a7a3-64664a2b7e2d.jpg" alt="Dojang Interior" className="w-full h-full object-cover"/>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-red-500 mb-4">Our History & Mission</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Our Taekwondo Academy was built on the dream of creating a community where individuals of all ages could learn the art of Taekwondo in a safe, respectful, and challenging environment. We believe that martial arts is a powerful tool for self-improvement that extends far beyond physical techniques.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our mission is to empower our students with the skills and mindset to navigate life's challenges with confidence and integrity. We strive to instill the core tenets of Taekwondo—Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit—in every class, every interaction, and every student.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Five Tenets of Taekwondo</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            {['Courtesy', 'Integrity', 'Perseverance', 'Self-Control', 'Indomitable Spirit'].map((tenet) => (
              <div key={tenet} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-red-500 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white">{tenet}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;