import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login/login';
import Home from './Home';
import Register from './Login/register';
import PersonalDetails from './PersonalDetails'
import CarDetails from './CarDetails';
import Navigate from './Navigation';
function App() {
  return (
   <div>
     
      <BrowserRouter>
      <Navigate/>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path = '/register' element={<Register/>}/>
      <Route path = '/personaldetails' element={<PersonalDetails/>}/>
      <Route path = '/cardetails' element={<CarDetails/>}/>
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
