import React, { ReactComponentElement, ReactNode } from 'react';
import Sidebar from './Sidebar';

interface Props {
  children?: ReactComponentElement<any> | ReactNode;
}
function Layout({ children }: Props) {
  return (
    <div className="flex relative">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
