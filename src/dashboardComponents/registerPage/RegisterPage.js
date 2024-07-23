"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 border-4 absolute border-black w-full h-full top-0 z-[10000]">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
               type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
              <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 top-[25px] flex items-center pr-3"
            >
              {showPassword ? (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12c0 2.21-1.79 4-4 4-1.65 0-3.11-.73-4.05-1.87m8.05-2.12c1.12-.32 2.07-1.17 2.39-2.29M12 5.3c1.74 0 3.25.7 4.39 1.85M7.8 7.24C8.94 6.09 10.45 5.3 12 5.3c1.38 0 2.66.39 3.77 1.04M12 19.3c-1.74 0-3.25-.7-4.39-1.85M16.2 16.76C15.06 17.91 13.55 18.7 12 18.7c-1.38 0-2.66-.39-3.77-1.04m0-7.88c-1.12.32-2.07 1.17-2.39 2.29M21 12c-1.74 0-3.25-.7-4.39-1.85M12 5.3c-1.74 0-3.25.7-4.39 1.85M5 12c1.74 0 3.25.7 4.39 1.85M12 19.3c1.74 0 3.25-.7 4.39-1.85M15 12c0-2.21-1.79-4-4-4" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12c0 2.21-1.79 4-4 4-1.65 0-3.11-.73-4.05-1.87m8.05-2.12c1.12-.32 2.07-1.17 2.39-2.29M12 5.3c1.74 0 3.25.7 4.39 1.85M7.8 7.24C8.94 6.09 10.45 5.3 12 5.3c1.38 0 2.66.39 3.77 1.04M12 19.3c-1.74 0-3.25-.7-4.39-1.85M16.2 16.76C15.06 17.91 13.55 18.7 12 18.7c-1.38 0-2.66-.39-3.77-1.04m0-7.88c-1.12.32-2.07 1.17-2.39 2.29M21 12c-1.74 0-3.25-.7-4.39-1.85M12 5.3c-1.74 0-3.25.7-4.39 1.85M5 12c1.74 0 3.25.7 4.39 1.85M12 19.3c1.74 0 3.25-.7 4.39-1.85M15 12c0-2.21-1.79-4-4-4" />
                </svg>
              )}
            </button>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Confirm Password</label>
            <input
               type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
              <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 top-[25px] flex items-center pr-3"
            >
              {showPassword ? (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12c0 2.21-1.79 4-4 4-1.65 0-3.11-.73-4.05-1.87m8.05-2.12c1.12-.32 2.07-1.17 2.39-2.29M12 5.3c1.74 0 3.25.7 4.39 1.85M7.8 7.24C8.94 6.09 10.45 5.3 12 5.3c1.38 0 2.66.39 3.77 1.04M12 19.3c-1.74 0-3.25-.7-4.39-1.85M16.2 16.76C15.06 17.91 13.55 18.7 12 18.7c-1.38 0-2.66-.39-3.77-1.04m0-7.88c-1.12.32-2.07 1.17-2.39 2.29M21 12c-1.74 0-3.25-.7-4.39-1.85M12 5.3c-1.74 0-3.25.7-4.39 1.85M5 12c1.74 0 3.25.7 4.39 1.85M12 19.3c1.74 0 3.25-.7 4.39-1.85M15 12c0-2.21-1.79-4-4-4" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12c0 2.21-1.79 4-4 4-1.65 0-3.11-.73-4.05-1.87m8.05-2.12c1.12-.32 2.07-1.17 2.39-2.29M12 5.3c1.74 0 3.25.7 4.39 1.85M7.8 7.24C8.94 6.09 10.45 5.3 12 5.3c1.38 0 2.66.39 3.77 1.04M12 19.3c-1.74 0-3.25-.7-4.39-1.85M16.2 16.76C15.06 17.91 13.55 18.7 12 18.7c-1.38 0-2.66-.39-3.77-1.04m0-7.88c-1.12.32-2.07 1.17-2.39 2.29M21 12c-1.74 0-3.25-.7-4.39-1.85M12 5.3c-1.74 0-3.25.7-4.39 1.85M5 12c1.74 0 3.25.7 4.39 1.85M12 19.3c1.74 0 3.25-.7 4.39-1.85M15 12c0-2.21-1.79-4-4-4" />
                </svg>
              )}
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
