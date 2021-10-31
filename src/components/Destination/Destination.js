import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Destination = (props) => {
  const { _id ,name, price, description, picture } = props.destination;
  
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h6>Starting from ${price}</h6>
            <Card.Text>{description.slice(0, 200)}</Card.Text>
            <div className="d-grid gap-2">
              <Link  to={`/destinations/${_id}`}><Button variant="secondary" size="lg">
                Book Now <i class="fas fa-arrow-right"></i>
              </Button></Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Destination;