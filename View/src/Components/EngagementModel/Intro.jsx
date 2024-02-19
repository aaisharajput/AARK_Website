import React from 'react';
import Css from './Engagement.module.css';
import GetRoute from '../../Container/server';

function Intro() {
  return (
    <>
      <section className={ `mb-5 ${Css.aboutsec}`} >
     <div className='text-black' style={{backgroundColor:"#fff"}}>
     <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className={Css.aboutimg}>
                <img src={GetRoute('/models-scaled.jpg')} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                
                <p className="para1">
                  Rapid advancement in digital technologies, AI/ ML and data is changing everything. Customers today are in an environment where they need to cut costs, save money, and yet innovate. Our value is our ability to cater to these requirements and helping clients achieve these objectives.
                </p>
                <p className="para1">
                  Our core team together brings a wide variety of industry experience which translates into a great understanding of what our customers need. So, we are able to develop business solutions very relevant to them and invest ahead in next generation technologies.
                </p>
                
                
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <div>

                <p className="para1">
                  Our unique engagement model is based on 100% result-oriented approach and is not a cookie cutter because one size does not fit all. Open communication and collaboration are the two key foundational elements that we overemphasize for any successful customer engagement.
                </p>
                <p className="para1">
                  While we do engage with our customers in traditional business models like Time and Material (T&amp;M) and fixed time &amp; fee (Fix Bid), in certain instances, we also engage in “tied economics” arrangements with our customers where we align our financial incentives with customer’s successful business outcomes. We are passionate about delivering tangible results for our customers, and this model reinforces our commitment that we succeed only when our customers do.
                </p>
                <p className="para1">We work as an extended global team for our customers — It is essentially like customer employees working at our locations.</p>

              </div>
            </div>
          </div>
        </div>
     </div>

        <section className="modalSection">
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-md-12">
                <div className="title text-center">
                  <h1 className='title'>OUR ENGAGEMENT MODEL IN A NUTSHELL</h1>
                  <p className='para1 text-center'>Deliver the product that our customers have envisioned, and the end customers will love!</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className={Css.aboutimg1}>
                  <img src={GetRoute('/steps-img-scaled.jpg')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Intro;
