import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-blue-700">
        Connecting buyers and vendors <br className="hidden md:block" /> across the social web
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg mb-8">
        The World's first AI Powered Search Engine for Social Commerce
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mb-12">
        <button
          onClick={() => navigate('/login')}
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:opacity-90 transition-all"
        >
          <span>Get started free</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-72 md:h-64 rounded-3xl overflow-hidden shadow-lg">
        <img
          src="/hero-bg.jpg" 
          alt="Hero banner showing social commerce connection visualization"
          className="w-full h-full object-cover"
        />
        {/* Optional gradient overlay for vibrance */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 mix-blend-overlay"></div>
      </div>
    </section>
  );
}
