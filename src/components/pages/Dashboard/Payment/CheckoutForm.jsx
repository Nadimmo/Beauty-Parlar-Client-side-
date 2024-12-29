import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useBooking from "../../../Hooks/useBooking";
import { useEffect, useState, useContext } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext); // Corrected: Used useContext for AuthContext
  const { bookings } = useBooking();
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [cartError, setCartError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false); // Added processing state

  // Calculate total price safely
  const totalPrice = bookings.reduce(
    (acc, booking) => acc + (parseInt(booking.price) || 0),
    0
  );

  // Create Payment Intent
  useEffect(() => {
    if (totalPrice > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
          setCartError("Failed to create payment intent. Please try again.");
        });
    }
  }, [axiosPublic, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setCartError("Stripe.js has not loaded yet.");
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setCartError("Card element not found.");
      return;
    }

    setIsProcessing(true); // Start processing
    setCartError(""); // Clear any previous errors

    try {
      // Create Payment Method
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card,
        });

      if (paymentMethodError) {
        setCartError(paymentMethodError.message);
        setIsProcessing(false);
        return;
      }

      // Confirm Payment Intent
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "Anonymous",
              email: user?.email || "Anonymous",
            },
          },
        });

      if (confirmError) {
        setCartError(confirmError.message);
        setIsProcessing(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        // Save Payment Info to the Backend
        const payment = {
          email: user?.email,
          name: user?.displayName,
          date: new Date(),
          bookingsId: bookings.map((booking) => booking._id),
          price: totalPrice,
          transactionId: paymentIntent.id,
        };

        const res = await axiosPublic.post("/payments", payment);

        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error("Error during payment submission:", error);
      setCartError("An unexpected error occurred. Please try again.");
    } finally {
      setIsProcessing(false); // Stop processing
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
  <form onSubmit={handleSubmit} className="space-y-4">
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
      className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
    />
    <button
      type="submit"
      disabled={!stripe || !clientSecret || isProcessing}
      className={`w-full py-2 px-4 text-white rounded-lg shadow-md transition-all duration-300 ${
        isProcessing
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      }`}
    >
      {isProcessing ? "Processing..." : "Pay"}
    </button>
  </form>
  {cartError && <p className="mt-4 text-red-500 text-sm">{cartError}</p>}
  {transactionId && (
    <p className="mt-4 text-green-500 text-sm">
      Transaction ID: {transactionId}
    </p>
  )}
</div>

  );
};

export default CheckoutForm;
