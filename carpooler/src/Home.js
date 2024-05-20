import React from 'react';
import carImage from '../src/car.PNG'; 
import carImage2 from '../src/car2.jpg';
const Home = () => {
    return (
        <>
        <br></br>
        <div style={styles.container}>
     
            <img src={carImage} alt="car" style={styles.image} />
            <h1 style={styles.heading}>Car Pooler</h1>
        </div>
        <div className="card mb-3 mx-auto" style={{ maxWidth: '540px', border: 'none' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img src={carImage2} className="img-fluid rounded-start" style={{ height: '100%', objectFit: 'cover' }} alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body" style={{ marginTop: '20px' }}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '80vh',
        justifyContent: 'center', 
    },
    heading: {
        textAlign: 'center', 
    },
    image: { 
        maxWidth: '100%',
        maxHeight: '100%',
    }
};


export default Home;
