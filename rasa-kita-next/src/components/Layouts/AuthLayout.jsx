import React from 'react';

const AuthLayout = ({
  children,
  title = "Authentication",
  subtitle = "",
  className = ""
}) => {
  return (
    <div className={`min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-md w-full space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-600 text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Section */}
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
          {children}
        </div>

        {/* Footer Section */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2024 RasaKita. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
