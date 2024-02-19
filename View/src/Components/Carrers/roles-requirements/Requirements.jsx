import React from "react";
import css from "./style.module.css";

export default function Roles({ reqItems }) {
  return (
    <>
      <p className={`${css.req} boldPara`}>Requirements</p>
      <ul className={`${css.reqList} para1`}>
        {reqItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
