import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaTree,
  FaMapMarkedAlt,
} from "react-icons/fa"; // Imported new icons

const Tour = () => {
  const sections = [
    {
      id: "tourism",
      title: "Tourism Details",
      content: (
        <div>
          <h3>Exploring the USA: Popular Destinations</h3>
          <img
            src="assets/images/TourismImg/Ban.jpg"
            variant="top"
            alt="USA Travel Banner"
            className="rounded w-100 mb-3"
            height="550"
          />
          <p>
            The United States offers a wide range of destinations, making it one
            of the top travel destinations in the world. Whether you're a nature
            lover, a history buff, or someone seeking vibrant city life, the
            U.S. has it all—from bustling cities to serene national parks and
            stunning coastal areas.
          </p>
          <Container>
            <h4>Top Cities to Visit</h4>
            <p>
              Every U.S. city has something unique to offer. Here are some of
              the most popular cities to explore:
            </p>
            <Row xs={1} md={2} lg={5} className="g-4">
              {[
                {
                  img: "assets/images/TourismImg/tus1.jpg",
                  title: "New York City",
                  text: "New York City is known for its iconic landmarks such as Times Square, Central Park, and the Empire State Building. It's a place where vibrant cultures converge, offering exciting shopping, dining, and entertainment options.",
                },
                {
                  img: "assets/images/TourismImg/tus2.jpg",
                  title: "Los Angeles",
                  text: "Los Angeles is the center of the entertainment world, with famous attractions such as Hollywood Boulevard, Santa Monica beaches, and Universal Studios. Experience art, culture, and sunshine all year round.",
                },
                {
                  img: "assets/images/TourismImg/tus3.jpg",
                  title: "San Francisco",
                  text: "San Francisco is known for its picturesque Golden Gate Bridge, historical sites like Alcatraz Island, and eclectic neighborhoods such as Chinatown. A vibrant and beautiful city on the Bay.",
                },
                {
                  img: "assets/images/TourismImg/tus4.jpg",
                  title: "Chicago",
                  text: "Chicago is famous for its stunning skyline, deep-dish pizza, and renowned landmarks like Millennium Park and Willis Tower. The city boasts incredible museums, theaters, and waterfront views.",
                },
                {
                  img: "assets/images/TourismImg/tus41.jpg",
                  title: "Washington D.C.",
                  text: "Washington D.C. is home to powerful monuments, such as the Lincoln Memorial and the U.S. Capitol. Explore the cultural and historic richness of the nation's capital, including the Smithsonian museums.",
                },
                {
                  img: "assets/images/TourismImg/tus6.jpg",
                  title: "Miami",
                  text: "Miami offers a blend of beautiful beaches, vibrant nightlife, and art deco architecture. Enjoy cultural hotspots like Little Havana and Wynwood District for a taste of Latin culture.",
                },
                {
                  img: "assets/images/TourismImg/tus7.jpg",
                  title: "Las Vegas",
                  text: "Las Vegas is a dynamic city known for its casinos, extravagant entertainment, and vibrant nightlife. From the iconic Las Vegas Strip to luxurious resorts, it's a city that never sleeps.",
                },
                {
                  img: "assets/images/TourismImg/tus8.jpg",
                  title: "Orlando",
                  text: "Orlando is famous for its theme parks, including Walt Disney World and Universal Studios. Ideal for family fun, the city is packed with excitement, entertainment, and adventure.",
                },
                {
                  img: "assets/images/TourismImg/tus9.jpg",
                  title: "Boston",
                  text: "Boston is a historic city with rich cultural heritage. Visit places like the Boston Common, Harvard University, and Fenway Park, and explore the city's role in America's past.",
                },
                {
                  img: "assets/images/TourismImg/tus10.jpg",
                  title: "Austin",
                  text: "Austin, known for its lively music scene and festivals like SXSW, offers a great mix of tech innovation and southern hospitality. Explore the city’s creative neighborhoods and enjoy live performances.",
                },
              ].map((city, index) => (
                <Col key={index}>
                  <Card>
                    <Card.Img variant="top" src={city.img} />
                    <Card.Body>
                      <Card.Title>{city.title}</Card.Title>
                      <Card.Text>{city.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <h4>
            <FaMoneyBillWave className="me-2" />
            Cost of Living
          </h4>
          <p>
            While the cost of living varies depending on where you choose to
            live in the U.S., below are some general estimates to help with
            budgeting:
          </p>
          <ul>
            <li>
              <strong>Accommodation:</strong> Rent can range from $800 to $2000
              per month, depending on the location.
            </li>
            <li>
              <strong>Meals:</strong> Expect to spend $300 to $500 per month on
              groceries and dining out.
            </li>
            <li>
              <strong>Transportation:</strong> Public transport passes cost
              $100-$200 per month; renting a car costs $300-$600.
            </li>
            <li>
              <strong>Utilities:</strong> Average utility costs range from
              $150-$300 per month.
            </li>
          </ul>
          <Container>
            <h4>
              <FaTree className="me-2" />
              Natural Wonders
            </h4>
            <p>
              If you're a nature enthusiast, the U.S. features some of the most
              iconic natural wonders and beautiful national parks in the world:
            </p>
            <Row xs={1} md={2} lg={2} className="g-4">
              {[
                {
                  img: "assets/images/TourismImg/nw1.jpg",
                  title: "Grand Canyon National Park (Arizona)",
                  text: "A world-famous natural wonder offering breathtaking views and hiking opportunities.",
                  link: "https://www.nps.gov/grca/index.htm",
                },
                {
                  img: "assets/images/TourismImg/nw2.jpg",
                  title: "Yellowstone National Park (Wyoming)",
                  text: "The first national park, featuring geothermal wonders like Old Faithful.",
                  link: "https://www.nps.gov/yell/index.htm",
                },
                {
                  img: "assets/images/TourismImg/nw3.jpg",
                  title: "Niagara Falls (New York)",
                  text: "A must-visit for natural beauty. Experience boat rides and night light shows.",
                  link: "https://www.nps.gov/niag/index.htm",
                },
                {
                  img: "assets/images/TourismImg/nw4.jpg",
                  title: "Yosemite National Park (California)",
                  text: "Known for its striking granite cliffs and giant sequoias.",
                  link: "https://www.nps.gov/yose/index.htm",
                },
                {
                  img: "assets/images/TourismImg/nw5.jpg",
                  title: "Great Smoky Mountains National Park",
                  text: "Famous for mist-covered mountains and diverse plant and animal life.",
                  link: "https://www.nps.gov/grsm/index.htm",
                },
                {
                  img: "assets/images/TourismImg/nw6.jpg",
                  title: "Glacier National Park (Montana)",
                  text: "Renowned for its icy glaciers and scenic Going-to-the-Sun Road.",
                  link: "https://www.nps.gov/glac/index.htm",
                },
                {
                  img: "assets/images/TourismImg/nw7.jpg",
                  title: "Hawaii Volcanoes National Park",
                  text: "Discover volcanic landscapes and breathtaking ocean views.",
                  link: "https://www.nps.gov/havo/index.htm",
                },
                {
                  img: "assets/images/TourismImg/nw8.jpg",
                  title: "Badlands National Park",
                  text: "Noted for its layered rock formations and excellent stargazing opportunities.",
                  link: "https://www.nps.gov/badl/index.htm",
                },
                {
                  img: "assets/images/TourismImg/nw9.jpg",
                  title: "Everglades National Park",
                  text: "A subtropical wilderness home to diverse wildlife and birdwatching opportunities.",
                  link: "https://www.nps.gov/ever/index.htm",
                },
                {
                  img: "assets/images/TourismImg/nw10.jpg",
                  title: "Pacific Coast Highway (California)",
                  text: "Enjoy dramatic coastal views and charming towns along the way.",
                  link: "https://www.nps.gov/pchp/index.htm",
                },
              ].map((park, index) => (
                <Col key={index}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={park.img}
                      className="img-fluid rounded"
                      alt={park.title}
                    />
                    <Card.Body>
                      <Card.Title>{park.title}</Card.Title>
                      <Card.Text>{park.text}</Card.Text>
                      <Button
                        variant="primary"
                        href={park.link}
                        target="_blank"
                      >
                        Explore Official Website
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <Container className="my-5">
            <Row className="text-center mb-4">
              <Col>
                <h4 className="text-primary font-weight-bold">
                  <FaMapMarkedAlt className="me-2" />
                  Essential Travel Tips
                </h4>
                <p className="text-muted">
                  Follow these tips to make your trip easier and more enjoyable:
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} lg={12}>
                <Card className="shadow-sm border-light rounded">
                  <Card.Body>
                    <ListGroup variant="flush">
                      {[
                        "Travel with insurance to stay covered in case of emergencies.",
                        "Book hotels and flights early for the best deals.",
                        "Respect local customs and etiquette to have a positive experience.",
                        "Pack light, versatile clothing for convenience and comfort.",
                        "Always carry backup copies of your important travel documents.",
                        "Learn basic local phrases to improve communication.",
                        "Set a trip budget and monitor your expenses.",
                        "Stay hydrated, carry snacks, and wear comfortable shoes for sightseeing.",
                        "Keep an offline map on hand for when you're without internet access.",
                        "Always check the weather and pack accordingly.",
                      ].map((tip, index) => (
                        <ListGroup.Item key={index} className="border-0">
                          <FaCheckCircle className="text-success me-2" />
                          {tip}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Map Section */}
            <Row className="justify-content-center mt-4">
              <Col md={8} lg={6}>
                <Card className="shadow-sm border-light rounded">
                  <Card.Body className="text-center">
                    <h5>Use the map below to plan your trip</h5>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13839282.741653119!2d-115.48429120951447!3d36.391897626047765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c9e7f1ed48468b%3A0x317443eff38eab85!2sUnited%20States!5e0!3m2!1sen!2sus!4v1650624726977!5m2!1sen!2sus"
                      height="400"
                      width="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                      className="rounded"
                    ></iframe>
                    <p className="mt-3 text-muted">
                      Use this map to plan and navigate your trip.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      ),
    },
  ];

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h1>{sections[0].title}</h1>
          <div>{sections[0].content}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Tour;
