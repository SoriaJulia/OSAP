import { useEffect, useRef } from 'react';

import lottie from 'lottie-web';

interface LottieProps {
  animationData: any;
  className: string;
}

export const Lottie = ({ animationData, className }: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData,
        container: element.current,
      });
    }
    return () => {
      lottieInstance.current?.destroy();
    };
  }, [animationData]);

  return <div className={className} ref={element} />;
};
