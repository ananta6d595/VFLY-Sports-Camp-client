// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../hooks/useAuth";
// import { useEffect, useState } from "react";
// // import axios from "axios";

// const CheckoutForm = ({ price }) => {
//     const { user } = useAuth();
//     const stripe = useStripe();
//     const elements = useElements();
//     const [{ clientSecret }, setClientSecret] = useState();
//     // const token = localStorage.getItem("access-token");
//     console.log(price);

//     useEffect(() => {

//     },[])

//     const { data: secret } = useQuery([], async () => {
//         const res = await fetch(
//             `${import.meta.env.VITE_server}/create-payment-intent`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({price}),
//             }
//         );
//         return await res.json();
//     });
//     console.log(price);

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

//         // const { paymentIntent, error: confirmError } =
//         //     await stripe.confirmCardPayment(secret.clientSecret, {
//         //         payment_method: {
//         //             card: card,
//         //             billing_details: {
//         //                 name: user?.displayName || "unknown",
//         //                 email: user?.email || "anonymous",
//         //             },
//         //         },
//         //     });
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

// export default CheckoutForm;

import { useEffect, useState } from "react";
import {
    CardElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import useAuth from "../hooks/useAuth";
import { CgSpinner } from "react-icons/cg";
// import toast from "react-hot-toast";

export default function CheckoutForm({ price }) {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {


        if (price > 0) {
            // console.log(price);
            fetch(`${import.meta.env.VITE_server}/create-payment-intent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.clientSecret);
                    setClientSecret(data.clientSecret);
                });
        }
    }, [price]);

    // useEffect(() => {
    //     if (!stripe) {
    //         return;
    //     }

    //     const clientSecret = new URLSearchParams(window.location.search).get(
    //         "payment_intent_client_secret"
    //     );

    //     if (!clientSecret) {
    //         return;
    //     }

    //     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //         switch (paymentIntent.status) {
    //             case "succeeded":
    //                 setMessage("Payment succeeded!");
    //                 break;
    //             case "processing":
    //                 setMessage("Your payment is processing.");
    //                 break;
    //             case "requires_payment_method":
    //                 setMessage(
    //                     "Your payment was not successful, please try again."
    //                 );
    //                 break;
    //             default:
    //                 setMessage("Something went wrong.");
    //                 break;
    //         }
    //     });
    // }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("error", error);
            setCardError(error.message);
        } else {
            setCardError("");
            // console.log('payment method', paymentMethod)
        }

        setIsLoading(true);
        // console.log("clientSecret:",clientSecret);
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "unknown",
                        name: user?.displayName || "anonymous",
                    },
                },
            });

        if (confirmError) {
            console.log(confirmError);
            setCardError(confirmError.message);
        }

        console.log("payment intent", paymentIntent);

        if (paymentIntent.status === "succeeded") {
            // save payment information to the server
            const paymentInfo = {
                // ...bookingInfo,
                transactionId: paymentIntent.id,
                date: new Date(),
            };

            console.log("paymentInfo", paymentInfo);
            // TODO: update increase enrolled student number and decrease available student from class
            // axiosSecure.post("/bookings", paymentInfo).then((res) => {
            //     console.log(res.data);
            //     if (res.data.insertedId) {

            //         // updateStatus(bookingInfo.roomId, true)
            //             // .then((data) => {
                         setIsLoading(false);
            //             //     console.log(data);
            //             //     const text = `Booking Successful!, TransactionId: ${paymentIntent.id}`;
            //             //     toast.success(text);
            //             //     navigate("/dashboard/my-bookings");
            //             // })
            //             // .catch((err) => console.log(err));
            //     }
            // });
        }
    };



    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button  className="mt-4" disabled={isLoading || !stripe || !elements} id="submit">
                <span className="btn bg-blue-800 text-white hover:bg-blue-400  font-bold italic uppercase">
                    {isLoading ? (
                        <CgSpinner className="m-auto animate-spin" size={24} />
                    ) : (
                        "Pay now"
                    )}
                </span>
            </button>
            {/* Show any error or success messages */}
            {cardError && (
                <div className="p-3 border-rose-500">{cardError}</div>
            )}
        </form>
    );
}
