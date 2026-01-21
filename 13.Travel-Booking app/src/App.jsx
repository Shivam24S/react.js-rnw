import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import Layout from "./routes/Layout";
import Home from "./components/ui/Home";
import TripsData from "./components/pages/Trips";
import TripDetail from "./components/pages/TripDetail";
import Auth from "./auth/Auth";
import BookingForm from "./components/pages/BookingForm";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import ErrorElement from "./components/pages/ErrorElement";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "trips",
          element: <TripsData />,
        },
        {
          path: "trips/:id",
          element: <TripDetail />,
        },
        {
          path: "auth",
          element: <Auth />,
        },
        {
          element: <ProtectedRoutes />,
          children: [
            {
              path: "trip/:id/book",
              element: <BookingForm />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
