/* eslint-disable react/no-unknown-property */
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const Classes = () => {
    // show only approved classes
    // filter classes which has approved status and then store in a list.
    const classes = [
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "FootBall Class",
            instructor: "Alan Bott",
            seats_available: 12,
            price: 234,
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "FootBall Class",
            instructor: "Alan Bott",
            seats_available: 0,
            price: 234,
        },
        {
            image: "https://static.wixstatic.com/media/70ef0f_39572f6d49be4dcf8426156377dcab39~mv2.png/v1/fill/w_864,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/summer%20camp%20free%20kick%202023.png",
            name: "FootBall Class",
            instructor: "Alan Bott",
            seats_available: 25,
            price: 234,
        },
    ];
    return (
        <Container>
            <div className="pt-16"></div>
            <SectionTitle heading={"Available Classes"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5">
                {classes.map((classData) => {
                    return (
                        <div
                            key={classData}
                            className={`card card-compact w-full shadow-xl ${
                                classData.seats_available == 0 ? "bg-rose-400" : "bg-base-100"
                            }`}>
                            <figure>
                                <img
                                    src={classData.image}
                                    className="h-[250px] object-cover w-full rounded-2xl"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{classData.name}</h2>
                                <p>{classData.instructor}</p>
                                <p>seats: {classData.seats_available}</p>
                                <p className="border border-blue-600 rounded-3xl  ps-2 p-1">
                                    Price: {classData.price}
                                </p>
                                <button
                                    className="btn bg-blue-600  hover:bg-blue-500 text-white font-bold"
                                    disabled={
                                        classData.seats_available == 0
                                            ? true
                                            : false
                                    }>
                                    S e l e c t
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Classes;
