import React from 'react';   
import Link from 'next/link'

const GalleryItems = ({gallery}) => { 

    const {title, thumb, id} = gallery;
    
	return ( 
        <div className="col-md-12">
            <div className="project-item">
                <div className="project_slide_img"> 
                    <img src={`assets/images/${thumb}`} alt="product" />
                </div>
                <div className="project_text"> 
                    <Link href={`/gallery/${id}`}> 
                        <h4> {title} </h4>
                    </Link>
                    <Link href="/single-shop">
                        <a className="project_link">
                            View details
                        </a>
                    </Link>
                </div>
                <div className="project_view">
                    <Link href={`/gallery/${id}`}> 
                        <a className="project-link">  <i className="icon-glyph-26"></i> </a>
                    </Link> 
                    <a className="project-link" href="/"><i className="icon-glyph-52"></i></a>
                </div>
            </div>
      </div>
	);
};

export default GalleryItems;
