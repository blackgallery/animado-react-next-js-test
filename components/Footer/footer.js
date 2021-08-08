import React, { useState, useEffect } from "react"; 
import Link from 'next/link'
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";

const Footer = () => { 
    return(
    <footer className="footer-section">
        <div className="container">
            <div className="row"> 
                {/*  Start:About  */}
                <div className="col-lg-3 col-md-6 col-sm-12">  
                    <Widget>
                    <img src="../../assets/images/footer_logo.png" alt="" />  
                    <div className="footer_p">
                        <p className="footer_para">
                            Loren ipsum dolor conse ctetur at adipis cing elit sed do eiu smod of tempor inci didunt know youlab a et dolore magna aliqua
                        </p> 
                    </div> 

                    <div className="footer_socil">
                        <ul className="list-icons link-list footer_soc">
                            <li> <a href="//facebook.com"><i className="fa fa-facebook"></i></a> </li>
                            <li> <a href="//twitter.com"><i className="fa fa-twitter"></i></a> </li>
                            <li> <a href="//instagram.com"><i className="fa fa-instagram"></i></a> </li>
                            <li> <a href="//pinterest.com"><i className="fa fa-pinterest"></i></a> </li>
                            <li> <a href="//behance.com"><i className="fa fa-behance"></i></a> </li>
                        </ul>
                    </div> 
                    </Widget> 
                </div> 
                {/*  End:About  */}

                {/*  Start:Quick Link  */} 
                <div className="col-lg-3 col-md-6 col-sm-12 quick_lnk"> 
                    <Widget title="Quick Link"> 
                        <List classes="list-icons link-list footer_soc">
                            <LI>
                                <Link href="/about">
                                    <a> Help and Support </a>
                                </Link>
                            </LI>
                            <LI>
                                <Link href="/services"> 
                                    <a> Return & Cancellation </a>
                                </Link>
                            </LI>
                            <LI>
                                <Link href="/about">
                                    <a> Online Product Service </a>
                                </Link>
                            </LI>                             
                            <LI>
                                <Link href="/about">
                                    <a> Delevery Schedule </a>
                                </Link>
                            </LI> 
                            <LI>
                                <Link href="/about">
                                    <a> Online Special service </a>
                                </Link>
                            </LI> 
                        </List>
                    </Widget> 
                </div> 
                {/*  End:Quick Link  */}
 
                {/*  Start:Latest post   */}
                <div className="col-lg-3 col-md-6 col-sm-12"> 
                    <Widget title="Latest Articles">
                        <List classes="footer_recent_blog">
                            <LI>  
                                <img className="img-responsive" src="/assets/images/blog1.jpg" alt="" />
                                <span className="post_cont">
                                    <span className="post-date">
                                        <i className="fa fa-calendar"></i>March 14, 2019
                                    </span>
                                    <a href="blog.html">
                                        <span>Hacker request for wire to </span>
                                    </a>
                                </span>
                            </LI>
                            <LI>  
                                <img className="img-responsive" src="/assets/images/blog2.jpg" alt="" />
                                <span className="post_cont">
                                    <span className="post-date">
                                        <i className="fa fa-calendar"></i>March 14, 2019
                                    </span>
                                    <a href="blog.html">
                                        <span>Hacker request for wire to </span>
                                    </a>
                                </span>
                            </LI>
                        </List>
                    </Widget> 
                </div> 
                {/*  End:Latest post  */}
                
                <a className="scrollup" href="#"><span className="icon-glyph-203"></span></a>

                {/*  Start:Newsletter  */} 
                <div className="col-lg-3 col-md-6 col-sm-12"> 
                    <Widget title="Newsletter">
                        {/*  Start:Subscribe  */}
                        <div className="news_letter_wrp">
                            <p>
                               Subscribe our newsletter to get more update &amp;  join to Fizxila</p>
                            <input className="email_field" name="email" id="email_field" type="text" placeholder="Email Address" />
                            <input type="submit" value="Subscribe" className="submit-contact" />
                        </div>
                    </Widget> 
                </div> 
                {/*  End:Start Subscribe  */}   
            </div> 
        </div> 

        {/*  Start:Subfooter  */}
        <div className="subfooter"> 
            <p>{new Date().getFullYear()} &copy; Copyright  <Link href="/">Fizxila</Link>. All Rights Reserved.</p> 
        </div> 
        {/* End:Subfooter  */}

    </footer> 

    )
 
}

 
export default Footer;