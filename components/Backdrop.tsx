import React, { forwardRef } from 'react';

const Backdrop: React.FC<any> = forwardRef<
  HTMLDivElement,
  { onClickHandler: () => void }
>(({ children, onClickHandler }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-700/70 "
      onClick={onClickHandler}
    />
  );
});

export default Backdrop;
