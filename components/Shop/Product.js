 
import React, {Fragment, useContext} from 'react';    
import ProductIteam from  './ProductIteam'
import {ProductContext}  from './index';

const ProductContentWrap = () => {

	const item = useContext(ProductContext);

    return( 

		    <Fragment>

                <div className="row">
                    <div className="col-md-12 product_show">
                        <p className="product_count">Showing 1–8 of 12 results</p>
                        <form className="product_ordering">
                            <select name="orderby" className="orderby">
                                <option value="menu_order">Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by newness</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </form>
                    </div>
                </div>

		        <div className="row">

                    {
                        item.map(product=>(
                            <ProductIteam
                                key={product.id} 
                                product={product} 
                            />
                        ))
                    }

                    
                    <div className="prodt_pagination">
                        <ul>
                            <li><a href="" className="page_number current">1</a></li>
                            <li><a href="" className="page_number">2</a></li>
                            <li><a href="" className="page_number">→</a></li>
                        </ul>
                    </div>
		        </div>
		   
		</Fragment>

    )

};

export default ProductContentWrap;