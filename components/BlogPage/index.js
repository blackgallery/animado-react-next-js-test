import React, { Fragment } from "react";   
import PageWrapper from "../PageWrapper"; 
import BlogContent from "./BlogContent";
import SidebarBlog from "../SidebarBlog/index";

const blogDetails = ( ) => {

	return (
	  <Fragment>
  
			<PageWrapper classes="blog_container blog_page_tw">
 
				<BlogContent />

				<SidebarBlog />

			</PageWrapper>

	  </Fragment>
	);
  };
  
  export default blogDetails;



