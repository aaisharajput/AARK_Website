import React from "react";
import style from "./style.module.css";

export default function Blogs_structure({ul,heading1,para1,introimg,heading2,heading3,para3,ul2,blogType,para2,para4}) {
  return (
    <>
      <div className={`bg-light ${style.main}`}>
        {/* <div className="container ">
          <div>
            <h1 className="text-center py-5 ">
              {heading}
            </h1>
          </div>
        </div> */}
        {/* <div className="container" >
        <div className='row'>
      <h5 className={`py-5  ${styles.navigate}`}><Link to="/resources/blogs" className={`text-black ${styles.link} ${style.backlinks}`}> Blogs </Link>/ {blogType}</h5>
      </div>
        </div> */}
        <div className={style.bg}>
          <div className="container py-5 ">
            <h4 className=" pb-3 fw-bold d-flex justify-content-center title">Highlights</h4>
            <div className={`d-flex justify-content-center `}>
              <div className={` d-flex justify-content-center  col-md-8 col-sm-12  ${style.highlights}`}>
                <ul className="para1">
                  {ul &&
                    ul.map((item, index) => (
                      <li key={index}>
                        <span>{item.highlightTitle}</span> {item.highlightContent}
                      </li>
                    ))}
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className={`col-md-8 col-sm-12 ${style.intro}`}>
              <h3 className="py-3 title">{heading1}</h3>
              {/* <img src={GetRoute(introimg)} className="img-fluid py-3" alt="" /> */}
              <p className="para1" dangerouslySetInnerHTML={{ __html: para1 }} />
                
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className={`col-md-8 col-sm-12 ${style.intro} ${style.benifits}`}>
              <h3 className="py-3 subTitle">{heading2}</h3>
              <p className="para1" dangerouslySetInnerHTML={{ __html: para2 }} />
              <ul className="para1">
                {/* Render ul2 list */}
                {ul2 &&
                  ul2.map((item, index) => (
                    <li key={index}>
                      <span className="fw-bold">{item.title}</span> {item.content}
                      
                      <ul>
                        <br />
                        {/* Render subItems */}
                        {item.subItems &&
                          item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                             
                              <span className="fw-bold">{subItem.title}</span>{" "}
                              {subItem.content}
                              <br /> <br />
                            </li>
                          ))}
                      </ul>
                      <br />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className={`col-md-8 col-sm-12 ${style.intro}`}>
              <h3 className="py-3 title">{heading3}</h3>
              <p className="para1" dangerouslySetInnerHTML={{ __html: para3 }} />
              
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className={`col-md-8 col-sm-12 ${style.intro}`}>
              
              <p className="pt-5 para1" dangerouslySetInnerHTML={{ __html: para4 }} />
              <a className="para1" href="mailto:info@aarkglobalinc.com">Let's connect<i className="fa fa-arrow-right px-1"></i></a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
