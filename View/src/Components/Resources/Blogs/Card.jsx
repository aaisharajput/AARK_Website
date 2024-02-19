import React from "react";
import styles from "./style.module.css";
import GetRoute from "../../../Container/server/index.js";

export default function Card({ title, imageSrc, description }) {
  return (
    <div className={`row d-flex justify-content-between align-item-center ${styles.cardContainer}`}>
      <div className={`col-md-3 col-sm-12 py-4 ${styles.imageContainer}`}>
        <img
          className={styles.image}
          src={GetRoute(imageSrc)}
          alt="Card Image"
        />
      </div>
      <div className={`col-md-8 col-sm-12 py-4 ${styles.contentContainer}`}>
        <h2 className={`${styles.heading} subTitle`}>{title}</h2>
        <p className="para1">{description}</p>
        
          <button className={styles.cta}>
            <span className={`${styles.hover} para2`}> Learn More </span>
            <i className="fa fa-arrow-right "></i>
          </button>
      </div>
    </div>
  );
}
