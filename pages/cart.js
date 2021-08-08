import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
import Cart from '../components/Cart' 

const Service = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Cart Page" 
        /> 
        <Cart />  
 
     </LayoutOne>

    </Fragment>
  );
};

export default Service;