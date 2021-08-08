import React, { Fragment } from "react";     
import BlogData from '../../data/Blog/blog' 
import Link from 'next/link'

const BlogContentWrap = () => {
    return (
        <Fragment>
 
            <div className="col-md-9 col-sm-12 blog-area">
                {
                    BlogData.reverse().slice(0,2).map((post, i)=>(
                        <div className="blog_wrp" key={i}>
                            <Link href={`/blog/${post.id}`}> 
                                <a className="blog_img"> 
                                    <img src={('../../assets/images/' + post.thumb)} alt={post.title} />
                                </a>
                            </Link> 
                            <div className="blog_info">
                                <div className="blog_date"> 
                                    <span><i className="fa fa-comment-o"></i>  {post.commentCount} </span>
                                    <span> <i className="fa fa-calendar"></i> {post.publishDate}  </span>
                                    <span> <i className="fa fa-tags"></i> {post.tag} </span>
                                </div>
                                <Link href={`/blog/${post.id}`}> 
                                    <a>
                                        <h4> {post.title} </h4> 
                                    </a> 
                                </Link> 
                                <p> {post.content} </p>
                                <Link href={`/blog/${post.id}`}> 
                                    <a className="more-link"> Read More </a>
                                </Link>  
                            </div> 
                        </div>
                    ))
                }

                { /* Blog Pagination */} 
                <div className="prodt_pagination">
                    <ul> 
                        <li><a href="#/" className="page_number current">01</a></li>
                        <li><a href="#/" className="page_number"> 02 </a></li>
                        <li><a href="#/" className="page_number">03</a></li>
                        <li><a href="#/" className="page_number">&gt;</a></li>
                    </ul>
                </div> 

            </div>
            { /* End: Left Side :Blog Post */}

        </Fragment>
    );
};

export default BlogContentWrap;