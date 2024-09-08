import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/button';

const HeroSection = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    console.log('Redirecting to signup');
    navigate('/signup');
  };

  const goToLive = () => {
    navigate('/demo');
  };

  return (
        <div className="flex flex-col justify-center items-center min-h-screen px-6 lg:px-8 pb-20">
          <div className="mx-auto max-w-3xl pt-20">
            <div className="text-center py-8">
              <h1 className="text-4xl py-4 px-8 font-bold sm:text-6xl text-gray-800 dark:text-gray-800 leading-loose">
                Driving Connections, Accelerating Sales.
              </h1>
              <p className="pt-6 text-lg leading-8 text-gray-800 dark:text-gray-800">
                Empowering Dealerships: Where Every Transaction Drives Success.
              </p>
              <div className="flex justify-center pt-8 gap-4">
                <Button primary text="Get Started" onClick={goToSignup} />
                <Button primary={false} text="Live Demo" onClick={goToLive} />
              </div>
            </div>
          </div>
        </div>
  

  );
};

export default HeroSection;
