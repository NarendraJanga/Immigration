import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import Flag from "react-world-flags";
import {
  FaPassport,
  FaReceipt,
  FaCamera,
  FaRegFileAlt,
  FaClipboardCheck,
  FaUniversity,
  FaBriefcase,
  FaInfoCircle,
  FaFileAlt,
  FaHandshake,
  FaHome,
  FaLightbulb,
  FaSmile,
  FaUserCheck,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaWallet,
  FaPenSquare,
  FaUndo,
  FaCalendarCheck,
  FaUsers,
  FaRegCheckCircle,
  FaExclamationCircle,
  FaLock,
  FaCopy,
  FaPlaneDeparture,
  FaTree,
  FaMoneyBillWave,
  FaMapMarkedAlt,
} from "react-icons/fa";

const IndiaToUSA = () => {
  const [sections] = useState([
    {
      id: "visa",
      title: "Visa Information",
      content: (
        <div>
          <Card
            style={{
              backgroundImage: "url(../assets/images/Visa-img/ban1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "white",
                textShadow: "3px 3px 5px rgba(0, 0, 0, 0.6)",
                fontSize: "3rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Visa Information
            </h1>
          </Card>

          <Card
            style={{
              backgroundColor: "#f9f9f9",
              padding: "40px 20px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              marginTop: "-70px",
              textAlign: "center",
            }}
          >
            <Container style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#333",
                }}
              >
                Understanding Visa Types
              </h1>
              <h5
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  fontWeight: "400",
                  color: "#555",
                  marginBottom: "20px",
                  letterSpacing: "1px",
                }}
              >
                A visa is required for most travelers entering the country. It’s
                essential to choose the right visa category depending on the
                purpose of your visit. Each visa type has its own rules,
                conditions, and required documentation.
              </h5>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#0066cc",
                  borderColor: "#005bb5",
                  padding: "12px 24px",
                  fontSize: "1rem",
                  borderRadius: "25px",
                  fontWeight: "600",
                }}
              >
                Learn More
              </Button>
            </Container>
          </Card>

          <div className="container mt-1">
            <h4 className="text-center mb-2">Common Visa Categories</h4>
            <Row>
              {["B1/B2", "F1", "H1B", "L1", "K1", "J1", "O1", "TN"].map(
                (visa, index) => (
                  <Col md={4} lg={3} className="mb-3" key={index}>
                    <Card className="visa-card">
                      <Card.Img
                        variant="top"
                        src={`../assets/images/Visa-img/c${index + 1}.jpg`}
                        alt={visa}
                      />
                      <Card.Body>
                        <Card.Title>{visa} (Visa Type)</Card.Title>
                        <Card.Text>
                          {visa === "B1/B2"
                            ? "For short-term business trips or tourism."
                            : visa === "F1"
                            ? "For students admitted to U.S. schools."
                            : visa === "H1B"
                            ? "For skilled workers in specialized occupations."
                            : visa === "L1"
                            ? "For intra-company transfer employees."
                            : visa === "K1"
                            ? "For foreign fiancés of U.S. citizens."
                            : visa === "J1"
                            ? "For exchange visitors, including students and professionals."
                            : visa === "O1"
                            ? "For individuals with extraordinary abilities."
                            : "For NAFTA professionals from Canada and Mexico."}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </div>

          {/* Visa Document Information */}
          <div className="visa-documents-container container my-5 p-4 border border-light rounded shadow-lg">
            <h4 className="text-center text-primary mb-4">
              Documents Required for Your Visa Interview
            </h4>
            <p className="text-muted mb-4">
              Depending on your visa category, document requirements may vary.
              Below is a comprehensive list of documents that most applicants
              need to present during their interview:
            </p>
            <ul className="list-group">
              <li className="list-group-item d-flex align-items-center">
                <FaPassport
                  className="text-success me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                A valid passport with at least two blank pages. Ensure your
                passport is valid for at least six months beyond your intended
                stay.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaClipboardCheck
                  className="text-primary me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                The DS-160 confirmation page with a barcode for tracking your
                application.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaRegFileAlt
                  className="text-warning me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                Your visa appointment confirmation letter as proof that your
                appointment is confirmed.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaReceipt
                  className="text-info me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                The payment receipt for the visa processing fees.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaCamera
                  className="text-danger me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                Passport-sized photographs that meet the visa photo
                requirements.
              </li>
              <li className="list-group-item">
                <FaRegFileAlt
                  className="text-dark me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                Supporting documents based on your visa type:
                <ul className="list-group list-group-flush mt-2 ms-4">
                  <li className="list-group-item d-flex align-items-center">
                    <FaBriefcase
                      className="text-success me-3"
                      style={{ fontSize: "1.3rem" }}
                    />
                    For B1/B2: Invitation letters, itinerary, business meeting
                    schedules, etc.
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <FaUniversity
                      className="text-primary me-3"
                      style={{ fontSize: "1.3rem" }}
                    />
                    For F1: Form I-20, evidence of financial support, academic
                    transcripts, etc.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Interview Tips */}
          <h4 className="mb-4 text-center">
            Tips for a Successful Visa Interview
          </h4>
          <Row>
            {[
              {
                title: "Be Honest",
                icon: FaUserCheck,
                color: "text-primary",
                text: "Provide truthful and accurate information.",
              },
              {
                title: "Stay Confident",
                icon: FaSmile,
                color: "text-success",
                text: "Be calm, clear, and to the point.",
              },
              {
                title: "Strong Ties to Home Country",
                icon: FaHome,
                color: "text-warning",
                text: "Prepare documents to prove your ties.",
              },
              {
                title: "Be Prepared",
                icon: FaLightbulb,
                color: "text-danger",
                text: "Know trip details such as purpose and financial arrangements.",
              },
              {
                title: "Be Polite",
                icon: FaHandshake,
                color: "text-info",
                text: "Respectful behavior makes a good impression.",
              },
              {
                title: "Bring Complete Documentation",
                icon: FaFileAlt,
                color: "text-secondary",
                text: "Ensure all documents are organized and complete.",
              },
            ].map(({ title, icon: Icon, color, text }, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <Card className="text-center">
                  <Card.Body>
                    <Icon size={30} className={`mb-3 ${color}`} />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Visa Interview Outcome */}
          <div className="container my-5">
            <h2 className="text-center mb-4">Visa Interview Information</h2>
            <h4>After Your Visa Interview</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <FaCheckCircle className="text-success me-2" />
                If approved, your visa will be printed and affixed to your
                passport. The embassy or consulate will inform you when and how
                to collect it.
              </li>
              <li className="list-group-item">
                <FaClock className="text-warning me-2" />
                Be patient if additional documents are requested, or there's a
                delay.
              </li>
              <li className="list-group-item">
                <FaTimesCircle className="text-danger me-2" />
                If denied, you will receive an explanation, with common reasons
                including financial failure or insufficient documentation.
              </li>
            </ul>

            <h4 className="mt-4">Common Reasons for Visa Denials</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <FaHome className="text-danger me-2" />
                Lack of strong ties to your home country, such as employment or
                family.
              </li>
              <li className="list-group-item">
                <FaWallet className="text-danger me-2" />
                Inadequate financial proof.
              </li>
              <li className="list-group-item">
                <FaPenSquare className="text-danger me-2" />
                False or incorrect information.
              </li>
              <li className="list-group-item">
                <FaUndo className="text-danger me-2" />
                History of overstaying on a prior visa.
              </li>
              <li className="list-group-item">
                <FaFileAlt className="text-danger me-2" />
                Not meeting the requirements for your specific visa category.
              </li>
            </ul>

            <h4 className="mt-4">Tips for Avoiding Visa Denials</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <FaFileAlt className="text-success me-2" />
                Ensure documents are original and meet embassy guidelines.
              </li>
              <li className="list-group-item">
                <FaFileAlt className="text-success me-2" />
                Provide honest, complete information in your interview.
              </li>
              <li className="list-group-item">
                <FaCalendarCheck className="text-success me-2" />
                Show a well-planned itinerary and sufficient funding.
              </li>
              <li className="list-group-item">
                <FaUsers className="text-success me-2" />
                Demonstrate ties to your home country to show intent to return.
              </li>
            </ul>
          </div>

          <div className="container my-5">
            <div
              className="alert alert-info d-flex align-items-center"
              role="alert"
            >
              <FaInfoCircle className="me-3" size={24} />
              <div>
                <strong>Need more help?</strong> Visit{" "}
                <a
                  href="https://www.ustraveldocs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-bold"
                >
                  Travel Docs
                </a>{" "}
                for further instructions and assistance with the visa process.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "tourism",
      title: "Tourism Details",
      content: (
        <div>
          <h3>Exploring the USA: Popular Destinations</h3>
          <img
            src="../assets/images/TourismImg/Ban.jpg"
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
                  img: "../assets/images/TourismImg/tus1.jpg",
                  title: "New York City",
                  text: "New York City is known for its iconic landmarks such as Times Square, Central Park, and the Empire State Building. It's a place where vibrant cultures converge, offering exciting shopping, dining, and entertainment options.",
                },
                {
                  img: "../assets/images/TourismImg/tus2.jpg",
                  title: "Los Angeles",
                  text: "Los Angeles is the center of the entertainment world, with famous attractions such as Hollywood Boulevard, Santa Monica beaches, and Universal Studios. Experience art, culture, and sunshine all year round.",
                },
                {
                  img: "../assets/images/TourismImg/tus3.jpg",
                  title: "San Francisco",
                  text: "San Francisco is known for its picturesque Golden Gate Bridge, historical sites like Alcatraz Island, and eclectic neighborhoods such as Chinatown. A vibrant and beautiful city on the Bay.",
                },
                {
                  img: "../assets/images/TourismImg/tus4.jpg",
                  title: "Chicago",
                  text: "Chicago is famous for its stunning skyline, deep-dish pizza, and renowned landmarks like Millennium Park and Willis Tower. The city boasts incredible museums, theaters, and waterfront views.",
                },
                {
                  img: "../assets/images/TourismImg/tus41.jpg",
                  title: "Washington D.C.",
                  text: "Washington D.C. is home to powerful monuments, such as the Lincoln Memorial and the U.S. Capitol. Explore the cultural and historic richness of the nation's capital, including the Smithsonian museums.",
                },
                {
                  img: "../assets/images/TourismImg/tus6.jpg",
                  title: "Miami",
                  text: "Miami offers a blend of beautiful beaches, vibrant nightlife, and art deco architecture. Enjoy cultural hotspots like Little Havana and Wynwood District for a taste of Latin culture.",
                },
                {
                  img: "../assets/images/TourismImg/tus7.jpg",
                  title: "Las Vegas",
                  text: "Las Vegas is a dynamic city known for its casinos, extravagant entertainment, and vibrant nightlife. From the iconic Las Vegas Strip to luxurious resorts, it's a city that never sleeps.",
                },
                {
                  img: "../assets/images/TourismImg/tus8.jpg",
                  title: "Orlando",
                  text: "Orlando is famous for its theme parks, including Walt Disney World and Universal Studios. Ideal for family fun, the city is packed with excitement, entertainment, and adventure.",
                },
                {
                  img: "../assets/images/TourismImg/tus9.jpg",
                  title: "Boston",
                  text: "Boston is a historic city with rich cultural heritage. Visit places like the Boston Common, Harvard University, and Fenway Park, and explore the city's role in America's past.",
                },
                {
                  img: "../assets/images/TourismImg/tus10.jpg",
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
                  img: "../assets/images/TourismImg/nw1.jpg",
                  title: "Grand Canyon National Park (Arizona)",
                  text: "A world-famous natural wonder offering breathtaking views and hiking opportunities.",
                  link: "https://www.nps.gov/grca/index.htm",
                },
                {
                  img: "../assets/images/TourismImg/nw2.jpg",
                  title: "Yellowstone National Park (Wyoming)",
                  text: "The first national park, featuring geothermal wonders like Old Faithful.",
                  link: "https://www.nps.gov/yell/index.htm",
                },
                {
                  img: "../assets/images/TourismImg/nw3.jpg",
                  title: "Niagara Falls (New York)",
                  text: "A must-visit for natural beauty. Experience boat rides and night light shows.",
                  link: "https://www.nps.gov/niag/index.htm",
                },
                {
                  img: "../assets/images/TourismImg/nw4.jpg",
                  title: "Yosemite National Park (California)",
                  text: "Known for its striking granite cliffs and giant sequoias.",
                  link: "https://www.nps.gov/yose/index.htm",
                },
                {
                  img: "../assets/images/TourismImg/nw5.jpg",
                  title: "Great Smoky Mountains National Park",
                  text: "Famous for mist-covered mountains and diverse plant and animal life.",
                  link: "https://www.nps.gov/grsm/index.htm",
                },
                {
                  img: "../assets/images/TourismImg/nw6.jpg",
                  title: "Glacier National Park (Montana)",
                  text: "Renowned for its icy glaciers and scenic Going-to-the-Sun Road.",
                  link: "https://www.nps.gov/glac/index.htm",
                },
                {
                  img: "../assets/images/TourismImg/nw7.jpg",
                  title: "Hawaii Volcanoes National Park",
                  text: "Discover volcanic landscapes and breathtaking ocean views.",
                  link: "https://www.nps.gov/havo/index.htm",
                },
                {
                  img: "../assets/images/TourismImg/nw8.jpg",
                  title: "Badlands National Park",
                  text: "Noted for its layered rock formations and excellent stargazing opportunities.",
                  link: "https://www.nps.gov/badl/index.htm",
                },
                {
                  img: "../assets/images/TourismImg/nw9.jpg",
                  title: "Everglades National Park",
                  text: "A subtropical wilderness home to diverse wildlife and birdwatching opportunities.",
                  link: "https://www.nps.gov/ever/index.htm",
                },
                {
                  img: "../assets/images/TourismImg/nw10.jpg",
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
              <Col md={8} lg={12}>
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
  ]);

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h1>{sections[0].title}</h1>
          <div>{sections[0].content}</div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h1>{sections[1].title}</h1>
          <div>{sections[1].content}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default IndiaToUSA;