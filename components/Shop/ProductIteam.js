 
import React from 'react'; 
import Link from 'next/link'; 

const ProductContentWrap = ({product}) => {

    const {image,discountRate,name,orginalPrice,id} = product;

    return( 

        <div className="col-md-3 col-sm-12"> 
            <div className="product_wrp">
                <div className="product_img"> 
                    <img src={`/assets/images/${image}`} alt="product" />
                    <div className="on_sale">
                        <span>{discountRate}</span>
                    </div>
                </div>
                <div className="product_info">
                    
                    <Link href={`/shop/${id}`}> 
                        <a> 
                            <h4>  {name}  </h4> 
                        </a> 
                    </Link> 
                
                    <ul className="product_rating">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li> 
                        <li><i className="fa fa-star"></i></li> 
                        <li><i className="fa fa-star"></i></li> 
                        <li><i className="fa fa-star"></i></li> 
                    </ul>
                    <span className="product_price">{orginalPrice}</span>
                </div>
                <div className="project_view">
                    <a href="#/"><i className="icon-glyph-13"></i></a>
                    <a href="#/" className="project-link"><i className="icon-glyph-52"></i></a>
                </div>
            </div>
        </div>

    )

};

export default ProductContentWrap;