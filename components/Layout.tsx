import React, { ReactComponentElement, ReactNode, useState } from 'react';
import Sidebar from './Sidebar';

import Loading from './Loading';
import { useMainContext } from '../utils/context';
interface Props {
  children?: ReactComponentElement<any> | ReactNode;
}
function Layout({ children }: Props) {
  const { showLoader } = useMainContext();
  return (
    <>
      <div className="flex relative w-[100vw] h-[100vh] overflow-x-hidden overflow-y-scroll bg-background">
        <Sidebar />
        {children}
      </div>
      <Loading />
    </>
  );
}

export default Layout;
