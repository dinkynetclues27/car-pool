import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Request = () => {
    const [requestedPerson, setRequestedPerson] = useState(null);

    useEffect(() => {
        const fetchRequest = async () => {
            const userId = localStorage.getItem('user_id');
            try {
                const response = await axios.get(`http://localhost:4000/fetchrequest/${userId}`);
                setRequestedPerson(response.data.requestedPerson);
            } catch (error) {
                console.error('Error fetching requested person:', error);
            }
        };
    
        fetchRequest();
    }, []);
    
    const handleAccept = async () => {
        console.log(requestedPerson.user_id);
        try {
            await axios.put(`http://localhost:4000/acceptrequest/${requestedPerson.request_id}`);
            console.log('Request accepted successfully');
        } catch (error) {
            console.error('Error accepting request:', error);
        }
    };

    const handleReject = async () => {
        console.log(requestedPerson);
        try {
            await axios.put(`http://localhost:4000/rejectrequest/${requestedPerson.request_id}`);
            console.log('Request rejected successfully');
        } catch (error) {
            console.error('Error rejecting request:', error);
        }
    };

    return (
        <div>
            {requestedPerson && (
                <div>
                    <h2>Requested Person Details:</h2>
                    <p>Name: {requestedPerson.fname}</p>
                    <p>Mobile Number: {requestedPerson.number}</p>
                    <button onClick={handleAccept}>Accept</button>
                    <button onClick={handleReject}>Reject</button>
                </div>
             )} 
        </div>
    );
};

export default Request;