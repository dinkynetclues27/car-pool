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

  const [profileExists,setProfileExists] = useState(false);
  const [profileData,setProfileData] = useState(null);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
 
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






// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';
// const user_id = localStorage.getItem("user_id");
// const token = localStorage.getItem("token");

// const PersonalDetails = () => {
//   const [formData, setFormData] = useState({
//     user_id: user_id,
//     fname: '',
//     license: '',
//     aadhar: '',
//     number: ''
//   });
//   const [profileExists, setProfileExists] = useState(false);
//   const [profileData, setProfileData] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     } else {
//       // Check if profile exists for the logged-in user
//       checkProfileExistence();
//     }
//   }, [token, navigate]);

//   const checkProfileExistence = async () => {
//     try {
//       const response = await axios.post('http://localhost:4000/getProfile', { user_id }, {
//         headers: {
//           'Authorization': `${token}`
//         }
//       });
//       if (response.data.profile) {
//         setProfileExists(true);
//         setProfileData(response.data.profile);
//         setFormData({
//           ...formData,
//           fname: response.data.profile.fname,
//           license: response.data.profile.license || '',
//           aadhar: response.data.profile.aadhar,
//           number: response.data.profile.number
//         });
//       }
//     } catch (error) {
//       console.error('Error checking profile existence:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4000/profile', formData, {
//         headers: {
//           'Authorization': `${token}`
//         }
//       });
//       console.log('Profile details added successfully');
//       window.location.href = "/home"
//     } catch (error) {
//       console.error('Error adding profile:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="container mt-4">
//       {profileExists ? (
//         <div>
//           <h1> My Profile </h1>
//           {/* Display existing profile data */}
//           <p>Name: {profileData.fname}</p>
//           <p>Aadhar Number: {profileData.aadhar}</p>
//           <p>License Number: {profileData.license}</p>
//           <p>Mobile Number: {profileData.number}</p>
//           {/* Add an option to update profile */}
//           <button className="btn btn-primary" onClick={() => setProfileExists(false)}>Update Profile</button>
//         </div>
//       ) : (
//         <form className="border p-4" onSubmit={handleSubmit}>
//           <h1> My Profile </h1>
//           <div className="row mb-3">
//             <label className="col-sm-2 col-form-label">Name: </label>
//             <div className="col-sm-10">
//               <input
//                 type="name"
//                 className="form-control"
//                 name="fname"
//                 value={formData.fname}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label className="col-sm-2 col-form-label">Aadhar Number:</label>
//             <div className="col-sm-10">
//               <input
//                 type="name"
//                 className="form-control"
//                 name="aadhar"
//                 value={formData.aadhar}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label className="col-sm-2 col-form-label">License Number:</label>
//             <div className="col-sm-10">
//               <input
//                 type="name"
//                 className="form-control"
//                 name="license"
//                 value={formData.license}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label className="col-sm-2 col-form-label">Mobile Number:</label>
//             <div className="col-sm-10">
//               <input
//                 type="name"
//                 className="form-control"
//                 name="number"
//                 value={formData.number}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <button type="submit" className="btn btn-primary">Add Profile</button>
//         </form>
//       )}
//     </div>
//   )
// }

// export default PersonalDetails;
