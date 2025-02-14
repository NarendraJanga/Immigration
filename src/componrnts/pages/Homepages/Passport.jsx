import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Flag from "react-world-flags";
import {
  FaRegCheckCircle,
  FaExclamationCircle,
  FaLock,
  FaCopy,
  FaCheckCircle,
  FaPlaneDeparture,
  FaClipboardCheck,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton"; // Importing Skeleton for loading effect

const Passport = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time of 4 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const sections = [
    {
          id: "passport",
          title: "Passport Details for Indian Travelers",
          content: (
            <div>
              <h3>Essential Information for Indian Citizens About Passports</h3>
              <p>
                If you're an Indian citizen planning international travel to
                countries such as the USA, UK, UAE, Australia, European countries,
                or Canada, your passport is the most important document you'll need.
                It serves as proof of identity and nationality, essential for
                entering foreign countries, and meets immigration and customs
                requirements.
              </p>
    
              <div className="mb-4">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start">
                    <FaRegCheckCircle className="text-success me-3" size={20} />
                    <span>
                      Ensure your passport is valid for at least six months beyond
                      your planned travel date, especially when visiting countries
                      with strict entry requirements, such as the USA and the
                      Schengen region in Europe.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <FaClipboardCheck className="text-primary me-3" size={20} />
                    <span>
                      Ensure that your passport has at least two blank pages for
                      visa stamps and entry/exit documentation.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <FaExclamationCircle className="text-warning me-3" size={20} />
                    <span>
                      If your passport is nearing expiration or lacks sufficient
                      pages, apply for renewal in advance to prevent disruptions.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <FaPlaneDeparture className="text-info me-3" size={20} />
                    <span>
                      Different countries have specific visa requirements, so ensure
                      you verify these before traveling. For example:
                      <ul className="ms-3">
                        <li>
                          <FaCheckCircle className="text-success me-2" size={16} />{" "}
                          The USA and Canada typically require a visa in advance.
                        </li>
                        <li>
                          <FaCheckCircle className="text-success me-2" size={16} />{" "}
                          The UK and European countries often require a visa or
                          electronic travel authorization (ETA).
                        </li>
                        <li>
                          <FaCheckCircle className="text-success me-2" size={16} />{" "}
                          The UAE may offer visas on arrival for Indian passport
                          holders under certain conditions.
                        </li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>
    
              <p>
                It's a good idea to keep both a photocopy and a digital backup of
                your passport in a secure location (e.g., an encrypted cloud
                service) or a physical copy, in case of loss or theft.
              </p>
    
              <h4>Passport Services</h4>
              <Row>
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-card">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/pa1.jpg"
                      alt="Fresh Passport"
                      className="passport-img"
                    />
                    <Card.Body>
                      <Card.Title>Fresh Passport</Card.Title>
                      <Card.Text>
                        For individuals applying for their first passport.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-card">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/pa2.jpg"
                      alt="Renewal Passport"
                      className="passport-img"
                    />
                    <Card.Body>
                      <Card.Title>Renewal Passport</Card.Title>
                      <Card.Text>
                        Check with the passport office for the renewal process and
                        required documents.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-card">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/pa3.jpg"
                      alt="Damaged Passport"
                      className="passport-img"
                    />
                    <Card.Body>
                      <Card.Title>Damaged Passport</Card.Title>
                      <Card.Text>
                        If your passport is damaged beyond use, apply for a
                        replacement.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-card">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/pa4.jpg"
                      alt="Lost Passport"
                      className="passport-img"
                    />
                    <Card.Body>
                      <Card.Title>Stolen/Lost Passport</Card.Title>
                      <Card.Text>
                        Report the loss to the local police and apply for a
                        replacement.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
    
              <h4>Steps for Indian Citizens to Apply for a New Passport</h4>
              <img
                src="assets/images/PassPort-img/ind.jpg"
                alt="Steps to Apply for Passport"
                className="passport-steps-img rounded-4"
                height="350px"
              />
              <ol>
                <li>
                  Visit the official
                  <a
                    href="https://passportindia.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Passport Seva
                  </a>
                  website.
                </li>
                <li>Register an account using your email and contact details.</li>
                <li>
                  Complete the application form, providing your personal, family,
                  and address information.
                </li>
                <li>Pay the application fee online.</li>
                <li>
                  Schedule an appointment at the nearest Passport Seva Kendra (PSK)
                  or Post Office Passport Seva Kendra (POPSK).
                </li>
                <li>
                  On your appointment day, bring original documents, including proof
                  of identity, address, and date of birth.
                </li>
                <li>
                  Attend the appointment, provide biometric data, and obtain an
                  acknowledgment receipt.
                </li>
                <li>
                  Track your application status online. Once approved, your passport
                  will be delivered to your registered address.
                </li>
              </ol>
    
              <h4>Documents Required for Indian Passport Application</h4>
              <Row>
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-doc shadow-lg border-0 rounded-3">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/psd1.jpg"
                      alt="Proof of Date of Birth"
                      className="rounded-top"
                    />
                    <Card.Body>
                      <Card.Title className="text-primary fw-bold">
                        Proof of Date of Birth
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Birth certificate, school records, etc.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-doc shadow-lg border-0 rounded-3">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/psd2.jpg"
                      alt="Proof of Identity"
                      className="rounded-top"
                    />
                    <Card.Body>
                      <Card.Title className="text-success fw-bold">
                        Proof of Identity
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Aadhar card, Voter ID, or similar identification.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-doc shadow-lg border-0 rounded-3">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/psd3.jpg"
                      alt="Proof of Address"
                      className="rounded-top"
                    />
                    <Card.Body>
                      <Card.Title className="text-warning fw-bold">
                        Proof of Address
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Utility bills, bank statements, or rental agreements.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-doc shadow-lg border-0 rounded-3">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/psd4.jpg"
                      alt="Nationality Proof"
                      className="rounded-top"
                    />
                    <Card.Body>
                      <Card.Title className="text-info fw-bold">
                        Nationality Proof
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Your previous passport (if applicable).
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-doc shadow-lg border-0 rounded-3">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/psd5.jpg"
                      alt="Passport-Sized Photographs"
                      className="rounded-top"
                    />
                    <Card.Body>
                      <Card.Title className="text-danger fw-bold">
                        Passport-Sized Photographs
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Recent passport-sized photographs required specifications.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                {/* Adding New Cards */}
    
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-doc shadow-lg border-0 rounded-3">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/psd6.jpg"
                      alt="Proof of Employment"
                      className="rounded-top"
                    />
                    <Card.Body>
                      <Card.Title className="text-primary fw-bold">
                        Proof of Employment
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Employment letter or salary slips from the employer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-doc shadow-lg border-0 rounded-3">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/psd7.jpg"
                      alt="Financial Proof"
                      className="rounded-top"
                    />
                    <Card.Body>
                      <Card.Title className="text-success fw-bold">
                        Financial Proof
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Bank statements, income tax returns, etc.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                <Col sm={12} md={6} lg={3}>
                  <Card className="passport-doc shadow-lg border-0 rounded-3">
                    <Card.Img
                      variant="top"
                      src="assets/images/PassPort-img/psd8.jpg"
                      alt="Additional Proof (if necessary)"
                      className="rounded-top"
                    />
                    <Card.Body>
                      <Card.Title className="text-warning fw-bold">
                        Additional Proof
                      </Card.Title>
                      <Card.Text className="text-muted">
                        (if necessary) Any other document that might be necessary
                        depending on the circumstances.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
    
              <h4>Additional Considerations for Travel to Specific Countries</h4>
              <ul>
                <li>
                  <strong>USA:</strong>
                  <Flag code="US" style={{ width: 30, marginLeft: 10 }} />
                  Ensure you have a valid B1/B2 visa for tourism or business.
                </li>
                <li>
                  <strong>UK:</strong>{" "}
                  <Flag code="GB" style={{ width: 30, marginLeft: 10 }} />
                  Obtain a standard visitor visa unless exempt through prior
                  permissions.
                </li>
                <li>
                  <strong>UAE:</strong>{" "}
                  <Flag code="AE" style={{ width: 30, marginLeft: 10 }} />
                  Visa on arrival may apply for certain visa types; confirm the
                  details beforehand.
                </li>
                <li>
                  <strong>Australia:</strong>{" "}
                  <Flag code="AU" style={{ width: 30, marginLeft: 10 }} />
                  Apply for a tourist visa or relevant subclass before traveling.
                </li>
                <li>
                  <strong>Canada:</strong>{" "}
                  <Flag code="CA" style={{ width: 30, marginLeft: 10 }} />
                  Ensure you have a visitor visa or electronic travel authorization
                  (ETA).
                </li>
                <li>
                  <strong>Europe:</strong>{" "}
                  <Flag code="EU" style={{ width: 30, marginLeft: 10 }} />
                  Schengen visas cover multiple European countries; plan
                  accordingly.
                </li>
              </ul>
    
              <h4>Renewing Your Indian Passport</h4>
              <div className="mb-4">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start">
                    <FaLock className="text-danger me-3" size={20} />
                    <span>
                      A renewed passport will have a new expiration date but the
                      same personal information as your previous passport.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <FaCopy className="text-info me-3" size={20} />
                    <span>
                      Ensure you submit the original passport along with the
                      completed renewal application and payment.
                    </span>
                  </li>
                </ul>
              </div>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a
                    href="https://passportindia.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Passport Seva Website
                  </a>
                </li>
              </ul>
            </div>
          ),
        },
  ];

  return (
    <Container>
      <Row>
        <Col sm={12}>
          {loading ? (
            <Skeleton height={30} className="mb-4" />
          ) : (
            <h1>{sections[0].title}</h1>
          )}
          <div>
            {loading ? (
              <Skeleton count={5} height={10} className="mb-2" />
            ) : (
              sections[0].content
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Passport;
