import React from 'react';  
import Link from 'next/link'

const BlogItem = ({blog}) => { 
	
	const {title,thumb,id,publishDate} = blog;

    return ( 
		<div className="blog_wrp">    
			<div className="blog_img"> 
				<img src={('assets/images/' + thumb)} alt="service" /> 
			</div>
			<div className="blog_info">     
				<h4> 
					<Link href={`/blog/${id}`}> 
						<a> {title}</a>
					</Link>  
				</h4> 
				<div className="blog_date"> <span> <i className="fa fa-calendar"></i> {publishDate} </span> </div> 
				<span className="blog_read"> 
					<Link href={`/blog/${id}`}>
						<a>Read more</a> 
					</Link>  
					<i className="icon-right-open"></i> 
				</span>  
			</div> 
		</div> 
    );
};

export default BlogItem;