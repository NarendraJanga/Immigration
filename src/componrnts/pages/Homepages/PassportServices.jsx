import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Card,
  Form,
  Accordion,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PassportServices = () => {
  return (
    <section className="mainpas">
      <Navbar
        id="navbar-header"
        bg="primary"
        variant="dark"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home" id="navbar-brand">
            Passport Services
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="nav-links" className="ms-auto">
              <Nav.Link href="#services" id="service-link">
                Services
              </Nav.Link>
              <Nav.Link href="#faq" id="faq-link">
                FAQs
              </Nav.Link>
              <Nav.Link href="#get-in-touch" id="contact-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="banner" className="bg-primary text-white text-center py-5">
        <h1 id="banner-heading">Welcome to Passport Services</h1>
        <p id="banner-text">
          Your one-stop solution for passport applications, renewals, and more.
        </p>
        <Button id="explore-btn" variant="light" href="#services">
          Explore Services
        </Button>
      </div>

      {/* Services Section */}
      <Container id="services" className="my-5">
        <h2 id="services-title" className="text-center mb-4">
          Our Services
        </h2>
        <Row className="g-4">
          {[
            {
              title: "New Passport Application",
              text: "Assistance with filling forms, document verification, and step-by-step guidance for first-time passport applicants.",
              img: "assets/images/PassPort/ps1.jpg",
            },
            {
              title: "Passport Renewal",
              text: "Seamless process for renewing your expired passport with minimal hassle and maximum efficiency.",
              img: "assets/images/PassPort/ps2.jpg",
            },
            {
              title: "Lost Passport Replacement",
              text: "Comprehensive support for reissuing passports that are lost or stolen, ensuring peace of mind.",
              img: "assets/images/PassPort/ps3.jpg",
            },
            {
              title: "Document Translation Services",
              text: "Accurate and certified translations of documents required for international applications.",
              img: "assets/images/PassPort/ps4.jpg",
            },
            {
              title: "Name and Address Changes",
              text: "Expert help for updating personal details in your passport to reflect recent changes.",
              img: "assets/images/PassPort/ps5.jpg",
            },
            {
              title: "Child Passport Services",
              text: "Specialized assistance with applications for minors and child-specific requirements.",
              img: "assets/images/PassPort/ps6.jpg",
            },
            {
              title: "Emergency Passport Services",
              text: "Rapid processing options for individuals who require a passport urgently due to emergencies.",
              img: "assets/images/PassPort/ps7.jpg",
            },
            {
              title: "Visa Consultation",
              text: "Guidance and consultation for visa-related requirements alongside your passport services.",
              img: "assets/images/PassPort/ps8.jpg",
            },
          ].map((service, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <Card id="service-card" className="h-100">
                <Card.Img variant="top" src={service.img} alt={service.title} />
                <Card.Body>
                  <Card.Title id="service-card-title">
                    {service.title}
                  </Card.Title>
                  <Card.Text id="service-card-text">{service.text}</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Why Choose Us Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          {[
            {
              title: "Expert Assistance",
              text: "Our team of experts provides top-notch guidance to make your application process smooth and efficient.",
            },
            {
              title: "Fast Processing",
              text: "We value your time and ensure your applications are processed swiftly and accurately.",
            },
            {
              title: "Affordable Rates",
              text: "Our services are competitively priced to ensure affordability for all our clients.",
            },
            {
              title: "Personalized Support",
              text: "We offer dedicated and personalized customer support tailored to your unique requirements.",
            },
            {
              title: "Global Reach",
              text: "We assist with international documentation, ensuring hassle-free global application services.",
            },
            {
              title: "Transparent Process",
              text: "Our processes are clear and transparent, ensuring you’re informed every step of the way.",
            },
          ].map((item, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* FAQ Section */}
      <Container id="faq" className="my-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {[
            {
              question: "What documents do I need for a new passport?",
              answer:
                "You will need proof of identity (such as a birth certificate or national ID), proof of address, and a completed application form.",
            },
            {
              question: "How long does it take to get a passport?",
              answer:
                "Processing times can vary depending on the type of service chosen, but standard applications usually take 2-4 weeks.",
            },
            {
              question: "Can I expedite my passport application?",
              answer:
                "Yes, expedited services are available for urgent cases. Additional fees may apply for faster processing.",
            },
            {
              question: "How do I report a lost passport?",
              answer:
                "You can report it online through the government portal or visit your nearest passport office for assistance.",
            },
            {
              question: "What is the process for a child passport?",
              answer:
                "Child passports require parental consent and additional documentation, such as the child's birth certificate.",
            },
            {
              question:
                "Do I need an appointment to visit the passport office?",
              answer:
                "Yes, scheduling an appointment is recommended to avoid long waits and ensure prompt service.",
            },
          ].map((faq, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      {/* Get in Touch Section */}
      <Container id="get-in-touch" className="my-5">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={12}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>How can we help?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message or inquiry here"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PassportServices;
