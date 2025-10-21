import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white rounded-t-[3rem] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Syora</h3>
            <p className="text-blue-100 text-sm">
              Discover products ranked by relevance, never by ads.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">How it works</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* For Shoppers */}
          <div>
            <h4 className="font-semibold mb-4">For Shoppers</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white">Start Searching</a></li>
              <li><a href="#" className="hover:text-white">Popular Discoveries</a></li>
              <li><a href="#" className="hover:text-white">Trending on Syora</a></li>
              <li><a href="#" className="hover:text-white">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h4 className="font-semibold mb-4">For Vendors</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white">Connect your shop</a></li>
              <li><a href="#" className="hover:text-white">Shopify and Website Integrations</a></li>
              <li><a href="#" className="hover:text-white">Trending on Syora</a></li>
              <li><a href="#" className="hover:text-white">Vendor Help center</a></li>
              <li><a href="#" className="hover:text-white">Pricing and Leads</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-blue-100 mb-4 md:mb-0">
            SYORA AI © 2025. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-blue-100 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-50">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-50">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-50">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-50">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-50">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
