import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './CSS/Home.css'
import './CSS/App.css'



const Home = () => {
    return (  
        <div>
            <img id="mainImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1683662944/Web%20Dev%20Portfolio/photo-1573655349936-de6bed86f839_4_jgvtxz.png" alt="" />
            <section>
                <h1 className="titleText">Tyler Erdos</h1>
                <h3 className="titleText">Front End Web Developer</h3>  
            </section>
            <button className="mainButton btn btn-outline-light">View Projects</button>
        </div>
    );
}
 
export default Home;