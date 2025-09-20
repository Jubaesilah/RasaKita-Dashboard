'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../Elements/Button';
import Input from '../Elements/Input';

const FormLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Redirecting to dashboard...');
      router.push('/dashboard');
      console.log('router.push called');
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email Address"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          variant="bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up here
            </a>
          </p>
        </div>
    </form>
  );
};

export default FormLogin;
