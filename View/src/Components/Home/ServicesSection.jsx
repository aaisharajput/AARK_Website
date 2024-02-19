import React from 'react';
import GetRoute from '../../Container/server'
import homecss from './home.module.css'



export default function ServicesSection() {
    const servicesData = [
        {
          title: 'Automotive',
          image: GetRoute('/service-img-1.png'),
        },
        {
          title: 'Communications',
          image: GetRoute('/service-img-2.png'),
        },
        {
            title: 'Consumer & Retail',
            image: GetRoute('/service-img-3.png'),
          }, {
            title: 'Finance',
            image: GetRoute('/service-img-4.png'),
          }, {
            title: 'Manufacturing',
            image: GetRoute('/service-img-5.png'),
          }, {
            title: 'Media',
            image: GetRoute('/service-img-6.png'),
          }, {
            title: 'Technology',
            image: GetRoute('/service-img-7.png'),
          }, {
            title: 'Healthcare',
            image: GetRoute('/service-img-8.png'),
          },
      ];
  return (
    <>
       <section className={homecss.services}>
       
      <div className={`container`}>
        <div className={`row ${homecss.alignitemscenter}`}>
          <div className="col-md-6">
            <div className={`${homecss.title}`}>
              <h2 className='title'>INDUSTRIES WE SPECIALIZE IN</h2>
              <p className='para1'>
                Our Project teams bring a wide variety of industry experiences that translate into a great understanding of
                what our customers need, thus enabling us to craft value-driven business solutions that are relevant to our
                customers and invest in Next-Gen Technologies.
              </p>
            </div>

          </div>
          <div className="col-md-6 ">
            <div className="row g-0">
              {servicesData.map((service, index) => (
                <div key={index} className="col-6 col-md-3 ">
                  <div className={homecss.servicesbox}>
                    <div className={homecss.servicesimg}>
                      <img src={service.image} alt={service.title} />
                    </div>
                      <h4 className={`${homecss.serviceH4}`}>{service.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}



