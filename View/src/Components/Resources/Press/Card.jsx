import React from 'react'
import style from './style.module.css'

export default function Card({ date, heading, para }) {
  return (
    <>
       <div className={style.card}>
      <div className={style.cardContent}>
        <p className={`${style.date} para2`}>{date}</p>
        <h2 className={`${style.heading} subTitle`}>{heading}</h2>
        <p className="para1">{para}</p>
      </div>
    </div>
    </>
  )
}
 