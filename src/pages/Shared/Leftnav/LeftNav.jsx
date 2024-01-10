import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="ps-4">
      <h4>All Category</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link className="text-black" to={`category/${category.id}`}>
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div>
        <Row lg={1} className="g-4 mt-4 mb-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeftNav;
