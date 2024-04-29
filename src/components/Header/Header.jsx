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

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-[600px] bg-no-repeat bg-cover rounded-xl" style= {{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${hero2})`}}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-[600px] bg-no-repeat bg-cover rounded-xl" style= {{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${hero3})`}}>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
//         <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-[600px] bg-no-repeat bg-cover rounded-xl" style= {{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${house1})`}}>

//         <h2 data-aos="fade-left" data-aos-delay="1000" className="text-white text-6xl font-bold text-center pt-56">The Best Way <br /> To know the world</h2>
//         <Link data-aos="fade-right" data-aos-delay="2000"  className=" flex justify-center text-center mx-auto w-1/4 border border-white p-4 text-2xl font-semibold  text-white mt-6 ">Register now</Link>
        

// </div>

    );
};

export default Header;