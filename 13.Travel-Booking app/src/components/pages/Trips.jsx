import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { trips } from "../../data/TripsData";
import { useNavigate } from "react-router-dom";

const TripsData = () => {

  const navigate = useNavigate()

  return (
    <>
      <Container className="mt-5">
        <Row>
          {trips.map((t) => (
            <Col
              className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3  g-3"
              key={t.id}
            >
              <Card
                className="shadow text-center"
                style={{
                  minHeight: "350px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={t.image}
                  alt={t.name}
                  className="rounded-2"
                  style={{
                    minHeight: "300px",
                    objectFit: "cover",
                    boxShadow:
                      " rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
                  }}
                />
                <Card.Body>
                  <Card.Title>{t.name}</Card.Title>
                  <Button variant="outline-primary" onClick={()=>navigate(`/trips/${t.id}`)} >View Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TripsData;
