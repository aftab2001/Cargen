import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
      {/* Icon Section */}
      <div className="flex items-center mb-4 text-xl">
        {icon}
      </div>

      {/* Content Section */}
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-gray-800 ">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
