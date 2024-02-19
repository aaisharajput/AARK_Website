import React from 'react'
import GetRoute from '../../../Container/server/index.js' 
import style from './style.module.css'

export default function AwardCard({imgSrc,date,title}) {
  return (
    <>
      <div className={`card mb-3 col-md-6 ${style.Card}`}>
        <div className="row ">
          
          <div className="col-md-4">
            <img
              src={GetRoute(imgSrc)}
              alt="Awards Image"
              className="img-fluid rounded-start"
            />
          </div>
          
          <div className="col-md-8">
            <div className="card-body ">
              <p className={`card-text ${style.date}`}>{date}</p>
              <h5 className="card-title fw-bold">{title}</h5>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}
