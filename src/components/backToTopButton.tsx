import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/App.css'
import '../CSS/backToTopButton.css'
import { useEffect, useState } from "react";

function BackToTopButton()
{
    const[backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>
    {
        window.addEventListener("scroll", () =>
        {
            if(window.scrollY > 700)
            {
                setBackToTopButton(true);
            }
            else
            {
                setBackToTopButton(false);
            }
        })
    }, [])


    const scrollUp = () =>
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    return <div className="App">
        {backToTopButton && (
            <button id="backToTop" className="mainButton btn btn-outline-light" 
            style={{
                position: "fixed",
                top: "860px",
                left: "113rem",
                height: "5rem",
                width: "5rem",
            }}
            onClick={scrollUp}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                    <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                <br></br>Back To Top</button>
        )}
    </div>
}
 
export default  BackToTopButton;