import React from 'react'
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Course() {
    return (
        <div className='course d-flex'>
            <Container className='text-center align-self-center'>
                <Row>
                    <Col>ADULT</Col>
                    <Col>CHILDREN</Col>
                </Row>
            </Container>
        </div>
    )
}
