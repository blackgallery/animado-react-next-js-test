import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
import Gallery from '../components/Gallery/gallery-one'; 

const GalleryPg = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Our Gallery" 
        /> 

        <Gallery />   
 
     </LayoutOne>

    </Fragment>
  );
};

export default GalleryPg;