import React from 'react';

const Button = ({
  children,
  type = 'button',
  variant = '',
  onClick = ()=>{},
  className = '',

}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';


  const buttonClasses = `${baseClasses} ${variant} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}

    >
      {children}
    </button>
  );
};

export default Button;
