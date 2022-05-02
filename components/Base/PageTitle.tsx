import React from 'react';

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return <h1 className="pt-6 pb-10 font-display text-4xl text-orange-600">{title}</h1>;
};

export default PageTitle;
