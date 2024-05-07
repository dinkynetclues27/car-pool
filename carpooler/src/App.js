import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login/login';
import Home from './Home';
import Register from './Login/register';
import CarDetails from './CarDetails'
function App() {
  return (
   <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path = '/register' element={<Register/>}/>
      <Route path = '/personaldetails' element={<CarDetails/>}/>
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
