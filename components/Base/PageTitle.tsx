import { Receipt } from 'phosphor-react';
import React, { ReactNode } from 'react';

const PageTitle: React.FC<{ title: string; icon?: ReactNode }> = ({ title, icon }) => {
  return (
    <h1 className="flex items-end gap-2 pt-6 pb-10 font-display text-4xl text-orange-600">
      {icon}
      {title}
    </h1>
  );
};

export default PageTitle;
