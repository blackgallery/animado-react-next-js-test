import React, { Fragment } from "react";   
import Header from '../components/Header/Header'
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import Head from 'next/head';
   
 
const LayoutOne = (props ) => {
  return (
    <Fragment>

      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>

      <div className="layoutOne"> 
        <Header />
        <Navbar />
        {props.children}
        <Footer />
      </div>
 
    </Fragment>
  );
};
 

export default LayoutOne;
