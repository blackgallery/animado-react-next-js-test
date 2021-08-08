import React from 'react';
import Link from 'next/link'
import navbarData from "../../../data/Navbar/navbar";

function NavbarItem(props) {
    return(
        navbarData.map(item=>(
            <li key={item.id}
                className={item.subMenu || item.megaMenu ? 'menuItemHasChildren' : ''}
            >
                <Link href={item.link}>{item.title}</Link>
                {(() => {
                    if(item.subMenu){
                        return(
                            <ul className="subMenu">
                                {
                                    item.subMenu.map((subItem,index)=>{
                                        return <li key={index}><Link href={subItem.link}>{subItem.title}</Link></li>
                                    })
                                }
                            </ul>
                        )
                    }
                })()}
            </li>
        ))
    )
}

export default NavbarItem