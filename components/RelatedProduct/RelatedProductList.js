import React from 'react';  
import Link from 'next/link'

const ProductItem = ({product}) => { 
	
	const {name,image,id,orginalPrice} = product;

    return ( 
		<div className="item">    
			<div className="product_wrp">    
				<div className="product_img"> 
					<img src={('/assets/images/' + image)} alt="product" /> 
				</div>
				<div className="product_info">     
					<h4> 
						<Link href={`/shop/${id}`}> 
							<a> {name} </a>
						</Link>  
					</h4> 
					<ul className="product_rating">
						<li><i className="icon_star"></i></li>
						<li><i className="icon_star"></i></li>
						<li><i className="icon_star"></i></li>                               
						<li><i className="icon_star"></i></li>                                
						<li><i className="icon_star-half_alt"></i></li>
					</ul>
					<span className="product_price">{orginalPrice}</span> 
				</div> 
				<div className="project_view">
					<a className="project-link" href="images/work-1.jpg"><i className="icon-glyph-13"></i></a>
					<a className="project-link" href="#"><i className="icon-glyph-52"></i></a>
				</div> 
			</div> 
		</div> 
    );
};

export default ProductItem;