import React from 'react'
import { useState, useEffect } from 'react';
import Style from './Culture.module.css';
import GetRoute from '../../Container/server/index.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



function Culture() {
    const [slidesPerView, setSlidesPerView] = useState(3); // Initial slidesPerView

    useEffect(() => {
        const handleResize = () => {
            // Update slidesPerView based on screen size
            if (window.innerWidth <= 768) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(3);
            }
        };

        handleResize(); // Call the function once to set initial value

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className={Style.image}>
                <img className='img-fluid' src={GetRoute('/We.jpg')} alt="" />
            </div>

            <div className='bg-light text-black'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 '>
                            <div className={Style.Img}>
                                <img className={`mt-5 img-fluid `} src={GetRoute('/Stepp.jpg')} alt="" height={400} />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6  py-5'>
                            <h2 className='text-center subTitle' >GET TO KNOW US</h2>
                            <p className='text-start py-3 para1'>Welcome to AARK GLOBAL, where innovation meets excellence in the world of IT solutions! As a dynamic and customer-centric organization, we take pride in offering a comprehensive suite of cutting-edge products and services tailored to meet the unique needs of our clients. At AARK, we understand that the digital landscape is constantly evolving, and businesses require flexible and scalable solutions to stay ahead in the competitive market. With a relentless commitment to excellence, we harness the power of technology to empower your business, drive efficiency, and accelerate growth.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How Everyday looks like section  */}

            <div className='container py-5'>
                <h2 className='text-center mb-4 title' >How Everyday Looks Like</h2>
                <p className='text-start py-3 mb-2 fw-bold para1'><em>Welcome to the heartbeat of innovation! At AARK, every day is an exciting journey filled with collaboration, creativity, and a shared commitment to excellence. Here is a glimpse into the vibrant tapestry that makes up a typical day in our dynamic IT haven.</em></p>

                <div className='row mt-5'>

                    <div className='col-sm-12 col-md-8 d-flex justify-content-center align-items-center'>
                        <div>
                            <h2 className='subTitle'>1. Morning Fuel</h2>
                            <p className='para1'>Energizing Collaboration:
                                The day kicks off with a burst of energy as our talented teams gather for morning huddles. With a strong cup of coffee in hand, colleagues exchange ideas, discuss project milestones, and align on the day's objectives. It's a time for camaraderie, where diverse perspectives converge to inspire breakthrough solutions.</p>
                        </div>

                    </div>

                    <div className='col-sm-12 col-md-4 d-flex justify-content-center align-items-center '>
                        <div className={Style.Img2}>
                            <img className={` img-fluid `} src={GetRoute('/Everyday.jpg')} alt="" />
                        </div>
                    </div>
                </div>


                <div className='row mt-5'>

                    <div className='col-sm-12 col-md-4 d-flex justify-content-center align-items-center order-2 order-md-1'>
                        <div className={Style.Img2}>
                            <img className={` img-fluid `} src={GetRoute('/crousel1.jpg')} alt="" />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-8 order-1 order-md-2 d-flex justify-content-center align-items-center'>
                        <div >
                            <h2 className='subTitle'>2. Agile Workspaces</h2>
                            <p className='para1'>Where Ideas Take Flight:
                                Our agile workspaces are buzzing with activity. From collaborative brainstorming sessions to focused coding marathons, every corner is a hub of innovation. Flexible seating arrangements foster a culture of openness, encouraging spontaneous discussions and cross-functional synergy.</p>
                        </div>

                    </div>

                </div>


                <div className='row mt-5'>

                    <div className='col-sm-12 col-md-8 d-flex justify-content-center align-items-center'>
                        <div>
                            <h2 className='subTitle'>3. Code Craftsmanship</h2>
                            <p className='para1'>Our developers are the architects of the future. With lines of code, algorithms, and intricate designs, they bring visions to life. Whether working on custom software solutions, mobile applications, or intricate backend systems, our coding wizards weave magic into every project.</p>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-4 d-flex justify-content-center align-items-center'>
                        <div className={Style.Img2}>
                            <img className={` img-fluid `} src={GetRoute('/crousel2.jpg')} alt="" />
                        </div>
                    </div>
                </div>


                <div className='row mt-5'>

                    <div className='col-sm-12 col-md-4 d-flex justify-content-center align-items-center order-2 order-md-1'>
                        <div className={Style.Img2}>
                            <img className={` img-fluid `} src={GetRoute('/Thinktanks.jpg')} alt="" />
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-8 d-flex justify-content-center align-items-center order-1 order-md-2'>
                        <div>
                            <h2 className='subTitle'>4. Think Tanks and Strategy Sessions</h2>
                            <p className='para1'>Guiding the Way:
                                Midday sees our experts huddled in think tanks and strategy sessions. Brainstorming innovative solutions, evaluating market trends, and refining strategies, our teams ensure that we stay at the forefront of technology, always ready to address the evolving needs of our clients.</p>
                        </div>
                    </div>

                </div>


                <div className='row mt-5'>

                    <div className='col-sm-12 col-md-8 d-flex justify-content-center align-items-center'>
                        <div>
                            <h2 className='subTitle'>5. Continuous Learning </h2>
                            <p className='para1'>Nurturing Growth:
                                In the ever-evolving tech landscape, learning is a constant. Our employees engage in continuous learning initiatives, from workshops and webinars to skill-building sessions. Staying ahead of the curve ensures that our team is equipped with the latest tools and knowledge to tackle any challenge.</p>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-4 d-flex justify-content-center align-items-center'>
                        <div className={Style.Img2}>
                            <img className={` img-fluid `} src={GetRoute('/StrategySession.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-5 title'>Image Gallery</h2>
                <Swiper

                    className='mt-5'
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide >
                        <img className={` img-fluid `} src={GetRoute('/Everyday.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={` img-fluid `} src={GetRoute('/crousel1.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={` img-fluid `} src={GetRoute('/crousel2.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={` img-fluid `} src={GetRoute('/crousel3.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={` img-fluid `} src={GetRoute('/crousel4.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={` img-fluid `} src={GetRoute('/crousel5.jpg')} alt="" />
                    </SwiperSlide>
                    
                </Swiper>
            </div>

            {/* Training and Certification Section  */}
            <div className='bg-light text-black'>

                <div className='container py-5'>
                    <h2 className='text-center mb-4 title' >Training and Certifications</h2>

                    <p className='text-start py-3 mb-2 fw-bold para1'><em> Elevating Excellence Through Training and Certification. At AARK GLOBAL, we are dedicated to empowering individuals and organizations with the knowledge, skills, and credentials they need to excel in today's dynamic world. As a leading provider of training and certifications, we specialize in offering comprehensive programs designed to enhance professional development and drive organizational success.</em></p>

                    <div className='row mt-5'>
                        <h2 className='text-center pb-5 title'>Trainings</h2>
                        <div className='col-12'>

                            <h2 className="subTitle">1. AARK GLOBAL Hosts Exclusive Training Sessions on Semi-conductor and SECGEM Technology</h2>
                            <p className='mt-4 para1'>A landmark event unfolds as AARK GLOBAL proudly welcomes esteemed visitors from the United States to our headquarters in India for an exclusive training program focused on Semiconductor and SECGEM technology. This collaborative endeavor marks a significant milestone in our commitment to fostering excellence and innovation in the field of technology.</p>
                        </div>

                        <div className='col-12 '>
                            <div className={Style.Img2}>
                                <Swiper
                                    className='mt-5'
                                    modules={[Autoplay, Pagination]}
                                    autoplay={{
                                        delay: 1500,
                                        disableOnInteraction: false,
                                    }}
                                    spaceBetween={50}
                                    slidesPerView={slidesPerView}
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}

                                >
                                    <SwiperSlide >
                                        <img className={Style.CrouselImages} src={GetRoute('/AT1.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/AT7.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/AT4.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/AT5.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/AT2.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/AT6.jpg')} alt="" />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>


                    <div className='row mt-5'>

                        <div className='col-12'>

                            <h2 className="subTitle">2. Software Development Excellence with AARK GLOBAL</h2>
                            <p className='mt-4 para1'>At AARK GLOBAL, we offer comprehensive training programs designed to cater to individuals at every stage of their software development journey. Whether you're a beginner looking to learn the fundamentals of programming or an experienced developer seeking to master advanced techniques, our courses cover a wide range of topics to meet your needs.</p>
                        </div>

                        <div className='col-12 '>
                            <div className={Style.Img2}>
                                <Swiper
                                    className='mt-5'
                                    modules={[Autoplay, Pagination]}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    spaceBetween={50}
                                    slidesPerView={slidesPerView}
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}

                                >
                                    <SwiperSlide >
                                        <img className={Style.CrouselImages} src={GetRoute('/GT5.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/GT9.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/GT3.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/GT1.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/GT6.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/GT2.jpg')} alt="" />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>


                    <div className='row mt-5'>

                        <div className='col-12'>

                            <h2 className="subTitle">3. Master the Art of PCB Baking with AARK GLOBAL's Reflow Oven Furnace Training in Chennai</h2>
                            <p className='mt-4 para1'>Led by seasoned experts in PCB manufacturing and assembly, our training program dives deep into the intricacies of reflow oven furnace technology. Participants will gain a comprehensive understanding of the reflow soldering process, including temperature profiles, solder paste application, component placement, and more. Through interactive demonstrations and practical exercises, you'll learn how to achieve consistent and reliable solder joints for optimal PCB performance.</p>
                        </div>

                        <div className='col-12 '>
                            <div className={Style.Img2}>
                                <Swiper
                                    className='mt-5'
                                    modules={[Autoplay, Pagination]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    spaceBetween={50}
                                    slidesPerView={slidesPerView}
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}

                                >
                                    <SwiperSlide >
                                        <img className={Style.CrouselImages} src={GetRoute('/chennai1.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/chennai2.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/chennai3.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/chennai4.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/chennai5.jpg')} alt="" />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>


                    <div className='row mt-5'>

                        <div className='col-12'>

                            <h2 className="subTitle">4. Introducing IDSPL Training At AARK: Empowering Your Journey in  Design and Manufacturing</h2>
                            <p className='mt-4 para1'>Through IDSPL (Ideas Design Solutions Pvt. Ltd.) one should  gain knowledge and skills in the field of design engineering and also ready to apply these skills in our real time projects at AARK. Training from IDSPL gives you a hands on experience to optimize the use of tools to create better design. Certified and Trained technical support team to help you transform your product development idea into reality.  </p>
                        </div>

                        <div className='col-12 '>
                            <div className={Style.Img2}>
                                <Swiper
                                    className='mt-5'
                                    modules={[Autoplay, Pagination]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    spaceBetween={50}
                                    slidesPerView={slidesPerView}
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}

                                >
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/StrategySession.jpg')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/idpsl5.png')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img className={Style.CrouselImages} src={GetRoute('/idpsl.png')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/idpsl2.png')} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={Style.CrouselImages} src={GetRoute('/idpsl4.png')} alt="" />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='container py-3'>
                    <h2 className='text-center mb-4 title' > Certifications</h2>

                    <div className='row py-5'>

                        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
                            <div>
                                <h2 className="subTitle">1. Microsoft Azure Fundamentals AZ-900</h2>
                                <p className='para1'>We are thrilled to announce the successful certification achievement of our company members in the AZ-900: Microsoft Azure Fundamentals exam. This certification marks a significant milestone in their professional journey and reflects our commitment to staying at the forefront of cloud technology.</p>
                            </div>
                        </div>

                        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
                            <div className={Style.Img2}>
                                <img className={` img-fluid `} src={GetRoute('/AZ900.webp')} alt="" height={400} />
                            </div>
                        </div>
                    </div>

                    <div className='row py-5'>

                        <div className='col-sm-12 col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center'>
                            <div className={Style.Img2}>
                                <img className={` img-fluid `} src={GetRoute('/AZ204.webp')} alt="" height={400} />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2'>
                            <div>
                                <h2 className="subTitle">2.Microsoft Azure Developer Associate AZ-204</h2>
                                <p className='para1'>We are excited to announce the successful certification attainment of our company members in the AZ-204: Developing Solutions for Microsoft Azure exam. This certification signifies a significant advancement in their professional development and underscores our commitment to mastering cutting-edge cloud technologies.</p>
                            </div>
                        </div>

                    </div>

                    <div className='row py-5'>

                        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center '>
                            <div>
                                <h2 className="subTitle">3. Salesforce Administrator</h2>
                                <p className='para1'>We are delighted to announce the successful certification attainment of our team members in the Salesforce Administrator exam.The Salesforce Administrator certification is designed to validate proficiency in managing and configuring Salesforce applications. It covers a broad range of topics, including Salesforce fundamentals, data management, security, automation, and reporting.</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
                            <div className={Style.Img2}>
                                <img className={` img-fluid `} src={GetRoute('/SalesForce.webp')} alt="" height={400} />
                            </div>
                        </div>

                    </div>

                    <div className='row py-5'>

                        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center order-2 order-md-1'>
                            <div className={Style.Img2}>
                                <img className={` img-fluid `} src={GetRoute('/Hardware.webp')} alt="" height={400} />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2'>
                            <div>
                                <h2 className="subTitle">4. Certified SOLIDWORKS Associate (CSWA)</h2>
                                <p className='para1'>We are excited to announce the successful certification attainment of our company members in the CSWA: The Certified SOLIDWORKS Associate (CSWA) exam. This certification signifies a significant advancement in their professional development and underscores our commitment to solve complex design challenges efficiently and effectively.</p>
                            </div>
                        </div>

                    </div>

                    <div className='row py-5'>

                        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
                            <div>
                                <h2 className="subTitle">5. Certified SOLIDWORKS Professional (CSWP) </h2>
                                <p className='para1'>The Certified SOLIDWORKS Professional (CSWP) exam, offered exclusively to members of our esteemed company, is a comprehensive assessment designed to validate advanced proficiency in SOLIDWORKS, the premier 3D CAD software utilized across various industries worldwide. This certification distinguishes individuals who possess an exceptional skill set in leveraging SOLIDWORKS tools and functionalities to solve complex design challenges efficiently and effectively.</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
                            <div className={Style.Img2}>
                                <img className={` img-fluid `} src={GetRoute('/Hardware.webp')} alt="" height={400} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* Celebration Section  */}
            <div className=' py-4'>
                <h2 className={`text-center py-4 text-white title`}>Celebrations</h2>
                <ul className="nav nav-tabs d-flex justify-content-evenly mt-4 ">
                    <li className={`nav-item ${Style.navItems}`}>
                        <a className={`nav-link ${Style.navLink} boldPara`} data-bs-toggle="tab" href="#home">Independence day</a>
                    </li>
                    <li className={`nav-item ${Style.navItems}`}>
                        <a className={`nav-link ${Style.navLink} boldPara`} data-bs-toggle="tab" href="#menu1">Rangoli</a>
                    </li>
                    <li className={`nav-item ${Style.navItems}`}>
                        <a className={`nav-link ${Style.navLink} boldPara`} data-bs-toggle="tab" href="#menu2">Engineer Day</a>
                    </li>
                    <li className={`nav-item ${Style.navItems}`}>
                        <a className={`nav-link ${Style.navLink} boldPara`} data-bs-toggle="tab" href="#menu2">Diwali </a>
                    </li>
                    <li className={`nav-item ${Style.navItems}`}>
                        <a className={`nav-link ${Style.navLink} boldPara`} data-bs-toggle="tab" href="#menu2">Vaishno Devi Visit</a>
                    </li>
                    <li className={`nav-item ${Style.navItems}`}>
                        <a className={`nav-link ${Style.navLink} boldPara`} data-bs-toggle="tab" href="#menu2">Lohri </a>
                    </li>
                    <li className={`nav-item ${Style.navItems}`}>
                        <a className={`nav-link ${Style.navLink} boldPara`} data-bs-toggle="tab" href="#menu2">Birthday's </a>
                    </li>
                    <li className={`nav-item ${Style.navItems}`}>
                        <a className={`nav-link ${Style.navLink} boldPara`} data-bs-toggle="tab" href="#menu2">Republic Day </a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane container active pb-5" id="home">
                        <Swiper
                            className='mt-5'
                            modules={[Autoplay, Pagination]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={50}
                            slidesPerView={slidesPerView}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}

                        >
                            <SwiperSlide >
                                <img className={Style.CrouselImages} src={GetRoute('/independence1.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/independence2.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/independence3.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/independence6.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/independence5.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/independence4.jpg')} alt="" />
                            </SwiperSlide>

                        </Swiper>
                    </div>

                    <div className="tab-pane container fade" id="menu1">
                        <Swiper
                            className='mt-5'
                            modules={[Autoplay, Pagination]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={50}
                            slidesPerView={slidesPerView}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}

                        >
                            <SwiperSlide >
                                <img className={Style.CrouselImages} src={GetRoute('/rangoli1.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/rangoli2.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/rangoli3.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/rangoli4.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/rangoli5.jpg')} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/rangoli6.jpg')} alt="" />
                            </SwiperSlide>
                        
                        </Swiper>
                    </div>

                    <div className="tab-pane container fade" id="menu2">
                        <Swiper
                        className='py-5'
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}

                    >
                        <SwiperSlide >
                            <img className={Style.CrouselImages} src={GetRoute('/engday1.jpg')} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={Style.CrouselImages} src={GetRoute('/engday2.jpg')} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={Style.CrouselImages} src={GetRoute('/engday3.jpg')} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={Style.CrouselImages} src={GetRoute('/engday4.jpg')} alt="" />
                        </SwiperSlide>
                      
                    </Swiper></div>
                </div>
            </div>

            {/* CSR Section  */}
            <div className=' bg-light text-black py-4 '>
                <div className='container'>
                <h2 className={`text-center py-4 title`}>CSR ( Corporate Social Responsibility)</h2>
                <h2 className={` py-4 subTitle`}>1. BALGRAN VISIT</h2>
                <p className='para1'>We are thrilled to share our recent CSR initiative at BALGRAN - A Charitable Home for underprivileged children.

                    The AARK Global team celebrated Diwali with smiles and gratitude, delivering essentials and spending quality time engaging with these incredible kids.

                    Here's what our kids taught us during storytelling, one-on-one conversations, and just plain listening to them:
                    - Dream big, no matter the cards that have been dealt to you
                    - Have hope in the face of every adversity
                    - Be resilient, no matter what the obstacles are

                    We feel proud to be part of a company that prioritizes community and societal well-being.

                    Here's to creating more moments of impact and spreading happiness.</p>
                <Swiper
                            className='py-5'
                            modules={[Autoplay, Pagination]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={50}
                            slidesPerView={slidesPerView}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}

                        >
                            <SwiperSlide >
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran4.jpg')} alt="" />
                            </SwiperSlide>

                            <SwiperSlide >
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran10.jpg')} alt="" />
                            </SwiperSlide>
                         
                            <SwiperSlide >
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran2.jpg')} alt="" />
                            </SwiperSlide>

                            <SwiperSlide >
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran13.jpg')} alt="" />
                            </SwiperSlide>

                            <SwiperSlide >
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran6.jpg')} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran7.jpg')} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran8.jpg')} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran12.jpg')} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran5.jpg')} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className={Style.CrouselImages} src={GetRoute('/Balgran14.jpg')} alt="" />
                            </SwiperSlide>

                        </Swiper>
                </div>
            </div>


            {/* Testimonial section  */}
            <div className=''>
                <div>
                    <h2 className='text-center py-5 title'>Testimonials by AARKITES</h2>
                </div>
                <div className="container pb-5">
                    <Swiper
                        className='pb-5'
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >

                        <SwiperSlide >
                        <div className={`embed-responsive embed-responsive-16by9`}>
                                <video width="100%" controls muted loop playsInline preload="metadata" className='rounded'>
                                    <source src={GetRoute('/RohitSharma.mp4')} type="video/mp4" className='rounded' />
                                </video>
                            </div>

                           
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`embed-responsive embed-responsive-16by9`}>
                                <video width="100%" controls muted loop playsInline preload="metadata" className='rounded'>
                                    <source src={GetRoute('/SaiKiranTestimonial.mp4')} type="video/mp4" className='rounded' />
                                </video>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`embed-responsive embed-responsive-16by9`}>
                                <video width="100%" controls muted loop playsInline preload="metadata" className='rounded'>
                                    <source src={GetRoute('/AimanTestimonial.mp4')} type="video/mp4" className='rounded' />
                                </video>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                        <div className={`embed-responsive embed-responsive-16by9`}>
                                <video width="100%" controls muted loop playsInline preload="metadata" className='rounded'>
                                    <source src={GetRoute('/Appikshatestimonial.mp4')} type="video/mp4" className='rounded' />
                                </video>
                            </div>
                        </SwiperSlide>

                    </Swiper>


                </div>


            </div>




        </>


    )
}

export default Culture
