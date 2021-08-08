import React from 'react';
import NavbarItem from './NavbarItem' 
import MobileMenu from "../../mobile-menu/MobileMenu";
import MobileBtn from "../../mobile-menu/MobileBtn";
import Link from 'next/link'

function Navbar(props) {

    const triggerSearch = () => {
        const searchToggle = document.querySelector(".search_icon_inr");
        searchToggle.classList.toggle("active");
    };
 
    return ( 
        <div className="navigation">
            <div className="container"> 
                <div className="row">
                    <div className="logo col-md-2 col-sm-12">
                    
                        {/* Logo */} 
                        <Link href="/"> 
                            <a> 
                                <img src="../../../assets/images/logo.png" alt="" />
                            </a> 
                        </Link> 
                    </div>
                    {/* Mobile Menu */}

                    <MobileBtn /> 

                    <MobileMenu />

                    {/* End:  Mobile Menu */}

                    
                    {/* Start:  NAVIGATION  */}
    
                    <div className="col-md-8 col-sm-12">
                        <div id="navigation">
                            <ul>
                                <NavbarItem />
                            </ul>
                        </div>
                    </div>

                    {/* End: NAVIGATION  */}

                    {/* Start: Cart  */}
                    <div className="header_cart">
                        <ul>
                            <li className="header_search">  
                                <span onClick={() => triggerSearch()} className="cart-toggler search_icon">
                                    <i className="icon-glyph-16"></i>
                                </span> 
                                <div className="search_icon_inr">
                                    <form action="#" method="POST">
                                        <div>
                                            <input placeholder="Search" type="text" />
                                            <button className="btn-search" type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="header_cart_icon">
                                <Link href="/cart">
                                    <a>
                                        <i className="icon-glyph-13"></i>
                                        <span className="number_cart">0</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* End: Cart  */}
 
                </div>
            </div>
        </div> 

    );
}

export default Navbar;