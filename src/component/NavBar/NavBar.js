import React from "react";
import { Button, Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from './books.png'

export default function NavBar() {
	return (
		<Navbar className='navbar' variant="dark" sticky="top">
			<Container>
				<Row>
					<Col>
						<Link to="/"><img src={Icon} alt=""/></Link>
					</Col>
				</Row>

				<Row className="d-flex text-center">
					<Col className="align-self-center">
						<Link  to="/">Home</Link>
					</Col>
					<Col className="align-self-center">
						<Link to="/about">About</Link>
					</Col>
					<Col className="align-self-center">
						<Link to="/course">Course's Category</Link>
					</Col>
					<Col className="align-self-center">
						<Link to="/login">
							<Button variant="primary">Log In</Button>
						</Link>
					</Col>
					<Col className="align-self-center">
						<Link to="/register">
							<Button variant="outline-primary">Register</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</Navbar>
	);
}