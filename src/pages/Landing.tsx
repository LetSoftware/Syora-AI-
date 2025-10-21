import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import HowItWorks from '../components/HowItWorks';
import Integration from '../components/Integration';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Clickable Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpg" 
              alt="SYORA Logo"
              className="w-32 h-32 object-contain rounded-lg"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#" className="text-gray-700 hover:text-gray-900">OVERVIEW</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">FEATURES</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">HOW IT WORKS</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">INTEGRATIONS</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">FAQS</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">CONTACTS</a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Search for free
          </button>
        </div>
      </nav>

      {/* Page Sections */}
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <Integration />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}
