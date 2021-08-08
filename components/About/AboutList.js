import React from 'react'; 


const AboutItem = ({about}) => {
    const {icon,title,text} = about;
    return ( 
        <div className="about_item">
            <div className="abt_icon"><i className={`${icon}`}></i></div>
            <div className="about_item_text">
                <h4>{title}</h4>
                <p> {text} </p>
            </div>
        </div>
    );
};

export default AboutItem;
