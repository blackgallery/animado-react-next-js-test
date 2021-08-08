import React from 'react';
import SlickSlider from '../UI/Carousel/slick'
import SectionTitle from "../SectionTitles/SectionTitle";
import BlogList from  './BlogList'
import blogData from '../../data/Blog/blog'
  
  
const Blog = ({classes}) => {

    const settings = {
        dots: false,
        arrows:false,
        margin:0,
        infinite: true, 
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 2,
          // Responsive breakpoints
          responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              } 
 
            ]
    };


    return (
		<section className={`blog-section`}> 
        <div className="container">
				{/* Heading */} 
				<SectionTitle 
					title="Articles & Tips" 
					subTitle=" Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now." 
				/>
				{/* End: Heading */ }

				<div className="row"> 
          <div className="col"> 
              <SlickSlider settings={settings}>
                  {
                      blogData.map(blog => (
                          <div key={blog.id}>
                              <BlogList 
                              key={blog.id} 
                              blog={blog}  
                              />
                          </div> 
                      ))
                  }
              </SlickSlider>
          </div>  
				</div> 
			</div>
		</section>

    );
}

export default Blog;