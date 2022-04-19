import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal: React.FC<any> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? ReactDOM.createPortal(children, document.body) : null;
};

export default Portal;
