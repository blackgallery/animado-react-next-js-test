import React from "react";
 
const SectionTitleTwo = ({ title, subTitle }) => {
  return (
 
    <div className={`base-header base-header-left`}>
        <small>{subTitle}</small>  
        <h3>{title}</h3>   
    </div>
    
  ); 
};
 

export default SectionTitleTwo;
