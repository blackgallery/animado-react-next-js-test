import React from 'react';    

const GalleryItems = ({gallery}) => { 

    const {quote, author, authorThumb, designation} = gallery;
    
	return ( 
        <div className="item">
            <div className="testi_wrp"> 
                <div className="testi_info">  
                    <p> {quote} </p>  
                </div> 
                <div className="testi_img"> 
                    <img src={`assets/images/${authorThumb}`} alt="author" />
                    <h4>{author} <span> {designation}</span></h4>
                </div> 
            </div>
      </div>
	);
};

export default GalleryItems;
