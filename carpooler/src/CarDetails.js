import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");

const CarDetails = () => {
    const [formData, setFormData] = useState({
        user_id: user_id,
        car_name: '',
        chasis_number : '',
        seats_available: '',
        car_plate_number: '',
        date: '',
        time:'',
        price:''
    });

    const navigate = useNavigate();
    // useEffect(() => {
    //   if (!token) {
    //     navigate("/login");
    //   }
    // }, [token, navigate]);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
     
          await axios.post('http://localhost:4000/caradd', formData, {
            headers: {
              'Authorization': `${token}`
            }
          });
          console.log('Car details added successfully');
          window.location.href = "/home"
        } catch (error) {
          console.error('Error adding car:', error);
        }
      };


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
     



      return (
        <div className="container mt-4">
          <form className="border p-4" onSubmit={handleSubmit}>
            <h1> Ride Details </h1>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Car Name: </label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  name="car_name"
                  value={formData.car_name}
                  onChange={handleChange}
                />
                {/* {error && error.includes('email') && <div className="text-danger">{error}</div>} */}
              </div>
            </div>
     
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Chasis Number:</label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  name="chasis_number"
                  value={formData.chasis_number}
                  onChange={handleChange}
                />
                {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Seats available:</label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  name="seats_available"
                  value={formData.seats_available}
                  onChange={handleChange}
                />
                {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Car Plate:</label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  name="car_plate_number"
                  value={formData.car_plate_number}
                  onChange={handleChange}
                />
                {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">From:</label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  name="from_destination"
                  value={formData.from_destination}
                  onChange={handleChange}
                />
                {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">To:</label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  name="to_destination"
                  value={formData.to_destination}
                  onChange={handleChange}
                />
                {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Fare:</label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
                {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Date:</label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Time:</label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
                {/* {error && error.includes('password') && <div className="text-danger">{error}</div>}  */}
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Add Ride
            </button>
            <br />
            <br />
          </form>
        </div>
      )
}

export default CarDetails;