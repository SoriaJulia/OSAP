import Logo from 'components/SVG/Logo';
import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

const PrintHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-3 hidden w-full flex-col   print:flex">
      <div className="flex items-baseline justify-between  border-b py-3">
        <Logo className="fill-orange-600" width="100" />
        <h1 className="text-2xl text-gray-700">{title}</h1>
        <span className="text-gray-500">{new Date().toLocaleDateString()}</span>
      </div>
      <h2 className="mt-4 text-gray-500">{subtitle}</h2>
    </div>
  );
};

export default PrintHeader;
