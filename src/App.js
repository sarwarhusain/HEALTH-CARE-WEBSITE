import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFounde from './Pages/NotFounde/NotFounde';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import FindDoctors from './Pages/FindDoctors/FindDoctors';
import ConfirmAppointment from './Pages/ConfirmAppointment/ConfirmAppointment';
import GettingAppointment from './Pages/GettingAppoint/GettingAppoint';
import Consultants from './Pages/Home/Consultants/Consultants';
import Sarvices from './Pages/Sarvices/Sarvices';
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
            <Route path="/services">
              <Sarvices></Sarvices>
            </Route>

            <Route path="/findDoctor">
              <FindDoctors></FindDoctors>
            </Route>
            <Route path="/confirmAppointment">
              <ConfirmAppointment></ConfirmAppointment>
            </Route>
            <Route path="/getttingAppoint">
              <GettingAppointment></GettingAppointment>
            </Route>
            <Route path="/footer">
              <Footer></Footer>
            </Route>
            <Route path="*">
              <NotFounde></NotFounde>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
