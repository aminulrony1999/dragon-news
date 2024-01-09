import React from "react";
import { Card } from "react-bootstrap";

const NewsCard = ({ news }) => {
  const { title, details, _id } = news;
  return (
    <Card className="text-center mb-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {details}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsCard;
