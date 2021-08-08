import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
 

const Service = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Checkout" 
        /> 
   <section className="checkout_section">
        <div className="container">
            <div className="row">
                <div id="content" className="col-lg-6 col-sm-12">
                    <form name="contactform" method="post" className="shopform">
                        <div className="custom-title base-header base-header-left">
                            <h3>Billing details</h3>
                        </div> 
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <label>First Name *</label>
                                <input type="text" name="name" id="name" className="form-control" />
                            </div>

                            <div className="col-lg-6 col-sm-12">
                                <label>Last Name *</label>
                                <input type="text" name="name" id="name1" className="form-control" />
                            </div> 
                            <div className="col-lg-12 col-sm-12">
                                <label>Address *</label>
                                <input type="text" name="name" id="name3" className="form-control" />
                                <label>Address Line 2</label>
                                <input type="text" name="name" id="name4" className="form-control" />
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <label>Town / City *</label>
                                <input type="text" name="name" id="name5" className="form-control" />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <label>County *</label>
                                <input type="text" name="name" id="name6" className="form-control" />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <label>Zip Code *</label>
                                <input type="text" name="name" id="name7" className="form-control" />
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <label>Email *</label>
                                <input type="text" name="name" id="name8" className="form-control" />
                                <label>Phone Number *</label>
                                <input type="text" name="name" id="name9" className="form-control" />
                            </div>

                            <div className="col-lg-12 col-sm-12">
                                <label>Other Notes</label>
                                <textarea rows="5" className="form-control"  placeholder="Add extra notes..."></textarea>
                            </div> 
                        </div>
                        {/* end row */}
                    </form>
                </div>
                {/*   end content  */}
                <div className="col-lg-6 col-sm-12">
                    <div className="payment_mth">
                        <div className="custom-title base-header base-header-left">
                            <h3>Payment method </h3>
                        </div> 
                        <form id="payment" className="clearfix">
                            <label className="checkbox payment-method inline">
                                <input type="checkbox" id="customCheck1" value="option1" /> Direct Bank Transfer 
                            </label>
                            <label className="checkbox payment-method inline">
                                <input type="checkbox" id="customCheck2" value="option2" /> Cheque Payment
                            </label>
                            <label className="checkbox payment-method inline">
                                <input type="checkbox" id="customCheck4" value="option2" /> PayPal Payment
                            </label>
                            <label className="checkbox payment-method inline">
                                <input type="checkbox" id="customCheck3" value="option3" /> Google Checkout
                            </label> 
                        </form>
                    </div>
                    <div className="custom-title base-header base-header-left">
                        <h3>Your order</h3>
                    </div> 
                    <div className="coupon-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12"> 
                                  {/* ACCORDION START */}
                                    <div className="grand-total-area">
                                        <h4>Cart Totals</h4>
                                        <p className="sub-total">Subtotal<span className="amt"> $230.00</span></p>
                                        <p className="delivery">delivery<span className="amt"> $10.00</span></p>
                                        <p className="discount">discount<span className="amt"> $20.00</span></p>
                                        <p className="grand-total">total <span className="amt">$200.00</span></p>
                                        <a className="pro-checkout" href="#">Place An Order</a>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end row */}
        </div>
        {/* end container  */}
    </section>
 
     </LayoutOne>

    </Fragment>
  );
};

export default Service;