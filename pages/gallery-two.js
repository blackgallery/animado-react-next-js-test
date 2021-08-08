import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
import Gallery from '../components/Gallery/gallery-two'; 

const GalleryPg = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Our Gallery" 
        /> 

        <Gallery  classes="workpg_v2"/>   
 
     </LayoutOne>

    </Fragment>
  );
};

export default GalleryPg;