import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Services = () => {
  return (
    <div id='services' className='container py-4'>
      <h2 className='text-center fw-bold'>We Provide Best Services</h2>
      <Row xs={2} md={4}>
        <Col className='bg-success p-2 text-dark bg-opacity-25 rounded-3'>
        <h2 className='text-center'><i class="fas fa-home"></i></h2>
        <h2>Hotel Booking</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eius sequi temporibus quam enim veniam nostrum veritatis quo voluptate atque.</p>
        </Col>
        <Col className='bg-success p-2 text-dark bg-opacity-25 rounded-3'>
        <h2 className='text-center'><i class="fas fa-plane"></i></h2>
        <h2 className='text-center'>Fligth Booking</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eius sequi temporibus quam enim veniam nostrum veritatis quo voluptate atque.</p>
        </Col>
        <Col className='bg-success p-2 text-dark bg-opacity-25 rounded-3'>
        <h2 className='text-center'><i class="fas fa-ticket-alt"></i></h2>
        <h2 className='text-center'>Ticket Booking</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eius sequi temporibus quam enim veniam nostrum veritatis quo voluptate atque.</p>
        </Col>
        <Col className='bg-success p-2 text-dark bg-opacity-25 rounded-3'>
        <h2 className='text-center'><i class="fas fa-suitcase-rolling"></i></h2>
        <h2 className='text-center'>Amazing Tour</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eius sequi temporibus quam enim veniam nostrum veritatis quo voluptate atque.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Services;