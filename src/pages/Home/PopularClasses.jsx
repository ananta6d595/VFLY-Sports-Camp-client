import SectionTitle from "../../components/SectionTitle";

const PopularClasses = () => {
    const classes = [1, 2, 3, 4, 5, 6];
    return (
        <div className="mb-12">
            <SectionTitle
                heading={"Popular Classes"}
                subHeading={"Students' most favorite classes"}></SectionTitle>

            <div className="w-9/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {classes.map((option) => {
                    return (
                        <div
                            key={option}
                            className="card w-full mx-auto bg-base-100 shadow-xl image-full">
                            <figure>
                                <img
                                    src="https://www.verywellmind.com/thmb/SPqTAvsJjBz-lc2bDPswFeHXj-w=/3867x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-463029351-56990fc23df78cafda900169.jpg"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopularClasses;
