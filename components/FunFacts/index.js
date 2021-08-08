import React from 'react';
import FunfactItem from "./FunFactItem";
import Funfacts from '../../data/Funfact/funfact' 

 
const Funfact  = ({classes}) => {
    return ( 
        <div className={`funfact-section ${classes}`} style={{backgroundImage: `url("${('/assets/images/video_bg.jpg')}")`}} >
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <div className="funfact_title">
                            <p>Watch Our Computer Repair Services Video</p>
                            <h2>We're here to help you manage your problem regular emails that will.</h2>
                        </div>
                        <div className="funfact_wapr row">

                            {
                                Funfacts.map(funfact=>(
                                    <FunfactItem 
                                    key={funfact.id} 
                                    counterNumber={funfact.counterNumber} 
                                    counterText={funfact.counterText} 
                                    counterIcon={funfact.counterIcon} 
                                    mathSymbol={funfact.mathSymbol} 
                                    />
                                ))
                            }
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Funfact;