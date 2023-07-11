import './CSS/App.css'
import Home from './Home'
import AboutMeEducation from './AboutMeEducation'
import AboutMePersonal from './AboutMePersonal'
import NavbarMain from './components/Navbar';
import ResumeMain from './Resume'
import TechAndFrameworks from './TechAndFrameworks'
import Projects from './Projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Model } from './components/CRTLogo';
import { OrbitControls } from "@react-three/drei";
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react';



import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
    <NavbarMain/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Education" element={<AboutMeEducation/>}/>
          <Route path="/Personal" element={<AboutMePersonal/>}/>
          <Route path="/Technologies" element={<TechAndFrameworks/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Resume" element={<ResumeMain/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
