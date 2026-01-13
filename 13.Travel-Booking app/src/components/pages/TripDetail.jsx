import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { trips } from "../../data/TripsData";
import { Container, Row, Col, Button } from "react-bootstrap";

const TripDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Trip Data not found</h1>
            <Button onClick={() => navigate(-1)} variant="outline-primary">
              Go Back to Trips
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col lg={8}>
          <h1>{trip.name}</h1>
          <p>{trip.price}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TripDetail;
