import React from 'react'
import styles from './style.module.css'
import GetRoute from '../../../../Container/server/index.js'

export default function PressContent({imageSrc,para}) {
  return (
    <>
       <div className='bg-light text-black'>
       <div className={`container py-5 ${styles.container}`}>
        <h2 className={`text-center pb-5 ${styles.heading} title`}>PRESS RELEASE</h2>
      <div className={` ${styles.flex}`}>
        <div className={` ${styles.image}`}>
        <img  src={GetRoute(imageSrc)}  className={`img-fluid`} alt="Press Content" />
        </div>
      <div className={` ${styles.content}`}>
        <p className='para1'>{para}</p>
      </div>
      </div>
    </div>
       </div>
    </>
  )
}
