import React from "react";
 
const SectionTitle = ({ title, subTitle }) => {
  return (
 
    <div className={`base-header`}>
        <h3>{title}</h3>   
        {subTitle && (
           <p>{subTitle}</p>  
        )} 
    </div>
    
  ); 
};
 

export default SectionTitle;
