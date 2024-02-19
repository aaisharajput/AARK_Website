import React, { useEffect } from "react";
import Video from "./Video";
import style from "./mou.module.css";
import GetRoute from "../../Container/server";
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion } from "react-bootstrap";

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={style.Body}>
        <Video />

        <div className="container-fluid">
          <div className="row">
            <div
              className="col-sm-12 col-md-6 col-lg-4 animation"
              data-aos="zoom-in"
            >
              <div className={`card ${style.card1}`}>
                <p className={`heading ${style.heading}`}>About Us</p>
                <p>
                  AARK GLOBAL inc. is a Silicon Valley-based Engineering/R&D
                  services firm, with Semicon being our core area of focus.
                </p>
                <p>
                  The team has significant experience in the engineering/
                  implementation of MES/FA system and product development/
                  manufacturing expertise in the Semicon OEM arena.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 " data-aos="zoom-in">
              <div className={`card ${style.card2}`}>
                <p className={`heading ${style.heading2}`}>STEPP Overview</p>
                <p>
                  Semiconductors Training, Education, and Placement
                  Program(STEPP)
                </p>
                <p>
                  is specially curated internship program for MIET, with an
                  objective to train and recruit final-year students from MIET
                  through 12 months of intensive training covering the
                  Semiconductor space.
                </p>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4  mx-auto"
              data-aos="zoom-in"
            >
              <div className={`card ${style.card3}`}>
                <p className={`heading ${style.heading3}`}>Carrer Paths</p>
                <ul className={style.list}>
                  <li>System Engineer</li>
                  <li>Software Engineer</li>
                  <li>Security Engineer</li>
                  <li>IC Designer</li>
                  <li>DevOps Enginer</li>
                  <li>Quality Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className={`${style.hr}`} />
        <div className="container-fluid">
          <div className="row mb-5   d-flex justify-content-between">
            <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
              <div
                className={`card  animation ${style.card} `}
                data-aos="flip-left"
              >
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    First-time in India
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    This unique Semicon internship is started first-time in
                    India.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
              <div
                className={`card  animation ${style.card}`}
                data-aos="flip-down"
              >
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Work on Cutting-edge Tech
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Chance to build a carrer in the most sophisticated and
                    high-tech field.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
              <div
                className={`card  animation ${style.card}`}
                data-aos="flip-right"
              >
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Industry-relevant Curriculum
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Drafted by industry experts with 75+ yrs of exp. in the
                    Semicon Space.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
              <div
                className={`card  animation ${style.card}`}
                data-aos="flip-left"
              >
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Work On Live Projects
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Gain necessary work exp. with live projects and a fab visit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
              <div
                className={`card  animation ${style.card}`}
                data-aos="flip-up"
              >
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Work In Jammu
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Don't leave your family and friends behind to satisfy your
                    hungry mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
              <div
                className={`card  animation ${style.card}`}
                data-aos="flip-right"
              >
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Placement Opportunity
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Start your carrer with AARK with sucessful completion of
                    training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* faq  */}

        <hr className={`${style.hr}`} />
        <div
          className={`container animation ${style.container}`}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="text-white text-center mt-4">
            Frequently Asked Questions
          </h1>
          <div className="row ">
            <div className={`col-sm-12 col-md-6 mt-2 ${style.img}`}>
              <img className="img-fluid" src={GetRoute("/faq.svg")} alt="" />
            </div>

            <div className="col-sm-12 col-md-6 py-4" >
            <div className={`accordion-container ${style.myAccordion}`}>
            <Accordion  defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header > What is STEPP? </Accordion.Header>
                  <Accordion.Body >
                    Semiconductors Training, Education, and Placement Program
                    (STEPP) is specially curated Internship Program for MIET.
                    It is a unique initiative aimed at providing intensive
                    training to final-year students from MIET in the field of
                    Semiconductors.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>  Is there any eligibility criteria for participating in
                    STEPP?</Accordion.Header>
                  <Accordion.Body>
                    Yes, STEPP is exclusively designed for final-year students
                    of MIET. Eligibility criteria may include academic
                    performance and other specified requirements.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>  What happens after I register?</Accordion.Header>
                  <Accordion.Body>
                    After registration, selected candidates will undergo an
                    interview process. Successful candidates will have the
                    chance to build a career in the most sophisticated and
                    high-tech field.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>   How does the interview process work?</Accordion.Header>
                  <Accordion.Body>
                    The interview process involves assessing your skills,
                    knowledge, and suitability for the program. It may include
                    both technical and non-technical aspects. Details about
                    the interview will be communicated to registered
                    candidates.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>  What is the duration of the STEPP?</Accordion.Header>
                  <Accordion.Body>
                    The STEPP spans 12 months of intensive training. During
                    this period, participants will receive comprehensive
                    education and hands-on experience in the Semiconductor
                    space.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>   What are the learning resources provided through STEPP?</Accordion.Header>
                  <Accordion.Body>
                    STEPP offers exclusive access to a range of learning
                    resources, including presentations and interactive modules
                    on the Semiconductor industry. Participants benefit from
                    interactive online classes led by industry experts with
                    75+ years of experience in the Semicon space. The program
                    goes beyond theory by incorporating live projects,
                    allowing hands-on application of concepts. This unique
                    blend of resources and experiences ensures participants
                    gain both theoretical knowledge and practical skills in
                    the semiconductor space.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header> Are there any job opportunities after completing the STEPP
                    program?</Accordion.Header>
                  <Accordion.Body>
                    The STEPP program aims to train and recruit final-year
                    students. Upon successful completion, participants may
                    have the opportunity for employment in the Semiconductor
                    industry. Specific job opportunities will be communicated
                    during the program.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
</div>
           
            </div>
          </div>
        </div>

        {/* faq  */}
        <footer className={`text-center  text-white ${style.Footer}`}>
          <hr className={` mb-5 ${style.hr}`} />
          <div className="p-4 mt-2">
            <p>
              Limited Seats !!! To apply, send your resume to -{" "}
              <a href="mailto:STEPP@aarkglobalinc.com">STEPP@aarkglobalinc.com</a> today.
            </p>
            <p>WE ARE LOOKING FOR COMMITTED CANDIDATES ONLY</p>
          </div>
        </footer>
      </div>
    </>
  );
}
