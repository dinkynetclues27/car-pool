import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login/login';
import Home from './Home';
import Register from './Login/register';
import PersonalDetails from './PersonalDetails'
import CarDetails from './CarDetails';
import Navigate from './Navigation';
import Footer from './Footer';
import Request from './Login/Request';
function App() {
  return (
   <div>
     
      <BrowserRouter>
      <Navigate/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path = '/register' element={<Register/>}/>
      <Route path = '/personaldetails' element={<PersonalDetails/>}/>
      <Route path = '/cardetails' element={<CarDetails/>}/>
      <Route path = '/request' element={<Request/>}/>
      </Routes>
    
      </BrowserRouter>
      <Footer/>
   </div>
   
  );
}

export default App;
