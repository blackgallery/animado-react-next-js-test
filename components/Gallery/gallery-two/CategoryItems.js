import React, { Fragment } from 'react';
 
const Catitems = ({filterMenu, catItems}) => {

    return (
      <Fragment>
          {
            catItems.map((curElem, index) => {
              return <li key={index} onClick={() => filterMenu(curElem)}> {curElem} </li>
            })
          } 
      </Fragment> 
    );
};

 
export default Catitems;


