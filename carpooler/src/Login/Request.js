import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Request = () => {
    const [requestedPerson, setRequestedPerson] = useState([]);
   
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
    
    const handleAccept = async (requestId) => {
        console.log(requestedPerson.userId);
        try {
            await axios.put(`http://localhost:4000/acceptrequest/${requestId}`);
            console.log('Request accepted successfully');
        } catch (error) {
           console.error("Error accepting request:",error)
        }
    };

    const handleReject = async (requestId) => {
        console.log(requestedPerson.userId);
        try {
            await axios.put(`http://localhost:4000/rejectrequest/${requestId}`);
            console.log("Request rejected successfully")
        } catch (error) {
            console.error("Error rejecting request",error)
        }
    };

    return (
        // <div>
        //     {requestedPerson && (
        //         <div>
        //             <h2>Requested Person Details:</h2>
        //             <p>Name: {requestedPerson.fname}</p>
        //             <p>Mobile Number: {requestedPerson.number}</p>
        //             <button onClick={handleAccept}>Accept</button>
        //             <button onClick={handleReject}>Reject</button>
        //         </div>
        //      )} 
        // </div>

        <>
        {console.log(requestedPerson)}
        {requestedPerson.length > 0 ? (
            <div className="card mb-3" style={{ maxWidth: '18rem' }} >
              {requestedPerson.map((request, index) => {
                // console.log(request)
                return(
                    <div className="card-body" key={request.request_id}>
                    <p className="card-text"> Name: {request.fname}</p>
                    <p className="card-text"> Contact Number:{request.number}</p>
                   <button onClick={()=>handleAccept(request.request_id)}>Accept</button>
                   <button onClick={()=>handleReject(request.request_id)}>Reject</button>
                  </div>
                )
              } 
              )}
            </div>
          ) : null}
        </>
    );
};

export default Request;