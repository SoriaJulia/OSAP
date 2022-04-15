import React, { forwardRef } from 'react';

const Backdrop: React.FC<any> = forwardRef<
  HTMLDivElement,
  { onClickHandler: () => void; show: boolean }
>(({ children, onClickHandler, show }, ref) => {
  return (
    <div
      id="backdrop"
      ref={ref}
      className={`fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-700/70 ${
        show ? 'fixed' : 'hidden'
      }`}
      onClick={onClickHandler}
    />
  );
});

export default Backdrop;
