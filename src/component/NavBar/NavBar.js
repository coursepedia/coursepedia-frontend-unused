import React from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

export default function NavBar() {
	return (
		<Navbar bg="light" variant="light">
			<Navbar.Brand className="mr-auto" href="#home">
				Navbar
			</Navbar.Brand>
			<Nav className="d-flex justify-content-center">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">About</Nav.Link>
				<Nav.Link href="#pricing">Courses</Nav.Link>
				<Button variant="primary">Log In</Button>
				<Button variant="outline-primary">Register</Button>
			</Nav>
		</Navbar>
	);
}
