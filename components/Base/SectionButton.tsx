import * as React from 'react';
import { IconProps } from 'phosphor-react';
import Link from 'next/link';

type SectionButtonProps = {
  label: string;
  variant: string;
  icon: React.FC<IconProps>;
  href: string;
  passHref?: boolean;
};
const SectionButton: React.FC<SectionButtonProps> = ({ label, variant, icon: Icon, href, passHref }) => {
  const getVariantClasses = (selectedVariant: string) => {
    if (selectedVariant === 'blue') {
      return 'from-blue-200/30 to-white/50 hover:to-white';
    }
    return 'from-orange-25/70 to-yellow-50/50 hover:to-white/70 ';
  };

  const hoverEffect =
    'transition-all duration-200 ease-in-out hover:-translate-y-2  hover:border-orange-500 hover:text-orange-500 hover:shadow';

  return (
    <Link href={href} passHref={passHref}>
      <a
        {...(passHref && { target: '_blank' })}
        href={href}
        className={`${hoverEffect} ${getVariantClasses(
          variant
        )} flex h-32 w-32 shrink-0 flex-col items-center gap-2 rounded-md border-2 border-orange-600 bg-gradient-to-b p-4 text-base text-orange-600 md:h-44 md:w-48 md:text-2xl`}
      >
        <Icon className="text-4xl md:text-7xl" size="1em" weight="light" />
        {label}
      </a>
    </Link>
  );
};

export default SectionButton;
