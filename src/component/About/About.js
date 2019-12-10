import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import LearningImage from "./learning_img.png";

export default function About() {
	return (
		<div className="about">
			<Container>
				<Row>
					<Col>
						<img src={LearningImage} alt="" />
					</Col>
					<Col>
						<h5>About us</h5>
						<h2>Learning with Love and Laughter</h2>
						<p>Fifth saying upon divide divide rule for deep their female all hath brind Days and beast greater grass signs abundantly have greater also days years under brought moveth.</p>
						<ul>
							<li>
								<span class="ti-pencil-alt"></span>Him lights given i heaven second yielding seas gathered wear
							</li>
							<li>
								<span class="ti-ruler-pencil"></span>Fly female them whales fly them day deep given night.
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
