import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Forgot Password form submitted with:', { email });
    // Handle forgot password logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Forgot Password</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-gray-900 mt-4">
            Remembered your password? 
            <Link to="/login" className="text-sm text-blue-500 hover:underline mt-4"> Login</Link>
          </p>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:from-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Reset Password
          </button>
        </form>
      </div>
      </form>
  );
};

export default ForgotPassword;
