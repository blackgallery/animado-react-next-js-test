import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
import About from '../components/About'
import Team from '../components/Team/index';

const AboutPg = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="About Us" 
        /> 
        <About />  
        <Team /> 
 
     </LayoutOne>

    </Fragment>
  );
};

export default AboutPg;