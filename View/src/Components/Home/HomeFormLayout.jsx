import GetRoute from '../../Container/server';
import Form from "../ContactUs/Form";
import Css from "./home.module.css";
import ContactState from '../../Context/contactForm/State';

export default function HomeFormLayout() {
  return (
    
  <div className="row m-0  " style={{backgroundImage:`url(${GetRoute('/contact-back.jpg')})`}}>
        <div className={`col-md-6 pt-5 mt-5 ${Css.HomeContactImg} `}>
          <img src={GetRoute('/fdg.jpg')}/>
        </div>
        <div className="col-md-6 mt-5 mb-3">
        <div>
      <h1 className="text-white text-center title" >REQUEST CONSULTATION</h1>
      <p className="text-white text-center singlePara">Share your toughest business problem with us and allow us to show how we can help.</p>
    </div>
      <ContactState><Form color="#fff"/></ContactState>
    </div>
</div>

  );
}
