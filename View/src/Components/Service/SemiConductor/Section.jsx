import React from "react";
import style from "./style.module.css";
import GetRoute from "../../../Container/server/index.js";

export default function Section() {
  return (
    <>
      <div className="bg-light text-black">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className={`col-md-7 `}>
              <hr />
              <p className="py-5 para1">
          
                AARK Global's Semiconductor Services is where decades of
                expertise meet cutting-edge solutions. Our team of engineers,
                with over 75 years of collective experience in Semiconductor
                OEM, FAB, and OSAT, is dedicated to providing comprehensive
                services tailored to your semiconductor manufacturing needs.
              </p>
              <hr />
            </div>

            <div className={`col-md-5 d-flex justify-content-around ${style.image}`}>
              <img src={GetRoute("/svgchip.png")} alt="" className="img-fluid" width={350}/>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-5 pt-3 d-flex justify-content-center">
            <img src={GetRoute("/fab1.jpg")} alt="" className="img-fluid " />
          </div>
          <div className="col-md-7">
            <h2 className="text-center pb-1 subTitle">Semiconductor Expertise</h2>
            <p className="para1">
              With a profound understanding of the semiconductor landscape, our
              domain experts offer:
            </p>
            <div>
              <div className={`row py-2 ${style.para}`}>
                <div className="col-md-6">
                  <h5 className="subTitle3">Proven Experience</h5>
                  <p className="para2">
                    Over 75 years collaborating with major OEMs, FABs, and
                    OSATs.
                  </p>
                </div>
                <div className="col-md-6">
                  <h5 className="subTitle3">Expert Training</h5>
                  <p className="para2">
                    50+ engineers adept in the latest semiconductor
                    technologies.
                  </p>
                </div>
                <div className="col-md-6">
                  <h5 className="subTitle3">Industry Collaboration</h5>
                  <p className="para2">
                    Active membership in SEMI for solutions aligned with
                    industry standards.
                  </p>
                </div>

                <div className="col-md-6">
                  <h5 className="subTitle3">Knowledge Management</h5>
                  <p className="para2">
                    Robust training and a Knowledge Management System for
                    staying ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light text-black">
        <div className="container py-5">
          <h2 className="text-center pb-1 title">Challenges in Semiconductor Manufacturing</h2>
          <p className="text-center para1">
          The semiconductor manufacturing facilities, or fabs, face several challenges, ranging from technical and logistical hurdles to economic and environmental considerations. Here are some key challenges:
          </p>
          <div className="row pt-5 ">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="pt-5">
                <div className="d-flex gap-4">
                <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para1">Escalating manufacturing costs</p>
                </div>
                <div className="d-flex gap-4">
                <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para1">Reduced yield</p>
                </div>
                <div className="d-flex gap-4">
                <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para1">Extended turnaround time</p>
                </div>
                <div className="d-flex gap-4">
                <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para1">Wastage concerns</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src={GetRoute("/manufac1.jpg")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="pt-5">
                <div className="d-flex gap-4">
                <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para1">Asset underutilization</p>
                </div>
                <div className="d-flex gap-4">
                <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para1">Stagnant R&D</p>
                </div>
                <div className="d-flex gap-4">
                <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para1">Talent acquisition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row gap-5">
          <h2 className="text-center pb-1 title">Addressing Challenges with AARK Global</h2>
          <div className="col-md-5">
          <p className="para1">
          Addressing these challenges requires a combination of strategic planning, technological innovation, regulatory compliance, and collaboration across the semiconductor industry ecosystem. And this is where AARK Global can play a crucial in overcoming these challenges. Our Software Engineering services will help Architect, Design, and Implement factory systems to achieve fabs.
          </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
          <div className="row pt-3">
            <div className="col-md-5">
            <div className="d-flex gap-4">
                  <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para2">Higher Yield</p>
                </div>
            </div>
            <div className="col-md-7">
            <div className="d-flex gap-4">
            <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para2"> Lower Manufacturing Costs</p>
                </div>
            </div>
            <div className="col-md-5">
            <div className="d-flex gap-4">
            <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para2"> Faster Cycle Time</p>
                </div>
            </div>
            <div className="col-md-7">
            <div className="d-flex gap-4">
            <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para2">  Higher Asset Efficiency (OEE)</p>
                </div>
            </div>
            <div className="col-md-5">
            <div className="d-flex gap-4">
            <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para2"> Zero Scraps</p>
                </div>
            </div>
            <div className="col-md-7">
            <div className="d-flex gap-4">
            <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para2">Accelerated R&D Learning</p>
                </div>
            </div>
            <div className="col-md-5">
            <div className="d-flex gap-4">
            <i className="fa fa-circle-check  fa-2xl pt-3" style={{color:"#74C0FC"}}></i>
                  <p className="para2">Talent Acquisition</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="bg-light text-black">
      <div className={`container py-5 ${style.FabImg}`}>
      <h2 className="text-center pb-4 title">SEMI/PV2 Fab Services</h2>
      <img src={GetRoute("/Fab.png")} alt="" className="img-fluid" />
      </div>
      </div>
    </>
  );
}
