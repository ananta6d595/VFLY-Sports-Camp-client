import SectionTitle from "../../components/SectionTitle";

const PopularInstructors = () => {
    const instructors = [1, 2, 3, 4, 5, 6];
    return (
        <div className="mb-12">
            <SectionTitle
                heading={"Our Star Instructors"}
                subHeading={
                    "Favorite instructors of most students"
                }></SectionTitle>

            <div className=" w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                {instructors.map((option) => {
                    return (
                        <div
                            key={option}
                            className="card w-10/12 mx-auto bg-base-100 drop-shadow-xl shadow-md shadow-blue-300">
                            <figure>
                                <img
                                    src="https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w"
                                    className="h-80 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Alek Bott
                                    <div className="badge bg-blue-500 text-white p-3">
                                        Camp Football Instructor
                                    </div>
                                </h2>
                                <p>
                                    Doing summer Camp from 2020. Till now coached 2000 students in different sports category.
                                </p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">
                                        Football
                                    </div>
                                    <div className="badge badge-outline">
                                        Kayaking
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopularInstructors;
