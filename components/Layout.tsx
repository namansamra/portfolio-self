import React, { ReactComponentElement, ReactNode } from 'react';
import Sidebar from './Sidebar';

interface Props {
  children?: ReactComponentElement<any> | ReactNode;
}
function Layout({ children }: Props) {
  return (
    <div className="flex relative w-[100vw] h-[100vh] overflow-x-hidden overflow-y-scroll">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
