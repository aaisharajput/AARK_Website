import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GetRoute from '../../../Container/server'
import { Pagination, Autoplay } from 'swiper/modules';
import style from './styles.module.css'

function TabContent({images}) {

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{delay:1500,pauseOnMouseEnter: true,}}
            navigation={false}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          
        >

            

            {
                images.map((img,i)=>(
                    <SwiperSlide key={i}>
                        <div className={style.swiperDiv}>
                            <img src={GetRoute(img)} className={`rounded ${style.image}`} />
                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>

    )
}

export default TabContent

// <SwiperSlide key={0}>
//                 <div className={`embed-responsive embed-responsive-16by9 ${style.swiperDiv}`}>
//                     <video width="100%" muted controls className='rounded'>
//                         <source src={GetRoute(images[0])} type="video/mp4" className='rounded'/>
//                     </video>
//                 </div>
//             </SwiperSlide>