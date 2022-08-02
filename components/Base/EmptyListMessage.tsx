import { Info } from 'phosphor-react';
import React from 'react';

const EmptyListMessage = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={` ${className} mb-3 mt-2 flex grow items-center justify-center gap-1 text-xl text-teal-700`}>
      <Info size={24} weight="fill" />
      {text}
    </div>
  );
};

export default EmptyListMessage;
