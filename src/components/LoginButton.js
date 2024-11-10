import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
// log in button
  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        className="w-full py-2 px-4 bg-red-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Log In
      </button>
    )
  );
};

export default LoginButton;