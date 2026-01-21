import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { trips } from "../../data/TripsData";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";

const BookingForm = () => {
  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const selectedTrip = trips.find((t) => t.id == Number(id));

  if (!selectedTrip) {
    return <h4 className="text-center mt-5">Trip Data not found</h4>;
  }

  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
    phone: "",
    date: "",
  });

  const handleChange = async (identifier, e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form data", formData);

    alert("form data submitted");
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={5}>
            <Card className="text-center rounded-4 mt-5 shadow">
              <Card.Img
                variant="top"
                className="rounded-4"
                src={selectedTrip.image}
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{selectedTrip.name}</Card.Title>
                <Card.Text>{selectedTrip.duration}</Card.Text>
                <h5>₹{selectedTrip.price}</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={7}>
            <Card className="mt-5">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Label>Traveler Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Travel Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e)}
                    />
                  </Form.Group>

                  <div className="d-flex gap-3 mt-4">
                    <Button>Back to Trips</Button>
                    <Button variant="primary" type="submit">
                      Confirm Booking
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookingForm;
