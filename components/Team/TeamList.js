import React from 'react'; 

const TeamList = ({team}) => {
	const {img, name, designation, facebookUrl, twitterUrl } = team;
    return (
        <div className="col-md-4 col-sm-12">
            <div className="team_wrp">    
				<div className="team_img"> 
					<img src={('assets/images/' + img)} alt="team" />
				</div>  
                <div className="team_info">   
					<h4>{name}</h4> 
					<p>{designation}</p>  
					<ul className="social list-inline">
						<li>
							<a href={ `${facebookUrl}` } target="_blank"  rel="noopener noreferrer"><i className="fa fa-facebook"/> </a>
						</li>
						<li>
							<a href={ `${twitterUrl}` } target="_blank"  rel="noopener noreferrer"><i className="fa fa-twitter"/> </a>
						</li> 
					</ul>  
                </div> 
            </div> 
        </div>
    );
};

export default TeamList;