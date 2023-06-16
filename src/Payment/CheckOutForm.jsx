// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../hooks/useAuth";

// const CheckOutForm = ({ price }) => {
//     const { user } = useAuth();
//     const stripe = useStripe();
//     const elements = useElements();
//     // const token = localStorage.getItem("access-token");

//     const { data: secret } = useQuery(["classes"], async () => {
//         const res = await fetch(
//             `${import.meta.env.VITE_server}/create-payment-intent`,
//             {
//                 price: price,
//             }
//         );
//         return await res.json();
//     });

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             // Stripe.js has not loaded yet. Make sure to disable
//             // form submission until Stripe.js has loaded.
//             return;
//         }

//         const card = elements.getElement(CardElement);
//         if (card == null) {
//             return;
//         }

//         // Use your card Element with other Stripe.js APIs
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: "card",
//             card,
//         });

//         if (error) {
//             console.log("[error]", error);
//         } else {
//             console.log("[PaymentMethod]", paymentMethod);
//         }

//         const { paymentIntent, error: confirmError } =
//             await stripe.confirmCardPayment(secret.clientSecret, {
//                 payment_method: {
//                     card: card,
//                     billing_details: {
//                         name: user.displayName,
//                         email:user.email,
//                     },
//                 },
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement
//                 options={{
//                     style: {
//                         base: {
//                             fontSize: "16px",
//                             color: "#424770",
//                             "::placeholder": {
//                                 color: "#aab7c4",
//                             },
//                         },
//                         invalid: {
//                             color: "#9e2146",
//                         },
//                     },
//                 }}
//             />
//             <button
//                 className="btn bg-fuchsia-500 hover:bg-blue-500 hover:text-white"
//                 type="submit"
//                 disabled={!stripe || !secret}>
//                 Pay
//             </button>
//         </form>
//     );
// };

// export default CheckOutForm;
