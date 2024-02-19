import style from './styles.module.css'
import TabContent from './tabContent';
import CarouselIndicator from './CarouselIndicator';

function Timeline() {

    const timelineContent = [
        { id: "0", title: "Press Release", tooltip: "Press Release", date: "23,Feb", day: "23,Feb,2023", src: ["/TL_press1.jpg", "/TL_press2.jpg", "/TL_press3.png"], content: "AARK Global Inc plans to open the first-ever Engineering & Innovation Centre Headquartered in Jammu.AARK Global Inc, a Silicon Valley-based Engineering and R&D services provider, is set to open Jammu's first-ever Engineering & Innovation Center. This marks a significant milestone for the company as it expands its operations globally. AARK Global is thrilled to set up its Headquarters in Jammu's blooming community and is looking forward to contributing to its prosperity." },
        { id: "1", title: "New Office", tooltip: "New Office", date: "June", day: "June,2023", src: ["/TL_newoffice1.jpg", "/TL_newoffice2.jpg", "/TL_newoffice3.jpg", "/TL_newoffice4.jpg", "/TL_newoffice5.jpg"], content: "Inaugurating a new office marked a significant milestone for AARK Global Inc, symbolizing its expansion and growth. The state-of-the-art facility reflects the company's dedication to providing a conducive work environment for its employees and better serving its clients." },
        { id: "2", title: "Inauguration", tooltip: "Inauguration", date: "5,July", day: "5,July,2023", src: ["/TL_Inauguration1.jpg", "/TL_Inauguration2.jpg", "/TL_Inauguration3.jpg", "/TL_Inauguration4.jpg", "/TL_Inauguration5.jpg", "/TL_Inauguration6.jpg", "/TL_Inauguration6.jpg"], content: "AARK Global Inc, a leading Silicon Valley-based Engineering and R&D services provider, celebrated the successful inauguration of its Engineering & Innovation Headquarters in Jammu.The inauguration ceremony marked a significant milestone for AARK Global Inc as it expands its operations to Jammu, contributing to the region's prosperity and positioning it as a growing Engineering and R&D hub.The company is delighted to establish its headquarters in Jammu's vibrant community and is committed to nurturing local talent by creating employment opportunities and fostering innovation." },
        { id: "3", title: "Induction", tooltip: "Induction", date: "July", day: "July,2023", src: ["/TL_induction1.jpg", "/TL_induction2.jpg", "/TL_induction3.jpg", "/TL_induction4.jpg", "/TL_induction5.jpg"], content: "We are thrilled to extend a warm and heartfelt welcome to our new joiners who have embarked on this exciting journey with us.At AARK Global, we believe in fostering a team that thrives on collaboration, innovation, and growth, and we're confident that your skills and perspectives will add tremendous value to our collective success." },
        { id: "4", title: "Client Visit", tooltip: "Client Visit", date: "Dec,2023", day: "Dec,2023", src: ["/chennai1.jpg", "/chennai2.jpg", "/chennai3.jpg", "/chennai4.jpg", "/chennai5.jpg"], content: "Hosting a client visit provided an opportunity for AARK Global Inc to strengthen relationships, showcase its capabilities, and gain valuable feedback. Led by seasoned experts in PCB manufacturing and assembly, our training program dives deep into the intricacies of reflow oven furnace technology. Participants will gain a comprehensive understanding of the reflow soldering process, including temperature profiles, solder paste application, component placement, and more. Through interactive demonstrations and practical exercises, you'll learn how to achieve consistent and reliable solder joints for optimal PCB performance." },
        { id: "5", title: "Recruitment Drive(Central University Placement Head,SMVDU Meeting)", tooltip: "Recruitment Drive", date: "Jan,2024", day: "Dec,2023", src: ["/TL_smvdu.jpg", "/TL_central1.jpg", "/TL_central2.jpg", "/TL_central3.png"], content: "What a brilliant start to AARK Global’s India chapter in Jammu. Sharing our vision, building a dream, campus visits/placements, presentations, press conferences, exchanging thoughts, and sharing our story with the incredible Team at IIT, Jammu." },
        { id: "6", title: "STEPP Initiation", tooltip: "STEPP Initiation", date: "14,Dec", day: "14,Dec,2023", src: ["/TL_miet1.jpg", "/TL_miet2.png", "/TL_miet3.jpg", "/TL_miet4.png", "/TL_miet5.jpg", "/TL_miet6.jpg"], content: "We were thrilled to connect with the bright minds at MIET College during our recent visit! AARK Global's team - Amit Kachroo, Hemant V. Ajbani, P.E., Ashok Thorali, Vinay Sharma, and Sudhakar R. Chougale had the honor of delivering a guest lecture to the engineering students, shedding light on 'The Future of the Semiconductor Industry and Career Opportunities'.The interaction with the students was truly inspiring, and we're confident that these future leaders will play a pivotal role in advancing the semiconductor industry." },
        { id: "7", title: "Training and Development", tooltip: "Training and Development", date: "23,Dec", day: "Dec,2023", src: ["/TL_development1.jpg", "/TL_development2.jpg", "/TL_development3.jpg", "/TL_development4.jpg", "/TL_development5.jpg"], content: "A landmark event unfolds as AARK GLOBAL proudly welcomes esteemed visitors from the United States to our headquarters in India for an exclusive training program focused on Semiconductor and SECGEM technology. This collaborative endeavor marks a significant milestone in our commitment to fostering excellence and innovation in the field of technology." },
    ]
    return (<>
        <div className='container p-5'>
            <div className='row'>
                <h2 className='text-center title'>Timeline</h2>
                <p className='text-center para1'>AARK Global Inc's journey has been one marked by milestones, challenges, and remarkable achievements, reflecting its unwavering commitment to excellence and innovation.</p>
            </div>
        </div>

        <div className='container-fluid p-5 bg-white text-black' >


            <div id="carouselExampleIndicators" className={`${style.carousel} carousel slide`} data-bs-touch="false">
                <div className={`${style.carouselIndicators} carousel-indicators`}>

                    {
                        timelineContent.map((data, i) => (
                            <CarouselIndicator key={i} number={data.date} tabId={i} tooltip={data.tooltip} />
                        ))

                    }

               </div>

                <div className="carousel-inner py-3">
                    {
                        timelineContent.map((data, i) => (
                            <div className={`carousel-item ${i == 0 ? "active" : ""}`} key={i}>
                                <div className={`row align-items-center px-5 ${style.row}`}>
                                    <div className='col-12 col-md-5 col-lg-5'>
                                        <TabContent images={data.src} />
                                    </div>
                                    <div className='col-12 col-md-7 col-lg-7'>
                                        <div className={style.timelineSlideText}>
                                            <h3 className='subTitle2'>{data.title}</h3>
                                            <h3 className='subTitle2'>{data.day}</h3>
                                            <p className='para1 pt-3'>{data.content}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>


        </div>
    </>
    )
}

export default Timeline
