import React from 'react'
import GetRoute from '../../../../Container/server'
import styles from '../../Press/PressContent/style.module.css'

export default function Award_content({imgSrc,para}) {
  return (
    <>
      <div className='bg-light text-black'>
      <div className={`container py-5 ${styles.container}`}>
        <h2 className={`text-center pb-5 ${styles.heading}`}>Awards</h2>
      <div className={` ${styles.flex}`}>
        <div className={` ${styles.image}`}>
        <img  src={GetRoute(imgSrc)}  className={`img-fluid`} alt="Press Content" />
        </div>
      <div className={` ${styles.content}`}>
        <p>{para}</p>
      </div>
      </div>
    </div>
      </div>
    </>
  )
}
