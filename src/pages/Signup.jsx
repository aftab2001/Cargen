import React from "react";
import Button from "../components/button/button"; // Import your Button component here
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const goToAgentHome = ()=>{
        navigate('/home')
    }
    const gotToLogin=()=>{
      navigate('/login')
    }
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen px-5">
        <div className="xl:max-w-3xl bg-white w-full p-5 sm:p-10 md:px-0 rounded-md shadow- min-h-64">
          <h1 className="text-center text-xl sm:text-3xl font-semibold">
            Sign Up
          </h1>
          <div className="w-full mt-8 p-2 rounded max-w-md mx-auto flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="border-b-2 shadow border-violet-800 p-2 bg-gray-50 leading-8 rounded"
                type="text"
                placeholder="Your first name *"
              />
              <input
                className="border-b-2 shadow border-violet-800 p-2 bg-gray-50 leading-8 rounded"
                type="text"
                placeholder="Your last name"
              />
            </div>
            <input
              className="border-b-2 shadow border-violet-800 p-2 bg-gray-50 leading-8 rounded"
              type="email"
              placeholder="Enter your email *"
            />
            <input
              className="border-b-2 shadow border-violet-800 p-2 bg-gray-50 leading-8 rounded"
              type="tel"
              placeholder="Enter your phone"
            />
            <input
              className="border-b-2 shadow border-violet-800 p-2 bg-gray-50 leading-8 rounded"
              type="password"
              placeholder="Password *"
            />
            <Button text="Register" primary={true} onClick={goToAgentHome} /> {/* Use your Button component here */}
            <p className="mt-6 text-xs text-gray-800 text-center">
              Already have an account?{" "}
              <a href="">
                <span className="text-violet-500 font-semibold" onClick={gotToLogin}>Login</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
    
};

export default Signup;
