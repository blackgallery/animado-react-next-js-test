
import React, {createContext} from 'react';     
import Product from './Product';
import Data from '../../data/Products/products.json';
export const ProductContext = createContext();

const ProductContentWrap = () => {
 
    return( 
        
		<section className="product-section product_pg_prod">
		    <div className="container"> 
		   
                    <ProductContext.Provider value={Data}>
                        <Product />
                    </ProductContext.Provider>
		  
		    </div>
		</section>

    )

};

export default ProductContentWrap;



