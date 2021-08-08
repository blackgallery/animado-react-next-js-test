import React from 'react'; 
import Map from './Map'
import Form from './Form'
import SectionTitle from "../SectionTitles/SectionTitle";
  
const ContactForm = () => {

    return (
        <section className="contact-section contact_pg_contact">
            <div className="container"> 
            
                {/* Heading */}
                <SectionTitle
                  title="Send Us Message" 
                  subTitle =" Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now. "
                />
                {/* End: Heading */}

                <div className="row">  
                    <div className="col-md-8 col-sm-12 inner-contact">
                        <Form />
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="contact_pg_address">
                            <h3>Hello there <br />got a project?</h3>
                            <div className="single_con_add">
                                <a href="#"><i className="icon-glyph-226"></i></a>
                                <p><span>Company Address :</span>
                                </p><p><span>3567 New Alaska, us</span>
                                </p>
                            </div>
                            <div className="single_con_add">
                                <a href="#"><i className="icon-glyph-334"></i></a>
                                <p><span>Email Address :</span>
                                </p><p><span>example@email .com</span>
                                </p>
                            </div>
                            <div className="single_con_add">
                                <a href="#"><i className="icon-glyph-33"></i></a>
                                <p><span>Contact Us :</span>
                                </p><p><span>+77-00-222-1111</span>
                                </p>
                            </div>
                        </div>
                    </div>
                       
                    <div className="container"> 
                    <div className="col-sm-12 col-md-12 map-container"> 
                        <Map latitude="52.908902" longitude="80.028943" />
                    </div>
                    </div>

                </div> 
            </div> 
        </section>

    );
}

export default ContactForm;