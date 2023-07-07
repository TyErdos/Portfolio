import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './CSS/App.css'
import './CSS/AboutMePersonal.css'
import BackToTopButton from "./components/backToTopButton";

const AboutMePersonal = () => {
    return (  
      <>
<div>
        <section className="flex-container">
            <h1 className="aboutMeH1">A Little About Me</h1>
            <h2 className="hometown">My Hometown</h2>
            <p className="firstPara">&nbsp;&nbsp;&nbsp;&nbsp;My name is Tyler Erdos, I'm 23 years old and a Penn State Behrend graduate. I was born in Erie, Pennsylvania which is in the Northwest corner of PA with access to Lake Erie, 
            and I still live here to this day. I have plans to move to another state at some point in the future but for now, this is where I call home.</p>
            

            {/* Bootstrap Image Carousel */}
<div className="hometownCarousel">
<div id="hometownCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#hometownCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#hometownCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#hometownCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id="EriePng" src="https://www.travellens.co/content/images/size/w2000/format/webp/2022/04/Erie-PA.jpg" className="d-block w-100" alt="Bicentennial Tower"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Bicentennial Tower</h5>
        <p><span>The Bicentennial Tower is an observation tower located in Erie, Pennsylvania and features panoramic views of Lake Erie and downtown Erie.</span></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686846242/Web%20Dev%20Portfolio/VE_Map_2014__ScaleMaxWidthWzEzNjZd_knpdkq.jpg" className="d-block w-100" alt="Erie County Map"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Erie on the Map</h5>
        <p><span>Erie is a city on the south shore of Lake Erie, and roughly equidistant from Buffalo and Cleveland, each being about 100 miles away.</span></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686847878/Web%20Dev%20Portfolio/beach-7_l3pbsi.jpg" className="d-block w-100" alt="Lake Erie Beach"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Erie Beaches</h5>
        <p><span>Presque Isle State Park is a 3,112-acre Pennsylvania State Park on an arching, sandy peninsula that juts into Lake Erie. It contains 13 beaches for swimming, and a marina.</span></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#hometownCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#hometownCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
            {/* End of first image carousel */}
</section>

      
        <section>
            <h2 className="hobbies">My Hobbies and Interests</h2>
            <p className="secondPara">Although I enjoy web development, I have a lot of other interests and hobbies I love to partake in. Something that I make sure I do every day is weight lifting,
             I find a sense of self improvement from it and I take pride in seeing myself progress week after week.
             <br/>
             <br/>
            I also play a lot of video games, some of my favorites being "The Binding of Isaac", "Phasmophobia", "Dead By Daylight", the "Silent Hill" franchise and the FromSoftware "Souls" games. 
            I am an avid music fan as well, 
            I don't think I could pick a favorite artist but a new group I am fond of is "Death Grips". 
            In addition; I have an ever expanding vinyl collection! To rattle off some other hobbies I have, I like to go hiking, read manga, watch movies & anime as well.</p>
        </section>


{/* Bootstrap Image Carousel */}
<div className="hobbiesCarousel">
<div id="hobbiesCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#hobbiesCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#hobbiesCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#hobbiesCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#hobbiesCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#hobbiesCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id="" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686846236/Web%20Dev%20Portfolio/athlete-getting-ready-for-weight-lifting-training_bqzqyr.jpg" className="d-block w-100" alt="Weight Lifting"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Weight Lifting</h5>
        <p><span>One of the things I am very passionate about in life is fitness and weight lifting.</span></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686860238/Web%20Dev%20Portfolio/silent-hill-2-10-21-22-1_ymusrs.webp" className="d-block w-100" alt="Silent Hill"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Silent Hill</h5>
        <p><span>One of my favorite single player games is Silent Hill 2 for the PS2.</span></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686856507/Web%20Dev%20Portfolio/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7_ugnrtk.jpg" className="d-block w-100" alt="Dead By Daylight"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Dead By Daylight</h5>
        <p><span>I'm a big fan of the horror genre, and Dead By Daylight is a multiplayer game I enjoy that has a horror aesthetic.</span></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686856498/Web%20Dev%20Portfolio/1_NxwEW861lEJcwI8dugHjaA_rqzhos.jpg" className="d-block w-100" alt="Death Grips Photoshoot"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Death Grips</h5>
        <p><span>Death Grips creates unique music I love, I would describe their sound as an electro-industrial band with some hip hop influence.</span></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686860410/Web%20Dev%20Portfolio/waterfallwide_v8c4mx.jpg" className="d-block w-100" alt="Wintergreen Gorge"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Wintergreen Gorge</h5>
        <p><span>The Wintergreen Gorge is a six-mile-long canyon located in Harborcreek Township, Erie County that I frequent for hiking and getting out in nature.</span></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#hobbiesCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#hobbiesCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
            {/* End of second image carousel */}


      <section>
        <h2 className="codingIntro">How I Got Into Coding</h2>
        <p className="codingP">For as long as I can remember I had an interest in technology, I loved using the computer as a child and had a fascination with gaming consoles. 
        It wasn't until my freshman year of high school that I decided to take an introductory programming course learning C++. The first tiny project I made was a Whack-a-Mole clone named, "Whack-a-Shinobi" because I was a huge fan of the "Naruto" anime and manga at the time.
           Forunately for me, my high school had a partnership with a local technical school that had a computer programming program. 
           <br/>
           <br/>
           I enrolled my sophmore year and stayed throughout the rest of high school, spending half of my school days there learning various languages and technologies. 
           There I as able to learn what types of coding languages I was fond of and others that I was not so interested in pursuing. After graduating high school I then took my interest further by attending Penn State Behrend, The Erie College for Computer Science. </p>
      </section>

      {/* Bootstrap Image Carousel */}
<div className="codingCarousel">
<div id="codingCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#codingCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#codingCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#codingCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#codingCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#codingCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id="" src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686943509/Web%20Dev%20Portfolio/1d0c121kj7w61_ujkihf.webp" className="d-block w-100" alt="Windows 98 PC"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Windows 98 PC</h5>
        <p><span>The first PC my family every owned was one similar to the Windows 98 PC above, which was my first introduction into technology.</span></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686943516/Web%20Dev%20Portfolio/Xbox-Console-wDuke-L_rjvysq.jpg" className="d-block w-100" alt="Original Xbox Console"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>2001 Xbox Console</h5>
        <p><span>The first video game console I owned was the original Xbox console, being interested in video games furthered my interest in technology.</span></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686943510/Web%20Dev%20Portfolio/1b4d9981-01cd-413c-b036-329004613060-p3MTSD102419_ldtq7n.webp" className="d-block w-100" alt="McDowell High School"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>McDowell High School</h5>
        <p><span>This is the school I attended for high school and was where I took my first introductory programming course.</span></p>
      </div>
    </div>
      <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686943510/Web%20Dev%20Portfolio/SchoolPortrait-1024x678_hpsnq6.jpg" className="d-block w-100" alt="Erie County Technical School"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Erie County Technical School (ECTS)</h5>
        <p><span>ECTS is where I enrolled in a computer programming course where I would spend half of my school day only learning about different programming languages and technologies.</span></p>
      </div>
      </div>
      <div className="carousel-item">
      <img src="https://res.cloudinary.com/dl1g9gdvt/image/upload/v1686943577/Web%20Dev%20Portfolio/3232072-01_kmfrhb.jpg" className="d-block w-100" alt="Naruto Manga Cover Art"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Naruto</h5>
        <p><span>This is the character I based my first C++ Whack-a-Mole clone off of.</span></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#codingCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#codingCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>



        
</div>
<BackToTopButton/>
</>

    );
}
 
export default AboutMePersonal;