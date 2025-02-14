import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  OverlayTrigger,
  Popover,
  Image,
  Form,
  InputGroup,
} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const Careers = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  const headerBannerStyle = {
    backgroundColor: "#2C3E50",
    color: "#fff",
    padding: "80px 0",
    textAlign: "center",
    borderBottom: "5px solid #3498DB",
  };

  const headingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "30px",
  };

  const subheadingStyle = {
    fontFamily: "'Lora', serif",
    fontSize: "1.4rem",
    marginBottom: "30px",
  };

  const jobOpenings = [
    {
      title: "Visa Consultant",
      description:
        "Guide clients in securing visas, assess their eligibility, and provide advice on visa types and documentation requirements.",
    },
    {
      title: "Immigration Officer",
      description:
        "Evaluate and assess immigration applications, ensuring compliance with legal regulations and offering solutions for complex cases.",
    },
    {
      title: "Relocation Specialist",
      description:
        "Help clients transition smoothly when relocating to new countries, offering support with housing, schooling, and general relocation services.",
    },
    {
      title: "Legal Advisor - Immigration",
      description:
        "Provide legal advice on immigration matters, ensure the company's compliance with immigration law, and handle cases effectively.",
    },
    {
      title: "Customer Support Executive",
      description:
        "Handle customer queries, ensure client satisfaction, and guide clients through the application processes and necessary documents.",
    },
    {
      title: "Business Development Manager",
      description:
        "Identify business growth opportunities within immigration services, building partnerships and generating new leads for the company.",
    },
  ];

  const renderSkeleton = () => (
    <>
      <Skeleton height={80} count={1} />
      <Skeleton height={40} count={1} />
      <Skeleton height={60} count={1} style={{ margin: "20px 0" }} />
      <Row className="justify-content-center">
        {[...Array(3)].map((_, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Skeleton height={220} />
          </Col>
        ))}
      </Row>
    </>
  );

  const renderContent = () => (
    <>
      <h1 style={headingStyle}>Join Our Team</h1>
      <p style={subheadingStyle}>
        Join our mission-driven organization at Heman Immigration Private
        Limited. We’re growing, and we need passionate individuals!
      </p>
      <h2
        style={{
          ...headingStyle,
          fontSize: "2.5rem",
          color: "#2C3E50",
          textAlign: "center",
        }}
      >
        Current Job Openings
      </h2>
      <Row className="justify-content-center">
        {jobOpenings.map((job, i) => (
          <Col md={4} className="mb-4" key={i}>
            <Card className="career-card">
              <Card.Body>
                <OverlayTrigger
                  trigger="hover"
                  placement="top"
                  overlay={
                    <Popover id={`popover-${job.title}`}>
                      <Popover.Body>
                        <strong>Responsibilities:</strong> Manage customer
                        relationships, provide guidance on procedures, and
                        resolve issues promptly. <br />
                        <strong>Qualifications:</strong> Excellent communication
                        skills, ability to work in a dynamic environment, and
                        knowledge of immigration services.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Card.Title
                    className="career-title"
                    style={{ color: "#3498DB", fontWeight: "600" }}
                  >
                    {job.title}
                  </Card.Title>
                </OverlayTrigger>
                <Card.Text
                  className="career-text"
                  style={{
                    color: "#777",
                    fontSize: "1rem",
                    marginBottom: "20px",
                  }}
                >
                  {job.description}
                </Card.Text>
                <Button
                  style={{
                    backgroundColor: "#3498DB",
                    color: "#fff",
                    borderRadius: "50px",
                    border: "none",
                    fontSize: "1.2rem",
                    padding: "12px 30px",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );

  return (
    <div>
      {/* Header Section */}
      <div style={headerBannerStyle}>
        <Container>{loading ? renderSkeleton() : renderContent()}</Container>
      </div>

      {/* Continue adding other sections in a similar way... */}
      {/* For demonstration, we can replicate this for other sections */}
      <Container style={{ padding: "60px 0" }}>
        {loading ? (
          <Skeleton height={60} count={1} />
        ) : (
          <h3
            style={{
              ...headingStyle,
              fontSize: "2rem",
              color: "#2C3E50",
              textAlign: "center",
            }}
          >
            Our Core Values
          </h3>
        )}

        {loading ? (
          <Skeleton height={250} count={1} />
        ) : (
          <Row className="mb-5">
            <Col md={6}>
              <ul
                className="core-values-list"
                style={{ listStyleType: "square", color: "#333" }}
              >
                <li className="fs-6">
                  Integrity: We strive to ensure honesty and transparency in
                  everything we do.
                </li>
                <li className="fs-6">
                  Customer Focus: We put our clients at the heart of our
                  business, offering personalized solutions.
                </li>
                <li className="fs-6">
                  Excellence: We commit to delivering the highest standards of
                  service and professionalism.
                </li>
                <li className="fs-6">
                  Collaboration: We value teamwork and open communication as
                  essential to success.
                </li>
                <li className="fs-6">
                  Innovation: We leverage creativity and technology to enhance
                  solutions and experiences.
                </li>
                <li className="fs-6">
                  Accountability: We take responsibility for our actions and
                  their outcomes.
                </li>
                <li className="fs-6">
                  Respect: We cultivate a culture of inclusion, valuing
                  diversity and fostering a positive work environment.
                </li>
              </ul>
            </Col>
            <Col md={5}>
              {loading ? (
                <Skeleton height={450} />
              ) : (
                <Image
                  src="assets/images/Carrer/core.jpg"
                  alt="Core Values"
                  fluid
                  className="rounded-img"
                  width={400}
                  height={600}
                />
              )}
            </Col>
          </Row>
        )}

        {/* Employee Benefits Section */}
        {loading ? (
          <Skeleton height={60} count={1} style={{ margin: "20px 0" }} />
        ) : (
          <h3
            style={{
              ...headingStyle,
              fontSize: "2rem",
              color: "#2C3E50",
              textAlign: "center",
            }}
          >
            Employee Benefits
          </h3>
        )}
        <Row className="mb-5">
          <Col md={12}>
            <ul
              className="career-benefits-list"
              style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#555" }}
            >
              <li>
                <strong>Health & Wellness:</strong> Comprehensive medical
                insurance and wellness programs to ensure the well-being of our
                employees.
              </li>
              <li>
                <strong>Work-Life Balance:</strong> Flexible working hours and
                remote work opportunities to maintain a healthy balance.
              </li>
              <li>
                <strong>Professional Development:</strong> Access to training
                and development programs to support career growth and
                skill-building.
              </li>
              <li>
                <strong>Paid Time Off:</strong> Generous paid vacation and sick
                leave to ensure personal time for rest and recovery.
              </li>
              <li>
                <strong>Retirement Plans:</strong> We offer competitive
                retirement plans to ensure financial security in the future.
              </li>
            </ul>
          </Col>
        </Row>

        {/* Achievements Section */}
        {loading ? (
          <Skeleton height={60} count={1} style={{ margin: "20px 0" }} />
        ) : (
          <h3
            style={{
              ...headingStyle,
              fontSize: "2rem",
              color: "#2C3E50",
              textAlign: "center",
            }}
          >
            Our Achievements
          </h3>
        )}
        <Row className="mb-5">
          {loading
            ? [...Array(3)].map((_, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Skeleton height={220} />
                </Col>
              ))
            : ["ac1", "ac2", "ac3", "ac4", "ac5", "ac6"].map((ac, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card className="career-card">
                    <Card.Body>
                      <Image
                        src={`assets/images/Carrer/${ac}.jpg`}
                        rounded
                        className="achievement-img"
                        width={100}
                        height={100}
                      />
                      <h5
                        style={{
                          fontWeight: "600",
                          color: "#2C3E50",
                          marginTop: "15px",
                        }}
                      >
                        {`Award for Excellence - ${index + 1}`}
                      </h5>
                      <p style={{ color: "#777", fontStyle: "italic" }}>
                        Year: {2023 - index}
                      </p>
                      <p>
                        Recognized for providing exceptional service and
                        delivering outstanding performance.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
        </Row>

        {/* Career Growth and Development Section */}
        {loading ? (
          <Skeleton height={60} count={1} style={{ margin: "20px 0" }} />
        ) : (
          <h3
            style={{
              ...headingStyle,
              fontSize: "2rem",
              color: "#2C3E50",
              textAlign: "center",
            }}
          >
            Career Growth and Development
          </h3>
        )}
        <Row className="mb-5">
          <Col md={12}>
            {loading ? (
              <Skeleton count={3} style={{ marginBottom: "10px" }} />
            ) : (
              <p
                style={{
                  color: "#777",
                  textAlign: "center",
                  fontSize: "1.3rem",
                  lineHeight: "1.6",
                }}
              >
                At Heman Immigration Private Limited, we believe in fostering an
                environment where our team members can grow, innovate, and
                succeed. Our career development opportunities include:
              </p>
            )}
            {loading ? (
              <Skeleton count={5} style={{ marginBottom: "10px" }} />
            ) : (
              <ul
                className="career-growth-list"
                style={{ color: "#444", listStyleType: "none", padding: "0" }}
              >
                <li>
                  Ongoing mentorship from experienced leaders and professionals.
                </li>
                <li>
                  Access to a wide range of skill-building programs and
                  workshops tailored to career goals.
                </li>
                <li>
                  A dynamic work environment that challenges you to reach your
                  full potential.
                </li>
                <li>
                  Clear career progression tracks based on performance and
                  growth.
                </li>
                <li>
                  Regular performance feedback and support for further
                  development.
                </li>
              </ul>
            )}
          </Col>
        </Row>

        {/* How to Apply Section */}
        {loading ? (
          <Skeleton height={60} count={1} style={{ margin: "20px 0" }} />
        ) : (
          <h3
            style={{
              ...headingStyle,
              fontSize: "2.5rem",
              color: "#2C3E50",
              textAlign: "center",
              marginBottom: "2rem",
              fontWeight: "600",
            }}
          >
            How to Apply
          </h3>
        )}
        <Row className="mb-5">
          <Col md={12}>
            {loading ? (
              <Skeleton
                height={40}
                count={1}
                style={{ marginBottom: "2rem" }}
              />
            ) : (
              <p
                style={{
                  ...subheadingStyle,
                  textAlign: "center",
                  fontSize: "1.1rem",
                  marginBottom: "2rem",
                  color: "#333",
                }}
              >
                Interested in joining our team? It’s simple—follow these steps
                and submit your application:
              </p>
            )}

            <Form className="apply-form">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter your full name"
                  aria-label="Enter your full name"
                  aria-describedby="basic-addon2"
                  required
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "2px solid #E1E1E1",
                    fontSize: "1.1rem",
                  }}
                  disabled={loading}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  required
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "2px solid #E1E1E1",
                    fontSize: "1.1rem",
                  }}
                  disabled={loading}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Phone number (optional)"
                  aria-label="Phone number"
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "2px solid #E1E1E1",
                    fontSize: "1.1rem",
                  }}
                  disabled={loading}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Attach your resume (PDF only)"
                  type="file"
                  required
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "2px solid #E1E1E1",
                    fontSize: "1.1rem",
                  }}
                  disabled={loading}
                />
              </InputGroup>

              <Button
                style={{
                  backgroundColor: "#FDCB82",
                  color: "#fff",
                  borderRadius: "25px",
                  border: "none",
                  fontSize: "1.2rem",
                  padding: "10px 25px",
                  margin: "20px 0",
                  opacity: loading ? 0.5 : 1,
                }}
                disabled={loading}
              >
                Submit Application
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Careers;
