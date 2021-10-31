import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateBooking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/booking/${id}`)
      .then(res => res.json())
      .then(data => setBooking(data))
  }, [])

  const handleNameChange = e => {
    const updatedName = e.target.value;
    const updatedBooking = { ...booking };
    updatedBooking.name = updatedName;
    setBooking(updatedBooking);
  }
  const handleEmailChange = e => {
    const updatedEmail = e.target.value;
    const updatedBooking = { ...booking };
    updatedBooking.email = updatedEmail;
    setBooking(updatedBooking);
  }
  const handleAddressChange = e => {
    const updatedAddress = e.target.value;
    const updatedBooking = { ...booking };
    updatedBooking.address = updatedAddress;
    setBooking(updatedBooking);
  }
  const handleAddress2Change = e => {
    const updatedAddress2 = e.target.value;
    const updatedBooking = { ...booking };
    updatedBooking.address2 = updatedAddress2;
    setBooking(updatedBooking);
  }
  const handleCityChange = e => {
    const updatedCity = e.target.value;
    const updatedBooking = { ...booking };
    updatedBooking.city = updatedCity;
    setBooking(updatedBooking);
  }
  const handleStateChange = e => {
    const updatedState = e.target.value;
    const updatedBooking = { ...booking };
    updatedBooking.state = updatedState;
    setBooking(updatedBooking);
  }
  const handleZipChange = e => {
    const updatedZip = e.target.value;
    const updatedBooking = { ...booking };
    updatedBooking.zip = updatedZip;
    setBooking(updatedBooking);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/booking/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('updated successfully')
        }
      })

  }
  return (
    <div>
      <div id="updateform" className='col-sm ps-4 p-2 mt-4 w-50 mx-auto'>
        <h2 className='text-center my-4'>Update your booking info here</h2>
        <form className='bg-warning p-4 rounded' onSubmit={handleUpdate}>
          <div className="form-row">
            <div className="form-row">
              <div className="col">
                <label htmlFor="inputAddress">Name</label>
                <input type="text" onChange={handleNameChange} className="mb-4 form-control" value={booking.name || ''} />
              </div>
              <div className="col">
                <label htmlFor="inputAddress">Email</label>
                <input type="text" onChange={handleEmailChange} className="form-control" value={booking.email || ''} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" onChange={handleAddressChange} value={booking.address || ''} />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text" onChange={handleAddress2Change} className="form-control" value={booking.address2 || ''} />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" onChange={handleCityChange} className="form-control" value={booking.city || ''} />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <input type="text" onChange={handleStateChange} className="form-control" value={booking.state || ''} />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" onChange={handleZipChange} className="form-control" value={booking.zip || ""} />
            </div>
          </div>
          <div className="form-group">
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" className="w-50 btn btn-danger my-4">Confirm Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBooking;