import React, { ButtonHTMLAttributes, EventHandler, ReactNode } from 'react';
type ButtonProps = {
  label: string;
  variant: string;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  icon,
  onClick,
  type = 'button',
  ...props
}) => {
  const getVatriantClasses = (variant: string) => {
    if (variant === 'outlined') {
      return 'ring-2 ring-inset ring-orange-500 text-orange-600 hover:bg-white';
    } else {
      return 'bg-orange-500 text-grey-50 hover:bg-orange-400';
    }
  };
  return (
    <div>
      <button
        className={`w-fit rounded-full py-2 px-4 transition hover:scale-105 ${getVatriantClasses(
          variant
        )} `}
        onClick={onClick}
        type={type}
        {...props}
      >
        {label}
        {icon}
      </button>
    </div>
  );
};

export default Button;
