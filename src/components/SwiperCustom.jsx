import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperCustom = () => {

const bannerImages = [
    {
        image: "https://www.bobactonsports.com/wp-content/uploads/2020/01/Soccer-e1579118003474.png",
        title: "Football camp",
        subtitle: "Learn football this summer ",
    },
    {
        image: "https://tbrnewsmedia.com/wp-content/uploads/2021/09/Northport-Smithtown-East-volleyball-092821-Zack-Zdrojeski-Landon-1636-scaled.jpg",
        title: "Volley Class",
        subtitle: "Serve volley and be the best ",
    },
    {
        image: "https://www.insauga.com/wp-content/uploads/2023/03/70S_6399.jpg",
        title: "Swimming Session",
        subtitle: "Cold swim in heated summer ",
    },
    {
        image: "https://www.sportcamp.gr/sites/sportcamp/files/news/table_tennis.jpg",
        title: "Tennis camp",
        subtitle: "Smash tennis this summer ",
    },
    {
        image: "https://camps.chalkbeat.org/wp-content/uploads/sites/4/event-manager-uploads/event_banner/2023/02/Sport-2.jpg",
        title: "Basket Ball Camp",
        subtitle: "Learn basketball and get exited ",
    },
];

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
                className="h-[300px] md:h-[550px] lg:h-[680px]">
                {bannerImages.map((banner, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={banner.image}
                                className="absolute h-[300px] md:h-[550px] lg:h-[680px] left-0 w-full object-cover"
                            />
                            <div className="absolute left-0 w-full h-[300px] md:h-[550px] lg:h-[680px] bg-slate-950 opacity-30"></div>
                            <div className="absolute left-0 text-white h-[300px] md:h-[550px] lg:h-[680px] w-full flex justify-center items-center">
                                <div className="text-center">
                                    <h1 className="font-bold text-3xl md:text-6xl mb-5">
                                        {banner.title}
                                    </h1>
                                    <p className="text-xl md:text-3xl mb-5">
                                        {banner.subtitle}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default SwiperCustom;
