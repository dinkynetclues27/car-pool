import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Sidebar from "./sidebar";
import "../style.css";

const Carrequest = ()=>{
    const token = localStorage.getItem("token");
    const [requests,setrequests] = useState([]);

    useEffect(() => {
        fetchRequests();
      }, []);

      const fetchRequests = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/fetchallrequest`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          setrequests(response.data.fetchallrequest);       
          console.log(response.data);
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
                          <h1>Request</h1>
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Car Id</th>
                                <th>User Id</th>
                                <th>Request Status</th>
                                <th>Request Accept</th>
                              </tr>
                            </thead>
                            <tbody>
                            {requests.map((request,index)=>{
                            
                                <tr key={request.request_id}>

                                    <td>{request.car_id}</td>
                                    <td>{request.user_id}</td>
                                    <td>{request.request_status}</td>
                                    <td>{request.request_accept}</td>
                                    
                                </tr>   
                            })}
                            </tbody>
                          </table>
          
                   </div>
          
                          </div>
                          </div>
          
                    </div>
                )
}

export default Carrequest;