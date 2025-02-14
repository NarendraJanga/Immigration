import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapPin } from "react-icons/fa";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const initialContactDetails = [
  {
    title: "Send Us Mail",
    icon: <FaEnvelope size={30} />,
    image: "assets/images/contact/c1.jpg",
    alt: "Send Mail",
    content: (
      <>
        <a href="mailto:services@immi-nation.com">services@immi-nation.com</a>
      </>
    ),
  },
  {
    title: "Call Us Anytime",
    icon: <FaPhoneAlt size={30} />,
    image: "assets/images/contact/c2.jpg",
    alt: "Call Us",
    content: (
      <>
        <a href="tel:+919676567121">(+91) 96765 67121</a>
        <br />
        <a href="tel:+919533840632">(+91) 95338 40632</a>
      </>
    ),
  },
  {
    title: "Visit Our Office",
    icon: <FaMapPin size={30} />,
    image: "assets/images/contact/c4.jpg",
    alt: "Visit Us",
    content: (
      <>
        C/o B Vishnu Vardhan Road No.15, Venkateswara Nagar, Jagathgirigutta,
        Hyderabad - 500037
      </>
    ),
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second loading
    return () => clearTimeout(timer);
  }, []);

  const renderSkeletonHeader = () => (
    <Skeleton height={300} style={{ marginBottom: "20px" }} />
  );

  const renderHeader = () => (
    <div
      className="page-header"
      style={{
        backgroundImage: 'url("assets/images/Homebanners/bg-12.jpg")',
        backgroundSize: "100% 100%",
        width: "100%",
        height: "500px",
      }}
    >
      <div className="header-title">Contact Us:</div>
    </div>
  );

  const renderMap = () => (
    <div className="google-map-box mt-4 kkk">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.128286850845!2d78.42064287516756!3d17.501388483405343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMwJzA1LjAiTiA3OMKwMjUnMjMuNiJF!5e0!3m2!1sen!2sin!4v1733817528425!5m2!1sen!2sin"
        className="google-map rounded shadow-sm"
        allowFullScreen
        style={{ border: "0", width: "100%", height: "500px" }}
      />
    </div>
  );

  const renderContactForm = () => (
    <Form action="contact.php" method="post">
      <Row>
        <Col lg={6} className="mb-3">
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              placeholder="Name*"
              name="name"
              required
              className="rounded-pill"
            />
          </Form.Group>
        </Col>
        <Col lg={6} className="mb-3">
          <Form.Group controlId="phone">
            <Form.Control
              type="tel"
              placeholder="Phone No"
              name="phone"
              className="rounded-pill"
            />
          </Form.Group>
        </Col>
        <Col lg={6} className="mb-3">
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="E-mail*"
              name="email"
              required
              className="rounded-pill"
            />
          </Form.Group>
        </Col>
        <Col lg={6} className="mb-3">
          <Form.Group controlId="subject">
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              className="rounded-pill"
            />
          </Form.Group>
        </Col>
        <Col lg={12} className="mb-3">
          <Form.Group controlId="message">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Your Message"
              name="message"
              className="rounded"
              style={{ resize: "none" }}
            />
          </Form.Group>
        </Col>
        <Col lg={12} className="text-center">
          <Button
            variant="primary"
            type="submit"
            className="btn px-5 rounded-pill"
          >
            Send Message
          </Button>
        </Col>
      </Row>
    </Form>
  );

  const renderContactCards = () => (
    <Row>
      {initialContactDetails.map((contact, index) => (
        <Col key={index} lg={4} md={6} className="mb-2">
          <Card className="contact-card shadow">
            <Card.Img variant="top" src={contact.image} alt={contact.alt} />
            <Card.Body>
              <Card.Text>{contact.icon}</Card.Text>
              <Card.Title>{contact.title}</Card.Title>
              <Card.Text>{contact.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  const renderSkeletonContactCards = () => (
    <Row>
      {[1, 2, 3].map((_, index) => (
        <Col key={index} lg={4} md={6} className="mb-2">
          <Card className="contact-card shadow">
            <Skeleton height={50} />
            <Card.Body>
              <Skeleton height={20} count={3} />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="contact-section">
      <div className="content-wrapper">
        {loading ? renderSkeletonHeader() : renderHeader()}

        <section
          className="canfin"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Container id="mkl">
            {loading ? <Skeleton height={200} /> : renderMap()}
            <Container className="mt-2 kk">
              <Row className="justify-content-center">
                <Col lg={12}>
                  <div className="cc border rounded shadow-lg bg-white">
                    <h2 className="text-center fs-4">Contact Us</h2>
                    {loading ? (
                      <Skeleton count={6} height={40} />
                    ) : (
                      renderContactForm()
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>

        <section className="contact-info-wrapper py-5">
          <Container>
            {loading ? renderSkeletonContactCards() : renderContactCards()}
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Contact;
