import React,{useEffect,useState} from 'react';
import "../style.css";
import Sidebar from "./sidebar";
import axios from "axios";

const Fetchcar = ()=>{
    const token = localStorage.getItem("token");
    const [cars,setcars] = useState([]);

    useEffect(() => {
        fetchCars();
      }, []);

    const fetchCars = async () => {
        try {
          const response = await axios.get("http://localhost:4000/fetchcar", {
            headers: {
              Authorization: `${token}`,
            },
          });
          setcars(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };


    return(
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
                <h1>Cars</h1>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Car Owner's Name</th>
                      <th>Car Name</th>
                      <th>Chasis Number</th>
                      <th>Seats Available</th>
                      <th>Car Plate Number</th>
                      <th>From Destination</th>
                      <th>To Destination</th>
                      <th>Fare</th>
                      <th>Date</th>
                        <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cars.map((car, index) => {
                      console.log(car)
                      return (
                        <tr key={car.car_id}> 

                          <td>{car.fname}</td>
                          <td>{car.car_name}</td>
                          <td>{car.chasis_number}</td   >
                          <td>{car.seats_available}</td>
                          <td>{car.car_plate_number}</td>
                          <td>{car.from_destination}</td>
                          <td>{car.to_destination}</td>
                          <td>{car.price}</td>
                          <td>{car.date}</td>
                          <td>{car.time}</td>

                        

                        </tr>
                      )
                    })}
                  </tbody>
                </table>

         </div>

                </div>
                </div>

          </div>
    )
};

export default Fetchcar;