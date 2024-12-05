import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { SITE_NAME, CONTACT_EMAIL, COMPANY_ADDRESS, SOCIAL_LINKS } from '../../utils/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
            <p className="text-gray-400">
              Professional trading education and mentorship to help you succeed in the financial markets.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white">Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{SITE_NAME}</li>
              <li>{COMPANY_ADDRESS}</li>
              <li>Email: {CONTACT_EMAIL}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.website} className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.twitter} className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.youtube} className="text-gray-400 hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}