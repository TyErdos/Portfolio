import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './CSS/App.css'

const ResumeMain = () => {
    return ( 
        <div style={{"width":"100%"}}>
            <iframe id="pdf-js-viewer" src="https://docs.google.com/document/d/1O3p4hXk8yGCtyBkgOn9RR44qZjWCGqdflnajeUCdZKw/edit?usp=sharing" title="webviewer" frameBorder="0" width="100%" height="890px"></iframe>
        </div>
     );
}
 
export default ResumeMain;