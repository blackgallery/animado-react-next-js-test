import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
import ContactForm from '../components/ContactForm';  

const Contact = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Contact Us" 
        /> 

        <ContactForm />   
 
     </LayoutOne>

    </Fragment>
  );
};

export default Contact;