import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
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

const IndiaToAustralia = () => {
  const [sections] = useState([
    {
      id: "visa",
      title: "Australia Visa Details",
      content: (
        <div>
          <Card
            fluid
            style={{
              backgroundImage: "url(../assets/images/Visa-img/ban4.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundPositionY: "20%",
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
              Australia Visa Information
            </h1>
          </Card>
          <Card
            fluid
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
                Understanding Australia Visa Types
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
                A visa is required for most travelers entering Australia. It’s essential to choose the right visa category depending on the purpose of your visit. Each visa type has its own set of rules, conditions, and required documentation.
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
              {[
                "Visitor",
                "Student",
                "Work",
                "Family",
                "Investor",
                "482 Temporary Work",
                "186 Employer Nomination",
                "482 Skilled Worker",
              ].map((visa, index) => (
                <Col md={4} lg={3} className="mb-3" key={index}>
                  <Card className="visa-card">
                    <Card.Img
                      variant="top"
                      src={`../assets/images/Visa-img/f${index + 1}.jpg`}
                      alt={visa}
                    />
                    <Card.Body>
                      <Card.Title>{visa} Visa</Card.Title>
                      <Card.Text>
                        {visa === "Visitor"
                          ? "For short visits for tourism or family stays."
                          : visa === "Student"
                          ? "For students accepted into Australian education institutions."
                          : visa === "Work"
                          ? "For individuals coming to work in Australia."
                          : visa === "Family"
                          ? "For joining family members in Australia."
                          : visa === "Investor"
                          ? "For individuals making significant investments."
                          : visa === "482 Temporary Work"
                          ? "For temporary work in a skilled occupation."
                          : visa === "186 Employer Nomination"
                          ? "For skilled workers nominated by an Australian employer."
                          : "For skilled workers filling a job vacancy."}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Visa Document Information */}
          <div className="visa-documents-container container my-5 p-4 border border-light rounded shadow-lg">
            <h4 className="text-center text-primary mb-4">
              Documents Required for Your Visa Interview
            </h4>
            <p className="text-muted mb-4">
              Depending on your visa category, document requirements may vary. Below is a comprehensive list of documents that most applicants need to present during their interview:
            </p>
            <ul className="list-group">
              <li className="list-group-item d-flex align-items-center">
                <FaPassport
                  className="text-success me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                A valid passport with at least two blank pages. Ensure your passport is valid for at least six months beyond your intended stay in Australia.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaClipboardCheck
                  className="text-primary me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                The visa application form correctly filled out.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaRegFileAlt
                  className="text-warning me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                Your visa appointment confirmation letter.
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
                Passport-sized photographs that meet Australian visa photo requirements.
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
                    For Visitor: Invitation letters, itinerary, accommodation details, etc.
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <FaUniversity
                      className="text-primary me-3"
                      style={{ fontSize: "1.3rem" }}
                    />
                    For Student: Confirmation of Enrolment (CoE), proof of funds, and academic qualifications.
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
                If approved, your visa will be printed and affixed to your passport. The embassy or consulate will inform you when and how to collect it.
              </li>
              <li className="list-group-item">
                <FaClock className="text-warning me-2" />
                Be patient if additional documents are requested, or there's a delay.
              </li>
              <li className="list-group-item">
                <FaTimesCircle className="text-danger me-2" />
                If denied, you will receive an explanation for reasons such as financial failure or insufficient documentation.
              </li>
            </ul>

            <h4 className="mt-4">Common Reasons for Visa Denials</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <FaHome className="text-danger me-2" />
                Lack of strong ties to your home country, such as employment or family.
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
                History of overstaying on a prior Australian visa.
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
                  href="https://immi.homeaffairs.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-bold"
                >
                  Australian Government Department of Home Affairs
                </a>{" "}
                for further instructions and assistance with the Australian visa process.
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
          <h3>Exploring Australia: Popular Destinations</h3>
          <img
            src="../assets/images/TourismImg/Ban4.jpg"
            variant="top"
            alt="Australia Travel Banner"
            className="rounded w-100 mb-3"
            height="550"
          />
          <p>
            Australia offers a wide array of destinations, making it one of the most desirable travel locations in the world. From stunning beaches to lush national parks and bustling cities, Australia has something for everyone.
          </p>
          <Container>
            <h4>Top Cities to Visit</h4>
            <p>
              Each Australian city showcases a unique vibe and attractions. Here are some popular destinations:
            </p>
            <Row xs={1} md={2} lg={5} className="g-4">
              {[
                {
                  img: "../assets/images/TourismImg/tau1.jpg",
                  title: "Sydney",
                  text: "Sydney is famous for its Sydney Opera House, Harbour Bridge, and stunning beaches like Bondi Beach.",
                },
                {
                  img: "../assets/images/TourismImg/tau2.jpg",
                  title: "Melbourne",
                  text: "Melbourne is known for its vibrant arts scene, café culture, and sports events.",
                },
                {
                  img: "../assets/images/TourismImg/tau3.jpg",
                  title: "Brisbane",
                  text: "Brisbane offers beautiful parks, cultural attractions, and a warm climate throughout the year.",
                },
                {
                  img: "../assets/images/TourismImg/tau4.jpg",
                  title: "Perth",
                  text: "Perth is known for its stunning beaches, parks, and proximity to wine regions.",
                },
                {
                  img: "../assets/images/TourismImg/tau5.jpg",
                  title: "Adelaide",
                  text: "Adelaide features rich cultural festivals and nearby wine regions like the Barossa Valley.",
                },
                {
                  img: "../assets/images/TourismImg/tau6.jpg",
                  title: "Hobart",
                  text: "Hobart is a charming city known for its historic architecture and beautiful waterfront.",
                },
                {
                  img: "../assets/images/TourismImg/tau7.jpg",
                  title: "Darwin",
                  text: "Darwin is known for its tropical climate and proximity to natural wonders like Litchfield National Park.",
                },
                {
                  img: "../assets/images/TourismImg/tau8.jpg",
                  title: "Canberra",
                  text: "Canberra, the capital city, features national museums and galleries, including the Australian War Memorial.",
                },
                {
                  img: "../assets/images/TourismImg/tau9.jpg",
                  title: "Gold Coast",
                  text: "Famous for its surf beaches and theme parks, the Gold Coast is a popular holiday destination.",
                },
                {
                  img: "../assets/images/TourismImg/tau10.jpg",
                  title: "Cairns",
                  text: "Cairns is the gateway to the Great Barrier Reef, known for its tropical climate and coral reefs.",
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
            The cost of living in Australia varies based on the city, but here are some average estimates to help with budgeting:
          </p>
          <ul>
            <li>
              <strong>Accommodation:</strong> Rent can range from AUD 1,200 to AUD 3,500 per month, depending on the location.
            </li>
            <li>
              <strong>Meals:</strong> Expect to spend AUD 300 to AUD 600 per month on groceries and dining out.
            </li>
            <li>
              <strong>Transportation:</strong> Public transport passes cost AUD 100-200 per month; renting a car costs around AUD 400-800.
            </li>
            <li>
              <strong>Utilities:</strong> Average utility costs range from AUD 150-250 per month.
            </li>
          </ul>

          <Container>
            <h4>
              <FaTree className="me-2" />
              Natural Wonders
            </h4>
            <p>
              Australia is renowned for its beautiful landscapes and natural attractions:
            </p>
            <Row xs={1} md={2} lg={2} className="g-4">
              {[
                {
                  img: "../assets/images/TourismImg/nwa1.jpg",
                  title: "Great Barrier Reef",
                  text: "The world's largest coral reef system, great for diving, snorkeling, and marine life.",
                  link: "https://www.greatbarrierreef.org/",
                },
                {
                  img: "../assets/images/TourismImg/nwa2.jpg",
                  title: "Uluru",
                  text: "An iconic sandstone monolith, located in the heart of the Northern Territory.",
                  link: "https://www.parksaustralia.gov.au/uluru/",
                },
                {
                  img: "../assets/images/TourismImg/nwa3.jpg",
                  title: "Blue Mountains",
                  text: "Known for stunning views, hiking trails, and unique rock formations.",
                  link: "https://www.bluemountains.com.au/",
                },
                {
                  img: "../assets/images/TourismImg/nwa4.jpg",
                  title: "Great Ocean Road",
                  text: "A scenic coastal drive featuring stunning ocean views and landmarks like the Twelve Apostles.",
                  link: "https://www.visitvictoria.com/regions/GreateOceanRoad",
                },
                {
                  img: "../assets/images/TourismImg/nwa5.jpg",
                  title: "Fraser Island",
                  text: "The world's largest sand island, known for its beautiful beaches and freshwater lakes.",
                  link: "https://www.visitfraserisland.com/",
                },
                {
                  img: "../assets/images/TourismImg/nwa6.jpg",
                  title: "Daintree Rainforest",
                  text: "An ancient rainforest known for its biodiversity and unique wildlife.",
                  link: "https://www.daintree-national-park.com/",
                },
                {
                  img: "../assets/images/TourismImg/nwa7.jpg",
                  title: "Kangaroo Island",
                  text: "Known for its stunning wildlife, beautiful landscapes, and pristine beaches.",
                  link: "https://www.tourkangarooisland.com/",
                },
                {
                  img: "../assets/images/TourismImg/nwa8.jpg",
                  title: "Whitsunday Islands",
                  text: "A group of beautiful islands known for their stunning beaches and coral reefs.",
                  link: "https://whitsundays.com.au/",
                },
                {
                  img: "../assets/images/TourismImg/nwa9.jpg",
                  title: "Tasmania",
                  text: "Known for its wilderness, stunning landscapes, and unique wildlife.",
                  link: "https://www.discovertasmania.com.au/",
                },
                {
                  img: "../assets/images/TourismImg/nwa10.jpg",
                  title: "Byron Bay",
                  text: "Famous for its beautiful beaches, surf culture, and laid-back atmosphere.",
                  link: "https://www.visitbyronbay.com/",
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
                  <FaMapMarkedAlt className="me-2" /> Essential Travel Tips
                </h4>
                <p className="text-muted">Follow these tips to make your trip easier and more enjoyable:</p>
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
                        "Pack lightweight, versatile clothing for convenience and comfort.",
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
              <Col md={12} lg={12}>
                <Card className="shadow-sm border-light rounded">
                  <Card.Body className="text-center">
                    <h5>Use the map below to plan your trip</h5>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040831.7004881944!2d138.5378859251292!3d-25.274398071527924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b88c9a7b9dcc6c9%3A0xc9125a5a74365edc!2sAustralia!5e0!3m2!1sen!2sus!4v1650624726977!5m2!1sen!2sus"
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
      {sections.map((section) => (
        <Row key={section.id}>
          <Col sm={12}>
            <h1>{section.title}</h1>
            <div>{section.content}</div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default IndiaToAustralia;