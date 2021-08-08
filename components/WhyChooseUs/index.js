import React, {useState} from 'react';   
import ChooseUsList from "./ChooseUsList"; 
import SectionTitle from "../SectionTitles/SectionTitleTwo";
import Data from "../../data/WhyChooseUs/why-choose.json"; 

const AboutContent = ( ) => {
 

  return (
 
	<section className="whychose-section" style={{backgroundImage: `url("${('/assets/images/video_bg.jpg')}")`}} >
        <div className="container"> 
            <div className="row"> 
  
                <div className="col-lg-7 col-sm-12 my-auto">
                    <div className="whychose_wrp"> 

                            {/* Start: Heading */} 
                            <SectionTitle   
                                subTitle="WHAT WE DO"   
                                title="Why Choose Us"  
                            /> 
 
                            {/*Start:   About List */} 
                            {Data.map(whychoose=>(
                                <ChooseUsList 
                                    key={whychoose.id} 
                                    whychoose={whychoose}  
                                />
                            ))}
                            {/*End:  About List*/}
  
                    </div>
                </div>

                <div className="col-lg-5 col-sm-12">
                    { /* Image */}
                    <div className="whychose_bg" style={{backgroundImage: `url("${('/assets/images/why_chose.jpg')}")`}} > </div>
                </div> 

            </div>
            {/* row */}
        </div>
        {/* container */}
    </section>

  );
};

export default AboutContent;
