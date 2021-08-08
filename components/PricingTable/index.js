import React from 'react';
import SectionTitle from "../SectionTitles/SectionTitle";
import PricingList from  './PricingList'
import Data from '../../data/PricingTable/pricingTable'
  

const Pricing  = () => {
    return (
		<section className={`pricing-section`}  style={{backgroundImage: `url("${('../../../assets/images/bg_2.jpg')}")`}} >
        	<div className="container">
				{/* Heading */} 
                <SectionTitle
                    title="Our Special Plan" 
                    subTitle="Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now." 
                />
				{/* End: Heading */ }

				<div className="row"> 

					{
                        Data.map(pricing=>(
                            <PricingList
                                key={pricing.id} 
                                pricing={pricing} 
                            />
                        ))
                    }
	
				</div>
                {/* End: row */ }
			</div>
            {/* End: container */ }
		</section>

    );
}

export default Pricing;