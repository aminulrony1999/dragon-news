import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, details, _id, image_url, author } = news;
  return (
    <Card className="text-center mb-4">
      <Card.Header className="d-flex">
        <Image style={{height:"40px"}} src={author.img} roundedCircle />
        <div className="ps-2">
            <p className="mb-0">{author?.name}</p>
            <p><small>{moment(author?.published_date).format('YYYY-MM-D')}</small></p>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsCard;
