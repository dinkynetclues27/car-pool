import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Searchride = () => {
  const [fromdestination, setformdestination] = useState('');
  const [todestination, settodestination] = useState('');
  const [searchResults, setSearchResults] = useState([]);


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
          <a href="#" class="btn btn-primary"> Request:{car.request} </a>
        </div>
      ))}
    </div>
  ) : null}
</div>

    </div>
  );
};

export default Searchride;
