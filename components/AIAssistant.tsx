import React, { useState } from 'react';
import { getTaekwondoInfo } from '../services/geminiService';
import Button from './Button';

const AIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleQuery = async (query: string) => {
    if (!query.trim() || isLoading) return;

    setPrompt(query); // Set the input field to the clicked question
    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      const result = await getTaekwondoInfo(query);
      setResponse(result);
    } catch (err) {
      setError('Sorry, I couldn\'t fetch an answer. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQuery(prompt);
  };
  
  const suggestedQuestions = [
    "What are the benefits of Taekwondo for kids?",
    "How long does it take to get a black belt?",
    "What is the meaning of 'Taekwondo'?",
    "Is Taekwondo good for self-defense?"
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-2xl">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Ask Our AI Master</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Have a question about Taekwondo? Our AI-powered assistant, trained on the principles and history of this noble art, is here to help.
            </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="e.g., What are the tenets of Taekwondo?"
            className="flex-grow bg-slate-700 text-white p-4 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            disabled={isLoading}
          />
          <Button type="submit" variant="primary" size="lg" disabled={isLoading || !prompt.trim()}>
            {isLoading ? 'Thinking...' : 'Ask'}
          </Button>
        </form>

        <div className="text-center text-sm text-slate-400 mb-8">
            <p>Or try a Quick Question:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                {suggestedQuestions.map(q => (
                    <button 
                        key={q} 
                        onClick={() => handleQuery(q)}
                        disabled={isLoading}
                        className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {q}
                    </button>
                ))}
            </div>
        </div>

        {error && <p className="text-center text-red-400 bg-red-900/50 p-3 rounded-md">{error}</p>}

        {response && (
          <div className="mt-6 max-w-3xl mx-auto bg-slate-900 p-6 rounded-lg border border-slate-700">
            <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;