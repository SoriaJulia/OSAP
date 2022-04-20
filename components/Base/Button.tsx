import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';

const buttonVariants = {
  fill: 'bg-orange-500 text-grey-50 hover:bg-orange-400',
  outlined: 'ring-2 ring-inset ring-orange-500 text-orange-600 hover:bg-white',
  yellowFill: 'bg-yellow-500 font-semibold text-white hover:bg-yellow-400',
  yellowOutlined:
    'ring-2 ring-inset font-semibold ring-yellow-500 text-yellow-700 bg-white/50 hover:bg-white',
};
type Variants = keyof typeof buttonVariants;
type ButtonProps = {
  label: string;
  variant?: Variants;
  trailingIcon?: ReactNode;
  leadingIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  variant = 'fill',
  trailingIcon,
  leadingIcon,
  ...props
}) => {
  return (
    <button
      className={`${buttonVariants[variant]} 
        flex w-fit items-center justify-center gap-2 rounded-md px-2 py-2 font-semibold tracking-wide transition hover:scale-105`}
      onClick={onClick}
      type={type}
      {...props}
    >
      <div className="hidden sm:block">{leadingIcon}</div>
      {label}
      <div className="hidden sm:block">{trailingIcon}</div>
    </button>
  );
};

export default Button;
