import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
import Services from '../components/Services' 

const Service = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Our Services" 
        /> 
        <Services />  
 
     </LayoutOne>

    </Fragment>
  );
};

export default Service;