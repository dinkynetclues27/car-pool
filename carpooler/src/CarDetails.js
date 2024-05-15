import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

const CarDetails = () => {
    const [fname, setName] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [license, setLicense] = useState('');
    const [number, setNumber] = useState('');
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append('name', fname);
          formData.append('aadhar', aadhar);
          formData.append('license', license); 
          formData.append('number', number); 
          formData.append('user_id', userId);

          await axios.post('http://localhost:4000/addprofile', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization' : `${token}`
            }
          });
          console.log('Profile details added successfully');
          window.location.href="/home"
        } catch (error) {
          console.error('Error adding product:', error);
        }
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
                            value={fname}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {/* {error && error.includes('email') && <div className="text-danger">{error}</div>} */}
                    </div>
                </div>
                {/* <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Car Name:</label>
                <div class="col-sm-10">
                  <input
                    type="name"
                    class="form-control"
                    name="carname"
                    value={carname}
                    onChange={this.handleChange}
                  /> */}
                {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
                {/* </div>
              </div> */}
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Aadhar Number:</label>
                    <div class="col-sm-10">
                        <input
                            type="name"
                            class="form-control"
                            name="aadharnumber"
                            value={aadhar}
                            onChange={(e) => setAadhar(e.target.value)}
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
                            name="licensenumber"
                            value={license}
                            onChange={(e) => setLicense(e.target.value)}
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
                            name=" mobilenumber"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                    Add Car
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

export default CarDetails;