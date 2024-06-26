import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");
 
const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    user_id: user_id,
    fname: '',
    license: '',
    aadhar: '',
    number: ''
  });

  const navigate = useNavigate();
  
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    // else{
    //   fetchprofile();
    // }
  }, [token, navigate]);
 
 const [profile,setProfile] = useState([]);

  // const fetchprofile = async(e) =>{
  //   e.preventDefault();
  //   try{
  //     const fetch = await axios.get('http://localhost:4000/getprofilebyuserid',{user_id});
  //   //  res.json(fetch);
  //   }
  //   catch(error){
  //     console.error(error);
  //   }
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const formData = new FormData();
      // formData.append('fname', fname);
      // formData.append('aadhar', aadhar);
      // formData.append('license', license);
      // formData.append('number', number);
 
      await axios.post('http://localhost:4000/profile', formData, {
        headers: {
          'Authorization': `${token}`
        }
      });
      console.log('Profile details added successfully');
      window.location.href = "/home"
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  return (
    <div className="container mt-4">
      <form className="border p-4" onSubmit={handleSubmit}>
        <h1> My Profile </h1>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Name: </label>
          <div className="col-sm-10">
            <input
              type="name"
              className="form-control"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
            {/* {error && error.includes('email') && <div className="text-danger">{error}</div>} */}
          </div>
        </div>
 
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Aadhar Number:</label>
          <div className="col-sm-10">
            <input
              type="name"
              className="form-control"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
            />
            {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">License Number:</label>
          <div className="col-sm-10">
            <input
              type="name"
              className="form-control"
              name="license"
              value={formData.license}
              onChange={handleChange}
            />
            {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Mobile Number:</label>
          <div className="col-sm-10">
            <input
              type="name"
              className="form-control"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Profile
        </button>
        <br />
        <br />
        {/* <Link to="/register">
                <button type="submit" class="btn btn-primary">
                  Don't have account ? Register
                </button>
              </Link> */}
      </form>
    </div>
  )
}
 
export default PersonalDetails;