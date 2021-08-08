import React from 'react'; 
import Link from 'next/link'

const RecentBlog = ({title,thumb,publishDate,id}) => {

    const shortTitle = title
    const shortTitle2 = shortTitle.slice(0,15)

    return (
        <div className="recent-post-box">
            <div className="recnt_pst_imge"> 
                <img src={('/assets/images/' + thumb)} alt={title} />
            </div>
            <div className="recent-title">
                <span><i className="fa fa-calendar"></i> {publishDate} </span>
                <Link href={`/blog/${id}`}> 
                    <a>  {shortTitle2}...</a>
                </Link>  
            </div>
        </div>
    );
};

export default RecentBlog;