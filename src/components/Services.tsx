import React from 'react';
import { 
  BarChart, Search, Mail, Megaphone, 
  PenTool, Share2 
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your visibility with our data-driven SEO strategies. We help you rank higher and attract more organic traffic.'
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Make informed decisions with comprehensive analytics and detailed performance reports.'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Create engaging email campaigns that convert. We help you nurture leads and build lasting relationships.'
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    description: 'Build a strong social presence and engage with your audience across all major platforms.'
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    description: 'Develop compelling content that resonates with your target audience and drives engagement.'
  },
  {
    icon: Share2,
    title: 'PPC Advertising',
    description: 'Maximize your ROI with targeted paid advertising campaigns across multiple platforms.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}