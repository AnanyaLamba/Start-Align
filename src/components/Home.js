import React from "react";
import "./Home.css";
const Home = () => {
    return ( 
    <div className="home d-flex justify-content-center align-items-center">
         <div className="container d-flex justify-content-center align-items-center flex-column">
            <h2 className="text-center">Organize your <br/> work and life, finally</h2>
            <p className="text-center">Become focused , organized, and <br />calm with
            StartAlign app.</p>
            <button className="home-btn p-2" >Make project List</button>
        </div>
        
    </div> );
}
 
export default Home;