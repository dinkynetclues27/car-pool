import logo from './logo.svg';
import './App.css';
// import Login from './controllers/login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login'
import Dashboard from './components/dashboard';
import ProfileFetch from './components/profile';
import Fetchcar from './components/fetchcar';


function App() {
  return (
    <div>
      <BrowserRouter>


        <div>
          <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/fetchprofile" element={<ProfileFetch/>} />
            <Route path="/fetchcar" element={<Fetchcar/>}/>
          </Routes>

        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
