import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('./destinations.json')
      .then(res => res.json())
      .then(data => setDestinations(data))
  }, [])

  return (
    <div className='container'>
      <div id='places'>
      <h2 className='text-center py-4'>Travel Most Popular   Place In The World</h2>
        <Row xs={1} md={3} className="g-4">
          {
            destinations.map(destination => <Destination
              key={destinations._id}
              destination={destination}
            ></Destination>)
          }
        </Row>
      </div>
    </div>
  );
};

export default Destinations;