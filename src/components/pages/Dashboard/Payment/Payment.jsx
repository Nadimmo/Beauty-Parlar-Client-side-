import React from 'react'
import CheckoutForm from './CheckoutForm'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51PZmx2Ro2enkpQYdZ3ZdtlrvB8ixKb9oW0nuhncTegOGpo2M4gnGqE1sgo9pppKCFZ9P8nDZHJgBdRjVat4qUnhm00jbkvAaV0');

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default Payment