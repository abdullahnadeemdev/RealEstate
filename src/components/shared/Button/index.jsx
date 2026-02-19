import React from "react";

const Button = ({ className, variant, children, ...props }) => {
  return (
    <button
      className={`mt-5 bg-main px-4.5 py-3 rounded-lg text-xs sm:text-sm lg:text-base hover:text-text-prim text-textLight font-semibold  cursor-pointer hover:bg-secondary hover:scale-110 duration-200 ${variant === "outlined" ? "bg-transparent border-3 border-main!" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
