import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useBooking from "../../../Hooks/useBooking";
import useContact from "../../../Hooks/useContact";
import { useEffect, useState } from "react";
import useAxiosPublic from './../../../Hooks/useAxiosPublic';


const CheckoutForm = () => {
  const axiosPublic= useAxiosPublic()
  const {user} = useContact(AuthContext)
  const { bookings } = useBooking()
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cartError, setCartError] = useState("");

  const totalPrice = bookings.reduce(
    (acc, booking) => acc + parseInt(booking.price),
    0
  );

  //create payment-intent
 
  useEffect(() => {
    if (totalPrice > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosPublic, totalPrice]);


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    console.log(paymentMethod)
    if (error) {
      setCartError(error.message);
    } else {
      setCartError("");
    }

    //create confirm payment intent
    const { paymentIntent, error: cartError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      }
    );
    console.log(paymentIntent)
    console.log(cartError)
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
    </div>

  )
}

export default CheckoutForm