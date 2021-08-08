import React from 'react';   
import Link from 'next/link'

const GalleryItems = ({title, thumb, tag, id}) => { 
	return ( 
        <div className="col-md-4 col-sm-12">
            <div className="single-project-item"
            style={{backgroundImage: `url(${('../../assets/images/' + thumb)})`}} >
                <div className="project-hover">
                    <div className="project_cnt">
                        <Link href={`/gallery/${id}`}> 
                            <a className="project-link"><i className="icon-glyph-26"></i></a>
                        </Link>
                        <h6>
                            <Link href={`/gallery/${id}`}> 
                                <a>  {title} </a>
                            </Link>
                        </h6>
                        <span><a href="single-gallery.html">category : {tag}</a></span>
                    </div>
                </div>
            </div>
        </div>  
	);
};

export default GalleryItems;
