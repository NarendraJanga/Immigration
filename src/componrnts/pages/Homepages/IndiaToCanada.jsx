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

const IndiaToCanada = () => {
  const [sections] = useState([
    {
      id: "visa",
      title: "Canada Visa Details",
      content: (
        <div>
          <Card
            fluid
            style={{
              backgroundImage: "url(../assets/images/Visa-img/Ban3.jpg)",
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
              Canada Visa Information
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
                Understanding Canada Visa Types
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
                A visa or Electronic Travel Authorization (eTA) is required for
                most travelers entering Canada. It’s essential to choose the
                right visa category depending on the purpose of your visit. Each
                visa type has its own set of rules, conditions, and required
                documentation.
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
                "Express Entry",
                "PNP",
                "Super Visa",
              ].map((visa, index) => (
                <Col md={4} lg={3} className="mb-3" key={index}>
                  <Card className="visa-card">
                    <Card.Img
                      variant="top"
                      src={`../assets/images/Visa-img/e${index + 1}.jpg`}
                      alt={visa}
                    />
                    <Card.Body>
                      <Card.Title>{visa} Visa</Card.Title>
                      <Card.Text>
                        {visa === "Visitor"
                          ? "For short visits for tourism or family stays."
                          : visa === "Student"
                          ? "For students accepted into Canadian education institutions."
                          : visa === "Work"
                          ? "For individuals coming to work in Canada."
                          : visa === "Family"
                          ? "For joining family members in Canada."
                          : visa === "Investor"
                          ? "For individuals making a significant investment."
                          : visa === "Express Entry"
                          ? "For skilled workers seeking permanent residency."
                          : visa === "PNP"
                          ? "For those nominated by a Canadian province."
                          : "For parents or grandparents of Canadian citizens or permanent residents."}
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
                stay in Canada.
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
                Passport-sized photographs that meet Canadian visa photo
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
                    For Visitor: Invitation letters, itinerary, accommodation
                    details, etc.
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <FaUniversity
                      className="text-primary me-3"
                      style={{ fontSize: "1.3rem" }}
                    />
                    For Student: Acceptance letter, proof of funds, and academic
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
                History of overstaying on a prior Canadian visa.
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
                  href="https://www.canada.ca/en/services/immigration-citizenship.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-bold"
                >
                  Canada Immigration and Citizenship
                </a>{" "}
                for further instructions and assistance with the Canada visa
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
          <h3>Exploring Canada: Popular Destinations</h3>
          <img
            src="../assets/images/TourismImg/Ban3.jpg"
            variant="top"
            alt="Canada Travel Banner"
            className="rounded w-100 mb-3"
            height="550"
          />
          <p>
            Canada offers a diverse range of destinations, making it one of the
            most sought-after travel locations worldwide. From breathtaking
            natural landscapes to vibrant cities, Canada has something to offer
            for everyone.
          </p>
          <Container>
            <h4>Top Cities to Visit</h4>
            <p>
              Every Canadian city has its charm. Here are some of the most
              popular cities to explore:
            </p>
            <Row xs={1} md={2} lg={5} className="g-4">
              {[
                {
                  img: "../assets/images/TourismImg/tcd1.jpg",
                  title: "Toronto",
                  text: "Toronto, Ontario’s capital, is known for its diverse culture, iconic skyline, and attractions like the CN Tower and Royal Ontario Museum.",
                },
                {
                  img: "../assets/images/TourismImg/tcd2.jpg",
                  title: "Vancouver",
                  text: "Vancouver is famous for its stunning natural beauty, mountains, and coastline. Key attractions include Stanley Park and Granville Island.",
                },
                {
                  img: "../assets/images/TourismImg/tcd3.jpg",
                  title: "Montreal",
                  text: "Montreal is known for its vibrant arts scene, historic architecture, and culinary delights. Visit Old Montreal and enjoy the numerous festivals.",
                },
                {
                  img: "../assets/images/TourismImg/tcd4.jpg",
                  title: "Ottawa",
                  text: "Ottawa, the capital of Canada, is home to national museums, and landmarks, including Parliament Hill and the Rideau Canal.",
                },
                {
                  img: "../assets/images/TourismImg/tcd5.jpg",
                  title: "Calgary",
                  text: "Calgary is famous for its annual Stampede, a rodeo festival, and offers a vibrant urban scene with rich Western heritage.",
                },
                {
                  img: "../assets/images/TourismImg/tcd6.jpg",
                  title: "Quebec City",
                  text: "Quebec City is known for its historic Old Town, which is a UNESCO World Heritage Site, and boasts charming cobbled streets and European architecture.",
                },
                {
                  img: "../assets/images/TourismImg/tcd7.jpg",
                  title: "Victoria",
                  text: "Victoria, the capital of British Columbia, is known for its stunning gardens, historic buildings, and charming Inner Harbour.",
                },
                {
                  img: "../assets/images/TourismImg/tcd8.jpg",
                  title: "Halifax",
                  text: "Halifax offers a rich maritime history, beautiful waterfront, and attractions like the Halifax Citadel and Maritime Museum.",
                },
                {
                  img: "../assets/images/TourismImg/tcd9.jpg",
                  title: "St. John's",
                  text: "St. John's is known for its colorful row houses, beautiful coastline, and rich history, making it a unique destination in Canada.",
                },
                {
                  img: "../assets/images/TourismImg/tcd10.jpg",
                  title: "Banff",
                  text: "Banff is renowned for its stunning national park, outdoor activities, and breathtaking mountain scenery.",
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
            The cost of living in Canada varies by city, but here are some
            general estimates to assist with budgeting:
          </p>
          <ul>
            <li>
              <strong>Accommodation:</strong> Rent can range from CAD 800 to CAD
              2500 per month based on the location.
            </li>
            <li>
              <strong>Meals:</strong> Expect to spend CAD 300 to CAD 600 per
              month on groceries and dining out.
            </li>
            <li>
              <strong>Transportation:</strong> Public transport passes cost CAD
              100-200 per month; renting a car costs around CAD 400-800.
            </li>
            <li>
              <strong>Utilities:</strong> Average utility costs range from CAD
              150-250 per month.
            </li>
          </ul>

          <Container>
            <h4>
              <FaTree className="me-2" />
              Natural Wonders
            </h4>
            <p>
              Canada is known for its breathtaking natural landscapes and
              national parks:
            </p>
            <Row xs={1} md={2} lg={2} className="g-4">
              {[
                {
                  img: "../assets/images/TourismImg/nwc1.jpg",
                  title: "Banff National Park",
                  text: "A stunning national park known for its breathtaking mountain views, hiking trails, and turquoise lakes.",
                  link: "https://www.banfflakepeachtree.com/",
                },
                {
                  img: "../assets/images/TourismImg/nwc2.jpg",
                  title: "Niagara Falls",
                  text: "One of the world's most famous waterfalls, known for its stunning beauty and numerous attractions.",
                  link: "https://www.niagarafalls.ca/",
                },
                {
                  img: "../assets/images/TourismImg/nwc3.jpg",
                  title: "Jasper National Park",
                  text: "Known for its vast wilderness, diverse wildlife, and stunning landscapes.",
                  link: "https://www.jasper.travel/",
                },
                {
                  img: "../assets/images/TourismImg/nwc4.jpg",
                  title: "Whistler",
                  text: "A popular year-round resort known for skiing, mountain biking, and outdoor adventures.",
                  link: "https://www.whistler.com/",
                },
                {
                  img: "../assets/images/TourismImg/nwc5.jpg",
                  title: "Prince Edward Island",
                  text: "Known for its red sand beaches, rolling countryside, and the famous Anne of Green Gables.",
                  link: "https://www.tourismpei.com/",
                },
                {
                  img: "../assets/images/TourismImg/nwc6.jpg",
                  title: "Whiteshell Provincial Park",
                  text: "A picturesque park famous for its lakes, hiking trails, and outdoor activities.",
                  link: "https://www7.ontario.ca/",
                },
                {
                  img: "../assets/images/TourismImg/nwc7.jpg",
                  title: "Gros Morne National Park",
                  text: "A UNESCO World Heritage Site known for its dramatic landscapes and hiking opportunities.",
                  link: "https://www.pc.gc.ca/en/pn-np/nl/grosmorne",
                },
                {
                  img: "../assets/images/TourismImg/nwc8.jpg",
                  title: "Cape Breton Highlands National Park",
                  text: "Known for its stunning coastal vistas, hiking trails, and rich cultural history.",
                  link: "https://www.pc.gc.ca/en/pn-np/ns/cbreton",
                },
                {
                  img: "../assets/images/TourismImg/nwc9.jpg",
                  title: "Yoho National Park",
                  text: "Famous for its waterfalls, emerald lakes, and stunning mountain scenery.",
                  link: "https://www.pc.gc.ca/en/pn-np/bc/yoho",
                },
                {
                  img: "../assets/images/TourismImg/nwc10.jpg",
                  title: "Fundy National Park",
                  text: "Known for having the highest tides in the world and stunning coastal scenery.",
                  link: "https://www.pc.gc.ca/en/pn-np/nb/fundy",
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068921.8859389087!2d-109.34534823518386!3d56.13036689054822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5374ecc49dbedf6b%3A0xa99e6378dd3adbaf!2sCanada!5e0!3m2!1sen!2sus!4v1650624726977!5m2!1sen!2sus"
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

export default IndiaToCanada;
