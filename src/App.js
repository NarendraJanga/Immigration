import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./componrnts/MainLayout/MainLayout";
import Home from "./componrnts/pages/Mainpages/Home";
import Contact from "./componrnts/pages/Homepages/Contact";
import Faq from "./componrnts/pages/Homepages/Faq";
import VisaDetails from "./componrnts/pages/Homepages/VisaDetails";
import About from "./componrnts/pages/Homepages/About";
import Careers from "./componrnts/pages/Homepages/Careers";
import PassportServices from "./componrnts/pages/Homepages/PassportServices";
import TourismServices from "./componrnts/pages/Homepages/TourismServices";
import IndiaToUSA from "./componrnts/pages/Homepages/IndiaToUSA";
import IndiaToUK from "./componrnts/pages/Homepages/IndiaToUK";
import IndiaToCanada from "./componrnts/pages/Homepages/IndiaToCanada";
import IndiaToAustralia from "./componrnts/pages/Homepages/IndiaToAustralia";
import IndiaToUAE from "./componrnts/pages/Homepages/IndiaToUAE";
import IndiaToEurope from "./componrnts/pages/Homepages/IndiaToEurope";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact/>}/>
            <Route path="faqs" element={<Faq/>}/>
            <Route path="visa-services" element={<VisaDetails/>}/>
            <Route path="passport-services" element={<PassportServices/>}/>
            <Route path="tourism-services" element={<TourismServices/>} />
            <Route path="destinations/India-USA" element={<IndiaToUSA/>} />
            <Route path="destinations/India-UK" element={<IndiaToUK/>} />
            <Route path="destinations/India-Canada" element={<IndiaToCanada/>} />
            <Route path="destinations/India-Australia" element={<IndiaToAustralia/>} />
            <Route path="destinations/India-UAE" element={<IndiaToUAE/>} />
            <Route path="destinations/India-Europe" element={<IndiaToEurope/>} />
            <Route path="about" element={<About/>}/>
            <Route path="carrers" element={<Careers/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
