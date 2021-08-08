import React, { Fragment } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import PageHeader from '../../components/PageHeader/index'; 
import PageWrapper from "../../components/PageWrapper"; 
import SidebarBlog from "../../components/SidebarBlog";
import blogposts from '../../data/Blog/blog.json';
 

const SingleBlogPage = ({title, content, tag, publishDate, commentCount, titleTwo, blockQuote, contentSecondPart, comments,contentThirdPart, singleThumb}) => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Blog Details" 
        />   
      <PageWrapper classes="blog_container no-padding single_blog_container">

              <div className="col-lg-9 col-xs-12 blog-area">
                <div className="blog-post-list">

                  <div className="blog_wrp"> 
                    <a className="blog_img"> 
                        <img src={('/assets/images/' + singleThumb)} alt={title} />
                    </a> 
                    <div className="blog_info">
                        <div className="blog_date"> 
                            <span><i className="fa fa-comment-o"></i>  {commentCount} </span>
                            <span> <i className="fa fa-calendar"></i> {publishDate}  </span>
                            <span> <i className="fa fa-tags"></i> {tag} </span>
                        </div>
                        
                        <a>
                            <h4> {title} </h4> 
                        </a> 
              
                        <p> {content} </p> 

                        <div className="blog_quote">   
                            <h3> {titleTwo} </h3> 
                            <p> {contentSecondPart}</p>
                            {<div dangerouslySetInnerHTML={{__html: blockQuote}}/>}
                            
                            {<div dangerouslySetInnerHTML={{__html: contentThirdPart}}/>}
                        </div>

                        <div className="post_tags">
                            <h5> Tags</h5>
                            <a href="#">Laptop</a> 
                            <a href="#">Monitor</a> 
                            <a href="#">iMac</a> 
                            <a href="#">iPhone</a>  
                        </div>
                        
                        <div className="post_share footer_socil"> 
                          <ul className="list-icons link-list footer_soc">
                              <li>
                                  <a href="#"><i className="fa fa-facebook"></i></a>
                              </li>
                              <li>
                                  <a href="#"><i className="fa fa-twitter"></i></a>
                              </li>
                              <li>
                                  <a href="#"><i className="fa fa-behance"></i></a>
                              </li>
                              <li>
                                  <a href="#"><i className="fa fa-instagram"></i></a>
                              </li>
                              <li>
                                  <a href="#"><i className="fa fa-pinterest"></i></a>
                              </li>
                          </ul>
                        </div> 
                    </div> 
                  </div>  
                </div>


                <div className="post-option">
                      <div className="pull-left">
                          <a href="#" className="prev-post"><span className="arrow-icon arrow_carrot-left"></span> &nbsp;</a>
                      </div>
                      <span className="middle-icon"><a href="blog.html" className="icon_grid-3x3"></a></span>
                      <div className="pull-right">
                          <a href="#" className="next-post"> &nbsp;<span className="arrow-icon arrow_carrot-right"></span></a>
                      </div>
                  </div>

                {/* Post Comments */}
                <div className="list-comments">
                    <div className="comments-section-title">
                        <h4> 7 Comments </h4>
                    </div> 
                    <ul className="comments">
                        <li>
                            <div className="comment">
                                <div className="comment_imgg">
                                    <img src={('/assets/images/' + comments.proPic)} alt="blog" className="comment-avatar" /> 
                                </div> 
                                <div className="comment_cont_wrp">
                                    <strong className="commenter-title"><a href="#/">{comments.name}</a><span className="comment-date">{comments.date}</span></strong>
                                    <span className="comment-reply"><a href="#">Reply</a></span> 
                                    <p>{comments.text}</p>
                                </div>
                            </div> 
                            <ul>
                                <li>
                                    <div className="comment">
                                        <div className="comment_imgg">
                                            <img src={('/assets/images/' + comments.proPic)} alt="blo" className="comment-avatar" /> 
                                        </div> 
                                        <div className="comment_cont_wrp">
                                            <strong className="commenter-title"><a href="#/">{comments.name}</a><span className="comment-date">{comments.date}</span></strong>
                                            <span className="comment-reply"><a href="#">Reply</a></span> 
                                            <p>{ comments.text }</p>
                                        </div>
                                    </div> 
                                </li>
                            </ul>
                        </li>
                    </ul> 
                </div>
                 
                {/* Comment Form*/}
                <div className="contact">
                    <div className=" contact-form-warper blog-contact ">
                        <h4> Leave a reply </h4>
                        <div className="contact-warper"> 
                            <div className="contact-form">
                                <form id="contact-form" method="post" name="contactForm">
                                    <div className="row">
                                      <div className="col-lg-12 col-xs-12">
                                          <textarea className="con-field" id="Message" name="Message" placeholder="Message :"></textarea>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6 col-xs-12">
                                          <input className="con-field" id="Name" name="Name" placeholder="Name :" type="text" />
                                      </div>
                                      <div className="col-lg-6 col-xs-12">
                                          <input className="con-field" id="Email" name="Email" placeholder="Email :" type="text" />
                                      </div>
                                      <div className="col-lg-6 col-xs-12">
                                        <input className="submit-contact" name="submit" value="Post Comment" type="submit" />
                                      </div>
                                    </div>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>  
              </div>

              {/* Blog SIdebar */}

              <SidebarBlog />


      </PageWrapper>

     </LayoutOne>

    </Fragment>
  );
};

export default SingleBlogPage;


export async function getStaticProps(context) {
  const { params } = context; 
  return {
    props:  blogposts.find((item) => item.id.toString() === params.id)
  };
}

export async function getStaticPaths() {
  return {
    paths: blogposts.map((item) => ({
      params: {
        id: item.id.toString()
      },
    })),
    fallback: false,
  };
}