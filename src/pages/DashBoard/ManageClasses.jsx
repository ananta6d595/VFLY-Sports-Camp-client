import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const ManageClasses = () => {
    const classes = [
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "FootBall Class",
            instructor: "Alan Bott",
            email: "alanbott@gmail.com",
            seats_available: 12,
            enrolled: 0,
            status: "denied",
            feedback:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti ratione nobis hic nulla? Fugit, voluptatibus quidem, facere velit a voluptatum est distinctio eaque architecto incidunt nulla eius necessitatibus mollitia.",
            price: 234,
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "FootBall Class",
            instructor: "Alan Bott",
            email: "alanbott@gmail.com",
            seats_available: 0,
            enrolled: 0,
            status: "pending",
            feedback: "",
            price: 234,
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/5a2cd298f43b551b489d04fd/1583258826725-80C4PC5NSS5SNSZT1C1F/Senior-Alek-13.JPG-2.jpg?format=1000w",
            name: "FootBall Class",
            instructor: "Alan Bott",
            email: "alanbott@gmail.com",
            seats_available: 0,
            enrolled: 0,
            status: "approved",
            feedback: "",
            price: 234,
        },
        {
            image: "https://static.wixstatic.com/media/70ef0f_39572f6d49be4dcf8426156377dcab39~mv2.png/v1/fill/w_864,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/summer%20camp%20free%20kick%202023.png",
            name: "FootBall Class",
            instructor: "Alan Bott",
            email: "alanbott@gmail.com",
            seats_available: 25,
            enrolled: 0,
            status: "pending",
            feedback: "",
            price: 234,
        },
    ];
    return (
        <div>
            <SectionTitle heading={"All Classes"}></SectionTitle>

            <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {classes.map((classData, index) => {
                    return (
                        <div
                            key={index}
                            className="card  w-full mx-auto bg-base-100 shadow-xl hover:shadow-blue-600 hover:backdrop-blur-3xl image-full">
                            <figure>
                                <img src={classData.image} />
                            </figure>
                            <div className=" p-5 text-white z-10 ">
                                <h2 className="card-title">{classData.name}</h2>
                                <p> Instructor: {classData.instructor}</p>
                                <p className="mb-3">Email: {classData.email}</p>
                                <p>
                                    Available Seats: {classData.seats_available}
                                </p>
                                <p> Price: {classData.price}</p>
                                <p> Status: {classData.status}</p>
                                <div className="card-actions mt-3 ">
                                    <button
                                        className="btn btn-primary mt-auto w-full bg-emerald-600 hover:bg-emerald-500 hover:text-black"
                                        disabled={
                                            classData.status === "approved"
                                                ? true
                                                : classData.status === "denied"
                                                ? true
                                                : false
                                        }>
                                        approve
                                    </button>
                                    <button
                                        className="btn btn-primary mt-auto w-full bg-rose-600 hover:bg-rose-500 hover:text-black"
                                        disabled={
                                            classData.status === "approved"
                                                ? true
                                                : classData.status === "denied"
                                                ? true
                                                : false
                                        }>
                                        Deny
                                    </button>
                                    <Link to="feedback">
                                        <button className="btn text-white border-0 mt-auto w-full bg-cyan-600 hover:bg-cyan-500 hover:text-black">
                                            Send FeedBack
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ManageClasses;


/*

// import { Link } from "react-router-dom";
// import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../hooks/useAuth";

const ManageClasses = () => {
    // const { user } = useAuth();
    // const token = localStorage.getItem("access-token");
    const { data: classes = [], } = useQuery(["allClasses"], async () => {
        const res = await fetch(`${import.meta.env.VITE_server}/allClasses`
        //     {
        //     headers: { authorization: `bearer ${token}` },
        // }
        );
        return await res.json();
    });
    console.log(classes);
    // const {
    //     availableSeats,
    //     classImage,
    //     className,
    //     instructor_mail,
    //     instructor_name,
    //     price,
    //     status
    // } = classes[0];


    return (
        <></>
        // <div>
        //     <SectionTitle heading={"All Classes"}></SectionTitle>

        //     <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        //         {classes.map((classData, index) => {
        //             return (
        //                 <div
        //                     key={index}
        //                     className="card  w-full mx-auto bg-base-100 shadow-xl hover:shadow-blue-600 hover:backdrop-blur-3xl image-full">
        //                     <figure>
        //                         <img src={classImage} />
        //                     </figure>
        //                     <div className=" p-5 text-white z-10 ">
        //                         <h2 className="card-title">{className}</h2>
        //                         <p> Instructor: {instructor_name}</p>
        //                         <p className="mb-3">Email: {instructor_mail}</p>
        //                         <p>
        //                             Available Seats: {availableSeats}
        //                         </p>
        //                         <p> Price: {price}</p>
        //                         <p> Status: {   status}</p>
        //                         <div className="card-actions mt-3 ">
        //                             <button
        //                                 className="btn btn-primary mt-auto w-full bg-emerald-600 hover:bg-emerald-500 hover:text-black"
        //                                 disabled={
        //                                     classData.status === "approved"
        //                                         ? true
        //                                         : classData.status === "denied"
        //                                         ? true
        //                                         : false
        //                                 }>
        //                                 approve
        //                             </button>
        //                             <button
        //                                 className="btn btn-primary mt-auto w-full bg-rose-600 hover:bg-rose-500 hover:text-black"
        //                                 disabled={
        //                                     classData.status === "approved"
        //                                         ? true
        //                                         : classData.status === "denied"
        //                                         ? true
        //                                         : false
        //                                 }>
        //                                 Deny
        //                             </button>
        //                             <Link to="feedback">
        //                                 <button className="btn text-white border-0 mt-auto w-full bg-cyan-600 hover:bg-cyan-500 hover:text-black">
        //                                     Send FeedBack
        //                                 </button>
        //                             </Link>
        //                         </div>
        //                     </div>
        //                 </div>
        //             );
        //         })}
        //     </div>
        // </div>
    );
};

export default ManageClasses;

*/