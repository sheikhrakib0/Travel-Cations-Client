import React from 'react';
import { Button, Carousel, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className='fw-bold fs-2' href="/home">TRAVEL CATIONS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"        data-target="#sidenav-collapse-main" data-
                toggle="collapse" >
                <NavHashLink className='text-decoration-none text-white ps-4 text-uppercase' as={Link} to="/home">Home</NavHashLink>
                <NavHashLink className='text-decoration-none text-white ps-4 text-uppercase' as={Link} to="/destinations#destinations">Destinations</NavHashLink>
                <NavHashLink className='text-decoration-none text-white ps-4 text-uppercase' as={Link} to="/gallary#gallary">Gallary</NavHashLink>
                <NavHashLink className='text-decoration-none text-white ps-4 text-uppercase' as={Link} to="/about">About Us</NavHashLink>

              </Nav>
              <Nav>
                {user.email ?
                  <span className='d-flex'>

                    <Dropdown className='ps-4'>
                      <Dropdown.Toggle className='rounded-cicle' variant="warning" id="dropdown-basic">
                        {user.photoURL ?
                          <img height='30px' className='rounded-circle' src={user.photoURL} alt="" /> : <h3>{user.displayName}</h3>}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='py-4'>
                        <Dropdown.Item href="#/action-1">{user.displayName}</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">{user.email}</Dropdown.Item>
                        <Dropdown.Item href="/dashboard">Manage Booking</Dropdown.Item>
                        <Button className='rounded-pill ms-2' onClick={logout} variant="warning">Logout</Button>
                      </Dropdown.Menu>
                    </Dropdown>
                  </span> :
                  <Link to='/login'><Button variant="warning" className='rounded-pill'>Login <i className="fas fa-sign-in-alt"></i></Button></Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* banner section  */}
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1529156349890-84021ffa9107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Your setisfaction is our moto</h3>
              <p>We provide the best facilities for your enjoyment. Better facilities better enjoyment.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>This summer can be Your best couple tour</h3>
              <p>Enjoy glorious moment with your partner.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/uploads/14134890947503c6effdc/72adf455?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Feel the calmness of the nature</h3>
              <p>Enjoy a beach view to find peach</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Header;