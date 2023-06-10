import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const Instructors = () => {
    return (
        <Container>
            <div className="pt-16"></div>
            <SectionTitle heading={"Instructors"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((instructor) => {
                    return (
                        <div
                            key={instructor}
                            className="card card-compact md:flex-row w-full bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w"
                                    className="h-[250px] object-cover w-full rounded-2xl"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Alek Bott</h2>
                                <p>Email: alekboot@gmail.com</p>
                                <p className="border border-blue-600 rounded-3xl flex-grow-0 ps-2 p-1">
                                    Classes: 7
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Instructors;
