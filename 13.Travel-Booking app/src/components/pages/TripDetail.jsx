import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { trips } from "../../data/TripsData";

import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Badge,
  Card,
  ListGroup,
} from "react-bootstrap";

const TripDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) {
    return (
      <>
        <Container>
          <Row>
            <Col className="text-center">
              <h4 className="mt-5">Trip Data not found</h4>
              <Button className="mt-2" onClick={() => navigate(-1)}>
                go back to trips
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-3">
            <Image
              src={trip.image}
              alt={trip.name}
              className="img-fluid rounded-5 shadow-lg"
              style={{ maxHeight: "420px", width: "100%", objectFit: "cover" }}
            ></Image>
          </Col>
        </Row>

        <Row>
          <Col className="mt-3">
            <h1>{trip.name}</h1>
            <h5>{trip.destination}</h5>

            <div className="d-flex  gap-2">
              <Badge bg="primary">
                <span style={{ fontSize: "15px" }}>{trip.duration}</span>
              </Badge>
              <Badge bg="secondary">
                <span style={{ fontSize: "15px" }}>{trip.rating}</span>
              </Badge>
              <Badge bg="success">
                <span style={{ fontSize: "15px" }}>₹ {trip.price}</span>
              </Badge>
              <Badge bg="info">
                <span style={{ fontSize: "15px" }}> {trip.difficulty}</span>
              </Badge>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col lg={8}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>
                  <h6>Overview</h6>
                </Card.Title>
                <Card.Text>{trip.overview}</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>
                  <h6>Highlights</h6>
                </Card.Title>
                <Card.Text>
                  <ListGroup variant="flush" >
                    {trip.highlights.map((t, index) => (
                      <ListGroup.Item key={index}>{t}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TripDetail;
