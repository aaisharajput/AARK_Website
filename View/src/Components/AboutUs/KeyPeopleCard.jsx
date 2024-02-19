import React from 'react'
import style from './About.module.css';
import GetRoute from '../../Container/server';
import {
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function KeyPeopleCard({Name,Occ,imgSrc,linkedIn}) {
  return (
    <>
       <div className={`mt-3 mb-4 ${style.cardKey}`}>
                <div className={style.cardinnerKey}>
                    <div className={style.cardfrontKey}>
                        <img src={GetRoute(imgSrc)} alt="" className='rounded-circle p-2' />
                        <p className='mt-4 boldPara'>{Name}</p>
                    </div>
                    <div className={style.cardbackKey}>
                        <div className={`${style.occ} para1`}>{Occ}</div>
                        <div>
                            <a className={style.Btn} href={linkedIn}>


                                <div className={style.sign}>
                            
                                <FontAwesomeIcon icon={faLinkedin} style={{color:"#0A66C2", fontSize:"23px"}}  />
                              
                                </div>

                                <div className={`${style.text} para1`}>Linkedin</div>
</a>

                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
