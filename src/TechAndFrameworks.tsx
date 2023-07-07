import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './CSS/App.css'
import './CSS/TechAndFrameworks.css'
import BackToTopButton from "./components/backToTopButton";


const TechAndFrameworks = () => {
    return (  
        <> 
        <h1 className="techFrameworksHeading">Technology and Frameworks Used in My Projects</h1>
        <h2 className="techFrameworksSubheading">(Many Projects Contain the Use of Multiple Languages/Frameworks and or Technologies)</h2>

        {/* Start of container One */}
        <div className="containerOne">

            {/* HTML */}
            <div className="techPageHTML">
                <a href=""><img className="techPageHTMLImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1687897569/Web%20Dev%20Portfolio/5847f5c3cef1014c0b5e489d_vkdtxq.png" alt="HTML5 Logo" /></a>
                <div className="middleHTML">
                    <div className="techPageHTMLText">Projects Containing Use of HTML</div>
                </div>
            </div>  

             {/* CSS  */}
            <div className="techPageCSS">
                <a href=""><img className="techPageCSSImg"src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1687897251/Web%20Dev%20Portfolio/62b2221b038aad4d3ed7ca30_qi1jol.png" alt="CSS3 Logo" /></a>
                <div className="middleCSS">
                    <div className="techPageCSSText">Projects Containing Use of CSS</div>
                </div>
            </div> 

            {/* JS */}
            <div className="techPageJS">
                <a href=""><img className="techPageJSImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686170690/Web%20Dev%20Portfolio/JavaScript-logo_lxmvu1.png" alt="JavaScript Logo" /></a>
                <div className="middleJS">
                    <div className="techPageJSText">Projects Containing Use of JavaScript</div>
                </div>
            </div>

            <div className="techPageNode">
                <a href=""><img className="techPageNodeImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686170962/Web%20Dev%20Portfolio/node-js_dlmoi3.svg" alt="Node JS Logo" /></a>
                <div className="middleNode">
                    <div className="techPageNodeText">Projects Containing Use of Node.JS</div>
                </div>
            </div>
            {/* End of Container One */}
        </div>

        <hr id="techPageHR"/>

        {/* Start of Container Two */}
        <div className="containerTwo">


            {/* React */}
            <div className="techPageReact">
                <a href=""><img className="techPageReactImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686170669/Web%20Dev%20Portfolio/React-icon.svg_afskpd.png" alt="React Logo" /></a>
                <div className="middleReact">
                    <div className="techPageReactText">Projects Containing Use of React</div>
                </div>
            </div> 

            {/* TypeScript */}
            <div className="techPageTS">
                <a href=""><img className="techPageTSImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686170664/Web%20Dev%20Portfolio/Typescript_logo_2020.svg_sudbla.png" alt="TypeScript Logo" /></a>
                <div className="middleTS">
                    <div className="techPageTSText">Projects Containing Use of TypeScript</div>
                </div>
            </div> 

            {/* Nodemon */}
            <div className="techPageNodemon">
                <a href=""><img className="techPageNodemonImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1688069938/Web%20Dev%20Portfolio/nodemon-logo-png-transparent_creezo.png" alt="Nodemon Logo" /></a>
                <div className="middleNodemon">
                    <div className="techPageNodemonText">Projects Containing Use of Nodemon</div>
                </div>
            </div> 

            {/* BCrypt */}
            <div className="techPageBCrypt">
                <a href=""><img className="techPageBCryptImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1688411543/Web%20Dev%20Portfolio/bcrypt_wqldfo.png" alt="BCrypt Logo" /></a>
                <div className="middleBCrypt">
                    <div className="techPageBCryptText">Projects Containing Use of BCrypt</div>
                </div>
            </div> 

        </div>
        {/* End of Container Two */}
        
        <hr id="techPageHR"/>

        {/* Start of Container Three */}
        <div className="containerThree">

            {/* MongoDB */}
            <div className="techPageMongoDB">
                <a href=""><img className="techPageMongoDBImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1688069938/Web%20Dev%20Portfolio/MongoDB-Logo_k8bxob.jpg" alt="MongoDB Logo" /></a>
                <div className="middleMongoDB">
                    <div className="techPageMongoDBText">Projects Containing Use of MongoDB</div>
                </div>
            </div>

            {/* Express */}
            <div className="techPageExpress">
                <a href=""><img className="techPageExpressImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1688069938/Web%20Dev%20Portfolio/express-facebook-share_z94gcz.png" alt="Express Logo" /></a>
                <div className="middleExpress">
                    <div className="techPageExpressText">Projects Containing Use of Express</div>
                </div>
            </div>

            
            {/* EJS */}
            <div className="techPageEJS">
                <a href=""><img className="techPageEJSImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1688069938/Web%20Dev%20Portfolio/overview-of-ejs-templating-engine_agzbpt.png" alt="EJS Logo" /></a>
                <div className="middleEJS">
                    <div className="techPageEJSText">Projects Containing Use of EJS</div>
                </div>
            </div>

        </div>
        {/* End of Container Three */}


        <hr id="techPageHR"/>

        {/* Start of Container Four */}
        <div className="containerThree">

            {/* Axios */}
            <div className="techPageAxios">
                <a href=""><img className="techPageAxiosImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1688069938/Web%20Dev%20Portfolio/Axios_epxark.png" alt="Axios Logo" /></a>
                <div className="middleAxios">
                    <div className="techPageAxiosText">Projects Containing Use of Axios</div>
                </div>
            </div>

            {/* Mongoose */}
            <div className="techPageMongoose">
                <a href=""><img className="techPageMongooseImg" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1688069938/Web%20Dev%20Portfolio/1_iDvsmUwzZQxJSKdL0xzwIA_danfhb.png" alt="Mongoose Logo" /></a>
                <div className="middleMongoose">
                    <div className="techPageMongooseText">Projects Containing Use of Mongoose</div>
                </div>
            </div>

        </div>
        {/* End of Container Three */}
        <BackToTopButton/>
        </>
    );
}
 
export default TechAndFrameworks;