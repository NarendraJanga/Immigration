import React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQBackground from "./FAQBackground";

const Faq = () => {
  const faqs = [
    {
      question: "What is Heman Immigration Private Limited, and what services do you offer?",
      answer:
        "We are an immigration consultancy providing visa assistance, documentation support, and consulting services for study, work, business, and permanent residency visas.",
      category: "General Immigration Questions",
    },
    {
      question: "What are the benefits of using your services for immigration?",
      answer:
        "We simplify the complex immigration process by offering professional guidance, ensuring documentation accuracy, and maximizing your visa success rate.",
      category: "General Immigration Questions",
    },
    {
      question: "Which countries do you specialize in for immigration?",
      answer:
        "We specialize in Canada, Australia, the USA, the UK, New Zealand, and Schengen countries.",
      category: "General Immigration Questions",
    },
    {
      question: "What are the common types of visas you assist with?",
      answer:
        "We assist with study visas, work permits, permanent residency, business visas, and visitor visas.",
      category: "General Immigration Questions",
    },
    {
      question: "How can I assess my eligibility for immigration?",
      answer:
        "Schedule an appointment with our experts for a personalized eligibility assessment based on your profile.",
      category: "General Immigration Questions",
    },

    {
      question: "What is the step-by-step process for obtaining a visa?",
      answer:
        "Our process includes initial consultation, eligibility assessment, documentation, application submission, and follow-up with immigration authorities.",
      category: "Visa Process Questions",
    },
    {
      question: "What is a points-based immigration system, and how does it work?",
      answer:
        "Countries like Canada and Australia use a scoring system based on criteria such as age, education, work experience, and language skills to rank applicants.",
      category: "Visa Process Questions",
    },
    {
      question: "Do you help with job placement for work visas?",
      answer:
        "Yes, we assist in identifying job opportunities and employer sponsorships where required.",
      category: "Visa Process Questions",
    },
    {
      question: "What is the typical processing time for visa applications?",
      answer:
        "Processing times vary by visa type and country but generally range from 3–12 months.",
      category: "Visa Process Questions",
    },
    {
      question: "Can I include my family members in my visa application?",
      answer:
        "Yes, family members can often be included, depending on the visa type and destination country.",
      category: "Visa Process Questions",
    },

    {
      question: "Do you assist with study visa applications?",
      answer:
        "Yes, we provide guidance on university selection, course applications, and visa processing for students.",
      category: "Student Visas",
    },
    {
      question: "Which documents are required for a student visa?",
      answer:
        "You’ll need a valid passport, acceptance letter from a university, proof of financial resources, and language proficiency scores.",
      category: "Student Visas",
    },
    {
      question: "Can you help me secure a scholarship for studying abroad?",
      answer:
        "While we don’t provide scholarships directly, we guide you in identifying and applying for them.",
      category: "Student Visas",
    },
    {
      question: "Is post-graduation work eligibility included in study visas?",
      answer:
        "Many countries, like Canada and Australia, offer post-graduation work permits. We assist you with these processes as well.",
      category: "Student Visas",
    },
    {
      question: "What is the minimum IELTS/TOEFL score required for a student visa?",
      answer:
        "The minimum score depends on the country and university requirements. Typically, an IELTS score of 6.0 or higher is preferred.",
      category: "Student Visas",
    },

    {
      question: "What are the benefits of permanent residency (PR)?",
      answer:
        "PR offers rights to live, work, and study in the country along with social benefits and a path to citizenship.",
      category: "Permanent Residency and Citizenship",
    },
    {
      question: "How can I apply for permanent residency?",
      answer:
        "PR applications depend on various factors such as work experience, education, and language proficiency. Our team will guide you through the process.",
      category: "Permanent Residency and Citizenship",
    },
    {
      question: "Do you assist with Express Entry applications for Canada?",
      answer:
        "Yes, we offer complete assistance with Canada’s Express Entry Program, including CRS score improvement strategies.",
      category: "Permanent Residency and Citizenship",
    },
    {
      question: "What is the age limit for applying for PR in countries like Australia or Canada?",
      answer:
        "Generally, individuals aged below 45 years are eligible for most PR programs.",
      category: "Permanent Residency and Citizenship",
    },
    {
      question: "Can I sponsor a family member for permanent residency?",
      answer:
        "Yes, family sponsorship is available in many immigration programs, such as Canada’s Family Class Visa.",
      category: "Permanent Residency and Citizenship",
    },

    {
      question: "What are the basic documents required for visa applications?",
      answer:
        "Key documents include a valid passport, educational certificates, proof of work experience, language test scores, and financial proof.",
      category: "Documentation and Requirements",
    },
    {
      question: "Is a language proficiency test mandatory for all visas?",
      answer:
        "For most skilled worker and study visas, language proficiency is a requirement.",
      category: "Documentation and Requirements",
    },
    {
      question: "Do you provide guidance on document verification and notarization?",
      answer:
        "Yes, we help ensure that all documents are properly verified and meet immigration authority standards.",
      category: "Documentation and Requirements",
    },
    {
      question: "How do I submit my visa application through your firm?",
      answer:
        "Submit all documents to us, and we’ll handle the application and communication with the immigration authorities.",
      category: "Documentation and Requirements",
    },
    {
      question: "What if I make a mistake in my visa application?",
      answer:
        "We perform a thorough review to minimize errors before submission. In case of a mistake, we assist in rectifying it.",
      category: "Documentation and Requirements",
    },

    {
      question: "What are your service charges?",
      answer:
        "Our fees vary depending on the service and visa type. Contact us for a customized quote.",
      category: "Cost, Payments, and Refunds",
    },
    {
      question: "Are visa application fees included in your charges?",
      answer:
        "No, application fees are paid separately to immigration authorities.",
      category: "Cost, Payments, and Refunds",
    },
    {
      question: "Is the fee refundable if my visa application is denied?",
      answer:
        "Our service fees are non-refundable as they cover consultation and processing efforts. Visa fees may be partially refunded depending on the country’s policies.",
      category: "Cost, Payments, and Refunds",
    },
    {
      question: "Do you offer payment plans for your service fees?",
      answer:
        "Yes, we provide installment options for service charges.",
      category: "Cost, Payments, and Refunds",
    },
    {
      question: "Can you guarantee visa approval?",
      answer:
        "No, we do not guarantee approval as decisions are made solely by immigration authorities. However, we ensure a strong and accurate application.",
      category: "Cost, Payments, and Refunds",
    },
  ];

  const categories = [
    "General Immigration Questions",
    "Visa Process Questions",
    "Student Visas",
    "Permanent Residency and Citizenship",
    "Documentation and Requirements",
    "Cost, Payments, and Refunds",
  ];

  return (
    <div className="container py-5">
      <FAQBackground/>
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      <div className="row">
        <div className="col-md-3">
          <ListGroup>
            {categories.map((category, index) => (
              <ListGroup.Item key={index} action href={`#${category.replace(/\s/g, "")}`}>
                {category}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col-md-9">
          <Accordion defaultActiveKey="0">
            {categories.map((category, index) => (
              <div id={category.replace(/\s/g, "")} key={index}>
                <h3>{category}</h3>
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <h2><Accordion.Header>{faq.question}</Accordion.Header></h2>
                      <Accordion.Body>{faq.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
