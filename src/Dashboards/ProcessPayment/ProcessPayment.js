import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IhRtHEhcJYUvIMrjiMQWyEhbIQ7BYGn3yQo6dr2aTm8DKJw7UkynlnP9bbGxOOtevThEDMKL0T2hyHKb3RGPQSl00q3VPTzXP');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;