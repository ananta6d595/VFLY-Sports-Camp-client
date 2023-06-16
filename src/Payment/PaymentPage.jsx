// import { Elements } from "@stripe/react-stripe-js";
// import CheckOutForm from "./CheckOutForm";
// import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../components/SectionTitle";



// const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway);
const PaymentPage = () => {
    return (
        <div className=" w-2/3 mx-auto">
            <SectionTitle heading={"Payment"}></SectionTitle>
            {/* <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements> */}
        </div>
    );
};

export default PaymentPage;