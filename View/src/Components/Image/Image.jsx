import React from "react";
import Videocss from './Image.module.css'
export default function Image({ ImageSource, heading }) {
  return (
    <>
      <section className={Videocss.breadcumb}>
        <div className={Videocss.videobanner}>
        <img src={ImageSource} alt="" />
        </div>
        <div className={Videocss.breadcumbBannerCon}>
          <div className="container">
            <div className={Videocss.mainBannerCon}>
              <h2 className="videoTitle text-center">{heading}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
