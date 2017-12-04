import React from 'react';
import './ClickCard.css';




function ClickCard(props) {
	return (
		<div className="card" onClick={() => (
			props.reArrangeCards())}>
			<div className="img-container" onClick={() => (
				props.clickedCharacter(props.id))}>
				<img alt={props.name} src={props.image} />
			</div>
		</div>
	)
}




export default ClickCard