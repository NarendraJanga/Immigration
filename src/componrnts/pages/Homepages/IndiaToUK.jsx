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

const IndiaToUk = () => {
  const [sections] = useState([
    {
      id: "visa",
      title: "UK Visa Details",
      content: (
        <div>
          <Card
            fluid
            style={{
              backgroundImage: "url(../assets/images/Visa-img/ban2.jpg)",
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
              UK Visa Information
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
                Understanding UK Visa Types
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
                A visa is required for most travelers entering the United
                Kingdom. It’s essential to choose the right visa category
                depending on the purpose of your visit. Each visa type has its
                own set of rules, conditions, and required documentation.
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
                "Q5",
                "Skilled Worker",
                "Innovator",
              ].map((visa, index) => (
                <Col md={4} lg={3} className="mb-3" key={index}>
                  <Card className="visa-card">
                    <Card.Img
                      variant="top"
                      src={`../assets/images/Visa-img/d${index + 1}.jpg`}
                      alt={visa}
                    />
                    <Card.Body>
                      <Card.Title>{visa} Visa</Card.Title>
                      <Card.Text>
                        {visa === "Visitor"
                          ? "For short visits for tourism or family stays."
                          : visa === "Student"
                          ? "For students accepted into UK education institutions."
                          : visa === "Work"
                          ? "For individuals coming to work in the UK."
                          : visa === "Family"
                          ? "For joining family members in the UK."
                          : visa === "Investor"
                          ? "For individuals making a significant investment."
                          : visa === "Skilled Worker"
                          ? "For skilled workers filling a job vacancy."
                          : "For entrepreneurs wishing to set up a business."}
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
                stay in the UK.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaClipboardCheck
                  className="text-primary me-3"
                  style={{ fontSize: "1.5rem" }}
                />
                The visa application form (VAF) correctly filled out.
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
                Passport-sized photographs that meet UK visa photo requirements.
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
                    For Visitor: Invitation letters, itinerary, accommodation
                    details, etc.
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <FaUniversity
                      className="text-primary me-3"
                      style={{ fontSize: "1.3rem" }}
                    />
                    For Student: CAS letter, proof of funds, and academic
                    qualifications.
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
                If denied, you will receive an explanation for reasons such as
                financial failure or insufficient documentation.
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
                History of overstaying on a prior UK visa.
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
                  href="https://www.gov.uk/browse/visas-immigration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-bold"
                >
                  UK Visa and Immigration
                </a>{" "}
                for further instructions and assistance with the UK visa
                process.
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
          <h3>Exploring the UK: Popular Destinations</h3>
          <img
            src="../assets/images/TourismImg/Ban2.jpg"
            variant="top"
            alt="UK Travel Banner"
            className="rounded w-100 mb-3"
            height="550"
          />
          <p>
            The United Kingdom offers a wide range of destinations, making it
            one of the top travel destinations in the world. Whether you're a
            nature lover, a history buff, or someone seeking vibrant city life,
            the UK has it all—from bustling cities to quaint villages and
            beautiful countryside.
          </p>
          <Container>
            <h4>Top Cities to Visit</h4>
            <p>
              Every UK city has something unique to offer. Here are some of the
              most popular cities to explore:
            </p>
            <Row xs={1} md={2} lg={5} className="g-4">
              {[
                {
                  img: "../assets/images/TourismImg/tuk1.jpg",
                  title: "London",
                  text: "London, the capital city, is known for its history, museums, and diverse culture. Key attractions include the Tower of London, Buckingham Palace, and the British Museum.",
                },
                {
                  img: "../assets/images/TourismImg/tuk2.jpg",
                  title: "Edinburgh",
                  text: "The capital of Scotland, Edinburgh is famous for its historic and cultural attractions including the Edinburgh Castle and the annual Edinburgh Festival.",
                },
                {
                  img: "../assets/images/TourismImg/tuk3.jpg",
                  title: "Manchester",
                  text: "Known for its rich industrial heritage and vibrant music scene, Manchester offers a blend of culture with art museums, theaters, and nightlife.",
                },
                {
                  img: "../assets/images/TourismImg/tuk4.jpg",
                  title: "Birmingham",
                  text: "Birmingham is famous for its diverse culture, shopping, and dining. Visit the Birmingham Museum, Cadbury World, and the Symphony Hall.",
                },
                {
                  img: "../assets/images/TourismImg/tuk5.jpg",
                  title: "Liverpool",
                  text: "Home to The Beatles, Liverpool is packed with music history. Explore The Beatles Story museum, Albert Dock, and the vibrant waterfront.",
                },
                {
                  img: "../assets/images/TourismImg/tuk6.jpg",
                  title: "Bristol",
                  text: "Bristol is known for its maritime history, and hot air balloon festivals. Key attractions include the SS Great Britain and the Bristol Zoo.",
                },
                {
                  img: "../assets/images/TourismImg/tuk7.jpg",
                  title: "Oxford",
                  text: "Home to the famous University of Oxford, this city features historic architecture and gardens. Explore the Ashmolean Museum and Christ Church.",
                },
                {
                  img: "../assets/images/TourismImg/tuk8.jpg",
                  title: "Cambridge",
                  text: "Known for its prestigious university, Cambridge is also famous for its beautiful architecture and picturesque river views.",
                },
                {
                  img: "../assets/images/TourismImg/tuk9.jpg",
                  title: "York",
                  text: "York is a historic city with a rich heritage, known for its medieval structures, Viking history, and stunning York Minster.",
                },
                {
                  img: "../assets/images/TourismImg/tuk10.jpg",
                  title: "Brighton",
                  text: "A seaside resort known for its lively atmosphere and the iconic Brighton Pier. Enjoy the pebble beach, and various festivals held throughout the year.",
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
            live in the UK, below are some general estimates to help with
            budgeting:
          </p>
          <ul>
            <li>
              <strong>Accommodation:</strong> Rent can range from £600 to £2000
              per month, depending on the location.
            </li>
            <li>
              <strong>Meals:</strong> Expect to spend £200 to £400 per month on
              groceries and dining out.
            </li>
            <li>
              <strong>Transportation:</strong> Public transport passes cost
              £100-£150 per month; renting a car costs around £300-£600.
            </li>
            <li>
              <strong>Utilities:</strong> Average utility costs range from
              £100-£200 per month.
            </li>
          </ul>

          <Container>
            <h4>
              <FaTree className="me-2" />
              Natural Wonders
            </h4>
            <p>
              If you're a nature enthusiast, the UK features some iconic natural
              landscapes and beautiful national parks:
            </p>
            <Row xs={1} md={2} lg={2} className="g-4">
              {[
                {
                  img: "../assets/images/TourismImg/nwuk1.jpg",
                  title: "Lake District",
                  text: "A popular holiday destination with stunning lakes and mountains. Great for hiking and beautiful scenery.",
                  link: "https://www.lakedistrict.gov.uk/",
                },
                {
                  img: "../assets/images/TourismImg/nwuk2.jpg",
                  title: "Snowdonia National Park",
                  text: "Known for its breathtaking views and hiking opportunities, including the summit of Mount Snowdon.",
                  link: "https://www.snowdonia.gov.wales/",
                },
                {
                  img: "../assets/images/TourismImg/nwuk3.jpg",
                  title: "Sherwood Forest",
                  text: "Famous for its association with Robin Hood, this ancient woodland is home to famous oaks and nature trails.",
                  link: "https://www.sherwoodforest.org.uk/",
                },
                {
                  img: "../assets/images/TourismImg/nwuk4.jpg",
                  title: "Cotswolds",
                  text: "Known for its picturesque villages and rolling hills, perfect for scenic walks and exploring quaint towns.",
                  link: "https://www.cotswolds.com/",
                },
                {
                  img: "../assets/images/TourismImg/nwuk5.jpg",
                  title: "Giant's Causeway",
                  text: "A UNESCO World Heritage Site famous for its unique hexagonal basalt columns along the coast of Northern Ireland.",
                  link: "https://www.nationaltrust.org.uk/giants-causeway",
                },
                {
                  img: "../assets/images/TourismImg/nwuk6.jpg",
                  title: "Peak District National Park",
                  text: "England's first national park, featuring stunning landscapes, caves, and picturesque villages.",
                  link: "https://www.peakdistrict.gov.uk/",
                },
                {
                  img: "../assets/images/TourismImg/nwuk7.jpg",
                  title: "Cornwall",
                  text: "A popular destination for surfers, hikers, and beach lovers, with stunning coastal scenery and a rich history.",
                  link: "https://www.visitcornwall.com/",
                },
                {
                  img: "../assets/images/TourismImg/nwuk8.jpg",
                  title: "North York Moors National Park",
                  text: "A beautiful national park featuring heather-covered moors, scenic coastal routes, and historic sites.",
                  link: "https://www.northyorkmoors.org.uk/",
                },
                {
                  img: "../assets/images/TourismImg/nwuk9.jpg",
                  title: "New Forest National Park",
                  text: "A beautiful forest with wild ponies, historic sites, and scenic walking trails.",
                  link: "https://www.newforestnpa.gov.uk/",
                },
                {
                  img: "../assets/images/TourismImg/nwuk10.jpg",
                  title: "Yorkshire Dales National Park",
                  text: "A beautiful national park featuring scenic valleys, picturesque villages, and historic sites.",
                  link: "https://www.yorkshiredales.org.uk/",
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
              <Col md={12} lg={12}>
                <Card className="shadow-sm border-light rounded">
                  <Card.Body className="text-center">
                    <h5>Use the map below to plan your trip</h5>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1029314.9954746353!2d-3.3274290319340124!3d55.37805196167825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b4b5d80dd309b%3A0x607b0c79c8431c41!2sUnited%20Kingdom!5e0!3m2!1sen!2sus!4v1650624726977!5m2!1sen!2sus"
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

export default IndiaToUk;
