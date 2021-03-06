import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Gallary from './components/Gallary/Gallary';
import AuthProvider from './components/Context/AuthProvider';
import Destinations from './components/Destinations/Destinations';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import UpdateBooking from './components/UpdateBooking/UpdateBooking';

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('https://floating-forest-93132.herokuapp.com/destinations')
      .then(res => res.json())
      .then(data => setDestinations(data))
  }, [])
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home destinations={destinations}></Home>
            </Route>
            <Route path='/home'>
              <Home destinations={destinations}></Home>
            </Route>
            <Route exact path='/destinations'>
              <Destinations destinations={destinations}></Destinations>
            </Route>
            <Route path='/gallary'>
              <Gallary></Gallary>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path='/destinations/:userId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/booking/update/:id'>
              <UpdateBooking></UpdateBooking>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
