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

                        <div className=" absolute w-full md:w-[50%]  md:left-[30%] md:mt-12 bg-gradient-to-t from-orange-800 to-blue-700 text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title font-bold text-4xl ">
                                    Voucher
                                </h2>
                                <p>
                                    Only for today, Hurry!
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn">
                                        GET it
                                    </button>
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
