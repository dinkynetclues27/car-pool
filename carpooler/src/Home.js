import React from 'react';
import {Link} from 'react-router-dom';
const Home = () =>{
    
    return(
        <Link to="/personaldetails" className="btn btn-primary">
       Add Personal Details
      </Link>
    )
}

export default Home;