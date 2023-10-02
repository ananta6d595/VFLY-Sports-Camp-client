import CampFire from "../../components/CampFire/CampFire";
import Container from "../../components/Container";

import SwiperCustom from "../../components/SwiperCustom";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";

const Home = () => {
    return (
        <div>
            <Container>
                <div>
                    <SwiperCustom></SwiperCustom>
                    <PopularClasses></PopularClasses>
                    <PopularInstructors></PopularInstructors>
                    <div className="relative h-[700px] md:h-[500px] ">
                        <CampFire></CampFire>

                        <div className=" absolute w-[100%]">
                            <div className="w-full md:w-[70%] md:mx-auto md:mt-12 bg-gradient-to-t from-orange-300 to-blue-600 text-primary-content rounded-3xl">
                                <div className="card-body">
                                    <h2 className="text-4xl font-bold card-title ">
                                        Voucher
                                    </h2>
                                    <p>Only for today, Hurry!</p>
                                    <div className="justify-end card-actions">
                                        <button className="btn">GET it</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;
