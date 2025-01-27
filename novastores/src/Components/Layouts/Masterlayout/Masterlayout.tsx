import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './Masterlayout.css'
import { MasterLayoutProps } from '../../../Utils/props.utils';


const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  return (
    <div className="master-layout">
      <NavBar />
      <main>
        <Container className="my-1 mt-5">{children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default MasterLayout;
