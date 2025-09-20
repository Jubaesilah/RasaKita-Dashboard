import React from 'react';
import Label from './Label';
import Textfield from './Textfield';

const Input = ({ 
  label,
  htmlFor,
  type = 'text',
  placeholder = '',
  className = '',
  required = false,
  id,
  name,
  value,
  onChange,

}) => {
  const inputId = id || htmlFor || name;
  const inputName = name || htmlFor;

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <Label 
          htmlFor={inputId}
          required={required}
        >
          {label}
        </Label>
      )}
      
      <Textfield
        type={type}
        id={inputId}
        name={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        

    </div>
  );
};

export default Input;
