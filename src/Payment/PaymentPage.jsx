import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../components/SectionTitle";
import { useParams } from "react-router-dom";



const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway);
const PaymentPage = () => {
    const { price } = useParams();
    
    // console.log(price);
    return (
        <div className=" w-2/3 mx-auto">
            <SectionTitle heading={"Payment"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default PaymentPage;