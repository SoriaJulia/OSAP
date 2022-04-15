import React from 'react';
type InputTextProps = {
  label: string;
  name: string;
  placeholder: string;
  helpText?: string;
  type: string;
  error?: any;
  errorText?: string;
};
const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  placeholder,
  helpText,
  type,
  error,
  errorText,
  ...props
}) => {
  return (
    <>
      <label className="mt-2 text-left text-xl text-blue-700" htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        className=" mt-2 w-72 rounded border-2 border-grey-400 p-2 caret-blue-500 transition placeholder:text-grey-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:invalid:border-pink-700 disabled:border-grey-400 disabled:bg-grey-100"
        placeholder={placeholder}
        name={name}
        type={type}
      />
      <span className="my-1 text-left text-sm font-light">{helpText}</span>
    </>
  );
};

export default InputText;
