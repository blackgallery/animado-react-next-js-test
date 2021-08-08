import React, { useState } from 'react';
import SectionTitle from "../../SectionTitles/SectionTitle";
import CategoryItems from "./CategoryItems";
import GalleryItems from "./GalleryItems";
import GalleryData from '../../../data/Gallery/gallery'


const allCatValues = [...new Set(GalleryData.map((curElem) => curElem.category )),"all"];
 
const GalleryContent  = () => {

    const [items, setItems] = useState(GalleryData);
	const [catItems, setCatItems] = useState(allCatValues);

    const filterMenu = (catList) => {
        if (catList === 'all') {
            setItems(GalleryData);
            return;
        }  
        const updateedItems = GalleryData.filter((curElem) => {
            return curElem.category === catList;
        });
        setItems(updateedItems);
    }
    
    return (
 
        <section className={`work_section_v3`} id="work">
            <div className="container">
                <div className="row">  

                    {/* Heading */}
                    <SectionTitle
                        title="Special Gallery" 
                        subTitle=" Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now. " 
                    />
                    {/* End: Heading */} 

                    {/* Category Filter */}       
                    <ul className="projects-titles"> 
                        <CategoryItems filterMenu={filterMenu} catItems={catItems} />  
                    </ul> 


                    <div className='col-md-12 col-sm-12'>
                        <div className='row projects-list'>  
                            {
                                items.slice(0,9).map((elem) => (
                                    <GalleryItems 
                                        key={elem.id} 
                                        id={elem.id} 
                                        title={elem.title} 
                                        thumb={elem.thumb} 
                                        tag={elem.tag} 
                                    /> 
                                ))
                            }  
                        </div>
                    </div>

                </div>
                {/* End: row */}
            </div>
        </section>

    )
}

 
export default GalleryContent;


