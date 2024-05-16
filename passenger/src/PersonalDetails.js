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
  }, [token, navigate]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Name: </label>
          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
            {/* {error && error.includes('email') && <div className="text-danger">{error}</div>} */}
          </div>
        </div>
 
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Aadhar Number:</label>
          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
            />
            {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">License Number:</label>
          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              name="license"
              value={formData.license}
              onChange={handleChange}
            />
            {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Mobile Number:</label>
          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Add Profile
        </button>
        <br />
        <br />

      </form>
    </div>
  )
}
 
export default PersonalDetails;