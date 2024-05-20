import './App.css';
import Register from './Login/register';
import Login from './Login/login';
import Home from './Login/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigate from './Login/Navigation';
import PersonalDetails from './PersonalDetails';
import Searchride from './Login/TakeRide';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navigate/>
    <Routes>
      
      <Route path="/register" element={<Register/>}>Register</Route>
      <Route path="/login" element={<Login/>} >Login</Route>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/personaldetails" element={<PersonalDetails/>}>Profile</Route>
      <Route path="/searchride" element={<Searchride/>}>Ride</Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
