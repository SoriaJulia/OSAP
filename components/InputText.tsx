import { InputHTMLAttributes } from 'react';
import * as React from 'react';

type InputTextProps = {
  label: string;
  helpText?: string;
  error?: any;
  errorText?: string;
} & InputHTMLAttributes<HTMLInputElement>;
const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  helpText,
  error,
  errorText,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-left text-xl text-blue-700" htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        className=" mt-2 w-full rounded-sm border-2 border-grey-400 p-2 caret-blue-500 transition placeholder:text-grey-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:invalid:border-pink-700 disabled:border-grey-400 disabled:bg-grey-100 md:w-72"
      />
      <span className="my-1 text-left text-sm font-light">{helpText}</span>
    </div>
  );
};

export default InputText;
