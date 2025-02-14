import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import {
  FaArrowAltCircleRight,
  FaCcVisa,
  FaCheck,
  FaPaperPlane,
  FaThumbsUp,
  FaUserEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const VisaDetails = () => {
  const [selectedVisa, setSelectedVisa] = useState("Business Visa");

  const visaDetailsContent = {
    "Business Visa": {
      title: "Business Visa",
      description:
        "United Kingdom Allows you Easy Setting up Your Business in Country",
      points: [
        "Setup Your Business in other Country",
        "Grow Your Business to Next Level",
        "Get in 2 Years Residence",
        "Sponsor Your Spouse",
        "Get 30% Tax Reductions",
      ],
      image: "assets/images/Visa/business.jpg",
    },
    "Student Visa": {
      title: "Student Visa",
      description: "Study at the world’s best universities with ease.",
      points: [
        "Choose from thousands of courses",
        "Gain International Education",
        "Work part-time while studying",
        "Bring dependents along",
        "Post-study work opportunities",
      ],
      image: "assets/images/Visa/stu.jpg",
    },
    "Visitor Visa": {
      title: "Visitor Visa",
      description: "Explore new destinations with ease and flexibility.",
      points: [
        "Travel without Hassles",
        "Simple and Easy Processing",
        "Valid for Short-Term Stays",
        "Multiple Entry Options",
        "Great for Tourism and Family Visits",
      ],
      image: "assets/images/Visa/Vistor.jpg",
    },
    "H&L Visa Services": {
      title: "H&L Visa Services",
      description: "Secure your employment opportunities in top corporations.",
      points: [
        "Facilitate Work Visas for Top Industries",
        "Guidance on H1B and L1 Visa Processing",
        "High Approval Rates",
        "Comprehensive Support for Documentation",
        "Post-Arrival Services Included",
      ],
      image: "assets/images/Visa/h&l.jpg",
    },
  };

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
  };

  const { title, description, points, image } =
    visaDetailsContent[selectedVisa];

  return (
    <Container>
      <section className="visaDetails fadeIn">
        <div className="banner-container">
          <div className="banner-overlay">
            <div className="banner-content">
              <img
                src="assets/images/Visa/vvisa.jpg"
                alt="Banner"
                className="banner-image"
              />
              <div className="overlay"></div>
              <div className="text-container">
                <h3 className="banner-title">Welcome to Our Services</h3>
                <p className="banner-description">
                  Explore amazing opportunities with us.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Row>
          {/* Visa Details */}
          <Col xl={8} lg={7}>
            <div className="visaDetailsLeft animate__animated animate__fadeIn">
              <Row>
                <Col xl={6}>
                  <div className="visaDetailsImg">
                    <img src={image} alt={title} />
                  </div>
                </Col>
                <Col xl={6}>
                  <div className="visaDetailsPointsBox">
                    <h3
                      className="visaDetailsPointsBoxTitle"
                      style={{ color: "red" }}
                    >
                      {title}
                    </h3>
                    <p className="visaDetailsPointsBoxText">{description}</p>
                    <ListGroup
                      variant="flush"
                      className="visaDetailsPointsList text-muted"
                    >
                      {points.map((point, index) => (
                        <ListGroup.Item
                          key={index}
                          className="animate__animated animate__fadeIn"
                        >
                          <div className="icon">
                            <FaCheck />
                          </div>
                          <div className="text">
                            <p>{point}</p>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Col>
              </Row>

              <p className="visaDetailsText1 text-muted">
                Learn more about our {title}. We provide expert guidance and
                comprehensive services for your application process.
              </p>

              <div className="visa-details__visa-process">
                <h3 className="visa-details__visa-process-title">
                  Online Visa Process
                </h3>
                <ul
                  className="visa-details__visa-process-list list-unstyled"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <li className="animate__animated animate__fadeIn">
                    <div className="icon-box">
                      <div className="icon special-icon">
                        <FaArrowAltCircleRight />
                      </div>
                    </div>
                    <div className="title">
                      <p>
                        Select <br />
                        Visa Type
                      </p>
                    </div>
                  </li>
                  <li className="animate__animated animate__fadeIn">
                    <div className="icon-box">
                      <div className="icon special-icon">
                        <FaUserEdit />
                      </div>
                    </div>
                    <div className="title">
                      <p>
                        Fill <br />
                        Online Form
                      </p>
                    </div>
                  </li>
                  <li className="animate__animated animate__fadeIn">
                    <div className="icon-box">
                      <div className="icon special-icon">
                        <FaPaperPlane />
                      </div>
                    </div>
                    <div className="title">
                      <p>
                        Submit <br />
                        Application
                      </p>
                    </div>
                  </li>
                  <li className="animate__animated animate__fadeIn">
                    <div className="icon-box">
                      <div className="icon special-icon">
                        <FaCcVisa />
                      </div>
                    </div>
                    <div className="title">
                      <p>
                        Visa <br />
                        Processing
                      </p>
                    </div>
                  </li>
                  <li className="animate__animated animate__fadeIn">
                    <div className="icon-box">
                      <div className="icon special-icon">
                        <FaThumbsUp />
                      </div>
                    </div>
                    <div className="title">
                      <p>
                        Visa <br />
                        Approved
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="visa-details__btn-box">
                  <Link
                  to="https://indianvisaonline.gov.in/visa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn btn-outline-primary custom-btn">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          {/* Sidebar */}
          <Col xl={4} lg={5}>
            <div className="coachingDetailsSidebar">
              <div className="coachingDetailsServicesList">
                <ListGroup
                  variant="flush"
                  className="coachingDetailsServices bg-light border-0"
                >
                  {Object.keys(visaDetailsContent).map((visa, index) => (
                    <ListGroup.Item
                      key={index}
                      className={`animate__animated animate__fadeIn ${
                        visa === selectedVisa ? "bg-info text-white" : ""
                      }`}
                      onClick={() => handleVisaClick(visa)}
                    >
                      <Link to="#" className="text-dark">
                        {visa}
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>

              <div className="bannerOne">
                <div className="bannerOneShape1">
                  <img
                    src="assets/images/Visa/banner-one-shape-1.jpg"
                    alt="Banner"
                  />
                </div>
                <div
                  className="bannerOneBg"
                  style={{
                    backgroundImage:
                      "url(assets/images/Visa/banner-one-bg.jpg)",
                  }}
                ></div>
                <div className="bannerOneImg">
                  <img
                    src="assets/images/Visa/banner-one-img.jpg"
                    alt="Banner"
                  />
                </div>
                <h3 className="bannerOneTitle text-dark">
                  100%
                  <br /> Guarantee
                  <br /> Approval
                </h3>
                <div className="bannerOneBtnBox">
                  <Button
                    href="https://ieltsidpindia.com/?utm_source=google&utm_medium=cpc&utm_campaign=ielts&utm_term=ielts%20application%20form&gad_source=1&gclid=cj0kcqiaj9m7bhd1arisansiivdkhqvrfumnie8o1deey6jjggv4ygo5kraj0trgsxkxbgcykmgjqluaagy-ealw_wcb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="countriesDetailsDocuments">
                <div className="icon">
                  <span className="icon-pdf-file"></span>
                </div>
                <div className="content">
                  <h3>
                    <a
                      href="https://ieltsidpindia.com/?utm_source=google&utm_medium=cpc&utm_campaign=ielts&utm_term=ielts%20application%20form&gad_source=1&gclid=cj0kcqiaj9m7bhd1arisansiivdkhqvrfumnie8o1deey6jjggv4ygo5kraj0trgsxkxbgcykmgjqluaagy-ealw_wcb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IELTS Application Form
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default VisaDetails;
