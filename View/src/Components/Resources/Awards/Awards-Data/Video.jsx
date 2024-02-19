import React from "react";
import Videocss from './Video.module.css'
export default function Video({ videoSource, heading }) {
  return (
    <>
      <section className={Videocss.breadcumb}>
        <div className={Videocss.videobanner}>
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
        <div className={Videocss.breadcumbBannerCon}>
          <div className="container">
            <div>
              <p><a href="/resources/awards"><i className='fa fa-arrow-left px-2'></i>Awards</a></p>
              <hr />
            </div >
            <div className={`pt-2 ${Videocss.mainBannerCon}`}>
              <h2>{heading}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
