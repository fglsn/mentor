import * as React from 'react';
import './Card.css';
import qr from './qr-code.png';

type Props = {
	children: JSX.Element | string;
};

const Heading = ({ children }: Props) => <h1>{children}</h1>;
const Text = ({ children }: Props) => <p>{children}</p>;

const Card = () => {
	return (
		<div className="Card-container">
			<div className="Card-image-wrapper">
				<img className="Card-image" src={qr} alt="Qr-code" />
			</div>
			<div className="Card-content">
				<Heading>
					Improve your front-end skills by building projects
				</Heading>
				<Text>
					Scan the QR code to visit Frontend Mentor and take
					your coding skills to the next level
				</Text>
			</div>
		</div>
	);
};

export default Card;
