import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton"; // Importing Skeleton for loading effect
import A from "./A";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulates loading time of 1 second
    return () => clearTimeout(timer);
  }, []);

  const textStyle = {
    color: "#333333",
    fontFamily: "'Lora', serif",
    fontSize: "1.3rem",
  };

  const headingStyle = {
    color: "#1D3557",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.5rem",
    fontWeight: "700",
  };

  const buttonStyle = {
    backgroundColor: "#0A74DA",
    borderColor: "#0A74DA",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.1rem",
    padding: "12px 30px",
    letterSpacing: "1px",
    borderRadius: "25px",
  };

  return (
    <div className="vi" style={{ opacity: '0.9' }}>
      <Container>
        <section className="about py-5 bg-light">
          {loading ? (
            <Skeleton height={80} className="mb-4" />
          ) : (
            <h2 
              className="text-center text-primary display-5 fw-semibold mb-4" 
              style={headingStyle}
            >
              Welcome to <span className="text-dark">Heman Immigration</span>
            </h2>
          )}
          {loading ? (
            <Skeleton height={40} count={2} className="mb-4" />
          ) : (
            <p className="text-center text-muted fs-5 mb-5" style={textStyle}>
              Your Trusted Partner for Seamless Global Relocation
            </p>
          )}
          <Row className="justify-content-center">
            <Col md={10} lg={12}>
              <div className="card border-0 shadow-lg rounded-lg">
                {loading ? (
                  <Skeleton height={400} className="rounded-top" />
                ) : (
                  <img
                    src="assets/images/about/intro.jpg"
                    className="card-img-top rounded-top"
                    alt="Heman Immigration"
                    style={{
                      height: "400px",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div className="card-body p-4">
                  {loading ? (
                    <>
                      <Skeleton count={3} height={25} style={textStyle} />
                      <Skeleton height={50} style={{...textStyle, marginTop: '15px'}} />
                    </>
                  ) : (
                    <>
                      <p className="fs-5 text-muted mb-3" style={textStyle}>
                        At <strong>Heman Immigration</strong>, we help simplify your
                        global journey by offering comprehensive immigration and
                        relocation services. Whether you're relocating for work,
                        study, or personal reasons, we manage everything for
                        you—visa processing, travel arrangements, accommodation, and
                        more.
                      </p>
                      <p className="fs-5 text-muted mb-3" style={textStyle}>
                        Our expert team specializes in seamless relocations to
                        countries like the U.S., UK, Canada, Australia, and others.
                        From your initial visa application to your arrival, we make
                        your move efficient and worry-free.
                      </p>
                      <p className="fs-5 text-muted" style={textStyle}>
                        With years of experience and dedication, we’re here to
                        ensure every step of your relocation process is handled with
                        precision and care, allowing you to focus on your new
                        beginning.
                      </p>
                    </>
                  )}
                  <div className="text-center mt-4">
                    {loading ? (
                      <Skeleton height={50} width={200} style={{ borderRadius: '25px' }} />
                    ) : (
                      <button className="btn" style={buttonStyle}>
                        Start Your Journey
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="Purpose mb-5">
          {loading ? (
            <Skeleton height={50} className="text-center mb-4" />
          ) : (
            <h2 className="SideHeading text-center display-4" style={headingStyle}>
              Our Purpose: Your Gateway to Global Opportunities
            </h2>
          )}
          <Row className="align-items-center">
            <Col md={6}>
              {loading ? (
                <Skeleton count={8} style={textStyle} />
              ) : (
                <p className="paragraph " style={textStyle}>
                  At <strong>Heman Immigration Private Limited</strong>, our
                  purpose is to make global opportunities accessible to all by
                  simplifying the complexities of immigration and relocation.
                  Moving abroad can be overwhelming, but we are here to make the
                  process smoother and less stressful. We provide expert guidance,
                  clear advice, and professional support at every stage of your
                  journey. Whether you are relocating for career advancement,
                  seeking educational opportunities, or reuniting with loved ones,
                  we aim to break down the barriers of global mobility. We believe
                  that international transitions should be empowering, not
                  daunting. Our goal is to connect individuals and businesses with
                  the opportunities they deserve, ensuring that the process is as
                  seamless and efficient as possible. We focus on offering
                  personalized solutions that align with your unique goals. With
                  Heman Immigration Private Limited, you will have the tools,
                  resources, and support needed to pursue your dreams, making
                  global possibilities easier to attain.
                </p>
              )}
            </Col>
            <Col md={6}>
              {loading ? (
                <Skeleton height={450} className="ph" />
              ) : (
                <Image
                  src="assets/images/about/purpose.jpg"
                  alt="Purpose"
                  fluid
                  className="ph"
                  id="img"
                  style={{
                    width: "100%",
                    maxHeight: '450px',
                    objectFit: "cover",
                  }}
                />
              )}
            </Col>
          </Row>
        </section>

        <section className="Vision mb-5">
          {loading ? (
            <Skeleton height={50} className="text-center mb-4" />
          ) : (
            <h2 className="SideHeading text-center display-4" style={headingStyle}>
              Our Vision: Redefining Your Global Journey
            </h2>
          )}
          <Row className="align-items-center">
            <Col md={6}>
              {loading ? (
                <Skeleton height={450} className="ph" />
              ) : (
                <Image
                  src="assets/images/about/vison.webp"
                  alt="Vision"
                  fluid
                  className="ph"
                  id="img"
                  style={{
                    width: "100%",
                    maxHeight: '450px',
                    objectFit: "cover",
                  }}
                />
              )}
            </Col>
            <Col md={6}>
              {loading ? (
                <Skeleton count={8} style={textStyle} />
              ) : (
                <p className="paragraph " style={textStyle}>
                  Vision At Heman Immigration Private Limited, our vision is to
                  become the leading provider of immigration, travel, and
                  relocation services, recognized for excellence and customer
                  satisfaction. We aspire to set new industry standards by
                  delivering personalized, timely solutions that address the
                  unique needs of every individual, family, and business we serve.
                  Our aim is to make the immigration process as simple and
                  stress-free as possible, empowering our clients with the tools
                  and support necessary to navigate their global journey. We
                  envision a future where the relocation process isn’t just about
                  fulfilling paperwork and procedural requirements, but about
                  unlocking new opportunities and connections for growth and
                  success. Through constant innovation and a commitment to
                  exceptional service, we aim to make your transition to a new
                  country an empowering and smooth experience. With our expertise
                  and dedication, Heman Immigration Private Limited is
                  transforming the way people relocate, with a focus on empowering
                  lives and careers worldwide.
                </p>
              )}
            </Col>
          </Row>
        </section>

        <section className="Mission mb-5">
          {loading ? (
            <Skeleton height={50} className="text-center mb-4" />
          ) : (
            <h2 className="SideHeading text-center display-4" style={headingStyle}>
              Our Mission: Making Your Global Transition Effortless
            </h2>
          )}
          <Row className="align-items-center">
            <Col md={6}>
              {loading ? (
                <Skeleton count={8} style={textStyle} />
              ) : (
                <p className="paragraph " style={textStyle}>
                  At <strong>Heman Immigration Private Limited</strong>, our
                  mission is to make your immigration and relocation journey
                  seamless, stress-free, and completely hassle-free. We provide
                  end-to-end support whether you’re moving for work, study, or
                  family reunification. Our team is dedicated to offering tailored
                  assistance for every aspect of your global move, ensuring that
                  no detail is overlooked. With a focus on reliability and
                  excellence, we ensure your journey to a new destination is
                  successful, smooth, and well-supported at every step.
                  <br />
                  <strong>Our Core Services:</strong>
                  <ListGroup className="no-border">
                    <ListGroup.Item className="no-border">
                      <strong>Expert Immigration Consultation:</strong> Get
                      personalized guidance from experienced consultants.
                    </ListGroup.Item>
                    <ListGroup.Item className="no-border">
                      <strong>Comprehensive Travel Arrangements:</strong> From
                      flight bookings to transportation, we've got you covered.
                    </ListGroup.Item>
                    <ListGroup.Item className="no-border">
                      <strong>Tailored Insurance Solutions:</strong> Enjoy travel
                      and health insurance that meets all your needs.
                    </ListGroup.Item>
                  </ListGroup>
                </p>
              )}
            </Col>
            <Col md={6}>
              {loading ? (
                <Skeleton height={450} className="ph" />
              ) : (
                <Image
                  src="assets/images/about/mission.webp"
                  alt="Mission"
                  fluid
                  className="ph"
                  id="img"
                  style={{
                    width: "100%",
                    maxHeight: '450px',
                    objectFit: "cover",
                  }}
                />
              )}
            </Col>
          </Row>
        </section>
        <A />
      </Container>
    </div>
  );
};

export default About;