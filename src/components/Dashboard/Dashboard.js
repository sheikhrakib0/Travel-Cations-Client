import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('https://floating-forest-93132.herokuapp.com/booking')
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [])

  //deleting a booking info
  const handleDeleteBooking = (id) => {
    const proceed = window.confirm('Are you sure want to delete ?');
    if (proceed) {
      fetch(`https://floating-forest-93132.herokuapp.com/booking/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            const remainingBooking = bookings.filter(booking => booking._d !== id);
            setBookings(remainingBooking);
          }
        })
    }
  }

  // Place Update section
  const nameRef = useRef();
  const priceRef = useRef();
  const pictureRef= useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const picture = pictureRef.current.value;
    const description = descriptionRef.current.value;

    const newPlace = {name, price, picture, description}

    axios.post('https://floating-forest-93132.herokuapp.com/destinations', newPlace)
    .then(res=>{
      if(res.data.insertedId){
        alert('place added successfully');
      }
    })
  }

  return (
    <div className="">
      <h2 className="ms-4 bg-warning w-50 text-center p-2 mt-4 rounded">Total bookings {bookings.length}</h2>
      <ul>
        {
          bookings.map(booking => <li style={{ listStyle: "none" }}>
            <div style={{ backgroundColor: "gray" }} className="d-flex justify-content-between conntianer p-2 my-4 ">
              <h2 className=''>Place: {booking.placeName}</h2>
              <h3 className='ms-4 fw-bold'>Price: ${booking.price}</h3>
              <div>
                <Link to={`/booking/update/${booking._id}#updateform`}><button className='bg-primary'>Update</button></Link>
                <button className='bg-danger' onClick={() => handleDeleteBooking(booking._id)}>X</button>
              </div>
            </div>
          </li>)
        }
      </ul>

      {/* new Tour place add */}
      <div>
        <div className='col-sm ps-4 p-2 mt-4 '>
          <h2 className='text-center my-4'>Add a new tour place </h2>
          <form className='bg-warning p-4 rounded w-75 mx-auto' onSubmit={handleSubmit}>
            <div className="form-row">
              <div class="form-row">
                <div class="col">
                  <label htmlFor="inputAddress">Name</label>
                  <input ref={nameRef} type="text" className="mb-4 form-control" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Price</label>
              <input type="text" ref={priceRef} className="form-control" id="inputAddress" placeholder="$$$$" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Picture</label>
              <input type="text" ref={pictureRef} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label htmlFor="inputCity">Descriptions</label>
                <textarea type="text" ref={descriptionRef} className="form-control" />
              </div>
            </div>
            <div className="form-group">
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className="w-50 btn btn-danger my-4">Confirm Booking</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;