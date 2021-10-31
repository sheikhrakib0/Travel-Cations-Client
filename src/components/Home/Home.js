import React from 'react';
import { Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';

const Home = (props) => {
  const { destinations } = props;

  return (
    <div className='container'>
      <h2 className='text-center py-4'>Popular Places</h2>
      <div>
        <Row xs={1} md={3} className="g-4">
          {
            destinations.slice(0, 6).map(destination => <Destination
              key={destination._id}
              destination={destination}
            ></Destination>)
          }
        </Row>
      </div>
      <HashLink to='/destinations#places' className='text-decoration-non text-center'><button className='rounded-pill bg-warning'>See All Places <i className="fas fa-arrow-right"></i></button></HashLink>

      <Services></Services>

      <div>
        <h2 className='text-center py-4'>Our packages</h2>
        <div className='row pb-4 mb-4'>
          <div className='col-md-4 col-sm-12'>
          <table className="table">
            <thead>
              <tr>
                <th className='text-center' scope="col">Cheap Packages</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className='d-flex justify-content-between'><p>Nwe York</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Maldives</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Sri Lanka</p><p>$1300</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Nepal</p><p>$1300</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Thailand</p><p>$1800</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Singapore</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Bangladesh</p><p>$1530</p></td>
              </tr>
            </tbody>
          </table>
          </div>

          <div className='col-md-4 col-sm-12'>
          <table className="table">
            <thead>
              <tr>
                <th className='text-center' scope="col">Luxury Packages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='d-flex justify-content-between'><p>Nwe York</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Maldives</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Sri lanka</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Nepal</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Thailand</p><p>$15054</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Singapore</p><p>$1540</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Bangladesh</p><p>$1230</p></td>
              </tr>
            </tbody>
          </table>
          </div>

          <div className='col-md-4 col-sm-12'>
          <table className="table col-4">
            <thead>
              <tr>
                <th className='text-center' scope="col">Camping Packages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='d-flex justify-content-between'><p>Nwe York</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Maldives</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Sri lanka</p><p>$1200</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Thailand</p><p>$1120</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Nepal</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Singapore</p><p>$1500</p></td>
              </tr>
              <tr>
              <td className='d-flex justify-content-between'><p>Bangladesh</p><p>$150000</p></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;