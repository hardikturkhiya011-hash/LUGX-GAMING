import React from "react";
import icon_1 from "../images/featured-01.png";
// import { FaCloudDownloadAlt } from "react-icons/fa";
import icon_2 from "../images/featured-02.png";
import icon_3 from "../images/featured-05.png";
import icon_4 from "../images/featured-04.png";
import "./HomePage.css";
import TrandingSection from "../Component/TrandingSection";
import Top from "../Component/Top";
import Category from "../Component/Category";
import Footer from "../Component/Footer";



function Home() {
  

  const api = "http://localhost:3400"
  const getdata = ()=>{
      console.log("33fwu")
  }
  return (
    
    <>
      <div className="homePagerapper">
        <div className="header">
          <div className="left">
            <h3 className="q1">Welcome To Lugx</h3>
            <h1 className="p1">Best Gaming Site Ever!</h1>
            <p className="three_line">
              LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
              gaming websites. You can download and use this layout for
              commercial purposes. Please tell your friends about TemplateMo.
            </p>
            <div className="home-btn">
              <input
                type="text"
                placeholder="Type Something"
                className="input-home"
              />
              <button className="btn" onClick={getdata}>Search Now</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/banner-image.jpg"
              alt="banner"
            />
            <p className="para">$22</p>
            <span className="dis">-40%</span>
          </div>
        </div>
        <div className="featureCard">
          <div class="cards">
            <div class="iconss">
              <img src={icon_1} alt="images" />
              {/* <FaCloudDownloadAlt /> */}
            </div>
            <h3 className="msg">FREE STORAGE</h3>
          </div>
          <div class="cards">
            <div class="iconss">
              <img src={icon_3} alt="images" />
              {/* <FaCloudDownloadAlt /> */}
            </div>
            <h3 className="msg">FREE STORAGE</h3>
          </div>

          

          <div class="cards">
            <div class="iconss">
              <img src={icon_2} alt="images" />
            </div>
            <h3 className="msg">REPLY READY</h3>
          </div>

          <div class="cards">
            <div class="iconss">
              <img src={icon_4} alt="images" />
            </div>
            <h3 className="msg">EASY LAYOUT</h3>
          </div>
        </div>
        
      </div>
    <TrandingSection />
    <Top />   
    <Category />
    {/* <Footer/> */}
      </>
  );
}

export default Home;
