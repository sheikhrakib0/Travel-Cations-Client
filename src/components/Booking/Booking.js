import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/booking/${id}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  return (
    <div>
      <h2>Service id {orders.name}</h2>
    </div>
  );
};

export default Booking;