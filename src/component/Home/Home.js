import React from "react";
import { Button, Container, Col } from "react-bootstrap";
import banner from "./banner_img.png";

export default function Home() {
	return (
		<Container className="homepage d-flex">
			<img src={banner} alt="" style={{ height: "90%", width: "50%" }} />
			<Col className="align-self-center">
				<h5>Every child yearns to learn</h5>
				<h1>Making Your Childs World Better</h1>
				<p>Replenish seasons may male hath fruit beast were seas saw you arrie said man beast whales his void unto last session for bite. Set have great you'll male grass yielding yielding man</p>
				<Button variant="success">View Course</Button>
				<br />
				<br />
				<Button variant="warning">Log In</Button>
			</Col>
		</Container>
	);
}
