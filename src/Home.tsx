import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './CSS/Home.css'
import './CSS/App.css'
import { LinkContainer} from "react-router-bootstrap"



const Home = () => {
    return (  
        <div className="homePage">
            <img id="mainImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1683662944/Web%20Dev%20Portfolio/photo-1573655349936-de6bed86f839_4_jgvtxz.png" alt="" />
                <h1 className="titleText firstTitle">Tyler Erdos</h1>
            <section className="animation">
                <div className="secondTitle"><div>Front End Web Developer</div></div>
                <div className="thirdTitle"><div>Full Stack Developer</div></div>
                <div className="fourthTitle"><div>Future Team Member</div></div>
            </section>
            <LinkContainer to="/Projects"><a id="mainBtnLink" ><button className="mainButton btn btn-outline-light">View Projects</button></a></LinkContainer>
        </div>
    );
}
 
export default Home;