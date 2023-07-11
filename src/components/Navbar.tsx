import React, {Suspense} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Navbar.css"
import "bootstrap/dist/js/bootstrap.min.js";
import {Canvas} from '@react-three/fiber'
import { LinkContainer} from "react-router-bootstrap"
import { OrbitControls } from "@react-three/drei";
import { Model } from '../components/CRTLogo';


const NavbarMain = () => {
  return (

    <nav className="navbar sticky-top navbar-expand-xl navbar-custom">
      <div className="container-fluid">
      <LinkContainer to="/">
        <a className="navbar-brand CrtModel" >
          <Canvas className="canvas">
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1.2}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>
              <Model/>
            </Suspense>
          </Canvas>
          </a>
          </LinkContainer>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse allTabs" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <LinkContainer to="/"><a className="nav-link " aria-current="page">Home</a></LinkContainer>
            </li>

            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Me
              </a>
            <ul className="dropdown-menu">
              <li><LinkContainer to="/Education"><a className="dropdown-item" aria-current="page">Education</a></LinkContainer></li>
              <li><LinkContainer to="/Personal"><a className="dropdown-item" aria-current="page">Personal</a></LinkContainer></li>
            </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </a>
              <ul className="dropdown-menu">
                <li><LinkContainer to="/Technologies"><a className="nav-link " aria-current="page" id="techFrameworks">View Technology/Frameworks</a></LinkContainer></li> 
                <li><hr className="dropdown-divider" /></li>
                <li><LinkContainer to="/Projects"><a className="nav-link " aria-current="page" id="projects">All Projects</a></LinkContainer></li> 
              </ul>
            </li>

              <li className="nav-item">
                <LinkContainer to="/Resume"><a className="nav-link " aria-current="page">Resume</a></LinkContainer>
              </li>

          </ul>
        </div>
      </div>
    </nav>
    
  );
}


export default NavbarMain;
