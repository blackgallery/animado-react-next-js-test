import React from 'react';  
 
const CartItem  = ({image,name,total,price}) => {
    return ( 
 
		<tr> 
			<td className="prod">
				<a href="#/"><img src={('/assets/images/' + image)} alt="" />
				</a>
			</td>
			<td className="ptitle"><a href="#"> {name}</a></td>
			<td className="unit"><span>{price}</span> </td>
			<td className="qty">
				<input type="number" placeholder="1"/>
			</td>
			<td className="unit"><span>{total}</span></td>
			<td><a href="#"><i className="fa fa-trash"></i></a></td>
		</tr>   
              
    );
}

export default CartItem;