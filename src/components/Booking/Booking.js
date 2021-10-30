import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
  const { userId } = useParams();
  const [place, setPlace] = useState([]);

  useEffect(()=>{
    fetch(`https://floating-forest-93132.herokuapp.com/destinations/booking/${userId}`)
    .then(res=>res.json())
    .then(data=>setPlace(data))
  },[])

  return (
    <div>
      <h2>Service id {place.name}</h2>
    </div>
  );
};

export default Booking;