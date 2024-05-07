import React , {useState,useEffect}from 'react';
import Sidebar from './sidebar';
import axios from "axios"

const Dashboard = () => {
//   const [deliveredOrdersCount, setDeliveredOrdersCount] = useState(0);
//   const [intransitOrdersCount, setInTransitOrdersCount] = useState(0);
//   const [placedOrdersCount, setPlacedOrdersCount] = useState(0);


//   useEffect(() => {
//     fetchInTransitOrdersCount();
//     fetchDeliverdOrdersCount();
//     fetchPlacedOrdersCount();
//   }, []);

//   const fetchInTransitOrdersCount = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/intransit");
//       setInTransitOrdersCount(response.data.intransitOrdersCount);
//     } catch (error) {
//       console.error("Error fetching in-transit orders count:", error);
//     }
//   };

//   const fetchDeliverdOrdersCount = async () => {
//     try{
//       const response = await axios.get("http://localhost:4000/delivered")
//       setDeliveredOrdersCount(response.data.deliveredOrdersCount)
//     }
//     catch(error){
//       console.error("Error fetching delivered orders count:", error);
//     }
//   }

//   const fetchPlacedOrdersCount = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/placed");
//       setPlacedOrdersCount(response.data.placedOrdersCount);
//     } catch (error) {
//       console.error("Error fetching placed orders count:", error);
//     }
//   };

return(

    <div className="container-fluid">
    <div className="row flex-nowrap">
      <Sidebar/>
        <div className="col py-3">
         
    
    <div className="container">
      <div className="row justify-content-center mt-3">
        {/* <div className="col-md-4">
          <div className="card bg-primary text-white p-3 ">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <p className="card-text"> Request pending
                </p>
            </div>
          </div>
        </div> */}
        <div className="col-md-4">
          <div className="card bg-success text-white p-3">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <p className="card-text">Request Approved</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-danger text-white p-3">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <p className="card-text">Request Pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
</div>
)
}
export default Dashboard;