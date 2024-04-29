import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';




import hero1 from '../../assets/hero11.jpg'
import hero2 from '../../assets/hero22.jpg'
import hero3 from '../../assets/hero3.jpg'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Header = () => {
    return (

        <div>
            <div>
                <Swiper
                navigation={true} 
                pagination={
                  {clickable:true}
                }
                modules={[Navigation,Autoplay,Pagination]}
                loop={true}
                autoplay={
                   {
                       delay:6000
                   }
                }
                 
                >
                    <SwiperSlide>
                        <div  className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-[600px] bg-no-repeat bg-cover rounded-xl" style= {{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${hero1})`}}>
                        <h2  className="text-white text-6xl font-bold text-center pt-56">Never Stop Exploring </h2>
                        <h2  className="text-white p-4 text-6xl font-bold text-center ">The World </h2>
                        

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-[600px] bg-no-repeat bg-cover rounded-xl" style= {{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${hero2})`}}>
                        <h2  className="text-white text-6xl font-bold text-center pt-56">Never Stop Exploring </h2>
                        <h2  className="text-white p-4 text-6xl font-bold text-center ">The World </h2>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-[600px] bg-no-repeat bg-cover rounded-xl" style= {{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${hero3})`}}>
                        <h2  className="text-white text-6xl font-bold text-center pt-56">Never Stop Exploring </h2>
                        <h2  className="text-white p-4 text-6xl font-bold text-center ">The World </h2>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>


    );
};

export default Header;