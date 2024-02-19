import React from "react";
import Videocss from './Video.module.css'
export default function Video({ videoSource, heading }) {
  return (
    <>
      <section className={Videocss.breadcumb}>
        <div className={Videocss.videobanner}>
        <img src={videoSource} alt="" />
        </div>
        <div className={Videocss.breadcumbBannerCon}>
          <div className="container">
          <div>
              <p className="para2"><a href="/resources/press-releases"><i className='fa fa-arrow-left px-2'></i>Press Releases</a> </p>
              <hr />
            </div >
            <div className={Videocss.mainBannerCon}>
              <h2 className="Blogheading">{heading}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
