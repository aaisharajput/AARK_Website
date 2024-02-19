import React from "react";
import Style from './ContactUs.module.css';
import Form from "./Form";
import ContactState from "../../Context/contactForm/State";

export default function ContactFormLayout() {
  return (
    <>

      <div className="row m-0 pb-3 pt-3 bg-white">

        <div className={`col-md-6 mt-5 ${Style.ContactImage}`} >
        <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170129.6662459414!2d74.96919250896933!3d32.65842541611493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e8370b82e26c3%3A0xd7058408bf346925!2sARAK%20Tech%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1706604404311!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
        <div className="col-md-6  mt-5">
          <div className="text-center">
            <h1 className="text-black title" >LET'S CONNECT </h1>
          </div>
          <ContactState><Form color="#000" /></ContactState>
        </div>
      </div>
    </>
  );
}
