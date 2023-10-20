import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Banner = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://apii.lazma.com/public/settings/HsjFsDLLOG4AP3Glspw.jpg" className='w-full h-full' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://apii.lazma.com/public/settings/_awmz52Rfu0Rnsp4JkO.jpg" className='w-full h-full' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://apii.lazma.com/public/settings/HsjFsDLLOG4AP3Glspw.jpg" className='w-full h-full' alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;