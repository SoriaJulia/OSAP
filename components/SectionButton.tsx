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
const SectionButton: React.FC<SectionButtonProps> = ({
  label,
  variant,
  icon: Icon,
  href,
  passHref,
}) => {
  const getVariantClasses = (selectedVariant: string) => {
    if (selectedVariant === 'blue') {
      return 'from-blue-200/30 to-white/50 hover:to-white';
    }
    return 'from-orange-50/40 to-yellow-100/40 hover:to-yellow-100/80';
  };

  const hoverEffect =
    'transition-all duration-200 ease-in-out hover:-translate-y-2 hover:border-orange-500 hover:text-orange-500 hover:shadow';

  return (
    <Link href={href} passHref={passHref}>
      <a
        {...(passHref && { target: '_blank' })}
        href={href}
        className={`${hoverEffect} ${getVariantClasses(
          variant
        )} flex h-40 w-44 shrink-0 flex-col items-center gap-2 rounded border-2 border-orange-600 bg-gradient-to-b p-4 text-xl text-orange-600 md:h-44 md:w-48`}
      >
        <Icon size={72} weight="light" />
        {label}
      </a>
    </Link>
  );
};

export default SectionButton;
