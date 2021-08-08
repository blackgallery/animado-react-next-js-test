import React, {useState} from 'react';   
import AboutList from "./AboutList"; 
import SectionTitle from "../SectionTitles/SectionTitleTwo";
import AboutData from "../../data/About/about.json";
import ModalVideo from "react-modal-video";

const AboutContent = ( ) => {

const [modalStatus, isOpen] = useState(false);

  return (
 
	<section className="about-section" id="about" >
        <div className="container"> 
            <div className="row"> 

                <div className="col-lg-6 col-sm-12">
                    <div className="about_img" > 
                        { /*  About Left Image  */}
                        <img src="/assets/images/about.jpg" alt="about" /> 

                        {/* about_video  */} 
                        <div className="about_video"> 
                            <ModalVideo
                                channel="youtube"
                                isOpen={modalStatus}
                                videoId="BDYUV7tx_pM"
                                onClose={() => isOpen(false)}
                            />
                            <a onClick={() => isOpen(true)} className="play-video" href="#/">
                                <i className="icon-glyph-229"></i>Watch our intro video
                            </a> 
                        </div>
                    </div>
                </div> 

                <div className="col-lg-6 col-sm-12 about_why_choose">
                    <div className="about_item_tb">
                        <div className="about_item_tbcell"> 

                            {/* Start: Heading */} 
                            <SectionTitle   
                                subTitle="WELCOME TO FIZXILA"   
                                title="Fizxila - We're Here To Help You Repair Service"  
                            /> 
 
                            {/*Start:   About List */} 
                            {AboutData.map(about=>(
                                <AboutList 
                                    key={about.id} 
                                    about={about}  
                                />
                            ))}
                            {/*End:  About List*/}
 
                        </div>
                    </div>
                </div>

            </div>
            {/* row */}
        </div>
        {/* container */}
    </section>

  );
};

export default AboutContent;
