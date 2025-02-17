import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<h1>header1</h1>
			<Link to="/add">Añadir</Link>
			<Link to="/items">ListaItems</Link>
		</div>
	);
};

export default Header
