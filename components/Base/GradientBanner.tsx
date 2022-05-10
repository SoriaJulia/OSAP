import React from 'react';

const gradientVariants = {
  blue: 'bg-gradient-to-t from-blue-300/50 to-blue-100/80 p-2 text-blue-600 ',
};
type Variants = keyof typeof gradientVariants;
type GradientBannerProps = {
  title: string;
  subtitle: string;
  variant: Variants;
};
const GradientBanner: React.FC<GradientBannerProps> = ({ title, subtitle, variant }) => {
  return (
    <div
      className={`flex h-32 w-screen flex-col justify-center gap-3 md:h-44 xl:h-56 xl:gap-6 ${gradientVariants[variant]}`}
    >
      <p className="text-xl md:text-3xl lg:text-5xl">{title}</p>
      <span className="text-lg md:text-xl lg:text-3xl">{subtitle}</span>
    </div>
  );
};

export default GradientBanner;
