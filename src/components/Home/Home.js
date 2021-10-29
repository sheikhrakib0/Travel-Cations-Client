import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';

const Home = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('./destinations.json')
      .then(res => res.json())
      .then(data => setDestinations(data))
  }, [])
  return (
    <div className='container'>
      <h2 className='text-center py-4'>Popular Places</h2>
      <div>
        <Row xs={1} md={3} className="g-4">
          {
            destinations.slice(0, 6).map(destination => <Destination
              key={destinations._id}
              destination={destination}
            ></Destination>)
          }
        </Row>
      </div>
      <HashLink to='/destinations#places'className='text-decoration-non'><button className='rounded-pill bg-warning'>See All Places</button></HashLink>

      <Services></Services>
    </div>
  );
};

export default Home;