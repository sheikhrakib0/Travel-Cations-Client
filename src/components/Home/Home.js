import React from 'react';
import { Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';

const Home = (props) => {
const {destinations} = props;
  
  return (
    <div className='container'>
      <h2 className='text-center py-4'>Popular Places</h2>
      <div>
        <Row xs={1} md={3} className="g-4">
          {
            destinations.slice(0,6).map(destination => <Destination
              key={destination._id}
              destination={destination}
            ></Destination>)
          }
        </Row>
      </div>
      <HashLink to='/destinations#places'className='text-decoration-non text-center'><button className='rounded-pill bg-warning'>See All Places <i className="fas fa-arrow-right"></i></button></HashLink>

      <Services></Services>
    </div>
  );
};

export default Home;