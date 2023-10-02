import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../components/SectionTitle";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway);
const PaymentPage = () => {
    const { id } = useParams();

    const { data: classData = {} } = useQuery(["classdata"], async () => {
        const res = await fetch(`${import.meta.env.VITE_server}/class/${id}`);
        return await res.json();
    });

    const { data: pHistory = [] } = useQuery(["pHistory"], async () => {
        const res = await fetch(
            `${import.meta.env.VITE_server}/paymentHistory/${classData.email}`
        );
        return await res.json();
    });
    console.log(pHistory);
    return (
        <div className=" w-full md:w-[73%]  mx-auto">
            <div className="border rounded-2xl p-3">
                <SectionTitle heading={"Payment"}></SectionTitle>
                <Elements stripe={stripePromise}>
                    <CheckOutForm classData={classData}></CheckOutForm>
                </Elements>
            </div>
            {/* <div className="border rounded-2xl p-3 mt-4">
                <div className="mx-auto text-center md:w-8/12 py-2 ">
                    <h3 className="text-xl font-bold italic bg-blue-600 text-white rounded-2xl uppercase py-2">
                        Payment history
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <thead>
                            <tr>
                                <th></th>
                                <td>Date</td>
                                <td>transaction_Id</td>

                            </tr>
                        </thead>
                        <tbody>
                            {pHistory.map((history, index) => {
                                const { _id, date, transaction_Id } = history;
                                return (
                                    <tr key={_id}>
                                        <th>{index + 1}</th>
                                        <td>{date}</td>
                                        <td>{transaction_Id}</td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    );
};

export default PaymentPage;
