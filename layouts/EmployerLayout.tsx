// EmployerLayout.tsx

import React from 'react';
import { Sidemenu } from "@/components/side-menu";

interface EmployerLayoutProps {
  children: React.ReactNode;
}

const EmployerLayout: React.FC<EmployerLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidemenu />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default EmployerLayout;
