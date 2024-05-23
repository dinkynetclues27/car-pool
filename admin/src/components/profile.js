import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../style.css";


const ProfileFetch = () =>{
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [profiles,setProfile] = useState([]);
    const [editIndex, seteditIndex] = useState(-1);
    const [editprofile, seteditprofile] = useState({
      profile_status : ""
    }); 

    useEffect(() => {
        fetchProfiles();
      }, []);

      const fetchProfiles = async () => {
        try {
          const response = await axios.get("http://localhost:4000/getprofile", {
            headers: {
              Authorization: `${token}`,
            },
          });
          setProfile(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      const handleEdit = (index) => {
        const editedProfile = profiles[index];
        seteditprofile(editedProfile);
        seteditIndex(index);
      };

      const handleCancelEdit = () => {
        seteditIndex(-1);
        seteditprofile({
          profile_status:""
        });
      };

      const handleSaveEdit = async () => {
        try {
          const response = await axios.put(
            `http://localhost:4000/updateprofilestatus/${editprofile.profile_id}`,
            editprofile,
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );
          console.log(response.data.message);
          fetchProfiles();
          handleCancelEdit();
        } catch (error) {
          console.error("Error updating order:", error);
        }
      };


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        seteditprofile((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleDelete = async (profileId) => {
        try {
          await axios.delete(`http://localhost:4000/deleteprofile/${profileId}`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          fetchProfiles();
        } catch (error) {
          console.error("Error deleting profile:", error);
        }
      };

      return (
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <Sidebar />
            <div className="col py-3">
              <div className="container">
                {/* <div className="d-flex justify-content-end mb-3">
                  <Link to="/product" className="btn btn-primary">
                    Add Product
                  </Link>
                </div> */}
                <h2>Profiles</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Carpooler Name</th>
                      <th>License</th>
                      <th>Aadhar</th>
                      <th>Number</th>
                      <th>Approved</th>
                        <th>Edit</th>
                      <th>Delete</th>

                    </tr>
                  </thead>
                  <tbody>
                    {profiles.map((profile, index) => {
                      console.log(profile)
                      return (
                        <tr key={profile.profile_id}> 
                          <td>{profile.fname}</td>
                          <td>{profile.license}</td>
                          <td>{profile.aadhar}</td>
                          <td>{profile.number}</td>
                          <td>{profile.profile_status}</td>
                          <td>
                        <button
                          style={{ color: "blue", borderColor: "blue" }}
                          onClick={() => handleEdit(index)}
                        >
                          <FaEdit />
                        </button>
                      </td>
                          <td>
                        <button
                          style={{ color: "red", borderColor: "red" }}
                          onClick={() => handleDelete(profile.profile_id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {editIndex !== -1 && (
        <div className="popup-container">
          <div className="popup">
            <h2>Edit Profile</h2>
            <button
              className="close-button"
              onClick={handleCancelEdit}
            ></button>
            <form>
              <div className="mb-3">
                <label htmlFor="profile_status">Profile Status</label>
                <select
                  id="profile_status"
                  name="profile_status"
                  value={editprofile.profile_status}
                  onChange={handleInputChange}
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
           
            </form>
            <button type="button" onClick={handleSaveEdit}>
              Save
            </button>
            <button type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      )}

          </div>
          )
}

export default ProfileFetch;