import React from 'react';   
import WorkProcessList from "./WorkProcessList"; 
import SectionTitle from "../SectionTitles/SectionTitle";
import Data from "../../data/WorkProcess/index.json";
 
const WorkProcess = ( ) => {

  return (
 
	<section className="process-section">
        <div className="container"> 
            {/* Start: Heading */}
            <SectionTitle 
                title="How Does We Work "  
                subTitle="Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now."  
            />
            <div className="row"> 

                {/*Start: Work Process List */} 
                {Data.map(process=>(
                    <WorkProcessList 
                        key={process.id}
                        process={process} 
                    />
                ))}
                {/*End: Work Process List*/}
      
            </div>
            {/* row */}
        </div>
        {/* container */}
    </section>

  );
};

export default WorkProcess;
