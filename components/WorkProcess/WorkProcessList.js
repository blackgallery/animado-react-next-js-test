import React from 'react'; 


const ProcessItem = ({process}) => {

    const {img,title,text,count} = process;

    return (
        <div className="col-md-3 col-sm-12">  
            <div className="process-item">  
                <div className="img_process">
                    <img src={('/assets/images/' + img)}  alt="process" />  
                    <span>{count}</span>
                </div> 
                <div className="process_text">
                    <h4>{title}</h4> 
                    <p>{text}</p>  
                </div> 
            </div> 
        </div> 
    );
};

export default ProcessItem;
