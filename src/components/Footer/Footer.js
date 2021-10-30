import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='bg-dark text-white'>
      <div className="container">
        <footer className="py-5">
          <Row xs={1} md={3}>
            <Col>
              <h5>Travel Cations</h5>
              <ul className="nav flex-column">
                
                <Link to='/home' className='text-decoration-none text-white'>Home</Link>
                <Link to='/destinations' className='text-decoration-none text-white'>Destinations</Link>
                <Link to='/about' className='text-decoration-none text-white'>About Us</Link>
                <Link to='/gallary' className='text-decoration-none text-white'>Gallary</Link>
              </ul>
            </Col>

            <Col>
              <h5>About Agency</h5>
              <p>The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look at a presentation and understand the message. It has come to a point</p>
            </Col>

            <Col>
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                  <button className ="btn btn-primary" type ="button">Subscribe</button>
                </div>
              </form>
            </Col>
          </Row>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2021 Company, Inc. All rights reserved.</p>
            <div>
              <Link className='px-2'><i className="fab fa-facebook-f"></i></Link>
              <Link className='px-2'><i className="fab fa-instagram"></i></Link>
              <Link className='px-2'><i className="fab fa-google-plus-g"></i></Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;