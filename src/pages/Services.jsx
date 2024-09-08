import React from 'react';
import Card from '../components/card/card';
import { FaCalendar, FaCogs, FaUsers, FaChartLine } from 'react-icons/fa';

const cards = [
  {
    title: 'Scheduling',
    description: 'Scheduling appointments and keeping track of customer records',
    icon: <FaCalendar />,
  },
  {
    title: 'Inventory Management',
    description: 'Keep track of your inventory and make it available for sale',
    icon: <FaCogs />,
  },
  {
    title: 'Customer Relationship',
    description: 'Build and maintain effective relationships with customers',
    icon: <FaUsers />,
  },
  {
    title: 'Sales Tracking',
    description: 'Track sales and manage your sales team',
    icon: <FaChartLine />,
  },
];
{/* <div class="flex flex-wrap gap-8 min-h-min">
    <div class="w-full md:w-1/2 lg:w-1/4 */}

const Services = () => {
  return (
    <div className="flex flex-col items-center px-6 lg:px-8 py-20 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl">
        {cards.map((card) => (
          <div key={card.title} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Card
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

};

export default Services;
