import React from "react";
import { Card } from "react-bootstrap";


export default function Footer() {
	return (
		<div className='footer'>
			<Card className="text-center">
				<Card.Header>Featured by :</Card.Header>
				<Card.Body>
					<Card.Text>Abdul Latief</Card.Text>
					<Card.Text>Ega Sharfina</Card.Text>
					<Card.Text>Danny</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">© 2019 Copyright: GIVE AN ANCHOR TO REFER TO OUR WEBSITE</Card.Footer>
			</Card>
		</div>
	);
}
