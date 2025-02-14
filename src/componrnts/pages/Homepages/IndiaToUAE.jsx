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
  FaMoneyBillWave,
  FaMapMarkedAlt,
} from "react-icons/fa";

const IndiaToUAE = () => {
  const [sections] = useState([
    {
      id: "visa",
      title: "UAE Visa Details",
      content: (
        <div>
          <Card
            fluid
            style={{
              backgroundImage: "url(../assets/images/Visa-img/ban5.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundPositionY: "60%",
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
              UAE Visa Information
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
                Understanding UAE Visa Types
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
                A visa is required for most travelers entering the United Arab Emirates. It’s essential to choose the right visa category depending on the purpose of your visit. Each visa type has its own set of rules, conditions, and required documentation.
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
                "Tourist",
                "Student",
                "Work",
                "Family",
                "Investor",
                "Transit",
              ].map((visa, index) => (
                <Col md={4} lg={4} className="mb-3" key={index}>
                  <Card className="visa-card">
                    <Card.Img
                      variant="top"
                      src={`../assets/images/Visa-img/g${index + 1}.jpg`}
                      alt={visa}
                    />
                    <Card.Body>
                      <Card.Title>{visa} Visa</Card.Title>
                      <Card.Text>
                        {visa === "Tourist"
                          ? "For leisure travel or short visits, usually valid for 30 days and extendable."
                          : visa === "Student"
                          ? "For students accepted into UAE educational institutions."
                          : visa === "Work"
                          ? "For individuals seeking employment in the UAE."
                          : visa === "Family"
                          ? "For joining family members residing in the UAE."
                          : visa === "Investor"
                          ? "For individuals making significant investments in UAE businesses."
                          : "For short stops in the UAE while traveling to another destination."}
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
                A valid passport with at least two blank pages and valid for at least six months beyond your intended stay in the UAE.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaClipboardCheck
                  className="text-primary me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                A properly filled visa application form.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaRegFileAlt
                  className="text-warning me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                Your visa appointment confirmation letter issued by the UAE authorities.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaReceipt
                  className="text-info me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                Payment receipt for the visa processing fees.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaCamera
                  className="text-danger me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                Recent passport-sized photographs meeting UAE visa photo requirements.
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
                    For Tourist: Hotel reservation confirmation, return flight tickets, itinerary, and travel insurance.
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <FaUniversity
                      className="text-primary me-3"
                      style={{ fontSize: "1.3rem" }}
                    />
                    For Student: Acceptance letter from the institution, proof of funding, and academic qualifications.
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
                text: "Provide truthful and accurate information to the visa officer.",
              },
              {
                title: "Stay Confident",
                icon: FaSmile,
                color: "text-success",
                text: "Maintain a calm demeanor and communicate clearly.",
              },
              {
                title: "Strong Ties to Home Country",
                icon: FaHome,
                color: "text-warning",
                text: "Prepare documents that demonstrate your intent to return home (e.g., property documents, employment letters).",
              },
              {
                title: "Be Prepared",
                icon: FaLightbulb,
                color: "text-danger",
                text: "Clearly understand your trip details including purpose, itinerary, and financial arrangements.",
              },
              {
                title: "Be Polite",
                icon: FaHandshake,
                color: "text-info",
                text: "Respectful behavior creates a positive impression.",
              },
              {
                title: "Bring Complete Documentation",
                icon: FaFileAlt,
                color: "text-secondary",
                text: "Ensure that all required documents are organized and complete.",
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
                If approved, your visa will be printed and affixed to your passport. You'll receive information on collection.
              </li>
              <li className="list-group-item">
                <FaClock className="text-warning me-2" />
                Be patient in case additional documents are requested or if there’s a processing delay.
              </li>
              <li className="list-group-item">
                <FaTimesCircle className="text-danger me-2" />
                If denied, you'll receive a written explanation regarding the reasons for denial.
              </li>
            </ul>

            <h4 className="mt-4">Common Reasons for Visa Denials</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <FaHome className="text-danger me-2" />
                Lack of strong ties to your home country (e.g., employment, family).
              </li>
              <li className="list-group-item">
                <FaWallet className="text-danger me-2" />
                Insufficient financial documents proving your ability to support yourself.
              </li>
              <li className="list-group-item">
                <FaPenSquare className="text-danger me-2" />
                Submission of false or incorrect information can lead to denial.
              </li>
              <li className="list-group-item">
                <FaUndo className="text-danger me-2" />
                Previous history of overstaying on a UAE visa or other entries.
              </li>
              <li className="list-group-item">
                <FaFileAlt className="text-danger me-2" />
                Failure to meet the requirements of your specific visa category.
              </li>
            </ul>

            <h4 className="mt-4">Tips for Avoiding Visa Denials</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <FaFileAlt className="text-success me-2" />
                Ensure all documents are original and adhere to embassy guidelines.
              </li>
              <li className="list-group-item">
                <FaFileAlt className="text-success me-2" />
                Provide truthful, complete information in your interview.
              </li>
              <li className="list-group-item">
                <FaCalendarCheck className="text-success me-2" />
                Present a well-planned itinerary showing sufficient finances for your trip.
              </li>
              <li className="list-group-item">
                <FaUsers className="text-success me-2" />
                Demonstrate strong ties to your home country to show your intent to return.
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
                  href="https://www.government.ae/en/information-and-services/visa-and-emirates-id/apply-for-a-visa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-bold"
                >
                  UAE Government Visa Services
                </a>{" "}
                for further instructions and assistance with the UAE visa process.
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
          <h3>Exploring the UAE: Popular Destinations</h3>
          <img
            src="../assets/images/TourismImg/Ban5.jpg"
            variant="top"
            alt="UAE Travel Banner"
            className="rounded w-100 mb-3"
            height="550"
          />
          <p>
            The United Arab Emirates offers a range of attractions, making it one of the top travel destinations in the Middle East. With its skyscrapers, cultural landmarks, and entertainment venues, the UAE has a lot to offer.
          </p>
          <Container>
            <h4>Top Cities to Visit</h4>
            <p>
              Each city in the UAE presents a unique charm. Here are some of the most popular cities to explore:
            </p>
            <Row xs={1} md={2} lg={5} className="g-4">
              {[
                {
                  img: "../assets/images/TourismImg/tuae1.jpg",
                  title: "Dubai",
                  text: "Known for its modern architecture, luxury shopping, and vibrant nightlife, Dubai houses the Burj Khalifa and stunning beaches."
                },
                {
                  img: "../assets/images/TourismImg/tuae2.jpg",
                  title: "Abu Dhabi",
                  text: "The capital city of the UAE, famous for its stunning architecture, including the Sheikh Zayed Grand Mosque and Emirates Palace."
                },
                {
                  img: "../assets/images/TourismImg/tuae3.jpg",
                  title: "Sharjah",
                  text: "Sharjah is known for its rich cultural heritage, including numerous museums, the Sharjah Art Foundation, and beautiful gardens."
                },
                {
                  img: "../assets/images/TourismImg/tuae4.jpg",
                  title: "Ajman",
                  text: "Ajman features beautiful beaches, cultural landmarks, and markets; perfect for a relaxing getaway close to Dubai."
                },
                {
                  img: "../assets/images/TourismImg/tuae5.jpg",
                  title: "Ras Al Khaimah",
                  text: "Famous for its beautiful beaches, adventure activities, and the Hajar Mountains, this emirate is perfect for both relaxation and exploration."
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
            While the cost of living varies depending on where you choose to live in the UAE, below are some general estimates to help with budgeting:
          </p>
          <ul>
            <li>
              <strong>Accommodation:</strong> Rent can range from AED 2,000 to AED 10,000 per month based on the location and type of accommodation.
            </li>
            <li>
              <strong>Meals:</strong> Expect to spend AED 600 to AED 1,200 per month on groceries and dining out.
            </li>
            <li>
              <strong>Transportation:</strong> Public transport passes cost AED 300-500 per month; taxis and ride-sharing are commonly used.
            </li>
            <li>
              <strong>Utilities:</strong> Average utility costs range from AED 500-1,000 per month depending on consumption.
            </li>
          </ul>

          <Container>
            <h4>
              <FaMapMarkedAlt className="me-2" />
              Natural Wonders
            </h4>
            <p>
              If you're a nature enthusiast, the UAE features some iconic natural landscapes and outdoor activities:
            </p>
            <Row xs={1} md={2} lg={2} className="g-4">
              {[
                {
                  img: "../assets/images/TourismImg/nwuae1.jpg",
                  title: "Rub' al Khali",
                  text: "Also known as the Empty Quarter, it's the largest continuous sand desert in the world. Ideal for photography, desert safaris, and stargazing.",
                  link: "https://www.visitdubai.com/en/experiences/adventure-desert-safari",
                },
                {
                  img: "../assets/images/TourismImg/nwuae2.jpg",
                  title: "Jebel Hafeet",
                  text: "A mountain in Abu Dhabi offering stunning views and a great place for hiking, camping, and exploring the surrounding areas.",
                  link: "https://www.visitabudhabi.ae/en/explore/attractions/jebel-hafeet",
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
                        "Travel with insurance to stay covered in emergencies.",
                        "Book hotels and flights early for the best deals.",
                        "Respect local customs and traditions to have a positive experience.",
                        "Dress modestly in public spaces, especially in traditional areas.",
                        "Always carry backup copies of your important travel documents.",
                        "Learn a few basic Arabic phrases to enhance communication.",
                        "Keep track of your expenses and set a budget for your trip.",
                        "Stay hydrated and carry snacks during sightseeing.",
                        "Download offline maps for navigation without an internet connection.",
                        "Check the weather forecast before packing to be prepared.",
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384882.1877993575!2d54.2701719780971!3d24.355982080642678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1ce3b5d1df%3A0xd72bad516eb8c468!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1638292800331!5m2!1sen!2sus"
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

export default IndiaToUAE;