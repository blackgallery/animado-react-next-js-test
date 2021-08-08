 
import React, {createContext} from 'react';     
import Cart from './Cart';
import Data from '../../data/CartItem/cart-item.json';
export const CartContext = createContext();


const ProductContentWrap = () => {
 
    return( 
        
        <div className="shop_cart">
            <div className="container">
                <CartContext.Provider value={Data}>
                    <Cart />
                </CartContext.Provider>
		    </div>
		</div>

    )

};

export default ProductContentWrap;