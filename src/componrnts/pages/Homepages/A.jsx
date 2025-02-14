import React from "react";
import { Row, Col, ListGroup, Button, Card } from "react-bootstrap";
import {
  FaPlane,
  FaBed,
  FaShieldAlt,
  FaPassport,
  FaGlobe,
} from "react-icons/fa";

const A = () => {
  return (
    <div className="main-container">
      <section className="services-section">
        <h4 className="section-title">
          <FaPassport className="icon" /> Our Services
        </h4>
        <Row>
          <Col md={12}>
            <ListGroup>
              <ListGroup.Item className="service-item">
                <h5 className="item-title">Immigration Services</h5>
                <ul className="service-list">
                  <li>
                    <strong>H1B Filing:</strong> Including amendments,
                    transfers, and sponsorship nominations.
                  </li>
                  <li>
                    <strong>Visa Stamping:</strong> H & L visas, business visas,
                    visitor visas, and student visas.
                  </li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item className="service-item">
                <h5 className="item-title">Travel & Accommodation Services</h5>
                <ul className="service-list">
                  <li>
                    <FaPlane className="icon" style={{ color: "#1f77d0" }} />{" "}
                    <strong>Ticketing Services:</strong> Domestic and
                    international flights tailored to your schedule.
                  </li>
                  <li>
                    <FaBed className="icon" style={{ color: "#1f77d0" }} />{" "}
                    <strong>Hotel Accommodation:</strong> Reliable stays in
                    comfortable hotels.
                  </li>
                  <li>
                    <FaShieldAlt
                      className="icon"
                      style={{ color: "#1f77d0" }}
                    />{" "}
                    <strong>Insurance:</strong> Travel and health insurance for
                    safety and peace of mind.
                  </li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </section>

      <section className="choose-us-section">
        <h4 className="section-title">Why Choose Us?</h4>
        <Row>
          <Col md={12}>
            <ListGroup>
              <ListGroup.Item className="highlight-item">
                <FaPassport className="icon-large" />
                Comprehensive immigration, travel, and relocation services.
              </ListGroup.Item>
              <ListGroup.Item className="highlight-item">
                <FaGlobe className="icon-large" />
                Tailored services to suit every client’s unique journey.
              </ListGroup.Item>
              <ListGroup.Item className="highlight-item">
                <FaBed className="icon-large" />
                Expertise in U.S., UK, Canada, Australia, and beyond.
              </ListGroup.Item>
              <ListGroup.Item className="highlight-item">
                <FaPlane className="icon-large" />
                Client-centered approach for seamless success.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </section>

      <section>
        <Card className="journey-card">
          <div className="row g-0">
            <div className="col-lg-6 p-3">
              <h3>Start Your Journey with Heman Immigration</h3>
              <p>
                Ready to take the first step toward your global ambitions?
                Whether you're navigating the U.S. immigration process, planning
                your stay abroad, or booking your international travel, we are
                here to help. Contact us today to discover how we can provide
                tailored solutions, simplify your journey, and help turn your
                global dreams into a reality!
              </p>
              <Button
                variant="success"
                className=" btn-link btn-lg bg-info link-underline-opacity-75-hover"
              >
                Get Started
              </Button>
            </div>
            <div className="col-lg-6 p-3">
              <img src="assets/images/about/start.jpg" id="img" alt="Journey" />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default A;
