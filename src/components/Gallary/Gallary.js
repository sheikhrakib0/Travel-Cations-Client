import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Photo from '../Photo/Photo';

const Gallary = () => {
  const {user} = useAuth();
  const [photos, setPhotos] = useState([]);
  const countryRef = useRef();
  const urlRef = useRef();

  useEffect(() => {
    fetch('https://floating-forest-93132.herokuapp.com/gallary')
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, [])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const country = countryRef.current.value;
    const picture = urlRef.current.value;
    const photo = {country, picture};
    axios.post('https://floating-forest-93132.herokuapp.com/gallary', photo)
    .then(res=>{
      if(res.data.insertedId){
        alert('Photo added successfully');
      }
    })

  }
  return (
    <div className='container py-4'>
      <h2 className='fw-bold text-center py-4'>Our Memories {photos.length}</h2>
      <Row xs={1} md={3} className="g-4">
        {
          photos.map(photo => <Photo
            key={photos._id}
            photo={photo}
          ></Photo>)
        }
      </Row>
      {user.email?
      <div className='border border-warning my-4 rounded'>
      <h3 className='text-center py-2'>Add your photo</h3>
      <form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingTextarea" label="Photo Location" className="mb-3">
          <Form.Control ref={countryRef} as="textarea" placeholder="Location" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Photo Url" className="mb-3">
          <Form.Control ref={urlRef} as="textarea" placeholder="Photo Url" />
        </FloatingLabel>
        <input className='w-25 mx-auto btn btn-warning my-2 d-flex justify-content-center' type="submit" value="Submit" />
      </form>
    </div>:
    <Link to='/login' className='text-decoration-none'>Sign in to add photo</Link>

      }
    </div>
  );
};

export default Gallary;