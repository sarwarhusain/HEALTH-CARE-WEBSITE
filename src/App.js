import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Header from './Pages/Shared/Header/Header';
import NotFounde from './Pages/NotFounde/NotFounde';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import FindDoctors from './Pages/FindDoctors/FindDoctors';
import ConfirmAppointment from './Pages/ConfirmAppointment/ConfirmAppointment';
import GettingAppointment from './Pages/GettingAppoint/GettingAppoint';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking/Booking';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Sarvices from './Pages/Sarvices/Sarvices';
import Footar from './Pages/Home/Footar/Footar';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path='/services'>
              <Sarvices></Sarvices>
            </Route>
            <PrivateRoute path="/findDoctor">
              <FindDoctors></FindDoctors>
            </PrivateRoute>
            <Route path="/confirmAppointment">
              <ConfirmAppointment></ConfirmAppointment>
            </Route>
            <PrivateRoute path="/gettingAppoint">
              <GettingAppointment></GettingAppointment>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/booking/:consultantname">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFounde></NotFounde>
            </Route>
          </Switch>
          <Footar></Footar>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
