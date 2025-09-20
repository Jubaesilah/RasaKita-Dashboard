import React from "react";

const Textfield = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  className = "",
  error = false,
  id,
  name,
  ...props
}) => {
  const baseClasses =
    "w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";

  const stateClasses = error
    ? "border-red-300 focus:ring-red-500 focus:border-red-500"
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500";

  const textfieldClasses = `${baseClasses} ${stateClasses} ${className}`;

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={textfieldClasses}
      {...props}
    />
  );
};

export default Textfield;
