import React, {Fragment, useContext} from 'react';    
import CartItem from './CartItem' 
import { CartContext } from './index'
 
const Cart = () => {
 
    const item = useContext(CartContext);

    return (

    <Fragment>
        <div className="row">
            <div className="col-sm-12">
                <div className="table-responsive text-center">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="shop_cart_tr">
                                <th className="text-center">Product</th>
                                <th className="text-center">Products name</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Qty</th>
                                <th className="text-center">total</th>
                                <th></th>
                            </tr>
                        </thead> 
                        <tbody> 
                            {
                                item.map(cart=>(
                                    <CartItem 
                                        key={cart.id} 
                                        {...cart}
                                    />   
                                ))
                            }
                        </tbody>  
                    </table> 
                </div>
                {/* table-responsive */}
            </div>
            {/* col-sm-12 */}
        </div>
        {/* row */}

        <div className="shop_cart_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-12">
                        <div className="discount-coupon"> 
                            <form action="#">
                                <input className="coupon" type="text" />
                            </form>
                            <a className="app-coupon" href="#">Apply Coupon</a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-5 col-sm-12 cart_update">
                        <a className="app-coupon" href="#">Update Cart</a>
                    </div> 
                </div>
                {/* end: Coupon & Update Button */}

                <div className="row">  
                    <div className="offset-lg-7 col-lg-5 offset-md-5 col-md-7 col-sm-12">
                        <div className="grand-total-area">
                            <h4>Cart Totals</h4>
                            <p className="sub-total">Subtotal<span className="amt"> $230.00</span></p>
                            <p className="delivery">delivery<span className="amt"> $10.00</span></p>
                            <p className="discount">discount<span className="amt"> $20.00</span></p>
                            <p className="grand-total">total <span className="amt">$200.00</span></p>
                            <a className="pro-checkout" href="checkout.html">Proceed To Checkout</a>
                        </div>
                        {/* end: Cart Total */}
                    </div>
                </div>
                {/* ./row */}
            </div>
            {/* ./container */}
        </div>
        {/* ./shop_cart_bottom */}

    </Fragment>

    )
}

export default Cart
