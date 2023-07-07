import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './CSS/App.css'
import './CSS/AboutMeEducation.css'
import BackToTopButton from "./components/backToTopButton";

const AboutMeEducation = () => {
    return ( 
      <>
      <section className="flex-container">
        <h1 id="educationH1">My Education</h1>
        <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1683908661/Web%20Dev%20Portfolio/Penn_State_Behrend_logo.svg_fdnl2n.png" alt="Penn State Behrend Logo" className="behrendLogo"/>
        <div>
            <p className="firstP" id="education1P">&nbsp;&nbsp;&nbsp;&nbsp;I studied Computer Science at Penn State Erie, The Behrend College from 2017 to 2022. I graduated in August of 2022, earning a Bachelor of Science Degree in Computer Science.</p>
            <p className="firstP" id="education1P">&nbsp;&nbsp;&nbsp;&nbsp;If you are interested in viewing my degree, you can check out the Penn State CeDiploma Validation here:</p>  
              <a href="https://www.registrar.psu.edu/graduation/diplomas/cediploma/validate" target="_blank" rel="noreferrer">
              <button className="validationLink btn btn-outline-light">Penn State CeDiploma Validation Site</button>
              </a>
            
            <p className="cedidInfo">For CeDiD input: "22KU-6ZRT-T9S7" and for the first two letters of the name input: "Ty".</p>
        
            <img className="compSciBehrend" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1685565371/Web%20Dev%20Portfolio/9_TB1b4CRnU_mnikmi.jpg" alt="Behrend Computer Science Department" />
        </div>
        </section>
            

          <section>
          <div className="secondDiv">
            <h3>Extracurriculars At University</h3>
            <p className="secondP" id="education2P">While attending Penn State Behrend I was a member of the "Behrend Veg Club". As a member of the Veg Club I assisted in volunteering at animal shelters, 
              was responsible for tending to the on campus garden, and also helped introduce vegan and vegetarian meal options for campus dining menus.</p>
            <p className="secondP" id="education2P">I was also a member of the Behrend, "I Lift Weights Club", which was an athletic club where interested participants would meet up at the on campus gym and log their excercise activity and workout with a focus on strenght training exercises.</p>
           <img className="vegClubLogo" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1683916149/Web%20Dev%20Portfolio/vegclub6_cwjsve.png" alt="Veg Club Logo" />
           <img className="junkerCenter" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1685645146/Web%20Dev%20Portfolio/junker_copy_gnn3mx.jpg" alt="" />
           </div>
           
        </section>

      <section>
        <div className="thirdDiv">
          <h2 className="otherEdH2">Other Education</h2>
          <p className="thirdP" id="education3P">During my final semester at Penn State Behrend I decided that I wanted to fully pursue web development as my career. After graduating, 
          I took some time off to recuperate after university, then enlisted in a 64 hour Udemy full-stack web devlopment course.</p>
          <p className="thirdP" id="education3P">My certificate can be found by clicking the link below:</p>
          <a href="https://www.udemy.com/certificate/UC-c7d41c9c-4105-4199-b018-1d60a7925bf7/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email" target="_blank" rel="noreferrer">
            <button className="udemyLink btn btn-outline-light">Udemy Course Certification</button>
          </a>
          <p className="thirdP" id="selfTeaching3P">I have also done hours of self teaching in conjuction by watching free courses about technologies and frameworks I found useful or interesting such as ReactJS, TypeScript, ThreeJS and more. Taking the knowledge from those many courses and then attempting to implement them by myself taught me not only how to utilize the technology, but how to think about solutions and ways to complete goals. </p>
        </div>
        <img id="udemyCourseLogo" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686170021/Web%20Dev%20Portfolio/0_KlN28Ht5Jcyup-VA_skcksm.jpg" alt="Web Developer Course Logo" />
        <img id="reactIcon" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686170669/Web%20Dev%20Portfolio/React-icon.svg_afskpd.png" alt="React Icon" />
        <img id="nodeIcon" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686170962/Web%20Dev%20Portfolio/node-js_dlmoi3.svg" alt="Node JS Icon" />
        <img id="jsIcon" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686170690/Web%20Dev%20Portfolio/JavaScript-logo_lxmvu1.png" alt="JS Icon" />
        <img id="tsIcon" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686170664/Web%20Dev%20Portfolio/Typescript_logo_2020.svg_sudbla.png" alt="TS Icon" />
      </section>
      <BackToTopButton/>
      </>
     );
}
 
export default AboutMeEducation;