import logo from './logo.svg';
import './App.css';
// import Login from './controllers/login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login'
import Dashboard from './components/dashboard';
import ProfileFetch from './components/profile';
import Fetchcar from './components/fetchcar';
import Carrequest from './components/Carrequest';


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
            <Route path="/carrequest" element={<Carrequest/>}/>
          </Routes>

        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
