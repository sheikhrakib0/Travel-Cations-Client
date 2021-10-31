import axios from 'axios';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
  const { userId } = useParams();
  const [place, setPlace] = useState([]);
  const { user } = useAuth();

  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const address2Ref = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();

  useEffect(() => {
    fetch(`https://floating-forest-93132.herokuapp.com/destinations/${userId}`)
      .then(res => res.json())
      .then(data => setPlace(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const address2 = address2Ref.current.value;
    const state = stateRef.current.value;
    const zip = zipRef.current.value;
    const placeName = place.name;
    const id = place._id;
    const price = place.price;
    const bookingInfo = { name, price , email, address, address2, state, zip, placeName, id };
    axios.post('http://localhost:5000/booking', bookingInfo)
      .then(res => {
        if (res.data.insertedId) {
          alert('Booking Added Successfully. Check in Manage Booking to check out')
        }
      })
    e.target.reset();
  };

  return (
    <div className='container'>
      <div className='row py-4'>
        <div className='col-sm p-2'>
          <h2>Tour Details</h2>
          <img width="100%" src={place.picture} alt="" />
          <p><i className="far fa-clock"></i> 5 days 4 night</p>
          <h3>{place.name}</h3>
          <p>${place.price}</p>
          <p className='py-4'>{place.description}</p>
        </div>


        <div className='col-sm ps-4 p-2 mt-4 '>
          <h2 className='text-center my-4'>Fill the booking form</h2>
          <form className='bg-warning p-4 rounded' onSubmit={handleSubmit}>
            <div className="form-row">
              <div class="form-row">
                <div class="col">
                  <label htmlFor="inputAddress">Name</label>
                  <input ref={nameRef} type="text" className="mb-4 form-control" value={user.displayName || ''} />
                </div>
                <div class="col">
                  <label htmlFor="inputAddress">Email</label>
                  <input ref={emailRef} type="text" class="form-control" value={user.email} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input type="text" ref={addressRef} className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input type="text" ref={address2Ref} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" ref={cityRef} className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <input type="text" ref={stateRef} className="form-control" id="state" />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" ref={zipRef} className="form-control" id="inputZip" />
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

export default Booking;