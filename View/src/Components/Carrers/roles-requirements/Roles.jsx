import React from "react";
import css from "./style.module.css";

export default function Roles({ roleItems }) {
  return (
    <>
      <p className={`${css.role} boldPara`}>ROLE</p>
      <ul className={`${css.roleList} para1`}>
        {roleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
