import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';

const buttonVariants = {
  fill: 'bg-orange-500 text-grey-50 hover:bg-orange-400 focus:bg-yellow-500 disabled:bg-gray-500',
  outlined:
    'ring-2 ring-inset font-normal ring-orange-500 text-orange-600 hover:bg-white focus:ring-yellow-500 focus:text-yellow-700',
  yellowFill: 'bg-yellow-500 text-white hover:bg-yellow-400',
  yellowOutlined: 'ring-2 ring-inset  ring-yellow-500 text-yellow-700 bg-white/50 hover:bg-white',
  text: 'underline decoration-orange-300/80 font-normal text-orange-500 hover:bg-white underline-offset-1',
  blueText: 'underline decoration-blue-400/80 font-normal text-blue-600 hover:bg-white underline-offset-1',
  blueFill: 'bg-blue-500 text-gray-50 hover:bg-blue-400',
  slateText: 'underline decoration-slate-600/80 font-normal text-slate-700 hover:text-slate-800 underline-offset-1',
};
type Variants = keyof typeof buttonVariants;
type ButtonProps = {
  label: string;
  variant?: Variants;
  trailingIcon?: ReactNode;
  leadingIcon?: ReactNode;
  showIconOnMobile?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  variant = 'fill',
  trailingIcon,
  leadingIcon,
  className,
  showIconOnMobile,
  ...props
}) => {
  return (
    <button
      className={`flex h-fit w-fit items-center justify-center gap-2 rounded-md px-2 py-2 tracking-wide transition ease-in-out hover:scale-105 focus:scale-105 disabled:cursor-not-allowed
        ${className} ${buttonVariants[variant]}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      <div className={` ${showIconOnMobile ? '' : 'hidden'} pl-1 sm:block`}>{leadingIcon}</div>
      {label}
      <div className={` ${showIconOnMobile ? '' : 'hidden'} pr-1 sm:block`}>{trailingIcon}</div>
    </button>
  );
};

export default Button;
