import React from 'react';
import SectionTitle from "../SectionTitles/SectionTitle";
import TeamList from  './TeamList'
import teamData from '../../data/Team/team'
 
  
function TeamSection({classes }) {    
    return (
		<section className={`team-section`} style={{backgroundImage: `url("${('/assets/images/bg_3.jpg')}")`}} >
        	<div className="container">
				{/* Heading */} 
                <SectionTitle
                    title="Our team Member" 
                    subTitle="Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now." 
                />
				{/* End: Heading */ }

				<div className="row"> 

					{
                        teamData.slice(0,3).map(team=>(
                            <TeamList
                                key={team.id}  
                                team={team}
                            />
                        ))
                    }
	
				</div>
			</div>
		</section>

    );
}

export default TeamSection;