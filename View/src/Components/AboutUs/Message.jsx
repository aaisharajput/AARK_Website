import React from 'react'
import aboutcss from './About.module.css'
import GetRoute from "../../Container/server";

export default function Message() {
  return (
    <>
    <div className='py-5 text-black' style={{backgroundColor:"#fff"}}>
            <div className='container'>

          <div className="row align-items-center py-4 ">
          <div className={`col-md-6 ${aboutcss.aboutcon} ${aboutcss.title}`}>
       <h2 className='text-center mb-5 subTitle'>Message from CEO</h2>

          <p className=' text-black para1'>
            AARK Global is an Engineering Innovation partner for companies
            spanning Industrial, Manufacturing, Technology, FinTech,
            Semiconductors, SaaS providers, Healthcare, Insurance to name a few.
            We develop custom products and integrated solutions, with a maniacal
            focus on timeliness, quality, and superior user experience.
          </p>
        </div>
        <div className={`col-md-6 mt-3 ${aboutcss.aboutimg}`}>
          <img src={GetRoute('/AK.jpg')} alt="" />
        </div>
        
      </div>
            </div>
            </div>

    </>
  )
}
