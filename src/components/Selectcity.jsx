



import React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Star from "./Star";
import "./Selectcity.css";
import cardData from "./Carddata.json";
import { useNavigate } from "react-router-dom";

export default function Selectcity() {
  const navigate=useNavigate();
  const [selectedCity, setSelectedCity] = useState("");
  const handleCitySelect = (e) => {
    setSelectedCity(e.target.value);
  };
  return (
    <div className="container">
      <select value={selectedCity} onChange={handleCitySelect}>
        <option value="">All Cities</option>
        {cardData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <Container className="alCards">
        <Row>
          <Col>
            <ul className="displayCards">
              {cardData
                .filter(
                  (city) => selectedCity === "" || city.name === selectedCity
                )
                .map((city) => (
                  <li key={city.name}>
                    <div className="citycards">
                      <Container classname="resto-cards">
                        <div style={{ textDecoration: "none", color: "black" }} >
                          <div className="citycard" onClick={navigate("/main/description")}>
                            <img
                              className="logofood"
                              src={city.logo}
                              alt="image"
                            />
                            <p>{city.name}</p>
                            <Star />
                          </div>
                        </div>
                      </Container>
                    </div>
                  </li>
                ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
