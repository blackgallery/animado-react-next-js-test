import React from 'react'; 
import ServicesData from '../../data/Services/service'  
import ServiceItem from "./ServiceItem";
import SectionTitle from "../SectionTitles/SectionTitle";

const Service = () => {  
 
    return (

        <section className="service-section">
            {/* Start: Animation Bounce Icon */} 
            <div className="animate_icon">
                <div className="animate_item animate_item1 bounce_animate">
                    <img src="/assets/images/animate_icon1.png" alt="service" />
                </div>
                <div className="animate_item animate_item2 bounce_animate">
                    <img src="/assets/images/animate_icon2.png" alt="service" />
                </div>
                <div className="animate_item animate_item3 bounce_animate">
                    <img src="/assets/images/animate_icon3.png" alt="service" />
                </div>
                <div className="animate_item animate_item4 bounce_animate">
                    <img src="/assets/images/animate_icon4.png" alt="service" />
                </div>
            </div>
            {/* End: Animation Bounce Icon */} 
            
            <div className="container"> 

                {/* Heading */}
                <SectionTitle
                    title="Service We Offers" 
                    subTitle=" Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now. "  
                />
                {/* End: Heading */} 

                <div className="row">  
                    {
                        ServicesData.slice(0, 4).map(service => (
                            <div className="col-md-6 col-sm-12" key={service.id}>
                                <ServiceItem 
                                    key={service.id} 
                                    service={service}   
                                />
                            </div>  
                        ))
                    }  
                </div> 
                {/* End: row */} 
            </div> 
            {/* End: container */} 
        </section>    
        );
    }
;

export default Service;