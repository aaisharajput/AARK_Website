import style from "./About.module.css";
import GetRoute from "../../Container/server";
import Accordion from 'react-bootstrap/Accordion';

export default function FAQ() {
  return (
    <>
      <div className='py-5 text-black' style={{ backgroundColor: "#fff" }}>

        <div
          className={`container ${style.container}`}
        >
          <h1 className=" text-center title">
            Frequently Asked Questions
          </h1>
          <div className="row ">
            <div className={`col-sm-12 col-md-6 mt-2 ${style.img}`}>
              <img className="img-fluid" src={GetRoute("/faq.svg")} alt="" />
            </div>

            <div className="col-sm-12 col-md-6 mt-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="boldPara">Why Choose Jammu for Our Initiatives?</Accordion.Header>
                  <Accordion.Body className="para1">
                   Jammu has a magnetic charm that captivates us. The cultural heritage, serene landscapes, and vibrant community create an ideal backdrop for our initiatives. As an organization committed to contributing to the development of regions with untapped potential, Jammu aligns seamlessly with our vision for growth and progress.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="boldPara"> Who We Are?</Accordion.Header>
                  <Accordion.Body className="para1">
                  We are not just a team, we are a community of passionate individuals striving for positive change. Our diverse backgrounds and shared values propel us to create meaningful projects and foster an environment where innovation and collaboration flourish.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="boldPara">How We Focus on Training and Development?</Accordion.Header>
                  <Accordion.Body className="para1">
                  At the core of our mission lies the belief that empowering individuals with the right skills and knowledge is pivotal for driving positive change. Through a dedicated focus on education and skill development, we aim to create a lasting impact on individuals and the communities they belong to.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="boldPara">   How can Someone get involved or collaborate with your organization?</Accordion.Header>
                  <Accordion.Body className="para1">
                  We welcome individuals, businesses, and organizations who share our values to join hands with us. Whether through partnerships, volunteering, or supporting our initiatives, there are various ways to get involved.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="boldPara"> What makes your approach to training and development unique?</Accordion.Header>
                  <Accordion.Body className="para1">
                  Our approach focuses on empowering individuals with the right skills and knowledge to drive positive change. We believe in creating a lasting impact on both individuals and the communities they belong to.
                  </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="5">
                  <Accordion.Header className="boldPara">   What are the learning resources provided through STEPP?</Accordion.Header>
                  <Accordion.Body className="para1">
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
                  <Accordion.Header className="boldPara"> Are there any job opportunities after completing the STEPP
                    program?</Accordion.Header>
                  <Accordion.Body className="para1">
                    The STEPP program aims to train and recruit final-year
                    students. Upon successful completion, participants may
                    have the opportunity for employment in the Semiconductor
                    industry. Specific job opportunities will be communicated
                    during the program.
                  </Accordion.Body>
                </Accordion.Item> */}
              </Accordion>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
