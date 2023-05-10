import * as React from 'react';
import './Card.css';
import qr from './qr-code.png';

function Card({ children }: any) {
	return (
		<div className="Card-container">
			<div className='Card-image-wrapper'>
				<img className="Card-image" src={qr} alt="Qr-code" />
			</div>
			{children}
		</div>
	);
}

export default Card;
