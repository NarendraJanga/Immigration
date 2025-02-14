import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const TourismServices = () => {
  const [loading, setLoading] = useState(true);

  const destinations = [
    {
      name: "USA",
      image: "assets/images/TourismServices/usa1.jpg",
      imagehover: "assets/images/TourismServices/usa2.jpg",
      description:
        "Explore iconic cities, world-class museums, and famous landmarks in the USA. Perfect for adventure seekers and history enthusiasts.",
    },
    {
      name: "UK",
      image: "assets/images/TourismServices/uk1.jpg",
      imagehover: "assets/images/TourismServices/uk2.jpg",
      description:
        "Step into the rich history, beautiful landscapes, and the vibrant culture of the UK. A destination for timeless experiences.",
    },
    {
      name: "Australia",
      image: "assets/images/TourismServices/aus1.jpg",
      imagehover: "assets/images/TourismServices/aus2.jpg",
      description:
        "Enjoy sun-kissed beaches, diverse wildlife, and thrilling adventures in Australia. A perfect blend of nature and modernity.",
    },
    {
      name: "Canada",
      image: "assets/images/TourismServices/can1.jpg",
      imagehover: "assets/images/TourismServices/can2.jpg",
      description:
        "Unwind amidst Canada's serene landscapes, bustling cities, and warm hospitality. An unforgettable journey awaits.",
    },
    {
      name: "UAE",
      image: "assets/images/TourismServices/uae1.jpg",
      imagehover: "assets/images/TourismServices/uae2.jpg",
      description:
        "Experience luxury redefined in the UAE. From magnificent skyscrapers to golden deserts, it has it all.",
    },
    {
      name: "Europe",
      image: "assets/images/TourismServices/eur1.jpg",
      imagehover: "assets/images/TourismServices/eur2.jpg",
      description:
        "Discover the charm, culture, and culinary delights of Europe. A paradise for travelers seeking variety.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4 text-primary slide-in">
        Tourism Services: India to Worldwide Destinations
      </h1>
      <Row>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                <Card className="h-100 shadow-lg border-0 rounded overflow-hidden">
                  <Skeleton style={{ height: "300px" }} />
                  <Card.Body>
                    <Skeleton count={1} />
                    <Skeleton count={1} width="80%" />
                    <Skeleton
                      variant="rect"
                      style={{ height: "40px", width: "60%" }}
                      className="mt-2"
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))
          : destinations.map((destination, index) => (
              <Col md={4} sm={6} xs={12} className="mb-4 fade-in" key={index}>
                <Card className="h-100 shadow-lg border-0 rounded overflow-hidden">
                  <HoverImageCard destination={destination} />
                  <Card.Body>
                    <Card.Title className="fw-bold text-dark">
                      {destination.name}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {destination.description}
                    </Card.Text>
                    <Link to={`/destinations/India-${destination.name}`}>
                      <Button
                        variant="primary"
                        className="mt-2 w-30 btn-gradient text-white"
                      >
                        Explore {destination.name}
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
};

const HoverImageCard = ({ destination }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card.Img
      variant="top"
      src={isHovered ? destination.imagehover : destination.image}
      alt={destination.name}
      className="card-img-top rounded-top zoom-effect"
      style={{ height: "300px", objectFit: "cover", transition: "0.3s ease" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default TourismServices;
