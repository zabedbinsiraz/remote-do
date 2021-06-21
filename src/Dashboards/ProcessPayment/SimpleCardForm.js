import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';




const SimpleCardForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id, paymentMethod.type)
      console.log(paymentMethod)
    }
  };

  return (
    <div>
      <div >
        <form onSubmit={handleSubmit}>

          <div className="p-2 bg-light ">
          <CardElement options={{
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
          }} />
          </div>
        
          <div className="p-3 text-center">
          <button className="btn btn-primary text-white p-3" type="submit" disabled={!stripe}>
           Submit Order
            </button>
          </div>
        </form>
      </div>
      
      {
        paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
      }
    </div>
  );
};

export default SimpleCardForm;