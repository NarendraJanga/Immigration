import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
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
} from "react-icons/fa";

const sections = [
  {
    id: "visa",
    title: "Visa Information",
    content: (
      <div>
        <Card
          fluid
          style={{
            backgroundImage: "url(assets/images/Visa-img/ban1.jpg)",
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
              A visa is required for most travelers entering the country. It’s essential to choose the right visa category depending on the purpose of your visit. Each visa type has its own rules, conditions, and required documentation.
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
                      src={`assets/images/Visa-img/c${index + 1}.jpg`}
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
            Depending on your visa category, document requirements may vary. Below is a comprehensive list of documents that most applicants need to present during their interview:
          </p>
          <ul className="list-group">
            <li className="list-group-item d-flex align-items-center">
              <FaPassport
                className="text-success me-3"
                style={{ fontSize: "1.5rem" }}
              />
              A valid passport with at least two blank pages. Ensure your passport is valid for at least six months beyond your intended stay.
            </li>
            <li className="list-group-item d-flex align-items-center">
              <FaClipboardCheck
                className="text-primary me-3"
                style={{ fontSize: "1.5rem" }}
              />
              The DS-160 confirmation page with a barcode for tracking your application.
            </li>
            <li className="list-group-item d-flex align-items-center">
              <FaRegFileAlt
                className="text-warning me-3"
                style={{ fontSize: "1.5rem" }}
              />
              Your visa appointment confirmation letter as proof that your appointment is confirmed.
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
              Passport-sized photographs that meet the visa photo requirements.
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
                  For B1/B2: Invitation letters, itinerary, business meeting schedules, etc.
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FaUniversity
                    className="text-primary me-3"
                    style={{ fontSize: "1.3rem" }}
                  />
                  For F1: Form I-20, evidence of financial support, academic transcripts, etc.
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
              If denied, you will receive an explanation, with common reasons including financial failure or insufficient documentation.
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
          <div className="alert alert-info d-flex align-items-center" role="alert">
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
];

const Visa = () => {
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

export default Visa;