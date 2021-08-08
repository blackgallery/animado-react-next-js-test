import React from 'react';  
import Link from 'next/link';
import List from "../UI/List";
import LI from "../UI/List/Item" 

const PricingItem = ({pricing}) => {

	const {planName,currencyType,planPrice,planFeatures,buttonLink,subscribePlan} = pricing;

    return (

		<div className="col-md-4 col-sm-12"> 
			{/* Start: pricing-box */}
			<div className="pricing-box">
				<div className="pricing_heading"> 
					<h4> {planName}</h4>
					<h2>{planPrice}{currencyType}<span>/{subscribePlan}</span> </h2>
				</div> 
				<List classes="price-list">
					{
						planFeatures.map((feature,indx)=>(
							<LI key={indx}>{feature}</LI>
						))
					}
				</List>  
				<Link href={`${buttonLink}`}> 
					<a className="more-link"> order now </a>  
				</Link>  
			</div>
			{/* End: pricing-box */}
		</div>

    );
};

export default PricingItem;