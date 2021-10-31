import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/booking')
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [])

  //deleting a booking info
  const handleDeleteBooking =(id)=>{
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount > 0){
        alert('Deleted Successfully');
        const remainingBooking = bookings.filter(booking =>booking._d !== id);
        setBookings(remainingBooking);
      }
    })
  }
  return (
    <div className="text-center">
      <h2 className="ms-4 bg-warning w-50 text-center p-2 mt-4 rounded">Total bookings {bookings.length}</h2>
      <ul>
        {
          bookings.map(booking => <li style={{listStyle:"none"}}>
            <div style={{backgroundColor:"gray"}} className="d-flex justify-content-between conntianer p-2 my-4 ">
              <h2 className=''>Place: {booking.placeName}</h2>
              <h3 className='ms-4 fw-bold'>Price: ${booking.price}</h3>
              <div>
                <button className='bg-primary'>Update</button>
                <button className='bg-danger' onClick={()=>handleDeleteBooking(booking._id)}>X</button>
              </div>
            </div>
          </li>)
        }
      </ul>

     {/* new Tour place add */}
     

    </div>
  );
};

export default Dashboard;