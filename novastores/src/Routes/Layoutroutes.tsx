import React from 'react';
import { Outlet } from 'react-router-dom';
import MasterLayout from '../Components/Layouts/Masterlayout/Masterlayout';

const LayoutRoutes: React.FC = () => {
  return (
    <MasterLayout>
      <Outlet />
    </MasterLayout>
  );
};

export default LayoutRoutes;
