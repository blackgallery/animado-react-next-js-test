import React from 'react'; 
import Slider from "react-slick"; 
import Link from 'next/link';
import Data from '../../../data/Gallery/gallery'
import GalleryItems from "./GalleryItems";
import SectionTitle from "../../SectionTitles/SectionTitleTwo"; 

const GalleryContent  = () => {

        var settings = {
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
          arrows:false,
          infinite: true,
          centerMode: true,
          centerPadding: '200px',
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
		      responsive: [
		        {
		          breakpoint: 1199,
		          settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '80px',
                    arrows: false,
                    dots: false, 
		          }
		        },
		        {
		          breakpoint: 991,
		          settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '40px',
                    centerMode: false,
                    arrows: false,
                    dots: false
		          }
		        },
		        {
		          breakpoint: 767,
		          settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1, 
                    centerMode: false,
                    arrows: false,
                    dots: false
		          }
		        },
		        {
		          breakpoint: 580,
		          settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: false
		          }
		        },

		      ]
        };


    return (
 
    <section className="project-section">   
        <div className="container-fluid">   
          <div className="container">  
            {/* Heading */}
            <SectionTitle 
                subTitle="OUR LATEST WORK" 
                title="Special Gallery" 
            />
            {/* End: Heading */}
          </div>

          <Slider {...settings}>
            {
              Data.map(gallery => (

                <GalleryItems 
                    key={gallery.id} 
                    gallery={gallery}  
                /> 

              ))
            }
          </Slider> 

          <div className="project_btn text-center">
              <Link href="/gallery"> 
                  <a className="more-link"> View More </a>
              </Link>
          </div> 
          {/* End: View More Button */}

        </div>
    </section>


    )
  }

 
export default GalleryContent;

