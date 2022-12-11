import React, { ReactComponentElement, ReactNode } from 'react';
import Sidebar from './Sidebar';
import { useEffect } from 'react';
import oscilate from './canvas';

interface Props {
  children?: ReactComponentElement<any> | ReactNode;
}
function Layout({ children }: Props) {
  useEffect(() => {
    oscilate();
  }, []);
  return (
    <div className="flex relative">
      <canvas
        className="absolute left-0 z-[-1] top-0 inline-block"
        id="canvas"
        width="414"
        height="896"
      ></canvas>
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
