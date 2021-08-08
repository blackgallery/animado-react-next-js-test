import React from 'react'; 
import Slider from "react-slick";  
import Data from '../../data/Testimonials/home-one.json'
import TestimonialItems from "./TestimonialItems";
import QuoteForm from "./QuoteForm";
import SectionTitle from "../SectionTitles/SectionTitleTwo"; 

const TestimonialSec  = () => {

        var settings = {
          autoplay: false,
          autoplaySpeed: 4000,
          dots: true,
          arrows:false,
          infinite: true,
          centerMode: false, 
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1, 
        };


    return (
 
    <section className="testi-section">   
      <div className="container">   
        <div className="row">   
          <div className="col-md-6 col-sm-12">  
          <div className="quote_bg"></div>
          <div className="contact-form">  
              <h4>Request A Quote</h4>
              <p>We're here to help you mobile repair service soon going to much easier to get your iPhone fixed. Apple said early day that it</p>
              <QuoteForm />
          </div>
          </div>

          <div className="col-md-6 col-sm-12 my-auto">  
            <div className="testi_raper">  

              {/* Heading */}
                <SectionTitle 
                  subTitle="CLIENT SATISFAIT" 
                  title="What Client's Say" 
                />
              {/* End: Heading */}

              <Slider {...settings}>
                {
                  Data.map(gallery => (

                    <TestimonialItems 
                        key={gallery.id} 
                        gallery={gallery}  
                    /> 

                  ))
                }
              </Slider>  
            </div>
          </div>

        </div>
      </div>
    </section>


    )
  }

 
export default TestimonialSec;

