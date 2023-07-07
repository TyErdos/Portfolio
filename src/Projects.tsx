import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './CSS/App.css'
import './CSS/Projects.css'
import BackToTopButton from "./components/backToTopButton";

const Projects = () => {
    return (  
        <>
        <h1 className="projectsHeading">All of My Current Projects</h1>

        {/* CampQuest Card */}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image CampQuest" id="projectBannerImg"></div>
                <h1 className="bannerTitle">Camp Quest</h1>
                <p id="projectP">My most comprehensive Web Project <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://yelp-camp-bkk0.onrender.com/" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        {/* Psyche Support Card */}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image Psyche" id="projectBannerImg"></div>
                <h1 className="bannerTitle">Psyche Support</h1>
                <p id="projectP"> <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://yelp-camp-bkk0.onrender.com/" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        <br/>

        {/* TV Show App Card */}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image TvShow" id="projectBannerImg"> </div>
                <h1 className="bannerTitle">TV Show Search</h1>
                <p id="projectP"> <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://tvshowsearch.onrender.com/" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        <br/>

        {/* Ping Pong Card */}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image PingPong" id="projectBannerImg"> </div>
                <h1 className="bannerTitle">Ping Pong Score Keeper</h1>
                <p id="projectP"> <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://pingpongscorekeeper.onrender.com/" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        <br/>

        {/* Museum of Candy Card */}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image Candy" id="projectBannerImg"> </div>
                <h1 className="bannerTitle">Museum of Candy</h1>
                <p id="projectP"> <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://museumofcandy.onrender.com/" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        <br/>

        {/* Pokemon DOM Card */}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image Pokemon" id="projectBannerImg"> </div>
                <h1 className="bannerTitle">Pokemon DOM</h1>
                <p id="projectP"> <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://pokemondomgallery.onrender.com" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        <br/>

        {/* Farm Stand Card*/}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image Farm" id="projectBannerImg"> </div>
                <h1 className="bannerTitle">Farm Stand</h1>
                <p id="projectP"> <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://farmstand.onrender.com" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        <br/>

        {/* Fake Forum Comments Card*/}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image Forum" id="projectBannerImg"> </div>
                <h1 className="bannerTitle">Comments Forum</h1>
                <p id="projectP"> <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://commentforum.onrender.com" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        <br/>

        {/* Price Table Card*/}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image PriceTable" id="projectBannerImg"> </div>
                <h1 className="bannerTitle">Price Table</h1>
                <p id="projectP"> <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://pricetable.onrender.com" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        <br/>

        {/* Reddit-ish Card*/}
        <div className="container" id="projectContainer">
            <div className="wrapper" id="projectWrapper">
            <div className="banner-image Reddit" id="projectBannerImg"> </div>
                <h1 className="bannerTitle">Reddit-ish</h1>
                <p id="projectP"> <br/>
                consectetur adipiscing elit.</p>
            </div>
            <div className="button-wrapper" id="projectBtnWrapper"> 
            <a href="https://reddit-ish.onrender.com" target="_blank" rel="noreferrer"><button className="btn outline" id="projectBtn">Visit</button></a>
            </div>
        </div>

        
        <BackToTopButton/>
        </>
    );
}
 
export default Projects;