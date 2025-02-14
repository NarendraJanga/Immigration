import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Flag from "react-world-flags";
import { useNavigate } from "react-router-dom";

const NameFlag = () => {
  const countryFlags = {
    USA: "US",
    India: "IN",
    UK: "GB",
    Canada: "CA",
    Australia: "AU",
    UAE: "AE",
    Europe: "EU",
  };

  const [selectedCountryApplying, setSelectedCountryApplying] = useState("");
  const [selectedCountryGoing, setSelectedCountryGoing] = useState("");
  const [showDropdown, setShowDropdown] = useState({
    applying: false,
    going: false,
  });

  const navigate = useNavigate();

  const handleSelect = (type, country) => {
    if (!country) return;
    if (type === "applying") {
      setSelectedCountryApplying(country);
    } else {
      setSelectedCountryGoing(country);
    }
    setShowDropdown({ ...showDropdown, [type]: false });
  };

  const renderDropdown = (label, selectedCountry, type) => {
    const countriesToDisplay =
      type === "applying"
        ? ["India"]
        : Object.keys(countryFlags).filter((country) => country !== "India");

    return (
      <Row className="mb-4">
        <Col>
          <h4 className="apply">{label}</h4>
          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle w-100"
              type="button"
              id={`dropdown-${type}`}
              data-bs-toggle="dropdown"
              aria-expanded={showDropdown[type] ? "true" : "false"}
              onClick={() =>
                setShowDropdown((prev) => ({
                  ...prev,
                  [type]: !prev[type],
                }))
              }
            >
              {selectedCountry ? (
                <>
                  <Flag
                    code={countryFlags[selectedCountry]}
                    style={{ width: 20, height: 15, marginRight: 10 }}
                  />
                  {selectedCountry}
                </>
              ) : (
                "Select Country"
              )}
            </button>
            <ul
              className={`dropdown-menu ${showDropdown[type] ? "show" : ""}`}
              aria-labelledby={`dropdown-${type}`}
            >
              {countriesToDisplay.map((country) => (
                <li key={country}>
                  <a
                    className="dropdown-item"
                    href="#!"
                    onClick={() => handleSelect(type, country)}
                  >
                    <Flag
                      code={countryFlags[country]}
                      style={{ width: 20, height: 15, marginRight: 10 }}
                    />
                    {country}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    );
  };

  const handleSubmit = () => {
    const destination = `/destinations/${selectedCountryApplying}-${selectedCountryGoing}`;
    navigate(destination);
  };

  return (
    <Container className="text-center py-5 nameflag">
      <Row className="mb-4">
        <Col>
          <h3>Choose Your Country</h3>
        </Col>
      </Row>

      {renderDropdown("I'm applying from", selectedCountryApplying, "applying")}
      {renderDropdown("and I'm going to", selectedCountryGoing, "going")}

      <Row>
        <Col className="text-center">
          <Button onClick={handleSubmit}>Take Me To The Website →</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NameFlag;
