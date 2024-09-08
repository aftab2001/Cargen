// src/components/Button/Button.js
import React from 'react';

const Button = ({ primary, text,onClick }) => {
  const bgColor = primary ? 'bg-violet-500' : 'bg-white';
  const textColor = primary ? 'text-white' : 'text-violet-500';

  return (
    <button
      className={`px-6 py-2 min-w-[120px] violet-500 ${textColor} ${bgColor} border border-violet-500 rounded hover:bg-transparent hover:text-violet-500 focus:outline-none focus:ring`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
