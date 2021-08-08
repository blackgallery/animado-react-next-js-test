import React, { Fragment } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import PageHeader from '../../components/PageHeader/index'; 
import PageWrapper from "../../components/PageWrapper";  
import ServiceData from '../../data/Services/service.json';
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";  
import Link from 'next/link';

const SingleServicePage = ({title, singleThumb, descriptionTwo, titleTwo}) => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title={title}
        />   
        <PageWrapper classes="single_service">  
        
          <Sidebar classes={'col-md-4 col-sm-12 single_service_right'}>
            {/*  Category */}
            <SidebarItem classes="single_service_cat">
                <List>
                    {
                        ServiceData.map(serviceItem=>(
                            <LI key={serviceItem.id}>
                                <Link href={`/service/${serviceItem.id}`}>
                                    {serviceItem.title}
                                </Link>
                            </LI>
                        ))
                    }
                </List> 
            </SidebarItem>

            {/*  Start:Contact */}
            <SidebarItem classes="service_contact"> 
              <h4>Contact </h4>
              <div className="serv_contact_wrp">
                <div className="single-contact-info">
                    <i className="fa fa-phone"></i>
                    <p>+122 (345) 345 72</p>
                </div> 
                <div className="single-contact-info">
                    <i className="fa fa-envelope"></i>
                    <p>info-revita@acb.com</p>
                </div> 
                <div className="single-contact-info">
                    <i className="fa fa-globe"></i>
                    <p>#27, East Madison Ave, <br /> Melbourne, Australia</p>
                </div> 
              </div> 
            </SidebarItem>

            {/*  Download  Brochur */}
            <SidebarItem classes="download_brochur">   
                <a href="#"><span className="fa fa-file-word-o"></span>Company presentation</a>          
            </SidebarItem>        

          </Sidebar>

          {/* Start: col-md-8 col-sm-12 */}
          <div className="col-md-8 col-sm-12"> 
            <div className="single_service_left"> 
              <img src={('/assets/images/' + singleThumb)} alt="service" className="sng_service_img"/>
              <h4>{titleTwo}</h4> 
              {<div dangerouslySetInnerHTML={{__html: descriptionTwo}}/>}
            </div>

            {/* Start: Why Choose This Service */}
            <div className="row single_service_left_botom">     
              <div className="col-sm-12 single_service_why">     
                  <h4>Why Choose This Service</h4>
              </div>   
              <div className="col-md-6 col-sm-12"> 
                  <div className="sing_service_item">
                      <div className="serv_icon">
                          <i className="icon-glyph-252"></i>
                      </div>
                      <h4>Professional Team</h4>
                      <p>Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you </p>
                  </div> 
              </div>
              <div className="col-md-6 col-sm-12"> 
                  <div className="sing_service_item">
                      <div className="serv_icon">
                          <i className="icon-glyph-117"></i>
                      </div>
                      <h4>Certified Engineers</h4>
                      <p>Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you </p>
                  </div> 
              </div> 
            </div>
          </div> 
          {/* End: col-md-8 col-sm-12 */}

        </PageWrapper>
 
      </LayoutOne>

    </Fragment>
  );
};

export default SingleServicePage;


export async function getStaticProps(context) {
  const { params } = context; 
  return {
    props:  ServiceData.find((item) => item.id.toString() === params.id)
  };
}

export async function getStaticPaths() {
  return {
    paths: ServiceData.map((item) => ({
      params: {
        id: item.id.toString()
      },
    })),
    fallback: false,
  };
}