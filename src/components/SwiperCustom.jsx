import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperCustom = () => {
    return (
        <div className="">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                speed={500}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="h-[600px]">
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                        className="absolute h-[300px] md:h-[730px] left-0 w-full object-cover"
                    />
                    <div className="absolute h-[300px] md:h-[730px] left-0 w-full bg-slate-950 opacity-30"></div>
                    <div className="absolute left-0 text-white h-[300px] md:h-[730px] w-full flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="font-bold text-3xl md:text-6xl mb-5">
                                Hello to the world of Legos
                            </h1>
                            <p className="text-xl md:text-3xl mb-5">
                                Find the piece you want
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-2.jpg"
                        className="w-full "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-3.jpg"
                        className="w-full "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-4.jpg"
                        className="w-full "
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperCustom;
