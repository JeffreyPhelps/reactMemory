import React from 'react';




function Navbar() {
	return(
	<div class="navbar-fixed">
		<nav>
			<div class="nav-wrapper container">
				<a href='#modal1' className='left'>Instructions</a>
				<a href="/" className='brand-logo center'>Memory Game</a>
				<ul className='right'>
					<li style={{paddingRight: "20px"}}>Score: </li>
					<li style={{paddingLeft: "20px"}}>Top Score: </li>
				</ul>
			</div>
		</nav>
	</div>
	)
}



export default Navbar;