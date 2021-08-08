import React from 'react'; 
import Sidebar from "../Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import List from "../UI/List";
import LI from "../UI/List/Item";
import Anchor from "../UI/Anchor";  
import Blogs from "../../data/Blog/blog";
import Categories from "../../data/Sidebar/sidebar"; 
import RecentBlogPost from "../RecentBlogPost";

 
const SidebarBlog = ( ) => {
    return (
        <Sidebar classes="col-md-3 col-sm-12 widget-area">

            {/* Search Form */}
            <SidebarItem classes={'widget widget-search'}>
                {/* input-group */}
                <div className="input-group">
                    <input className="form-control" placeholder="Search" type="text" />
                    <span className="input-group-btn">
                        <button type="button"><i className="fa fa-search"></i></button>
                    </span>
                </div> 
            </SidebarItem>

            {/* Recent Posts */}
            <SidebarItem title={'Recent Posts'} classes={'widget wiget-recent-post'}> 
                {
                    Blogs.reverse().slice(0,3).map(post=>(
                        <RecentBlogPost key={post.id} id={post.id} title={post.title} publishDate={post.publishDate} thumb={post.thumb} />
                    ))
                } 
            </SidebarItem>

            {/* Post Categories */}
            <SidebarItem title={'Post Categories'} classes={'widget widget-post-categories'}>
                <List classes={'categories-type'}>
                    {
                        Categories.categories.map(category=>(
                            <LI key={category.id}><Anchor path={category.catLink}>{category.categoryName}</Anchor></LI>
                        ))
                    }
                </List>
            </SidebarItem>
 

            {/* Top Tags*/}
            <SidebarItem title={'Top Tags'} classes={'widget widget-tags'}> 
 
                {
                    Blogs.map((tags, i)=>( 
                        <a key={i} href="#/"> 
                            {tags.tag}
                        </a>
                    ))
                }

            </SidebarItem>

 
        </Sidebar>
    );
};

export default SidebarBlog;