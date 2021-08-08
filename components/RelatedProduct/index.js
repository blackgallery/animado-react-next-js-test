import React from 'react';
import SlickSlider from '../UI/Carousel/slick'
import SectionTitle from "../SectionTitles/SectionTitle";
import ProductList from  './RelatedProductList'
import Data from '../../data/RelatedProduct/related-product.json'
  
  
const RelatedProduct = () => {

    const settings = {
        dots: false,
        arrows:false,
        margin:0,
        infinite: true, 
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
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
		<section className={`related_product_section`}> 
      <div className="container">
				{/* Heading */} 
				<SectionTitle 
					title="Related Products" 
					subTitle=" Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now." 
				/>
				{/* End: Heading */ }

				<div className="row"> 
          <div className="col"> 
              <SlickSlider settings={settings}>
                  {
                      Data.map((product, i) => (
                          <div key={i}>
                              <ProductList 
                                key={product.id} 
                                product={product}  
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

export default RelatedProduct;