import React from 'react'; 


const Item = ({whychoose}) => {
    const {icon,title,text} = whychoose;
    return ( 
        <div className="special_ser_item">
            <div className="special_ser_icon"><i className={`${icon}`}></i></div>
            <h4>{title}</h4>
            <p> {text} </p>
        </div>
    );
};

export default Item;
