import Container from "../../components/Container";

const Footer = () => {
    return (
        <Container>
            <div className="pt-16 md:bg-contain ">
                <div className="bg-gradient-to-t from-black to-gray-900">
                    <footer className="p-5 footer md:p-10 lg:px-20 text-slate-200">
                        <div>
                            <div className="px-4 py-6 bg-gray-500 border-8 border-white rounded-3xl">
                                <h1 className="text-5xl font-semibold ">
                                    <span className="text-blue-800">V</span>FL
                                    <span className="text-orange-400">Y</span>
                                </h1>
                            </div>
                            <p className="text-base font-medium text-slate-200 ms-4">
                                Summer Sports Camp
                            </p>
                        </div>
                        <div>
                            <span className="text-lg font-extrabold text-white">
                                Product
                            </span>
                            <a className="link link-hover">Prototype</a>
                            <a className="link link-hover">Plans & Pricing</a>
                            <a className="link link-hover">Customers</a>
                            <a className="link link-hover">Advertisement</a>
                        </div>
                        <div>
                            <span className="text-lg font-extrabold text-white">
                                Company
                            </span>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Latest News</a>
                        </div>
                        <div>
                            <span className="text-lg font-extrabold text-white">
                                Legal
                            </span>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                        <div>
                            <span className="text-lg font-extrabold text-white">
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
                    <div className="px-10 mx-auto font-thin text-gray-300 md:flex md:justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14">
                        <div>
                            @2023{" "}
                            <span className="font-semibold">Ananta Roy</span>.
                            All Rights Reserved
                        </div>
                        <div>
                            Powered by{" "}
                            <span className="font-semibold">Ananta Roy</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;