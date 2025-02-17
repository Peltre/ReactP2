import React from 'react'
import Button from "./Button"

const Item = ({item, ondelete}) => {
	return (
		<div>
			<ol>
			<li>{item.name}</li>
			<li>{item.price}</li>
			<li><Button name = "eliminar" 
				click={() => ondelete(item.id)}
			/></li>
			</ol>
		</div>
	)
}

export default Item;
