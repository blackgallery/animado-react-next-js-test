import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index';  
import Blog from "../components/Blog"; 

const BlogPg = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Our Blog" 
        />  

        <Blog />
   
     </LayoutOne>

    </Fragment>
  );
};

export default BlogPg;