import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Request = () => {
    const [requestedPerson, setRequestedPerson] = useState(null);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const response = await axios.get('http://localhost:4000/fetchrequest');
                setRequestedPerson(response.data.requestedPerson);
            } catch (error) {
                console.error('Error fetching requested person:', error);
            }
        };

        fetchRequest();
    }, []);

    const handleAccept = async () => {
        try {
            await axios.put(`http://localhost:4000/acceptrequest/${requestedPerson.car_id}`);
            console.log('Request accepted successfully');
        } catch (error) {
            console.error('Error accepting request:', error);
        }
    };

    const handleReject = async () => {
        try {
            await axios.put(`http://localhost:4000/rejectrequest/${requestedPerson.car_id}`);
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
