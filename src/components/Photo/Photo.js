import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Photo = (props) => {
  const { picture, country } = props.photo;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{country}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Photo;