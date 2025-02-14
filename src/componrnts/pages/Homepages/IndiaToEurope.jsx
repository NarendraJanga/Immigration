import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
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

const IndiaToEurope = () => {
  const [sections] = useState([
    {
        id: "visa",
        title: "Visa Information",
        content: (
          <div>
            <Card
              style={{
                backgroundImage: "url(../assets/images/Visa-img/ban6.jpg)",
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
                Visa Information for Europe
              </h1>
            </Card>
      
            <Card
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
                  Types of Visas for Europe
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
                  Traveling to Europe requires a visa for most nationalities. It's crucial to select the appropriate visa depending on your purpose of visit, whether for tourism, study, or work.
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
              <h4 className="text-center mb-2">Common Visa Categories for Europe</h4>
              <Row>
                {[
                  {
                    title: "Schengen Visa",
                    description: "Allows travel to 26 Schengen countries for short stays.",
                    imgSrc: "../assets/images/Visa-img/h1.jpg",
                  },
                  {
                    title: "UK Visa",
                    description: "For traveling or residing in the United Kingdom.",
                    imgSrc: "../assets/images/Visa-img/h2.jpg",
                  },
                  {
                    title: "Student Visa",
                    description: "For studying in European universities.",
                    imgSrc: "../assets/images/Visa-img/h3.jpg",
                  },
                  {
                    title: "Work Visa",
                    description: "For employment in various European countries.",
                    imgSrc: "../assets/images/Visa-img/h4.jpg",
                  },
                  {
                    title: "Family Reunion Visa",
                    description: "For family members joining citizens or residents.",
                    imgSrc: "../assets/images/Visa-img/h5.jpg",
                  },
                  {
                    title: "Research Visa",
                    description: "For researchers and academic professionals.",
                    imgSrc: "../assets/images/Visa-img/h6.jpg",
                  },
                  {
                    title: "Business Visa",
                    description: "For business activities and meetings.",
                    imgSrc: "../assets/images/Visa-img/h7.jpg",
                  },
                  {
                    title: "Tourist Visa",
                    description: "For leisure and tourism purposes.",
                    imgSrc: "../assets/images/Visa-img/h8.jpg",
                  },
                ].map((visa, index) => (
                  <Col md={4} lg={3} className="mb-3" key={index}>
                    <Card className="visa-card">
                      <Card.Img
                        variant="top"
                        src={visa.imgSrc}
                        alt={visa.title}
                      />
                      <Card.Body>
                        <Card.Title>{visa.title}</Card.Title>
                        <Card.Text>{visa.description}</Card.Text>
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
                Depending on your visa category, the required documents may vary. Below is a list of documents typically needed:
              </p>
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <FaPassport className="text-success me-3" style={{ fontSize: "1.5rem" }} />
                  A valid passport with at least two blank pages. Ensure your passport has a validity of at least six months beyond your intended stay.
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FaClipboardCheck className="text-primary me-3" style={{ fontSize: "1.5rem" }} />
                  Completed visa application form for the specific visa type.
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FaRegFileAlt className="text-warning me-3" style={{ fontSize: "1.5rem" }} />
                  Appointment confirmation letter for your visa interview.
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FaReceipt className="text-info me-3" style={{ fontSize: "1.5rem" }} />
                  Payment receipt for the visa application fee.
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FaCamera className="text-danger me-3" style={{ fontSize: "1.5rem" }} />
                  Passport-sized photographs that meet the visa photo requirements.
                </li>
                <li className="list-group-item">
                  <FaRegFileAlt className="text-dark me-3" style={{ fontSize: "1.5rem" }} />
                  Supporting documents specific to your visa type, such as:
                  <ul className="list-group list-group-flush mt-2 ms-4">
                    <li className="list-group-item d-flex align-items-center">
                      <FaBriefcase className="text-success me-3" style={{ fontSize: "1.3rem" }} />
                      For Schengen Visa: Evidence of travel itinerary, accommodation, and sufficient funds.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <FaUniversity className="text-primary me-3" style={{ fontSize: "1.3rem" }} />
                      For Student Visa: Acceptance letter, proof of accommodation, and financial support.
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
                  title: "Demonstrate Financial Stability",
                  icon: FaWallet,
                  color: "text-warning",
                  text: "Prepare documents to prove financial means.",
                },
                {
                  title: "Be Prepared",
                  icon: FaLightbulb,
                  color: "text-danger",
                  text: "Know your travel details and purpose.",
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
                  If approved, your visa will be printed and attached to your passport.
                </li>
                <li className="list-group-item">
                  <FaClock className="text-warning me-2" />
                  Be patient if additional documents are requested.
                </li>
                <li className="list-group-item">
                  <FaTimesCircle className="text-danger me-2" />
                  If denied, you will receive an explanation with possible reasons.
                </li>
              </ul>
      
              <h4 className="mt-4">Common Reasons for Visa Denials</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <FaHome className="text-danger me-2" />
                  Lack of strong ties to your home country.
                </li>
                <li className="list-group-item">
                  <FaWallet className="text-danger me-2" />
                  Inadequate financial proof.
                </li>
                <li className="list-group-item">
                  <FaPenSquare className="text-danger me-2" />
                  False or incorrect information provided.
                </li>
                <li className="list-group-item">
                  <FaUndo className="text-danger me-2" />
                  Previous history of overstaying a visa.
                </li>
                <li className="list-group-item">
                  <FaFileAlt className="text-danger me-2" />
                  Not meeting specific visa category requirements.
                </li>
              </ul>
      
              <h4 className="mt-4">Tips for Avoiding Visa Denials</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <FaFileAlt className="text-success me-2" />
                  Ensure your documents are original and meet embassy guidelines.
                </li>
                <li className="list-group-item">
                  <FaFileAlt className="text-success me-2" />
                  Provide honest, complete information in your interview.
                </li>
                <li className="list-group-item">
                  <FaCalendarCheck className="text-success me-2" />
                  Present a well-planned itinerary with sufficient funding.
                </li>
                <li className="list-group-item">
                  <FaUsers className="text-success me-2" />
                  Show strong ties to your home country to indicate intent to return.
                </li>
              </ul>
            </div>
      
            <div className="container my-5">
              <div className="alert alert-info d-flex align-items-center" role="alert">
                <FaInfoCircle className="me-3" size={24} />
                <div>
                  <strong>Need more help?</strong> Visit{" "}
                  <a
                    href="https://www.eurovisas.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-bold"
                  >
                    Euro Visas
                  </a>{" "}
                  for further instructions and assistance with the visa process.
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
            <h3>Exploring Europe: Popular Destinations</h3>
            <img
              src="../assets/images/TourismImg/Ban6.jpg"
              alt="Europe Travel Banner"
              className="rounded w-100 mb-3"
              height="550"
            />
            <p>
              Europe is one of the most popular travel destinations, offering rich history, stunning architecture, and diverse cultures. It's a hub for art, history, and culinary experiences.
            </p>
            <Container>
              <h4>Top Cities to Visit</h4>
              <p>
                Each European city offers a unique experience. Here are some must-visit cities:
              </p>
              <Row xs={1} md={2} lg={3} className="g-4">
                {[
                  {
                    img: "../assets/images/TourismImg/te1.jpg",
                    title: "Paris",
                    text: "Known as the City of Light, Paris is famous for the Eiffel Tower, Notre-Dame Cathedral, and its rich art and culture.",
                  },
                  {
                    img: "../assets/images/TourismImg/te2.jpg",
                    title: "Rome",
                    text: "Rome is a treasure trove of ancient architecture and history, home to the Colosseum and Vatican City.",
                  },
                  {
                    img: "../assets/images/TourismImg/te3.jpg",
                    title: "London",
                    text: "London bursts with historical landmarks, including the Tower of London, Buckingham Palace, and the British Museum.",
                  },
                  {
                    img: "../assets/images/TourismImg/te4.jpg",
                    title: "Berlin",
                    text: "Berlin is a city that blends history with modernity, known for the Berlin Wall, Brandenburg Gate, and vibrant nightlife.",
                  },
                  {
                    img: "../assets/images/TourismImg/te5.jpg",
                    title: "Amsterdam",
                    text: "Amsterdam is famous for its canals, historic buildings, and museums, including the Van Gogh Museum and Anne Frank House.",
                  },
                  {
                    img: "../assets/images/TourismImg/te6.jpg",
                    title: "Athens",
                    text: "Athens, the cradle of civilization, is home to ancient sights like the Acropolis and Parthenon.",
                  },
                  {
                    img: "../assets/images/TourismImg/te7.jpg",
                    title: "Barcelona",
                    text: "Barcelona is renowned for its modernist architecture by Antoni Gaudí, and vibrant street life.",
                  },
                  {
                    img: "../assets/images/TourismImg/te8.jpg",
                    title: "Lisbon",
                    text: "Lisbon is a picturesque city known for its rolling hills, historic tram rides, and vibrant nightlife.",
                  },
                  {
                    img: "../assets/images/TourismImg/te9.jpg",
                    title: "Venice",
                    text: "Venice, famous for its winding canals and beautiful gondolas, offers a unique romantic experience.",
                  },
                  {
                    img: "../assets/images/TourismImg/te10.jpg",
                    title: "Madrid",
                    text: "Madrid is a city of vibrant culture, known for its art museums, historic center, and the Royal Palace.",
                  },
                  {
                    img: "../assets/images/TourismImg/te11.jpg",
                    title: "Budapest",
                    text: "Budapest is a city of stunning historical architecture, known for its thermal baths and the Parliament Building.",
                  },
                  {
                    img: "../assets/images/TourismImg/te12.jpg",
                    title: "Stockholm",
                    text: "Stockholm is a city of stunning natural beauty, known for its historic center and the Vasa Museum.",
                  },
                  {
                    img: "../assets/images/TourismImg/te13.jpg",
                    title: "Prague",
                    text: "Prague is famed for its beautiful medieval architecture and picturesque cityscape.",
                  },
                  {
                    img: "../assets/images/TourismImg/te14.jpg",
                    title: "Copenhagen",
                    text: "Copenhagen is a city of modern design and gastronomy, known for its canals and the Little Mermaid statue.",
                  },
                  {
                    img: "../assets/images/TourismImg/te15.jpg",
                    title: "Bruges",
                    text: "Bruges is famous for its medieval buildings and beautiful canals, earning it the nickname 'Venice of the North.'",
                  },
                  {
                    img: "../assets/images/TourismImg/te16.jpg",
                    title: "Edinburgh",
                    text: "Edinburgh is known for its historic and cultural attractions, including the Edinburgh Castle and the annual festivals.",
                  },
                  {
                    img: "../assets/images/TourismImg/te17.jpg",
                    title: "Dublin",
                    text: "Dublin is a vibrant city known for its literary history and the famous Guinness beer.",
                  },
                  {
                    img: "../assets/images/TourismImg/te18.jpg",
                    title: "Helsinki",
                    text: "Helsinki is known for its design, beautiful archipelago, and the unique sauna culture.",
                  },
                  {
                    img: "../assets/images/TourismImg/te19.jpg",
                    title: "Valletta",
                    text: "Valletta is known for its well-preserved architectural heritage and fortifications.",
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
              The cost of living varies widely across Europe. Below are some general estimates:
            </p>
            <ul>
              <li>
                <strong>Accommodation:</strong> Rent can vary from €600 to €2000 per month, depending on the city.
              </li>
              <li>
                <strong>Meals:</strong> Expect to spend €200 to €500 per month on groceries and dining.
              </li>
              <li>
                <strong>Transportation:</strong> Public transport passes range from €50-€120 per month.
              </li>
              <li>
                <strong>Utilities:</strong> Average utility costs range from €150-€300 per month.
              </li>
            </ul>
      
            <Container>
              <h4>
                <FaTree className="me-2" />
                Natural Wonders
              </h4>
              <p>
                Europe is also home to stunning natural landscapes and parks:
              </p>
              <Row xs={1} md={2} lg={2} className="g-4">
                {[
                  {
                    img: "../assets/images/TourismImg/nwe1.jpg",
                    title: "Lake Bled (Slovenia)",
                    text: "A picturesque lake with an island and stunning mountain views.",
                    link: "https://www.slovenia.info/en/lakes/lake-bled",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe2.jpg",
                    title: "Loch Ness (Scotland)",
                    text: "Renowned for its legendary monster, it's a beautiful and mysterious location to explore.",
                    link: "https://www.visitscotland.com/see-do/landscapes/loch-ness/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe3.jpg",
                    title: "Norwegian Fjords",
                    text: "Fjords famed for their dramatic cliffs and breathtaking landscapes.",
                    link: "https://www.visitnorway.com/plan-your-trip/regions/fjords/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe4.jpg",
                    title: "Black Forest (Germany)",
                    text: "A forested mountain range with picturesque villages and hiking trails.",
                    link: "https://www.blackforest-tourism.com/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe5.jpg",
                    title: "The Alps (Multiple Countries)",
                    text: "A majestic mountain range known for skiing, hiking, and stunning views.",
                    link: "https://www.alps.com/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe6.jpg",
                    title: "Giant's Causeway (Northern Ireland)",
                    text: "Renowned for its unique hexagonal basalt columns formed by volcanic activity.",
                    link: "https://www.ireland.com/en-us/what-is-available/attractions/giants-causeway/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe7.jpg",
                    title: "Aiguille du Midi (France)",
                    text: "Offers stunning panoramic views of Mont Blanc and the surrounding peaks.",
                    link: "https://montblancnaturalresort.com/aiguille-du-midi/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe8.jpg",
                    title: "Plitvice Lakes National Park (Croatia)",
                    text: "Famous for its cascading lakes, beautiful waterfalls, and lush greenery.",
                    link: "https://np-plitvicka-jezera.hr/en/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe9.jpg",
                    title: "Rhine Valley (Germany)",
                    text: "Known for its romantic castles set against picturesque wine country.",
                    link: "https://www.rheinland-pfalz-tourismus.com/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe10.jpg",
                    title: "Azores (Portugal)",
                    text: "An archipelago known for its volcanic landscapes, lush greenery, and stunning coastlines.",
                    link: "https://www.visitazores.com/en/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe11.jpg",
                    title: "Laramie Mountains (Wyoming)",
                    text: "A beautiful mountain range known for its varied landscapes and outdoor activities.",
                    link: "https://www.wyohistory.org/places/laramie/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe12.jpg",
                    title: "Blue Cave (Croatia)",
                    text: "Famous for its stunning blue light effect, best seen in the mid-afternoon.",
                    link: "https://www.dubrovniksights.com/blue-cave/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe13.jpg",
                    title: "Krka National Park (Croatia)",
                    text: "Known for its waterfalls, beautiful lakes, and diverse wildlife.",
                    link: "https://www.np-krka.hr/en/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe14.jpg",
                    title: "Serengeti National Park (Tanzania)",
                    text: "A famous park known for its wildlife including lions, elephants, and migratory wildebeests.",
                    link: "https://www.serengetisafaripark.com/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe15.jpg",
                    title: "Scottish Highlands (Scotland)",
                    text: "Known for its breathtaking landscapes, mountain ranges, and deep lochs.",
                    link: "https://www.visitscotland.com/destinations-maps/highlands/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe16.jpg",
                    title: "Northern Lights (Iceland)",
                    text: "A stunning natural light display that can be seen in winter months.",
                    link: "https://www.visiticeland.com/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe17.jpg",
                    title: "La Rocca (Italy)",
                    text: "A historic fortress offering stunning views of the surrounding valley.",
                    link: "https://www.visititaly.com/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe18.jpg",
                    title: "Tuscany (Italy)",
                    text: "Famous for its rolling hills, vineyards, and beautiful landscapes.",
                    link: "https://www.visittuscany.com/en/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe19.jpg",
                    title: "Sardinia (Italy)",
                    text: "Known for its beautiful beaches and stunning coastal scenery.",
                    link: "https://www.sardegnaturismo.it/en/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe20.jpg",
                    title: "Mont Blanc (France/Italy)",
                    text: "The tallest mountain in the Alps, perfect for climbing and skiing.",
                    link: "https://en.mont-blanc.info/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe21.jpg",
                    title: "Schwarzwald (Germany)",
                    text: "Known for its dense forests and picturesque villages.",
                    link: "https://www.blackforest-tourism.com/",
                  },
                  {
                    img: "../assets/images/TourismImg/nwe22.jpg",
                    title: "Ski Resorts (Switzerland)",
                    text: "Famous for its ski slopes, high peaks, and beautiful Alpine scenery.",
                    link: "https://www.myswitzerland.com/en-us/",
                  },
                ].map((park, index) => (
                  <Col key={index}>
                    <Card>
                      <Card.Img variant="top" src={park.img} alt={park.title} />
                      <Card.Body>
                        <Card.Title>{park.title}</Card.Title>
                        <Card.Text>{park.text}</Card.Text>
                        <Button variant="primary" href={park.link} target="_blank">
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
                    <FaMapMarkedAlt className="me-2" />
                    Essential Travel Tips
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
                          "Travel with insurance to cover emergencies.",
                          "Book hotels and flights early for the best deals.",
                          "Respect local customs and etiquette.",
                          "Pack light, versatile clothing for convenience.",
                          "Always carry backup copies of your important documents.",
                          "Learn basic local phrases to communicate better.",
                          "Set a budget and keep track of expenses.",
                          "Keep hydrated and wear comfortable shoes for sightseeing.",
                          "Check the weather forecast before traveling.",
                          "Utilize public transport for easier navigation.",
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
      
              <Row className="justify-content-center mt-4">
                <Col md={8} lg={12}>
                  <Card className="shadow-sm border-light rounded">
                    <Card.Body className="text-center">
                      <h5>Use the map below to plan your trip</h5>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754631.560016155!2d9.282614151978988!3d48.848442565005325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781b86a98cb9e47%3A0x751d1941fc8709e0!2sEurope!5e0!3m2!1sen!2sus!4v1643048889515!5m2!1sen!2sus"
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
                        Use this map to plan and navigate your trip in Europe.
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
      <Row>
        <Col sm={12}>
          <h1>{sections[0].title}</h1>
          <div>{sections[0].content}</div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h1>{sections[1].title}</h1>
          <div>{sections[1].content}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default IndiaToEurope;