import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_NUMBER, CONTACT_EMAIL, COMPANY_ADDRESS } from '../../utils/constants';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-blue-100 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <ContactItem icon={<Phone className="w-6 h-6 text-blue-600" />} title="Phone">
        <p className="text-gray-600">{CONTACT_NUMBER}</p>
        <p className="text-gray-600">Mon-Fri 9:30am to 4pm</p>
      </ContactItem>

      <ContactItem icon={<Mail className="w-6 h-6 text-blue-600" />} title="Email">
        <p className="text-gray-600">{CONTACT_EMAIL}</p>
      </ContactItem>

      <ContactItem icon={<MapPin className="w-6 h-6 text-blue-600" />} title="Location">
        <p className="text-gray-600">{COMPANY_ADDRESS}</p>
      </ContactItem>
    </div>
  );
}