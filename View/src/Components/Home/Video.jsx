import React from "react";
import GetRoute from "../../Container/server";
import Videocss from "./Video.module.css";
import { Link } from "react-router-dom";

export default function Video() {
  return (
    <>
      <section className={Videocss.breadcumb}>
        <div className={Videocss.videobanner}>
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={GetRoute("/home-page.mp4")} type="video/mp4" />
          </video>
        </div>
        <div className={`pt-5 ${Videocss.breadcumbBannerCon}`}>
          <div className="container pt-5">
            <div className={Videocss.mainBannerCon}>
              <h2 className="videoHeading2">Welcome To</h2>
              <h1 className="fw-bold videoHeading1">AARK Global</h1>
              <p className="videoPara">Renew your focus on engineering innovation</p>
              <Link
                to="/about"
                className={`mt-2`}
              >
              <button className={`btn learnMoreBtn ${Videocss.learnbtn}`}>Learn More</button>
              </Link>
              
            </div>
          </div>
          <div className="container pt-5">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-6">
                  <div className={Videocss.btnsliderimg}>
                    <img src={GetRoute('/frugal-scaled-1.jpg')} alt="" />
                  </div>
                  
                    <h3 className="pt-2 text-center videoHeading3">Focus on Core</h3>
                  
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <div className={Videocss.btnsliderimg}>
                    <img src={GetRoute('/service-box-image-1.jpg')} alt="" />
                  </div>
                  
                    <h3 className="pt-2 text-center videoHeading3">Frugal Innovation at Scale</h3>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <div className={Videocss.btnsliderimg}>
                    <img src={GetRoute('/slider-btn-img-1.jpg')} alt="" />
                  </div>
                    <h3 className=" pt-2 text-center videoHeading3">Time to Market Advantage</h3>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <div className={Videocss.btnsliderimg}>
                    <img src={GetRoute('/services-img-1.jpg')} alt="" />
                  </div>
                    <h3 className="pt-2 text-center videoHeading3">Continuous Operational Control</h3>
                </div>
              </div>
              </div>
        </div>
      </section>
    </>
  );
}
