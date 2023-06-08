import Container from "../../components/Container";

const Footer = () => {
    return (
        <Container>
            <div className=" bg-image  bg-cover md:bg-contain">
                <div className="bg-blue-900 bg-opacity-75">


                    <footer className="  footer p-5 md:p-10 lg:px-20 text-slate-200">
                        <div>
                            <div className="  rounded-3xl px-4 py-6 border-8 border-white">
                                <h1 className="font-semibold text-5xl text-blue-white ">
                                    VOLL<span className="text-orange-400">Y</span>

                                </h1>
                            </div>
                            <p className="font-medium text-base text-slate-200 ms-4">
                                Summer Volleyball Camp
                            </p>
                        </div>
                        <div>
                            <span className="font-extrabold text-lg text-white">
                                Product
                            </span>
                            <a className="link link-hover">Prototype</a>
                            <a className="link link-hover">Plans & Pricing</a>
                            <a className="link link-hover">Customers</a>
                            <a className="link link-hover">Advertisement</a>
                        </div>
                        <div>
                            <span className="font-extrabold text-lg text-white">
                                Company
                            </span>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Latest News</a>
                        </div>
                        <div>
                            <span className="font-extrabold text-lg text-white">
                                Legal
                            </span>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                        <div>
                            <span className="font-extrabold text-lg text-white">
                                Support & Contact
                            </span>
                            <a className="link link-hover">Help Desk</a>
                            <a className="link link-hover">
                                Become a Partner
                            </a>{" "}
                            <a className="link link-hover">
                                524 Broadway ,
                                <br /> NYC <br />
                                +1 777 - 978 - 5570
                            </a>
                        </div>
                    </footer>

                    <div className="divide-y sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto bg-slate-200 h-[0.5px]  mb-9" />
                    <div className=" md:flex md:justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-10 md:px-14 text-gray-300 font-thin">
                        <div>
                            @2023 <span className="font-semibold">A6d5</span>.
                            All Rights Reserved
                        </div>
                        <div>
                            Powered by{" "}
                            <span className="font-semibold">A6d5</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;