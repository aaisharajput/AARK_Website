import React from 'react'
import aboutcss from './About.module.css'
import GetRoute from "../../Container/server";

function Whoweare() {
  return (
    <>
          <div className='py-5 text-black' style={{backgroundColor:"#fff"}}>
            <div className='container'>

          <div className="row align-items-center py-4">
        <div className={`col-md-6 ${aboutcss.aboutimg}`}>
          <img src={GetRoute('/about-us.jpg')} alt="" />
        </div>
        <div className={`col-md-6 ${aboutcss.aboutcon}`}>
        <h2 className='text-center mb-5 subTitle'>WHO WE ARE?</h2>
          
          <p className='text-black para1'>
            AARK Global is an Engineering Innovation partner for companies
            spanning Industrial, Manufacturing, Technology, FinTech,
            Semiconductors, SaaS providers, Healthcare, Insurance to name a few.
            We develop custom products and integrated solutions, with a maniacal
            focus on timeliness, quality, and superior user experience.
          </p>
        </div>
      </div>
            </div>
          </div>
    </>
  )
}

export default Whoweare;
