import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import Layout from "./routes/Layout";
import Home from "./components/ui/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },{
          path:"trips",
          // element:
        }
      ],
    },
  ]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <RouterProvider router={router}></RouterProvider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
