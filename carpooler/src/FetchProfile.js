import React,{useState,useEffect} from 'react';
import axios from 'axios';

const FetchProfile = async()=>{
    const [profile, setProfile] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        
        const userId = localStorage.getItem('user_id');
        if (userId) {
          fetchProfile(userId);
        } else {
          setMessage('User ID not found in local storage');
        }
      }, []);

      const fetchProfile = async (userId) => {
        try {
          const response = await axios.post('http://localhost:4000/getProfile', { user_id: userId });
          const data = response.data;
          if (data.profile) {
            setProfile(data.profile);
            setMessage(data.message);
          } else {
            setMessage(data.message);
          }
        } catch (error) {
          console.error('Error:', error);
          setMessage('Internal server error');
        }
      };

    return(
        <div>
      <h1>Get Profile</h1>
      {message && <p>{message}</p>}
      {profile && (
        <div>
          <h2>Profile Details</h2>
          <p>User ID: {profile.user_id}</p>
          <p>First Name: {profile.fname}</p>
          
        </div>
      )}
    </div>
    )
}
export default FetchProfile;