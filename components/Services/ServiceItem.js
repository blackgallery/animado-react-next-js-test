import React from 'react';  
import Link from 'next/link'

function ServiceItem({service}) {

    const {thumb,title,icon,id,shortDesc} = service;

    return ( 
   
        <div className="service-item"> 
            <div className="img_serv">    
                <img src={('../../../assets/images/' + thumb)} alt="service" />
            </div>
            <div className="service_text"> 
                <div className="serv_icon"><i className={`${icon}`}></i></div>
                <h4>  
                    <Link href={`/service/${id}`}> 
                        <a> {title}</a>
                    </Link> 
                </h4> 
                <p>{shortDesc}</p>
                <Link href={`/service/${id}`}> 
                    <a className="serv_link"> Read More <span> → </span> </a>
                </Link>  
            </div> 
        </div>   

    );
}

export default ServiceItem;

 