import React, { ReactNode, AnchorHTMLAttributes } from 'react';

const variants = {
  blue: 'text-blue-600 decoration-blue-400/20 hover:text-blue-400 hover:decoration-blue-300/80',
  lightBlue: 'text-blue-200 decoration-blue-200/20 hover:text-blue-100 hover:decoration-blue-100',
  black: 'decoration-blue-800/10 hover:text-blue-800',
};
type Variants = keyof typeof variants;
type ContactLinkType = {
  href: string;
  label: string;
  icon?: ReactNode;
  variant: Variants;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const ContactLink: React.FC<ContactLinkType> = ({ href, label, icon, variant, ...props }) => {
  return (
    <a
      className={`flex flex-nowrap gap-2 underline underline-offset-2 transition ${variants[variant]}`}
      href={href}
      {...props}
    >
      {icon}
      {label}
    </a>
  );
};

export default ContactLink;
