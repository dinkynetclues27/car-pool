import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Searchride = () => {
  const [fromdestination, setformdestination] = useState('');
  const [todestination, settodestination] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [requestedCars, setRequestedCars] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/search', {
        from_destination: fromdestination,
        to_destination: todestination
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching for cars:', error);
    }
  };

  // const handleRequest = async (carId) => {
  //   const userId = localStorage.getItem('user_id');
  //   try {
  //     await axios.post(`http://localhost:4000/updaterequest`, {
  //       car_id: carId,
  //       user_id: userId
  //     });
  //   } catch (error) {
  //     console.error('Error making request:', error);
  //   }
  // };

    const handleRequest = async (carId) => {
    const userId = localStorage.getItem('user_id');
    try {
      await axios.post(`http://localhost:4000/updaterequest`, {
        car_id: carId,
        user_id: userId
      });
      setRequestedCars([...requestedCars, carId]); 
    } catch (error) {
      console.error('Error making request:', error);
    }
  };

  useEffect(() => {
    
    const fetchRequestedCars = async () => {
      const userId = localStorage.getItem('user_id');
    
    };
    fetchRequestedCars();
  }, []); 


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fromdestination">From Destination:</label>
        <input
          type="text"
          id="fromdestination"
          value={fromdestination}
          onChange={(e) => setformdestination(e.target.value)}
          required
        />

        <label htmlFor="toDestination">To Destination:</label>
        <input
          type="text"
          id="todestination"
          value={todestination}
          onChange={(e) => settodestination(e.target.value)}
          required
        />

        <button type="submit">Search</button>
      </form>
        <br></br>
      <div >
  {searchResults.length > 0 ? (
    <div className="card mb-3" style={{ maxWidth: '18rem' }} >
      {searchResults.map((car, index) => (
        <div className="card-body" key={car.car_id}>
          <p className="card-text">Owner's Name: {car.fname}</p>
          <p className="card-text">Car Name: {car.car_name}</p>
          <p className="card-text">Chasis Number: {car.chasis_number}</p>
          <p className="card-text">Seats Available: {car.seats_available}</p>
          <p className="card-text">Car Plate Number: {car.car_plate_number}</p>
          <p className="card-text">From Destination: {car.from_destination}</p>
          <p className="card-text">To Destination: {car.to_destination}</p>
          <p className='card-text'>Fare: Rs.{car.price}</p>
          <p className='card-text'>Mobile number:{car.number}</p>
          <p className='card-text'>Date:{car.date}</p>
          <p className='card-text'>Time:{car.time}</p>
                 
                {/* <button
                  className="btn btn-primary"
                  onClick={() => handleRequest(car.car_id)}>
                  Request
                </button> */}

                  

                {/* <button className="btn btn-primary">
                  Pending
               </button> */}

              {requestedCars.includes(car.car_id) ? (
                  <button className="btn btn-primary" disabled>
                    Pending
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={() => handleRequest(car.car_id)}>
                    Request
                  </button>
                )}
               
          
        </div>
      ))}
    </div>
  ) : null}
</div>

    </div>
  );
};

export default Searchride;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Searchride = () => {
//   const [fromDestination, setFromDestination] = useState('');
//   const [toDestination, setToDestination] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [requestedCars, setRequestedCars] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/search', {
//         from_destination: fromDestination,
//         to_destination: toDestination
//       });
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error('Error searching for cars:', error);
//     }
//   };

//   const handleRequest = async (carId) => {
//     const userId = localStorage.getItem('user_id');
//     try {
//       await axios.post(`http://localhost:4000/updaterequest`, {
//         car_id: carId,
//         user_id: userId
//       });
//       setRequestedCars([...requestedCars, carId]); // Mark the car as requested
//     } catch (error) {
//       console.error('Error making request:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch requested cars for the current user (if needed)
//     const fetchRequestedCars = async () => {
//       const userId = localStorage.getItem('user_id');
//       // Make a request to fetch the requested cars for the current user
//       // Update the requestedCars state accordingly
//     };
//     fetchRequestedCars();
//   }, []); // Run this effect only once, on component mount

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="fromDestination">From Destination:</label>
//         <input
//           type="text"
//           id="fromDestination"
//           value={fromDestination}
//           onChange={(e) => setFromDestination(e.target.value)}
//           required
//         />

//         <label htmlFor="toDestination">To Destination:</label>
//         <input
//           type="text"
//           id="toDestination"
//           value={toDestination}
//           onChange={(e) => setToDestination(e.target.value)}
//           required
//         />

//         <button type="submit">Search</button>
//       </form>
//       <br />
//       <div>
//         {searchResults.length > 0 ? (
//           <div className="card mb-3" style={{ maxWidth: '18rem' }}>
//             {searchResults.map((car) => (
//               <div className="card-body" key={car.car_id}>
//                 <p className="card-text">Owner's Name: {car.fname}</p>
//                 <p className="card-text">Car Name: {car.car_name}</p>
//                 <p className="card-text">Chasis Number: {car.chasis_number}</p>
//                 <p className="card-text">Seats Available: {car.seats_available}</p>
//                 <p className="card-text">Car Plate Number: {car.car_plate_number}</p>
//                 <p className="card-text">From Destination: {car.from_destination}</p>
//                 <p className="card-text">To Destination: {car.to_destination}</p>
//                 <p className="card-text">Fare: Rs.{car.price}</p>
//                 <p className="card-text">Mobile number:{car.number}</p>
//                 <p className="card-text">Date:{car.date}</p>
//                 <p className="card-text">Time:{car.time}</p>

//                 {requestedCars.includes(car.car_id) ? (
//                   <button className="btn btn-primary" disabled>
//                     Pending
//                   </button>
//                 ) : (
//                   <button className="btn btn-primary" onClick={() => handleRequest(car.car_id)}>
//                     Request
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default Searchride;
