import React from 'react';
import LoginButton from '../components/LoginButton';

const Login = () => {
  return (
    // to make the "Kaysi" bounce, notice "animate-bounce"
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-extrabold text-white absolute top-40 animate-bounce">
        Kaysi!
      </h1>
      <div className="bg-gray-100 p-8 rounded-xl shadow-2xl w-96 space-y-6">
        {/* Animated Text */}
        <div className="overflow-x-hidden">
          <p className="py-10 animate-marquee whitespace-nowrap">
            <span className="text-4xl font-semibold text-indigo-900 mx-4">
              Hello! Please log in via Google!
            </span>
          </p>
        </div>

        {/* Login Button Area */}
        <div className="mt-4">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Login;



